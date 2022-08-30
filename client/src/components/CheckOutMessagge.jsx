import { Box, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'


const Details = styled(Box)(({ theme }) => ({
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  }))
  
  
  const PriceDetail = styled(Box)(({ theme }) => ({
      flex: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
  }))



const CheckOutMessagge = () => {
    const user = useSelector((state) => state.user)
  return (
      <Box>
          <Box sx={{width:'70%'}}>
            {user.cart?.map((product, i) => {
              return (
                <Box key={i} sx={{display: "flex",
                justifyContent: "space-between", margin:'5px'}}>
              <Box sx={{flex:'2', display:'flex'}}>
                    <img src={product.img} style={{width:'150px'}} />
                <Details>
                  <Box sx={{fontSize:'15px'}}>
                    <b>Product:</b> {product.name}
                      </Box>
                </Details>
              </Box>
              <PriceDetail>
                    <Box sx={{ fontSize: '20px' }}>$ {product.price}</Box>
              </PriceDetail>
            </Box>)
             })}         
          </Box>
    </Box>
  )
}

export default CheckOutMessagge