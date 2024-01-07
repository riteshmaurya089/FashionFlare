import React, { useEffect } from "react";
import {
  Box,
  Text,
  Input,

  Button,

  FormControl,
  FormLabel,
  Image, Flex
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
import { useMediaQuery } from '@chakra-ui/react'
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import MobileNav from "../Navbar/MobileNav";

import axios from "axios";

function Address() {


  const navigate = useNavigate();
  //   const { totalPrice } = useContext(AuthContext);
  const total = localStorage.getItem("total")
  const [cart, setcart] = useState([]);
  console.log('cart: ', cart);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const getcartdata = () => {

    axios
      .get("https://kind-plum-agouti-tam.cyclic.app/cart", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {

        setcart(res.data)
        // dispatch(getCartData(res.data))
        // console.log(res.data);
      })
      .catch((e) => {
        // console.log(e);

      });
  }
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].discountPrice * cart[i].quantity;
  }






  // console.log(form);
  useEffect(() => {
    getcartdata()
  }, []);
  return (
    <>
      {isLargerThan800 ? <Navbar /> : <MobileNav />}

      <Box pb="50px">
        {/* Address Box */}
        <Box m="auto" mt="10px" width={"80%"}>
          <Text textAlign={"left"} fontSize={"25px"}>
            Shipping Address
          </Text>
        </Box>

        <Box

          display={{ base: "grid", sm: "flex" }}
          justifyContent="space-around"
          width={"80%"}
          m="auto"
        >
          <Box width={{ base: "100%", sm: "50%" }} >
            <Box border={"1px solid re"}>
              <FormControl isRequired>
                <Box display={"flex"} justifyContent={"space-between"} mb="20px">
                  <Box border={"1px solid re"} width="49%">
                    <FormLabel>First Name</FormLabel>
                    <Input
                      placeholder="Name"
                      type={"text"}
                      width="100%"
                      name="firstname"
                      isRequired={true}


                    />
                  </Box>

                  <Box border={"1px solid re"} width="49%">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      placeholder="Lastname"
                      type="text"
                      width="100%"
                      name="lastname"


                    />
                  </Box>
                </Box>
                <FormLabel>Pin Code</FormLabel>
                <Input
                  placeholder="Pin Code"
                  type={"number"}
                  width="49%"

                  mb="20px"
                  name="pincode"


                />
                <FormLabel>Address Line 1</FormLabel>
                <Input
                  placeholder="Address Line 1"
                  type={"text"}

                  mb="10px"
                  name="address1"


                />
                <FormLabel>Address Line 2</FormLabel>
                <Input
                  placeholder="Address Line 2"
                  type={"text"}
                  mb="10px"
                  name="address2"


                />
                <Box display={"flex"} justifyContent={"space-between"} mb="20px">
                  <Box border={"1px solid re"} width="49%">
                    <FormLabel>City</FormLabel>
                    <Input
                      placeholder="City"
                      type={"text"}
                      width="100%"
                      name="city"


                    />
                  </Box>

                  <Box border={"1px solid re"} width="49%">
                    <FormLabel>State</FormLabel>
                    <Input
                      placeholder="State"
                      type="text"
                      width="100%"
                      name="state"


                    />
                  </Box>
                </Box>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  placeholder="Phone Number"
                  type={"number"}
                  width="49%"

                  mb="20px"
                  name="phone"


                />
              </FormControl>
            </Box>
          </Box>

          <Box width={{ base: "100%", sm: "30%" }} >
            {/* Payment Box */}
            <Box padding={"5px"} margin={"5px"} >

              <Text fontFamily={"Lora"} fontWeight="700" textAlign={"left"} color="rgb(51, 51, 51)">Order Details</Text>
              <Flex padding={"5px"} justifyContent={"space-between"} color="rgb(51, 51, 51)">
                <Text >Bag total</Text>
                <Text>{Number(sum)}</Text>
              </Flex>

              <Flex>


              </Flex>

              <Flex padding={"5px"} justifyContent={"space-between"} fontWeight="600" color="rgb(51, 51, 51)" >
                <Text>Discount</Text>

                <Text>{Number(sum) - total}</Text>

              </Flex>

              <Flex padding={"5px"} justifyContent={"space-between"} fontWeight="600" color="rgb(51, 51, 51)" >
                <Text>Order total</Text>

                <Text>{total}</Text>
              </Flex>
              {/* <Paymentmodal /> */}
              <Button onClick={() => navigate("/checkout")} bg={"rgb(213,162,73)"} width="100%" padding={"4px"} margin="4px" color="white" >Proceed To Ship</Button>


            </Box>
            <Box>
              <Image src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Text padding="10px" textAlign={"left"} width="80%" margin="auto" color={"rgb(213,162,73)"} fontSize="20px">Items in your bag</Text>
      <Box width={"80%"} margin="auto" display={"grid"} gap="10px" justifyContent="space-between" gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" }} marginBottom={"50px"}>

        {
          cart.map((item) =>
            <Box display={"flex"} gap="10px">

              < Image width="100px" borderRadius="20%" src={item.src} />
              <Box display={"grid"}>

                <Text marginTop={"10px"}>{item.brand}</Text>
                <Text >{item.title}</Text>
              </Box>
            </Box>
          )
        }
      </Box>
    </>
  );
}

export default Address;