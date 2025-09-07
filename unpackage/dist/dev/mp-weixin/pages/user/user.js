"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userinfo = common_vendor.ref(null);
    common_vendor.index.__f__("log", "at pages/user/user.vue:127", utils_system.getNavBarHeight());
    const getUserInfo = async () => {
      api_apis.apiUserInfo().then((res) => {
        common_vendor.index.__f__("log", "at pages/user/user.vue:139", res);
        userinfo.value = res.data;
        common_vendor.index.__f__("log", "at pages/user/user.vue:141", userinfo.value);
      });
      common_vendor.index.__f__("log", "at pages/user/user.vue:143", userinfo.value);
    };
    const myScore = () => {
      common_vendor.index.navigateTo({
        url: "/pages/class-list/class-list?name=我的评分&type=score"
      });
    };
    const myDownload = () => {
      common_vendor.index.navigateTo({
        url: "/pages/class-list/class-list?name=我的下载&type=download"
      });
    };
    getUserInfo();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: userinfo.value
      }, userinfo.value ? {
        b: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        c: common_assets._imports_0,
        d: common_vendor.t(userinfo.value.IP),
        e: common_vendor.t(userinfo.value.address.city || userinfo.value.address.province || userinfo.value.address.country),
        f: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        g: common_vendor.t(userinfo.value.downloadSize),
        h: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaas"
        }),
        i: common_vendor.o(myDownload),
        j: common_vendor.p({
          type: "chatbubble-filled",
          size: "20"
        }),
        k: common_vendor.t(userinfo.value.scoreSize),
        l: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaas"
        }),
        m: common_vendor.o(myScore),
        n: common_vendor.p({
          type: "chatboxes-filled",
          size: "20"
        }),
        o: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaas"
        }),
        p: common_vendor.p({
          type: "refreshempty",
          size: "20"
        }),
        q: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        r: common_vendor.p({
          type: "help",
          size: "20"
        }),
        s: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        })
      } : {}, {
        t: common_vendor.p({
          status: "loading"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
