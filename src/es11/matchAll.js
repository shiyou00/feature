const string = 'test1test2test3';
const regex = /t(e)(st(\d?))/g;

for (const match of string.matchAll(regex)) {
  console.log(match);
}
// ["test1", "e", "st1", "1", index: 0, input: "test1test2test3", groups: undefined]
// ["test2", "e", "st2", "2", index: 5, input: "test1test2test3", groups: undefined]
// ["test3", "e", "st3", "3", index: 10, input: "test1test2test3", groups: undefined]
