import React from 'react';

const output = props => {
    return(
        <div>
            {props.items.map(item => {
              return (
                <div
                    key={item.id}
                >
                    {item.exercise} - {item.description}
                    
                </div>
              );
            })}
        </div>
    );
}

export default output;