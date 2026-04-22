"use client";

import { Bars } from "@gravity-ui/icons";
import { Button, Dropdown, Label, } from "@heroui/react";

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
                    <Dropdown.Section>
                        <Dropdown.Item id="new-file" textValue="New file">

                            <div className="flex flex-col">
                                <Label>AllPhone</Label>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item id="edit-file" textValue="Edit file">

                            <div className="flex flex-col">
                                <Label>AllLaptop</Label>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Section>

                    </Dropdown.Section>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}