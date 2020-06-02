const express = require('express');
const bodyParser =  require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'})
});

app.listen(port, () => console.log(`Listening on port ${port}`));
