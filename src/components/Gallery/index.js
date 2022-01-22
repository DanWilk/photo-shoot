import React from 'react';
import { capitalizeFirstLetter }  from '../../utils/helpers'
import Photolist from '../PhotoList';

function Gallery({ currentCategory }) {
    const {name, description} = currentCategory;
    return(
    <section>
        <h1 data-testId='h1tag'>{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        <Photolist 
        category={currentCategory.name}
        />
    </section>
    );
}

export default Gallery;