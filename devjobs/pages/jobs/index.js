import React from "react";
import Link from "next/link";
import data from "../../dataFolder/data.json";

export const getStaticProps = async () => {
    // const res = await fetch("data.json");
    // const data = await res.json();

    return {
        props: { ninja: data },
    };
};
console.log(data);

const Jobs = ({ jobs }) => {
    return (
        <div className="grid grid-cols-3 h-screen justify-center items-center space-4 space-x-4 w-full ">
            {data.map((job) => (
                <Link href={"/jobs/" + job.id} key={job.id}>
                    <div className="border border-gray bg-gray-400 w-full p-12">
                        <h3>Job position: {job.position}</h3>
                        <h3>Job location: {job.location}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Jobs;
