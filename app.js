const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to the Cat Cafe Management System!');
});

app.listen(3000, () => console.log('Server started on port 3000'));