import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Users, Phone, Mail, MessageSquare } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
  partySize: z.string().min(1, {
    message: "Please enter the number of guests.",
  }),
  specialRequests: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof formSchema>;

interface ReservationFormProps {
  onSubmit?: (values: ReservationFormValues) => void;
  selectedDate?: Date;
  selectedTime?: string;
}

const ReservationForm = ({
  onSubmit,
  selectedDate = new Date(),
  selectedTime = "7:00 PM",
}: ReservationFormProps) => {
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      partySize: "2",
      specialRequests: "",
    },
  });

  const handleSubmit = (values: ReservationFormValues) => {
    // In a real implementation, this would send the data to a server
    console.log("Form submitted:", values);
    onSubmit?.(values);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card rounded-lg shadow-md border border-border">
      <h3 className="text-xl font-semibold mb-4 text-center">
        Complete Your Reservation
      </h3>

      {selectedDate && selectedTime && (
        <div className="mb-6 p-3 bg-muted rounded-md text-center">
          <p className="text-sm font-medium">Selected Date & Time:</p>
          <p className="text-base">
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
            , {selectedTime}
          </p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="partySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Guests</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="2" {...field} type="number" min="1" />
                    <Users className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Smith" {...field} />
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
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="(555) 123-4567" {...field} />
                    <Phone className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="your@email.com"
                      {...field}
                      type="email"
                    />
                    <Mail className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="specialRequests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special Requests</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Textarea
                      placeholder="Any dietary restrictions or special occasions?"
                      className="min-h-[80px]"
                      {...field}
                    />
                    <MessageSquare className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormDescription>
                  We'll do our best to accommodate your requests.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-6">
            Confirm Reservation
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReservationForm;
