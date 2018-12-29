/**
 * test node 中的 fs 模块
 * Node.js内置的fs模块就是文件系统模块，负责读写文件
 */

const fs = require('fs');

/**
 * 异步读文件
 * 注意此处发现写相对目录不可以，只能写绝对路径，window系统未验证
 */
// fs.readFile('/Users/gigi/fpli/web-share/node/fs/sample.txt', '', function(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

/**
 * 异步读图片
 */
// fs.readFile('/Users/gigi/fpli/web-share/node/fs/sample.png', function(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     console.log(data.length + ' bytes');
//   }
// });

/**
 * 同步读图片 readFileSync
 */
// var data = fs.readFileSync('/Users/gigi/fpli/web-share/node/fs/sample.png');
// console.log(data);
// console.log(data.length + ' bytes');

/**
 * buffer的应用：nodejs提供了一个Buffer对象来提供对二进制数据的操作，可存储二进制数据
 * buffer与string的相互转换应用
 */
// Buffer -> String
// var text = data.toString('utf-8');
// console.log(text);

// String -> Buffer
// var buf = new Buffer(text, 'utf-8');
// console.log(buf);

/**
 * stat:获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息
 */
fs.stat('/Users/gigi/fpli/web-share/node/fs/sample.txt', function(err, stat) {
  if (err) {
    console.log(err);
  } else {
    // 是否是文件:
    console.log('isFile: ' + stat.isFile());
    // 是否是目录:
    console.log('isDirectory: ' + stat.isDirectory());
    if (stat.isFile()) {
      // 文件大小:
      console.log('size: ' + stat.size);
      // 创建时间, Date对象:
      console.log('birth time: ' + stat.birthtime);
      // 修改时间, Date对象:
      console.log('modified time: ' + stat.mtime);
    }
  }
});

