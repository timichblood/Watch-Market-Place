import React from "react";
import { watchesApi } from "../helpers/const";

export const ClientContext = React.createContext();
const reducer = (state, action) => {
  if (action.type === "GET_WATCHES") {
    return {
      ...state,
      watches: action.payload,
    };
  }
  return state;
};

function ClientProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    watches: [],
  });

  const [searchWord, setSearchWord] = React.useState("");
  const [filterByPrice, setFilterByPrice] = React.useState([0, 999999]);

  const limit = 3;
  const [pagesCount, setPagesCount] = React.useState(1);
  const [currerntPage, setCurruntPage] = React.useState(1);
  // ! Math.ceil(1.2) - 2
  // ! Math.floor(1.2) - 1
  // ! Math.round(1.2) - 1

  const getWatches = () => {
    fetch(
      `${watchesApi}?q=${searchWord}&price_gte=${filterByPrice[0]}&price_lte=${filterByPrice[1]}&_limit=${limit}&_page=${currerntPage}`
    )
      .then((res) => {
        let count = Math.ceil(res.headers.get("X-Total-Count") / limit);
        setPagesCount(count);
        return res.json();
      })
      .then((data) => {
        let action = {
          type: "GET_WATCHES",
          payload: data,
        };
        dispatch(action);
      });
  };
  // ! Busket functional
  const addWatchToBusket = (watch) => {
    let busket = JSON.parse(localStorage.getItem("basket"));
    if (!busket) {
      busket = {
        totalPrice: 0,
        products: [],
      };
    }
    let watchToBusket = {
      ...watch,
      count: 1,
      subPrice: watch.price,
    };
    busket.products.push(watchToBusket);
    busket.totalPrice = busket.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    console.log(busket);
  };

  const data = {
    watches: state.watches,
    searchWord,
    filterByPrice,
    pagesCount,
    currerntPage,
    getWatches,
    setSearchWord,
    setFilterByPrice,
    setCurruntPage,
    addWatchToBusket,
  };

  return (
    <ClientContext.Provider value={data}>{children}</ClientContext.Provider>
  );
}

export default ClientProvider;
