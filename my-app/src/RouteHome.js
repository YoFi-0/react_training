import React, {Component} from "react";
import { Link } from "react-router-dom";


class Home extends Component{
    render(){
        return(
            <div>
                <h1>routes without reloading</h1>
                <button>
                    <Link to="/function">route to the function combounents</Link>
                </button>
                <button>
                    <Link to="/class">route to the class combounents</Link>
                </button>
                <br/>
                <h1>routes with reload</h1>
                <button>
                    <a href="/function">route to the function combounents</a>
                </button>
                <button>
                    <a href="/class">route to the class combounents</a>
                </button>
            </div>
            
        )
    }
}


export default Home