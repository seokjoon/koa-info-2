import Info from '../model/Info.js'
import { Op } from 'sequelize'


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
  // await Info.destroy({ where: { id: ctx.params.id } })
  let item = await Info.findOne()
  ctx.body = await item.destroy()
}


infoController.read = async ctx => {
  ctx.body = await Info.findOne()
}


//Where: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#applying-where-clauses
infoController.reads = async ctx => {
  // const items = await Info.findAll()
  //console.log(items.every(item => item instanceof Info), JSON.stringify(items, null, 2))
  //const items = await Info.findAll({ attributes: ['id', 'title'] })
  const items = await Info.findAll({ attributes: ['id', 'title'], where: { title: { [Op.like]: '%hello%' } } })
  console.log(items.every(item => item instanceof Info))
  ctx.body = items
}


infoController.seed = async ctx => {
  // await Info.destroy({ truncate: true,})

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
  // await Info.update({ title: 'hello' }, { where: { title: null } })
  let item = await Info.findOne()
  ctx.body = await item.update({
    content: 'world update',
  })
}


export default infoController