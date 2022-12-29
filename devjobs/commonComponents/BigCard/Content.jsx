import React from "react";
import { Switch, Button } from "antd";
import Image from "next/image";
import Link from "antd/lib/typography/Link";

const Content = ({ data }) => {
    const {
        postedAt,
        contract,
        position,
        location,
        description,
        requirements,
        role,
    } = data;

    return (
        <div className="flex flex-col h-auto w-full bg-white px-8 py-12 rounded-lg">
            <header className="flex space-x-60 px-4 w-full">
                <div className="flex flex-col">
                    <div className="flex text-gray-500 font-medium">
                        <span>{postedAt}</span>
                        <ul>
                            <li className="list-disc ml-5">{contract}</li>
                        </ul>
                    </div>
                    <h1 className="font-semibold text-3xl py-2">{position}</h1>
                    <p className="font-bold text-[#5964e0]">{location}</p>
                </div>
                <Button className="bg-[#5964e0] rounded-md mr-5 h-12 mt-6 text-center align-middle w-44 text-white hover:bg-[#7d86e2] hover:text-white">
                    Apply Now
                </Button>
            </header>

            <main className="m-4 text-gray-400 text-base">
                <p>{description}</p>
                <h1 className="font-semibold text-lg my-6">Requirements</h1>
                <p>{requirements.content}</p>

                <ul className="my-4">
                    {requirements.items.map((item, id) => (
                        <li key={id} className="list-disc ml-4 my-2 indent-6">
                            {item}
                        </li>
                    ))}
                </ul>
                <h1 className="font-semibold text-lg my-6">
                    What You Will Do?
                </h1>
                <p>{role.content}</p>
                <ul className="my-4">
                    {role.items.map((item, id) => (
                        <li key={id} className=" list-none my-2">
                            <span
                                key={id}
                                className="text-[#5964e0] font-semibold mr-6"
                            >
                                {id + 1}
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default Content;
