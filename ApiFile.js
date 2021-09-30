let promiseFunction = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 5000);
  });
}

let f_ = promiseFunction();
f_.then(response => console.log(response));