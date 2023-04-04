import React from "react";
import './Content.css'

import { Routes, Route } from "react-router-dom"; // Importe esses arquivos

import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from "../../views/examples/Params";

const Content = props => (

    <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
    <Route path="/param" element={<Param />} />
      <Route path="/about" element={<About />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
    {/* --------------------------------------------------- */}
  </main>

)

export default Content