import React from "react";
import { useFetchCachedQuery } from "../../utilityHooks/useFetchCachedQuery";
import { useRouter } from "next/router";
import { findDeepNestedValue } from "../../utilityFunctions/findDeepNestedValue";
import GeneralHeader from "../../commonComponents/GeneralHeader";
import Layout from "../../commonComponents/Layout";
import ContentHeader from "../../commonComponents/ContentHeader";

const Jobs = () => {
    const allJobs = useFetchCachedQuery(["jobs"]);
    const router = useRouter();

    const { jobs: id } = router?.query;
    const selectedJob = findDeepNestedValue(allJobs ?? [], "id", Number(id));

    console.log(selectedJob && selectedJob);

    return (
        <Layout>
            <GeneralHeader />
            <section className="flex w-1/2 mx-auto border border-red-500 h-auto">
                <ContentHeader
                    data={selectedJob}
                    // logo={selectedJob.logo}
                    // company={selectedJob.company}
                />
            </section>

            <div className="flex flex-col">
                <p>{JSON.stringify(selectedJob)}</p>
            </div>

            <footer className="text-center">Footer</footer>
        </Layout>
    );
};

export default Jobs;
