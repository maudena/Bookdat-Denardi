import React, {useState} from "react";
import "./container.css"

const ItemCount = ({initial,stock, onAdd}) =>{       
    const [contador, setContador] = useState(initial);

    const addProd =(num)=>{
        setContador(contador + num)
    };
    
    return(
        <div className="countContainer">
            <div className="countContainerContador">
                <button className="btn btn-outline-secondary"
                        onClick={()=> addProd (-1)}
                        disabled={contador === initial ? true : null}>-
                </button>
                <span className="countContainerCantidad">{contador}</span>
                <button className="btn btn-outline-secondary"
                        onClick={()=> addProd (+1)}
                        disabled={contador === stock ? true : null}>+
                </button>       
            </div>
            <button className="btn btn-outline-secondary"
                    onClick={()=> onAdd(contador)}
                    disabled={stock === 0 ? true : null}>Agregar
            </button>
        </div>
    )
        
    
}

export default ItemCount;