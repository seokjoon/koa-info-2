import { Sequelize, Model, DataTypes } from 'sequelize'


const sequelize = new Sequelize('info2', 'root', 'secret', {
  host: 'localhost',
  dialect: 'mysql',
  // logging: (...msg) => console.log(msg),
})


class Info extends Model {
  // otherPublicField
}


Info.init({
  content: DataTypes.TEXT,
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'info',
});


// (async () => {
  // await Info.sync({ force: true })
  // console.log('table (re)created')
// })()



export default Info