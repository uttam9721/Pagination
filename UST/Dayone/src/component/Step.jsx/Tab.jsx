import React from "react";
import BasicDetail from "../../pages/BasicDetail";
import Contact from "../../pages/Contact";
import Personal from "../../pages/Personal";
const Tab = () => {
    const [activeTab, setActiveTab] = React.useState("basicDetail");
  return (
    <>
      <div className="flex gap-5 justify-center items-center mt-10">
        <button
        onClick={()=>setActiveTab("basicDetail")}
        className="bg-blue-500 text-white px-4 py-2 rounded-sm border-amber-900">
          Basic Detail
        </button>
        <button
        onClick={()=>setActiveTab("contact")}
        className="bg-blue-500 text-white px-4 py-2 rounded-sm border-amber-900">
          Contact
        </button>
        <button
        onClick={()=>setActiveTab("personal")}
        className="bg-blue-500 text-white px-4 py-2 rounded-sm border-amber-900">
          Personal Information
        </button>
      </div>
      <div className="mt-10">
        {activeTab==="basicDetail" && <BasicDetail />}
        {activeTab==="contact" && <Contact />}
        {activeTab==="personal" && <Personal />}
      </div>
    </>
  );
};

export default Tab;
