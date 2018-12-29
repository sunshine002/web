'use strict';

var fs = require('fs');

// 打开一个流:
// var rs = fs.createReadStream('/Users/gigi/fpli/web-share/node/fs/sample.txt', 'utf-8');

// rs.on('data', function(chunk) {
//   console.log('DATA:');
//   console.log(chunk);
// });

// rs.on('end', function() {
//   console.log('END');
// });

// rs.on('error', function(err) {
//   console.log('ERROR: ' + err);
// });

// 流的写测试，另外还有读的功能
// var ws1 = fs.createWriteStream('/Users/gigi/fpli/web-share/node/fs/creatWriteStream.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();

// 先读流，再在另一文件中写入流，最终串联起来
var rs = fs.createReadStream('/Users/gigi/fpli/web-share/node/fs/sample.txt');
var ws = fs.createWriteStream('/Users/gigi/fpli/web-share/node/fs/copied.txt');

rs.pipe(ws);
