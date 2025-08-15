"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, MessageCircle, Calendar, AlarmClock } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export function Contact() {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "18:00",
    partySize: "1",
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.date ||
      !formData.time ||
      !formData.partySize
    ) {
      setErrorMsg("Please fill all required fields.");
      setLoading(false);
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    if (formData.date < today) {
      setErrorMsg("Please choose a future date.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "There was an error submitting your reservation.");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="reservation" className="py-24 bg-black">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-red-600/10 border-red-600/20 animate-pulse">
            <MessageCircle className="w-6 h-6 mr-3 text-red-600 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">
              Contact Us
            </span>
          </div>
          {/* <h2 className="mb-8 text-5xl font-bold text-white md:text-6xl">
            Visit <span className="text-red-600 animate-pulse">Noir Bar</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Located in the heart of the city, we’re ready to welcome you to an extraordinary experience
          </p> */}
        </motion.div>

        <motion.div
          className="grid items-start gap-16 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Info cards */}
          <div className="space-y-8">
            {[
              { icon: MapPin, title: "Location", content: "456 Cultural District\nMetropolitan City, MC 54321" },
              { icon: Phone, title: "Phone", content: "(555) 987-6543" },
              { icon: Mail, title: "Email", content: "hello@noirbar.com" },
              {
                icon: Clock, title: "Hours", content:
                  "Mon-Thu 6 pm – 1 am\nFri-Sat 6 pm – 2:30 am\nSun 7 pm – 12 am"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(239, 68, 68, 0.6)" }}
                className="group"
              >
                <Card className="bg-black border border-red-900/30">
                  <CardContent className="p-8">
                    <div className="flex space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-900/20 group-hover:bg-red-800/30 transition-colors">
                        <item.icon className="w-6 h-6 text-red-800 transition-transform group-hover:scale-110" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-red-400">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Reservation Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={formVariants}
            className="p-8 space-y-6 bg-black border rounded-lg border-red-900/30"
          >
            <div className="grid grid-cols-2 gap-4">
              {["firstName", "lastName"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block mb-1 font-semibold text-white">
                    {field === "firstName" ? "First Name*" : "Last Name*"}
                  </label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="
                      w-full px-3 py-2 border rounded
                      bg-gray-900 text-white placeholder:text-gray-500
                      border-red-700 focus:border-red-600 focus:outline-none
                      focus:bg-gray-900
                      [&:-webkit-autofill]:bg-gray-900 [&:-webkit-autofill]:text-white
                    "
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-white">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full px-3 py-2 border rounded
                  bg-gray-900 text-white placeholder:text-gray-500
                  border-red-700 focus:border-red-600 focus:outline-none
                  focus:bg-gray-900
                  [&:-webkit-autofill]:bg-gray-900 [&:-webkit-autofill]:text-white
                "
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="date" className="flex items-center gap-1 mb-1 font-semibold text-white">
                  <Calendar className="w-4 h-4" /> Date*
                </label>
                <DatePicker
                  selected={formData.date ? new Date(formData.date) : null}
                  onChange={(date) =>
                    setFormData({ ...formData, date: date?.toISOString().split("T")[0] || "" })
                  }
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  placeholderText="Select date"
                  className="w-full px-3 py-2 text-white bg-gray-900 border border-red-700 rounded focus:border-red-600 focus:outline-none"
                  calendarClassName="bg-gray-900 text-white border border-red-700 rounded"
                  popperPlacement="bottom"
                  id="date"
                />
              </div>

              <div>
                <label htmlFor="time" className="flex items-center gap-1 mb-1 font-semibold text-white">
                  <AlarmClock className="w-4 h-4" /> Time*
                </label>
                <DatePicker
                  selected={formData.time ? new Date(`1970-01-01T${formData.time}`) : null}
                  onChange={(time) =>
                    setFormData({ ...formData, time: time?.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) || "" })
                  }
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  placeholderText="Select time"
                  className="w-full px-3 py-2 text-white bg-gray-900 border border-red-700 rounded focus:border-red-600 focus:outline-none"
                  id="time"
                />
              </div>

              <div>
                <label htmlFor="partySize" className="block mb-1 font-semibold text-white">
                  Party Size*
                </label>
                <select
                  id="partySize"
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded bg-gray-900 text-white border-red-700 focus:border-red-600 focus:outline-none"
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={String(n + 1)}>
                      {n + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block mb-1 font-semibold text-white">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Anything else we should know?"
                className="
                  w-full px-3 py-2 border rounded
                  bg-gray-900 text-white placeholder:text-gray-500
                  border-red-700 focus:border-red-600 focus:outline-none
                  focus:bg-gray-900
                "
              />
            </div>

            {errorMsg && <p className="text-red-500">{errorMsg}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-red-700 hover:bg-black"
            >
              {loading ? "Submitting..." : "Make a Reservation"}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
