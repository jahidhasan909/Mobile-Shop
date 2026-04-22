import { CircleFill, Firewall, Flame } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";


const Tranddingproduct = () => {
    return (
        <div className="container mx-auto my-15">
            <h1 className="text-xl font-bold py-4">Trending Products</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <Card className=" rounded bg-white" variant="tertiary">
                        <Card.Content>
                            <img src="https://i.ibb.co.com/Rk4bmbfZ/Apple-Watch-SE-3-Price-in-Bangladesh-Midnight-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center">Apple Watch SE 3</Card.Title>
                            <Card.Footer className="text-center font-semibold mx-auto">
                                ৳ 34,490
                            </Card.Footer>
                            <Button className='w-full rounded-sm bg-black text-white mt-2'>Add to Cart !</Button>
                        </Card.Header>
                    </Card>

                    <Card className=" rounded bg-white" variant="tertiary">
                        <Card.Content>
                            <img src="https://i.ibb.co.com/Y7dbXW6y/Galaxy-S26-Ultra-black-4396-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center">Galaxy S26 Ultra 5G</Card.Title>
                            <Card.Footer className="text-center font-semibold mx-auto">
                                ৳133,000
                            </Card.Footer>
                            <Button className='w-full rounded-sm bg-black text-white mt-2'>Add to Cart !</Button>
                        </Card.Header>
                    </Card>

                    <Card className=" rounded bg-white" variant="tertiary">
                        <Card.Content>
                            <img src="https://i.ibb.co.com/50k5rcD/Pixel-10-Pro-XLgds-7678-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center">Pixel 10 Pro</Card.Title>
                            <Card.Footer className="text-center font-semibold mx-auto">
                                ৳98,000
                            </Card.Footer>
                            <Button className='w-full rounded-sm bg-black text-white mt-2'>Add to Cart !</Button>
                        </Card.Header>
                    </Card>

                    <Card className=" rounded bg-white" variant="tertiary">
                        <Card.Content>
                            <img src="https://i.ibb.co.com/nNLCkW1y/xiaomi-15t-pro-mocha-gold-official-image-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center">Xiaomi 15T Pro</Card.Title>
                            <Card.Footer className="text-center font-semibold mx-auto">
                                ৳82,000
                            </Card.Footer>
                            <Button className='w-full rounded-sm bg-black text-white mt-2'>Add to Cart !</Button>
                        </Card.Header>
                    </Card>

                </div>




                <div className="bg-white shadow-sm rounded-sm mx-auto text-center space-y-1 p-3">
                    <div className="flex justify-end animate-pulse">
                        <Chip className="rounded-sm p-2 bg-black/90 text-white">
                            <Chip.Label className="flex items-center gap-1"><Flame /> Hot Product</Chip.Label>
                        </Chip>
                    </div>
                    <img className="h-[400px]" src="https://i.ibb.co.com/20FqdTWK/Apple-i-Phone-17-Pro-Max-Design-PNG-thumb-removebg-preview.png" alt="" />
                    <p className="text-[1.10rem] mt-7">iPhone 17 Pro Max</p>
                    <h1 className="font-bold text-xl mt-4">৳1,69,990</h1>
                    <Button className='w-[290px] rounded-sm bg-black text-white mt-5 animate-bounce'>Add to Cart !</Button>
                </div>




                <div className="grid grid-cols-2 gap-4">
                    <Card className=" rounded bg-white" variant="tertiary">
                        <Card.Content>
                            <img src="https://i.ibb.co.com/gXmxG8L/Mac-Book-Pro-14-inch-M5-254f8453-0647-4bb9-8012-f7b2f788e670-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center">MacBook Pro M5</Card.Title>
                            <Card.Footer className="text-center font-semibold mx-auto">
                                ৳141,000
                            </Card.Footer>
                            <Button className='w-full rounded-sm bg-black text-white mt-2'>Add to Cart !</Button>
                        </Card.Header>
                    </Card>

                    <Card className=" rounded bg-white" variant="tertiary">
                        <Card.Content>
                            <img src="https://i.ibb.co.com/prQ6xMZH/JCs769lmk-Sf-NQmt-Lp-JArmdfth-UYv2-WHgdhre-N2j8-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center">Motorola Edge 50 Fusion 5G</Card.Title>
                            <Card.Footer className="text-center font-semibold mx-auto">
                                ৳26,999
                            </Card.Footer>
                            <Button className='w-full rounded-sm bg-black text-white mt-2'>Add to Cart !</Button>
                        </Card.Header>
                    </Card>

                    <Card className="rounded bg-white" variant="tertiary">
                        <Card.Content>
                            <img src="https://i.ibb.co.com/5gzWs6r4/Huawei-Mate-XTs-Ultimate-price-in-bangladesh-Black-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center">Huawei Mate XTs Ultimate</Card.Title>
                            <Card.Footer className="text-center font-semibold mx-auto">
                                ৳3,29,990
                            </Card.Footer>
                            <Button className='w-full rounded-sm bg-black text-white mt-2'>Add to Cart !</Button>
                        </Card.Header>

                    </Card>

                    <Card className="rounded bg-white" variant="tertiary">
                        <Card.Content>
                            <img src="https://i.ibb.co.com/ym2Fp0xN/nothing-phone-3-white-official-image-1-removebg-preview.png" alt="" />
                        </Card.Content>
                        <Card.Header>
                            <Card.Title className="text-center">Nothing Phone 3</Card.Title>
                            <Card.Footer className="text-center font-semibold mx-auto">
                                ৳74,990
                            </Card.Footer>
                            <Button className='w-full rounded-sm bg-black text-white mt-2'>Add to Cart !</Button>
                        </Card.Header>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Tranddingproduct;