import React from "react";
import { Button } from "@/components/ui/Button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Filter, FilterIcon, SearchIcon } from "lucide-react";
import ProjectCard from "../Project/ProjectCard";

const tags = [
  "all",
  "react",
  "nextjs",
  "spring boot",
  "mysql",
  "mongodb",
  "angular",
  "python",
  "flask",
  "django",
];
const ProjectList = () => {
  const [keyword, setKeyword] = useState("");
  const handleFilterChange = (value) => {
    console.log("value", value, section);
  };
  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div>
      <div className="relative flex px-5 lg-px-0 lg-flex gap-5 justify-center py-5">
        <section className="filterSection">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-[20rem]">
              <p className="text-xl tracking-wider">filters</p>

              <Button variant="ghost" size="icon">
                {/* <MixerHorizontalIcon /> */}
                <FilterIcon />
              </Button>
            </div>
            <CardContent className="mt-5">
              <ScrollArea className="space-y-7 h-[70vh]">
                <div>
                  <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="pt-1"
                      defaultValue="all"
                      onValueChange={(value) => {
                        handleFilterChange("category", value);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="all" if="r1" />
                        <Label htmlFor="r1">all</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="fullstack" if="r2" />
                        <Label htmlFor="r2">fullstack</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="frontend" if="r3" />
                        <Label htmlFor="r3">frontend</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="backend" if="r4" />
                        <Label htmlFor="r4">backend</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="pt-9">
                  <h1 className="pb-3 text-gray-400 border-b">Tags</h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="pt-1"
                      defaultValue="all"
                      onValueChange={(value) => {
                        handleFilterChange("tag", value);
                      }}
                    >
                      {tags.map((item) => (
                        <div key={item} className="flex items-center gap-2 ">
                          <RadioGroupItem value={item} if={`r1-${item}`} />
                          <Label htmlFor={`r1-${item}`}>{item}</Label>
                        </div>
                      ))}
                      <div></div>
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>{" "}
        <section className="projectListSection w-full lg:w-[48rem]">
          <div className="flex gap-2 items-center pb-5 justify-between">
            <div className="relative p-0 w-full">
              <Input
                onChange={handleSearchChange}
                className="40% px-9"
                placeholder="search project"
              />
              <SearchIcon className="absolute top-2 left-2" />
            </div>
          </div>
          <div>
            <div className="space-y-5 text-left min-h-[74vh]">
              {keyword
                ? [1, 1, 1].map((item) => <ProjectCard key={item} />)
                : [1, 1, 1, 1, 1].map((item) => <ProjectCard key={item} />)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectList;
