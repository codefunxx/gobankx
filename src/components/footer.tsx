"use client";
import Image from "next/image";
import {Typography, IconButton, Button} from "@material-tailwind/react";
import React from "react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
    return (
        <div className="relative">
            <footer className="bg-gray-900 px-8 pt-20 bg-cover bg-no-repeat bg-center overlay"
                    style={{backgroundImage: `url("./image/bg2.jpg")`}}>
                <div className="container mx-auto relative">
                    <div className="flex flex-wrap justify-center gap-8 md:justify-between">
                        <div className="text-center md:text-left z-10">
                            <Image width={180} height={60} src="./logos/logo.png" alt="metamask" className="logo-img"/>
                        </div>
                        <div className="mt-8 w-full md:mt-0 md:w-auto">
                            <ul className="flex justify-end">
                                <li className="px-2"><a href="#">Contact</a></li>
                                <li className="px-2"><a href="#">Blogs</a></li>
                                <li className="px-2"><a href="#">Terms &amp; Conditions</a></li>
                                <li className="px-2"><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
                        <Typography
                            color="white"
                            className="text-center font-normal opacity-75"
                        >
                            &copy; {CURRENT_YEAR} All Rights Reserved by{" "}
                            <a href="#" target="_blank">
                                GOBANK.CLUB
                            </a>
                        </Typography>

                        <div className="flex gap-2">
                            <IconButton variant="text" color="white">
                                <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
                            </IconButton>
                            <IconButton variant="text" color="white">
                                <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
                            </IconButton>
                            <IconButton variant="text" color="white">
                                <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
                            </IconButton>
                            <IconButton variant="text" color="white">
                                <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
                            </IconButton>
                            <IconButton variant="text" color="white">
                                <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75"></i>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
