import React, {Component} from "react";
import RestauranteList from "./RestauranteList.js";
import SearchBox from "./SearchBox.js"
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      restaurantes:[],
      searchName : "",
      searchTypeR: "",
      searchTypeF: "",
      searchCalifi: "" 
    }
  }

  componentDidMount(){
    fetch("/restaurantes",{method:"GET", headers:{accept:"application/json"}})
    .then((res)=>{
      if(res.ok)
      {
        let restaurantesResponse = res.json();
        return restaurantesResponse;
      }
    })
    .then((_restaurantes)=>{
      this.setState({
        restaurantes: _restaurantes
      });
      console.log("restaurantes " + this.state.restaurantes);

    });
  }

  searchName(_name){
    this.setState ({
      searchName : _name
    });
  }
  searchTypeR(_type){
    this.setState ({
      searchTypeR : _type
    });
  }
  searchTypeF(_type){
    this.setState ({
      searchTypeF : _type
    });
  }
  searchCalifi(_type){
    this.setState({
      searchCalifi: _type
    });
  }
  updateCalificaciones(_restaurante, _calificacion){
    let _restaurantes = this.state.restaurantes.map((res)=>{
      if(res.nombre === _restaurante)
        res.calificacion = _calificacion;
      return res;

    });
     
    this.setState({
      restaurantes: _restaurantes
    });
  }

  compareGrade(jsonGrade, stateGrade){
    if(stateGrade === "") return true;
    else{
      return jsonGrade===stateGrade;
    }
  }
  render(){
    return( 
      <div> 
        <center><h1>ResDiscounts</h1></center>
        <div>
          <SearchBox searchName={this.searchName.bind(this)} 
                    searchTypeR={this.searchTypeR.bind(this)}
                    searchTypeF={this.searchTypeF.bind(this)}
                    searchCalifi={this.searchCalifi.bind(this)} />
        </div>

        <RestauranteList 
          updateCalificaciones={this.updateCalificaciones.bind(this)}
          restaurantes={ this.state.restaurantes
          .filter( (r)=>{return r.nombre.toUpperCase()
                            .startsWith(this.state.searchName.toUpperCase());} )
          .filter( (re)=>{return re.tipo_restaurante.toUpperCase()
                            .includes(this.state.searchTypeR.toUpperCase());} )
          .filter( (res)=>{return res.tipo_comida.toUpperCase()
                            .includes(this.state.searchTypeF.toUpperCase()); } )
          .filter( (res)=>{return this.compareGrade(res.calificacion.toString().toUpperCase(),
                              this.state.searchCalifi.toUpperCase()); } )
        }/>

      </div>);
    }
  }

  export default App;


  