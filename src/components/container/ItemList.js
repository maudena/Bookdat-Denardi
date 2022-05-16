import React from "react";
import ItemInfo from "./dataItems";
import Item from "./Item";

const ItemList = () => {
    return (
        <div className="container">
            <div className="row">
                {ItemInfo.map(item => {return<Item key={item.id} item={item}/>})}
            </div>
        </div>
    )
}

export default ItemList;