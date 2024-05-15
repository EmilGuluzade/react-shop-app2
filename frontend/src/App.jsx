import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainContext from "./context/context";
import ROUTES from "./routes/routes";
import axios from "axios";
import { BASE_URL } from "./config/config";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const router = createBrowserRouter(ROUTES);
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState( localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setData([...res.data]);
      console.log(res.data)
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function deleteHandler(id) {
    let target = basket.find((x) => x._id == id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x._id != id)]);
    }
  }

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);

    if (!basketItem) {
      let target = data.find((x) => x._id == id);
    
      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count += 1;
      basketItem.totalPrice += basketItem.price;
      setBasket([...basket]);
    }
  }

  const contextData = {
    data,
    setData,
    addToBasket,
    deleteHandler,
    basket,
    setBasket,
  };
  return (
    <MainContext.Provider value={contextData}>
    <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  
    </MainContext.Provider>
  );
}

export default App;
