import Router from 'koa-router'
import infoController from '../controller/infoController.js'


const infoRoute = new Router()


infoRoute.get('/', infoController.reads)
infoRoute.get('/info', infoController.reads)


export default infoRoute