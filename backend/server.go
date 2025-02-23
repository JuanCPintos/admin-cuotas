package main

import (
	//"caar/auth"

	//"log"

	"main/config"
	"main/database"
	"main/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	// Echo instance
	e := echo.New()
	e.Use(middleware.Static("/static"))
	e.Static("/api/static", "static")

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	config.LoadEnvProps("env.properties")
	database.InitDb(config.GetString("dbStr"))
	httpPort := config.GetString("httpPort")

	/* auth, err := auth.New() 
    if err != nil {
        log.Fatalf("Failed to initialize the authenticator: %v", err)
    } */

	//API routes
	routes.InitRoutes(e)

	// Start server
	e.Logger.Fatal(e.Start(httpPort))
}