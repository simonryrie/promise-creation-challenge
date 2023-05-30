const fs = require("node:fs");
const { readFile } = require('node:fs');

function readFilePromise(filePath) {
  const promise = new Promise ((resolve, reject) => {
  readFile(filePath, "utf8", (err, data) => {
    if(err) {
      reject(err);
    };
    resolve(data);
  })})
  return promise
}

module.exports = { readFilePromise };
