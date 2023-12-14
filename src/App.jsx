import React from "react";
import OtherItems from "./Components/OtherItems/OtherItems";
import Uniques from "./Components/Uniques/Uniques";
import Header from "./Components/Header/Header";
import Tab from "./Components/Tab/Tab";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import Category from "./Components/Category/Category";
import Sellers from "./Components/Sellers/Sellers";
import Communities from "./Components/Communities/Communities";

import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <Category />
      {/* <Communities /> */}
      {/* <Sellers />
      <Uniques />
      <OtherItems />
      <Subscribe />
      <Tab />
      <Footer /> */}
    </div>
  );
};

export default App;
