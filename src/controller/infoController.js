import Info from '../model/Info.js'


const infoController = {}


infoController.create = async ctx => {
  // const item = Info.build({ content: 'world', title: 'hello', }) //instead new Info
  // await item.save()
  // let item = await Info.create({ content: 'world', title: 'hello', })
  let item = await Info.create(ctx.request.body, { fields: ['content', 'title'] })
  console.log(item instanceof Info, item.toJSON())
  ctx.body = item
}


infoController.delete = async ctx => {
  let item = await Info.findOne()
  ctx.body = await item.destroy()
}


infoController.read = async ctx => {
  ctx.body = await Info.findOne()
}


infoController.reads = async ctx => {
  // const items = await Info.findAll()
  const items = await Info.findAll({ attributes: ['id', 'title'] })
  //console.log(items.every(item => item instanceof Info), JSON.stringify(items, null, 2))
  console.log(items.every(item => item instanceof Info))
  ctx.body = items
}


infoController.seed = async ctx => {
  // await sequelize.sync({ force: true })
  // console.log('all models synced')

  // await Info.sync({ force: true })
  // console.log('table (re)created')

  // await Info.drop()
  // console.log('table dropped')
  // await sequelize.drop()
  // console.log('database dropped')
}


infoController.update = async ctx => {
  let item = await Info.findOne()
  ctx.body = await item.update({
    content: 'world update',
  })
}


export default infoController