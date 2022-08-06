import React from 'react';
import {Card} from "@mui/material";
import "./AnecdoteField.css"

const AnecdoteField = (props) => {
    return (
        <Card className="AnecdoteField">
            <h2>
                {props.text}
            </h2>
        </Card>
    );
};

export default AnecdoteField;
