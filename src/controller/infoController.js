import Info from '../model/Info.js'


const infoController = {}


infoController.create = async ctx => {
  // const item = Info.build({ content: 'world', title: 'hello', }) //instead new Info
  // await item.save()
  let item = await Info.create({ content: 'world', title: 'hello', })
  console.log(item instanceof Info, item.toJSON())
}


infoController.delete = async ctx => {
  let item = await Info.findOne()
  ctx.body = await item.destroy()
}


infoController.read = async ctx => {
  try {
    const item = await Info.findOne()
    ctx.body = {
      item: item.toJSON(),
    }
  } catch (e) {
    console.log(e)
  }
}


infoController.reads = async ctx => {

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