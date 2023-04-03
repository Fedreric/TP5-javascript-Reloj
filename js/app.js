function obtenerHora(){
//obtener la fecha actual
let fechaActual = new Date();
const dia = fechaActual.getDate(); //1-31
const diaSemana = fechaActual.getDay(); //0-6
const mes = fechaActual.getMonth(); //0-11
const año = fechaActual.getFullYear(); //2023
let pFecha = document.getElementById('fecha');
let pHora = document.getElementById('hora');
const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

pFecha.innerHTML = `${dias[diaSemana]} ${dia} de ${meses[mes]} del ${año}`
pHora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`

}

setInterval(obtenerHora,1000)
