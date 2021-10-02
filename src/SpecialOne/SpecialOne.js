import React, { useContext } from 'react';
import { RingContext } from '../App';

const SpecialOne = () => {
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h2>Special One</h2>
            <p>House: {house}</p>
            <p>{ornaments}</p>
        </div>
    );
};

export default SpecialOne;