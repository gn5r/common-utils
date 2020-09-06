# common-utils

Util をまとめたパッケージ

# 使い方

1. プロジェクトの.npmrc に registry を追記する

   - `echo registry=https://npm.pkg.github.com/gn5r >> .npmrc`

2. インストール

   - `npm i @gn5r/common-utils`

3. 呼び出し方

   ```sample.js:js

   const Utils = require("@gn5r/common-utils")
   const StringUtil = Utils.StringUtil;
   console.log("nullチェック", StringUtil.isNull("abc"));

   or

   import { StringUtil } from "@gn5r/common-utils";
   console.log("文字列を配列にする", StringUtil.toArray("あ,い,う,え,お", ","));

   ```

# 各 Utils オブジェクトについて

## ArrayUtils

## DateUtils

## StringUtils

## Random
