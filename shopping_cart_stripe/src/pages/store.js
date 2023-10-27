import { Row, Col} from 'react-bootstrap'
import { ProductsArray } from '../ProductsStore';
import PrductCard from '../components/productCard';

function Store(){
    return(
        <>
        <h1 align="center" className='p-3'>Welcome to the store</h1>
        <Row xs={1} md={3} className='g-4'>
         {ProductsArray.map((product,idx)=>(
            <Col align="center" key={idx}>
               <PrductCard product={product}/>
            </Col>
         ))}
           
        </Row>
        </>
    )
    }
    
    export default Store;