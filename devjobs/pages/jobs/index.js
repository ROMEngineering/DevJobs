import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "../../requestFunctions/fetchAllJobs";

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
                        <div className="border border-gray bg-gray-400 w-full p-12">
                            <h3>Job position: {job.position}</h3>
                            <h3>Job location: {job.location}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </Suspense>
    );
};

export default Jobs;
