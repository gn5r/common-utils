let ArrayUtil = {};

/**
 * 配列をカンマ区切りの文字列へ変換する
 * 
 * lengthが0の場合はブランクを返却する
 * 
 * @param {Array} args 変換元配列
 * 
 * @returns {String} カンマ区切りの文字列
 */
ArrayUtil.toStringWithComma = (args) => {
    if (isArray(args)) {
        if (args.length === 0) return "";

        let str = "";

        args.forEach(value => {
            str += `${value},`
        })
        // 末尾のカンマを消して返却
        return str.replace(/,$/,'');
    } else {
        throw new Error("引数が配列ではありません");
    }
}

/**
 * 配列を文字列へ変換する(改行、カンマ区切り無し)
 * 
 * lengthが0の場合はブランクを返却する
 * 
 * @param {Array} args 変換元配列
 * 
 * @returns {String} 文字列
 */
ArrayUtil.toString = (args) => {
    if (isArray(args)) {
        if (args.length === 0) return "";

        let str = "";

        args.forEach(value => {
            str += value;
        })

        return str;
    } else {
        throw new Error("引数が配列ではありません");
    }
}

/**
 * オブジェクトが配列かどうかチェックする
 * @param {Array} args 検査対象
 * 
 * @returns {Boolean} 配列であればtrueを、それ以外はfalseを返却する
 */
function isArray(args) {
    return Array.isArray(args);
}

module.exports = ArrayUtil;