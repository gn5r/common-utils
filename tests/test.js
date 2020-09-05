const Utils = require('../index');

const StringUtil = Utils.StringUtil;

const txt = 'abcdefg';

const regex = StringUtil.substring(txt, 'bcdp');

const empty = StringUtil.isNull(regex)

console.log(txt, regex, empty, StringUtil.defaultString(regex, "空です"));

const source = "あいうえお,かきくけこ,さしすせそ,たちつてと"

const array = StringUtil.toArray(source, ",");
console.log("toArray", array);

// const ArrayUtil = Utils.ArrayUtil;

// const test = ["あ", "い", "う", "え", "お"];

// const str = ArrayUtil.toString(test);
// const strComma = ArrayUtil.toStringWithComma(test)

// console.log("toString:", str, "withComma:", strComma);

const DateUtils = Utils.DateUtil;
const now = DateUtils.now();
console.log(`今日: ${now}`)

const Random = Utils.Random;
const num = Random.random(1,10);
console.log(`乱数: ${num}`)