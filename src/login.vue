<template>
  <div id="one">
    用户名：<input type="text" v-model="username">
    密码：<input type="text" v-model="password">
    <button @click="login">登录</button>
  </div>
</template>

<script>
 	export default {
 		data(){
 			return{
 				username:"",
        password:""
 			}
 		},
    events:{
      "abc":function(msg){
        console.log(msg);
      }
    },
 		methods:{
 			login:function(){
        // console.log(this)
        this.$dispatch("childev","child message");
        this.$http.get("static/data.json")
        .then(function(res){

              var name=res.body.name
              var password=res.body.password
              console.log(this.name)
                    if(this.username==name && this.password==password){
                      this.$router.go("/home")
                    }
        })

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
