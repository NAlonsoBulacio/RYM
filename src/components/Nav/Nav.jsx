import SearchBar from "../search bar/SearchBar";
import style from './Nav.module.css'
import { Link } from "react-router-dom";

function Nav({onSearch}) {
    return (
       <div className={style.nav}>
         <button> 
            <Link to='/about'> About </Link> 
         </button>
         <button> 
            <Link to='/home'> Home </Link>
         </button>
          <SearchBar onSearch={onSearch}/>
       </div>
    );
 }

 export default Nav;