import fs from "node:fs";

console.log("Execute este SQL no Neon:");
console.log("\n--- schema.sql ---\n");
console.log(fs.readFileSync("sql/schema.sql", "utf8"));
console.log("\n--- seed.sql ---\n");
console.log(fs.readFileSync("sql/seed.sql", "utf8"));
