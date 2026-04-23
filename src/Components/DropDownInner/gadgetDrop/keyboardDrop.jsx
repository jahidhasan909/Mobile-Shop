"use client"
import { ChevronDown } from "@gravity-ui/icons";
import { Button, Dropdown, Label } from "@heroui/react";

const KeyboardDrop = () => {
    return (
        <div>
             <Dropdown className="">
                <Button aria-label="Menu" variant="normal" className='bg-neutral-200 rounded-md p-7'>
                    Filter by <ChevronDown></ChevronDown>
                </Button>
                <Dropdown.Popover>
                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                        <Dropdown.Item id="new-file" textValue="New file">
                            <Label>Low - High</Label>
                        </Dropdown.Item>
                        <Dropdown.Item id="copy-link" textValue="Copy link">
                            <Label>High - Low</Label>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>
        </div>
    );
};

export default KeyboardDrop;