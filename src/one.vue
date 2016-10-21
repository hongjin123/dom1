<template>
  <div id="one">
    one content
    <button @click="test">click</button>
  </div>
</template>

<script>
 	export default {
 		data(){
 			return{
 				info:"abc"
 			}
 		},
 		methods:{
 			test:function(){
 				alert(this.info)
 			}
 		}
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
