//const url___ = "";//域名变量


module.exports = {
  // HTTP_LOGORRE:"http://192.168.1.167:63065",//登陆、注册url（测试地址）
  // HTTP_LOGORRE: "http://122.14.200.40:11112",//登陆、注册url（测试地址）
  // 开始游戏(游戏次数)
  HTTP_QUERY_LOTTERY_COUNT: 'http://dev.easy-h5.cn/YbFestival/YbFestivalStayinfoAjax/getGameNum',
  // 是否通关 mark 分数   status 是否通关
  HTTP_SEND_IS_OVER: 'http://dev.easy-h5.cn/YbFestival/YbFestivalStayinfoAjax/getGame',
  //  点赞 被赞用户id goodid
  HTTP_GIVE_THE_THUMBS_UP: 'http://dev.easy-h5.cn/YbFestival/YbFestivalStayinfoAjax/Vote',
  // 排行榜 下拉更新和搜索 pages 第几页, search 搜索项
  HTTP_QUERY_LIST: 'http://dev.easy-h5.cn/YbFestival/YbFestivalStayinfoAjax/Rank',
  // 留资  phone 电话  name 姓名   province 省份  city 城市
  HTTP_QUERY_LOTTERY: 'http://dev.easy-h5.cn/YbFestival/YbFestivalStayinfoAjax/addInfo',
  // 分享时获取当前用户的游戏状态   1通关  2未通关  3未玩游戏
  HTTP_QUERY_GAME_STATUS: 'http://dev.easy-h5.cn/YbFestival/YbFestivalStayinfoAjax/getGameStatus',
  //获取分享人信息  分享人 share_goodid
  HTTP_GET_SHARE_INFO: 'http://dev.easy-h5.cn/YbFestival/YbFestivalStayinfoAjax/getShareInfo',
};
