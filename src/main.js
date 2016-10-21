import Vue from 'vue'
import App from './App'
// var one = require("./one")
// var two = require("./two")
// var three3 = require("./three")
var VueRouter = require("vue-router");
var vueresource = require("vue-resource");
var routerConfig = require("./config");

// console.log(VueRouter)
Vue.use(VueRouter);
Vue.use(vueresource);
var router = new VueRouter();
// console.log(router)

routerConfig(router)


router.start(App,"#apps");
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
