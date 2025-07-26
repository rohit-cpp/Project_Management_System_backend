import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DonutIcon, DotIcon, Menu, MenuIcon } from "lucide-react";
const ProjectCard = () => {
  return (
    <div>
      <Card className="p-5 w-full lg:max-w-3xl">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1 className="cursor-pointer font-bold text-lg">
                Create Ecommerce Project
              </h1>
              <DotIcon />
              <p className="text-sm text-gray-400">fullstack</p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="rounded-full" variant="ghost" size="icon">
                    <MenuIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenu>Update</DropdownMenu>
                  <DropdownMenu>Delete</DropdownMenu>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              placeat nostrum assumenda numquam corrupti alias nisi. Minima,
              impedit aliquam modi perferendis fugiat soluta.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {[1, 1, 1, 1].map((item) => (
              <Badge key={item} variant="outline">
                {"frontend"}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
