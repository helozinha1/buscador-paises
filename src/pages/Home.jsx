import { useState, useEffect } from 'react';
import restCountriesApi from '../api/restCountries';
import CountryCard from '../components/CountryCard';
import { useFavorites } from '../hooks/useFavorites.js';
import styles from './Home.module.css';

const REGION = [
  { id: 'all', name: 'Todos', endpoint: '/all' },
  { id: 'Africa', name: 'África', endpoint: '/region/africa' },
  { id: 'America', name: 'América', endpoint: '/region/america' },
  { id: 'Asia', name: 'Ásia', endpoint: '/region/asia' },
  { id: 'Europa', name: 'Europa', endpoint: '/region/europa' },
  { id: 'Oceania', name: 'Oceania', endpoint: '/region/oceania' },
];

export function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(REGION[0]);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await restCountriesApi.get(activeTab.endpoint);
        setCountries(response.data);
      } catch (error) {
        console.error('Erro ao buscar países', error);
        setCountries([]); // Garante que volta a ser uma lista vazia se a API falhar
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [activeTab]);

  return (
    <div className="home-page">
      <div className={styles.tabsContainer}>
        {REGION.map((region) => (
          <button
            key={region.id}
            className={`${styles.tabBtn} ${activeTab.id === region.id ? styles.active : ''}`}
            onClick={() => setActiveTab(region)}
          >
            {region.name}
          </button>
        ))}
      </div>
      <h1 className={styles.title}>Explorando: {activeTab.name}</h1>
      {loading ? (
        <p className={styles.loadingText}>Carregando paises...</p>
      ) : (
        <div className={styles.grid}>
          {/* Verifica se 'countries' é um Array válido antes de rodar o .map() */}
          {Array.isArray(countries) && countries.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              isFavorite={isFavorite(country.cca3)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
