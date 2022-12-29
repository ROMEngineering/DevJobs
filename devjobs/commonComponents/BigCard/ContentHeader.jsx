import React from "react";
import { Button } from "antd";
import Image from "next/image";
import Link from "antd/lib/typography/Link";

const ContentHeader = ({ data }) => {
    const { company, website, logo, logoBackground } = data;
    return (
        <div className="flex w-full bg-white rounded-lg rounded-tl-none ">
            <div
                className="w-40 h-40 flex justify-center items-center"
                style={{ backgroundColor: `${logoBackground}` }}
            >
                <Image
                    className={`rounded-bl-lg p-3`}
                    src={logo}
                    alt={"company"}
                    width={200}
                    height={200}
                />
            </div>

            <div className="flex justify-items items-center">
                <div className="flex justify-between space-x-36 mx-12">
                    <div className="flex flex-col space-y-4">
                        <p className="font-bold text-xl">{company}</p>
                        <p className="text-gray-400">{website.slice(8)}</p>
                    </div>
                    <div className="pl-24">
                        <Button className="bg-slate-300 rounded-md h-12 text-center w-44 text-[#5964e0] font-semibold hover:bg-[#7d86e2] hover:text-white">
                            <Link href={website}>Company Site</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentHeader;
