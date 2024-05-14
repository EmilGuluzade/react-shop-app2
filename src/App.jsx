import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainContext from "./context/context";
import ROUTES from "./routes/routes";
import axios from "axios";

function App() {
  const router = createBrowserRouter(ROUTES);
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState( localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setData([...res.data]);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function deleteHandler(id) {
    let target = basket.find((x) => x.id == id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x.id != id)]);
    }
  }

  function addToBasket(id) {
    let basketItem = basket.find((x) => x.id == id);

    if (!basketItem) {
      let target = data.find((x) => x.id == id);
    
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
      <RouterProvider router={router}></RouterProvider>
    </MainContext.Provider>
  );
}

export default App;
