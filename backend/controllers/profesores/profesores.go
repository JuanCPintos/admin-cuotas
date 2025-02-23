package profesores

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
	Profesores []models.Profesor `json:"profesores,omitempty"`
}

func Create(c echo.Context) error {
	db := database.GetDb()
	var profesor models.Profesor
	if err := c.Bind(&profesor); err != nil {
		return c.JSON(http.StatusBadRequest, ResponseMessage{
			Status:  "error",
			Message: "Solicitud invalida: " + err.Error(),
		})
	}

	if err := db.Create(&profesor).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error del servidor al crear registro del profesor: " + err.Error(),
		})
	}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status:  "success",
		Message: "Se registro al profesor con exito",
	})
}

func GetPaginated(c echo.Context) error {
	db := database.GetDb()
	var profesores []models.Profesor

	if err := db.Find(&profesores).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error al obtener los profesores: " + err.Error(),
		})
	}

	data := Data{Profesores: profesores}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status: "succes",
		Data:   data,
	})
}

func Update(c echo.Context) error {
	db := database.GetDb()
	idProfesor := c.Param("id")

	var profesor models.Profesor
	if err := c.Bind(&profesor); err != nil {
		return c.JSON(http.StatusBadRequest, ResponseMessage{
			Status:  "error",
			Message: "Solicitud invalida: " + err.Error(),
		})
	}

	result := db.Where("id=?", idProfesor).Updates(&profesor)

	if result.RowsAffected == 0 {
		return c.JSON(http.StatusNotFound, ResponseMessage{
			Status:  "error",
			Message: "No se encontro el profesor",
		})
	}
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error del servidor al actualizar el profesor: " + result.Error.Error(),
		})
	}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status:  "success",
		Message: "El profesor se actualizo con exito",
	})
}

func Delete(c echo.Context) error {
	db := database.GetDb()
	idProfesor := c.Param("id")

	var profesor models.Profesor

	result := db.Where("estado = 1").First(&profesor, "id=?", idProfesor)

	if result.RowsAffected == 0 {
		return c.JSON(http.StatusNotFound, ResponseMessage{
			Status:  "error",
			Message: "No existe profesor",
		})
	}
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error del sistema al identificar profesor: " + result.Error.Error(),
		})
	}

	profesor.Estado = 0

	if err := db.Save(&profesor).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error del sistema al eliminar profesor: " + err.Error(),
		})
	}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status:  "success",
		Message: "El profesor se dio de baja",
	})
}
