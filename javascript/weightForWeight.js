const orderWeight = (str) => {
  const splitted = str.split(" ").filter((item) => item !== "");
  return splitted
    .sort((a, b) => {
      const aCalc = a.split("").reduce((c, d) => +c + +d, 0);
      const bCalc = b.split("").reduce((c, d) => +c + +d, 0);

      return aCalc === bCalc ? a.localeCompare(b) : aCalc - bCalc;
    })
    .join(" ");
};

console.log(orderWeight("103 123 4444 99 2000")); // --> '0 100 110 12 9 180 90'
