import Games from "../games";
import {TopRich} from "@/app";
import React from "react";
import TableGame from "@/components/table/table-game";

export default function NvNgay() {
    const data = [
        { MOCCHOI: '1,000,000', THUONG: '22,222', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '3,000,000', THUONG: '33,333', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '5,000,000', THUONG: '55,555', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '8,000,000', THUONG: '88,888', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '10,000,000', THUONG: '111,111', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '30,000,000', THUONG: '333,333', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '50,000,000', THUONG: '555,555', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '80,000,000', THUONG: '888,888', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '100,000,000', THUONG: '1,111,111', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '200,000,000', THUONG: '2,222,222', TRANGTHAI: 'CHƯA ĐẠT'},
        { MOCCHOI: '500,000,000', THUONG: '6,666,666', TRANGTHAI: 'CHƯA ĐẠT'},
    ];
    const header = [
        { id: "MOCCHOI", name: 'MỐC CHƠI' },
        { id: "THUONG", name: 'THƯỞNG' },
        { id: "TRANGTHAI", name: 'TRẠNG THÁI' },
    ];
    return (
        <div className="lg:px-8 md:px-2 sm:px-1 rounded-xl">
            <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-2 max-w-8xl">
                <div className="w-full h-full rounded-xl" />
                <div className="txt-bank-title bg-[#2E0327] rounded-lg">
                    NHIỆM VỤ HẰNG NGÀY
                </div>
                <div className="rounded-lg txt-bank-content">
                    <TableGame header={header} data={data}/>
                </div>
            </div>
        </div>
    );
}
