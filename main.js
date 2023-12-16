// Lista de tareas
let tareas = [];

// Función para agregar una tarea
const agregarTarea = () => {
  const nuevaTarea = prompt("Ingrese una nueva tarea:");
  tareas.push({ tarea: nuevaTarea, completada: false });
  mostrarTareas(); // Mostrar todas las tareas después de agregar una nueva tarea
};

// Función para eliminar una tarea
const eliminarTarea = () => {
  let indice;
  do {
    indice = prompt("Ingrese el número de la tarea que desea eliminar:") - 1;
    if (indice < 0 || indice >= tareas.length) {
      alert("Número de tarea no válido. Intente de nuevo.");
    }
  } while (indice < 0 || indice >= tareas.length);

  tareas.splice(indice, 1);
};

// Función para mostrar las tareas
const mostrarTareas = () => {
  if (tareas.length === 0) {
    alert("Aún no has ingresado ninguna tarea.");
  } else {
    console.log("Tareas:");
    tareas.forEach((tarea, indice) => {
      console.log(`${indice + 1}. [${tarea.completada ? 'X' : ' '}] ${tarea.tarea}`);
    });
  }
};

// Bucle principal
while (true) {
  const opcion = prompt("Seleccione una opción:\n1. Agregar tarea\n2. Eliminar tarea\n3. Mostrar tareas\n4. Salir");

  switch (opcion) {
    case "1":
      agregarTarea();
      break;
    case "2":
      if (tareas.length === 0) {
        alert("No hay tareas para eliminar.");
      } else {
        eliminarTarea();
      }
      break;
    case "3":
      mostrarTareas();
      break;
    case "4":
      alert("Hasta luego.");
      // Sale del bucle y finaliza el programa
      process.exit(0);
      break;
    default:
      alert("Opción no válida. Por favor, ingrese una opción válida.");
  }
}