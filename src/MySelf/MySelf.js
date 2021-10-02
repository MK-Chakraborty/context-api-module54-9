import React from 'react';
import SpecialOne from '../SpecialOne/SpecialOne';

const MySelf = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>MySelf</h2>
            <p>House: {house}</p>
            <SpecialOne></SpecialOne>
        </div>
    );
};

export default MySelf;