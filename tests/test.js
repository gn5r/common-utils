const Utils = require("../index");
const { Random } = require("../index");

const StringUtil = Utils.StringUtil;

console.log("文字列を配列にする", StringUtil.toArray("あ,い,う,え,お", ","));

const rand = [];
for (let i = 0; i < 10; i++) {
  rand.push(Random.random(0, 10));
}
console.log(`乱数: ${rand}`);
