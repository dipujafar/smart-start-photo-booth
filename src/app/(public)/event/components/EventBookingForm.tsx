"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import Container from "@/components/shared/Container"

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  eventDate: z.date({
    required_error: "Event date is required.",
  }),
  eventType: z.string({
    required_error: "Please select an event type.",
  }),
  setupTime: z.string().optional(),
  venueDetails: z.string().min(5, {
    message: "Please provide venue name and address.",
  }),
  eventDetails: z.string().optional(),
  guestCount: z.string({
    required_error: "Please select estimated guest count.",
  }),
  theme: z.string({
    required_error: "Please select a theme/color.",
  }),
  package: z.string({
    required_error: "Please select a package.",
  }),
  referralSource: z.string({
    required_error: "Please select how you heard about us.",
  }),
})

export default function EventBookingForm() {
  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      setupTime: "",
      venueDetails: "",
      eventDetails: "",
    },
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send the data to your backend
    alert("Form submitted successfully!")
  }

  return (
    <Container className="2xl:w-[80%] lg:mt-10 mt-7">
        <div className="w-full  mx-auto p-6 rounded-lg bg-[#AB9D6E]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Your Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" className="bg-white py-6" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Your Email*</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" className="bg-white py-6" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone Number*</FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" className="bg-white py-6" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white">Event Date*</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal bg-white py-6",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Select a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">What Type Of Event?*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white py-6 w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Birth Day">Birth Day</SelectItem>
                    <SelectItem value="Social Event">Social Event</SelectItem>
                    <SelectItem value="Wedding">Wedding</SelectItem>
                    <SelectItem value="Conference">Conference</SelectItem>
                    <SelectItem value="Brand Activation">Brand Activation</SelectItem>
                    <SelectItem value="Grad Party">Grad Party</SelectItem>
                    <SelectItem value="Company Party">Company Party</SelectItem>
                    <SelectItem value="Holiday Party">Holiday Party</SelectItem>
                    <SelectItem value="Gala">Gala</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="setupTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">When do you want the photo booth set up and open until?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your text message" className="bg-white py-6 resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="venueDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">What's your venue name & address?*</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your text message" className="bg-white py-6 resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Tell us about your event (not required)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your text message"
                    className="bg-white  resize-none min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="guestCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Estimated Guest Count?*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white py-6 w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="0-50">0-50</SelectItem>
                    <SelectItem value="51-100">51-100</SelectItem>
                    <SelectItem value="101-200">101-200</SelectItem>
                    <SelectItem value="201-300">201-300</SelectItem>
                    <SelectItem value="300+">300+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Theme / Colors?*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white py-6 w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gold">Gold</SelectItem>
                    <SelectItem value="silver">Silver</SelectItem>
                    <SelectItem value="rustic">Rustic</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="custom">Custom (describe in event details)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="package"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">What Package are you Interested in?*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white py-6  w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="basic">Bronze Packages</SelectItem>
                    <SelectItem value="standard">Gold Packages</SelectItem>
                    <SelectItem value="premium">Diamond Packages</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referralSource"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">How did you hear about us?*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white py-6 w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                  <SelectItem value="Vendor Referral">Vendor Referral</SelectItem>
                    <SelectItem value="Saw you at an Event">Saw you at an Event</SelectItem>
                    <SelectItem value="Client Referral">Client Referral</SelectItem>
                    <SelectItem value="Wedding wire">Wedding wire</SelectItem>
                    <SelectItem value="Company Website">Company Website</SelectItem>
                    <SelectItem value="Personal Contact">Personal Contact</SelectItem>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="Planner">Planner</SelectItem>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="Existing Client">Existing Client</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" className="bg-[#8C7F55] hover:bg-[#8C7F55] text-white py-6  cursor-pointer rounded-full w-full border-b-2 border-r-2 group">
              Submit Your Information <MoveIcon className="group-hover:translate-x-3 size-6 duration-500"></MoveIcon>
            </Button>
          </div>

          <p className="text-lg  mt-4">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </form>
      </Form>
      </div>
    </Container>
  )
}



function MoveIcon({className}:{className?: string}){
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12.9334 9.2001L15.7334 12.0001M15.7334 12.0001L12.9334 14.8001M15.7334 12.0001L8.26676 12.0001M20.4001 12.0001C20.4001 16.6393 16.6393 20.4001 12.0001 20.4001C7.36091 20.4001 3.6001 16.6393 3.6001 12.0001C3.6001 7.36091 7.36091 3.6001 12.0001 3.6001C16.6393 3.6001 20.4001 7.36091 20.4001 12.0001Z" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
}
