import React, { lazy, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "../../requestFunctions/fetchAllJobs";
import Loading from "../../commonComponents/Loading";
import Layout from "../../commonComponents/Layout";
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
        <Layout>
            <Suspense fallback={<Loading />}>
                <>
                    <GeneralHeader />
                    <SearchInputs />
                    <div className="font-fans grid grid-cols-3 grid-template-rows-auto gap-4 w-full px-60 py-8 h-auto min-h-screen mt-12">
                        <AllJobCards allData={data} />
                    </div>
                </>
            </Suspense>
        </Layout>
    );
};

export default Jobs;
