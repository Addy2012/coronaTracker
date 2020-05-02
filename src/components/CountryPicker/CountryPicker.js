import React, {useState,useEffect} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import './CountryPicker.css';
import { fetchCountries } from '../../api/getAPI';

const CountryPicker=({handleCountryChange})=>{
    const [fetchedCountries,setFetchedCountries]=useState([])

    useEffect(() => {
        const fetchAPI= async () => {
            setFetchedCountries(await fetchCountries());
        }

        // console.log("daily "+dailyData)

        fetchAPI();
    },[setFetchedCountries]);

    console.log(fetchedCountries)

    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global" >Global</option>
                {fetchedCountries.map((country,i)=>
                    <option key={i} value={country} >{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )   
}


export default CountryPicker