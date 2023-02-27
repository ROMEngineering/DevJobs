import Link from "next/link";

export default function Home() {
    return (
        <div className="dark:bg-black dark:text-white h-screen  flex justify-center items-center">
            <Link legacyBehavior href={"/jobs"}>
                <div>click here to go jobs page</div>
            </Link>
        </div>
    );
}
