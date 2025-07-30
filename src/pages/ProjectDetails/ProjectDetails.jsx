import React, { useEffect, useState } from "react";
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
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById } from "../../Redux/Project/Action";
import { useParams } from "react-router-dom";
import { store } from "../../Redux/Store";
const ProjectDetails = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((store) => store);
  const { id } = useParams();
  const handleProjectInvitation = () => {};
  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, [id]);
  return (
    <div>
      <div className="mt-5 lg:px-10 flex">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[100%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5">
                {project.projectDetails?.name}
              </h1>
              <div className="space-y-5 pb-10">
                <p className="w-full md:max-w-lg lg:max-w-xl">
                  {project.projectDetails?.description}
                </p>
                <div className="flex">
                  <p className="w-36"> Project Lead:</p>
                  <p> {project.projectDetails?.owner.fullName}</p>
                </div>
                <div className="flex">
                  <p className="w-36">Members :</p>
                  <div className="flex items-center gap-2">
                    {project.projectDetails?.team.map((item) => (
                      <Avatar key={item}>
                        <AvatarFallback>{item.fullName[0]}</AvatarFallback>
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
                    <p> {project.projectDetails?.category} </p>
                  </div>
                  <div className="flex">
                    <p className="w-36">Status</p>
                    <Badge>pending</Badge>
                  </div>
                </div>
              </div>
              <section>
                <div>
                  <p className="py-5 border-b text-lg tracking-wider">Task</p>
                  <div className="lg:flex md:flex gap-3 justify-between py-5">
                    <IssueList status="pending" title="Todo List" />
                    <IssueList status="in-progress" title="In progress" />
                    <IssueList status="done" title="Done" />
                  </div>
                </div>
              </section>
            </div>
          </ScrollArea>
        </div>
        <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
