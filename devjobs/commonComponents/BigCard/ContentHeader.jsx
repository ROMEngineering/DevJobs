import React from "react";
import { Button } from "antd";
import Image from "next/image";
import Link from "antd/lib/typography/Link";

const ContentHeader = ({ data }) => {
    const { company, website, logo, logoBackground } = data;
    return (
        <div className="flex w-full bg-white rounded-lg rounded-tl-none h-auto">
            <Image
                className="flex items-center bg-red-600 p-3 w-40 h-32 rounded-bl-lg"
                src={logo}
                alt={company}
                width={50}
                height={50}
            />

            <div className="flex justify-items items-center w-full">
                <div className="flex justify-between items-center w-full px-9">
                    <div className="flex flex-col space-y-1">
                        <p className="font-bold text-xl">{company}</p>
                        <p className="text-gray-400">{website.slice(8)}</p>
                    </div>
                    <div className="">
                        <Button className="bg-indigo-50 rounded-md h-12 text-center w-full text-[#5964e0] font-semibold hover:bg-[#7d86e2] hover:text-white">
                            <Link legacyBehavior href={website}>
                                Company Site
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentHeader;
