import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/Button";
import CreateProjectForm from "../Project/CreateProjectForm";
import { MenuIcon, User2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/Action";
const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <div className="border-b py-4 px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p onClick={() => navigate("/")} className="cursor-pointer">
            Project Management
          </p>
          <Dialog>
            <DialogTrigger>
              <Button variant="ghost">New Project</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>Create New Project</DialogHeader>
              <CreateProjectForm />
            </DialogContent>
          </Dialog>
          <Button onClick={() => navigate("/upgrade_plan")} variant="ghost">
            Upgrade
          </Button>
        </div>
        <div className="flex gap-3 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-gray-500"
              >
                <User2Icon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <p>{auth.user?.fullName}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
