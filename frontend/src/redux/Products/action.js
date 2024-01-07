import axios from "axios";
import { GETREQ, GETSINGLEPROD, PATCHSINGLEPROD, DELETESINGLEPROD, POSTREQ, NAVVALUE, FILTERVALUE, BRANDVALUE, FILTERPROUCTS } from "./action.Type";
const filterProducts = (brand, category) => ({
  type: FILTERPROUCTS,
  payload: { brand, category }
})
const getnavValue = (value) => ({
  type: NAVVALUE,
  payload: value
})
const getFilterValue = (value) => ({
  type: FILTERVALUE,
  payload: value
})
const getfilterValue = (type, value) => ({
  type: BRANDVALUE,
  payload: { type, value }
})

const getProductData = (category, type, value) => async (dispatch) => {
  const response = await axios.get(`https://fashionflore.onrender.com/product/${category}`);
  const res = await response.data;
if(type==="brand"){
  let filterData=res.filter((item)=>item.brand===value)
  dispatch({ type: GETREQ, payload: filterData });
}else{
  
  dispatch({ type: GETREQ, payload: res });
}


};
const getSingleData = (category, id) => async (dispatch) => {
  const response = await axios.get(
    `https://fashionflore.onrender.com/product/${category}/${id}`
  );
  const res = await response.data;
  // console.log("redux",res)
  dispatch({ type: GETSINGLEPROD, payload: res });
};

const postProductData = (productData) => async (dispatch) => {
  const response = await axios.post(`https://fashionflore.onrender.com/product/add`, productData);
  const res = await response.data;
  dispatch({ type: POSTREQ, payload: res });
};

const patchSingleData = (id, updatedData) => async (dispatch) => {
  const response = await axios.patch(`https://fashionflore.onrender.com/product/update/${id}`, updatedData);
  const res = await response.data;
  dispatch({ type: PATCHSINGLEPROD, payload: res });
};

const deleteSingleData = (id) => async (dispatch) => {
  const response = await axios.delete(`https://fashionflore.onrender.com/product/delete/${id}`);
  const res = await response.data;
  dispatch({ type: DELETESINGLEPROD, payload: res });
};

const handleSortByRedux = (sortedProduct) => (dispatch) => {
  // console.log("sortedRedux",sortedProduct)
  dispatch({ type: GETREQ, payload: sortedProduct });

};

export {
  getnavValue,
  getFilterValue,
  filterProducts,
  getfilterValue,
  getProductData,
  getSingleData,
  patchSingleData,
  deleteSingleData,
  postProductData,
  handleSortByRedux,
};
