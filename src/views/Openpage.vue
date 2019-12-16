<template>
  <div class="OpenPage">
    <div class="download_options">
      <div @click="handledownload('ios')" class="iphone_path">
        <img src="../assets/openpage/IosIcon.png" />
        <span>iphone下载</span>
      </div>

      <div @click="handledownload('android')" class="android_path">
        <img src="../assets/openpage/androidIcon.png" />
        <span>Android下载</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "OpenPage",
  methods:{
    handledownload(option){
      console.log(option)
      switch (option) {
        case 'ios':{
          console.log('下载Ios');
          break;
        }
        case 'android': {
          console.log('下载Android');
          break;
        }
        default: return;
      }
    }
  }
};
</script>

<style scoped>
.OpenPage {
  width: 100vw;
  height: 216.53vw;
  background: url("../assets/openpage/openpagebgimg.jpg") no-repeat;
  background-size: 100%;
  position: relative;
}
.download_options {
  width: 100vw;
  display: flex;
  position: absolute;
  bottom: 7.14vw;
}
.android_path, .iphone_path{
  width: 33.33vw;
	height: 10.67vw;
	border-radius: 5.33vw;
	border: solid 0.27vw #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
	font-size: 3.47vw;
	line-height: 3.73vw;
  color: #ffffff;
}
.android_path {
  position: absolute;
  right: 12.13vw;
}
.iphone_path{
  margin-left: 12.13vw;
  width: 33.33vw;
	height: 10.67vw;
	background-color: #ffffff;
	border-radius: 5.33vw;
	color: #6f53ff;
}
.iphone_path img, .android_path img {
  display: block;
  width: 4.27vw;
	height: 5.07vw;
  margin-right: 6px;
}
</style>
