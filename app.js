var config    = require('./config');
var request   = require('request');
var MilkCocoa = require('milkcocoa');
var milkcocoa = new MilkCocoa( config.appid +'.mlkcca.com');
var ds = milkcocoa.dataStore(config.ds);

ds.on('push', function(data) {
  console.log(data);

  var mes = '「' + data.value.name + '('+ data.value.mail +')」さんから問い合わせがありました。';
  mes += data.value.msg;

  var options = {
    url: config.slack.url,
    form: 'payload={"channel": "'+config.slack.channel+'", "username": "'+config.slack.username+'", "text": "'+ mes +'"}',
    json: true
  };

  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }else{
      console.log('error: '+ response.statusCode);
    }
  });
});
