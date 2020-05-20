import React, {Component} from 'react';
import './App.css';
import Typecasting from "./component/Typecasting";
import SharedMovie from "./component/SharedMovie"
import SixDegreesOfKevin from './component/SixDegreesOfKevin'
import axios from 'axios';

class App extends Component {
    state = {
        typeCasting: {
            input: "",
            display: "none",
            result: "",
            data: []
        },
        sharedMovie: {
            input: "",
            display: "none",
            result: "",
            data: []
        },
        sixDegreesOfKevin: {
            input: "",
            display: "none",
            result: "",
            data: []
        }
    }
    typecastingClickHandler = () => {
        //send request
        /*
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            firstName: 'as',
            lastName: 'asd'
        })
            .then(response => response.json())
            .then(json => console.log(json));
        */
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    let currentState = {...this.state.typeCasting};
                    currentState.display = "block";
                    currentState.data = response.data[0];
                    this.setState({typeCasting: currentState});
                    //alert("result is ")
                } else {
                    alert("Could not find")
                }
            });

    }


    sharedMovieClickHandler = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => {
                let currentState = {...this.state.sharedMovie};
                currentState.display = "block";
                currentState.data = response.data[0].id;
                this.setState({sharedMovie: currentState});
            })
    }

    kevinChangeHandler = (event) => {
        console.log();
        let currentState = {...this.state.sixDegreesOfKevin};
        currentState.input = event.target.value;
        this.setState({sixDegreesOfKevin: currentState});
    }

    kevinClickHandler = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            input: this.state.input
        }).then(response => {
            console.log(response);
            if (response.status === 201) {
                let currentState = {...this.state.sixDegreesOfKevin};
                currentState.display = "block";
                this.setState({sixDegreesOfKevin: currentState});
            }
        }).catch(error => {

        })

    }

    render() {
        return (
            <div className="App">
                <Typecasting
                    clicked={this.typecastingClickHandler}
                    showTypecasting={this.state.typeCasting.display}
                    data={this.state.typeCasting.data}/>
                <SharedMovie
                    clicked={this.sharedMovieClickHandler}
                    showSharedMovies={this.state.sharedMovie.display}
                    data={this.state.sharedMovie.data}/>
                <SixDegreesOfKevin
                    clicked={this.kevinClickHandler}
                    showKevin={this.state.sixDegreesOfKevin.display}
                    data={this.state.sixDegreesOfKevin.data}
                    changed={this.kevinChangeHandler.bind(this)}
                />
            </div>
        );
    }
}

export default App;
