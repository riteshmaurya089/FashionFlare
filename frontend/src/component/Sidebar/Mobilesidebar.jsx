import React from 'react'
import { Show, Hide } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Input, Stack, Checkbox, } from '@chakra-ui/react'
import { getfilterValue } from '../../redux/Products/action';
import { useDispatch } from 'react-redux';

const Mobilesidebar = ({ brandFilter, onPriceFilterChange, categoryfilter }) => {
    const category = localStorage.getItem("category");
    const [priceFilter, setPriceFilter] = React.useState([]);

    const handlePriceFilterChange = (event) => {
        const value = parseInt(event.target.value);
        let newPriceFilter = [...priceFilter];
        if (event.target.checked) {
            newPriceFilter.push(value);
        } else {
            newPriceFilter = newPriceFilter.filter((price) => price !== value);
        }
        setPriceFilter(newPriceFilter);
        onPriceFilterChange(newPriceFilter);
    };
    const dispatch = useDispatch()
    React.useEffect(() => {

    }, [category]);
    return (
        <>{category === "men" ?
            <Accordion display={"flex"} fontSize="10px" fontWeight={400} lineHeight='24px' color=' rgb(102, 102, 102)'  padding={"10px"} justifyContent="center" allowMultiple>
                {/* category */}
                <AccordionItem marginTop="20px" >
                    <h2>
                        <AccordionButton fontSize="15px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                            <Box as="span" flex='1' textAlign='left'>
                                Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox value={"viewall"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                VIEW ALL
                            </Checkbox>
                            <Checkbox value={"DENNISLINGO PREMIUM ATTIRE"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                DENNISLINGO
                            </Checkbox>
                            <Checkbox value={"Puma"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Puma
                            </Checkbox>
                            <Checkbox value={"PERFORMAX"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                PERFORMAX
                            </Checkbox>
                            <Checkbox value={"NIKE"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                NIKE
                            </Checkbox>
                            <Checkbox value={"Mabish By Sonal Jain"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Mabish By Sonal Jain
                            </Checkbox>

                            <Checkbox value={"womens-shoes"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Kun Faya KUN
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            :
            <Accordion display={"flex"} fontSize="10px" fontWeight={400} lineHeight='24px' color=' rgb(102, 102, 102)'  padding={"10px"} justifyContent="center" allowMultiple>
                {/* category */}
                <AccordionItem marginTop="20px" >
                    <h2>
                        <AccordionButton fontSize="15px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                            <Box as="span" flex='1' textAlign='left'>
                                Category
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox value={"viewall"}
                                onChange={() => dispatch(getfilterValue("category", "viewall"))}
                                borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                VIEW ALL
                            </Checkbox>
                            <Checkbox value={"Saree"}
                                onChange={() => dispatch(getfilterValue("category", "Saree"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Saree
                            </Checkbox>
                            <Checkbox value={"Jeans"}
                                onChange={() => dispatch(getfilterValue("category", "Jeans"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Jeans
                            </Checkbox>

                            <Checkbox value={"Top"}
                                onChange={() => dispatch(getfilterValue("category", "Top"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Tops
                            </Checkbox>
                            <Checkbox value={"Dress"}
                                onChange={() => dispatch(getfilterValue("category", "Dress"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Dresses
                            </Checkbox>


                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                {/* brand */}
                <AccordionItem marginTop="20px" >
                    <h2>
                        <AccordionButton fontSize="15px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                            <Box as="span" flex='1' textAlign='left'>
                                Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox value={"viewall"}
                                onChange={() => dispatch(getfilterValue("brand", "View all"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                VIEW ALL
                            </Checkbox>
                            <Checkbox value={"DJ & C"}
                                onChange={() => dispatch(getfilterValue("brand", "DJ & C"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                DJ & C
                            </Checkbox>
                            <Checkbox value={"DNMX"}
                                onChange={() => dispatch(getfilterValue("brand", "DNMX"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                DNMX
                            </Checkbox>
                            <Checkbox value={"FIG"}
                                onChange={() => dispatch(getfilterValue("brand", "FIG"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                FIG
                            </Checkbox>
                            <Checkbox value={"KORAM'S DESIGN"}
                                onChange={() => dispatch(getfilterValue("brand", "KORAM'S DESIGN"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                KORAM'S DESIGN
                            </Checkbox>
                            <Checkbox value={"Teamspirit"}
                                onChange={() => dispatch(getfilterValue("brand", "Teamspirit"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Teamspirit
                            </Checkbox>

                            <Checkbox value={"Wedani"}
                                onChange={() => dispatch(getfilterValue("brand", "Wedani"))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Wedani
                            </Checkbox>


                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                {/* Price */}
                <AccordionItem marginTop="20px">
                    <h2>
                        <AccordionButton fontSize="15px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                Price
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>

                            <Checkbox value={199}
                                onChange={() => dispatch(getfilterValue("price", 199))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 199
                            </Checkbox>
                            <Checkbox value={299}
                                onChange={() => dispatch(getfilterValue("price", 399))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 399
                            </Checkbox>
                            <Checkbox value={599}
                                onChange={() => dispatch(getfilterValue("price", 599))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 599
                            </Checkbox>
                            <Checkbox value={799}
                                onChange={() => dispatch(getfilterValue("price", 799))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 799
                            </Checkbox>
                            <Checkbox value={999}
                                onChange={() => dispatch(getfilterValue("price", 999))} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Under ₹ 999
                            </Checkbox>

                        </Stack>
                    </AccordionPanel>
                </AccordionItem>

                {/* fabric */}
                <AccordionItem marginTop="20px" >
                    <h2>
                        <AccordionButton fontSize="15px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                            <Box as="span" flex='1' textAlign='left'>
                                Fabric
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Input />
                        <Stack spacing={5} direction='column'>
                            <Checkbox onChange={() => dispatch(getfilterValue("fabric", "Silk"))} colorScheme='green' >
                                Silk
                            </Checkbox>
                            <Checkbox onChange={() => dispatch(getfilterValue("fabric", "Cotton"))} colorScheme='green' >

                                Cotton

                            </Checkbox>
                            <Checkbox onChange={() => dispatch(getfilterValue("fabric", "Denim"))} colorScheme='green' >
                                Denim

                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Banarasi Silk

                            </Checkbox>
                            <Checkbox colorScheme='green' >
                                Chambray

                            </Checkbox>
                            <Checkbox colorScheme='green' >

                                Chanderi Cotton

                            </Checkbox>

                            <Checkbox colorScheme='green' >
                                Combed Cotton
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        }
        </>
    )
}

export default Mobilesidebar
