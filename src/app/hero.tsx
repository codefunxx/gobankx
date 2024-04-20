"use client";

import Image from "next/image";
import {Button, Typography} from "@material-tailwind/react";


function Hero() {
    return (
        <div className="relative w-full bg-cover bg-no-repeat bg_img"
             style={{backgroundImage: `url("/image/bg2.jpg")`}}>
            <div>
                <header className="grid !min-h-[16rem] px-8">
                    <div
                        className="container mx-auto mt-10 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-1">
                        <div className="col-span-1 z-40 justify-center">
                            <Typography variant="h2" color="white" className="mb-4 text-center">
                                <h1 className="banner-content__title text-[25px]">
                                    GO
                                    <span className="pend">
                    BANK
                  </span>
                                    &nbsp;CỔNG GAME UY TÍN HÀNG ĐẦU VIỆT NAM
                                </h1>
                            </Typography>
                            <Typography
                                variant="lead"
                                className="mb-7 !text-white"
                            >
                                <p className="banner-content__subtitle text-[12px] text-center">
                                    CHẴN LẺ BANK - CHẴN LẺ ZALO - CHẴN LẺ MOMO - TÀI XỈU TELEGRAM - THANH TOÁN 3
                                    GIÂY</p>
                            </Typography>
                        </div>
                    </div>
                </header>
            </div>

        </div>
    );
}

export default Hero;
