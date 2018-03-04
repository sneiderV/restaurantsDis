import React, {Component} from "react";
import Restaurante from "./Restaurante.js"
import PropTypes from "prop-types";
import "./App.css";

class RestauranteList extends Component{
	constructor(props){
		super(props);
	}


    /*
    Tomas Venegas: esto les generará un error cambiar class por className
     */
	renderRestaurantes(){
		return this.props.restaurantes.map((t,i)=>{
			return ( 
				<div className="col-md">
					<div className="cuadroRestaurante">
						<Restaurante restaurante={t} key={i} updateCalificaciones={this.props.updateCalificaciones}/>
					</div>
				</div> 
				); 
		});
	}
	render(){
		return(<div className="container">
			<div className="row">
			{this.props.restaurantes ? this.renderRestaurantes() : "no hay restaurantes"}
			</div>

			</div>);
	}
}

RestauranteList.propTypes = {
	restaurantes: PropTypes.array.isRequired
};

export default RestauranteList;