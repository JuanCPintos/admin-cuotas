package models

import "time"

type Profesor struct {
	ID         uint       `json:"id"`
	Nombre     string     `json:"nombre"`
	Apellido   string     `json:"apellido"`
	Telefono   string     `json:"telefono"`
	Estado     uint       `json:"estado"`
	Anotacion  string     `json:"anotacion"`
	Edad       int64      `json:"edad"`
	Nacimiento *time.Time `json:"nacimiento"`
}

func (Profesor) TableName() string {
	return "profesores"
}
