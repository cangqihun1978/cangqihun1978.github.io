藏器魂V1.0·最终版 部署说明
═══════════════════════════

一、文件说明
- index.html          : 主程序（WASM密钥派生 + AES加密）
- demo.html           : 记忆演示页
- wasm/               : WASM模块目录
  ├─ key_derive.cpp   : C++源码（需编译为wasm）
  ├─ key_derive.js    : WASM加载器
  └─ key_derive.wasm  : （编译后生成，见步骤二）
- 传承文档.txt        : 密钥档案（请转为PDF加密）

二、WASM编译步骤（需安装Emscripten）

1. 安装Emscripten SDK（如已安装可跳过）：
   https://emscripten.org/docs/getting_started/downloads.html

2. 在命令行中进入 wasm 目录，执行：
   emcc key_derive.cpp -o key_derive.wasm -s WASM=1 -s EXPORTED_FUNCTIONS='["_deriveKey","_logMessage"]' -s IMPORTED_FUNCTIONS='["consoleLog"]' --no-entry

3. 编译成功后，会在当前目录生成 key_derive.wasm 文件。

   若您不想安装Emscripten，也可使用在线编译器（如 https://wasdk.github.io/wasmcodeexplorer/ ）或请他人代为编译。

三、部署到GitHub Pages

1. 在GitHub上新建一个仓库（例如 cangqihun）。
2. 将所有文件（包括编译后的 wasm）上传到仓库。
3. 进入仓库设置，找到 Pages 选项，选择 main 分支，保存。
4. 稍等几分钟，即可通过 https://您的用户名.github.io/cangqihun/index.html 访问。

四、本地测试

可直接在浏览器中打开 index.html 和 demo.html 进行测试（部分浏览器可能需要本地服务器，如使用 VSCode Live Server）。

五、传承文档处理

将传承文档.txt 内容复制到 Word，导出为 PDF，并设置打开密码（建议使用强密码，并与13字分开保管）。

六、最终验证

1. 打开 index.html，输入任意密钥字（如“卷”），应显示“解锁成功”。
2. 打开 demo.html，输入偏好并生成，关闭页面再打开，应自动显示上次偏好。

如遇问题，请反馈至当前窗口。