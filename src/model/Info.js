// const { Sequelize, Model, DataTypes } = require('sequelize')
// import { Sequelize, Model, DataTypes } from 'sequelize/types/index.js'
import { Sequelize, Model, DataTypes } from 'sequelize'


const sequelize = new Sequelize('sqlite::memory:')


class Info extends Model {}


Info.init({
  content: DataTypes.TEXT,
  title: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'info',
})

(async () => {
  await sequelize.sync()
  const info = await Info.create({
    content: 'world',
    title: 'hello',
  })
  console.log(info.toJSON())
})()


export default Info