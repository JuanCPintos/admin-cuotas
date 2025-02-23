package models

import "time"

type Pago struct {
	ID           uint        `json:"id"`
	IDAlumno     uint        `json:"idalumno"`
	IDCuotaMonto uint        `json:"idcuotamonto"`
	Ualta        uint        `json:"ualta"`
	Alta         *time.Time  `json:"alta"`
	Estado       uint        `json:"estado"`
	Profesor     *Profesor   `json:"profesor" gorm:"references:ualta;ForeignKey:id`
	Alumno       Alumno      `json:"alumno" gorm:"references:idalumno;ForeignKey:id`
	CuotaMonto   Cuota_monto `json:"monto" gorm:"references:idcuotamonto;ForeignKey:id`
}

func (Pago) TableName() string {
	return "pagos"
}
