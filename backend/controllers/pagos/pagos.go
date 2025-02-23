package pagos

import (
	"main/database"
	"main/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

type ResponseMessage struct {
	Status  string `json:"status"`
	Message string `json:"message,omitempty"`
	Data    Data   `json:"data,omitempty"`
}

type Data struct {
	Pagos []models.Pago `json:"pagos,omitempty"`
	Pago  *models.Pago   `json:"pago,omitempty"`
}

func Create(c echo.Context) error {
	db := database.GetDb()

	var pago *models.Pago
	if err := c.Bind(&pago); err != nil {
		return c.JSON(http.StatusBadRequest, ResponseMessage{
			Status:  "error",
			Message: "La estructura del pago no cumple los requisitos: " + err.Error(),
		})
	}

	if err := db.Create(&pago).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error del servidor al crear el pago: " + err.Error(),
		})
	}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status:  "success",
		Message: "El pago se registro con exito!",
	})
}

func GetAllPaginated(c echo.Context) error {
	db := database.GetDb()
	var pagos []models.Pago

	if err := db.Find(&pagos).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error al obtener los pagos: " + err.Error(),
		})
	}

	data := Data{Pagos: pagos}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status: "succes",
		Data:   data,
	})
}

func GetByID(c echo.Context) error {
	db := database.GetDb()
	id := c.Param("id")
	var pago *models.Pago

	if err := db.First(&pago, id).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error al obtener el pago: " + err.Error(),
		})
	}

	data := Data{Pago: pago}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status: "succes",
		Data:   data,
	})
}
