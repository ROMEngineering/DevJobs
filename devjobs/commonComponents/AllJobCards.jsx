import Link from "next/link";
import { lazy } from "react";

const SingleJobCard = lazy(() =>
    import("./SingleJobCard")
);

const AllJobCards = ({allData}) => {
 
    return (allData || []).map((individualJobObject) => {

        const { id } = individualJobObject;
        
        return (
            <Link href={"/jobs/" + id} key={id}>
                <SingleJobCard {...individualJobObject} />
            </Link>
        );
        
    });

}

export default AllJobCards;
