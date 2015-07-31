### Quick-peek to Bluetooth Web API

**Warning:** The API is very experimental!

## Setup

* Get a platform which supports bluetooth API: https://github.com/WebBluetoothCG/web-bluetooth/blob/gh-pages/implementation-status.md

    It seemed like Chrome Canary had Bluetooth API on OS X but it didn't find
    devices.

    Chrome OS should work the best.

* You need to enable bluetooth from: chrome://flags/#enable-web-bluetooth
* Get a BLE Peripheral device, or run simulator: https://github.com/WebBluetoothCG/ble-test-peripheral-android


## Demo

Just go to: https://jsfiddle.net/xxdhsanz/4/

or

```bash
git clone https://github.com/kimmobrunfeldt/bluetooth-web-api.git
cd bluetooth-web-api
npm install
npm start & open http://localhost:8080
```
