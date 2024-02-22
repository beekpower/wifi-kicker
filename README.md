# wifi-kicker
Simplest ARP WiFi Kicker Ever

# Usage

```
Usage: sudo node index.js -i <interface> -g <gateway ip> -t <target ip> -p <interval>

Options:
  -i                    interface
  -g                    gateway ip
  -t                    target ip
  -p                    number of ms between sending ARP packets

Examples:
  sudo node index.js -i wlp0s20f3 -g 192.168.4.1 -t 192.168.4.28 -p 500
```