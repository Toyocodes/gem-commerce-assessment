import React from "react";
import NutritionSection from "./NutritionSection";
import ImproveGutSection from "./ImproveGutSection";
import WhatMakeUsSection from "./WhatMakeUsSection";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <WhatMakeUsSection />
      <NutritionSection />
      <ImproveGutSection />
    </div>
  );
};

export default Home;
