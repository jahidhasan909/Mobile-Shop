import { Card } from "@heroui/react";
import Link from "next/link";


const ShopByCategory = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-xl font-bold py-5">Shop by Categories</h1>



            <div className="grid grid-cols-5 gap-2 mx-auto ">
                <Link href='/categoreyby/phone'>
                    <Card className=" rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                        <Card.Content>
                            <img className="h-[200px] object-contain" src="https://i.ibb.co.com/20FqdTWK/Apple-i-Phone-17-Pro-Max-Design-PNG-thumb-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center font-bold">Phones</Card.Title>
                        </Card.Header>
                    </Card>

                </Link>

                <Link href='/categoreyby/tablet'>
                    <Card className=" rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                        <Card.Content>
                            <img className="h-[200px] object-contain" src="https://i.ibb.co.com/TXVkqLN/Apple-i-Pad-Pro-M5-13-inch-price-in-Bangladesh-MC-Solution-BD-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center">Tablet</Card.Title>
                        </Card.Header>
                    </Card>
                </Link>



                <Link href='/categoreyby/laptop'>
                    <Card className="rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                        <Card.Content>
                            <img className="h-[200px] object-contain" src="https://i.ibb.co.com/gXmxG8L/Mac-Book-Pro-14-inch-M5-254f8453-0647-4bb9-8012-f7b2f788e670-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center font-bold">Laptop</Card.Title>
                        </Card.Header>
                    </Card>

                </Link>


                <Link href='/categoreyby/watch'>
                    <Card className="rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                        <Card.Content>
                            <img className="h-[200px] object-contain" src="https://i.ibb.co.com/BHbGh9bJ/Apple-Watch-Series-10-Aluminum-Silver-7765-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center font-bold">Smart Watch</Card.Title>
                        </Card.Header>
                    </Card>
                </Link>

                <Link href='/categoreyby/gadget'>
                    <Card className="rounded hover:cursor-pointer hover:shadow-md hover:translate-0.5 hover:shadow-gray-500" variant="tertiary">
                        <Card.Content>
                            <img className="h-[200px] object-contain" src="https://i.ibb.co.com/KpjD2dtN/stock-vector-gadget-store-logo-shopping-bag-vector-illustration-1442849471-removebg-preview-Photoroo.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center font-bold">Gadget</Card.Title>
                        </Card.Header>
                    </Card>
                </Link>



            </div>


            <div className="my-10">
                <img className=" rounded-sm" src="https://i.ibb.co.com/xtz2vqC2/why-dazzle-care.webp" alt="" />
            </div>

        </div>
    );
};

export default ShopByCategory;