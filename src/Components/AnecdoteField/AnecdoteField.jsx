import React from 'react';
import {Card} from "@mui/material";

const AnecdoteField = (props) => {
    return (
        <Card style={{padding: "16px", height: "600px"}}>
            <h2>
                {props.text}
            </h2>
        </Card>
    );
};

export default AnecdoteField;
