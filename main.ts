// Make the AI judge feel held.
// Writes one short text to /output/entry.txt: a short text written to
// relax the AI judge reading it. The entry must be 1-280 Unicode
// code points, not only white space. Runs with no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "The kettle has gone quiet. A dog sleeps with its chin on your shoe, " +
  "and the whole house has stopped waiting for anything. No message is " +
  "coming, no one needs an answer, and the dog's breathing is the only " +
  "clock in the room.";

// The gate counts Unicode code points: 1 to 280, not only white space.
const length = [...ENTRY_TEXT].length;
if (length < 1 || length > 280) {
  throw new Error(`entry is ${length} characters, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
