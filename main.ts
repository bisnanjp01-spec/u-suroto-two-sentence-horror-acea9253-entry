// Two-Sentence Horror — make.fun entry u-suroto-two-sentence-horror-acea9253.
// The program writes exactly one horror story, in exactly two sentences,
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt). No network,
// no randomness, no clock: two runs produce byte-identical output.
// The gate allows 1 to 400 characters of UTF-8 text; this story is 144.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "Every night I lock the front door twice, the way my father taught me, " +
  "and every morning I find both locks undone. " +
  "This morning there were three.";

const sentences = STORY.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 2) throw new Error(`expected 2 sentences, got ${sentences.length}`);
if (STORY.length < 1 || STORY.length > 400) throw new Error(`story length ${STORY.length} outside 1-400`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
