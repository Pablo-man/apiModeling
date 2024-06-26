import express from 'express'
import morgan from 'morgan'
import router from './src/routes/song.routes.js'

const app=  express()

//SETTINGS
app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, ['*']);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next()
})
const PORT= process.env.PORT||8080

//MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//ROUTES
app.use('/rest/songs', router)

//STARTING SERVER
app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})