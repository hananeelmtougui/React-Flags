import { useState, useEffect } from "react";
import axios from "axios";

const useCountries = () => {
    const [data, setData] = useState([]); //ici on stock la variable data dans un tableau vide,pour la modifié on fait setData
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return [data, rangeValue, selectedRadio, radios, {
        setData, setRangeValue, setSelectedRadio
    }]
};

export default useCountries;