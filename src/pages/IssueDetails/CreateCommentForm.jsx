import React from "react";
import { useForm } from "react-hook-form";
("use client");
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const CreateCommentForm = ({ issueId }) => {
  const form = useForm({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data) => {
    console.log("create project data", data);
    // handle form submission logic here
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="flex gap-2 items-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* Project Name */}
          <div>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <div>
                      <Avatar>
                        <AvatarFallback>R</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="border w-full border-gray-700 py-5 px-5"
                      placeholder="Add comment here..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Submit Button */}

          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCommentForm;
