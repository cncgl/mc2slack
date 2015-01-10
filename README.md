## milkcocoa to Slack for Node.js

## slack setting
* use `Incoming WebHooks` integration
![](http://i.gyazo.com/0deef5ae2dfcfcf2486a7a83477bb6aa.png)

## install

```
$ git clone
$ cd mc2slack
$ npm i git@github.com:n0bisuke/mc2slack.git
$ touch config.js
```

### config.js

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

## use

```
$ node app
```
