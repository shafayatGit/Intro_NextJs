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
import * as z from "zod";
import { authClient } from "@/src/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Form validation schema using Zod
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one number, and one special character.",
    ),
});

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("LoggedIn in your account...");
      try {
        const { data, error } = await authClient.signIn.email(value);

        if (error) {
          toast.error(error.message || "An error occurred during signin.", {
            id: toastId,
          });
          return;
        }
        toast.success("Logged In successfully!", { id: toastId });
        router.push("/dashboard");
      } catch (error) {
        toast.error("An unexpected error occurred. Please try again.", {
          id: toastId,
        });
        return;
      }
    },
  });

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:3000/dashboard",
      });
    } catch (error) {
      console.error("Google sign-in failed", error);
    }
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Login Your Account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="signin-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Email */}
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Enter Your Email
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="xyz@gmail.com"
                      autoComplete="xyz@gmail.com"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            {/* Password  */}
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Enter Your Password
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="**********"
                      autoComplete="**********"
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

      <CardFooter className="flex flex-col items-center gap-4">
        <Button className="w-full" form="signin-form" type="submit">
          Login
        </Button>
        <Button
          variant={"outline"}
          className="w-full"
          onClick={() => handleGoogleSignIn()}
          type="submit"
        >
          SignIn with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
