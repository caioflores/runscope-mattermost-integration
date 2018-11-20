const axios = require('axios');

exports.sendMessage = (req, res) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    url: 'https://mattermost.yourdomain.com/hooks/hash',
  };

  if (req.body.result === 'fail') {
    options.data = {
      text: `Test **${req.body.test_name}** runned with status **${req.body.result}** :x: :bangbang: `,
    };

    axios(options)
      .then(response => {
        res.status(200).send('Success');
        console.log(response);
      })
      .catch(err => {
        res.status(400).send(err);
        console.log(err);
      });
  }

  res.status(200);
};
