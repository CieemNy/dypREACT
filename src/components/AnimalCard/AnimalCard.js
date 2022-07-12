import React from 'react';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card'

export default function AnimalCard({name, size, ...props}){
    return(
        <Card 
            title="Animal" 
            details={
                <AnimalDetails
                    {...props}
                />
            }
        >
            <h3>{name}</h3>
            <div>{size}kg</div>
        </Card>
    )
}