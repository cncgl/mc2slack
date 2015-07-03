## milkcocoa to Slack for Node.js

original https://github.com/n0bisuke/mc2slack

## slack setting
* use `Incoming WebHooks` integration
![](https://drive.google.com/uc?exoirt=view&id=0BxX1sdAOmTicdmplOVN0bWtON1U)

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
