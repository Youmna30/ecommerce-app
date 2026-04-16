"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FaCheckCircle, FaFacebook, FaGoogle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/schemas/signup.schema";
import { signupAction } from "@/actions/signup.action";
import { Checkbox } from "@/components/ui/checkbox";
import { SignupType } from "@/types/signup.type";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { VscError } from "react-icons/vsc";


const SignupForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    resolver: zodResolver(signupSchema),
  });
  const router = useRouter();

  async function handleSignup(values: SignupType) {
    const res = await signupAction(values);

    if (res == "success") {
      toast.success("Account Created Successfully", {
        position: "top-center",
        icon: <FaCheckCircle className="text-[#16A34A] text-xl" />,
      });
      router.push("/login");
    } else if (res && typeof res === "object") {
      toast.error(res.message, {
        position: "top-center",
        icon: <VscError className="text-red-600 text-xl" />,
      });
    } else {
      toast.error("Something Went Wrong, Try Again Later!", {
        position: "top-center",
        icon: <VscError className="text-red-600 text-xl" />,
      });
    }
  }

  return (
    <div className="shadow-lg rounded-2xl px-6 py-10">
      <div className="text-center">
        <h2 className="font-semibold text-3xl text-[#364153]">
          Create Your Account
        </h2>
        <p className="font-medium text-[#364153]">
          Start your fresh journey with us today
        </p>
        <div className="py-8 flex items-center gap-2 *:grow">
          <button className="px-4 py-2 rounded-lg border border-[#D1D5DC] flex items-center justify-center gap-2 font-semibold text-[#101828] hover:bg-gray-100 cursor-pointer">
            <FaGoogle className="text-[#E7000B]" />
            Google
          </button>
          <button className="px-4 py-2 rounded-lg border border-[#D1D5DC] flex items-center justify-center gap-2 font-semibold text-[#101828] hover:bg-gray-100 cursor-pointer">
            <FaFacebook className="text-[#155DFC]" />
            Facebook
          </button>
        </div>
      </div>
      <div className="relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4 before:text-[#364153] before:font-medium"></div>
      <form onSubmit={form.handleSubmit(handleSignup)} className="space-y-7">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="text-[#364153] font-medium text-base"
              >
                Name*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Ali"
                autoComplete="off"
                className="py-5 px-3 focus-visible:border-[#16A34A] focus-visible:ring-0 aria-invalid:ring-0 aria-invalid:border-input  aria-invalid:text-black"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="text-[#364153] font-medium text-base"
              >
                Email*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="ali@exampple.com"
                autoComplete="off"
                className="py-5 px-3 focus-visible:border-[#16A34A] focus-visible:ring-0 aria-invalid:ring-0 aria-invalid:border-input  aria-invalid:text-black"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="text-[#364153] font-medium text-base"
              >
                Password*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="create a strong password"
                autoComplete="off"
                className="py-5 px-3 focus-visible:border-[#16A34A] focus-visible:ring-0 aria-invalid:ring-0 aria-invalid:border-input  aria-invalid:text-black"
                type="password"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="rePassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="text-[#364153] font-medium text-base"
              >
                Confirm Password*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="confirm your password"
                autoComplete="off"
                className="py-5 px-3 focus-visible:border-[#16A34A] focus-visible:ring-0 aria-invalid:ring-0 aria-invalid:border-input  aria-invalid:text-black"
                type="password"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="text-[#364153] font-medium text-base"
              >
                Phone Number*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="+1 234 567 8900"
                autoComplete="off"
                className="py-5 px-3 focus-visible:border-[#16A34A] focus-visible:ring-0 aria-invalid:ring-0 aria-invalid:border-input aria-invalid:text-black"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="terms"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <FieldSet data-invalid={fieldState.invalid}>
                <FieldGroup data-slot="checkbox-group">
                  <Field orientation="horizontal">
                    <Checkbox
                      id="form-rhf-checkbox-terms"
                      name={field.name}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="aria-checked:bg-[#16A34A] p-2 aria-checked:border-[#16A34A] border-black"
                    />
                    <FieldLabel
                      htmlFor="form-rhf-checkbox-terms"
                      className="font-medium text-[#364153] text-base"
                    >
                      I agree to the
                      <Link
                        href={"/terms"}
                        className="text-[#16A34A] hover:underline"
                      >
                        Terms of Service
                      </Link>
                      and
                      <Link
                        href={"/privacy"}
                        className="text-[#16A34A] hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      *
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </div>
          )}
        />
        {/* <div className="mb-7 flex items-center gap-3">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="accent-[#16A34A] size-4"
          />
          <label htmlFor="terms" className="font-medium text-[#364153]">
            I agree to the
            <Link href={"/terms"} className="text-[#16A34A] hover:underline">
              Terms of Service
            </Link>
            and
            <Link href={"/privacy"} className="text-[#16A34A] hover:underline">
              Privacy Policy
            </Link>
            
          </label>
        </div> */}
        <button className="bg-[#16A34A] text-white rounded-lg flex items-center gap-2 justify-center w-full h-10 font-semibold hover:bg-[#15803d] cursor-pointer">
          <FaUserPlus />
          Create My Account
        </button>
      </form>
      <p className="font-medium text-[#364153] border-t border-t-[#D1D5DC4D] pt-10 text-center my-4">
        Already have an account?{" "}
        <Link href={"/login"} className="text-[#16A34A] hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
