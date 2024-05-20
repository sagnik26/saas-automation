"use client";
import React, { useState } from "react";
import { ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { EditUserProfileSchema } from "@/lib/types";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {};

const ProfileForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: "",
      email: ""
    }
  })

  return (
    <Form {...form}>
      <form 
        className="flex flex-col gap-6"
        onSubmit={() => {}}
      >
        <FormField 
          name="name"   
          disabled={isLoading}
          control={form.control}
          render={({ field }) => {
            return (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="name" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            );
          }}
        />

        <FormField 
          name="email"   
          disabled={true}
          control={form.control}
          render={({ field }) => {
            return (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                type="email"
                  placeholder="email" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            );
          }}
        />

        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            'Save User Settings'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
