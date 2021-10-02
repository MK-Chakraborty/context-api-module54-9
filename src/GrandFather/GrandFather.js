import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>GrandFather</h2>
            <p>House: {house}</p>
            <div style={{'display':'flex', 'justifyContent':'center'}}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default GrandFather;