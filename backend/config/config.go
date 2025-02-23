package config

import (
	"github.com/magiconair/properties"
)

var envProps *properties.Properties

const Version = "1.0"
const Semilla = "S8[!'N+?_S8hw;.u" + Version
const Claveblanqueada = "1234"

func LoadEnvProps(file string) {
	envProps = properties.MustLoadFile(file, properties.UTF8)
}

func GetString(key string) string {
	return envProps.GetString(key, "")
}
func GetBoolean(key string) bool {
	return envProps.GetString(key, "") == "true"
}

const PermisosTotal = 1
const PermisosConsulta = 2
const PermisosAlta = 3
const PermisosBaja = 4
const PermisosModificacion = 5
