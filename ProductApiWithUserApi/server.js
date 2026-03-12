//Create HTTP Server.....
import exp from 'express'
const app=exp()
import {userapp} from "./Apis/usersapi.js"
import { productApp } from './Apis/productsApi.js'

//use body paeswe maidleware
app.use(exp.json())
app.use('/user-api',userapp )
app.use('/product-api',productApp)

//set a port Number
const port=3002;
//Assign portnumber to HTTpp Server
app.listen(port,()=>console.log(`server listening port ${port}...`))
//Test Data
