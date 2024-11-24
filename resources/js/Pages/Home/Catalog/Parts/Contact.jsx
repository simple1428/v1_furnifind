import { SuccessAlert } from "@/Components/Alert";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Contact({ profile }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,

        reset,
    } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (id) => {
        post(route("message.send"), {
            preserveScroll: true,
            onSuccess: () => {
                SuccessAlert("Sending Success", "center");
                reset();
            },
            onFailed: () => {
                WarningAlert("Sending Failed", "center");
                reset();
            },
        });
    };
    return (
        <div className="  space-y-3">
            <div className=" ">
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                    className="w-full h-10 placeholder:text-xs "
                    placeholder="Your Name"
                />
                <InputError message={errors.name} className="mt-2 text-xs" />
            </div>
            <div className=" ">
                <TextInput
                    id="email"
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                    className="w-full h-10 placeholder:text-xs"
                    placeholder="Your Email"
                />
                <InputError message={errors.email} className="mt-2 text-xs" />
            </div>
            <div className=" ">
                <TextInput
                    id="subject"
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-10 placeholder:text-xs"
                    placeholder=" Subject"
                />
                <InputError message={errors.subject} className="mt-2 text-xs" />
            </div>
            <div className="">
                <textarea
                    id="message"
                    type="text"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    required
                    className="h-32 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm placeholder:text-xs "
                    placeholder="Message"
                ></textarea>
                <InputError message={errors.message} className="mt-2 text-xs" />
            </div>
            <div className="">
                <PrimaryButton
                    disabled={processing}
                    onClick={handleSubmit}
                    className="bg-green-600 text-white hover:bg-green-800 duration-300 transition"
                >
                    Send
                </PrimaryButton>
            </div>
        </div>
    );
}
