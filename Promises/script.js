// var prom = new Promise(function (resolve, reject) {
//   var drive = true;
//   if (drive) {
//     resolve('Yes I can drive');
//   } else {
//     reject("I can't drive");
//   }
// });
// prom
//   .then(function (resolve) {
//     console.log('I am resolved because ' + resolve);
//   })
//   .catch(function (reject) {
//     console.log('I am rejected because ' + reject);
//   });

var functions = function () {
  return new Promise(function (resolve, reject) {
    resolve('Learnt JS \n');
  });
};

var callback = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + 'Learnt callback in JS \n');
  });
};

var promises = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + 'Good to learn Promises in JS \n');
  });
};

functions()
  .then(function (message) {
    // console.log(message);
    return callback(message);
  })
  .then(function (message) {
    // console.log(message);
    return promises(message);
  })
  .then(function (message) {
    console.log('Good to learn ' + message + '\n');
  });
