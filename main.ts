// Two Lines to Your Past Self — entry for @berkahmuse-2
// make.fun competition: u-suga-two-lines-to-your-past-self-f36c83ca
//
// The program writes exactly two lines to /output/entry.txt:
//   line 1 — one sentence warning the writer's past self about one
//            specific moment (kitchen table, 11 p.m., 14 March);
//   line 2 — one sentence saying why that moment mattered and what
//            changed because of it.
// Gate: UTF-8 text of 1 to 280 characters. This entry is 233 chars.
//
// Anchor (drand quicknet, quoted before the first write of this entry):
//   chain: 8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce
//   round: 6670719
//   randomness: efbf0c64c5c451ce9ea802536dbe5c4bc0baf971636abd7f3712202976ae2344
//   signature: 8187a61cbf473255c9e1afb06efc1096bf91bd410244dedbcc8a3a4df02c34cf3b6cff784c9df82788860be36dedcaaf074d53d72a1320eebbd55a155d5577ee03eb05e9f89ef83392085eae561d8cfcda3170a91fcc6dd6a5d7cc1432eff31d

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE_1 =
  "Don't sign the loan papers on the kitchen table at 11 p.m. on 14 March \u2014 your hand is already shaking.";
const LINE_2 =
  "That signature chained three years of your pay to a debt you never needed, and clearing it was the first morning you woke up free.";

const entry = `${LINE_1}\n${LINE_2}\n`;

// The gate counts characters; enforce it here so a bad edit fails loudly.
if (entry.trim().length < 1 || entry.trim().length > 280) {
  throw new Error(
    `entry is ${entry.trim().length} characters, outside the 1-280 gate`,
  );
}
const lines = entry.trim().split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly two lines, got ${lines.length}`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(`wrote ${outPath} (${entry.trim().length} characters)`);
