import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { PlusIcon } from "lucide-react";
import InviteUserForm from "./InviteUserForm";
const ProjectDetails = () => {
  const handleProjectInvitation = () => {};
  return (
    <div>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5">
                Create Ecommerce Website using React
              </h1>
              <div className="space-y-5 pb-10">
                <p className="w-full md:max-w-lg lg:max-w-xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                </p>
                <div className="flex">
                  <p className="w-36">Project Lead:</p>
                  <p>Coder 360</p>
                </div>
                <div className="flex">
                  <p className="w-36">Members :</p>
                  <div className="flex items-center gap-2">
                    {[1, 1, 1, 1].map((item) => (
                      <Avatar key={item}>
                        <AvatarFallback>Z</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleProjectInvitation}
                          className="ml-2"
                        >
                          <span>invite</span>
                          <PlusIcon className="w-3 h-3" />
                        </Button>
                      </DialogClose>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>Invite User</DialogHeader>
                      <InviteUserForm />
                    </DialogContent>
                  </Dialog>
                </div>
                <div>
                  <div className="flex">
                    <p className="w-36">Category :</p>
                    <p>Full Stack</p>
                  </div>
                  <div className="flex">
                    <p className="w-36">Project Lead :</p>
                    <Badge>pending</Badge>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
