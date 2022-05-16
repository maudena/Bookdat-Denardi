import React from "react";
import ItemCount from "./ItemCount";




const Item =({item}) =>{
    const {nombre, autor, precio, stock, imagen, id, description} = item
    const onAdd = (cantidad) =>{
        alert(`Has agregado ${cantidad} de ${nombre} al carrito!`)
    };

    return(
        
            <div className="card">
                <img className="card-img-top" src={imagen} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{autor}</h5>
                    <p className="card-text">{nombre}</p>
                    <p className="card-info">${precio}</p>
                    <button>Detalles</button>
                    <ItemCount
                    stock={stock}
                    onAdd = {onAdd}
                    initial = {0} 
                    ></ItemCount>
                </div>
            </div>
        
    )
}




export default Item;