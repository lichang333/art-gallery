// pages/workspaces/workspaces.js
let app = getApp()

Page({

  data: {
  
  },

  onLoad: function (options) {
    let page = this;

    //Request API to get workspace
    wx.request({
      url:   "https://workspace-api333.herokuapp.com/api/v1/workspaces",
      method: 'GET',
      success(res) {
        const workspaces = res.data;
        page.setData({
          workspaces: workspaces
        });

        wx.hideToast();
      }
    });

  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },
  showWorkspace(e) {
    const workspaceId = e.currentTarget.dataset.id;

    wx.navigateTo({
      url: `/pages/space/space?id=${workspaceId}`,
    });
  }
})