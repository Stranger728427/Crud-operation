import express from 'express';
import {join} from 'path'

import connectDB from './db/connectDb.js'
import web from './routes/web.js'
import { execPath } from 'process';
const app = express();

//app.use('/',UserController)
app.use(express.urlencoded({extended:false}))
app.use('/user',web)   // router 


app.set('view engine', 'ejs')


const DATABASE_url = 'mongodb://localhost:27017'

connectDB(DATABASE_url)

app.use(express.static(join(process.cwd(), 'public')))
app.use('/user/edit',express.static(join(process.cwd(), 'public')))

const port = process.env.PORT || '5000';

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

