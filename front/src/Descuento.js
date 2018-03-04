
import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css"
class Descuento extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
		<div>
			/*
Tomas Venegas: esto les generará un error cambiar class por className
 */
			<div className="cuadroDescuentos">
					<h6><strong>Descuento</strong></h6>
					<p className="precio">{"$" + this.props.descuento.precio}</p>
					<p className="descripcion">{"Descripción: "+ this.props.descuento.descripcion}</p>
					<p className="terminos_condiciones">{"Terminos y condiciones: "+this.props.descuento.terminos_condiciones}</p>
					<p className="fecha_vigencia">{"Fecha de vigencia: "+this.props.descuento.fecha_vigencia}</p>
					<p className="sector">{"Sector: "+this.props.descuento.sector}</p>
			</div>
				<br/>
		</div>);
	}
}

Descuento.propTypes = {
descuento: PropTypes.object.isRequired
};
//ademas, permite que se cargue o cree todo el componente antes de exportarse
export default Descuento;