package routes

import (
	alumnosController "main/controllers/alumnos"
	cuotasController "main/controllers/cuotas"
	pagosController "main/controllers/pagos"
	profesoresController "main/controllers/profesores"
	// "main/routes/middleware"
	"main/utils"
	"net/http"

	// "github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
)

func InitRoutes(e *echo.Echo) {
	private := e.Group("/api") //privado con JWT

	// private.Use(middleware.ValidarToken())

	private.GET("/csrf", func(c echo.Context) error {
		// Generar el token CSRF
		token, _ := utils.GenerateToken(c)
		type data struct {
			Csrf string `json:"csrf_token"`
		}
		d := new(data)
		d.Csrf = token
		return c.JSON(http.StatusOK, d)
	})

	//alumnos
	private.POST("/alumno", alumnosController.Create)            //crear
	private.GET("/alumnos", alumnosController.GetAllPaginated)   //obtener paginados
	private.PUT("/alumnos/:id/delete", alumnosController.Delete) //baja
	private.PUT("/alumnos/:id/update", alumnosController.Update) //actualizacion

	//profesores
	private.POST("/profesores", profesoresController.Create)           //crear
	private.GET("/profesores", profesoresController.GetPaginated)      //obtener paginados
	private.PUT("/profesores/:id/delete", profesoresController.Delete) //baja
	private.PUT("/profesores/:id/update", profesoresController.Update) //actualizacion

	//cuotas
	private.POST("/cuotas", cuotasController.Create)         //crear
	private.GET("/cuotas", cuotasController.GetAllPaginated) //obtener paginados
	// private.PUT("/cuotas/:id/delete", cuotasController.Delete) //baja
	// private.PUT("/cuotas/:id/update", cuotasController.Update) //actualizacion

	//pagos
	private.POST("/pagos", pagosController.Create)         //crear
	private.GET("/pagos", pagosController.GetAllPaginated) //obtener paginados
	// private.PUT("/pagos/:id/delete", pagosController.Delete) //baja
	// private.PUT("/pagos/:id/update", pagosController.Update) //actualizacion

	// private.GET("/pagos/alumno/:id", pagosController.GetByAlumno) //obtener pagos por alumno
	// private.GET("/pagos/cuota/:id", pagosController.GetByCuota)   //obtener pagos por cuota
	// private.GET("/pagos/fecha/:fecha", pagosController.GetByFecha) //obtener pagos por fecha
	// private.GET("/pagos/alumno/:id/cuota/:cuota", pagosController.GetByAlumnoCuota) //obtener pagos por alumno y cuota
	// private.GET("/pagos/alumno/:id/fecha/:fecha", pagosController.GetByAlumnoFecha) //obtener pagos por alumno y fecha
	// private.GET("/pagos/cuota/:cuota/fecha/:fecha", pagosController.GetByCuotaFecha) //obtener pagos por cuota y fecha
	// private.GET("/pagos/alumno/:id/cuota/:cuota/fecha/:fecha", pagosController.GetByAlumnoCuotaFecha) //obtener pagos por alumno, cuota y fecha
	// private.GET("/pagos/alumno/:id/fecha/:fecha/cuota/:cuota", pagosController.GetByAlumnoFechaCuota) //obtener pagos por alumno, fecha y cuota
	// private.GET("/pagos/cuota/:cuota/alumno/:id/fecha/:fecha", pagosController.GetByCuotaAlumnoFecha) //obtener pagos por cuota, alumno y fecha

}
