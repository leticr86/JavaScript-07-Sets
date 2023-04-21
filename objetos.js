// Objeto con datos personales
const misDatos = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  altura: 180,
  eresDesarrollador: true,
};

// Obtener edad a partir del objeto
const edad = misDatos.edad;

// Lista con objetos de datos personales
const listaDatosPersonales = [
  misDatos,
  {
    nombre: "Ana",
    apellido: "Gómez",
    edad: 28,
    altura: 165,
    eresDesarrollador: false,
  },
  {
    nombre: "Carlos",
    apellido: "Ramírez",
    edad: 33,
    altura: 175,
    eresDesarrollador: true,
  },
];

// Lista ordenada por edad, de mayor a menor
const listaOrdenadaPorEdad = listaDatosPersonales.sort((a, b) => b.edad - a.edad);
