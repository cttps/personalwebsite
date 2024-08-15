//go:build prod

package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)

	r := gin.Default()
	r.SetTrustedProxies(nil)

	// Comment if you want to see server debug logs

	api := r.Group("/api")
	{
		api.GET("/hello", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{"msg": "world"})
		})
	}

	r.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })
	r.Static("/static", "./web/build/static")

	frontendRoutes := []string{"/", "/about", "/projects", "/omTimer", "/contact", "/posts"}
	for _, route := range frontendRoutes {
		r.GET(route, func(ctx *gin.Context) {
			ctx.File("./web/build/index.html")
		})
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Println("Started on ", port)
	r.Run("0.0.0.0:" + port)
}
