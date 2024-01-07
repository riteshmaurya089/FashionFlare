import { GETREQ, GETSINGLEPROD, PATCHSINGLEPROD, DELETESINGLEPROD, POSTREQ, NAVVALUE, FILTERVALUE, BRANDVALUE, FILTERPROUCTS } from "./action.Type";

const initialState = {
  loading: false,
  error: false,
  Products: [],
  navValue: "",
  filterValue: null,
  brandValue:{type:"",value:""},
  SingleProduct: {},
  filterProducts: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVVALUE:
      return { ...state, navValue: action.payload }
    case FILTERVALUE:
      return { ...state, filterValue: action.payload }
    case BRANDVALUE:
      return { ...state, brandValue: action.payload }
    case FILTERPROUCTS:
      const { brand, category } = action.payload;
      // const filterProducts = state.Products.filter((product) => product.brand === brand || product.title.includes(category))
      const filterProduct = category
      return {...state,filterProducts:category,brand,filterProduct}
     
    case GETREQ:
      return { ...state, Products: action.payload };
    case GETSINGLEPROD:
      return { ...state, SingleProduct: action.payload };
    case POSTREQ:
      return { ...state, Products: [...state.Products, action.payload] };
    case PATCHSINGLEPROD:
      return {
        ...state,
        SingleProduct: { ...state.SingleProduct, ...action.payload },
      };
    case DELETESINGLEPROD:
      return { ...state, SingleProduct: {} };
    default:
      return state;
  }
};


