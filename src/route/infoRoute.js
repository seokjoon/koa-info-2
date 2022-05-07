import Router from 'koa-router'
import infoController from '../controller/infoController.js'


const infoRoute = new Router()


infoRoute.delete(
  '/info/:id',
  //TODO middleware
  infoController.delete,
)


infoRoute.get('/', infoController.reads)
infoRoute.get('/info', infoController.reads)
infoRoute.get(
  '/info/:id',
  //TODO middleware
  infoController.read,
)
infoRoute.get('/infoSeed', infoController.seed)


infoRoute.post(
  '/info',
  //TODO middleware
  infoController.create,
)


infoRoute.put(
  '/info/:id',
  //TODO middleware
  infoController.update,
)


export default infoRoute