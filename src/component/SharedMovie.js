import React from "react";
import classes from './SharedMovie.css'


const sharedMovie = (props) => {
    return (
        <div className={classes.SharedMovie}>
            <header>
                Shared Movies
            </header>
            <table>
                <tbody>
                <tr>
                    <td>
                        Enter first actor/actress name
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Enter second actor/actress name
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={props.clicked}>Show the Result</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style={{display: props.showSharedMovies}}>The result is: {props.data.id}</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default sharedMovie;