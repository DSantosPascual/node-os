const obtenerInfoSistema = require('./osModule');
const obtenerInfoRed = require('./networkModule');

//! Info del S.O.
const infoSistema = obtenerInfoSistema();
console.log("Información del Sistema Operativo:");
console.log(`Nombre: ${infoSistema.nombre}`);
console.log(`Tipo: ${infoSistema.tipo}`);
console.log(`Versión: ${infoSistema.version}`);
console.log(`Arquitectura: ${infoSistema.arquitectura}`);
console.log(`CPUs: ${infoSistema.cpus}`);
console.log(`MemoriaTotal: ${infoSistema.memoriaTotal} MB`);
console.log(`MemoriaLibre: ${infoSistema.memoriaLibre} MB`);

//! Info de red
console.log("\nInformación de la Red:");
const infoRed = obtenerInfoRed();
infoRed.forEach((info) => {
  console.log(`Interfaz ${info.interfaz}:`);
  console.log(`  Familia: ${info.familia}`);
  console.log(`  Dirección: ${info.direccion}`);
  console.log(`  Interno: ${info.interno}`);
});
