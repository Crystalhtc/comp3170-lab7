import { useLocation } from 'react-router-dom';
import styles from './Details.module.css';

function Details() {
    const { state } = useLocation();

    const country = state.data;

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{country.name.official}</h2>
            {country.flags?.png && (
                <div>
                    <img 
                    src={country.flags.png} 
                    alt={`Flag of ${country.name.common}`} 
                    className={styles.image}
                    />
                </div>
                )}
            <div className={styles.text}>
                <div className={styles.field}>
                <strong className={styles.strong}>Capital:</strong> 
                <p>{country.capital?.[0] || 'N/A'}</p>
                </div>
                <div className={styles.field}>
                <strong className={styles.strong}>Located in:</strong> 
                <p>{country.subregion}</p>
                </div>
                
            </div>
        </div>
    );
}

export default Details;