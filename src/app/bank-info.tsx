"use client";

import React from "react";

export function BankInfo() {
  return (
      <div className="lg:px-8 md:px-2 sm:px-1 rounded-xl">
        <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-2 max-w-8xl">
          <div className="w-full h-full rounded-xl" />
          <div className="txt-bank-title bg-[#2E0327] rounded-lg">
            THÔNG TIN BANK NHẬN
          </div>
          <div className="rounded-lg txt-bank-content">
            Tài khoản nhận tiền: <text>xxxxxxxxxxxxx</text>
          </div>
        </div>
      </div>
  );
}
export default BankInfo;
