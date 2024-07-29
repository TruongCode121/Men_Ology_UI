import React from "react";
import ListProduct from "./ListProduct";
import Section4Content from "./Section4Content";
import TitleBG from "../TitleBG";

const Section4Component = () => {
  return (
    <section>
      <div className="px-[0.63rem] lg:px-0 lg:container mx-auto">
        <ListProduct></ListProduct>
      </div>
      <TitleBG></TitleBG>
      <div className="px-[0.63rem] lg:px-0 lg:container mx-auto">
        <Section4Content></Section4Content>
      </div>
    </section>
  );
};

export default Section4Component;
