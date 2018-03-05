import React, {Component} from "react";

export default class SearchBox extends Component{
	constructor(props){
		super(props);
	}
	

	onEnterName(evt){
		console.log(evt.target.value);
		this.props.searchName(evt.target.value);
	}
	onEnterTypeR(evt){
		console.log(evt.target.value);
		this.props.searchTypeR(evt.target.value);
	}
	onEnterTypeF(evt){
		console.log(evt.target.value);
		this.props.searchTypeF(evt.target.value);
	}
	onEnterCalifi(evt){
		console.log(evt.target.value);
		this.props.searchCalifi(evt.target.value);
	}

	render(){
		return(
	<div>
			<center><h3>¿Cuáles son tus preferencias?</h3></center>
		<div class = "container-fluid">
			<div class = "row">
				<div class = "col-sm">
					<div class="form-group"> 
						<label for="ip1" class="bmd-label-floating">Nombre de restaurante</label>
						<input id="ip1" class="form-control" type="text"  onInput={this.onEnterName.bind(this)}/>
					</div>
				</div>
			
				{
					// En los input de tipo de restaurante y tipo de comida, sería ideal mostrarle al usuario cuáles son las opciones
					// que pueden haber, si bien como que él pueda escoger al estilo <select> o mostrandole una lista en algún lado
					// de la página para que el usuario sepa las categorías, en vez de tratar de adivinarlas
				}
				<div class="col-sm">
					<div class="form-group">
						<label for="ip2" class="bmd-label-floating">Tipo de restaurante</label>
						<input id="ip2"  class="form-control" type="text" onInput={this.onEnterTypeR.bind(this)}/>
					</div>
				</div>				
			
				<div class="col-sm">
					<div class="form-group">
						<label for="ip3" class="bmd-label-floating">Tipo de comida</label>		
						<input id="ip3" class="form-control" type="text" onInput={this.onEnterTypeF.bind(this)}/>
					</div>
				</div>
			
				<div class="col-sm">
					<div class="form-group">
						{
							// Al usuario podría interesarle más cuáles son los restaurantes con más likes o
							// menos likes que lo que pone en el input, en vez de la cantidad exacta.
						}
						<label for="ip4" class="bmd-label-floating">Cantidad de likes</label>
						<input id="ip4"  class="form-control" type="number" onInput={this.onEnterCalifi.bind(this)}/>
					</div>
				</div>
			
			</div>
		</div>
	</div>);
	}
}
