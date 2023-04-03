function obtenerHora(){
//obtener la fecha actual
let fechaActual = new Date();
const dia = fechaActual.getDate(); //1-31
const diaSemana = fechaActual.getDay(); //0-6
const mes = fechaActual.getMonth(); //0-11
const año = fechaActual.getFullYear(); //2023
let pFecha = document.getElementById('fecha');
let pHora = document.getElementById('hora');
let tipoHorario = 'AM'
const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

pFecha.innerHTML = `${dias[diaSemana]} ${dia} de ${meses[mes]} del ${año}`
pHora.innerHTML = `${hora()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()} ${tipoHorario}`

function hora(){
    let horaActual = fechaActual.getHours()
    let horaPm;
    if(horaActual > 12){
        horaPm = '0' + (horaActual - 12);
        tipoHorario = 'PM';   
        return horaPm;
    }else{
        return horaActual;
    }
}

}

setInterval(obtenerHora,1000)
