import React, {Component} from "react";
import PropTypes from "prop-types";
//export default se quito porque se agregaron los atributos del PROPS 
 class Tweet extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(<div>
			<img src={this.props.tweet.user.profile_image_url} alt={this.props.tweet.user.screen_name + "profile picture"}/>
			<div className="name">{this.props.tweet.user.screen_name}</div>
			<div className="text">{this.props.tweet.text}</div>
			</div>);
	}
}

Tweet.propTypes = {
tweet: PropTypes.object.isRequired
};
//ademas, permite que se cargue o cree todo el componente antes de exportarse
export default Tweet;