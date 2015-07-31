### Quick-peek to Bluetooth Web API

**Warning:** The API is very experimental!

Living spec: https://webbluetoothcg.github.io/web-bluetooth/

## Setup

* Get a platform which supports bluetooth API: https://github.com/WebBluetoothCG/web-bluetooth/blob/gh-pages/implementation-status.md

    It seemed like Chrome Canary had Bluetooth API on OS X but it didn't find
    devices.

    Chrome OS should work the best.

* You need to enable bluetooth from: chrome://flags/#enable-web-bluetooth
* Get a BLE Peripheral device, or run simulator: https://github.com/WebBluetoothCG/ble-test-peripheral-android


## Quick intro

* This is what I got out: targeted for BTE devices such as heart rate sensors etc.

    Possible use cases:

    * Heart rate monitor page
    * Fitbit integration without installing apps
    * Connecting to beacons via web apps

        There was a note:

        > Likely unsupported initially because of the privacy risks of granting access to a class of devices.


* HTTPS only
* There are security issues

    For example: what if web site connects to keyboard and starts logging keystrokes

    Many Bluetooth devices has been designed so that they trust the users
    with web apps, this constraint is not true.

    > A website tracks a user across cookie reset using Bluetooth device IDs

    > A website the user didn't expect gets access to personal data

    They have [black listed](https://github.com/WebBluetoothCG/registries/blob/master/gatt_blacklist.txt)
    some devices

* Bluetooth API needs user interaction, like location API


## Demo

Just go to: https://jsfiddle.net/xxdhsanz/4/

**or**

```bash
git clone https://github.com/kimmobrunfeldt/bluetooth-web-api.git
cd bluetooth-web-api
npm install
npm start & open http://localhost:8080
```

Open console to see anything.


**or**

see the demo at https://www.w3.org/community/web-bluetooth/2015/01/07/first-chromium-demo/