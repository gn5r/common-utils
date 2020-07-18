const moment = require('moment');

let DateUtil = {};

/**
 * momentを利用した日付変換
 * 
 * 変換元の日付がブランクやNullである場合、ブランクを返却する
 * 
 * デフォルトは YYYY/MM/DD に変換する
 * @param {Date | String} source 変換元日付
 * @param {String} format フォーマット(詳しくはmomentのフォーマットを参照)
 * 
 * @return {String} 指定フォーマットに変換した日付
 */
DateUtil.format = (source = Date | String, format = "YYYY/MM/DD") => {
    if (!source) return "";
    return moment(new Date(source)).format(format);
}

module.exports = DateUtil;