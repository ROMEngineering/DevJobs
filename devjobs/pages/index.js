import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/jobs");
    }, []);
    return (
        <div className="h-screen flex justify-center items-center">
            <Link href={"/jobs"}>
                {/* <div>click here to go jobs page</div> */}
            </Link>
        </div>
    );
}
