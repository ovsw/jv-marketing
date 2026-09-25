# The Worker has no runtime dependencies; Node runs the TypeScript sources
# directly (type stripping). Image pinned by digest.
FROM node:24-alpine@sha256:ebfe2f90462722a7a4de65e91990e97fe0d401c70e0e762c5b53302f905ec1c1

WORKDIR /app
COPY package.json ./
COPY src ./src
USER node
CMD ["node", "src/main.ts"]
