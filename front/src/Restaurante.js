import React, {Component} from "react";
import PropTypes from "prop-types";
import Descuento from "./Descuento.js"
import "./App.css";
//export default se quito porque se agregaron los atributos del PROPS 
class Restaurante extends Component{
	constructor(props){
		super(props);
	}
	
	renderDescuentos(){
		return this.props.restaurante.descuentos.map((t,i)=>{
			return <Descuento descuento={t} key={i}/>; 
		});
	}

	updateCalificacion(_calificacion){
		this.props.updateCalificaciones(this.props.restaurante.nombre, _calificacion)
	}

	alerta(){
		fetch("/post-like",{method:"POST", body:JSON.stringify({"nombre":this.props.restaurante.nombre}), 
			headers: {'content-type':"application/json"}})
		.then((res)=>{
			if(res.ok)
				return res.json();
				//let likes = res.json();
		}
		).then((_calificacion)=>{
			this.updateCalificacion(_calificacion.calificacion);
		})}

		render(){
            /*
    Tomas Venegas: esto les generará un error cambiar class por className
     */
			return(<div> 
				<div className="name"><h5>{this.props.restaurante.nombre}</h5></div>
				<div className="row justify-content-sm-center">
					<div className="col-sm"></div>
					<div className="col-sm"><img className="imagen" src={this.props.restaurante.image_url} alt={this.props.restaurante.nombre + " logo"}/></div>
					<div className="col-sm"></div>
				</div>
				<p className="calificacion"><strong><i>{"numero de likes: "+this.props.restaurante.calificacion}</i></strong></p>
				<p className="description">{this.props.restaurante.descripcion}</p>
				<div className= "container-fluid">
					<div className="row">
					<div className= "col-sm">
						
							{this.props.restaurante.descuentos ? this.renderDescuentos() : "no hay descuentos"}
					
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-1"></div>	
					<div className="col-sm">
						<p>Danos un like
						<fieldset enabled><button type="button" className="btn btn-danger bmd-btn-fab"onClick={this.alerta.bind(this)}>
						 							<img src="/like.png" alt="logito"/>
						 					</button>
						 </fieldset> 
						 </p> 
					</div>
					<div className="col-sm-1"></div>
				</div>

								<br/>
				</div>);
		}
	}

	Restaurante.propTypes = {
		restaurante: PropTypes.object.isRequired
	};
//ademas, permite que se cargue o cree todo el componente antes de exportarse
export default Restaurante;