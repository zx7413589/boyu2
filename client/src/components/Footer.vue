<template>
  <div style="position:relative;bottom:0px;width:100%">
    <div class="footer" style="width: 100%">
      <div
        :style="close"
        style="
          width: 100%;
          position: fixed;
          z-index: 2029;
          height: 135px;
          background: white;
          bottom: 0px;
          box-shadow: 0 -8px 11px rgba(0, 0, 0, 0.04);
        "
      >
        <div
          style="
            width: 750px;
            height: 135px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            line-height: px;
          "
        >
          <div
            style="
              background-image: url(https://static.inboyu.com/pc/web/images/index-download-app.png?v=202008211515);
              width: 187px;
              height: 204px;
              position: relative;
              left: 0;
              top: -20px;
              background-size: contain;
            "
          ></div>
          <div style="position: relative; top: 45px">
            <p style="font-size: 24px; color: #333; margin-bottom: 10px">
              扫描下载泊寓APP
            </p>
            <p style="font-size: 14px; color: #b8b8b8">过不一样的生活</p>
          </div>
          <div
            style="width: 100px; height: 100px; position: relative; top: 18px"
          >
            <img
              src="https://static.inboyu.com/pc/web/images/qrcode.png?v=202008211515"
              style="width: 100%"
              alt=""
            />
          </div>
          <div
            class="chacha"
            @click="del()"
            style="
              position: relative;
              bottom: 5px;
              width: 40px;
              height: 40px;
              border-radius: 25px;
              -webkit-box-shadow: 0 2px 13px rgba(121, 121, 121, 0.2);
              box-shadow: 0 2px 13px rgba(121, 121, 121, 0.2);
              right: 0;
              top: -20px;
              background-color: #fff;
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRDFGMjhEQzA1RjcxMUU4OUY0QkQ1OTQwMEUxNUI2RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRDFGMjhERDA1RjcxMUU4OUY0QkQ1OTQwMEUxNUI2RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZEMUYyOERBMDVGNzExRTg5RjRCRDU5NDAwRTE1QjZFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZEMUYyOERCMDVGNzExRTg5RjRCRDU5NDAwRTE1QjZFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Z+ZIZwAAAd5JREFUeNrM2M1KAmEUxvGZk5uK2nYXrmrlpqAPMIioICKhiGrpqktpWRmtg4TCgoi6g6BLqWhRkD0vjTAMjvN+nDNzXngkHRf/H2qCcb9dH4ui6BLbxm6xfewj0ntmsR3sDbuq4aaJtZKLG9hM8ti7wvhlrIuNJ/d/CDefmSc1sB42rTzenDkDeMbOlCOGxX+ZtxAld46xC6WIvPg17HUA6GOHChGj4p/MHUpd0IYojM8CNCGs4ocBNCCs4/MAVSKc4kcBqkA4xxcBykR4xdsAykB4x9sCJBFB8S4ACURwvCuAE8ES7wPgQLDF+wJCEKzxIQAfBHt8KGCAOLJAiMRzAMz5LUBsScWbU2P6Jh0gzDnIIBqZ57LFc70CRa+EWDw3II3o5Vzf5YyXAJiziM3nXDvBpjQDzH+bG2wi57r5PNxzIkg43rznHyQRJBy/jq1iHSkECcc/Jh/svG/sYAQJx9t82QUhqIR4UQSVFC+GoBLjRRCugKXAeHYEOcZ3GeJZEVRRPBuCKoxnQVDF8cEIUhAfhCAl8d4IUhTvhSBl8c4IUhjvhCCl8dYIA1hQGm+D6FByQWt8EaJpAJPK47OI89Rj13G/Xd/EH6fYN7aHvUS6T4ytRP8/Vd79CTAAIQgD7murl4AAAAAASUVORK5CYII=);
              background-repeat: no-repeat;
              background-size: 18px 18px;
              background-position: center;
              cursor: pointer;
              -webkit-transition: 0.2s;
              transition: 0.2s;
            "
          ></div>
        </div>
      </div>
      <div style="width: 1200px; height: 120px; margin: 0 auto">
        <div>
          <img class="logo-white" src="../assets/images/logo-white.png" />
        </div>
        <div class="footer_copyright">
          <p>
            Copyright © 2021 inboyu. All Rights Reserved. 珠海市万沙科技有限公司
            版权所有 丨 营业执照 粤ICP备16016494号 -1
            <a
              href="https://ss.knet.cn/verifyseal.dll?sn=e18051144030073830ki0v000000&ct=df&pa=Pgouoo8rklk65YvK"
            >
              <img style="width: 50px" src="../assets/images/kexin.png" />
            </a>
          </p>
          <p style="margin-top: 10px">
            地址：深圳市南山区万科设计公社B102 丨 电话：4000256666
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  width: 100%;
  height: 120px;
  background: linear-gradient(to right, #ff551f, #ff8547);
  position: absolute;
  /* bottom:0px; */
}
.logo-white {
  width: 80px;
  position: absolute;
  top: 35px;
  left: 160px;
}
.footer_copyright {
  color: white;
  position: absolute;
  font-size: 14px;
  left: 350px;
  top: 35px;
  overflow: hidden;
  width: 800px;
  /* height: 100px; */
}
.chacha:hover {
  box-shadow: 0 2px 13px rgba(121, 121, 121, 0.4);
}
</style>

<script>
export default {
  data() {
    return {
      close: "display:block",
    };
  },
  methods: {
    del() {
      this.close = "display:none";
    },
  },
};
</script>

