const os = require('os');

function obtenerInfoSistema() {
  const nombre = os.platform();
  const tipo = os.type();
  const version = os.version();
  const arquitectura = os.arch();
  const cpus = os.cpus().length;
  const memoriaTotal = (os.totalmem() / 1024 / 1024).toFixed(2); //! Para convertirlo a MB
  const memoriaLibre = (os.freemem() / 1024 / 1024).toFixed(2); 

  return {
    nombre,
    tipo,
    version,
    arquitectura,
    cpus,
    memoriaTotal,
    memoriaLibre
  };
}

module.exports = obtenerInfoSistema;
