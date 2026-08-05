"use client";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/contact", {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(formData)
            });
            if (res.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" })
            } else {
                alert("Something went wrong. Please try again");
            }
        } catch (error) {
            console.error("Error submitting Form", error);
            alert("Something wnet wrong.PLease try again.")
        }

    };

    return (
        <div className="bg-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block font-semibold mb-2">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="w-full border rounded-lg px-4 py-2" required />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" className="w-full border rounded-lg px-4 py-2" required />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={5} className="w-full border rounded-lg px-4 py-2" required />
                </div>
                <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;