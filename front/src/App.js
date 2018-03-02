import React, {Component} from "react";
import TwitterList from "./TwitterList.js";
import SearchBox from "./SearchBox.js"
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      tweets:[],
      search : ""
    }
  }

  componentDidMount(){
    fetch("/tweets",{method:"GET", headers:{accept:"application/json"}})
      .then((res)=>{
        if(res.ok)
          return res.json();
      })
      .then((_tweets)=>{
        this.setState({
          tweets: _tweets
        });
      });
  }

  search(text){
    this.setState ({
      search : text
    });
  }

  render(){
    return( <div> 
      <h1>Tweets</h1>
      <div>
        <SearchBox search={this.search.bind(this)}/>
      </div>

      <TwitterList tweets={this.state.tweets.filter((t)=>{
        return t.text.startsWith(this.state.search);
      })}/>

    </div>);
  }
}

export default App;