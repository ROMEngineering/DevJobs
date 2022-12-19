import React from "react";
import { Switch } from "antd";
import img from "../public/assets/desktop/logo.svg";
import Image from "next/image";
import Link from "antd/lib/typography/Link";

const ContentHeader = ({ data }) => {
    const { company, website, logoBackground } = data;
    const imageClass =
        "flex items-center w-full bg-slate-400 " + "bg:" + logoBackground;
    return data ? (
        <div className="flex w-full">
            <div className={imageClass}>
                {/* <Image src={logo} alt={company} width={50} height={50} /> */}
            </div>
            <div className="flex justify-items-stretch">
                <div className="flex flex-col">
                    <p>{company}</p>
                    <p>{website}</p>
                </div>
                <Link href={website}>Company Site</Link>
            </div>

            {/* <p>{data.position}</p> */}
        </div>
    ) : (
        <div className="text-xl text-red-50 ">loading..</div>
    );
};

export default ContentHeader;
