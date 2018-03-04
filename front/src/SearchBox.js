import React, {Component} from "react";
/*
Tomas Venegas: esto les generará un error cambiar class por className
*/
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
		<div className= "container-fluid">
			<div className= "row">
				<div className= "col-sm">
					<div className="form-group">
						/*
					Tomas Venegas: esto les generará un error cambiar LOS FOR
*/
						<label for="ip1" className="bmd-label-floating">Nombre de restaurante</label>
						<input id="ip1" className="form-control" type="text"  onInput={this.onEnterName.bind(this)}/>
					</div>
				</div>
			
				<div className="col-sm">
					<div className="form-group">
						<label for="ip2" className="bmd-label-floating">Tipo de restaurante</label>
						<input id="ip2"  className="form-control" type="text" onInput={this.onEnterTypeR.bind(this)}/>
					</div>
				</div>				
			
				<div className="col-sm">
					<div className="form-group">
						<label for="ip3" className="bmd-label-floating">Tipo de comida</label>		
						<input id="ip3" className="form-control" type="text" onInput={this.onEnterTypeF.bind(this)}/>
					</div>
				</div>
			
				<div className="col-sm">
					<div className="form-group">
						<label for="ip4" className="bmd-label-floating">Cantidad de likes</label>
						<input id="ip4"  className="form-control" type="number" onInput={this.onEnterCalifi.bind(this)}/>
					</div>
				</div>
			
			</div>
		</div>
	</div>);
	}
}
