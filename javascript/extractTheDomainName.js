const domainName = (url) => {
  let splitted = [];
  if (url.includes("//")) {
    splitted = url.split("//")[1].split(".");
  } else {
    splitted = url.split(".");
  }
  return splitted[0] === "www" ? splitted[1] : splitted[0];
};

console.log(domainName("https://youtube.com"));
