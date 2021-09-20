// const randomLetter = () =>
//   "abcdefghijklmnopqrstuvwxyz".split("")[Math.floor(Math.random() * 26)];

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const randomWord = (n) => {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += letters[Math.floor(Math.random() * letters.length)];
  }
  return res;
};

export default function createJSONTree(n, m) {
  const res = [];
  if (n <= 0) return res;
  for (let i = 0; i < m; i++) {
    if (n === 1) {
      res.push({
        name: randomWord(6),
      });
    } else {
      res.push({
        name: randomWord(6),
        children: createJSONTree(n - 1, m),
      });
    }
  }
  return res;
}
