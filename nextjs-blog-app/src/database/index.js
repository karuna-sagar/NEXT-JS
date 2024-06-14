import mongoose from "mongoose"
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const connectToDB = async () => {
    mongoose.connect(process.env.DATABASE_LOCAL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('Connected Database'))
}

export default connectToDB