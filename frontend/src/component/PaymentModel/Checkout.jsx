import { Box, Button, Flex, Image, Input, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MobileNav from '../Navbar/MobileNav';
import Navbar from '../Navbar/Navbar';

const Checkout = () => {
    const [value, setvalue] = useState("card");
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const navigate =useNavigate()
    return (
        <>
            {isLargerThan800 ? <Navbar /> : <MobileNav />}
            <Image width={{base:"80%",sm:"40%"}} margin="auto" src="https://images.forestessentialsindia.com/pub/media/payment-method-new.png" alt={"img"} />
            <Flex width={{base:"100%",sm:"70%"}} display={{base:"grid",sm:"flex"}} margin="auto" padding={"10px"}>
                <Box display={{base:"flex",sm:"grid"}}>
                    <Button padding={"5px"} margin="5px" onClick={() => setvalue("card")}>Credit Card</Button>
                    <Button padding={"5px"} margin="5px" onClick={() => setvalue("upi")}>UPI</Button>
                    <Button padding={"5px"} margin="5px" onClick={() => setvalue("net")}>Net Banking</Button>
                    <Button padding={"5px"} margin="5px" onClick={() => setvalue("cod")}>COD</Button>
                </Box>
                {
                    value === "cod" ? <Box width={{base:"80%",sm:"50%"}} margin="auto" padding={"20px"}>
                       
                        <Button onClick={()=>navigate("/thankyou")} bg={"rgb(213,162,73)"} width="100%" padding={"20px"} margin="10px" color="white" >Place Order</Button>

                    </Box> : ""
                }
                {
                    value === "card" ? <Box width={{base:"80%",sm:"50%"}} margin="auto" padding={"20px"}>
                        <Input padding={"10px"} margin="10px" type="text" id="card" placeholder='ENTER CARD DETAILS' />
                        <Flex>
                            <Input padding={"20px"} margin="10px" type="date" placeholder='ENTER EXPIRY DATE' />
                            <Input padding={"20px"} margin="10px" type="number" placeholder='ENTER CVV' />
                        </Flex>
                        <Button onClick={()=>navigate("/thankyou")} bg={"rgb(213,162,73)"} width="100%" padding={"20px"} margin="10px" color="white" >Pay Now</Button>

                    </Box> : ""
                }
                {
                    value === "upi" ? <Box width={{base:"80%",sm:"50%"}}  margin="auto">
                        <Input padding={"20px"} margin="10px" type="text" placeholder='ENTER UPI ID' />
                        <Button onClick={()=>navigate("/thankyou")} bg={"rgb(213,162,73)"} width="100%" padding={"20px"} margin="10px" color="white" >Pay Now</Button>
                    </Box> : ""
                }
                {
                    value === "net" ? <Box width={{base:"80%",sm:"50%"}}  margin="auto">
                        <Input padding={"20px"} margin="10px" type="text" placeholder='ENTER USER ID' />
                        <Input padding={"20px"} margin="10px" type="text" placeholder='ENTER PASSWORD' />
                        <Button onClick={()=>navigate("/thankyou")} bg={"rgb(213,162,73)"} width="100%" padding={"20px"} margin="10px" color="white" >Pay Now</Button>
                    </Box> : ""
                }
            </Flex>
        </>
    )
}

export default Checkout