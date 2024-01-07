import React, { useState, useEffect } from "react";
import "./Womens.css";
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
import { getProductData, handleSortByRedux, SortByCategory, } from "../../redux/Products/action";
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
  console.log('Products: ', Products);
  const navValue = useSelector((store) => store.ProductReducer.navValue);
  // console.log('navValue: ', navValue);
  // const categoryFilterValue = useSelector((store) => store.ProductReducer.filterValue);
  const FilterValue = useSelector((store) => store.ProductReducer.brandValue);
  console.log('FilterValue: ', FilterValue);
  // console.log('FilterValue: ', FilterValue);
  // console.log('type', FilterValue.type,"Value",FilterValue.value);
  // const filterProducts = useSelector((store) => store.ProductReducer);
  // const filterValue = useSelector((store) => store.ProductReducer);
  // console.log('filterValue: ', filterValue);
  // console.log('filterProducts: ', filterProducts);
  // console.log('brandFilterValue: ', brandFilterValue);
  // console.log('navValue: ', navValue);
  // console.log('filterValue: ', categoryFilterValue);
  // console.log('value: ', navValue);
  // console.log('inputvalue: ', inputvalue);
  const [priceFilter, setPriceFilter] = React.useState([]);
  const [count, setCount] = useState(0)
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  // if (categoryFilterValue.length>0) {
  //   const data = Products.filter((item) => item.title.includes(categoryFilterValue))
  //   dispatch(SortByCategory(data))
  // }
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
  let [brandValue, setbrandValue] = React.useState("");
  let [categoryValue, setcategoryValue] = React.useState("");
  const categoryFilterFunc = (e) => {
    setcategoryValue(e.target.value)
  }

  const brandFilterFunc = (e) => {
    setbrandValue(e.target.value)
  }

  let filter_Data = []
  if (FilterValue.type === "brand") {
    filter_Data = Products.filter((product) => product.brand === FilterValue.value)
  } if (FilterValue.type === "category") {
    filter_Data = Products.filter((product) => product.title.includes(FilterValue.value))
  }
  if (FilterValue.type === "price") {
    filter_Data = Products.filter((product) => +product.offer < +FilterValue.value)
  }
  if (FilterValue.type === "navValue") {
    filter_Data = Products.filter((product) => product.title.includes(FilterValue.value))
  }
  if (FilterValue.type === "fabric") {
    filter_Data = Products.filter((product) => product.title.includes(FilterValue.value))
  }
  // if (brandValue) {
  //   filter_Data = Products.filter((item) => item.brand === brandValue)
  // }
  // if (categoryValue) {
  //   filter_Data = Products.filter((item) => item.title.includes(categoryValue))
  // }
  // if (inputvalue) {
  //   let newvalue = inputvalue.charAt(0).toUpperCase() + inputvalue.slice(1);
  //   // console.log('str: ', newvalue);
  //   filter_Data = Products.filter((item) => item.title.includes(newvalue))
  // }

  // if (categoryValue && brandValue) {
  //   filter_Data = Products.filter((item) => item.brand === brandValue)
  // }

  // const getinputvalue = (e) => {
  //   setInputValue(e.target.value)
  // }

  useEffect((Products) => {
    dispatch(getProductData("women", navValue, FilterValue.type, FilterValue.value));
  }, [navValue, FilterValue]);
  return (
    <>
      {isLargerThan800 ? <Navbar /> : <MobileNav />}
      <Box position="fixed" bottom="0px" width="100%" margin={"auto"} backgroundColor="white" zIndex={9} >
        <Show breakpoint='(max-width: 450px)'>
          <Flex justifyContent={"space-around"}>
            <Box>
              <Mobilesidebar onPriceFilterChange={handlePriceFilterChange} brandFilter={brandFilterFunc} categoryfilter={categoryFilterFunc} />
            </Box>

          </Flex>
        </Show>
      </Box>
      <Box display="flex" justifyContent="space-between" maxWidth="1250px" margin="auto" marginTop={"20px"} gap="40px">
        <Box display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }} width="20%" marginTop="50px">
          <Box className="women-left">
            <Sidebar onPriceFilterChange={handlePriceFilterChange} brandFilter={brandFilterFunc} categoryfilter={categoryFilterFunc} />
          </Box>
        </Box>

        <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}>

          <Box display={{ base: "grid", sm: "flex" }} gap="20px">
            <Hide breakpoint='(max-width: 450px)'>

              <Flex justifyContent={"space-between"} width={"100%"}>
                {/* <Input width="60%" type="text" onInput={getinputvalue} placeholder="Search Here" /> */}
                <Select width="30%" variant='unstyled' padding={"7px"} border={"none"} onChange={(e) => handleSorting(e)} id="sort-select">
                  <option value=""> Select Price</option>
                  <option value="highToLow">Price High to Low</option>
                  <option value="lowToHigh">Price Low to High</option>
                </Select>
              </Flex>
            </Hide>
          </Box>

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
            {filter_Data.length > 0 ? filter_Data.length === 0 ? <Loader /> : filter_Data?.map((item) => (
              <Card key={item._id} {...item} />
            )) :
              Products.length === 0 ? <Loader /> : Products?.map((item) => (
                <Card key={item._id} {...item} />
              ))

            }
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Womens;
