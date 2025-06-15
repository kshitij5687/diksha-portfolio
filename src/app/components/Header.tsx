"use client";
import {
  RiBehanceLine,
  RiCloseLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailLine,
  RiMenuLine,
} from "@remixicon/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

import gsap from "gsap";
import Link from "next/link";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const pathname = usePathname();
  const isDarkPage = [
    "/haldiram",
    "/diageo",
    "/tarang",
    "/shuttrup",
    "/please-see",
    "/archive",
    "/teej",
    "/haldiram-diwali",
    "/archive/motion",
  ].includes(pathname);
  // const [activeTab, setActiveTab] = useState<string>("");
  const [activeIcon, setActiveIcon] = useState<string>("");
  const router = useRouter();

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".header-animate");

    // Set initial states
    gsap.set(elements, { opacity: 0, y: -40 });

    // Animate elements
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      ease: "power3.out",
    });
  }, []);

  const isActive = (tab: string) => {
    const isPlayRoute = pathname === "/archive";
    const isAboutRoute = pathname === "/about";
    const isHomeRoute = pathname === "/";

    let shouldBeActive = false;
    if (tab === "work" && isHomeRoute) {
      shouldBeActive = true;
    } else if (tab === "archive" && isPlayRoute) {
      shouldBeActive = true;
    } else if (tab === "/about" && isAboutRoute) {
      shouldBeActive = true;
    }

    if (shouldBeActive) {
      // For mobile, we generally want consistency, so the underline should be there.
      // The color will depend on the isDarkPage prop of the main header,
      // but for the mobile menu text color is directly applied.
      return "underline underline-offset-4"; // Removed color here, will be handled by text color
    }
    return "";
  };

  const scrollToWork = async () => {
    if (pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        const element = document.getElementById("work-section");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById("work-section");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMain = async () => {
    if (pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        const element = document.getElementById("main-section");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById("main-section");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      // Menu items animation
      gsap.fromTo(
        ".menu-item",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [mobileMenuOpen]);

  return (
    <div>
      <div
        ref={headerRef}
        className={`sm:flex justify-between items-center py-6 hidden md:px-16 sm:px-10 ${
          isDarkPage ? "bg-black" : "bg-[#f2f1f1]"
        } group`}
      >
        <div
          className={`transform font-semibold transition-all duration-300 hover:scale-110 header-animate ${
            isDarkPage ? "text-white" : ""
          }`}
        >
          <div onClick={scrollToMain} className="cursor-pointer">
            Diksha Sharma
          </div>
        </div>
        <div
          className={`flex items-center gap-8 text-[18px] ${
            isDarkPage ? "text-white" : "text-gray-700"
          }`}
        >
          <div
            onClick={scrollToWork}
            className={`${isActive(
              "work"
            )} transform transition-all duration-300 group-hover:scale-110 cursor-pointer ${
              isDarkPage
                ? "hover:text-gray-300 decoration-white"
                : "hover:text-black decoration-black"
            } header-animate`}
          >
            Work
          </div>
          <div
            onClick={() => router.push("/archive")}
            className={`${isActive(
              "atchive"
            )} transform transition-all duration-300 group-hover:scale-110 cursor-pointer ${
              isDarkPage
                ? "hover:text-gray-300 decoration-white"
                : "hover:text-black decoration-black"
            } header-animate`}
          >
            Archive
          </div>
          <div
            onClick={() => router.push("/about")}
            className={`${isActive(
              "/about"
            )} transform transition-all duration-300 group-hover:scale-110 cursor-pointer ${
              isDarkPage
                ? "hover:text-gray-300 decoration-white"
                : "hover:text-black decoration-black"
            } header-animate`}
          >
            About
          </div>
        </div>
        <div
          className={`flex items-center gap-5 ${
            isDarkPage ? "text-white" : "text-gray-700"
          }`}
        >
          <div
            onClick={() => setActiveIcon("mail")}
            className={`transform transition-all duration-300 group-hover:scale-125 cursor-pointer header-animate ${
              isDarkPage ? "hover:text-gray-300" : "hover:text-black"
            } ${
              activeIcon === "mail"
                ? isDarkPage
                  ? "text-gray-300"
                  : "text-black"
                : ""
            }`}
          >
            <a href="mailto:hello.tingree@gmail.com">
              <RiMailLine size={20} />
            </a>
          </div>
          <div
            onClick={() => setActiveIcon("linkedin")}
            className={`transform transition-all duration-300 group-hover:scale-125 cursor-pointer header-animate ${
              isDarkPage ? "hover:text-gray-300" : "hover:text-black"
            } ${
              activeIcon === "linkedin"
                ? isDarkPage
                  ? "text-gray-300"
                  : "text-black"
                : ""
            }`}
          >
            <Link
              className="flex gap-3"
              href={"https://www.linkedin.com/in/diksha-sharma-648a51239/"}
            >
              <RiLinkedinFill size={20} />
            </Link>
          </div>
          <div
            onClick={() => setActiveIcon("instagram")}
            className={`transform transition-all duration-300 group-hover:scale-125 cursor-pointer header-animate ${
              isDarkPage ? "hover:text-gray-300" : "hover:text-black"
            } ${
              activeIcon === "instagram"
                ? isDarkPage
                  ? "text-gray-300"
                  : "text-black"
                : ""
            }`}
          >
            <Link
              className="flex gap-3"
              href={"https://www.instagram.com/tingree_si/"}
            >
              <RiInstagramLine size={20} />
            </Link>
          </div>
          <div
            onClick={() => setActiveIcon("behance")}
            className={`transform transition-all duration-300 group-hover:scale-125 cursor-pointer header-animate ${
              isDarkPage ? "hover:text-gray-300" : "hover:text-black"
            } ${
              activeIcon === "instagram"
                ? isDarkPage
                  ? "text-gray-300"
                  : "text-black"
                : ""
            }`}
          >
            <Link
              className="flex gap-3"
              href={"https://www.behance.net/dikshasharma30"}
            >
              <RiBehanceLine size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        {/* Fixed Top Header */}
        <div
          className={`fixed top-0 left-0 right-0 z-[60] ${
            isDarkPage ? "bg-black text-white" : "bg-[#f2f1f1] text-black"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <div
              onClick={scrollToMain}
              className="font-semibold text-lg cursor-pointer"
            >
              Diksha Sharma
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <RiCloseLine size={24} />
              ) : (
                <RiMenuLine size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-700 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ zIndex: 55 }}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full ${
            isDarkPage ? "bg-black" : "bg-[#f2f1f1]"
          } transition-transform duration-700 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 59 }}
        >
          <div className="pt-20 px-4 flex flex-col gap-12 text-lg">
            <div
              onClick={() => {
                scrollToWork();
                setMobileMenuOpen(false);
              }}
              className={`cursor-pointer menu-item opacity-0 ${isActive(
                "work"
              )} ${
                // Apply isActive here
                isDarkPage
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-700"
              }`}
            >
              Work
            </div>
            <div
              onClick={() => {
                router.push("/archive");
                setMobileMenuOpen(false);
              }}
              className={`cursor-pointer menu-item opacity-0 ${isActive(
                "archive"
              )} ${
                // Apply isActive here
                isDarkPage
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-700"
              }`}
            >
              Archive
            </div>
            <div
              onClick={() => {
                router.push("/about");
                setMobileMenuOpen(false);
              }}
              className={`cursor-pointer menu-item opacity-0 ${isActive(
                "/about"
              )} ${
                // Apply isActive here
                isDarkPage
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-700"
              }`}
            >
              About
            </div>
            <div className="flex flex-col gap-5 pt-24">
              <div
                className={`flex items-center gap-3 cursor-pointer menu-item opacity-0 ${
                  isDarkPage
                    ? "text-white hover:text-gray-300"
                    : "text-black hover:text-gray-700"
                }`}
              >
                <a
                  href="mailto:hello.tingree@gmail.com"
                  className="flex items-center gap-3"
                >
                  <RiMailLine size={24} />
                  <span>Mail</span>
                </a>
              </div>
              <div
                className={`flex items-center gap-3 cursor-pointer menu-item opacity-0 ${
                  isDarkPage
                    ? "text-white hover:text-gray-300"
                    : "text-black hover:text-gray-700"
                }`}
              >
                <Link
                  className="flex gap-3"
                  href={"https://www.linkedin.com/in/diksha-sharma-648a51239/"}
                >
                  <RiLinkedinFill size={24} />
                  <span>LinkedIn</span>
                </Link>
              </div>
              <div
                className={`flex items-center gap-3 cursor-pointer menu-item opacity-0 ${
                  isDarkPage
                    ? "text-white hover:text-gray-300"
                    : "text-black hover:text-gray-700"
                }`}
              >
                <Link
                  className="flex gap-3"
                  href={"https://www.instagram.com/tingree_si/"}
                >
                  <RiInstagramLine size={24} />
                  <span>Instagram</span>
                </Link>
              </div>
              <div
                className={`flex items-center gap-3 cursor-pointer menu-item opacity-0 ${
                  isDarkPage
                    ? "text-white hover:text-gray-300"
                    : "text-black hover:text-gray-700"
                }`}
              >
                <Link
                  className="flex gap-3"
                  href={"https://www.behance.net/dikshasharma30"}
                >
                  <RiBehanceLine size={24} />
                  <span>Behance</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
