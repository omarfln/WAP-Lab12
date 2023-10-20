const express = require('express');
const app = express();

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');


app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use(express.static('public'));

// index
app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html');
});

// custom 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

// custom error
app.use((err, req, res, next) => {
    console.log("Err stack: " + err.stack);
    res.status(500).send('opps, error 500, Internal server error!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT} and listening`);
});

