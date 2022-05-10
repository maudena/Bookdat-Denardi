import React, {useState} from "react";
import "./container.css"

const useCounter = (stock = 10,initial =0) =>{          // Para chequear las condiciones del desafio cambiar el valor de stock
    const [contador, setContador] = useState(initial);
    
    const increase = () => {
        if(contador != stock && stock != 0){
            setContador(contador + 1)
            }
        }
        
    const decrement = () => {
        if(contador !=0){
            setContador(contador - 1)
        }
    }
    const onAdd = () =>{
        if(stock != 0){
            console.log(contador);
        }    
    }
    

    return{

        contador,
        increase,
        decrement,
        onAdd,
    }
        
    
}

export default function ItemCount(){
    const {contador,increase,decrement,onAdd} = useCounter()
    return(
        <div className="containerCount">
            <div className="counter">
            
                <button className= "boton" onClick={increase}>+</button>
                <div className="contador">{contador}</div>
                <button className= "boton" onClick={decrement}>-</button>
                
            </div>
            <button className="btnAgregarItem" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )

}