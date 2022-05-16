import { StyledContainer } from "./styledContainer";
import ItemInfo from "./dataItems";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = ({greeting}) =>{

    const [items,setItems] = useState([]);

    useEffect( () =>{
        const data = new Promise ((resolve,reject) =>{
            setTimeout(()=>{
                resolve(ItemInfo);
            },2000)
        })
        data.then( data => setItems(data));
        data.catch(err => console.log(err))
    },[])

    return(
        <StyledContainer >
            <p>Hola {greeting}</p>
            <ItemList items={items}/>
        </StyledContainer>
    );
};

export default ItemListContainer;