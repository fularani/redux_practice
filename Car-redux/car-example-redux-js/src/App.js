import React from 'react';
import Layout from "./components/shared/Layout";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import AllCars from "./pages/AllCars";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <Layout>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllCars />}></Route>
      <Route path="/add-car" element={<AddCar />}></Route>
      <Route path="/edit-car/:id" element={<EditCar />}></Route>
    </Routes>
    </BrowserRouter>    
  </Layout>
    </div>
  );
}

export default App;
