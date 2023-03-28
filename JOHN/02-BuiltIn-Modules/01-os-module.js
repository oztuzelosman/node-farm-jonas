// if this section was like : 'const os = require("os")'
//then we would use methods with dots
// for ex const userProp = os.userInfo()
// or os.uptime()
const { userInfo, uptime, type, release, totalmem, freemem } = require("os");

//info about user
const userProp = userInfo();
console.log(userProp);

//info about system uptime

console.log(`system is up and working for ${Math.round(uptime())}`);

//current

const currentOs = {
  name: type(),
  release: release(),
  totalmem: totalmem(),
  freemem: freemem(),
};

console.log(currentOs);
