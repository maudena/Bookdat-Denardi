import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ItemInfo from "./Item";

const Item = (item) => {
    return (
        <div className="col-md-4" >
            <Card style={{ width: '18rem' }} key={item.id}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.autor}</Card.Title>
                    <Card.Text>
                        {item.title}
                    </Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                    <Button variant="primary">Ver detalles</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

const ItemList = () => {
    return (
        <div className="container">
            <div className="row">
                {ItemInfo.map(Item)}
            </div>
        </div>
    )
}

export default ItemList;