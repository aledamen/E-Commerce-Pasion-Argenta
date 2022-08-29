// import { Add, Remove } from "@material-ui/icons";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import styled from "styled-components";
import { styled, alpha } from '@mui/material/styles'
// import { mobile } from "../responsive";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { fontSize } from '@mui/system';
import { useNavigate } from 'react-router';


const Container = styled(Box)(({ theme }) => ({
    // component: "main",
    // maxWidth:"xs"
    // marginBottom:"30px"
}))

const Wrapper = styled(Box)(({ theme }) => ({
    padding: "20px",
    
    // [theme.breakpoints.up('md')]: {
    //     backgroundColor: theme.palette.primary.main,
    //   }
    // mobile({padding:"10px"})
}))
  

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "300",
    textAlign: "center",
  fontSize:"30px"
}))

const Top = styled(Box)(({ theme }) => ({
    fontWeight: "300",
    textAlign: "center",
    display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px"
  }))

const TopButton = styled(Button)(({ theme }) => ({
  padding: "10px",
  fontWeight: "600",
  cursor: "pointer",
  }))

//   border: ${(props) => props.type === "filled" && "none"},
//   background-color: ${(props) =>
//     props.type === "filled" ? "black" : "transparent"},
//   color: ${(props) => props.type === "filled" && "white"},
// `;

const TopTexts = styled(Box)(({ theme }) => ({

}))
//     .div`
//   ${mobile({ display: "none" })}
// `;
const TopText = styled("span")(({ theme }) => ({//span
  textDecoration: "underline",
  cursor: "pointer",
  margin: "0px 10px",
}))


const Bottom = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}))
//     .div`

//   ${mobile({ flexDirection: "column" })}
// `;

const Info = styled(Box)(({ theme }) => ({
    flex:"3"
}))
//     .div`
//   flex: 3;
// `;

const Product = styled(Box)(({ theme }) => ({
    display: "flex",
  justifyContent: "space-between",
}))
//     .div`

//   ${mobile({ flexDirection: "column" })}
// `;

const ProductDetail = styled(Box)(({ theme }) => ({
    flex: "2",
  display:"flex",
}))
//     .div`
//   flex: 2;
//   display: flex;
// `;

const Image = styled("img")(({ theme }) => ({
    width:"200px"
}))
//     .img`
//   width: 200px;
// `;

const Details = styled(Box)(({ theme }) => ({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}))
//     .div`

// `;

// const ProductName = styled.span``;

// const ProductId = styled.span``;

// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

// const ProductSize = styled.span``;

const PriceDetail = styled(Box)(({ theme }) => ({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}))
//     .div`
//   flex: "1",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
// `;

const ProductAmountContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
}))
//     .div`

// `;

const ProductAmount = styled(Box)(({ theme }) => ({
  fontSize: "24px",
  margin: "5px",
}))
//     .div`

//   ${mobile({ margin: "5px 15px" })}
// `;

const ProductPrice = styled(Box)(({ theme }) => ({
    fontSize: "30px",
    fontWeight:200,
  }))
// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
//   ${mobile({ marginBottom: "20px" })}
// `;

const Hr = styled("hr")(({ theme }) => ({
  backgroundColor: "#eee",
  border: "none",
  height: "1px",
}))
//     .hr`

// `;

const Summary = styled(Box)(({ theme }) => ({
    flex: "1",
    border: "0.5px solid lightgray",
    borderRadius: "10px",
    padding: "20px",
    height: "50vh",
}))
//     .div`

// `;

const SummaryTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "200"
}))
//     .h1`
//   fontWeight: "200"
// `;

const SummaryItem = styled(Box)(({ theme }) => ({
    margin: "40px 0px",
    display: "flex",
    justifyContent: "space-between",
}))

//     .div`
//   margin: "40px 0px",
//   display: "flex",
//   justifyContent: "space-between",

// `;
// const SummaryItemText = styled.span``;

// const SummaryItemPrice = styled.span``;

const ButtonCheckOut = styled("button")(({ theme }) => ({
  width: "100%",
  padding: "10px",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontWeight: "600",
}))
// .button`

// `;

const Cart = () => {
    const navigate = useNavigate()
    const handleAddProductCart = () => {
        console.log("hola")
    }
    const handleRemoveProductCart = () => { 
        console.log("hola")
    }
  return (
    <Container>
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton onClick={()=>navigate("/")}>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Favorites (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
        <Info>
             {/* {user.cart.map(()=>)}          */}
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                <AddIcon onClick={handleAddProductCart} sx={{cursor:"pointer"} } />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon onClick={handleRemoveProductCart} sx={{cursor:"pointer"} }/>
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            {/* <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <span>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product> */}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <span>Subtotal</span>
              <span>$ 80</span>
            </SummaryItem>
            <SummaryItem>
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </SummaryItem>
            <SummaryItem>
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </SummaryItem>
            <SummaryItem style={{fontWeight:500, fontSize:"24px"}}>
              <span>Total</span>
              <span>$ 80</span>
            </SummaryItem>
            <ButtonCheckOut>CHECKOUT NOW</ButtonCheckOut>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;