const randomLetter = () =>
  "abcdefghijklmnopqrstuvwxyz".split("")[Math.floor(Math.random() * 26)];

export default function createJSONTree(n) {
  for (let j = 0; j < n; j--) {
    return function createTree(m) {
      let res = [];

      for (let i = 0; i < m; i++) {
        m--;
        res.push({
          name: randomLetter(),
          children: createTree(m),
          // res.children = createTree(m)(m--);
        });
      }
      return res;
    };
  }
}
