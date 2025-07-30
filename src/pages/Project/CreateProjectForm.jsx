import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { tags } from "../ProjectList/ProjectList";
import { Cross, CrosshairIcon, CrossIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { createProject } from "../../Redux/Project/Action";

const CreateProjectForm = () => {
  const dispatch = useDispatch();
  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues("tags");
    const updatedTags = currentTags.includes(newValue)
      ? currentTags.filter((tag) => tag !== newValue)
      : [...currentTags, newValue];

    form.setValue("tags", updatedTags);
  };
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: ["javascript", "react"],
    },
  });

  const onSubmit = (data) => {
    dispatch(createProject(data));
    console.log("create project data", data);
  };

  return (
    <div>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Project Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Project name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Project Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Project description..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Project Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fullstack">Full Stack</SelectItem>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Project Tags */}
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => {
              const handleTagsChange = (value) => {
                const currentTags = field.value || [];
                const updatedTags = currentTags.includes(value)
                  ? currentTags.filter((tag) => tag !== value)
                  : [...currentTags, value];
                field.onChange(updatedTags);
              };

              return (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={handleTagsChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Tags" />
                      </SelectTrigger>
                      <SelectContent>
                        {tags.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>

                  {/* Show selected tags below with cross icons */}
                  <div className="flex gap-1 flex-wrap mt-2">
                    {field.value?.map((item) => (
                      <div
                        key={item}
                        onClick={() => handleTagsChange(item)}
                        className="cursor-pointer flex items-center gap-2 border px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition"
                      >
                        <span className="text-sm">{item}</span>
                        <Cross className="h-3 w-3" />
                      </div>
                    ))}
                  </div>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* Submit Button */}
          <DialogClose asChild>
            {false ? (
              <div>
                <p>
                  You can create only 3 projects with free plan, please upgrade
                  your plan.
                </p>
              </div>
            ) : (
              <Button type="submit" className="w-full py-5">
                Create Project
              </Button>
            )}
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
