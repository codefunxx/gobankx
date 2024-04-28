"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import {TableGame} from "@/components/table/table-game";

export function TopRich() {
  const data = [
    { HANG: 'NO1', NICKNAME: 'MinhDz***', TONG_CUOC: '288,848,484', PHAN_THUONG: '2,000,000'},
    { HANG: 'NO2', NICKNAME: 'Hoang***', TONG_CUOC: '34,619,287', PHAN_THUONG: '1,000,000'},
    { HANG: 'NO3', NICKNAME: 'Thuy***', TONG_CUOC: '30,997,419', PHAN_THUONG: '700,000'},
    { HANG: 'NO4', NICKNAME: 'Dung***', TONG_CUOC: '23,913,375', PHAN_THUONG: '500,000'},
    { HANG: 'NO5', NICKNAME: 'John', TONG_CUOC: '19,434,419', PHAN_THUONG: '300,00'},
  ];
  const header = [
    { id: "HANG", name: 'HẠNG' },
    { id: "NICKNAME", name: 'NICKNAME' },
    { id: "TONG_CUOC", name: 'TỔNG CƯỢC' },
    { id: "PHAN_THUONG", name: 'PHẦN THƯỞNG' },
  ];
  return (
      <div className="lg:px-8 md:px-2 sm:px-1 rounded-xl">
        <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-2 max-w-8xl">
          <div className="w-full h-full rounded-xl" />
          <div className="txt-bank-title bg-[#2E0327] rounded-lg">
            TOP ĐẠI GIA TUẦN
          </div>
          <div className="rounded-lg txt-bank-content">
            <TableGame header={header} data={data}/>
          </div>
        </div>
      </div>
  );
}

export default TopRich;
