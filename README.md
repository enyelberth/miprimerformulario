<! DOCTYPE HTML >
<! -
	Espectral por HTML5 UP
	html5up.net | @ajlkn
	Gratis para uso personal y comercial bajo la licencia CCA 3.0 (html5up.net/license)
->
< html >
	< cabeza >
		< título > formulario + listado </ título >
		< meta  charset = " utf-8 " />
		< meta  name = " viewport " content = " ancho = ancho del dispositivo, escala inicial = 1 " />
		<! - [if lte IE 8]> <script src = "assets / js / ie / html5shiv.js"> </script> <! [endif] ->
		< link  rel = " stylesheet " href = " assets / css / main.css " />
		< link  rel = " stylesheet " href = " estilo.css " >
		
		<! - [if lte IE 8]> <link rel = "stylesheet" href = "assets / css / ie8.css" /> <! [endif] ->
		<! - [if lte IE 9]> <link rel = "stylesheet" href = "assets / css / ie9.css" /> <! [endif] ->

	</ cabeza >
	< cuerpo >
	
			< div  id = " envoltorio de página " >

			
					</ header >
				
					
						< section  class = " pper style5 " >
							< div  class = " inner " >
								< sección >
									

									< form  method = " post " action = " # " id = " formulario " class = " formulario " onsubmit = " return validar (); "   >
										< div  class = " fila uniforme " >

											< h1  class = " formulario__titulo " > Registrarse </ h1 >

											</ div >
											< Br >

											< div  class = " formulario__input " >
									 		 < input  type = " text " name = " pnombre " id = " pnombre " value = "" placeholder = " Nombre del empleado " requerido  >
											</ div >
											< Br >

											< div  class = " formulario__input " >
												< input  type = " text " name = " pa apellido " id = " pa apellido " value = ""   placeholder = " Apellidos del empleado " requerido  >
											</ div >
											< Br >
											< div  >

                                            < input  type = " date "   class = " formulario__input " name = " fecha " id = " fecha " placeholder = " Fecha "   requerido >

											</ div >
											< Br >

											< div  >
												< select  name = " menu " class = " boton2 " id = " nnumeroi " name = " nnumeroi " title = " Selecciona el tipo de documento "   requerido >
											    < option  value = " E- " > E- </ option >
												< option  value = " V- " > V- </ option >
												</ select >
											</ div >

											< Br >

                                            < div  class = " foca " >
												< input  type = " text " name = " cedula " id = " cedula " value = "" maxlength = " 8 "   placeholder = " Numero de identificacion " obligatorio  onkeyup = " format (this) " onchange = " format (this) " />
											</ div >
											

											< div  >
											< input  type = " hidden " name = " gas " id = " gas " value = "" maxlength = " 2 " placeholder = " nada " obligatorio  onkeyup = " format (this) " onchange = " format (this) " />
											
											</ div >
											< Br >

                                            < Br >

											< div  class = " formulario__input " >
												< input  type = " text " name = " edad " id = " edad " precio "value =" " placeholder =" Edad " requerido  onkeyup =" format (this) " onchange =" format (this) "/>
											</ div >	
											
													
											
											< div  class = "" >
												< input  type = " hidden " name = " edad2 " id = " edad2 " precio "value =" " required  onkeyup =" format (this) " onchange =" format (this) "/>
											</ div >

											
											< div  class = " 2u $ 12u $ (xsmall) " >
												< input  type = " hidden " name = " numero2 " id = " numero2 " value = "" obligatorio  onkeyup = " format (this) " onchange = " format (this) " />
											</ div >

						
											
											
									</ form >								
										</ div >
										< Br >
										< div  class = " 12u $ " >
											< ul  class = " actions " style = " text-align: center " >
												< li > < input  type = " submit " value = " Agregar " class = " principal " id = " add_row " /> </ li >
											</ ul >
										</ div >
										< Br >
										< Br >     
					
										< div  class = " tarjeta " >
											< img  id = " img-preview " >
											< div  class = " card-footer " >
												< input  type = " file " id = " img-uploader " >
												< progress  id = " img-upload-bar " value = " 0 " max = " 100 " style = " width: 100% " > </ progress >
											</ div >
										</ div >
								
									</ div >

		                           < div  class = " table-wrapper " >
											

											< table  id = " tabla_factura " class = " display " >
												< link  rel = " stylesheet " href = " filasdinamicas.html " >
												< thead >
													< tr >
														< th > Primer Nombre del empleado </ th >
														< th > Segundo nombre </ th >
														< th > Primer Apellido del empleado </ th >
														< th > Fecha de nacimiento </ th >
														< th > Documento de identificación </ th >
														< th > Numero de identificación </ th >
														< th > edad </ th >
													</ tr >
												</ thead >
												< tbody  id = " content_table " >
													< tr >
														< td > </ td >
														< td > </ td >
														< td > </ td >
														< td > </ td >
														< td > </ td >
														< td > </ td >
													</ tr >
												</ tbody >
											</ table >
										</ div >
									</ form >
								</ sección >
								
							
						</ sección >


			
					< footer  id = " footer " >
						< ul  class = " icons " >
							< Li > < un  href = " https://twitter.com " target =" _blank " clase =" icono fa-twitter " > < lapso de  clase =" etiqueta " > Twitter </ lapso > </ una > </ li >
							< Li > < un  href = " https://www.facebook.com/enyelberth.colmanare " clase =" icono fa-facebook " target =" _blank " > < lapso de  clase =" etiqueta " > Facebook </ lapso > < / a > </ li >
							< Li > < un  href = " https://www.instagram.com " clase =" icono fa-instagram " target =" _blank " > < lapso de  clase =" etiqueta " > Instagram </ lapso > </ una > < / li >
						</ ul >
						
					</ pie de página >
			</ div >
			< script  src = " https://code.jquery.com/jquery-3.4.1.js "
        integridad = " sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU = " crossorigin = " anónimo " >
        </ script >
			< script  src = " assets / js / jquery.min.js " > </ script >
			< script  src = " assets / js / jquery.scrollex.minjquery.min.js " > </ script >
			< script  src = " assets / js / jquery.scrolly.minjquery.min.js " > </ script >
			< script  src = " https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js " > </ script >
           	< script  src = " validar.js " > </ script >
		    < script  src = " lib / js / invoice.js " > </ script >
			< script  src = " java.js " > </ script >
			< script  src = " er.js " > </ script >
			
		
			
</ cuerpo >


</ html >
