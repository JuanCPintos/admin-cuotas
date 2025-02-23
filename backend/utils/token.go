package utils

import (
	"errors"
	"net/http"

	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
)

var Tsrf = map[uint]string{}

func GenerateToken(c echo.Context) (string, error) {
	userID := GetUserId(c)
	token := uuid.New().String()
	Tsrf[userID] = token
	return token, nil
}

func VerifyToken(c echo.Context) error {
	tokenString := c.Request().Header.Get("csrf_token")
	userID := GetUserId(c)
	if Tsrf[userID] == tokenString {
		Tsrf[userID] = ""
		return nil
	}
	return errors.New("token no válido")
}

func Init(c echo.Context) error {
	// Generar el token CSRF
	token := uuid.New().String()
	type data struct {
		Csrf string `json:"csrf_token"`
	}
	d := new(data)
	d.Csrf = token
	return c.JSON(http.StatusOK, d)
}
