"use client";

import React, {useState} from "react";
import {TableGame} from "@/components/table/table-game";
import MenuGame from "@/components/menu-game/menu-game";
import "./css/games.css"
import {Button} from "@mui/material";


export function Games() {
    const [menu, setMenu] = useState(1);
    const header_chan_le = [
        { id: "noi_dung", name: 'Nội dung' },
        { id: "so_cuoi", name: 'Số cuối' },
        { id: "ty_le", name: 'Tỉ lệ' },
    ];
    const data_chan_le = [
        { noi_dung: 'nickname L', so_cuoi: '1 - 3 - 5 - 7', ty_le: 'x2.3 tiền cược' },
        { noi_dung: 'nickname C', so_cuoi: '2 - 4 - 6 - 8', ty_le: 'x2.3 tiền cược' },
    ];

    const header_tai_xiu = [
        { id: "noi_dung", name: 'Nội dung' },
        { id: "so_cuoi", name: 'Số cuối' },
        { id: "ty_le", name: 'Tỉ lệ' },
    ];
    const data_tai_xiu = [
        { noi_dung: 'nickname T', so_cuoi: '5 - 6 - 7 - 8', ty_le: 'x2.3 tiền cược' },
        { noi_dung: 'nickname X', so_cuoi: '1 - 2 - 3 - 4', ty_le: 'x2.3 tiền cược' },
    ];

    const header_cltx = [
        { id: "noi_dung", name: 'Nội dung' },
        { id: "so_cuoi", name: 'Số cuối' },
        { id: "ty_le", name: 'Tỉ lệ' },
    ];
    const data_cltx = [
        { noi_dung: 'nickname TC', so_cuoi: '0 - 2 - 4 - 6 - 8', ty_le: 'x1.9 tiền cược' },
        { noi_dung: 'nickname TL', so_cuoi: '1 - 3 - 5 - 7 - 9', ty_le: 'x1.9 tiền cược' },
        { noi_dung: 'nickname TT', so_cuoi: '5 - 6 - 7 - 8 - 9', ty_le: 'x1.9 tiền cược' },
        { noi_dung: 'nickname TX', so_cuoi: '0 - 1 - 2 - 3 - 4', ty_le: 'x1.9 tiền cược' },
    ];

    const header_gap3 = [
        { id: "noi_dung", name: 'Nội dung' },
        { id: "so_cuoi", name: 'Số cuối' },
        { id: "ty_le", name: 'Tỉ lệ' },
    ];
    const data_gap3 = [
        { noi_dung: 'nickname G3', so_cuoi: '02 - 13 - 17 - 19 - 21 - 29 - 35 - 37 - 47 - 49 - 51 - 54 - 57 - 63 - 64 - 74 - 83 - 91 - 95 - 96', ty_le: 'x3 tiền cược' },
        { noi_dung: 'nickname G3', so_cuoi: '66 - 99', ty_le: 'x4 tiền cược' },
        { noi_dung: 'nickname G3', so_cuoi: '123 - 234 - 456 - 678 - 789', ty_le: 'x5 tiền cược' },
    ];

    const header_tong3 = [
        { id: "noi_dung", name: 'Nội dung' },
        { id: "so_cuoi", name: 'Tổng 3 số cuối' },
        { id: "ty_le", name: 'Tỉ lệ' },
    ];
    const data_tong3 = [
        { noi_dung: 'nickname S', so_cuoi: '7 - 17 - 27', ty_le: 'x2 tiền cược' },
        { noi_dung: 'nickname S', so_cuoi: '8 - 18', ty_le: 'x3 tiền cược' },
        { noi_dung: 'nickname S', so_cuoi: '9 - 19', ty_le: 'x3.5 tiền cược' },
    ];

    const header_1phan3 = [
        { id: "noi_dung", name: 'Nội dung' },
        { id: "so_cuoi", name: 'Số cuối' },
        { id: "ty_le", name: 'Tỉ lệ' },
    ];
    const data_1phan3 = [
        { noi_dung: 'nickname N1', so_cuoi: '1 - 5 - 7', ty_le: 'x2.8 tiền cược' },
        { noi_dung: 'nickname N2', so_cuoi: '2 - 4 - 8', ty_le: 'x2.8 tiền cược' },
        { noi_dung: 'nickname N3', so_cuoi: '3 - 6 - 9', ty_le: 'x2.8 tiền cược' },
    ];

    const header_xien = [
        { id: "noi_dung", name: 'Nội dung' },
        { id: "so_cuoi", name: 'Số cuối' },
        { id: "ty_le", name: 'Tỉ lệ' },
    ];
    const data_xien = [
        { noi_dung: 'nickname CX', so_cuoi: '2 - 4', ty_le: 'x3.3 tiền cược' },
        { noi_dung: 'nickname LT', so_cuoi: '5 - 7', ty_le: 'x3.3 tiền cược' },
        { noi_dung: 'nickname CT', so_cuoi: '6 - 8', ty_le: 'x3.3 tiền cược' },
        { noi_dung: 'nickname LX', so_cuoi: '1 - 3', ty_le: 'x3.3 tiền cược' },
    ];

    const header_doan_so = [
        { id: "noi_dung", name: 'Nội dung' },
        { id: "so_cuoi", name: 'Số cuối' },
        { id: "ty_le", name: 'Tỉ lệ' },
    ];
    const data_doan_so = [
        { noi_dung: 'nickname D0', so_cuoi: '0', ty_le: 'x5tiền cược' },
        { noi_dung: 'nickname D1', so_cuoi: '1', ty_le: 'x7 tiền cược' },
        { noi_dung: 'nickname D2', so_cuoi: '2', ty_le: 'x7 tiền cược' },
        { noi_dung: 'nickname D3', so_cuoi: '3', ty_le: 'x7 tiền cược' },
        { noi_dung: 'nickname D4', so_cuoi: '4', ty_le: 'x7 tiền cược' },
        { noi_dung: 'nickname D5', so_cuoi: '5', ty_le: 'x7 tiền cược' },
        { noi_dung: 'nickname D6', so_cuoi: '6', ty_le: 'x7 tiền cược' },
        { noi_dung: 'nickname D7', so_cuoi: '7', ty_le: 'x7 tiền cược' },
        { noi_dung: 'nickname D8', so_cuoi: '8', ty_le: 'x7 tiền cược' },
        { noi_dung: 'nickname D9', so_cuoi: '9', ty_le: 'x7 tiền cược' },
    ];

    const header_xsmb = [
        { id: "loai", name: 'Loai' },
        { id: "noi_dung", name: 'Nội dung' },
        { id: "so_chon", name: 'Số chọn' },
        { id: "ty_le", name: 'Tỉ lệ' },
    ];
    const data_xsmb = [
        {loai:'Lô', noi_dung: 'nickname XSL (số chọn)', so_chon: '00 -> 99', ty_le: '22K ĂN 80K' },
        {loai:'Đề',  noi_dung: 'nickname XSD (số chọn)', so_chon: '00 -> 99', ty_le: '1K ĂN 80K' },
        {loai:'Xiên 2',  noi_dung: 'nickname XSX (số chọn)', so_chon: '00 -> 99', ty_le: '10K ĂN 100K' },
    ];

    const handleClickFromChild = (value) => {
        setMenu(value);
    };

    return (
    <div className="lg:px-8 rounded-xl md:px-2 sm:px-1">
      <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-10 max-w-8xl">
        <div className="w-full h-full rounded-xl" />
          <div className="flex flex-col lg:flex-row">
              <MenuGame onData={handleClickFromChild}/>
              <div className="content-game bg-[#2E0327] basis-3/4 sm:px-0 lg:px-[20px] sm:py-0 lg:py-[30px] lg:ml-3 rounded-md mb-6">
                  {menu === 1 ? (<TableGame header={header_chan_le} data={data_chan_le} noti={true}/>):''}
                  {menu === 2 ? (<TableGame header={header_tai_xiu} data={data_tai_xiu} noti={true}/>):''}
                  {menu === 3 ? (<TableGame header={header_cltx} data={data_cltx} reduce_rate={true} noti={true}/>):''}
                  {menu === 4 ? (<TableGame header={header_gap3} data={data_gap3} noti={true}/>):''}
                  {menu === 5 ? (<TableGame header={header_tong3} data={data_tong3} noti={true}/>):''}
                  {menu === 6 ? (<TableGame header={header_1phan3} data={data_1phan3} noti={true}/>):''}
                  {menu === 7 ? (<TableGame header={header_xien} data={data_xien} noti={true}/>):''}
                  {menu === 8 ? (<TableGame header={header_doan_so} data={data_doan_so} noti={true}/>):''}
                  {menu === 9 ? (
                      <div className={'text-center py-5 text-base'}>
                          <text>XÚC XẮC TELEGRAM LÀ MỘT TRÒ CHƠI ĐƯỢC PHÁT TRIỂN BỞI TELEGRAM HOÀN TOÀN XANH CHÍN.</text>
                          <text className={'py-5'}>ĐỂ CHƠI XÚC XẮC TELEGRAM BẠN CẦN <text className={'text-yellow-500'}>LIÊN KẾT TELEGRAM</text></text><br/>
                          <Button variant="contained">Chơi ngay</Button>
                      </div>
                  ):''}
                  {menu === 10 ? (<TableGame header={header_xsmb} data={data_xsmb}/>):''}
              </div>
          </div>
      </div>
    </div>
  );
}

export default Games;
