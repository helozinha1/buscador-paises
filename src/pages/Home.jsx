import { useState } from "react"
import { useEffect } from "react"
import {restCountriesApi} from "../api/restCountries"
import {CountryCard} from "../components/CountryCard"
import{ useFavorites } from "../hooks/useFavorites"
import styles from "./Home.module.css"

const regioes = [
    { id: 'all', name: 'Todos', endpoint: '/all' },
    { id: 'Africa', name: 'África', endpoint: '/region/africa' },
    { id: 'America', name: 'América', endpoint: '/region/america' },
    { id: 'Asia', name: 'Ásia', endpoint: '/region/asia' },
    { id: 'Europa', name: 'Europa', endpoint: '/region/europa' },
    { id: 'Oceania', name: 'Oceania', endpoint: '/region/oceania' },
    
]

export function Home() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState(REGIONS[0])
    const {isFavorite, toggleFavorite} = useFavorites()
}