import React, { lazy, Suspense, useState, useEffect, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "../../requestFunctions/fetchAllJobs";
import Loading from "../../commonComponents/Loading";
import Layout from "../../commonComponents/Layout";
import GeneralHeader from "../../commonComponents/GeneralHeader";
import SearchInputs from "../../commonComponents/SearchInputs";

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
                    <div className="font-fans grid grid-cols-3 grid-template-rows-auto gap-4 w-full px-60 py-8 h-auto min-h-screen mt-12">
                        <AllJobCards allData={filteredData} />
                    </div>
                </>
            </Suspense>
        </Layout>
    );
};

export default Jobs;
