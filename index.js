import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'
const app =express();


app.use(bodyParser.json({limit: "30mb", extended:true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts',postRoutes)

const Connection_URL= 'mongodb://127.0.0.1:27017/mongoURL?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';

const PORT= process.env.PORT || 5000;

mongoose.connect(Connection_URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex: true,})
.then(()=> app.listen(PORT,()=>console.log(`Running on ${PORT}`)))
.catch((error)=>console.log(error.message));

