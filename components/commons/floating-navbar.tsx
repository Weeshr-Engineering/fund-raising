"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useFullscreenModal from "@/hooks/use-fullscreen";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
    disabled?: boolean; // Add disabled prop
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [isScrollable, setIsScrollable] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const { openModal, Modal } = useFullscreenModal();

  useEffect(() => {
    const checkScrollable = () => {
      setIsScrollable(
        document.documentElement.scrollHeight > window.innerHeight
      );
    };

    const checkAuthentication = () => {
      setIsAuthenticated(!!localStorage.getItem("authToken"));
    };

    checkScrollable();
    checkAuthentication();

    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number" && isScrollable) {
      let direction = current - scrollYProgress.getPrevious()!;

      setVisible(true);
    }
  });

  const [isvisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    router.push("/");
  };

  const handleLogin = () => {
    router.push("/invest");
  };

  const showLogout = pathname === "/account";
  const showAccount = isAuthenticated && pathname !== "/account";

  return (
    <> 
      <AnimatePresence mode="wait">
        <div className={`justify-around shadow-md transition-transform duration-300 hidden md:flex ${visible ? "translate-y-0" : "-translate-y-full"
          }`}>
          <motion.div
            initial={{
              opacity: 1,
              y: -100,
            }}
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={cn(
              "flex lg:w-[40%] max-w-md  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full  bg-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-6 py-2 items-center justify-between space-x-4",
              className
            )}
          >
            <div className="flex justify-between w-full gap-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative items-center flex space-x-1",
                    pathname === navItem.link
                      ? "text-black bg-white"
                      : "text-white hover:text-muted-foreground"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="text-sm sm:block">{navItem.name}</span>
                </Link>
              ))}

              {/* Disable Login and Account Buttons */}

              {showLogout ? (
                <button
                  onClick={handleLogout}
                  className={cn(
                    "border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] px-4 py-2 rounded-full",
                    "bg-red-100 text-red-800"
                  )}
                >
                  <span>Logout</span>
                  <span className="absolute inset-x-0 w-1/2 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                </button>
              ) : showAccount ? (
                <Link href="/account">
                  <button
                    className={cn(
                      "border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] px-4 py-2 rounded-full text-neutral-500"
                    )}
                  >
                    <span>Account</span>
                    <span className="absolute inset-x-0 w-1/2 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => openModal(
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf18f7Gflteu6WummqG29rETayofKsrxLjaKt0LZQZ0qVim1g/viewform?embedded=true" width="640" height="990" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
                  )}
                  className={cn(
                    "border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] flex items-center justify-center py-2 w-20 h-10 rounded-full text-neutral-500 bg-white"
                  )}
                >
                  <span className="text-black">Invest</span>
                  <span className="absolute inset-x-0 w-1/2 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
      <Modal />
    </>
  );
};