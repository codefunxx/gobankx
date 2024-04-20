"use client";

import React from "react";
import {TableGame} from "@/components/table/table-game";
import MenuGame from "@/components/menu-game/menu-game";
import "./css/games.css"


export function Games() {
    const data = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        // Thêm các dữ liệu khác nếu cần
    ];
    const header = [
        { id: "id", name: 'id' },
        { id: "name", name: 'name' },
        { id: "age", name: 'age' },
        // Thêm các dữ liệu khác nếu cần
    ];
  return (
    <div className="px-8 rounded-xl">
      <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-10 max-w-8xl">
        <div className="w-full h-full rounded-xl" />
          <div className="flex flex-col lg:flex-row">
              <MenuGame/>
              <div className="content-game bg-[#2E0327] basis-3/4 px-[20px] py-[30px] lg:ml-3 rounded-md mb-6">
                  <TableGame header={header} data={data}/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Games;
