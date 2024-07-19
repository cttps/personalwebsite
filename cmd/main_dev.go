//go:build dev

package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

/* notes:
CSR happens with the javascript after u build ur react app. So serving the static files with go doesn't make it redundant.
( the entire benefit it to modularly load each component of the app as needed, instead of loading the entire app at once.)
*/

func main() {
	r := gin.Default()

	if err := godotenv.Load(); err != nil {
		panic(err)
	}

	/*

		TODO:
		- MOVE ROUTING TO A DIFFERNET FILE.
		- SET UP SECURE HEADER/MW FOR APP
		- DO OTHER SECURITY STUFF FROM ARTICLE: https://slashdev.io/-guide-to-building-secure-backends-in-gin-golang-in-2024-2
		- MAYBE NEED TO SECURITIZE CORS (LOOK INTO)
		- FIX BUILD TAGS
		- PUT ON RAILWAY

	*/

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

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Println("Started on ", port)
	r.Run(":" + port)
}
