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
                        <div className=" job-card border border-gray bg-gray-400 w-full p-12">
                            <div className="logo">
                            <img src={job.logo} alt="logo" />
                            </div>
                            <div className="card_header flex gap-2">
                                <p className="posted_time">{job.postedAt}</p>
                                <p className="contract">{job.contract}</p>
                            </div>
                             <h3>{job.position}</h3>
                             <p>{job.company}</p>
                             <p>{job.location}</p>
                            {/* {JSON.stringify({ job }, 2, null)} */}
                        </div>
                    </Link>
                ))}
            </div>
        </Suspense>
    );
};

export default Jobs;
