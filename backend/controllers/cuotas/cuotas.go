package cuotas

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
	Cuotas []models.Cuota `json:"cuotas,omitempty"`
}

func Create(c echo.Context) error {
	db := database.GetDb()
 	var cuota *models.Cuota

	if err := c.Bind(&cuota); err!=nil{
		return c.JSON(http.StatusBadRequest, ResponseMessage{
			Status: "error",
			Message: "La estructura de la cuota no cumple los requisitos: "+err.Error(),
		})
	}

	if err := db.Create(&cuota).Error; err!=nil{
		return c.JSON(http.StatusBadRequest, ResponseMessage{
			Status: "error",
			Message: "Error del servidor al crear la cuota: "+err.Error(),
		})
	}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status: "success",
		Message: "La cuota se reguistro con exito!",
	})
}

func GetAllPaginated(c echo.Context) error {
	db := database.GetDb()
	var cuotas []models.Cuota

	if err := db.Find(&cuotas).Error; err!=nil{
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status: "error",
			Message: "Error al obtener las cuotas: "+err.Error(),
		})
	}

	data := Data{Cuotas: cuotas}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status: "success",
		Data: data,
	})
}