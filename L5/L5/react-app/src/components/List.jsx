import React, { Component } from 'react';
import { Button,Card,CardDeck,Modal,Table } from 'react-bootstrap';
import '../index.css'; 

class List extends Component {
    state = {
        count: 0,
        show:false,
    };
    PRODUCTS = [
        {id:1,handle: 'ocean-blue-shirt', stocked: false, title: 'Ocean Blue Shirt	',tags:"men",src:'https://burst.shopifycdn.com/photos/young-man-in-bright-fashion_925x.jpg'},
        {id:2,handle: 'classic-varsity-top', stocked: false, title: 'Classic Varsity Top',tags:"men",src:'https://burst.shopifycdn.com/photos/casual-fashion-woman_925x.jpg'},
        {id:3,handle: 'classic-varsity-top', stocked: false, title: 'Football',tags:"men",src:'https://burst.shopifycdn.com/photos/autumn-photographer-taking-picture_925x.jpg	'},
        {id:4,handle: 'classic-varsity-top', stocked: false, title: 'Football',tags:"men",src:'https://burst.shopifycdn.com/photos/city-woman-fashion_925x@2x.jpg	'},
        {id:5,handle: 'yellow-wool-jumper', stocked: false, title: 'Yellow Wool Jumper	',tags:"men",src:'https://burst.shopifycdn.com/photos/city-woman-fashion_925x@2x.jpg	'},
        {id:6,handle: 'floral-white-top', stocked: false, title: 'Floral White Top	',tags:"men",src:'https://burst.shopifycdn.com/photos/striped-blouse-fashion_925x.jpg	'},
        {id:7,handle: 'striped-silk-blouse', stocked: false, title: 'Striped Silk Blouse	',tags:"men",src:'https://burst.shopifycdn.com/photos/leather-jacket-and-tea_925x.jpg	'},
        {id:8,handle: 'classic-leather-jacket', stocked: false, title: 'Classic Leather Jacket	',tags:"men",src:'https://burst.shopifycdn.com/photos/young-female-models-denim_925x.jpg	'},
        {id:9,handle: 'dark-denim-top', stocked: false, title: 'Dark Denim Top	',tags:"men",src:'https://burst.shopifycdn.com/photos/mens-fall-fashion-jacket_925x.jpg	'},
        {id:10,handle: 'navy-sport-jacket', stocked: false, title: 'Navy Sports Jacket	',tags:"men",src:'https://burst.shopifycdn.com/photos/black-bag-over-the-shoulder_925x.jpg	'},
        {id:11,handle: 'dark-winter-jacket', stocked: false, title: 'Soft Winter Jacket	',tags:"men",src:'https://burst.shopifycdn.com/photos/menswear-blue-zip-up-jacket_925x.jpg	'},
        {id:12,handle: 'black-leather-bag', stocked: false, title: 'Black Leather Bag	',tags:"men",src:'https://burst.shopifycdn.com/photos/black-bag-over-the-shoulder_925x.jpg	'},
        {id:13,handle: 'zipped-jacket', stocked: false, title: 'Zipped Jacket	',tags:"men",src:'https://burst.shopifycdn.com/photos/smiling-woman-poses_925x.jpg	'},
        {id:14,handle: 'silk-summer-top', stocked: false, title: 'Silk Summer Top	',tags:"men",src:'https://burst.shopifycdn.com/photos/smiling-woman-poses_925x.jpg	'},
        {id:15,handle: 'longsleeve-cotton-top', stocked: false, title: 'Long Sleeve Cotton Top	',tags:"men",src:'https://burst.shopifycdn.com/photos/urban-fashion_925x.jpg	'},
        {id:16,handle: 'chequered-red-shirt', stocked: false, title: 'Chequered Red Shirt	',tags:"men",src:'https://burst.shopifycdn.com/photos/red-plaid-shirt_925x.jpg	'},
        {id:17,handle: 'white-cotton-shirt', stocked: false, title: 'White Cotton Shirt	',tags:"men",src:'https://burst.shopifycdn.com/photos/urban-fashion_925x.jpg	'},
        {id:18,handle: 'olive-green-jacket', stocked: false, title: 'Olive Green Jacket	',tags:"men",src:'https://burst.shopifycdn.com/photos/urban-fashion_925x.jpg	'},
        {id:19,handle: 'blue-silk-tuxedo', stocked: false, title: 'Blue Silk Tuxedo	',tags:"men",src:'https://burst.shopifycdn.com/photos/urban-fashion_925x.jpg	'},
        {id:20,handle: 'red-sports-tee', stocked: false, title: 'Red Sports Tee	',tags:"men",src:'https://burst.shopifycdn.com/photos/womens-red-t-shirt_925x.jpg	'},
        {id:21,handle: 'striped-skirt-and-top', stocked: false, title: 'Striped Skirt and Top	',tags:"men",src:'https://burst.shopifycdn.com/photos/woman-in-the-city_925x.jpg	'},
        {id:22,handle: 'led-high-tops', stocked: false, title: 'Football',tags:"men",src:'https://burst.shopifycdn.com/photos/putting-on-your-shoes_925x.jpg	'},
        {id:23,handle: 'ocean-blue-shirt', stocked: false, title: 'Football',tags:"men",src:'https://burst.shopifycdn.com/photos/putting-on-your-shoes_925x.jpg	'},
      ];      
    render() { 

        return (
            <React.Fragment>
            {this.header()}
            <h1 className="this">Header</h1>
            <CardDeck className="m-2 group cardDeck">
            <ul className="list-group list-group-horizontal align-items-stretch flex-wrap">
                {this.renderTags()}
            </ul>
            </CardDeck>
            </React.Fragment>
        );
    }

    handleModal(){
        this.setState({show:!this.state.show})
    }



    check(props){
            if(props.stocked){
                return (
                    <tr key={props.id}>
                    <td><img className="card-img-top smallIMG" src={props.src}></img></td>
                    <td>{props.title}</td>
                    </tr>
                )
        }
    }


    header(){

        return (
                <div className="header">
            <span  className={this.getBadgeClasses()}>Card :  {this.formatCounter()}</span>
            <span className="cartE" onClick={ () => this.handleModal() }>&#128722;</span>
            <Modal show={this.state.show}>
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
                {this.PRODUCTS.map((item) =>
                this.check(item))}
                </tbody>
            </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ () => this.handleModal() } >Close Modal</Button>
            </Modal.Footer>
            </Modal>
        </div>
        );
    }



    handelerIncrement = product => {
        this.setState({ stocked : product.stocked= !product.stocked })
        this.setState({ count : product.stocked==true ? this.state.count+=1 : this.state.count-=1 })
    }

    renderTags(){
        return this.PRODUCTS.map((currElement) => 
            <li key={currElement.id} className="list-group-item border-0">
         <Card  className="col-sm m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" className="cardImage" src={currElement.src} />
            <Card.Body>
                <Card.Title>{currElement.title}</Card.Title>
                <Card.Text>
                {currElement.title}
                </Card.Text>
                <Button onClick={() => this.handelerIncrement(currElement)} variant="primary">{currElement.stocked == false ? "Add To Card"  : "Remove From Card" }</Button>
            </Card.Body>
            </Card> 
            </li>
          )
    }
    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += this.state.count == 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter (){
        const {count} = this.state.count;
        return count == 0 ? "Zero" : this.state.count;
    }
}
 
export default List ;