"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const inquiryTypes = [
  { value: "reservation", label: "Room Reservation" },
  { value: "event", label: "Event Inquiry" },
  { value: "dining", label: "Dining Reservation" },
  { value: "feedback", label: "Feedback" },
  { value: "corporate", label: "Corporate Booking" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiryType: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
      {/* Royal Corner Ornaments - Diagonal */}
      <RoyalCornerOrnament position="top-right" color="#c1893e" size="lg" className="top-6 right-6 md:top-8 md:right-8 opacity-30 hidden md:block" />
      <RoyalCornerOrnament position="bottom-left" color="#c1893e" size="lg" className="bottom-6 left-6 md:bottom-8 md:left-8 opacity-30 hidden md:block" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c1893e 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Message */}
          <div>
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre block mb-4">
              Send A Message
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-6 text-balance">
              We Would Love To Hear From You
            </h2>
            <RoyalDivider color="#c1893e" className="my-8 justify-start" />
            <p className="font-sans text-cream/70 leading-relaxed mb-8">
              Have a question or special request? Fill out the form and our team will 
              get back to you within 24 hours. For immediate assistance, please call 
              our front desk directly.
            </p>

            {/* Quick Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-ochre/30 flex items-center justify-center shrink-0">
                  <span className="text-ochre font-serif text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cream mb-1">Fill the Form</h4>
                  <p className="font-sans text-sm text-cream/60">
                    Provide your details and inquiry type for faster response.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-ochre/30 flex items-center justify-center shrink-0">
                  <span className="text-ochre font-serif text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cream mb-1">We Review</h4>
                  <p className="font-sans text-sm text-cream/60">
                    Our team carefully reviews each inquiry to provide the best assistance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-ochre/30 flex items-center justify-center shrink-0">
                  <span className="text-ochre font-serif text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cream mb-1">Get Response</h4>
                  <p className="font-sans text-sm text-cream/60">
                    Expect a personalized response within 24 hours via your preferred method.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-ochre rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-ochre" />
                  </div>
                  <h3 className="font-serif text-2xl text-cream mb-3">Thank You!</h3>
                  <p className="font-sans text-cream/70">
                    Your message has been received. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-sans text-sm text-cream/80 mb-2">
                        Full Name <span className="text-ochre">*</span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        className="bg-transparent border-cream/20 text-cream placeholder:text-cream/40 focus:border-ochre h-12 font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block font-sans text-sm text-cream/80 mb-2">
                        Email Address <span className="text-ochre">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className="bg-transparent border-cream/20 text-cream placeholder:text-cream/40 focus:border-ochre h-12 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block font-sans text-sm text-cream/80 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 00000 00000"
                        className="bg-transparent border-cream/20 text-cream placeholder:text-cream/40 focus:border-ochre h-12 font-sans"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="inquiryType" className="block font-sans text-sm text-cream/80 mb-2">
                        Inquiry Type <span className="text-ochre">*</span>
                      </label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleChange("inquiryType", value)}
                      >
                        <SelectTrigger className="bg-transparent border-cream/20 text-cream h-12 font-sans focus:ring-ochre">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-olive-dark border-cream/20">
                          {inquiryTypes.map((type) => (
                            <SelectItem
                              key={type.value}
                              value={type.value}
                              className="text-cream hover:bg-cream/10 focus:bg-cream/10 font-sans"
                            >
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block font-sans text-sm text-cream/80 mb-2">
                      Subject <span className="text-ochre">*</span>
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="What is your inquiry about?"
                      className="bg-transparent border-cream/20 text-cream placeholder:text-cream/40 focus:border-ochre h-12 font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-sans text-sm text-cream/80 mb-2">
                      Message <span className="text-ochre">*</span>
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please describe your inquiry in detail..."
                      rows={5}
                      className="bg-transparent border-cream/20 text-cream placeholder:text-cream/40 focus:border-ochre font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase text-sm py-6 transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>

                  <p className="font-sans text-xs text-cream/50 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
