import React from "react";
import { Button } from "antd";
import Image from "next/image";
import Link from "antd/lib/typography/Link";

const ContentHeader = ({ data }) => {
    const { company, website, logo } = data;
    return (
        <content className="flex w-full bg-white rounded-lg rounded-tl-none ">
            <Image
                className="flex items-center bg-red-600 p-3 w-40 h-40 rounded-bl-lg"
                src={logo}
                alt={company}
                width={50}
                height={50}
            />

            <div className="flex justify-items items-center">
                <div className="flex justify-between space-x-44 mx-12">
                    <div className="flex flex-col space-y-4">
                        <p className="font-bold text-xl">{company}</p>
                        <p className="text-gray-400">{website.slice(8)}</p>
                    </div>
                    <div className="pl-20">
                        <Button className="bg-indigo-50 rounded-md h-12 text-center w-full text-[#5964e0] font-semibold hover:bg-[#7d86e2] hover:text-white">
                            <Link href={website}>Company Site</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </content>
    );
};

export default ContentHeader;
