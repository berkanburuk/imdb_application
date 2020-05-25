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
            input2:"",
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
        if (this.state.typeCasting.input.trim()===""){
            alert("Please enter valid name");
            return;
        }
        axios.get("http://localhost:8080/nameBasic/typeCasting?fullName=" + this.state.typeCasting.input)
            .then(response => {
                if (response.status === 200) {
                    let currentState = {...this.state.typeCasting};
                    currentState.display = "block";
                    currentState.data = response.data;
                    this.setState({typeCasting: currentState});
                } else if (response.status === 404) {

                }
            })
            .catch(error => {
                console.log(error);
            })


    }

    typecastingChangeHandler = (event) => {
        let currentState = {...this.state.typeCasting};
        currentState.input = event.target.value != undefined ? event.target.value : '';
        this.setState({typeCasting: currentState});
    }

    sharedMovieOnChangeHandlerFirstName = (event) => {
        let currentState = {...this.state.sharedMovie};
        currentState.input = event.target.value;
        this.setState({sharedMovie: currentState});
    }
    sharedMovieOnChangeHandlerSecondName = (event) => {
        let currentState = {...this.state.sharedMovie};
        currentState.input2 = event.target.value;
        this.setState({sharedMovie: currentState});
    }


    sharedMovieClickHandler = () => {
        if (this.state.sharedMovie.input.trim()===""|| this.state.sharedMovie.input2.trim()===""){
            console.log(this.state.sharedMovie.input.trim());
            console.log(this.state.sharedMovie.input2.trim());
            alert("Please enter valid names");
            return;
        }
        const params= {
            firstName:this.state.sharedMovie.input,
            secondName:this.state.sharedMovie.input2
        }
        axios.get("http://localhost:8080/nameBasic/coincidence?firstName="+params.firstName+"&secondName="+params.secondName)
            .then(response => {
                let currentState = {...this.state.sharedMovie};
                currentState.display = "block";
                currentState.data = response.data;
                this.setState({sharedMovie: currentState});
            })
            .catch(error=>{
                console.log(error);
                console.log(error.message)
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
                    data={this.state.typeCasting.data}
                    changed={this.typecastingChangeHandler.bind(this)}
                />
                <SharedMovie
                    clicked={this.sharedMovieClickHandler}
                    showSharedMovies={this.state.sharedMovie.display}
                    data={this.state.sharedMovie.data}
                    changedFirstName={this.sharedMovieOnChangeHandlerFirstName.bind(this)}
                    changedSecondName={this.sharedMovieOnChangeHandlerSecondName.bind(this)}
                />
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
