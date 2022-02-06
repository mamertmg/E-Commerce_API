const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!')
    })
    .catch(err => {
        console.log('OH NO MONGO ERROR')
        console.log(err)    
    })