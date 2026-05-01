"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../../ui/field";
import { Input } from "../../ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { useForm } from "@tanstack/react-form";
import z from "zod";
import { toast } from "sonner";
import { createBlog } from "@/src/actions/blog.actions";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  content: z.string().min(10, "Content must be at least 10 characters."),
  tags: z.string(),
});

export default function CreateBlogClient() {
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      tags: "",
    },
    validators: {
      onSubmit: blogSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating your blog...");
      const blogData = {
        title: value.title,
        content: value.content,
        tags: value.tags.split(",").map((tag) => tag.trim()),
      };
      //   console.log(blogData);
      try {
        const res = await createBlog(blogData);
        if (res.error) {
          toast.error(
            res.error.message || "An error occurred while creating the blog.",
            {
              id: toastId,
            },
          );
          return;
        }
        toast.success("Blog created successfully!", {
          id: toastId,
        });
      } catch (error) {
        toast.error("An error occurred while creating the blog.", {
          id: toastId,
        });
      }
    },
  });
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Blog from ClientComp</CardTitle>
        <CardDescription>You can write your blog here</CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="blog-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(e);
          }}
        >
          <FieldGroup>
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Title</FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Title"
                      autoComplete="username"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="content"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Content</FieldLabel>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Content"
                      autoComplete="Content"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="tags"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Tags</FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="tags"
                      autoComplete="tags"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Button type="submit" form="blog-form" className="w-full">
          Create Blog
        </Button>
      </CardFooter>
    </Card>
  );
}
