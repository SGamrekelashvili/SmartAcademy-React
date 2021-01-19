import React from 'react';
import { Button,Card,CardDeck,Modal,Table } from 'react-bootstrap';

const Header = ({handleModal, formatCounter, getBadgeClasses, state, check,PRODUCTS}) => {
    return (
        <div className="header">
    <span  className={getBadgeClasses()}>Card :  {formatCounter()}</span>
    <span className="cartE" onClick={ () => handleModal() }>&#128722;</span>
    <Modal show={state.show}>
    <Modal.Header>Cart</Modal.Header>
    <Modal.Body>
    <Table striped bordered hover>
    <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {PRODUCTS.map((item) =>
        check(item))}
        </tbody>
    </Table>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={ () => handleModal() } >Close Modal</Button>
    </Modal.Footer>
    </Modal>
</div>
);
}

export default Header;