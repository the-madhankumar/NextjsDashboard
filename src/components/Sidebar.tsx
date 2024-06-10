import { Inbox, User, GlobeLock, MessageSquare, Settings, BellRing, ReceiptIndianRupee } from "lucide-react";
import UserItem from "./ui/Useritem";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";

export default function Sidebar() {

  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/profile",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/inbox",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/billing",
          icon: <ReceiptIndianRupee />,
          text: "Billing",
        },
        {
          link: "/notifications",
          icon: <BellRing />,
          text: "Notifications",
        }
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/settings/general",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/settings/privacy",
          icon: <GlobeLock />,
          text: "Privacy",
        },
        {
          link: "/logs",
          icon: <MessageSquare />,
          text: "Logs",
        },
      ]
    }
  ];

  return (
    <div className="fixed w-[300px] gap-2 border-r min-h-screen p-4 flex flex-col">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey) => (
                  <Link href={option.link} key={optionKey} passHref>
                    <CommandItem className="flex gap-2">
                      {option.icon}
                      {option.text}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
