import { StyledContainer } from "./styledContainer";
import  ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) =>{
    return(
        <StyledContainer >
            <p>Hola {greeting}</p>
            <ItemCount></ItemCount>
        </StyledContainer>
    );
};

export default ItemListContainer;