import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "../../requestFunctions/fetchAllJobs";
import SingleJobCard from "../../commonComponents/SingleJobCard";

const Jobs = () => {
    const { data } = useQuery({
        queryKey: ["jobs"],
        queryFn: () => fetchAllJobs(),
        suspense: true,
    });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="grid grid-cols-3 h-screen justify-center items-center space-4 space-x-4 w-full ">
                {data?.map((job) => (
                    <Link href={"/jobs/" + job.id} key={job.id}>
                        <SingleJobCard
                            cardItems={{
                                logo: job.logo,
                                postedAt: job.postedAt,
                                contract: job.contract,
                                position: job.position,
                                company: job.company,
                                location: job.location,
                            }}
                        />
                    </Link>
                ))}
            </div>
        </Suspense>
    );
};

export default Jobs;
