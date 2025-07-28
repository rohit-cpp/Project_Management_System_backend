import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotSquareIcon, Menu, UserIcon } from "lucide-react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
const IssueCard = () => {
  const navigate = useNavigate();
  return (
    <div className="rounded-md py-1 pb-2">
      <Card>
        <CardHeader className="py-0 pb-1">
          <div className="flex justify-between items-center">
            <CardTitle
              className="cursor-pointer"
              onClick={() => navigate("/project/3/issue/10")}
            >
              {" "}
              Create Navbar
            </CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>In progress</DropdownMenuItem>
                <DropdownMenuItem>Done</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="py-0">
          <div className="flex items-center justify-between">
            <p>FPB -{1}</p>
            <DropdownMenu className="w-[30rem] border border-red-400">
              <DropdownMenuTrigger>
                <Button
                  size="icon"
                  className="bg-gray-900 hover:text-red-500 text-black rounded-full"
                >
                  <Avatar>
                    <AvatarFallback>
                      <UserIcon />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <UserList />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IssueCard;
