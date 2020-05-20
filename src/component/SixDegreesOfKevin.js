import React from "react";
import classes from './SixDegreesOfKevin.css'

const sixDegreesOfKevin = (props) => {
    return (
        <div className={classes.SixDegreesOfKevin}>
            <header>
                Six Degrees of Kevin
            </header>
            <table>
                <tbody>
                <tr>
                    <td>
                        Write an actor/actress name to find out the degrees
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" onChange={props.changed}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={props.clicked}>Show the Result</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style={{display: props.showKevin}}>The result is: {props.data.id}</p>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}


export default sixDegreesOfKevin;
