// make.fun coolest-art-01 entry
// Copies entry.png to MAKEFUN_OUTPUT_DIR (default /output)
import { copyFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const src = join(import.meta.dirname, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true }); // output dir is created if missing
copyFileSync(src, join(outDir, "entry.png"));
console.log(`Copied entry.png to ${resolve(outDir)}`);
