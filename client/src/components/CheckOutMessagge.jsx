import { Box, styled, Typography, Tab, Tabs } from '@mui/material'
import { textAlign } from '@mui/system'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { subtotal } from '../utils/utils';


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

  const TitleOrder = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    textAlign: 'center',
    marginTop:'30px'
}))

const SpanData = styled('span')(({ theme }) => ({
  fontSize:'20px'

}))


const CheckOutMessagge = () => {
  const user = useSelector((state) => state.user)
  const dataCheckOut = useSelector((state) => state.dataCheckOut)
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(dataCheckOut)
  return (
    <Box>
      <TitleOrder >YOUR ORDER</TitleOrder>
          <Box sx={{width:'100%'}}>
            { user.orders && user.orders[user.orders.length-1].order.map((product, i) => {
              return (
                <Box key={i} sx={{display: "flex",
                justifyContent: "space-between", margin:'5px'}}>
              <Box sx={{flex:'2', display:'flex', alignItems:'center'}}>
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
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{  width: '100%', bgcolor: 'background.paper' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Shipping" value="1" />
            <Tab label="Payment" value="2" />
          </TabList>
        </Box>
            <TabPanel value="1" sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <SpanData>STREET: {dataCheckOut.street}</SpanData>
            <SpanData>NUMBER: {dataCheckOut.number}</SpanData>
            <SpanData>CITY: {dataCheckOut.city}</SpanData>
            <SpanData>PROVINCE: {dataCheckOut.province}</SpanData>
            <SpanData>ZIP: {dataCheckOut.zip}</SpanData>
            <SpanData>COUNTRY: {dataCheckOut.country}</SpanData>
            </TabPanel>
            <TabPanel value="2" sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <SpanData>CARD NUMBER: {dataCheckOut.cardnumber?.substring(0,4)} XXXX XXXX XXXX</SpanData>
            <SpanData>EXPIRE DATE: {dataCheckOut.expiredate} </SpanData>
            <SpanData>CVC: XXX </SpanData>
            <SpanData sx={{fontSize:'22px',fontWeight:'700'}}>TOTAL: $ {subtotal(user.orders && user.orders[user.orders.length-1].order)} </SpanData>
        </TabPanel>
      </TabContext>
        </Box>
          </Box>
    </Box>
  )
}

export default CheckOutMessagge