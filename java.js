function addTask() {
    const textoInput = document.getElementById("tarea")
    const salidaInput = document.getElementById("listaTareas")
    if (textoInput.value !== "") {
        salidaInput.innerHTML += "<li>" + textoInput.value + "</li>"
        textoInput.value = ""
    }
}