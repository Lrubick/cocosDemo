//const url___ = "";//域名变量
module.exports = {
  // HTTP_LOGORRE:"http://192.168.1.167:63065",//登陆、注册url（测试地址）
  // HTTP_LOGORRE: "http://122.14.200.40:11112",//登陆、注册url（测试地址）
  // 查询用户抽奖(游戏次数)
  HTTP_QUERY_LOTTERY_COUNT: 'http://dev.easy-h5.cn/JustAnIdea/JustAnIdeaStayinfoAjax/getUserGameNum',
  // 查询用户奖品列表
  HTTP_QUERY_LIST: 'http://dev.easy-h5.cn/JustAnIdea/JustAnIdeaStayinfoAjax/getMyAwards',
  // 添加用户游戏记录(传入获得积分) 返回记录id
  HTTP_QUERY_RECORD: 'http://dev.easy-h5.cn/JustAnIdea/JustAnIdeaStayinfoAjax/addGameHistory',
  // 用户抽奖接口(传入记录id)
  HTTP_QUERY_LOTTERY: 'http://dev.easy-h5.cn/JustAnIdea/JustAnIdeaStayinfoAjax/getAwardsGrant',

};
