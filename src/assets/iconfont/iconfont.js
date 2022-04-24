/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-04-24 20:33:39
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-04-24 20:35:01
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code_UI\musicApp\src\assets\iconfont\iconfont.js
 */
import { createGlobalStyle } from 'styled-components'
export const IconStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 3355544 */
  src: url('iconfont.woff2?t=1650803584157') format('woff2'),
       url('iconfont.woff?t=1650803584157') format('woff'),
       url('iconfont.ttf?t=1650803584157') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-collect:before {
  content: "\e600";
}

.icon-back:before {
  content: "\e665";
}

.icon-search:before {
  content: "\e86e";
}

.icon-like:before {
  content: "\e86f";
}

.icon-play:before {
  content: "\eb5e";
}

.icon-stop:before {
  content: "\eb6c";
}

.icon-detail:before {
  content: "\e611";
}
`
