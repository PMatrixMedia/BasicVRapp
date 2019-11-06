const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

router.route('/basicapp')
   .get((req, res) => {
      res.sendFile(process.cwd()+'/server/vr/index.html')

app.listen(process.env.PORT || 8081);