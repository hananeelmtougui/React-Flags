import React, { useEffect, useState } from 'react';

import Card from './Card';
import useCountries from '../hooks/useCountries';

const Countries = () => {

    const [data, rangeValue, selectedRadio, radios, {
        setRangeValue, setSelectedRadio
    }] = useCountries();
    return (
        <div className='countries'>
            <ul className="radio-container">
                <input
                    type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                {radios.map((continent) => (
                    <li>
                        <input
                            type="radio"
                            id={continent}
                            name="continentRadio"
                            checked={continent === selectedRadio}
                            onChange={
                                (e) => setSelectedRadio(e.target.id)
                            } />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}


            </ul>
            {selectedRadio && <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>}
            <ul>
                {data
                    .filter((country) => country.continents[0].includes(selectedRadio))
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country, index) => (
                        <Card key={index} country={country} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Countries;