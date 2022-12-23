import React from "react";
import { Button } from "antd";

const Footer = ({ data }) => {
    const { position, company } = data;

    return (
        <content className="flex w-full bg-white rounded-lg rounded-tl-none justify-center items-center align-middle pl-6">
            <div className="flex">
                <div className="flex flex-col justify-center items-center my-4">
                    <h1 className="font-semibold text-xl py-2">{position}</h1>
                    <p className="font-semibold text-gray-400 text-lg">
                        {company}
                    </p>
                </div>
                <div className="pl-60">
                    <Button className="bg-[#5964e0] rounded-md mr-5 h-12 mt-6 text-center align-middle w-44 text-white hover:bg-[#7d86e2] hover:text-white">
                        Apply Now
                    </Button>
                </div>
            </div>
        </content>
    );
};

export default Footer;
