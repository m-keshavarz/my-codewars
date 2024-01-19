function pigIt(str) {
  return str
    .split(" ")
    .map((item) => {
      if ('!?.,'.includes(item)) {
        return item;
      }
      const splitted = item.split("");
      splitted.push(item[0] + "ay");
      splitted.shift();
      return splitted.join("");
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool !"));
