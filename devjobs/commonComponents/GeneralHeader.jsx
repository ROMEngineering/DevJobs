import React from "react";
import { Switch } from "antd";
import Image from "next/image";
import Moon from "/public/assets/desktop/icon-moon.svg";
import Sun from "/public/assets/desktop/icon-sun.svg";

const GeneralHeader = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <div className="bg-general-header bg-no-repeat bg-center bg-cover h-36 flex items-center justify-around rounded-bl-full">
            <div className="devjobs-logo mr-48 ">
                <p className="font-bold text-white italic text-2xl">devjobs</p>
            </div>
            <div className="toggle ml-36 flex gap-2 items-center">
                <Image src={Sun} width={20} height={20} alt={"Moon"} />
                <Switch
                    defaultChecked
                    onChange={onChange}
                    className="bg-white color-red"
                />
                <Image src={Moon} width={20} height={20} alt={"sun"} />
            </div>
        </div>
    );
};

export default GeneralHeader;
