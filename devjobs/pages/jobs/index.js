import React, { lazy, Suspense, useState, useEffect, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "../../requestFunctions/fetchAllJobs";
import Loading from "../../commonComponents/Loading";
import Layout from "../../commonComponents/Layout";
import GeneralHeader from "../../commonComponents/GeneralHeader";
import SearchInputs from "../../commonComponents/SearchInputs";
import { Button } from "antd";

const AllJobCards = lazy(() => import("../../commonComponents/AllJobCards"));

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TITLE":
            return { ...state, jobTitle: action.value };

        case "UPDATE_LOCATION":
            return { ...state, jobLocation: action.value };

        case "UPDATE_CONTRACT_TYPE":
            return { ...state, contractType: action.value ? "Full Time" : "" };

        default:
            return state;
    }
};

const Jobs = () => {
    const { data } = useQuery({
        queryKey: ["jobs"],
        queryFn: () => fetchAllJobs(),
        suspense: true,
    });

    const [filteredData, setFilteredData] = useState(data);
    const [visible, setVisible] = useState(9);
    const [state, dispatch] = useReducer(reducer, {
        jobTitle: "",
        jobLocation: "",
        contractType: "",
    });

    const handleTitleChange = (e) => {
        dispatch({ type: "UPDATE_TITLE", value: e.target.value.toLowerCase() });
    };
    const handleLocationChange = (e) => {
        dispatch({
            type: "UPDATE_LOCATION",
            value: e.target.value.toLowerCase(),
        });
    };
    const handleContractTypeChange = (e) => {
        dispatch({ type: "UPDATE_CONTRACT_TYPE", value: e.target.checked });
    };

    const handleFilter = () => {
        const filteredJobs = data?.filter(
            (job) =>
                job.position.toLowerCase().includes(state.jobTitle) &&
                job.location.toLowerCase().includes(state.jobLocation) &&
                (state.contractType ? job.contract === "Full Time" : true)
        );
        setFilteredData(filteredJobs);
    };

    const filteringEventHandlers = {
        handleTitleChange,
        handleLocationChange,
        handleContractTypeChange,
        handleFilter,
    };

    return (
        <Layout>
            <Suspense fallback={<Loading />}>
                <>
                    <GeneralHeader />
                    <SearchInputs {...filteringEventHandlers} />
                    <div className=" font-fans grid grid-cols-3 grid-template-rows-auto gap-4 w-full px-60 py-8 h-auto min-h-screen mt-12">
                        <AllJobCards allData={filteredData} visible={visible} />
                    </div>
                    <div className=" flex w-full justify-center mb-5 p-2">
                        <button
                            className="rounded-md bg-[#5964e0] h-8 text-center w-52 text-white hover:bg-[#7d86e2] hover:text-white border border-[#5964e0] hover:border-white"
                            onClick={() => {
                                setVisible((prev) => prev + 6);
                            }}
                        >
                            Load More
                        </button>
                    </div>
                </>
            </Suspense>
        </Layout>
    );
};

export default Jobs;
