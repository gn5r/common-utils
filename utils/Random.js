let Random = {};

/**
 * 指定した範囲の乱数を生成する
 *
 * デフォルトは0～100
 *
 * @param {Number} start 開始
 * @param {Number} end 終了
 *
 * @returns {Number} 指定した範囲内の乱数
 */
Random.random = (start = 0, end = 100) => {
  return Math.round(Math.random() * (end - start)) + start;
};

module.exports = Random;
