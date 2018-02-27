exports.hello = nickname => ({
  hello: nickname,
});

exports.test = credential => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ ok: 1 });
  }, 2000);
});

exports.sortIntegers = integers => new Promise((resolve) => {
  setTimeout(() => {
    const data = integers.sort((a, b) => b - a);
    resolve(data);
  }, 2000);
});
