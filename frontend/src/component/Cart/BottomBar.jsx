import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const BottomBar = () => {
    return (
        <>

            <hr />
            <Box display={{ base: "grid", sm: "grid", md: "flex", lg: "flex" }} justifyContent="space-around" backgroundColor="rgb(250,250,250)" color="rgb(213,162,73)" marginTop="20px" padding={{ base: "10px", sm: "20px" }}  >
                <Flex >
                    <Image width={"40px"} padding="5px" src='https://penncommunitybank.imgix.net/wp-content/uploads/2019/11/security-icon.png?auto=compress&fit=crop' />
                    <Text padding={"10px"}>SECURE PAYMENTS</Text>
                </Flex>
                <Flex>
                    <Image width={"40px"} padding="5px" src='https://static.thenounproject.com/png/2724368-200.png' />
                    <Text padding={"10px"}>CASH ON DELIVERY</Text>
                </Flex>
                <Flex>
                    <Image width={"40px"} padding="5px" src='https://cdn-icons-png.flaticon.com/512/1883/1883880.png' />
                    <Text padding={"10px"}>ASSURED QUALITY</Text>
                </Flex>
                <Flex>
                    <Image width={"40px"} padding="5px" src='https://static.thenounproject.com/png/1015317-200.png' />
                    <Text padding={"10px"}>EASY RETURNS</Text>
                </Flex>
            </Box>

            <hr style={{ fontSize: "10px" }} />

            <Box display={{ base: "grid", sm: "grid", md: "flex", lg: "flex" }} justifyContent="space-around" backgroundColor="rgb(250,250,250)" marginTop="20px">
                <Flex >
                    <Image objectFit={"contain"}  width={{base:"30px",sm:"50px"}} src="https://cdn-icons-png.flaticon.com/512/182/182308.png" alt="" />
                    <Text  padding={"20px"}>Easy Returns</Text>
                </Flex>
                <Flex >
                    <Image objectFit={"contain"}  width={{base:"30px",sm:"60px"}}src="https://thumbs.dreamstime.com/b/empathy-vector-icon-black-silhouette-flat-illustration-isolated-white-background-204899514.jpg" alt="" />
                    <Text padding={"20px"}>!100% Hand Picked</Text>
                </Flex>
                <Flex >
                    <Image objectFit={"contain"}  width={{base:"30px",sm:"60px"}} src="https://d1pt6w2mt2xqso.cloudfront.net/AcuCustom/Sitename/DAM/044/FSEweek-icon-tick.png" alt="" />
                    <Text padding={"20px"}> Assured Quality</Text>
                </Flex>
            </Box>
            <hr />
        </>
    )
}

export default BottomBar