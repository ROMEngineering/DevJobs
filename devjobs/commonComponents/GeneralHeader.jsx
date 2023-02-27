import React from "react";
import { Switch } from "antd";
import Image from "next/image";
import Moon from "/public/assets/desktop/icon-moon.svg";
import Sun from "/public/assets/desktop/icon-sun.svg";
import { useTheme } from "next-themes";

const GeneralHeader = () => {
    //using hook useTheme for dark mode state management default has set as a "light" on _app.js
    const { theme, setTheme } = useTheme();

    return (
        <div
            className={
                theme === "light"
                    ? "bg-general-header bg-no-repeat bg-center bg-cover h-36 flex items-center justify-around rounded-bl-full"
                    : "bg-slate-900 h-36 flex items-center justify-around rounded-bl-full"
            }
        >
            <div className="devjobs-logo mr-48 ">
                <p className="font-bold text-white italic text-2xl">devjobs</p>
            </div>
            <div className="toggle ml-36 flex gap-2 items-center">
                <Image src={Sun} width={20} height={20} alt={"Moon"} />
                <Switch
                    defaultChecked
                    onChange={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                    }
                    className="bg-white color-red"
                />
                <Image src={Moon} width={20} height={20} alt={"sun"} />
            </div>
        </div>
    );
};

export default GeneralHeader;
