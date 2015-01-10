## milkcocoa to Slack for Node.js

## slack

* use `Incoming WebHooks` integration

## install

```
$ git clone
$ cd mc2slack
$ npm i
$ touch config.js
```

```config.js
module.exports = {
  appid : 'milkcocoa your app id',
  ds : 'milkcocoa your datastore name',
  slack :{
    url : 'slack Incoming WebHooks URL',
    channel : '#general', //your channel name
    username : 'n0bisuke' //your bot name
  }
};
```
