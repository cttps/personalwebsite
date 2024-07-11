package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

/* notes:
CSR happens with the javascript after u build ur react app. So serving the static files with go doesn't make it redundant.
( the entire benefit it to modularly load each component of the app as needed, instead of loading the entire app at once.)
*/

func main() {
	r := gin.Default()
	r.SetTrustedProxies(nil)

	api := r.Group("/api")
	{
		api.GET("/hello", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{"msg": "world"})
		})
	}

	r.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })
	r.Static("/static", "./web/build/static")

	frontendRoutes := []string{"/", "/about"}
	for _, route := range frontendRoutes {
		r.GET(route, func(ctx *gin.Context) {
			ctx.File("./web/build/index.html")
		})
	}

	fmt.Println("Started on 8080")
	r.Run(":8080")
}
