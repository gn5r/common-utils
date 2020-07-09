const StringUtil = require('./src/StringUtil').StringUtil;

const str = 'abcdefg';

const regex = StringUtil.substring(str,'bcdp');

const empty = StringUtil.isEmpty(regex)

console.log(str,regex,empty,StringUtil.toString(regex,"空です"));