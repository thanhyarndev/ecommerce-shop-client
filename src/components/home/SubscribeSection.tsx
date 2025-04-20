"use client";

import { SendHorizonal } from "lucide-react";

export default function SubscribeSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT SIDE - Title and Form */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-snug mb-2">
            By Subscribing To Our Newsletter You <br />
            Can Get 30% Off
          </h2>
          <p className="text-gray-500 italic mb-6">
            Details to details is what makes Yarnshop different from the other
            themes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border px-4 py-3 w-full sm:w-1/2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="border px-4 py-3 w-full sm:w-1/2 focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-4 py-3">
              <SendHorizonal size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Info */}
        <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Store Location:</p>
            <p className="text-gray-500">Sunny Isles Beach, FL</p>
            <p className="text-gray-500">33160, United States</p>
          </div>
          <div>
            <p className="font-semibold">Work Hours:</p>
            <p className="text-gray-500">07:30 AM - 9:30 PM</p>
            <p className="text-gray-500">Daily</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p className="text-gray-500">010-020-0340</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p className="text-gray-500">info@company.com</p>
          </div>
          <div>
            <p className="font-semibold">Office Location:</p>
            <p className="text-gray-500">North Miami Beach</p>
          </div>
          <div>
            <p className="font-semibold">Social Media:</p>
            <p className="text-gray-500">
              Facebook, Instagram, <br />
              Behance, LinkedIn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
