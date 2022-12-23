import React from "react";
import { useFetchCachedQuery } from "../../utilityHooks/useFetchCachedQuery";
import { useRouter } from "next/router";
import { findDeepNestedValue } from "../../utilityFunctions/findDeepNestedValue";
import GeneralHeader from "../../commonComponents/GeneralHeader";
import Layout from "../../commonComponents/Layout";
import ContentHeader from "../../commonComponents/BigCard/ContentHeader";
import Footer from "../../commonComponents/BigCard/Footer";
import Content from "../../commonComponents/BigCard/Content";

const Jobs = () => {
    const allJobs = useFetchCachedQuery(["jobs"]);
    const router = useRouter();

    const { jobs: id } = router?.query;
    const selectedJob = findDeepNestedValue(allJobs ?? [], "id", Number(id));

    return (
        <Layout>
            <GeneralHeader />

            <div className="mx-auto -mt-16 w-1/2 space-y-12 mb-12">
                <ContentHeader data={selectedJob} />
                <Content data={selectedJob} />
            </div>

            <Footer data={selectedJob} />
        </Layout>
    );
};

export default Jobs;
