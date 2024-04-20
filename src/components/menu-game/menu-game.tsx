import React, {useState} from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

export function MenuGame() {

    const [selectedMenu, setSelectedMenu] = useState(0);
    const [open, setOpen] = useState(false);
    const [className] = useState('py-2.5 px-10 game-menu hover:bg-[#FFC827] hover:cursor-pointer hover:text-[#1f1f23] ')
    const [classNameS] = useState('py-2.5 px-10 game-menu hover:bg-[#FFC827] hover:cursor-pointer hover:text-[#1f1f23] selected')
    const [classNameH] = useState('game-sidebar')
    const [classNameO] = useState('game-sidebar active')
    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        if (open) {
            setOpen(false);
        }
    };
    const handleOpenMenuGame = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    };
    const closeMenu = () => {
        setOpen(false);
    };
    return(
        <div className="menu-game bg-[#2E0327] basis-1/4 lg:mr-3 flex flex-col mb-6">
            <div className="game-header flex flex-row justify-between pr-6 game-menu">
                <div className="py-6 px-10">DANH SÁCH GAME</div>
                <DehazeIcon fontSize="large" className="my-4 icon-game cursor-pointer" onClick={() => handleOpenMenuGame()}/>
            </div>
            <div className={open ? classNameO : classNameH}>
                <div className={'max-w-[300px] relative'}>
                    {open ? (<CloseIcon fontSize="large" className={'absolute close-icon cursor-pointer'} onClick={() => closeMenu()}/>):''}
                    {open ? (<div className="py-6 px-10">DANH SÁCH GAME</div>):''}
                    <div className={selectedMenu == 1 ? classNameS : className} onClick={() => handleMenuClick(1)}>CHẴN LẺ</div>
                    <div className={selectedMenu == 2 ? classNameS : className} onClick={() => handleMenuClick(2)}>TÀI XỈU</div>
                    <div className={selectedMenu == 3 ? classNameS : className} onClick={() => handleMenuClick(3)}>CLTX+2</div>
                    <div className={selectedMenu == 4 ? classNameS : className} onClick={() => handleMenuClick(4)}>GẤP 3</div>
                    <div className={selectedMenu == 5 ? classNameS : className} onClick={() => handleMenuClick(5)}>TỔNG 3 SỐ</div>
                    <div className={selectedMenu == 6 ? classNameS : className} onClick={() => handleMenuClick(6)}>1 PHẦN 3</div>
                    <div className={selectedMenu == 7 ? classNameS : className} onClick={() => handleMenuClick(7)}>XIÊN</div>
                    <div className={selectedMenu == 8 ? classNameS : className} onClick={() => handleMenuClick(8)}>ĐOÁN SỐ</div>
                    <div className={selectedMenu == 9 ? classNameS : className} onClick={() => handleMenuClick(9)}>XÚC XẮC TELEGRAM</div>
                    <div className={selectedMenu == 10 ? classNameS : className} onClick={() => handleMenuClick(10)}>XSMB</div>
                </div>
            </div>
        </div>
    )
}

export default MenuGame;
