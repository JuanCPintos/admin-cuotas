package models

import "time"

type Cuota struct {
	ID          uint   `json:"id"`
	Descripcion string `json:"descripcion"`
	Estado      uint   `json:"estado"`
}

func (Cuota) TableName() string {
	return "cuotas"
}

type Cuota_monto struct {
	ID      uint       `json:"id"`
	Monto   float64    `json:"monto"`
	Fecha   *time.Time `json:"fecha"`
	IDCuota uint       `json:"idcuota"`
	Estado  uint       `json:"estado"`
	Cuota   Cuota      `json:"cuota" gorm:"references:idcuota:ForeignKey:id"`
}

func (Cuota_monto) TableName() string {
	return "cuotas_montos"
}
