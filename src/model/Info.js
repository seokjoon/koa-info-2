import { Sequelize, Model, DataTypes } from 'sequelize'


const sequelize = new Sequelize('info2', 'root', 'secret', {
  host: 'localhost',
  dialect: 'mysql',
  // logging: (...msg) => console.log(msg),
})


class Info extends Model {
  // otherPublicField

  static bar() {
    return 'bar'
  }

  foo() {
    return this.title
  }
}


//Data Types: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
//Column Options: https://sequelize.org/docs/v6/core-concepts/model-basics/#column-options
Info.init({
  content: DataTypes.TEXT,
  title: {
    allowNull: false,
    defaultValue: 'title',
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