// Creo el constructor del libro
function Libro(titulo, autor, anio, estado) {
  this.titulo = titulo;
  this.autor = autor;
  this.anio = anio;
  this.estado = estado;
  this.capitulos = [];

  // Método para describir el libro
  this.describirLibro = function () {
    return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
  };

  // Método para agregar un capítulo
  this.agregarCapitulo = function (capitulo) {
    this.capitulos.push(capitulo);
  };

  // Método para eliminar un capítulo
  this.eliminarCapitulo = function (capitulo) {
    const index = this.capitulos.indexOf(capitulo);
    if (index > -1) {
      this.capitulos.splice(index, 1);
    } else {
      console.log("Capítulo no encontrado.");
    }
  };

  // Método para mostrar los capítulos
  this.mostrarCapitulos = function () {
    if (this.capitulos.length === 0) {
      console.log("Este libro no tiene capítulos.");
    } else {
      console.log("Capítulos del libro:");
      this.capitulos.forEach((cap, index) => {
        console.log(`${index + 1}. ${cap}`);
      });
    }
  };
}

// Creó 3 libros 
const libro1 = new Libro(
  "Cien Años de Soledad",
  "Gabriel García Márquez",
  1967,
  "disponible"
);
const libro2 = new Libro("1984", "George Orwell", 1949, "prestado");
const libro3 = new Libro(
  "El Gran Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "disponible"
);

// Agrego capítulos a los libros
libro1.agregarCapitulo("Capítulo 1: La casa de los Buendía");
libro1.agregarCapitulo("Capítulo 2: El ascenso de la familia");
libro2.agregarCapitulo("Capítulo 1: La vigilancia del Estado");

// Imprimir la información de los libros
console.log(libro1.describirLibro());
libro1.mostrarCapitulos();
console.log("\n");

console.log(libro2.describirLibro());
libro2.mostrarCapitulos();
console.log("\n");

console.log(libro3.describirLibro());
libro3.mostrarCapitulos();
