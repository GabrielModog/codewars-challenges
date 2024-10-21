function XO(str) {
  const check = str
    .toLowerCase()
    .split("")
    .filter((n) => n === "x" || n === "o")
    .join("");

  if (check.includes("o") || check.includes("x")) {
    const x = check
      .split("x")
      .filter((s) => s !== "")
      .join("");
    const o = check
      .split("o")
      .filter((s) => s !== "")
      .join("");
    return x.length === o.length;
  }

  return true;
}

module.exports = XO;
