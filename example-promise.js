// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philippines', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else{
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve(79);
//     reject('City not found');
//   }, 1000);
//   });
// }
//
// getTempPromise('Philippines').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })


function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & b need to be numbers');
    }
  });
}

addPromise(2, 3).them(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise('honey', 9).then(function (sum) {
    console.log('this shoud not show up');
  }, function (err) {
    console.log('This should appear', err);
});
