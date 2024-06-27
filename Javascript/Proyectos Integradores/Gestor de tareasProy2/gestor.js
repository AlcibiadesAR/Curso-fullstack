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
    tusTareas[indice].culminada = true;
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

function filtrarCategoria(numeroDeCategoria) {
  let tareasFiltradas = tusTareas.filter(function (tareas) {
    return tareas.categoria === numeroDeCategoria;
  });
  return tareasFiltradas;
}

function contarTareasCompletadasPorCategoria(numeroCategoria) {
  let tareaCategoria = filtrarCategoria(numeroCategoria);
  let tareasCompletada = tareaCategoria.reduce(function (contador, tarea) {
    return tarea.culminada ? contador + 1 : contador;
  }, 0);
  let tareaTotal = tareaCategoria.length;
  console.log(
    "Tareas completadas de la categoria " +
      numeroCategoria +
      ": " +
      tareasCompletada +
      " de " +
      tareaTotal +
      " tareas!"
  );
}

function mostrarTareasNoCompletadas() {
  console.log("Tareas no completadas: ");
  tusTareas.forEach(function (tarea) {
    if (!tarea.culminada) {
      console.log(
        "- nombre: " +
          tarea.nombre +
          ", categoria: " +
          categoria[tarea.categoria]
      );
    }
  });
}

function ordenarTareasPorElNombre() {
  for (let i = 0; i < tusTareas.length; i++) {
    for (let j = 0; j < tusTareas.length - 1; j++) {
      if (tusTareas[j].nombre > tusTareas[j + 1].nombre) {
        let temp = tusTareas[j];
        tusTareas[j] = tusTareas[j + 1];
        tusTareas[j + 1] = temp;
      }
    }
  }
}

function ordenarTareasPorLaFecha() {
  for (let i = 0; i < tusTareas.length; i++) {
    for (let j = 0; j < tusTareas.length - 1; j++) {
      if (tusTareas[j].fecha > tusTareas[j + 1].fecha) {
        let temp = tusTareas[j];
        tusTareas[j] = tusTareas[j + 1];
        tusTareas[j + 1] = temp;
      }
    }
  }
}

function buscarTareaPorElNombre(nombre) {
  let inicio = 0;
  let final = tusTareas.length - 1;

  while (inicio <= final) {
    let elementoMedio = Math.round((inicio + final) / 2);
    if (tusTareas[elementoMedio].nombre === nombre) {
      return elementoMedio;
    } else if (tusTareas[elementoMedio].nombre < nombre) {
      inicio = elementoMedio + 1;
    } else {
      fin = elementoMedio - 1;
    }
  }
  return -1;
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
  console.log("8. Filtrar tareas por categoria");
  console.log("9. Mostrar todas las tareas completadas por categoria");
  console.log("10. Mostrar todas las tareas no completadas");
  console.log("11. Ordenar las tareas alfabeticamente");
  console.log("12. Ordenar las tareas por fecha");
  console.log("13. Buscar las tareas por nombre");
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
              "¿Qué propiedad desea modificar? 1. nombre, 2. fecha, 3. número de categoría: "
            )
          );
          switch (opcion) {
            case 1:
              let nombreNuevo = prompt("Ingrese el nuevo nombre de la tarea: ");
              modificartusTareas(indice, nombreNuevo);
              break;
            case 2:
              let fechaNueva = prompt("Ingrese la nueva fecha de la tarea: ");
              modificartusTareas(indice, undefined, fechaNueva);
              break;
            case 3:
              let categoriaNueva = parseInt(
                prompt("Ingrese el nuevo número de categoría de la tarea: ")
              );
              if (categoriaNueva >= 0 && categoriaNueva < categoria.length) {
                modificartusTareas(
                  indice,
                  undefined,
                  undefined,
                  categoriaNueva
                );
              } else {
                console.log("Número de categoría incorrecto!");
              }
              break;
            default:
              console.log("Opción incorrecta");
              break;
          }
        } else {
          console.log("Número de índice incorrecto!!");
        }
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
      case 8:
        mostrarCategorias();
        let numeroCategoria = parseInt(
          prompt("Ingrese el numero de la categoria que desea filtrar: ")
        );
        let tareaFitradaPorCategoria = filtrarCategoria(numeroCategoria);
        console.log("Tarea de la categoria seleccionada: ");
        console.log(tareaFitradaPorCategoria);
        break;
      case 9:
        mostrarCategorias();
        let numeroDeLaCategoria = parseInt(
          prompt("Ingrese el numero de la categoria a mostrar: ")
        );
        contarTareasCompletadasPorCategoria(numeroDeLaCategoria);
        break;
      case 10:
        mostrarTareasNoCompletadas();
        break;
      case 11:
        ordenarTareasPorElNombre();
        console.log("Tareas por nombre: ");
        console.log(tusTareas);
        break;
      case 12:
        ordenarTareasPorLaFecha();
        console.log("Tareas por fecha: ");
        console.log(tusTareas);
        break;
      case 13:
        ordenarTareasPorElNombre();
        let nombreBuscado = prompt("Ingres nombre de la tarea a buscar: ");
        let indiceTarea = buscarTareaPorElNombre(nombreBuscado);
        if (indiceTarea !== -1) {
          console.log(`Tarea encontrada en el indice: ${indiceTarea}`);
        } else {
          console.log("Tarea no encontrada");
        }
        break;
      default:
        console.log("!Opcion no valida!");
        break;
    }
  }
}

interactuarConUsuario();
