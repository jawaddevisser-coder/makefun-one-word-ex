import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "exhausting";

// Self-check: the sealed gate wants 1-24 chars, one word, not only whitespace.
if (LINE.length === 0 || LINE.length > 24 || LINE.trim() !== LINE || LINE.includes(" ") || LINE.includes("\n")) {
  throw new Error(`line must be one word of 1-24 chars (got ${LINE.length})`);
}

// Thematic guard: the ex's word must sting — it has to end in the tired
// suffix of every long relationship post-mortem.
if (!LINE.endsWith("ing")) {
  throw new Error("word must sting like a present participle");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
