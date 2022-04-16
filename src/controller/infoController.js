

const infoController = {}


infoController.reads = async ctx => {
  ctx.body = {
    foo: 'bar',
  }
}


export default infoController