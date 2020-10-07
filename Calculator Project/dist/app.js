let input = document.querySelector('.input-cal'),
  addBtn = document.querySelector('.add-btn'),
  subBtn = document.querySelector('.sub-btn'),
  multBtn = document.querySelector('.mult-btn'),
  divBtn = document.querySelector('.div-btn'),
  equalBtn = document.querySelector('.equal-btn'),
  cardBody = document.querySelector('.card-body');

cardBody.addEventListener('click', (e) => {
  if (e.target.textContent == '1') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == '2') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == '3') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == '4') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == '5') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == '6') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == '7') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == '8') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == '9') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == '0') {
    input.value += e.target.textContent;
  } else if (e.target.textContent == 'C') {
    input.value = '';
  } else if (e.target.textContent == '.') {
    input.value += '.';
  }

  if (input.value.includes('+')) {
    return 0;
  } else {
    if (e.target.textContent == '+') {
      input.value += '+';
    }
  }
  if (input.value.includes('-')) {
    return 0;
  } else {
    if (e.target.textContent == '-') {
      input.value += '-';
    }
  }
  if (input.value.includes('x')) {
    return 0;
  } else {
    if (e.target.textContent == 'x') {
      input.value += '*';
    }
  }
  if (input.value.includes('÷')) {
    return 0;
  } else {
    if (e.target.textContent == '÷') {
      input.value += '/';
    }
  }
  e.preventDefault();
});

equalBtn.addEventListener('click', (e) => {
  //second part of number
  let data = input.value;
  let second = /(([\*?\-?\/?\+][0-9]{1,})?(.[0-9]{1,}))$/;
  let result = second.exec(data);
  let resultSecond = result[0];
  let resultSecond2 = resultSecond.slice(1);
  resultSecond2 = parseFloat(resultSecond2);

  //hema :*/+*
  let result2 = result[0];
  let ex = result2[0];
  //first part of number
  let first = parseFloat(input.value);

  //process
  if (ex == '+') {
    finalResult = first + resultSecond2;
    input.value = finalResult;
  } else if (ex == '/') {
    finalResult = first / resultSecond2;
    input.value = finalResult;
  } else if (ex == '*') {
    finalResult = first * resultSecond2;
    input.value = finalResult;
  } else if (ex == '-') {
    finalResult = first - resultSecond2;
    input.value = finalResult;
  }
  e.preventDefault();
});
