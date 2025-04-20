import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* LOGO + Address */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-black font-bold text-xl">H</span>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">YARNSHOP</p>
              <p className="text-xs text-gray-400 uppercase">Online Shopping</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            16501 Collins Ave, Sunny Isles Beach,
            <br />
            FL 33160, United States
          </p>
          <p className="mt-2 text-sm">yarnshop@company.com</p>
          <p className="text-sm">010-020-0340</p>
        </div>

        {/* SHOPPING */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Shopping & Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Men’s Shopping
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Women’s Shopping
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kid's Shopping
              </a>
            </li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Homepage
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* HELP & INFO */}
        <div>
          <h3 className="text-white font-semibold mb-4">Help & Information</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ's
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tracking ID
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-8 w-full max-w-7xl mx-auto" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm max-w-7xl mx-auto gap-4 px-2">
        <p className="text-gray-400 text-center md:text-left">
          THANH YARN CUTE VL.{" "}
          <br className="md:hidden" />
          Design:{" "}
          <a href="#" className="hover:underline">
            TemplateMo
          </a>
        </p>

        <div className="flex gap-4 text-white text-lg">
          <a href="#">
            <Facebook size={18} />
          </a>
          <a href="#">
            <Twitter size={18} />
          </a>
          <a href="#">
            <Linkedin size={18} />
          </a>
          {/* Replace or remove the Behance icon */}
        </div>
      </div>
    </footer>
  );
}
