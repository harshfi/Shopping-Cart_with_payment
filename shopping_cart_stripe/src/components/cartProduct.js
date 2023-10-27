import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../ProductsStore";

function CartProduct(props){
 const cart = useContext(CartContext);
 const id=props.id;
 const qunatity=props.quantity;
 const productData= getProductData(id);
 console.log(qunatity)
 return (
    <>
       <h3>{productData.title}</h3>
       <p>{qunatity} total</p> 
       <p>$ {(qunatity*productData.price) }</p>
       <Button size="sm" onClick={()=>cart.deleteFromCart(id)}>Remove</Button>
       <hr></hr>
    </>
 )
}

export default CartProduct;