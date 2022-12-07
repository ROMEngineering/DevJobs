import { Card } from "antd";
import Link from "next/link";
import { Counter } from "./counter";
const { Meta } = Card;

export default function Home() {
    return (
        <div className="h-screen flex justify-center items-center">
            {/* <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={
                    <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                }
            >
                <Meta
                    title="Antd and Tailwind Configuration test"
                    description="www.babalar.com"
                />
            </Card> */}
            <Link href={"/jobs"}>
                <div>click here to go jobs page</div>
            </Link>
        </div>
    );
}
