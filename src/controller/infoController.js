import { Sequelize, Model, DataTypes } from 'sequelize'
import Info from '../model/Info.js'


const infoController = {}


infoController.reads = async ctx => {

  // const sequelize = new Sequelize('info2', 'root', 'secret', { host: 'localhost', dialect: 'mysql', })
  // try {
  //   await sequelize.authenticate()
  //   console.log('Connection has been established successfully.')
  //   await sequelize.close()
  // } catch (e) { console.log(e) }
  // await sequelize.sync({ force: true })
  // console.log('all models synced')
  try {
    const res = await Info.findOne()
    console.log(res)
  } catch (e) {
    console.log(e)
    await Info.sync({ force: true })
    console.log('table (re)created')
  }

  let info = await Info.create({ content: 'world', title: 'hello', })
  console.log(info.toJSON())
  // info = new Info({ content: 'world 2', title: 'hello 2' })
  // console.log(info.toJSON())

  // console.log('diff: ', Info === sequelize.models.info)
  // await (async () => {
  //   await sequelize.sync()
  //   const info = await Info.create({
  //     content: 'world',
  //     title: 'hello',
  //   })
  //   console.log(info.toJSON())
  // })()

  ctx.body = {
    items: info.toJSON(),
  }
}


export default infoController