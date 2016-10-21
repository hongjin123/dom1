

module.exports = function(router){
	router.map({
		"/login":{
			component:function(resolve){
				require(["./login"],resolve)
			}
		},
		"/home":{
			component:function(resolve){
				require(["./home"],resolve)
			},
			subRoutes:{
				"/one11":{
					component:function(resolve){
						require(["./one"],resolve)
					}
				},
				"/two":{
					component:function(resolve){
						require(["./two"],resolve)
					}
				},
				"/three":{
					component:function(resolve){
						require(["./three"],resolve)
					}
				}
			}
		}
	})
	router.redirect({
		"/":"/login",
		"*":"/err"
	})

}

