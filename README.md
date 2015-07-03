## milkcocoa to Slack for Node.js

## slack setting
* use `Incoming WebHooks` integration
![](http://i.gyazo.com/0deef5ae2dfcfcf2486a7a83477bb6aa.png)

## install

```
$ git clone git@github.com:cncgl/mc2slack.git
$ cd mc2slack
$ npm i
$ touch config.js
```

### config.js

```config.js
module.exports = {
  appid : 'milkcocoa your app id',
  ds : 'milkcocoa your datastore name',
  slack :{
    url : 'slack Incoming WebHooks URL',
    channel : '#general',
    username : 'message-bot'
  }
};
```

## use

```
$ node app
```
