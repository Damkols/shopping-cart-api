const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//Routes
const postsRoutes = require('./routes/api/posts');

const app = express();

// BodyParser Middleware
app.use(express.json());

// Connect to MongoDb

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(() => console.log('MongoDb connected!'))
.catch(err => console.log(err));

//User routes
app.use('/api/posts', postsRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server run at port ${PORT}`));