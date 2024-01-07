import React, { useState, useEffect } from "react";
// import "./Womens.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  Hide,
  Input,
  Select,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  handleSortByRedux,
} from "../../redux/Products/action";
import { Card } from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import MobileNav from '../Navbar/MobileNav';
import { useMediaQuery } from '@chakra-ui/react'
import { Loader } from "../Loader/Loader";
import Sidebar from "../Sidebar/Sidebar";
import Mobilesidebar from "../Sidebar/Mobilesidebar";

function Womens() {
  const dispatch = useDispatch();
  const Products = useSelector((store) => store.ProductReducer.Products);
  const [priceFilter, setPriceFilter] = React.useState([]);
  const [count, setCount] = useState(0)
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const handleSorting = (e) => {
    const value = e.target.value;
    const allProducts = Products;

    if (value === "highToLow") {
      const sortedProduct = allProducts.sort(
        (a, b) => parseInt(b.discountPrice) - parseInt(a.discountPrice)
      );

      // console.log("allProd", sortedProduct);
      dispatch(handleSortByRedux(sortedProduct));
      setCount((pre) => pre + 1)

    } else {
      const sortedProduct = allProducts.sort(
        (a, b) => parseInt(a.discountPrice) - parseInt(b.discountPrice)
      );
      dispatch(handleSortByRedux(sortedProduct));
      setCount((pre) => pre + 1)
    }
  };

  const categoryFilter = () => { };

  const handlePriceFilterChange = (event) => {
    const value = parseInt(event.target.value);
    let newPriceFilter = [...priceFilter];
    if (event.target.checked) {
      newPriceFilter.push(value);
    } else {
      newPriceFilter = newPriceFilter.filter((price) => price !== value);
    }
    setPriceFilter(newPriceFilter);
  };

  useEffect((Products) => {
    dispatch(getProductData("kid"));
  }, []);
  return (
    <>


      {isLargerThan800 ? <Navbar /> : <MobileNav />}

      <Box position="fixed" top="29px" width="100%" margin={"auto"} backgroundColor="white" zIndex={9} >
      <Show breakpoint='(max-width: 450px)'>
        <Flex justifyContent={"space-around"}>

          <Box>

            <Mobilesidebar onPriceFilterChange={handlePriceFilterChange} categoryFilter={"categoryFilterFunc"} />
          </Box>


          <Box>


            <Accordion display={"flex"} fontSize="10px" fontWeight={400} lineHeight='24px' color=' rgb(102, 102, 102)' border="1px solid rgb(240,240,240)" padding={"10px"} justifyContent="center" allowMultiple>


              {/* category */}
              <AccordionItem marginTop="20px" >
                <h2>
                  <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                    <Box as="span" flex='1' textAlign='left'>
                      Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>

                  <Stack spacing={5} direction='column'>
                    <Checkbox value="highToLow"
                      onChange={(e) => handleSorting(e)} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                      HighToLow
                    </Checkbox>
                    <Checkbox value="lowToHigh"
                      onChange={(e) => handleSorting(e)} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                      LowToHigh
                    </Checkbox>



                  </Stack>
                </AccordionPanel>
              </AccordionItem>









            </Accordion>
          </Box>


        </Flex>

      </Show>
    </Box>
    <Box display="flex" justifyContent="space-between" maxWidth="1250px" margin="auto" marginTop={"20px"} gap="40px">
      <Box display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }} width="20%" marginTop="50px">
        <Box className="women-left">




          <Sidebar onPriceFilterChange={handlePriceFilterChange} categoryFilter={"categoryFilterFunc"} />


        </Box>
      </Box>

      <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}>

        <Box display={{ base: "grid", sm: "flex" }} gap="20px" justifyContent={{ base: "center", sm: "right" }}>
          <Hide breakpoint='(max-width: 450px)'>

            <Flex>

              <Select variant='unstyled' padding={"7px"} border={"none"} onChange={(e) => handleSorting(e)} id="sort-select">
                <option value=""> Select Price</option>
                <option value="highToLow">Price High to Low</option>
                <option value="lowToHigh">Price Low to High</option>
              </Select>
            </Flex>
          </Hide>
        </Box>

        <hr />

          <hr />

          <Box
            style={{
              display: "grid",
              gap: "15px",
              justifyContent: "space-around",
              margin: "20px",
            }}
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr) ",
              lg: "repeat(3, 1fr) ",
            }}
          >
            {
              Products.length === 0 ? <Loader /> : Products?.map((item) => (
                <Card {...item} />
              ))

            }
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Womens;
