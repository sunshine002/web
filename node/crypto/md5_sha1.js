/**
 * MD5和SHA1
 * MD5是一种常用的哈希算法，用于给任意数据一个“签名”。
 * 如果要计算SHA1，只需要把'md5'改成'sha1',还可以使用更安全的sha256和sha512
 */
const crypto = require('crypto');
const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');
console.log(hash.digest('hex'));
