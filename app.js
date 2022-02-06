const express = require('express');
const port = process.env.port || 3000;
const userRouter = require('./routers/user.router');
const itemRouter = require('./routers/item.router');
const cartRouter = require('./routers/cart.router');
require('./db/mongoose');

const app = express();

app.use(express.json());

app.use('/', userRouter);
app.use('/', itemRouter);
app.use('/', cartRouter);

app.listen(port, ()=> {
    console.log('server listening on port '+ port)
})