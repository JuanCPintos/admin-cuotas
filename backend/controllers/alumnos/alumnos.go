package alumnos

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
	Alumnos []models.Alumno `json:"alumnos,omitempty"`
}

func Create(c echo.Context) error {
	db := database.GetDb()
	var alumnoNuevo models.Alumno

	if err := c.Bind(&alumnoNuevo); err != nil {
		return c.JSON(http.StatusBadRequest, ResponseMessage{
			Status:  "error",
			Message: "Error en la informacion del body: " + err.Error(),
		})
	}

	if err := db.Save(&alumnoNuevo).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error al crear el registro del alumno: " + err.Error(),
		})
	}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status:  "success",
		Message: "El alumno se registro con exito",
	})
}

func GetAllPaginated(c echo.Context) error {
	db := database.GetDb()
	var alumnos []models.Alumno

	if err := db.Find(&alumnos).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error al obtener los alumnos: " + err.Error(),
		})
	}

	data := Data{Alumnos: alumnos}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status: "succes",
		Data:   data,
	})
}

func Update(c echo.Context) error {
	db := database.GetDb()
	idAlumno := c.Param("id")

	var alumno models.Alumno
	if err := c.Bind(&alumno); err != nil {
		return c.JSON(http.StatusBadRequest, ResponseMessage{
			Status:  "error",
			Message: "Solicitud invalida: " + err.Error(),
		})
	}

	result := db.Where("id=?", idAlumno).Updates(&alumno)

	if result.RowsAffected == 0 {
		return c.JSON(http.StatusNotFound, ResponseMessage{
			Status:  "error",
			Message: "No se encontro el usuario",
		})
	}
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error del servidor al actualizar el usuario: " + result.Error.Error(),
		})
	}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status:  "success",
		Message: "El usuario se actualizo con exito",
	})
}

func Delete(c echo.Context) error {
	db := database.GetDb()
	idAlumno := c.Param("id")

	var alumno models.Alumno

	result := db.Where("estado = 1").First(&alumno, "id=?", idAlumno)

	if result.RowsAffected == 0 {
		return c.JSON(http.StatusNotFound, ResponseMessage{
			Status:  "error",
			Message: "No existe usuario",
		})
	}
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error del sistema al identificar usuario: " + result.Error.Error(),
		})
	}

	alumno.Estado = 0

	if err := db.Save(&alumno).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, ResponseMessage{
			Status:  "error",
			Message: "Error del sistema al eliminar usuario: " + err.Error(),
		})
	}

	return c.JSON(http.StatusOK, ResponseMessage{
		Status:  "success",
		Message: "El usuario se dio de baja",
	})
}
