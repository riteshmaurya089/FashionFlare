import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image, Button, useDisclosure, Input } from "@chakra-ui/react";
import { BsFillBagCheckFill, BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Menuitem from "./MenuItem";
import { Link } from "react-router-dom";
// import { SidebarContext } from "../context/SidebarContextProvider";
import { useNavigate } from "react-router-dom";
import Logo2 from "../Images/fashion_flare.png"
import { useToast } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import Navmenu from "./Navmenu";
import axios from "axios";
// import { useDispatc } from "react-redux"
import { getfilterValue, getnavValue } from "../../redux/Products/action";
import { useDispatch } from "react-redux";
const Navbar = ({ cartlength }) => {

  let userName = localStorage.getItem("username");
  let userEmail = localStorage.getItem("useremail");
  let loginValue = localStorage.getItem("login");
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const hanldecart = () => {
    navigate('/cart')
  }
  const handleLogout = () => {
    localStorage.clear();
    toast({
      title: `YOU ARE LOGGED OUT`,
      position: "top",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
    navigate('/login')
  }
  const handeNavValue = (e) => {
    const value = e.target.value
    // console.log(value)
    setTimeout(() => {
      // dispatch(getnavValue(value))
      dispatch(getfilterValue("navValue",value))
    }, 1500)
  }
  return (
    <>
      <Flex justifyContent={"space-around"} alignItems={"center"} padding="10px" position={"fixed"} top="0" width="100%" zIndex={"999"} backgroundColor="#fff">
        {/* logo */}
        <Box >
          <Link to="/">
            <Image
              src={Logo2}
              width="150px"
              height="50px"
            ></Image>
          </Link>
        </Box>
        {/* category with user name and signout button */}
        <Box >
          {/* user name and signout  */}
          <Flex gap="20px" textAlign={"right"} justifyContent={"right"} mr="5px" fontSize={"15px"} >
            {loginValue ? <Box display={"grid"}><Text>{userName ? userName.toUpperCase() : null}</Text></Box> : null}
            <Box>
              {loginValue !== null ? <Box>
                <Text colorScheme='red' onClick={onOpen}>SignOut</Text>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader color="red">ARE YOU SURE YOU WANT TO LOGOUT</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody color="green">
                      YOU HAVE ITEMS IN YOUR CART TO CHECKHOUT
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='red' mr={3} onClick={handleLogout}>
                        SignOut
                      </Button>
                      <Button colorScheme='green' onClick={hanldecart}>Go To Cart</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box> : <Link to="/login" ><Button colorScheme='green'>SignIn</Button></Link>}
            </Box>
          </Flex>
          {/* category */}
          <Flex gap="30px" alignItems={"center"} mt="5px">

            <Link to="/women" onClick={() => localStorage.setItem("category", ("womens"))}>
              <Box>
                <Menuitem
                  navitem={"WOMEN"}
                  item1={
                    <Navmenu />
                  }
                />
              </Box>
            </Link>

            <Link to="/men" onClick={() => localStorage.setItem("category", ("men"))}>
              <Box>
                <Menuitem
                  navitem={"MEN"}
                  item1={
                    <Navmenu />
                  }
                />
              </Box>
            </Link>

            <Link to="/kid" >
              <Box>
                <Menuitem
                  navitem={"KIDS"}
                  item1={
                    <Navmenu />
                  }
                />
              </Box>
            </Link>

            <Link to="/homeandkitchen">
              <Box>
                <Menuitem
                  navitem={"HOME & KITCHEN"}
                  item1={
                    <Navmenu />
                  }
                />
              </Box>
            </Link>

            <Flex border={"1px solid grey"} borderRadius={"50px"} gap="10px">
              <Input variant='unstyled' padding={"5px"} onChange={handeNavValue} colorScheme={"red"} color="grey" border={"none"} placeholder="Search AJIO" />
              <Box marginTop="5px" padding={"4px"}>
                <AiOutlineSearch fontSize={"25px"} color="grey" />
              </Box>
            </Flex>

            <Link to="/cart">
              <Box display="flex" gap={'2'}  >
                <BsFillBagCheckFill style={{ fontSize: "30px" }} />
                {/* <Text alignSelf={"end"} as="b" >{loginValue? cart.length>0?cart.length:null:null}</Text> */}
              </Box>
            </Link>

            <Link to="/wishlist">
              <Box display="flex" gap={'2'}  >
                <BsFillSuitHeartFill style={{ fontSize: "28px" }} />
                {/* <Text alignSelf={"end"} as="b" >{loginValue? wishlist.length>0?wishlist.length:null:null}</Text> */}
              </Box>
            </Link>

          </Flex>
        </Box>
      </Flex>
    </>
  );
};


export default Navbar;