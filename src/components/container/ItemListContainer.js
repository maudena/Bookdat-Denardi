import { StyledContainer } from "./styledContainer";

const ItemListContainer = ({greeting}) =>{
    return(
        <StyledContainer >
            <p>Hola {greeting}</p>
            </StyledContainer>
    );
};

export default ItemListContainer;