import React from "react";
import Alert from "../Alert/Alert";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    item: {
        marginRight: 20
    },
    wrapper: {
        borderTop: 'black solid 1px',
        display: 'flex',
        flexWrap: 'wrap',
        '& h2':{
            width: '100%',
        },
        '& $item': {
            marginRight: 20
        }
    }
})

export default function CartSuccess(){

    const classes = useStyles();

    return(
        <Alert title="Addes to Cart" type="success">
            <div className={classes.wrapper}>
                <h2>
                    You have addes 3 items:
                </h2>
                <div className={classes.item}>
                    <div>Bananas</div>
                    <div>Quantity: 2</div>
                </div>
                <div className={classes.item}>
                    <div>Lettuce</div>
                    <div>Quantity:</div>
                </div>
            </div>
        </Alert>
    )
}