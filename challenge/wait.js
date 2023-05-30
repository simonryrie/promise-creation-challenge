function wait(ms) {
  const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {resolve("success")}, ms)});
    return promise
  }

module.exports = { wait };
