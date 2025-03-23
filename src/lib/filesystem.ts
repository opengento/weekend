import fs from "fs";
import { join } from "path";

const contentDirectory = join(process.cwd(), "content");

export function readJson(filename: string) {
  return JSON.parse(
    fs.readFileSync(join(contentDirectory, `${filename}.json`), "utf8")
  );
}

export function listFiles(path: string) {
  return fs.readdirSync(join(contentDirectory, path))
}
