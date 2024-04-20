"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import {TableGame} from "@/components/table/table-game";

export function TopRich() {
  const data = [
    { NICKNAME: 1, TIENCUOC: 'John', TIENNHAN: 30, TROCHOI: 1, DACHON: 1, KETQUA: 1, THOIGIAN:1},
    { NICKNAME: 1, TIENCUOC: 'John', TIENNHAN: 30, TROCHOI: 1, DACHON: 1, KETQUA: 1, THOIGIAN:1},
    { NICKNAME: 1, TIENCUOC: 'John', TIENNHAN: 30, TROCHOI: 1, DACHON: 1, KETQUA: 1, THOIGIAN:1},
    { NICKNAME: 1, TIENCUOC: 'John', TIENNHAN: 30, TROCHOI: 1, DACHON: 1, KETQUA: 1, THOIGIAN:1},
    { NICKNAME: 1, TIENCUOC: 'John', TIENNHAN: 30, TROCHOI: 1, DACHON: 1, KETQUA: 1, THOIGIAN:1},
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
      <div className="px-8 rounded-xl">
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
