import React, { Component } from "react";

class API extends Component {
    state = {
        data: []
    }
    render(){
        <div>
            {this.state.data.map(value => {
                return <p>{value}</p>
            })}
        </div>
    }
}