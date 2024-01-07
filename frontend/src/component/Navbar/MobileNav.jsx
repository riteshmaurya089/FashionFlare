import React from "react";
import Logo2 from "../Images/fashion_flare.png"
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import MobileItem from "./MobileItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBagCheckFill, BsFillSuitHeartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import { SidebarContext } from "../context/SidebarContextProvider";
import { useToast } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { getfilterValue } from "../../redux/Products/action";
import { useDispatch } from "react-redux";

const MobileNav = () => {
  let userName = localStorage.getItem("username");
  let userEmail = localStorage.getItem("useremail");
  let loginValue = localStorage.getItem("login");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const { cartData, setCartData, cartLength, setCartLength, setCategory } =
  //   useContext(SidebarContext);
  // console.clear()

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
      dispatch(getfilterValue("navValue", value))
    }, 1500)
  }
  return (
    // <Box position={"fixed"}  zIndex={1} bg="white" width={"100%"} height="100px">
    <>
      <Box padding="10px"
        // alignItems={"center"}
        justifyContent="space-around"
        position={"fixed"}
        top={0}
        width="100%"
        zIndex={1}
        backgroundColor="#fff"
      >
        <Flex
          paddingBottom="10px"
          alignItems={"center"}
          justifyContent="space-around"
          // position={"fixed"}
          // top="0"
          width="100%"
          zIndex={1}
          backgroundColor="#fff"

        >
          <MobileItem
            nameitem={<GiHamburgerMenu />}
            item1={loginValue ? <Box display={"grid"}><Text>Welocme Back ! {userName ? userName.toUpperCase() : null}</Text> <Text>{userName ? userEmail: null}</Text></Box> : null}

            item2={<Link to="/women" onClick={() => localStorage.setItem("category", ("women"))}>
              WOMENS
            </Link>}
            item3={<Link to="/men" onClick={() => localStorage.setItem("category", ("men"))}>
              MENS
            </Link>}
            item4={<Link to="/kid">
              KIDS
            </Link>}
            item5={<Link to="/homeandkitchen" >
              HOME & KITCHEN
            </Link>}
            item6={
              <Box>
                {loginValue !== null ? <Box>
                  <Button width="10px" fontSize={"10px"} objectFit={"center"} colorScheme='red' onClick={onOpen}>Logout</Button>
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
                          Logout
                        </Button>
                        <Button colorScheme='green'><Link to="/cart">Go To Cart</Link></Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box> : <Link to="/login" ><Button colorScheme='green'>Login</Button></Link>}
              </Box>}

          />
          <Box>
            <Link to="/">
              <Image
                src={Logo2}
                width="100px"
                margin="auto"
              ></Image>
            </Link>
          </Box>
          {/* <Link to="/login">
          <Button colorScheme="red" size="sm">SignIn</Button>
        </Link> */}

          {/* {loginValue ? <Box display={"grid"}><Text fontSize={{ base: "12px", sm: "16px" }} >{userName ? userName.toUpperCase() : null}</Text> <Text fontSize={{ base: "12px", sm: "16px" }}  >{userEmail}</Text></Box> : null} */}

          <Link to="/cart">

            <Box

              right="20px"
              width={"fit-content"}
              height="1rem"
              display={"flex"}
              alignItems={"center"}
              gap="3"
            >
              <BsFillBagCheckFill style={{ fontSize: "20px" }} />
              <Text as="b" fontSize={"xs"}>

              </Text>
            </Box>
          </Link>

          <Link to="/wishlist">

            <Box

              right="20px"
              width={"fit-content"}
              height="1rem"
              display={"flex"}
              alignItems={"center"}
              gap="3"
            >
              <BsFillSuitHeartFill style={{ fontSize: "20px" }} />
              <Text as="b" fontSize={"xs"}>

              </Text>
            </Box>
          </Link>
        </Flex>
        {/* <Input /> */}
        <Flex border={"1px solid grey"} borderRadius={"50px"} gap="10px" width={"80%"} margin="auto">
          <Input variant='unstyled' padding={"5px"} onChange={handeNavValue} colorScheme={"red"} color="grey" border={"none"} placeholder="Search AJIO" />
          <Box marginTop="5px" padding={"4px"}>
            <AiOutlineSearch fontSize={"25px"} color="grey" />
          </Box>
        </Flex>
      </Box>



    </>

    // </Box>
  );
};

export default MobileNav;