import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    const location = useLocation();
    return (
        <nav className={styles['menu-nav']}>
            <div className={styles.logo}>
                <Link to="/" className={styles['titulo-principal']} >
                GeoFlagger
                </Link>
            </div>
            <ul className={styles['nav-links']}>
                <li>
                    <Link to="/" style= {{
                        color: location.pathname === '/' ? '#fff' : '#aaa',
                        textDecoration: 'none',
                        fontweight: location.pathname === '/' ? 'bold' : 'normal',
                        transition: 'color 0.3s ease'
                    }}>
                        Explorar
                    </Link>
                </li>
                <li>
                    <Link to="/favoritos" style= {{
                        color: location.pathname === '/favoritos' ? '#fff' : '#aaa',
                        textDecoration: 'none',
                        fontweight: location.pathname === '/favoritos' ? 'bold' : 'normal',
                        transition: 'color 0.3s ease'
                    }}>
                        Meus destinos
                    </Link>
                </li>
            </ul>

                    

        </nav>
    )
}




