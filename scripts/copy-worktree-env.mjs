import {
  constants,
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  realpathSync,
} from "node:fs";
import { dirname, resolve } from "node:path";

const envFiles = [
  { path: "apps/phx-website/.env.local", legacyPath: "frontend/.env.local" },
  { path: "apps/phx-studio/.env", legacyPath: "studio/.env" },
  { path: "apps/phx-studio/.env.local", legacyPath: "studio/.env.local", optional: true },
  { path: "apps/crm/.env.local", optional: true },
];
const sourceArgument = process.argv[2] ?? process.env.T3CODE_PROJECT_ROOT;

if (!sourceArgument) {
  console.error(
    "Missing source checkout. Set T3CODE_PROJECT_ROOT or pass its path as the first argument.",
  );
  process.exit(1);
}

const destinationRoot = realpathSync(process.cwd());
let sourceRoot;
try {
  sourceRoot = realpathSync(sourceArgument);
} catch (error) {
  console.error(`Could not resolve the source checkout ${sourceArgument}: ${error.message}`);
  process.exit(1);
}

if (sourceRoot === destinationRoot) {
  console.error("The source checkout and destination worktree must be different directories.");
  process.exit(1);
}

// Resolve and check all files before copying. Git does not move ignored env
// files when a checkout receives the monorepo directory changes.
const files = envFiles.map(({ path, legacyPath, optional }) => {
  const destinationPath = resolve(destinationRoot, path);
  const currentSource = resolve(sourceRoot, path);
  const sourcePath = !existsSync(currentSource) && legacyPath
    ? resolve(sourceRoot, legacyPath)
    : currentSource;
  return { path, sourcePath, destinationPath, optional };
});
const missingSources = files.filter(({ sourcePath, destinationPath, optional }) =>
  !existsSync(destinationPath) &&
  (!existsSync(sourcePath) ? !optional : !lstatSync(sourcePath).isFile()),
);

if (missingSources.length > 0) {
  for (const { sourcePath } of missingSources) {
    console.error(`Missing source file: ${sourcePath}`);
  }
  process.exit(1);
}

for (const { path, sourcePath, destinationPath } of files) {
  if (existsSync(destinationPath)) {
    console.log(`Skipped existing file: ${path}`);
    continue;
  }

  if (!existsSync(sourcePath)) {
    console.log(`Skipped optional source file: ${path}`);
    continue;
  }

  mkdirSync(dirname(destinationPath), { recursive: true });
  copyFileSync(sourcePath, destinationPath, constants.COPYFILE_EXCL);
  console.log(`Copied ${path}`);
}
