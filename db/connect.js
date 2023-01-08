const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://<FreeUserIam>:<password>@node-express-projects.zf5lm6s.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

// mongoose.connect(connectionString).then(() => console.log('Connected to the db')).catch((err) => console.log(err));//for v6
// mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to the db')).catch((err) => console.log(err));//for v5

module.exports = connectDB;