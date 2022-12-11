import { useGetFetchQuery } from "../../commonComponents/useGetFetchQuery";
import { useRouter } from 'next/router';
import { findDeepNestedValue } from "../../utilityFunctions/findDeepNestedValue";

const Jobs = () => {
    const allJobs = useGetFetchQuery(["jobs"])
    const router = useRouter();

    const { jobs: id } = router?.query;
    const selectedJob = findDeepNestedValue(allJobs ?? [], "id", Number(id));
    
    return (
        <div className="flex flex-col">
            <p>{JSON.stringify(selectedJob)}</p>
        </div>
    );
};

export default Jobs;
