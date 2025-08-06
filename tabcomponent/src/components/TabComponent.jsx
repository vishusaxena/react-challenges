import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveComponent = tabs[activeTab].component;

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="flex mx-28 mt-16 ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="border border-black p-2 cursor-pointer"
            onClick={() => handleTabChange(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="border border-black flex mx-28 h-[300px] w-[600px] justify-center items-center">
        <ActiveComponent />
      </div>
      <div className="flex mx-28 mt-5 justify-end w-[600px] ">
        <button className="border border-black p-2  "> Submit</button>
      </div>
    </>
  );
};

export default TabComponent;
