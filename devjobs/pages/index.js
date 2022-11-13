import { Card } from 'antd';
const { Meta } = Card;




export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
     <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Antd and Tailwind Configuration test" description="www.babalar.com" />
  </Card>
  
    </div>
  )
}
