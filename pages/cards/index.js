import {useState} from 'react';



function CardsPage (props) {
    return (
        <div>
            <h2>Trying to map over each item</h2>
            {props.map(prop => {
                return (
                    <div key={prop.item_id}>
                        <h3>Test</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CardsPage;