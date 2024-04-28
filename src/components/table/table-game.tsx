import Games from "../../app/games";
import "./table-game.css"
import React from "react";
import {Button} from "@mui/material";

export function TableGame({header, data, reduce_rate, noti}) {
    const gradientBackground = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
    };
    return(
        <div className={'table-container'}>
            <table className="w-full">
                <thead>
                    <tr>
                        {header.map(item => (
                            <th className="th-header" key={item.id}>{item.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index1) => {
                    if (index1 % 2 == 0) {
                        return (
                            <tr className={'color-content-odd'} key={item.id}>
                                {header.map((e, index2)=> {
                                    if (e.id === 'NICKNAME') {
                                        return (
                                            <td className={'td-body text-center td-body-text1'} key={index2}>{item[e.id]}</td>
                                        )
                                    }
                                    if (e.id === 'HANG') {
                                        return (
                                            <td className={'td-body text-center'+ (index2==0?' td-body-text1':'')} key={index2}><Button variant="contained" style={gradientBackground}>{item[e.id]}</Button></td>
                                        )
                                    }
                                    if (e.id === 'TIENCUOC' || e.id === 'TIENNHAN' || e.id === 'TONG_CUOC' ) {
                                        return (
                                            <td className={'td-body text-center text-yellow-500'+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                        )
                                    }
                                    if (e.id ==='KETQUA') {
                                        if (item[e.id] === 'Thua') {
                                            return (
                                                <td className={'td-body text-center text-red-500'+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                            )
                                        }
                                        return (
                                            <td className={'td-body text-center text-green-500'+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                        )
                                    } else {
                                        return (
                                            <td className={'td-body text-center'+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                        )
                                    }
                                })}
                            </tr>
                        )
                    }
                    return (
                        <tr className={'color-content-even'} key={item.id}>
                            {header.map((e, index2)=> {
                                if (e.id === 'NICKNAME') {
                                    return (
                                        <td className={'td-body text-center td-body-text1'} key={index2}>{item[e.id]}</td>
                                    )
                                }
                                if (e.id === 'HANG') {
                                    return (
                                        <td className={'td-body text-center'+ (index2==0?' td-body-text1':'')} key={index2}><Button variant="contained" style={gradientBackground}>{item[e.id]}</Button></td>
                                    )
                                }
                                if (e.id === 'TIENCUOC' || e.id === 'TIENNHAN' || e.id === 'TONG_CUOC' ) {
                                    return (
                                        <td className={'td-body text-center text-yellow-500'+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                    )
                                }
                                if (e.id ==='KETQUA') {
                                    if (item[e.id] === 'Thua') {
                                        return (
                                            <td className={'td-body text-center text-red-500'+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                        )
                                    }
                                    return (
                                        <td className={'td-body text-center text-green-500'+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                    )
                                } else {
                                    return (
                                        <td className={'td-body text-center'+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                    )
                                }
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {noti ? (
                <div className={'text-center py-5 text-sm'}>
                    LƯU Ý: COPY NỘI DUNG VÀ CHỈ CHUYỂN KHOẢN VÀO <text className={'text-yellow-500'}>THÔNG TIN BANK</text> BÊN DƯỚI
                </div>
            ):''}
            {
                reduce_rate ? (
                    <div className={'text-center pt-1 text-sm'}>
                        TỶ LỆ CƯỢC GIẢM 0.1 ĐỐI VỚI GIAO DỊCH TỪ 500K TRỞ LÊN
                    </div>
                ) : ''
            }
        </div>
    )
}
export default TableGame;
