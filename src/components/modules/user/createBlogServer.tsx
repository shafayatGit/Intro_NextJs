import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Field, FieldGroup, FieldLabel } from "../../ui/field";
import { Input } from "../../ui/input";
import { Textarea } from "@/src/components/ui/textarea";

const createBlog = async (formData: FormData) => {
  "use server";
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const tags = formData.get("tags") as string;
  const blogData = {
    title,
    content,
    tags: tags.split(",").map((tag) => tag.trim()),
  };
  console.log(JSON.stringify(blogData)); //backend will get a json data so we converted it to JSON
};

export default function CreateBlogServer() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
        <CardDescription>You can write your blog here</CardDescription>
      </CardHeader>

      <CardContent>
        <form id="blog-form" action={createBlog}>
          <FieldGroup>
            <Field>
              <FieldLabel>Title</FieldLabel>
              <Input type="text" name="title" />
            </Field>

            <Field>
              <FieldLabel>Content</FieldLabel>
              <Textarea
                id="content"
                name="content"
                rows={30}
                placeholder="Enter your blog here"
                required
              />
            </Field>

            <Field>
              <FieldLabel>Tags</FieldLabel>
              <Input type="text" name="tags" />
            </Field>
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
