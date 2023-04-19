import styled from "styled-components";
import { popularProducts } from '../data';
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface IProducts {
  category?: string
  filters?: {}
  sort?: string
}

const Products = (props: IProducts) => {
  const {category, filters, sort } = props;

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item}  key={item.id}/>
      ))}
    </Container>
  )
}

export default Products