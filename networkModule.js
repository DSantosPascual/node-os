const os = require('os');

function obtenerInfoRed() {
  const interfaces = os.networkInterfaces();
  const info = [];

  for (const interfaz in interfaces) {
    interfaces[interfaz].forEach((detalles) => {
      info.push({
        interfaz: interfaz,
        familia: detalles.family,
        direccion: detalles.address,
        interno: detalles.internal
      });
    });
  }

  return info;
}

module.exports = obtenerInfoRed;
