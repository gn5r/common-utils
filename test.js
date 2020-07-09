const Utils = require('./index');

const StringUtil = Utils.StringUtil;

const txt = 'abcdefg';

const regex = StringUtil.substring(txt, 'bcdp');

const empty = StringUtil.isEmpty(regex)

console.log(txt, regex, empty, StringUtil.toString(regex, "空です"));

const ArrayUtil = Utils.ArrayUtil;

const test = ["あ", "い", "う", "え", "お"];

const str = ArrayUtil.toString(test);
const strComma = ArrayUtil.toStringWithComma(test)

console.log("toString:", str, "withComma:", strComma);