import React from "react";
import classes from './Typecasting.css'

const typecasting = (props) => {
    return (
        <div className={classes.Typecasting}>
            <header>
                Typecasting
            </header>
            <table>
                <tbody>
                <tr>
                    <td>
                        Write an actor/actress name to find out typecasting of the actor/actress:
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" onChange={props.changed} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={props.clicked}>Show the Result</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style={{display: props.showTypecasting}}>The result is: {props.data}</p>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}


export default typecasting;
