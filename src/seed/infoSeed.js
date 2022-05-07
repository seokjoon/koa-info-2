import Info from '../model/Info.js'


export default function infoSeed() {
  const infos = [...Array(20)].map(v => ({
    content: Array(20).fill('content ' + v).toString(),
    title: 'title ' + v,
  }))

  //TODO insert
}