import React, { lazy, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "../../requestFunctions/fetchAllJobs";
import Loading from "../../commonComponents/Loading";
import GeneralHeader from "../../commonComponents/GeneralHeader";
import SearchInputs from "../../commonComponents/SearchInputs";

const AllJobCards = lazy(() => import("../../commonComponents/AllJobCards"));

const Jobs = () => {
    const { data } = useQuery({
        queryKey: ["jobs"],
        queryFn: () => fetchAllJobs(),
        suspense: true,
    });

    return (
        <Suspense fallback={<Loading />}>
            <>
                <GeneralHeader />
                <SearchInputs />

                <div className="grid grid-cols-3 h-screen justify-center items-center space-4 space-x-4 w-full ">
                    <AllJobCards allData={data} />
                </div>
            </>
        </Suspense>
    );
};

export default Jobs;
