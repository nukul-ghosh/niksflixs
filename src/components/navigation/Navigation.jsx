import style from './navigation.module.css';
import logo from  './../../assets/netflix_logo.png';
import { NavLink } from 'react-router';


function Navigation() {
    return (
      <nav className={style.navigationhldr}>
        <NavLink to="/" end>
          <h1 alt="NIKSFLIX" title="NIKSFLIX"><img src={logo} alt='NIKSFLIX'/></h1>
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
        <NavLink to="/policy" end>
          Policy
        </NavLink>
      </nav>
    )
  }
  export default Navigation;