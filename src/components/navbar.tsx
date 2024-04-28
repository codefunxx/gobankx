import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className={`fixed top-0 z-50 border-0 header ${
          isScrolling ? " sticky" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between lg:px-6">
        <Image width={180} height={60} src="./logos/gobank-v.png" alt="metamask" className="logo-img py-[10px] pl-[10px]"/>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-white" : "text-white"
          }`}
        >
          <NavItem>
            <text className="font-bold text-xl">
              Nhiệm vụ ngày
            </text>
          </NavItem>
        </ul>
        <Button
          variant="text"
          color={isScrolling ? "white" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-8 w-8" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-8 w-8" />
          )}
        </Button>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <a href="#">
              <text className="font-bold text-base text-black">
                Nhiệm vụ ngày
              </text>
            </a>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
