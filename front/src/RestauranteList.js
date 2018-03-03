import React, {Component} from "react";
import Restaurante from "./Restaurante.js"
import PropTypes from "prop-types";
import "./App.css";

class RestauranteList extends Component{
	constructor(props){
		super(props);
	}

	renderRestaurantes(){
		return this.props.restaurantes.map((t,i)=>{
			return ( 
				<div class="col-md">
					<div class="cuadroRestaurante">
						<Restaurante restaurante={t} key={i}/>
					</div>
				</div> 
				); 
		});
	}
	render(){
		return(<div class="container">
			<div class="row">
			{this.props.restaurantes ? this.renderRestaurantes() : "no hay restaurantes"}
			</div>

			</div>);
	}
}

RestauranteList.propTypes = {
	restaurantes: PropTypes.array.isRequired
};

export default RestauranteList;