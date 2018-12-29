/* eslint-disable one-var */
/**
 *
 * RSA
 * RSA算法是一种非对称加密算法，即由一个私钥和一个公钥构成的密钥对，通过私钥加密，公钥解密，或者通过公钥加密，私钥解密。其中，公钥可以公开，私钥必须保密。
 *
 * 当小明给小红发送信息时，可以用小明自己的私钥加密，小红用小明的公钥解密，也可以用小红的公钥加密，小红用她自己的私钥解密，这就是非对称加密。相比对称加密，非对称加密只需要每个人各自持有自己的私钥，同时公开自己的公钥，不需要像AES那样由两个人共享同一个密钥。
 * 在使用Node进行RSA加密前，我们先要准备好私钥和公钥。
 *
 * 注：以下顺序执行以下三个命令，依次生成密钥对，原始私钥，原始公钥
 * openssl genrsa -aes256 -out node/crypto/rsa/rsa-key.pem 2048   // 生成密钥对
 * openssl rsa -in node/crypto/rsa/rsa-key.pem -outform PEM -out node/crypto/rsa/rsa-prv.pem   // 导出原始的私钥
 * openssl rsa -in node/crypto/rsa/rsa-key.pem -outform PEM -pubout -out node/crypto/rsa/rsa-pub.pem // 导出原始的公钥
 */
const
  fs = require('fs'),
  crypto = require('crypto');

function loadKey(file) {
  return fs.readFileSync(file, 'utf8');
}

let
  prvKey = loadKey('./rsa-prv.pem'),
  pubKey = loadKey('./rsa-pub.pem'),
  message = 'Hello, world!';

// encrypt by private key, then decrypt by public key:
let enc_by_prv = crypto.privateEncrypt(prvKey, Buffer.from(message, 'utf8'));
console.log('encrypted by private key: ' + enc_by_prv.toString('hex'));

let dec_by_pub = crypto.publicDecrypt(pubKey, enc_by_prv);
console.log('decrypted by public key: ' + dec_by_pub.toString('utf8'));

// encrypt by public key, then decrypt by private key:
let enc_by_pub = crypto.publicEncrypt(pubKey, Buffer.from(message, 'utf8'));
console.log('encrypted by public key: ' + enc_by_pub.toString('hex'));

let dec_by_prv = crypto.privateDecrypt(prvKey, enc_by_pub);
console.log('decrypted by private key: ' + dec_by_prv.toString('utf8'));
