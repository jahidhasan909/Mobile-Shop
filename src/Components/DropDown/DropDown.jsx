"use client";

import { Bars } from "@gravity-ui/icons";
import { Button, Dropdown, Label, } from "@heroui/react";
import Link from "next/link";

export const DropdownManu = () => {
    return (
        <Dropdown>
            <Button isIconOnly aria-label="Menu" variant="outline" className=' rounded'>
                <Bars className="outline-none text-black" />
            </Button>
            <Dropdown.Popover className="min-w-[220px]">
                <Dropdown.Menu
                    disabledKeys={["delete-file"]}
                    onAction={(key) => console.log(`Selected: ${key}`)}
                >
                    <Dropdown.Section className=" grid grid-cols-4">

                        <Dropdown.Item>

                            <div>
                                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/apple'>
                                        <img className=" object-contain" src="https://i.ibb.co.com/k237VLTG/Apple-6176.png" alt="" />
                                    </Link>
                                </div>

                            </div>
                        </Dropdown.Item>




                        <Dropdown.Item>

                            <div>
                                <div className="bg-white h-40 pb-3 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/samsung'>
                                        <img className="pt-8 object-contain" src="https://i.ibb.co.com/My5nD7Dw/Samsung-Logo-wine.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Item>



                        <Dropdown.Item>

                            <div>
                                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/hp'>
                                        <img className="object-contain" src="https://i.ibb.co.com/Hp4QwnG6/hewlett-packard-logo-black-and-white.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Item>



                        <Dropdown.Item>

                            <div>
                                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/huawei'>
                                        <img className="object-contain" src="https://i.ibb.co.com/cc91TdZs/Logo-huawei-vector-transparent-PNG-removebg-preview.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Item>





                        <Dropdown.Item>

                            <div>
                                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/motorola'>
                                        <img className="p-3 object-contain" src="https://i.ibb.co.com/x4CgZvt/motorola-6-logo-png-transparent.png" alt="" />
                                    </Link>
                                </div>

                            </div>
                        </Dropdown.Item>



                        <Dropdown.Item>

                            <div>
                                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/pixel'>
                                        <img className="p-2 object-contain" src="https://i.ibb.co.com/9HtCq07n/png-transparent-google-pixel-smartphone-hd-logo-removebg-preview.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Item>


                        <Dropdown.Item>

                            <div>
                                <div className="bg-white h-40 p-4 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/redmi'>
                                        <img className="p-7 object-contain" src="https://i.ibb.co.com/kVCcgxVX/png-transparent-xiaomi-mi-logo-thumbnail-removebg-preview.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Item>



                        <Dropdown.Item>

                            <div>
                                <div className="bg-white p-4 h-40 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/asus'>
                                        <img
                                            src="https://i.ibb.co.com/LdxWXQwD/asus-6630-logo-png-transparent-removebg-preview.png"
                                            alt=""
                                            className=" object-contain"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Item>



                        <Dropdown.Item>

                            <div>

                                <div className="bg-white p-4 h-40 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/walton'>
                                        <img
                                            src="https://i.ibb.co.com/1tgVcbqN/channels4-profile.jpg"
                                            alt="OnePlus"
                                            className=" object-contain"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Item>



                        <Dropdown.Item>

                            <div>
                                <div className="bg-white p-4 h-40 flex items-center justify-center border rounded-lg">
                                    <Link href='/allbybrand/nothing'>
                                        <img
                                            src="https://i.ibb.co.com/3ykwPwDv/nothing-mobile-company-brand-official-logo-icon-and-symbol-high-quality-digital-download-free-vector.jpg"
                                            alt="Nokia"
                                            className="object-contain"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Item>



                        <Dropdown.Item>

                            <div>

                                <div className="bg-white p-4 h-40 flex items-center justify-center border rounded-lg">

                                    <Link href='/allbybrand/sony'>

                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg"
                                            alt="Sony"
                                            className="object-contain"
                                        />
                                    </Link>

                                </div>
                            </div>
                        </Dropdown.Item>






                    </Dropdown.Section>

                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}