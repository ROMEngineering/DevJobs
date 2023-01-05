import React from "react";
import { Input, Button } from "antd";
import Image from "next/image";
import { Checkbox } from "antd";
const SearchInputs = ({
    handleTitleChange,
    handleLocationChange,
    handleContractTypeChange,
    handleFilter,
}) => {
    return (
        <div className="font-sans px-60 h-14 w-full -mt-8 rounded-md flex items-center justify-center">
            <Input
                onChange={handleTitleChange}
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
                className="h-full gap-1 rounded-md"
            />
            <Input
                onChange={handleLocationChange}
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
                className="h-full gap-1 rounded-md"
            />
            <Checkbox
                onChange={handleContractTypeChange}
                className="rounded-md gap-1 h-full flex: 1 1 auto items-center pl-6 pr-6 w-2/3 bg-white border border-slate-300"
            >
                Full Time Only
            </Checkbox>
            <Button
                onClick={handleFilter}
                className="rounded-md bg-[#5964e0] h-full text-center w-52 text-white hover:bg-[#7d86e2] hover:text-white border border-[#5964e0] hover:border-white"
            >
                Search
            </Button>
        </div>
    );
};

export default SearchInputs;
