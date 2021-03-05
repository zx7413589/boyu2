<template>
      <div class="bd">
    <!--嵌入的主体部分-->



    <div class="app-bd">

      <div class="slide slide1">
        <div class="bg"
          style="background-image: url(https://static.inboyu.com/pc/web/images/app-s1-bg.png?v=202008211515);"></div>
        <div class="slide-inner">
          <div class="title"
            style="background-image: url(https://static.inboyu.com/pc/web/images/app-s1-title.png?v=202008211515)">
          </div>
          <div class="phone"
            style="background-image: url(https://static.inboyu.com/pc/web/images/app-s1-phone.png?v=202008211515)">
          </div>
          <div class="download">

            <div class="download-qrcode"
              style="background-image: url(https://static.inboyu.com/pc/web/images/qrcode.png?v=202008211515);"></div>
            <div class="qrcode-title">
              <p class="t1">扫描下载泊寓App</p>
              <p class="t2">随时随地查看新上房源</p>
            </div>
          </div>
        </div>
      </div>

      <div class="slide slide2">
        <div class="slide-content">
          <div class="slide-content-inner">
            <div class="slide-content-title">在线签约 化繁为简</div>
            <div class="slide-content-sub">签约选房+人脸识别+电子合同=省心有保障</div>
            <div class="phone"
              style="background-image: url(https://static.inboyu.com/pc/web/images/app-s2-phone.jpg?v=202008211515);">
            </div>
          </div>
        </div>
      </div>

      <div class="slide slide2">
        <div class="slide-content">
          <div class="slide-content-inner right">
            <div class="slide-content-title">在线支付 方便快捷</div>
            <div class="slide-content-sub">可通过微信和支付宝直接支付账单等费用</div>
            <div class="phone"
              style="background-image: url(https://static.inboyu.com/pc/web/images/app-s3-phone.jpg?v=202008211515);">
            </div>
          </div>
        </div>
      </div>

      <div class="slide slide2">
        <div class="slide-content">
          <div class="slide-content-inner">
            <div class="slide-content-title">线上报修 靠谱省心</div>
            <div class="slide-content-sub">随时线上新增报修 实时查看报修进度</div>
            <div class="phone"
              style="background-image: url(https://static.inboyu.com/pc/web/images/app-s4-phone.jpg?v=202008211515);">
            </div>
          </div>
        </div>
      </div>

      <div class="btm-bg btm-bg2"
        style="background-image: url(https://static.inboyu.com/pc/web/images/app-s2-bg.jpg?v=202008211515);"></div>
      <div class="btm-bg btm-bg3"
        style="background-image: url(https://static.inboyu.com/pc/web/images/app-s3-bg.jpg?v=202008211515);"></div>
      <div class="btm-bg btm-bg4"
        style="background-image: url(https://static.inboyu.com/pc/web/images/app-s4-bg.jpg?v=202008211515);"></div>
    </div>

  </div>
</template>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  /* .app-bd {
    /* padding-top: 90px; */
  

  .app-bd .slide1 {
    height: 1000px;
    background-color: #fff;
  }

  .app-bd .slide {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .app-bd .slide1 .bg {
    position: absolute;
    background-position: bottom center;
    background-repeat: no-repeat;
    width: 100%;
    height: 651px;
    top: 349px;
  }

  .app-bd .slide-inner {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .app-bd .slide1 .title {
    width: 497px;
    height: 197px;
    background-size: 100% 100%;
    position: absolute;
    top: 310px;
    left: 60px;
  }

  .app-bd .slide1 .phone {
    position: absolute;
    top: 190px;
    left: 601px;
    width: 599px;
    height: 1121px;
  }

  .app-bd .slide1 .download {
    width: 440px;
    position: absolute;
    top: 500px;
    left: 90px;
  }

  .app-bd .slide1 .download .download-qrcode {
    width: 140px;
    height: 140px;
    position: absolute;
    background-size: 100% 100%;
    left: 25px;
    top: 72px;
  }

  .app-bd .slide1 .download .qrcode-title {
    display: inline-block;
    position: absolute;
    top: 100px;
    right: 0px;
  }

  .app-bd .slide1 .download .qrcode-title .t1 {
    color: #333333;
    font-size: 28px;
    font-weight: bold;
  }

  .app-bd .slide1 .download .qrcode-title .t2 {
    color: #333333;
    font-size: 20px;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .app-bd .slide2 {
    width: 100%;
    height: 1200px;
  }

  .app-bd .slide-content {
    background-color: #fff;
    width: 100%;
    height: 540px;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #333;
  }

  .app-bd .slide-content .slide-content-inner {
    width: 1000px;
    margin: 0 auto;
    padding: 170px 100px 0;
    position: relative;
  }

  .app-bd .slide-content .slide-content-inner .slide-content-title {
    font-size: 60px;
  }

  .app-bd .slide-content .slide-content-inner .slide-content-sub {
    font-size: 24px;
    margin-top: 30px;
  }

  .app-bd .slide-content .slide-content-inner .phone {
    width: 408px;
    height: 724px;
    background-position: center;
    position: absolute;
    right: 0;
    top: -240px;
    -webkit-box-shadow: 0 6px 12px rgb(121 121 121 / 20%);
    box-shadow: 0 6px 12px rgb(121 121 121 / 20%);
  }

  .app-bd .slide2 {
    width: 100%;
    height: 1200px;
  }

  .app-bd .slide-content {
    background-color: #fff;
    width: 100%;
    height: 540px;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #333;
  }

  .app-bd .slide-content .slide-content-inner.right {
    text-align: right;
  }

  .app-bd .slide-content .slide-content-inner {
    width: 1000px;
    margin: 0 auto;
    padding: 170px 100px 0;
    position: relative;
  }

  .app-bd .slide-content .slide-content-inner .slide-content-title {
    font-size: 60px;
  }

  .app-bd .slide-content .slide-content-inner .slide-content-sub {
    font-size: 24px;
    margin-top: 30px;
  }

  .app-bd .slide-content .slide-content-inner.right .phone {
    left: 0;
    right: auto;
  }

  .app-bd .slide-content .slide-content-inner .phone {
    width: 408px;
    height: 724px;
    background-position: center;
    position: absolute;
    right: 0;
    top: -240px;
    -webkit-box-shadow: 0 6px 12px rgb(121 121 121 / 20%);
    box-shadow: 0 6px 12px rgb(121 121 121 / 20%);
  }

  .app-bd .slide2 {
    width: 100%;
    height: 1200px;
  }

  .app-bd .slide {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .app-bd .slide-content {
    background-color: #fff;
    width: 100%;
    height: 540px;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #333;
  }

  .app-bd .slide-content .slide-content-inner {
    width: 1000px;
    margin: 0 auto;
    padding: 170px 100px 0;
    position: relative;
  }

  .app-bd .slide-content .slide-content-inner .slide-content-title {
    font-size: 60px;
  }

  .app-bd .slide-content .slide-content-inner .slide-content-sub {
    font-size: 24px;
    margin-top: 30px;
  }

  div {
    display: block;
  }

  element.style {
    background-image: url(https://static.inboyu.com/pc/web/images/app-s2-bg.jpg?v=202008211515);
    height: 677px;
  }

  .app-bd .btm-bg.btm-bg2 {
    z-index: -1000;
  }

  .app-bd .btm-bg {
    background-position: top center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 90px;
    left: 0;
  }

  element.style {
    background-image: url(https://static.inboyu.com/pc/web/images/app-s3-bg.jpg?v=202008211515);
    height: 677px;
  }

  .app-bd .btm-bg.btm-bg3 {
    z-index: -2000;
  }

  .app-bd .btm-bg {
    background-position: top center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 90px;
    left: 0;
  }

  element.style {
    background-image: url(https://static.inboyu.com/pc/web/images/app-s4-bg.jpg?v=202008211515);
    height: 677px;
  }

  .app-bd .btm-bg.btm-bg4 {
    z-index: -3000;
  }

  .app-bd .btm-bg {
    background-position: top center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 90px;
    left: 0;
  }
</style>