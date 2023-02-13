import Layout from "./Components/Layout";
import Home from "./Page/Home";
import About from "./Page/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bicycles from "./Page/Bicycles";

import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [product, setProduct] = useState([]);
  const productRef = collection(db, "bicycles");

  useEffect(() => {
    const getProduct = async () => {
      const data = await getDocs(productRef);
      setProduct(data.docs.map((item) => ({ ...item.data(), id: item.id })));
    };

    getProduct();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="bicycles" element={<Bicycles product={product} />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
