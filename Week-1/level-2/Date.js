const currDate = new Date();

console.log(currDate.getDate());
console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getHours());
console.log(currDate.getMinutes());
console.log(currDate.getSeconds());

/// how much time does it take to run a function

function Sum() {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  return sum;
}

const beforeTime = new Date();
const beforeTimeValue = beforeTime.getTime();
sum();
const afterTime = new Date();
const afterTimeValue = afterTime.getTime();

console.log(
  "Time elapse to run the function is : "(afterTimeValue - beforeTimeValue)
);

// make a clock
function getClock() {
  return new Date().getTime();
}
setInterval(getClock, 1000);

const str = '{"name": "siddhesh", "id":"123" }';
const str2 = JSON.parse(str);
const str3 = JSON.stringify(str2);
