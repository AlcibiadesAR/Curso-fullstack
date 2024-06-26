const prompt = require("prompt-sync")({ sigint: true });

let tusTareas = [];
let categoria = ["trabajo", "personal"];

function mostrarCategorias() {
  console.log("Categorias existentes: ");
  categoria.forEach(function (categoria, indice) {
    console.log(indice + ": " + categoria);
  });
}

function AgregarCategorias(nombreDeCategoria) {
  categoria.push(nombreDeCategoria);
  console.log("categoria " + nombreDeCategoria + " agregada con exito!!");
}

function agregartusTareas(nombreDeTarea, fechaDeCulminación = null) {
  mostrarCategorias();

  let numeroDeCategoria = parseInt(
    prompt("Ingrese el numero de la categoria para la nueva tarea: ")
  );

  if (numeroDeCategoria >= 0 && numeroDeCategoria < categoria.length) {
    tusTareas.push({
      nombre: nombreDeTarea,
      culminada: false,
      fecha: fechaDeCulminación,
      categoria: numeroDeCategoria,
    });
    console.log("Tarea agregada con exito!!");
  } else {
    console.log("Numero de categoria incorrecto!");
  }
}

function eliminartusTareas(indice) {
  if (indice >= 0 && indice <= tusTareas.length) {
    tusTareas.splice(indice, 1);
    console.log("Tarea eliminada correctamente!!");
  } else {
    console.log("Indice de tarea invalido");
  }
}

function marcartusTareas(indice) {
  if (indice >= 0 && indice <= tusTareas.length) {
    tusTareas[indice].completada = true;
    console.log("Tarea marcada con exito");
  } else {
    console.log("Indice de tarea invalido");
  }
}

function modificartusTareas(
  indice,
  nombreNuevo,
  fechaNueva = null,
  nuevoNumeroDeCategoria
) {
  if (indice >= 0 && indice <= tusTareas.length) {
    tusTareas[indice].nombre =
      nombreNuevo !== undefined ? nombreNuevo : tusTareas[indice].nombre;
    tusTareas[indice].fecha =
      fechaNueva !== undefined ? fechaNueva : tusTareas[indice].fecha;
    tusTareas[indice].categoria =
      nuevoNumeroDeCategoria !== undefined
        ? nuevoNumeroDeCategoria
        : tusTareas[indice].categoria;
    console.log("Modificacion correcta!!");
  } else {
    console.log("Indice de tarea invalido");
  }
}

function mostrarMenu() {
  console.log("---Menu---");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Modificar tarea");
  console.log("5. Mostrar todas las Tareas");
  console.log("6. Mostrar todas las categorias");
  console.log("7. Agregar categoria");
  console.log("0. Salir");
}

function interactuarConUsuario() {
  let opcion = -1;

  while (opcion != 0) {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese la opcion seleccionada: "));

    switch (opcion) {
      case 1:
        let nombreTarea = prompt("Ingrese el nombre de la tarea a cargar: ");
        agregartusTareas(nombreTarea);
        break;
      case 2:
        let indiceAEliminar = parseInt(
          prompt("Ingrese el indice de la tarea a eliminar: ")
        );
        eliminartusTareas(indiceAEliminar);
        break;
      case 3:
        let indiceAMarcar = parseInt(
          prompt("Ingrese el indice de la tarea a marcar: ")
        );
        marcartusTareas(indiceAMarcar);
        break;
      case 4:
        let indice = parseInt(
          prompt("Ingrese el indice de la tarea a modificar: ")
        );
        if (indice >= 0 && indice < tusTareas.length) {
          let opcion = parseInt(
            prompt(
              "¿Que propiedad desea modificar? 1. nombre, 2. fecha, 3. numero de categoria"
            )
          );
          switch (opcion) {
            case 1:
              let nombreNuevo = prompt("Ingrese el nuevo nombre de tu tarea: ");
              modificartusTareas(indice, nombreNuevo);
              break;
            case 2:
              let fechaNueva = prompt("Ingrese la nueva fecha de tu tarea: ");
              modificartusTareas(indice, undefined, fechaNueva);
              break;
            case 3:
              let categoriaNueva = parseInt(prompt(
                "Ingrese la nueva categoria de tu tarea: "
              ));
              if (categoriaNueva >= 0 && categoriaNueva < categoria.length) {
                modificartusTareas(indice, undefined, undefined, categoriaNueva);
              }
              break;
            default:
              console.log("Numero de indice incorrecto");
              break;
          }
        } else {
          console.log("Numero de indice incorrecto!!");
        }
        modificartusTareas(indice, nuevaTarea);
        break;
      case 5:
        console.log("---Lista de tus tusTareas---");
        console.log(tusTareas);
        break;
      case 6:
        mostrarCategorias();
        break;
      case 7:
        let nuevaCategoria = prompt(
          "Ingrese el nombre de la nueva categoria a agregar: "
        );
        AgregarCategorias(nuevaCategoria);
        break;
      default:
        console.log("!Opcion no valida!");
        break;
    }
  }
}

interactuarConUsuario();
