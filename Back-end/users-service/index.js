const express = require('express');
const app = express();
const router = express.Router();
const port = 3000

const http = require('http').Server(app);

const cors = require('cors');

const personRoutes = require('./src/routes/PersonRouter.js');
const userRoutes = require('./src/routes/UserRoutes.js');
const authRoutes = require('./src/routes/AuthRouter.js');


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

app.use(router);
app.use('/person', personRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.listen(port, ()=>{
    console.log('listen on ' + port)
});

module.exports = http
