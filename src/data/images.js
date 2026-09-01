const hsnlModules = import.meta.glob("../assets/pdf_pages/hsnl-*.jpg", {
  eager: true,
  import: "default",
});
const anphuModules = import.meta.glob("../assets/pdf_pages/anphu-*.jpg", {
  eager: true,
  import: "default",
});
const licenseModules = import.meta.glob("../assets/licenses/*.jpg", {
  eager: true,
  import: "default",
});

function toMap(modules) {
  const map = {};
  for (const path in modules) {
    const name = path.split("/").pop().replace(/\.[^.]+$/, "");
    map[name] = modules[path];
  }
  return map;
}

export const hsnl = toMap(hsnlModules);
export const anphu = toMap(anphuModules);
export const licenses = toMap(licenseModules);
