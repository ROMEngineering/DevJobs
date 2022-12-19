import React from "react";
import { Input, Button } from "antd";
import Image from "next/image";
import { Checkbox } from "antd";
const SearchInputs = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className="main w-full flex justify-center">
            <div className=" bg-white h-20 w-2/3  -mt-10 rounded-md flex items-center justify-center ">
                <Input
                    size="large"
                    placeholder="Filter by title..."
                    prefix={
                        <Image
                            src="/assets/desktop/icon-search.svg"
                            alt="icon"
                            width={15}
                            height={15}
                        />
                    }
                    className="h-full gap-1"
                />
                <Input
                    size="large"
                    placeholder="Filter by location..."
                    prefix={
                        <Image
                            src="/assets/desktop/icon-location.svg"
                            alt="icon"
                            width={15}
                            height={15}
                        />
                    }
                    className="h-full gap-1"
                />
                <div className="checkbox w-96 ">
                    <Checkbox
                        onChange={onChange}
                        className="font-bold text-center flex items-center ml-2 "
                    >
                        
                        Full Time Only
                    </Checkbox>
                </div>

                <Button className="bg-[#5964e0] rounded-md mr-5 h-12 text-center w-56 text-white hover:bg-[#7d86e2] hover:text-white">
                    Search
                </Button>
            </div>
        </div>
    );
};

export default SearchInputs;
