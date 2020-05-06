$(document).on('ready', funcMain);


function funcMain()
{
	$("#add_row").on('click',newRowTable);

	$("loans_table").on('click','.fa-eraser',deleteProduct);
	$("loans_table").on('click','.fa-edit',editProduct);

	$("body").on('click',".fa-eraser",deleteProduct);
	$("body").on('click',".fa-edit",editProduct);
}





function editProduct(){
	var _this = this;;
	var array_fila=getRowSelected(_this);
	console.log(array_fila[0]+" - "+array_fila[1]+" - "+array_fila[2]+" - "+array_fila[3]+" - "+array_fila[4]+" - "+array_fila[5]+" - "+array_fila[6]+" - "+array_fila[7]);
	//Codigo de editar una fila lo pueden agregar aqui
}



function getRowSelected(objectPressed){
	//Obteniendo la linea que se esta eliminando
	var a=objectPressed.parentNode.parentNode;
	//b=(fila).(obtener elementos de clase columna y traer la posicion 0).(obtener los elementos de tipo parrafo y traer la posicion0).(contenido en el nodo)
	var pnombre=a.getElementsByTagName("td")[0].getElementsByTagName("p")[0].innerHTML;
	var papellido=a.getElementsByTagName("td")[1].getElementsByTagName("p")[0].innerHTML;
	var fecha=a.getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerHTML;
	var nnumeroi=a.getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerHTML;
	var cedula=a.getElementsByTagName("td")[4].getElementsByTagName("p")[0].innerHTML;
    var edad=a.getElementsByTagName("td")[5].getElementsByTagName("p")[0].innerHTML;
    var edad2=a.getElementsByTagName("td")[5].getElementsByTagName("p")[0].innerHTML;
	var impuesto=a.getElementsByTagName("td")[6].getElementsByTagName("p")[0].innerHTML;


var array_fila = [pnombre, papellido, fecha, nnumeroi, cedula, edad, edad2, numero2];

	return array_fila;
	
}



function newRowTable()
{
	var pnombre=document.getElementById("pnombre").value;
	var papellido=document.getElementById("papellido").value;
	var fecha=document.getElementById("fecha").value;
	var nnumeroi=document.getElementById("nnumeroi").value;
	var numero2=document.getElementById("numero2").value;
	var cedula=document.getElementById("cedula").value;
	var edad=document.getElementById("edad").value;
	var edad2=document.getElementById("edad2").value;

	
	var name_table=document.getElementById("tabla_factura");

    var row = name_table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
 

    cell1.innerHTML = '<p name="numero_f[]" class="non-margin">'+pnombre+'</p>';
    cell2.innerHTML = '<p name="codigo_p[]" class="non-margin">'+papellido+'</p>';
    cell3.innerHTML = '<p name="fecha_f[]" class="non-margin">'+fecha+'</p>';
	cell4.innerHTML = '<p name="nnumeroi_p[]" class="non-margin">'+nnumeroi+'</p>';
	cell5.innerHTML = '<p name="cedula[]" class="non-margin">'+cedula+'</p>';
    cell6.innerHTML = '<p name="edad[]" class="non-margin">'+edad+'</p>';
    cell7.innerHTML = '<p name="edad2[]" class="non-margin">'+edad2+'</p>';
    cell8.innerHTML = '<p name="numero2[]" class="non-margin">'+numero2+'</p>';
	cell9.innerHTML = '<p name="total_p[]" class="non-margin">'+total_n+'</p>';
    cell10.innerHTML = '<span class="icon fa-edit"></span><span class="icon fa-eraser"></span>';



}
function format(input)
{
	var num = input.value.replace(/\,/g,'');
	if(!isNaN(num)){
		input.value = num;
	}
	else{ alert('Solo se permiten numeros');
		input.value = input.value.replace(/[^\d\.]*/g,'');
	}
}


class Busqueda{
	constructor(){
		this.personas = [pnombre , papellido , cedula];
	
	this.personasBK = this.personas;
	this.onInit();
	console.log(this.personas);
	};
    onInit(){
		let cuerpo = document.getElementById("content_table");
		while(cuerpo.rows.length > 0){
			cuerpo.deleteRow(0);
		}
		this.personas.forEach(personas => {
			let fila = cuerpo.insertRow(cuerpo.row.length);
			fila.insertCell(0).innerHTML = personas.pnombre;
			fila.insertCell(1).innerHTML = personas.papellido;

		});
	}
    buscar(id){
		let busqueda = document.getElementById(id).value;
		this.personas = this.personasBK;
		this.personas = this.personas.filter(persona => {
			return persona.pnombre.toLowerCase().indexOf(busqueda) > -1;
		});
		this.onInit();
	}
}
let busqueda = new Busqueda();
let form = document.getElementById("busquedaForm");
form.addEventListener('submit', ()=>{
	busqueda.buscar('valor');
});

