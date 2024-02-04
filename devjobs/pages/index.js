import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen flex justify-center items-center">
            <Link href={"/jobs"}>
                <div>click here to go jobs page</div>
            </Link>
        </div>
    );
}
