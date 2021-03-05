<template>
  <div class="body" style="padding:90px 0px">
    <div class="left">
      <img
        src="https://static.inboyu.com/pc/web/images/about-contact.png"
        alt=""
      />
    </div>
    <div class="right">
      <div class="style">
        <div class="title">泊寓·城市青年家</div>
        <div class="details">
          泊寓，城市青年家。我们提供不是简单的住宿，而是一种全新的生活方式，我们有态度有追求，注重生活品质，我们提供免费公区WIFI
          ，免费健身房，免费社交场地等等，年轻人所需要的，我们都有，家私齐全，拎包入住，全天保安，公区无死角监控，你在意的居住安全，我们比你更在意。
        </div>
        <input type="text" placeholder="姓名" /><input
          type="text"
          placeholder="手机/QQ/Email"
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="有任何咨询或希望商讨合作机会，请留下您的信息，我们会尽快回复您"
        ></textarea>
        <button>提交</button>
      </div>
    </div>
  </div>
</template>
 <style>
* {
  margin: 0;
  padding: 0;
}
.body {
  width: 1200px;
  margin: 80px auto 20px;
  display: flex;
}
.left {
  flex: 0 0 20%;
}
.right {
  flex: 0 0 74%;
}
.style {
  padding-left: 40px;
}
.left > img {
  width: 307.509px;
  height: 277px;
}
.title {
  font-size: 30px;
  color: #333;
  margin-bottom: 20px;
}
.details {
  font-size: 14px;
  color: #666;
  line-height: 2em;
  margin-bottom: 30px;
}
textarea {
  display: block;
  width: 80%;
  height: 80px;
  line-height: 1.8em;
  padding: 10px 14px;
  border: 1px solid #edeff0;
  font-size: 14px;
  margin-top: 10px;
  color: #333;
  border-radius: 4px;
}
input {
  font-size: 14px;
  height: 40px;
  width: 39%;
  border: 1px solid #edeff0;
  padding-left: 14px;
  color: #333;
  border-radius: 4px;
}
.style > input:nth-child(4) {
  margin-left: 15px;
}
button {
  width: 130px;
  height: 40px;
  border-radius: 3px;
  background-color: #ff6e2e;
  color: #fff;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  border: none;
  margin-top: 10px;
}
</style>