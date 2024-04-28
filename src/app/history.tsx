"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";
import {TableGame} from "@/components/table/table-game";



export function History() {
  const data = [
    { NICKNAME: 'toan***', TIENCUOC: '18,000', TIENNHAN: '34,020', TROCHOI: 'CHANLE2', DACHON: 'TC', KETQUA: 'Thắng', THOIGIAN:'28/04/2024 20:45:22'},
    { NICKNAME: 'Dinh***', TIENCUOC: '45,000', TIENNHAN: '85,050', TROCHOI: 'CHANLE2', DACHON: 'TC', KETQUA: 'Thắng', THOIGIAN:'28/04/2024 20:41:05'},
    { NICKNAME: 'Dinh***', TIENCUOC: '100,000', TIENNHAN: '189,020', TROCHOI: 'CHANLE2', DACHON: 'TC', KETQUA: 'Thắng', THOIGIAN:'28/04/2024 20:36:45'},
    { NICKNAME: 'toan***', TIENCUOC: '100,000', TIENNHAN: '189,020', TROCHOI: 'CHANLE2', DACHON: 'TC', KETQUA: 'Thắng', THOIGIAN:'28/04/2024 20:35:58'},
    { NICKNAME: 'Thanh1***', TIENCUOC: '100,000', TIENNHAN: '189,020', TROCHOI: 'CHANLE2', DACHON: 'TC', KETQUA: 'Thắng', THOIGIAN:'28/04/2024 20:20:15'},
  ];
  const header = [
        { id: "NICKNAME", name: 'NICKNAME' },
        { id: "TIENCUOC", name: 'TIỀN CƯỢC' },
        { id: "TIENNHAN", name: 'TIỀN NHẬN' },
        { id: "TROCHOI", name: 'TRÒ CHƠI' },
        { id: "DACHON", name: 'ĐÃ CHỌN' },
        { id: "KETQUA", name: 'KẾT QUẢ' },
        { id: "THOIGIAN", name: 'THỜI GIAN' },
      ];
  return (
      <div className="lg:px-8 md:px-2 sm:px-1 rounded-xl">
        <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-2 max-w-8xl">
          <div className="w-full rounded-xl" />
          <div className="txt-bank-title bg-[#2E0327] rounded-lg">
            LỊCH SỬ THAM GIA
          </div>
          <div className="rounded-lg txt-bank-content">
            <TableGame header={header} data={data}/>
          </div>
        </div>
      </div>
  );
}
export default History;
