"use client";
import { useForm } from "react-hook-form";
import type React from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import { useState } from "react";
import { PhoneInput } from "@/components/ui/phone-input";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is Q" })
    .max(50, { message: "Name must be at most 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .min(1, { message: "Email is required" }),
  phoneNumber: z
    .string({ required_error: "Phone Number is required" })
    .min(1, { message: "Phone Number is required" }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" }),
//   image: z
//     .instanceof(FileList)
//     .refine((files) => files.length > 0, { message: "Image is required" })
//     .refine((files) => files[0].size <= 5 * 1024 * 1024, {
//       message: "Image must be less than 5MB",
//     })
//     .refine(
//       (files) =>
//         ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
//           files[0].type
//         ),
//       {
//         message: "Only .jpg, .jpeg, .png and .webp formats are supported",
//       }
//     ),
});

const ContactForm = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phoneNumber);
    formData.append("message", data.message);
    // formData.append("image", data.image[0]);

    console.log("Form data to submit:", {
      name: data.name,
      email: data.email,
      phone: data.phoneNumber,
      message: data.message,
    //   imageFile: data.image[0].name,
    });

    // Here you would typically send the formData to your server
    // Example: await fetch('/api/upload', { method: 'POST', body: formData });
  };

  return (
    <div className=" p-8 bg-white rounded-lg   ">
      <div className="space-y-6">
        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Your name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="focus-visible:ring-1 focus-visible:ring-[#B3A369] focus-visible:ring-offset-0 py-6 rounded-md border-none outline-0 bg-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Your email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Email"
                      type="email"
                      {...field}
                      className="focus-visible:ring-1 focus-visible:ring-[#B3A369] focus-visible:ring-offset-0 py-6 rounded-md border-none outline-0 bg-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      // @ts-ignore
                      value={field.value}
                      onChange={field.onChange}
                      international
                      defaultCountry="US"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your here message"
                      {...field}
                      rows={9}
                      className="focus-visible:ring-1 focus-visible:ring-[#B3A369] focus-visible:ring-offset-0 rounded-md border-none outline-0 bg-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-[200px] py-6 bg-[#B3A369] hover:bg-[#9A8C58] text-white rounded-full group overflow-hidden border-b-2 border-r-2 border-black"
            >
              Send Message{" "}
              <ChevronsRight className="ml-2 group-hover:translate-x-2 duration-300" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
