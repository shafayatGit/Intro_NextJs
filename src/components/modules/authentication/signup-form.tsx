"use client";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { useForm } from "@tanstack/react-form";
import {
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
  Field,
} from "../../ui/field";
import { Input } from "../../ui/input";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value);
    },
  });

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Name */}
            <form.Field
              name="name"
              children={(field) => {
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Enter Your Name</FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Username"
                      autoComplete="username"
                    />
                  </Field>
                );
              }}
            />
            {/* Email */}
            <form.Field
              name="email"
              children={(field) => {
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Enter Your Email</FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="xyz@gmail.com"
                      autoComplete="xyz@gmail.com"
                    />
                  </Field>
                );
              }}
            />
            {/* Password  */}
            <form.Field
              name="password"
              children={(field) => {
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Enter Your Password</FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="**********"
                      autoComplete="**********"
                    />
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button form="signup-form" type="submit">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
