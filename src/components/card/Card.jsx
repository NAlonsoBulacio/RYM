import Style from './card.module.css';
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions"
import { connect } from 'react-redux';
import { useState } from 'react';



function Card({ onClose, name, status, species, gender, origin, image, id, addFav, removeFav}) {

   const [isFav, SetIsFav] = useState(false);
   
   const handleFavorite = () => {

   }

   return (
      <div className={Style.div}>
         <button className={Style.button} onClick={() => {onClose(id)}}>X</button>
         <Link to={`/detail/${id}`} >
         <h2 className={Style.name} >{name}</h2>
         </Link>
         {/* <h2 className={Style.status}>{status}</h2> */}
         <h2 className={Style.species}>{species}</h2>
         {/* <h2 className={Style.gender}>{gender}</h2>
         <h2 className={Style.origin}>{origin}</h2> */}
         <img className={Style.img} src={image} alt='img character' />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: () => {dispatch(addFav)()},
      removeFav: () => {dispatch(removeFav)()} //la ejecutamos a la funcion porque necesita retornar un objeto no una funcion jeje
   }
}

export default connect (
   null, 
   mapDispatchToProps
)(Card);