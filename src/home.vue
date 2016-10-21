<template>
  <div id="one">
    <h1>HOME</h1>
    <a v-link="{path:'/home/one11'}">one</a>
    <a v-link="{path:'/home/two'}">two</a>
    <a v-link="{path:'/home/three'}">three</a>
    <router-view></router-view>
  </div>
</template>

<script>
 	export default {
 		// data(){
 		// 	return{
 		// 		info:"abc"
 		// 	}
 		// },
 		// methods:{
 		// 	test:function(){
 		// 		alert(this.info)
 		// 	}
 		// }
 	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#one{
	width: 100%;
	height: 100%;
	color: #fff;
	background:#42b983;
}
</style>
