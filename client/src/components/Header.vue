<template>
  <div>
    <div
      class="header"
      style="position: fixed; z-index: 2029; top: 0px; background: white"
      @mouseleave="hideCity()"
    >
      <div class="flex">
        <div style="display: flex">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/images/logo.png" class="img" />
            </router-link>
          </div>
          <div style="position: relative">
            <div
              @mouseenter="showCity()"
              style="overflow: visible; text-align: center"
            >
              <span class="logo_city">{{ this.$store.state.cityNames }}</span>
            </div>
            <div class="city" v-show="showCityName" @mouseleave="hideCity()">
              <p class="chooseCity">选择城市</p>
              <hr
                style="
                  border: 0.5px solid lightgray;
                  width: 450px;
                  margin-left: 25px;
                  margin-top: 20px;
                  margin-bottom: 10px;
                "
              />
              <div v-for="(item, i) of citys" :key="i" class="city_div">
                <span class="city_span">{{ item.szm }}</span>
                <router-link
                  v-for="(v, k) of item.cityNames"
                  :key="k"
                  @click.native="ccity($event)"
                  to="/"
                  class="city_link"
                  :class="c == v ? 'col' : ''"
                  >{{ v }}</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div style="float: right">
          <ul
            style="overflow: hidden; height: 80px; width: 700px"
            @click="abc($event)"
          >
            <li :class="this.$store.state.headeractive == 1 ? 'bg_color' : ''">
              <router-link to="/">首页</router-link>
            </li>
            <li :class="this.$store.state.headeractive == 2 ? 'bg_color' : ''">
              <router-link to="/find/全部">找房</router-link>
            </li>
            <li :class="this.$store.state.headeractive == 3 ? 'bg_color' : ''">
              <router-link to="/news/boyudd">泊寓动态</router-link>
            </li>
            <li :class="this.$store.state.headeractive == 4 ? 'bg_color' : ''">
              <router-link to="/tel">联系我们</router-link>
            </li>
            <li
              :class="this.$store.state.headeractive == 5 ? 'bg_color' : ''"
              class="erweima"
              @mouseenter="showErweima()"
              @mouseleave="hideErweima()"
              :style="bg"
            >
              <router-link to="/phone">移动端</router-link>
            </li>
          </ul>
          <div
            style="
              width: 320px;
              height: 180px;
              position: absolute;
              right: 159px;
              top: 95px;
              box-shadow: 0 8px 16px rgba(121, 121, 121, 0.2);
              display: none;
              z-index: 11000;
              background-color: #fff;
            "
            v-show="showMa"
          >
            <div style="width: 160px; padding-top: 10px; float: left">
              <img
                style="
                  display: block;
                  width: 140px;
                  height: 140px;
                  margin: 0 auto 0;
                "
                src="../assets/images/qrcode.png"
              />
              <p
                style="
                  height: 20px;
                  line-height: 20px;
                  color: #666;
                  font-size: 14px;
                  text-align: center;
                "
              >
                下载泊寓APP
              </p>
            </div>
            <div style="width: 160px; padding-top: 10px; float: left">
              <img style="display: block;
                  width: 140px;
                  height: 140px;
                  margin: 0 auto 0;" src="../assets/images/boyu.jpg" />
              <p
                style="
                  height: 20px;
                  line-height: 20px;
                  color: #666;
                  font-size: 14px;
                  text-align: center;
                "
              >
                关注泊寓公众号
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="side">
      <div class="side-title"></div>
      <div class="side-comment" @click="showMd()"></div>
      <div class="side-scan" @click="showewm">
        <div
          style="
            width: 140px;
            position: relative;
            right: 145px;
            top: -70px;
            background: white;
          "
          :style="iserweima"
        >
          <div style="width: 140px; height: 140px">
            <img
              style="width: 100%"
              src="https://static.inboyu.com/pc/web/images/qrcode.png"
              alt=""
            />
          </div>
          <div
            style="
              height: 30px;
              line-height: 30px;
              text-align: center;
              color: #666;
              font-size: 14px;
            "
          >
            <p
              style="
                height: 30px;
                line-height: 30px;
                text-align: center;
                color: #666;
                font-size: 14px;
              "
            >
              下载泊寓APP
            </p>
          </div>
        </div>
      </div>
      <a class="side-top" href="#"></a>
    </div>
    <div class="md" :style="showmd"></div>
    <div
      style="
        width: 100%;
        height: 100%;
        opacity: 0.7;
        background: black;
        z-index: 500000;
        position: fixed;
        left: 0;
        top: 0;
      "
      :style="showmd"
    ></div>
    <div class="md-dialog" :style="showmd">
      <div
        class="chacha"
        @click="closeMd()"
        style="
          position: absolute;
          width: 35px;
          height: 35px;
          border-radius: 25px;
          box-shadow: 0 2px 13px rgba(121, 121, 121, 0.2);
          right: -12px;
          top: -12px;
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
      <form action="" class="md-form">
        <div class="md-form-content">
          <label for="" class="md-form-title">联系我们</label>
          <textarea
            class="md-form-text"
            name=""
            id=""
            rows="4"
            placeholder="有任何咨询或希望商讨合作机会，请留下您的信息，我们会尽快回复您"
          ></textarea>
        </div>
        <div class="md-form-content">
          <label for="" class="md-form-title">姓名</label>
          <input type="text" />
        </div>
        <div class="md-form-content">
          <label for="" class="md-form-title">联系方式</label>
          <input type="text" placeholder="手机/QQ/Email" />
        </div>
      </form>
      <div style="width: 170px; margin: 0 auto">
        <button class="md-button">提交反馈</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 提交反馈 */

.md-button {
  width: 170px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  transition: 0.2s;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  outline: none;
  background-color: #ff6e2e;
  border-radius: 4px;
  margin-bottom: 20px;
}
.md-button:hover {
  background-color: #e6662c;
}
.md-form-content {
  margin-bottom: 15px;
}
.md-form-content input {
  width: 100%;
  color: #666;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  outline: none;
  font-size: 14px;
}
.md-form-text {
  color: #666;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  outline: none;
  font-size: 14px;
  width: 100%;
}
.md-form-title {
  display: block;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  line-height: 2em;
}
.md-form {
  width: 520px;
  margin: 30px 40px;
}
.md {
  background: black;
  width: 100%;
  /* height: 900px; */
  position: fixed;
  top: 0;
  opacity: 0.5;
  z-index: 50000;
}
.md-dialog {
  width: 600px;
  background: white;
  z-index: 500000;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-position: center;
}
/* 侧边栏 */
.side {
  width: 57px;
  /* height: 100px; */
  position: fixed;
  right: 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 10000;
}
.side-title {
  background-image: url("https://static.inboyu.com/pc/web/images/icon-deer.png?v=202008211515");
  width: 57px;
  height: 52px;
  background-size: 57px 52px;
}
.side-comment {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OEFCRDNFMkZFNkQxMUU3OTgyMDlBQzYwMTA2NDM5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OEFCRDNFM0ZFNkQxMUU3OTgyMDlBQzYwMTA2NDM5NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4QUJEM0UwRkU2RDExRTc5ODIwOUFDNjAxMDY0Mzk3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4QUJEM0UxRkU2RDExRTc5ODIwOUFDNjAxMDY0Mzk3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gM8y/QAAApBJREFUeNrsmc9vEkEUx2cXtBz04kkvpleu9ax3PXEx/gHGi/ViejDGSwsJJUpAbEQNaq3aoAWb1pDe6rk91IPxphcBk1Iv/ohNTIzrm+QRh/E9dgszCyR8ky8hme/MfFjezsxmhed5Ykg8AV4GfwfnwS6VGxbYw+ANr1OPKOj2Fwd8GVz3zGkPnAgIW2PG+A+6DfvQs6PdALDrPmN0QMuPK549tXxgV4k++92gZcdPlmA/dymJQ+Aq0Uf+gBPgt0TbYwktiAbbN1gEXCHmXcI2mTkG3iEyubCBJdBLYs47eC+p2eNEefwIE1jClon5Ukz2FZF9ERawBHimzfMHPENk5ZVeJLjkOh0LAziC9anqN/gSky8QTDVcVYRtYBfvblW/wBeY/BzB87oNaxvYwfVT1U/wOSZ/lWBZU2FtAkvYkjbuN/AZJn8Ra1pVVYe1BSxh72tjfgGfYvLnsaZVVXBzEbaBJexdYseLM/mzWNOqVsBRbg6TwA5uAKo+gieZ/GmsaVVlZbezDnxbG+c9nguo7BT4q5Z/7gdrEjinjbGN5wEqG8ezsqqnQWBNAWe1/m/AR5msLI+Gln8SFNYEcIZY5GNMVpbHB+Kcy8Em8Dzd8eTSD3Ba67fMLUVYHu+0fIk4oaluUU8uvQIntT73uKdc8BHwlpZ/4APLcvUCPKvlM10ml+WxSfw4J8A8xoCD5qPEA+ZCQNjQgV1cV1UVDgAbOnBRy+QPCBsq8LzWnu1xMyLniYr+5XVpuwm+JgzKFfaUMQ1rEzgNvm5jYBvASfANW39bLzXsiAHKFSOmMfAYeAw8BvZfh+vgkwHPBoNSQ73Ct0bgwqb+XU67r71MqMi9WJwGN4cItIlMHQf/vwIMAJ8rhG6OtXf5AAAAAElFTkSuQmCC);
  border-bottom: 5px solid #e6662c;
}
.side-scan {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OEFCRDNFNkZFNkQxMUU3OTgyMDlBQzYwMTA2NDM5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQzYzMzI5MEZFNkQxMUU3OTgyMDlBQzYwMTA2NDM5NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4QUJEM0U0RkU2RDExRTc5ODIwOUFDNjAxMDY0Mzk3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4QUJEM0U1RkU2RDExRTc5ODIwOUFDNjAxMDY0Mzk3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+V2R2ugAAAW1JREFUeNrsmc9Kw0AQxid78Tla25x6FIQ8jFYQ9FCKz+KfgyIUX6YvoJe2qT5HSoN+I3NIalp3k3bdyHzwhSQMy49lNjuziVbrPCKiMXwJ9+EjstMcvoCnlvEJPIFjclMGL+Bn+DYC8Ag3d1RPH3DXMvYd7lAzjQwuVw0GyA8Uu03XRtKgjjglzh3ih/CyIXCfU+Jz4+VUcnNOf6tYcj4pvqwC7kpuhqCO5P5O4IjCUonPUMukwAqswAr8O3BaeE4DZCzxGakHljVqA18aCts3H+90msMK3HbgU3gmVVHIZsYTXnTc4PVaMsELs6dey5dys6dey4eY8Uy/wwr8H4AT+cbNNs8AAlGJjxdd8czL5azMl0p8ei6hi06BFViBwwMOqZjv2QC/wMcBwMbC8gM4q9i7U8sey6X2SBx7x6rxM96aX3EzqDkLvv/TvfEMPzXpsQ4Uu02PDHwP3zB9RXrskq//dJmwMePDlwADAOBlpY60T1LsAAAAAElFTkSuQmCC);
  border-bottom: 1px solid #e6662c;
}
.side-top {
  display: block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MUEwN0FGNTA2MDQxMUU4OUY0QkQ1OTQwMEUxNUI2RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MUEwN0FGNjA2MDQxMUU4OUY0QkQ1OTQwMEUxNUI2RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxQTA3QUYzMDYwNDExRTg5RjRCRDU5NDAwRTE1QjZFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxQTA3QUY0MDYwNDExRTg5RjRCRDU5NDAwRTE1QjZFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iqAvYQAAAg9JREFUeNrsmE0oRFEUx2eYfEwk+UzKxg4rYaOmJqUZSsmCjVgrZauJjYWmLEW2BjtfZYPZKVa+F0IJiZBYzEjJ8z/1pqbp3fNm3txnGt1Tv817997ze3fePfe+cWqa5simyHFkWShhJayElbAS/j/C1WAKnIJPEAGHYAKUS8tCW7ME/OBdE8cL8MjIJUO2H3xr5vEFfJkW7tZFko1IujOdjqxXF0g16NVptZrXafF42QZ2QLHBvXewDgpBDygwaPMKvODsLxZdE3gTzN41qItr2wgeBG3per3drwQleBII3AsE6AGfBX1uQK1dwjTwnSAxCTUwfVuYsncBKmQLV4IrZhE1JzGGh1mkx6BElnApOGXKVHsKv5KPKYP7wJ2ucBE4YDaCTguLto/ZaHZBnlXhQhAWDEwJe9Oo4UPgRzD2BnClKkxPuSkYkBINStjSR5nNJQRykxWmhivMYCOSDkxEgMkzB5xmwtRggRlkXKJsjCCTL2gmPMN0nrZBNjZJ80zegEh4kuk0a5Ns/GsYYvKPJgqPMY0Xjd4lG3DpFUK00IdjwgNMiVkTrVabyDcppX6Hfmgxim2zIm4Tbn3XM4pzahA1uLGXzDZpI3SuODHweqSv5nDCEfkIdIFoBr/mP0AHuEy4vkVPUwVW9aPjMijL4MwmUqO73YIlmnmrn0jqnx8lrISVsBJWwtkRvwIMAPZ68vIZ1/QKAAAAAElFTkSuQmCC);
  border-bottom: 1px solid #e6662c;
}
.side-comment,
.side-scan,
.side-top {
  width: 50px;
  height: 50px;
  background-color: #ff6e2e;
  background-repeat: no-repeat;
  background-size: 22px 22px;
  background-position: center;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  cursor: pointer;
  border-bottom: 1px solid #e6662c;
}
.side-comment:hover,
.side-scan:hover,
.side-top:hover {
  background-color: #e6662c;
  border-bottom: 1px solid #e6662c;
}
/*  */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  outline: none !important;
  text-decoration: none  !important;
}
.header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.logo {
  width: 70px;
  height: 32px;
}
.img {
  width: 70px;
}
.flex {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
}
.flex {
  font-size: 18px;
}
.logo_city {
  user-select: none;
  padding: 0em;
  text-align: center;
  border-left: 1px solid #dbdbdb;
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  color: #333;
  margin-left: 30px;
  position: relative;
  top: 34px;
  overflow: hidden;
  float: left;
  width: 70px;
}
.logo_city::after {
  content: " ";
  width: 20px;
  height: 20px;
  display: block;
  /* -webkit-transform: rotate(45deg); */
  transform: rotate(45deg);
  background: #ff6e2e;
  position: absolute;
  right: -13px;
  bottom: -13px;
}
.city {
  width: 500px;
  height: 330px;
  position: absolute;
  margin: 0px;
  background-color: white;
  z-index: 10;
  top: 100px;
  left: 20px;
  float: left;
}
.chooseCity {
  color: lightgray;
  font-size: 16px;
  margin-left: 25px;
  margin-top: -20px;
  height: 10%;
}
.city_div {
  width: 50%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  float: left;
}
.city_span {
  margin-left: 30px;
  margin-right: 10px;
  font-weight: 700;
  color: black;
}
.city_link {
  margin-right: 10px;
  color: black;
  display: inline-block;
  outline: none;
}
.city_link:hover {
  color: #ff6e2e;
}

ul {
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding-left: 50px;
  font-size: 16px;
}
ul > li {
  display: block;
  width: 110px;
  height: 80px;
  text-align: center;
  
}
ul > li > a {
  width: 110px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  display: inline-block;
  color: #333333;
  font-size: 16px;
}
ul > li:not(.bg_color) a:hover {
  color: #ff6e2e;
}
.bg_color {
  background-color: #ff6e2e;
  display: inline-block;
  color: white;
}
.bg_color a {
  color: #fff;
}

.dis-none {
  display: none;
}
.col {
  color: #ff6e2e;
}
.erweima a {
  background-image: url("../assets/images/phone.png");
  background-position: 7px 27px;
  background-repeat: no-repeat;
  background-size: 25px 27px;
}
</style>
<script>
export default {
  data() {
    return {
      showCityName: false,
      szm: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      citys: [],
      showMa: false,
      active: 1,
      navs: ["首页", "找房", "泊寓动态", "联系我们", "移动端"],
      c: this.$store.state.cityNames,
      imgs: [],
      showmd: "display:none",
      iserweima: "display:none",
      cityname_pinyin: "",
      bg: "",
    };
  },
  methods: {
    showewm() {
      if (this.iserweima == "display:none") this.iserweima = "display:block";
      else {
        this.iserweima = "display:none";
      }
      // console.log(1);
    },
    runto(e) {
      e.target.class = active;
    },
    showCity() {
      this.showCityName = true;
    },
    hideCity() {
      this.showCityName = false;
    },
    showErweima() {
      this.showMa = true;
    },
    hideErweima() {
      this.showMa = false;
    },
    abc(e) {
      let val = e.target.innerHTML;
      if (val == "首页") {
        this.$store.commit("changeheaderactive",1);
      } else if (val == "找房") {
        this.$store.commit("changeheaderactive",2);
        
      } else if (val == "泊寓动态") {
        this.$store.commit("changeheaderactive",3);

      } else if (val == "联系我们") {
        this.$store.commit("changeheaderactive",4);

      } else if (val == "移动端") {
        this.$store.commit("changeheaderactive",5);

      }
    },
    ccity(e) {
      this.c = e.target.innerHTML;
      this.active=1;
      // console.log(e.target.value)
      this.$store.commit("changecity", this.c);
    this.$store.commit("changeheaderactive",1);
      this.axios
        .get(`/backgroundimg?cityname=${this.$store.state.cityNames}`)
        .then((res) => {
          // console.log(res.data.result[0].url);
          this.$store.state.navImg = [];
          let bg = [];
          for (let i = 0; i < res.data.result.length; i++) {
            let bgimg = `background-image:url('${res.data.result[i].url}')`;
            bg.push(bgimg);
          }
          // console.log(bg);
          this.$store.commit("changebackground", bg);
          console.log();
        });
      this.axios
        .get(`countarea?city_name=${this.$store.state.cityNames}`)
        .then((res) => {
          this.$store.state.countarea = [];
          let arr = [{ value: 1, label: "全部" }];
          // console.log(res.data)
          for (let i = 0; i < res.data.length; i++) {
            let countarea = {};
            countarea.value = i + 2;
            countarea.label = res.data[i].area;
            arr.push(countarea);
          }
          this.$store.commit("countarea", arr);
          // console.log(this.$store.state.countarea);
        });
      this.axios
        .get(`/shopname?city_name=${this.$store.state.cityNames}`)
        .then((res) => {
          this.$store.state.shopnames = [];
          let shopname = [];
          for (let i = 0; i < 4; i++) {
            let obj = {};
            obj.address = res.data.result[i].address;
            obj.bg = res.data.result[i].bg;
            obj.price = res.data.result[i].price;
            obj.shopname = res.data.result[i].shopname;
            shopname.push(obj);
          }
          this.$store.commit("changeshopname", shopname);
        });
      this.axios
        .get(`/layout?city_name=${this.$store.state.cityNames}`)
        .then((res) => {
          let layout = [];
          for (let i = 0; i < 3; i++) {
            let obj = {};
            obj.address_details = res.data.result[i].address_details;
            obj.avator = res.data.result[i].avator;
            obj.max_price = res.data.result[i].max_price;
            obj.min_price = res.data.result[i].min_price;
            obj.shop_address = res.data.result[i].shop_address;
            obj.title = res.data.result[i].title;
            layout.push(obj);
          }
          this.$store.commit("changelayout", layout);
        });
      this.axios
        .get(`/boyudd?cityName=${this.$store.state.cityNames}`)
        .then((res) => {
          let boyudd = [];
          for (let i = 0; i < 4; i++) {
            let obj = {};
            obj.title = res.data.result[i].title;
            obj.title_img = res.data.result[i].title_img;

            boyudd.push(obj);
            // console.log(layout);
          }
          this.$store.commit("changeboyudd", boyudd);
        });
      this.axios
        .get(`/story?cityName=${this.$store.state.cityNames}`)
        .then((res) => {
          let story = [];
          for (let i = 0; i < 4; i++) {
            let obj = {};
            obj.title = res.data.result[i].title;
            obj.title_img = res.data.result[i].title_img;
            story.push(obj);
            // console.log(layout);
          }
          this.$store.commit("changestory", story);
        });
    },
    showMd() {
      this.showmd = "display:block";
    },
    closeMd() {
      this.showmd = "display:none";
    },
  },
  mounted() {
    this.$store.commit("changeheaderactive",1);
    this.axios.get("/city").then((res) => {
      let cityNames = res.data.result;
      for (let i = 0; i < this.szm.length; i++) {
        var cname = [];
        for (let n = 0; n < cityNames.length; n++) {
          if (this.szm[i] == cityNames[n].szm) {
            cname.push(cityNames[n].city_name);
          }
        }
        if (cname != "") {
          let cityObj = { szm: this.szm[i], cityNames: cname };
          this.citys.push(cityObj);
        }
      }
      // console.log(this.citys);
    });
  },
};
</script>

