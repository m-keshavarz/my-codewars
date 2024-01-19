function rgb(r, g, b) {
  for (let i = 0; i < 3; i++) {
    if (arguments[i] > 255) arguments[i] = 255;
    if (arguments[i] < 0) arguments[i] = 0;
  }
  return (
    r.toString(16).padStart(2, "0").toUpperCase() +
    g.toString(16).padStart(2, "0").toUpperCase() +
    b.toString(16).padStart(2, "0").toUpperCase()
  );
}

console.log(rgb(255, 255, -200));
