import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Countries.module.css';
import "../App.css";

function Countries() {
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/name/kingdom');
        const data = await response.json();
        setCountries(data);
        };

        fetchCountries();
    }, []);

    const handleCountrySelect = (e) => {
        const selectedCountry = countries.find(country => country.cca2 === e.target.value);
        if (selectedCountry) {
        navigate(`/countries/${selectedCountry.cca2}`, {
            state: { data: selectedCountry }
        });
        }
    };

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>World kingdoms</h1>
            <div className={styles.selectWrapper}>
                <select 
                onChange={handleCountrySelect} 
                className={styles.dropdown}
                defaultValue=""
                >
                <option value="" disabled>Select a country</option>
                {countries.map(country => (
                    <option key={country.cca2} value={country.cca2}>
                    {country.name.common}
                    </option>
                ))}
                </select>
            </div>
            <Outlet />
        </div>
    );
}

export default Countries;