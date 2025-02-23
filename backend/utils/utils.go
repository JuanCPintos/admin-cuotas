package utils

import (
	"strconv"

	jwt "github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
)

func GetUserId(c echo.Context) uint {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	id, _ := strconv.ParseUint(claims["idusuario"].(string), 10, 32)

	return uint(id)
}