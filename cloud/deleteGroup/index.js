// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
let db=cloud.database()
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await db.collection('groups').doc(event._id).remove()

}