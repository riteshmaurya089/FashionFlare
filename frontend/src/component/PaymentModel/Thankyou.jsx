import {
    Box,
    Image,
    Button,
    Center,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useMediaQuery,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
import MobileNav from "../Navbar/MobileNav";
import Navbar from "../Navbar/Navbar";

  
  const Thankyou = () => {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    return (
      <Box>
         {isLargerThan800 ? <Navbar /> : <MobileNav />}
        <Box>
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="500px"
          >
            <AlertIcon boxSize="50px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="xl">
              Payment Successfull !
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for ordering from <b>Fashion Flare</b>.
              <br />
            </AlertDescription>
            <Image
              src="https://media3.giphy.com/media/TIeTxUeyPeFI771jTF/200w.webp?cid=ecf05e47q425vhaxgbayqm17i3thub0p958efllafgzy34uv&rid=200w.webp&ct=g"
              alt="Thank you"
              marginTop={5}
            ></Image>
          </Alert>
        </Box>
        <Center margin={"3% 0 2% 0"}>
          <Link to="/">
            <Button
              bg={"rgb(213,162,73)"} 
              color={"white"}
              w={"100"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Continue Shopping ..
            </Button>
          </Link>
        </Center>
        
      </Box>
    );
  };
  
  export default Thankyou;