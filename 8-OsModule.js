const os = require('os');

// to get user info
const user = os.userInfo();
console.log(user);

// to get System uptime in seconds
console.log(`The system uptime in Seconds is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS);