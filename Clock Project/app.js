function clock() {
  const hourse = document.getElementById('hourse');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const state = document.getElementById('state');

  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let session = 'AM';

  if (h == 00) {
    h = 12;
  }
  if (h >= 12) {
    session = 'PM';
  }
  if (h > 12) {
    h = h - 12;
  }
  h < 10 ? (h = '0' + h) : (h = h);
  m < 10 ? (m = '0' + m) : (m = m);
  s < 10 ? (s = '0' + s) : (s = s);

  hourse.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  state.innerHTML = session;
  setTimeout(clock, 1000);
}
clock();
