<template>
  <div id="appcolor">
    <img class="logo" src="./assets/logo.png">

    <hello></hello>
    <button @click="sendChild">发送</button>
  </div>
    <router-view></router-view>
</template>

<script>
import Hello from './components/Hello'

export default {

  components: {

    Hello

  },
  events:{

    "childev":function(msg){

      console.log(msg);

    }

  },
  methods:{

    sendChild:function(){
      this.$broadcast("abc","hellow parent");
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html {
  width: 100%;
  height: 100%;
}

body {
  /*display: flex;*/
  /*align-items: center;
  justify-content: center;*/
  width: 100%;
  height: 100%;
}

#appcolor {
  color: #2c3e50;
  margin-top: -100px;
  /*max-width: 600px;*/
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#appcolor a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
