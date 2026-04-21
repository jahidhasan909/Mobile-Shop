import { Card } from "@heroui/react";


const ShopByCategory = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-xl font-bold py-5">Shop by Categories</h1>



            <div className="flex gap-2">
                <Card className="w-[200px] rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                    <Card.Content>
                        <img src="https://i.ibb.co.com/20FqdTWK/Apple-i-Phone-17-Pro-Max-Design-PNG-thumb-removebg-preview.png" alt="" />
                    </Card.Content>
                    <Card.Header>
                        <Card.Title className="text-center font-bold">Phones</Card.Title>
                    </Card.Header>
                </Card>


                <Card className="w-[200px] rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                    <Card.Content>
                        <img src="https://i.ibb.co.com/TXVkqLN/Apple-i-Pad-Pro-M5-13-inch-price-in-Bangladesh-MC-Solution-BD-removebg-preview.png" alt="" />
                    </Card.Content>
                    <Card.Header>
                        <Card.Title className="text-center">Tablet</Card.Title>
                    </Card.Header>
                </Card>

                <Card className="w-[200px] rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                    <Card.Content>
                        <img src="https://i.ibb.co.com/gXmxG8L/Mac-Book-Pro-14-inch-M5-254f8453-0647-4bb9-8012-f7b2f788e670-removebg-preview.png" alt="" />
                    </Card.Content>
                    <Card.Header>
                        <Card.Title className="text-center font-bold">Laptop</Card.Title>
                    </Card.Header>
                </Card>

                <Card className="w-[200px] rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                    <Card.Content>
                        <img src="https://i.ibb.co.com/BHbGh9bJ/Apple-Watch-Series-10-Aluminum-Silver-7765-removebg-preview.png" alt="" />
                    </Card.Content>
                    <Card.Header>
                        <Card.Title className="text-center font-bold">Smart Watch</Card.Title>
                    </Card.Header>
                </Card>

                <Card className="w-[200px] rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                    <Card.Content>
                        <img src="https://i.ibb.co.com/JwWRr09p/Apple-Air-Pods-3rd-Generation-Price-in-bangladesh-1-removebg-preview.png" alt="" />
                    </Card.Content>
                    <Card.Header>
                        <Card.Title className="text-center font-bold">Airpods</Card.Title>
                    </Card.Header>
                </Card>

                <Card className="w-[200px] rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                    <Card.Content>
                        <img src="https://i.ibb.co.com/wFDTC2jt/ANKER-NANO-II-45-W-A2664321-Front.webp" alt="" />
                    </Card.Content>
                    <Card.Header>
                        <Card.Title className="text-center font-bold">AdapTers</Card.Title>
                    </Card.Header>
                </Card>

                <Card className="w-[200px] rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                    <Card.Content>
                        <img src="https://i.ibb.co.com/B2s1r4HB/Apple-TV-4-K-hero-221018-big-jpg-large-removebg-preview.png" alt="" />
                    </Card.Content>
                    <Card.Header>
                        <Card.Title className="text-center font-bold">Smart Tv</Card.Title>
                    </Card.Header>
                </Card>

            </div>


            <div className="my-10">
                <img className=" rounded-sm" src="https://i.ibb.co.com/xtz2vqC2/why-dazzle-care.webp" alt="" />
            </div>

        </div>
    );
};

export default ShopByCategory;