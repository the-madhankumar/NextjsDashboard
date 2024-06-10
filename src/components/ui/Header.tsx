'use client';
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell } from "lucide-react";
import { CommandDemo } from "../Command";
import { useState } from "react";

export default function Header() {
    const [Notifications, setNotifications] = useState<any>([
        {
            text: "This is a Notification",
            date: "22-06-2023",
            read: true,
        },
        {
            text: "This is another Notification",
            date: "07-07-2023",
            read: false,
        }
    ])
    return <div className="grid grid-cols-2 gap-4 border-b p-4">
        <CommandDemo />

        <div className="flex justify-end">
            <DropdownMenu>
                <DropdownMenuTrigger><Button variant="outline" size="icon">
                    <Bell className="h-4 w-4" />
                </Button></DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {Notifications.map((item: any, key: number) => (
                        <div><DropdownMenuItem className="p-1 cursor-pointer
hover:bg-neutra1-50 transition" key={key}>
                            <p className={`h-3 w-3 rounded-full my-1 ${item.read ? 'bg-green-500' : 'bg-red-500'}`}></p>
                            <p className="pl-2">{item.text}</p>
                            <p className="pl-2 text-xs text-neutral-500">{item.date}</p>
                        </DropdownMenuItem><DropdownMenuSeparator /></div>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </div>;
}