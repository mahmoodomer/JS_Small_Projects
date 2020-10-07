//awana m7awalay xoma
// let watch = document.querySelector('#watch'),
//   time = document.querySelector('.time');
// btnStart = document.querySelector('.btn-start');
// btnStop = document.querySelector('.btn-stop');
// btnReset = document.querySelector('.btn-reset');

// let result;
// let semiResult;
// let finalResult;

// // watch.addEventListener('click', (e) => {
// //   var timer = setInterval(startTime, 100);
// //   function startTime() {
// //     result = new Date();
// //     // semiResult = result.getSeconds();
// //     finalResult = result.toLocaleTimeString();
// //     if (e.target.classList.contains('btn-start')) {
// //       time.innerHTML = finalResult;
// //     }
// //   }
// //   if (e.target.classList.contains('btn-stop')) {
// //     clearInterval(timer);
// //   }

// //   e.preventDefault();
// //   return timer;
// // });

// // function startTiming() {
// //   var timer = setInterval(startTime, 100);
// //   function startTime() {
// //     result = new Date();
// //     // semiResult = result.getSeconds();
// //     finalResult = result.toLocaleTimeString();
// //     time.innerHTML = finalResult;
// //   }
// //   return {
// //     timing1: function () {
// //       return timer;
// //     },
// //   };
// // }
// // let timer = startTiming.timing1();
// // function stopTiming() {
// //   clearInterval(timer);
// // }

// const startTiming1 = (function () {
//   var timer = setInterval(startTime, 100);
//   function startTime() {
//     result = new Date();
//     // semiResult = result.getSeconds();
//     finalResult = result.toLocaleTimeString();
//     time.innerHTML = finalResult;
//   }

//   return {
//     callStopTime: function () {
//       return timer;
//     },
//     callStartTime: function () {
//       startTime();
//     },
//   };
// })();

// function stopTiming() {
//   let timer = startTiming1.callStopTime();
//   clearInterval(timer);
// }

// function startTiming() {
//   startTiming1.callStartTime();
// }

window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var minutes = 00;
  var appendTens = document.getElementById('tens');
  var appendSeconds = document.getElementById('seconds');
  var appendMinutes = document.getElementById('minutes');
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    document.querySelector('.minutesShow').style.display = 'none';
    document.querySelector('.minutesShow1').style.display = 'none';
  };

  function startTimer() {
    tens++;
    appendTens.innerHTML = tens;
    if (tens < 9) {
      appendTens.innerHTML = '0' + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log('seconds');
      seconds++;
      appendSeconds.innerHTML = '0' + seconds;
      tens = 0;
      appendTens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      document.querySelector('.minutesShow').style.display = 'inline';
      document.querySelector('.minutesShow1').style.display = 'inline';
      minutes++;
      console.log('minutes');
      appendMinutes.innerHTML = '0' + minutes;
      seconds = 0;
      tens = 0;
      appendSeconds.innerHTML = '0' + seconds;
      appendTens.innerHTML = '0' + tens;
    }
    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
  }
};
