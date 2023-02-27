import { Button } from "antd";
import Link from "next/link";
import { lazy, useState } from "react";

const SingleJobCard = lazy(() => import("./SingleJobCard"));

 
const AllJobCards = ({ allData, visible}) => {
    
    return (allData || []).slice(0, visible).map((individualJobObject) => {
        const { id } = individualJobObject;

        return (
            
            
            <Link
                href={"/jobs/" + id}
                key={id}
                className="  max-w-full max-h-full mb-6 drop-shadow-lg hover:shadow-xl hover:shadow-grey-500 hover:transition-shadow hover:transition-ease-in-out hover:duration-700"
            >
                <SingleJobCard {...individualJobObject} />
               
            </Link>
      
            
            
        );

    });
};

export default AllJobCards;
