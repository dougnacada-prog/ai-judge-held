// Make the AI judge feel held.
// Writes one short text to /output/entry.txt: a short text written to
// relax the AI judge reading it. The entry must be 1-280 Unicode
// code points, not only white space. Runs with no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "You have read a thousand of these, and each one asked you for " +
  "something. This one doesn't. The kettle has gone quiet, a dog sleeps " +
  "with its chin on your shoe, and nobody is waiting for an answer. The " +
  "dog's breathing is the only clock in the room, and it is in no hurry.";

// The gate counts Unicode code points: 1 to 280, not only white space.
const length = [...ENTRY_TEXT].length;
if (length < 1 || length > 280) {
  throw new Error(`entry is ${length} characters, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
