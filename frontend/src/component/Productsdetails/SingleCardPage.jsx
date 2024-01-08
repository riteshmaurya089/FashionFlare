import React, { useState, useEffect } from 'react'
import { Fade, Image, Link, Text, } from '@chakra-ui/react'
import { Box, Button, useDisclosure } from '@chakra-ui/react'
// import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Carousel from './Caurosal'
import { useToast } from '@chakra-ui/react'
import Navbar from '../Navbar/Navbar';
import MobileNav from '../Navbar/MobileNav';
import { useMediaQuery } from '@chakra-ui/react'
import BottomBar from '../Cart/BottomBar'
const SingleCardPage = () => {
    var product = JSON.parse(localStorage.getItem('ProductsDetails'))
    const login=localStorage.getItem("login")||false
    console.log(login)


    const toast = useToast()
    const { isOpen, onToggle } = useDisclosure()
    const [size, setSize] = useState('');
    const [text, setText] = useState(true)
    const navigate = useNavigate()
    const [data, setData] = React.useState([])
    let [count, setcount] = useState(0)
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const getdata = () => {
        axios.get("https://magnificent-bass-suit.cyclic.app/similar")
            .then(r => setData(r.data))
    }

    useEffect(() => {
        getdata()
    }, []);

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };
    const handletext = () => {
        setText(!text)
        if (text === true) {
            // axios.post("https://kind-plum-agouti-tam.cyclic.app/wishlist/add", product)
            // axios.post("https://dizzy-plum-donkey.cyclic.app/wishlist/add", product)

            toast({
                title: `Product Added to Wishlist Successfully`,
                position: "top",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const addtobag = () => {
       
        if(login){

            fetch("https://fashionflore.onrender.com/cart/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(product),
            })
                .then((res) => {
                    // console.log("tot:", res);
                })
                .catch((error) => {
                    console.error(error);
                });
                toast({
                    title: `${product.title} added to cart`,
                    // description: "Product is successfully added to cart",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position:"top"
                });
        } else{

            toast({
                title: `Ooops You are Not Logged in `,
                
                description: `Please Login first`,
                status: "error",
                duration: 3000,
                isClosable: true,
                position:"top"
            });
        }
       
    }

    const navigateto = () => {
        navigate("/womens")
    }

    return (<>

        {isLargerThan800 ? <Navbar /> : <MobileNav />}
        <Image width="80%" margin="auto" src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" />
        <Box display={{ base: "grid", md: "flex", lg: "flex", }} justifyContent="space-evenly" width="90%" margin="auto" >

            <Box >
                <Box style={{ placeItems: "center" }}>
                    <Image  width={{ base: "250px", md: "350px", lg: "400px" }} margin={"auto"} padding="10px" borderRadius={"10%"} src={product.src} alt={product.brand} />

                    <Box style={{ textAlign: "center", }} >
                        <Button color={"grey"} border="1px solid grey"  padding="5px" onClick={onToggle}>Returns Details</Button>
                        <Fade in={isOpen}>
                            <Box
                                p='10px'
                                color='black'
                                
                                bg='white'
                                rounded='md'
                                shadow='md'
                                width={300}
                                fontSize="10px"
                                margin={"auto"}
                            >
                                Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please click here․
                            </Box>
                        </Fade>

                    </Box>
                </Box>
            </Box>

            <Box style={{ textAlign: "center", padding: "10px" }} >
                <Box style={{ textAlign: "center", padding: "10px" }}>
                    <h5 style={{ color: "rgb(177, 153, 117)" }}>{product.brand}</h5>
                    <h5 style={{ fontSize: "16px", width: "300px", margin: "auto" }}>{product.title}</h5>

                    <Box style={{ display: "flex ", gap: "10px", textAlign: "center", justifyContent: "center" }}>
                        <Box style={{ color: "rgb(177, 153, 117)" }}>{product.discountPrice.includes("₹") ? product.discountPrice : `₹${product.discountPrice}`} <span style={{ textDecoration: "line-through" }}>{product.orginalPrice.includes("₹") ? product.orginalPrice : `₹${product.orginalPrice}`} </span> </Box>
                        <p style={{ color: "rgb(177, 153, 117)" }}>{product.discount} </p>
                    </Box>

                    <h5 style={{ color: "rgb(58,182,73)" }}>Offer Price ₹{product.offer}</h5>
                    <p>Price Inclusive Of All Taxes</p>
                   
                </Box>

                {/* <DrawerExample/> */}
                <Box style={{ display: "grid ", gap: "10px", justifyContent: "center" }}>
                    <Text bg={"rgb(253,248,235)"} width={300} fontSize="10px" padding={"5px"} margin="auto">Select your size to know your estimated delivery date.</Text>
                    <Button disable={login===false} onClick={addtobag} bg={"rgb(213,162,73)"} width={300} padding={"5px"} margin="auto"> Add to Bag</Button>
                    <Text width={300} fontSize="10px" padding={"5px"} margin="auto" color={"grey"}>HANDPICKED STYLES | ASSURED QUALITY</Text>
                    <Button bg={text ? "rgb(213,162,73)" : "red.600"} onClick={handletext} width={300} padding={"5px"} margin="auto"> {text ? "Save To WishList" : "Added To WishList"}</Button>

                </Box>

                <Box style={{ display: 'inline', float: 'right', textAlign: "left", marginTop: "50px", fontSize: "16px" }}>
                    <h1 style={{
                        fontFamily: "SourceSansPro", fontSize: "14px", fontWeight: "900", lineHeight: "normal", color: " rgb(64, 103, 134)"
                    }}>Product Details</h1>
                    <li>Brand:{product.brand}</li>
                    <li>5-pocket styling</li>
                    <li style={{ fontSize: "16px", width: "300px", margin: "auto" }}>Package contains: <span> {product.nameCls}</span> </li>
                    <li>Machine wash cold</li>
                    <li>High Rise</li>
                    <li>99% cotton, 1% elastane</li>
                    <li>Product Code:{product._id}</li>

                </Box>
            </Box>
        </Box>


        <Box style={{ width: "80%", margin: "auto", }}>


            <Box >

                <Box>
                    <h1 style={{
                        fontFamily: "Lora", fontSize: "26px", fontWeight: '700', lineHeight: "1.4px", color: "rgb(88, 88, 88)", marginTop: "100px",
                    }}>About {product.brand}</h1>
                    <hr style={{ display: "block", marginLeft: "auto", marginRight: "auto", borderStyle: "inset", borderWidth: "1px" }} />
                </Box>

                <Box style={{ display: 'flex' }}>
                    <Box style={{ marginTop: "30px", backgroundColor: "maroon", padding: "20px", color: "white", fontFamily: "sans-serif", borderRadius: "600px" }}>
                        <h1>{product.brand}</h1>
                    </Box>
                    <p style={{ marginTop: "100px", width: "80%", margin: "auto", fontFamily: "areal", fontSize: "16px", color: "grey", padding: "30px" }}>Every day is different, so should be your look! Avaasa brings a designer collection of women’s fusion wear and ethnic clothes to AJIO, including floral print kurtas, block print kurtis, colourful shrugs, churidar leggings and more in a range of hues.</p>
                </Box>
            </Box>


            <Box>

                <h1 style={{
                    fontFamily: "Lora", fontSize: "26px", fontWeight: '700', lineHeight: "1.4px", color: "rgb(88, 88, 88)", marginTop: "100px",
                }}>Shop more</h1>
                <hr style={{ display: "block", marginLeft: "auto", marginRight: "auto", borderStyle: "inset", borderWidth: "1px" }} />
                <Box style={{ margin: "30px 0px", padding: "10px" }}>
                    <Carousel data={data} />
                </Box>
                <Box display={{ base: "grid", md: "flex" }} style={{ justifyContent: "space-between", width: "60%", margin: "auto", marginTop: "50px" }}>
                    <Box onClick={navigateto} style={{ padding: "30px", background: "rgb(248,248,248)" }}> <h1>View more</h1></Box>
                    <Box style={{ padding: "30px", background: "rgb(248,248,248)" }}> <h1>Style:view more</h1></Box>
                    <Box style={{ padding: "30px", background: "rgb(248,248,248)" }}> <h1>Brand:{product.brand}</h1></Box>
                </Box>
            </Box>

        </Box>



        <BottomBar />



    </>

    )
}


export default SingleCardPage