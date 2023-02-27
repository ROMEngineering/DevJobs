import React from "react";
import { Card } from "antd";

const SingleJobCard = ({
    logo,
    logoBackground,
    postedAt,
    contract,
    position,
    company,
    location,
}) => {
    return (
        <div className="site-card-border-less-wrapper h-full">
            {/* 
                Ant design card component has its own style guide.
                To be able to manipulate any type of ant component please visit:
                styles/globals.css
             */}
            <Card
                bordered={true}
                className="max-w-full max-h-[200px] h-full p-0 rounded-md dark:bg-slate-400"
                bodyStyle={{ margin: 0, height: "100%", padding: 20 }}
            >
                <div
                    className="logo m-0 h-8 my-2 -mt-8 w-8 rounded flex items-center justify-center"
                    style={{ backgroundColor: `${logoBackground}` }}
                >
                    <img src={logo} alt="logo" className="w-fit h-fit" />
                </div>
                <div className="card_header flex gap-2 m-0 mt-6 mb-1">
                    <p className="posted_time text-slate-500">{postedAt}</p>
                    <span className="text-slate-500">&bull;</span>
                    <p className="contract text-slate-500">{contract}</p>
                </div>
                <h3 className="m-0 font-semibold mb-1">{position}</h3>
                <p className="m-0 text-slate-500">{company}</p>
                <p className="m-0 text-[#5964e0] font-semibold mt-6">
                    {location}
                </p>
            </Card>
        </div>
    );
};

export default SingleJobCard;
