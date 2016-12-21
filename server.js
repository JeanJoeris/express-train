const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Express Train';

app.get('/', (request, response) => {
  response.send('Hello World! TOOT! TOOT!');
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}



module.exports = app;
