// pages/record/record.js
var Bmob = require('../../utils/bmob.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    var _this = this;
    var record = Bmob.Object.extend("record");
    var query = new Bmob.Query(record);
    query.find({
      success: function (results) {
        _this.setData({
          results: results
        });
        // The object was retrieved successfully.
        console.log("共查询到" + results.length + "条记录");
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.id + '--' + object.get("name") + object.get("time"));
        }

      },
      error: function (result, error) {
        console.log("查询失败");
      }
    });






  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})