import { StyledContainer } from "./styledContainer";
import  ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) =>{
    return(
        <StyledContainer >
            <p>Hola {greeting}</p>
            <ItemList></ItemList>
            <ItemCount></ItemCount>
        </StyledContainer>
    );
};

export default ItemListContainer;