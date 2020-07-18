const encoding = require('encoding-japanese');

let StringUtil = {};

/**
 * 正規表現による文字列の切り取り
 * @param {String} source 切り取り元文字列
 * @param {String} regex 正規表現
 * 
 * @returns {String} 正規表現にマッチした文字列(マッチしなければnullを返却)
 */
StringUtil.substring = (source = String, regex = String) => {
    const str = source.match(regex);
    return str === null ? null : str.toString();
}

/**
 * 指定された文字列がNullまたは空であるかチェック
 * @param {String} source 検証文字列
 * 
 * @returns {Boolean} 空文字であればtrueを、それ以外の場合はfalseを返却
 */
StringUtil.isEmpty = (source = String) => {
    if (source === null || source.length === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * 指定された文字列がNullまたはundefinedであるかチェック
 * @param {String} source 検証文字列
 * 
 * @returns {Boolean} Nullまたはundefinedであればtrueを、それ以外の場合はfalseを返却
 */
StringUtil.isNull = (source = String) => {
    return !source ? true : false;
}

/**
 * 指定された文字列がNullだった場合にブランク文字を返却
 * @param {String} source 文字列
 * 
 * @returns {String} Nullであればブランクを、Nullでなければそのまま返却
 */
StringUtil.nullToBlank = (source = String) => {
    return source === null ? "" : source;
}

/**
 * 最初の引数である文字列がNullまたは0文字の場合に2番目の引数を返却、それ以外の場合は最初の引数をそのまま返却
 * @param {String} source 対象文字列
 * @param {String} nullDefault 変換文字列
 * 
 * @returns {String} 対象文字列または変換文字列
 */
StringUtil.defaultString = (source = String, nullDefault = String) => {
    if (source === null || source.length === 0) {
        return nullDefault;
    } else {
        return source;
    }
}

/**
 * UTF8文字列をShift-JIS文字列へ変換する
 * @param {String} utf8String UTF8文字列
 * 
 * @returns {String} Shift-JIS文字列
 */
StringUtil.toShiftJIS = (utf8String = String) => {
    const detected = encoding.detect(utf8String)
    const unicodeList = []

    for (let i = 0; i < utf8String.length; i += 1) {
        unicodeList.push(utf8String.charCodeAt(i))
    }

    const sjisArray = encoding.convert(unicodeList, {
        to: 'SJIS',
        from: detected
    })
    return Array.from(new Uint8Array(sjisArray)).toString();
}

/**
 * 指定した文字列を、第2引数で指定した区切り文字で分割し配列に変換する
 * @param {String} source 文字列
 * @param {String} regex 区切り文字
 * 
 * @return {Array} String配列
 */
StringUtil.toArray = (source = String, regex = String) => {
    if (source === null || source.length === 0) return [];
    return source.split(regex);
}

module.exports = StringUtil;