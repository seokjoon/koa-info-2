import Koa from 'koa'
import path from 'path'
import dotenv from 'dotenv'
// import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
// import jwtMiddleware from './middleware/jwtMiddleware.js'
import cors from '@koa/cors'
import { Sequelize, Model, DataTypes } from 'sequelize'


const __dirname = path.resolve()
dotenv.config({ path: path.join(__dirname, ((process.env.NODE_ENV === 'production') ? process.env.PATH_PRODUCTION + '/.env' : './.env')) });
// const { MONGO_URI, PORT, } = process.env
// const port = PORT || 5000; console.log('MONGO_URI, PORT: ', MONGO_URI, PORT)
const { PORT, } = process.env
const port = PORT || 5000; console.log('PORT: ', PORT)
const app = new Koa();


app.proxy = true
app.use(cors({
  credentials: true,
  origin: process.env.HOST, //origin: '*', //origin: true,
}))
app.listen((port), () => {
  console.log(`Server listening on port ${port}`)
})


// mongoose.connect(MONGO_URI, {
//   //useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }, (err) => {
//   (err) ? console.log('Error connecting to MongoDB: ', err) : console.log('Connected to MongoDB')
// })


const sequelize = new Sequelize('info2', 'root', 'secret', { host: 'localhost', dialect: 'mysql', })
// try {
//   await sequelize.authenticate()
//   console.log('Connection has been established successfully.')
//   await sequelize.close()
// } catch (e) { console.log(e) }


//////// middleware BEGIN
// app.use((ctx, next) => { next() })
// app.use(async (ctx, next) => { await next().then(() => { console.log('bar') }) })
app.use(bodyParser())
// app.use(jwtMiddleware)
//라우터 적용 전
//////// middleware END


export default app