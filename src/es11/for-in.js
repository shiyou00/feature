const sa = Symbol("a");

const obj = {
  a:1,
  b:2,
  [sa]:3
}

for(let o in obj){
  console.log(o);
}
