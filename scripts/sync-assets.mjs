import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "hema-street-ui-v2-assets");
const target = path.join(root, "public", "hema-street-ui-v2-assets");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return false;
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
  return true;
}

const ok = copyDir(source, target);

if (ok) {
  console.log("Assets sincronizados: hema-street-ui-v2-assets -> public/hema-street-ui-v2-assets");
} else {
  console.log("Pasta hema-street-ui-v2-assets não encontrada na raiz. Mantendo assets já existentes em public.");
}
