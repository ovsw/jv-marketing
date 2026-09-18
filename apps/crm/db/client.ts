import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { databaseUrl, previewDatabaseUrl } from "../lib/crm/policy";

export function database() {
  return drizzle(neon(databaseUrl()));
}

export function previewDatabase() {
  return drizzle(neon(previewDatabaseUrl()));
}
