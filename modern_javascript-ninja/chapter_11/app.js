// dates and time
const now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times
console.log("getFullYear", now.getFullYear());
console.log("getMonth", now.getMonth());
console.log("getDate", now.getDate());
console.log("getDay", now.getDay());
console.log("getHours", now.getHours());
console.log("getMinutes", now.getMinutes());
console.log("getSeconds", now.getSeconds());

// timestamp
console.log(now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// timestamp comparisons
const before = new Date("February 1 2019 7:30:59");

console.log(now.getTime(), before);
const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins);
console.log(hours);
console.log(days);

const timestamp = 1675938474660;
console.log(new Date(timestamp));

const clock = document.querySelector(".clock");

const tick = () => {
  const time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();

  const html = `
  <span>${h}</span> : 
    <span>${m}</span> :   
      <span>${s}</span>  
  `;
  clock.innerHTML = html;
};

setInterval(tick, 1000);

// DATE FNS
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "dddd Do MMMM YYYY"));

const past = new Date("February 1 2019 12:00:00");
console.log(dateFns.distanceInWords(now, past));
