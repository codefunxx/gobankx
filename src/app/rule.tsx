"use client";

import React from "react";
import "./rule.css"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));
export function Rule() {
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <div className="px-8 rounded-xl">
            <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-2 max-w-8xl">
                <div className="w-full h-full rounded-xl" />
                <div className="txt-bank-title bg-[#2E0327] rounded-lg">
                    LUẬT CHƠI VÀ ĐIỀU KHOẢN
                </div>
                <div className="rounded-lg txt-bank-content text-left">
                    <div className="flex flex-col lg:flex-row sm:flex-col">
                        <div className="menu-game lg:basis-1/2 lg:mr-3 flex flex-col">
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Cách tính kết quả trên GoBank ?
                                </AccordionSummary>
                                <AccordionDetails>
                                    Hệ thông GoBank sử dụng Mã Giao Dịch của bạn để tính kết quả trò
                                    chơi nếu bạn chuyển khoản cùng ngân hàng. Ví dụ bạn sử dụng TCB chuyển
                                    sang TCB, VCB qua VCB, MB qua MB, BIDV qua BIDV, ZaloPay sang ZaloPay,
                                    Momo sang Momo ... Ngoài ra sai nội dung sẽ không được hoàn tiền.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    Chuyển khoản liên ngân hàng ?
                                </AccordionSummary>
                                <AccordionDetails>
                                    GoBank sẽ sử dụng Mã Giao Dịch của bank nhận để tính kết quả trò
                                    chơi nếu bạn Chuyển Khoản liên Ngân Hàng. Tức là tính theo mã giao
                                    dịch của TK trên GoBank. Ngoài ra nội dung khi chuyển khoản liên
                                    ngân hàng có thể bị ngân hàng Gửi/Nhận thêm thắt nội dung. Nội dung sẽ
                                    được tính theo nội dung bên GoBank nhận được. Bạn có thể yêu cầu sao kê
                                    bất cứ lúc nào cần thiết
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    Chuyển khoản VCB sang VCB ?
                                </AccordionSummary>
                                <AccordionDetails>
                                    Riêng đối với các giao dịch chuyển từ VCB qua VCB kết quả sẽ là
                                    số giao dịch (sau khi chuyển khoản, khách hàng vào mục tra cứu/sao kê
                                    > tài khoản > bấm vào giao dịch sẽ thấy số giao dịch)
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                    Chuyển khoản vào đâu ?
                                </AccordionSummary>
                                <AccordionDetails>
                                    Xin lưu ý, chỉ chuyển khoản vào Số TK ở trên trang GOBANK.CLUB,
                                    ngoài ra toàn bộ các Số TK không có trên GoBank là lừa đảo.
                                    Hệ thống GoBank cũng có thể thay đổi bank nhận liên tục.
                                    Trước khi bạn chơi, vui lòng truy cập GOBANK.CLUB để lấy Số TK.
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="content-game lg:basis-1/2 lg:ml-3 rounded-md">
                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    aria-controls="panel5-content"
                                    id="panel5-header"
                                >
                                    Nổ Hũ - Jackpot Miễn Phí ?
                                </AccordionSummary>
                                <AccordionDetails>
                                    GoBank sẽ trích 1% giá trị các giao dịch WIN cho vào Jackpot nhằm
                                    tạo ra cơ hội may mắn cho mọi người có thể sở hữu một số lượng tiền
                                    lớn thông qua việc quay JackPot Miễn Phí.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    aria-controls="panel6-content"
                                    id="panel6-header"
                                >
                                    Lưu ý khi chơi ZaloPay ?
                                </AccordionSummary>
                                <AccordionDetails>
                                    Đối với ZaloPay bạn bắt buộc phải lên GoBank lấy Mã QR để chuyển khoản.
                                    Không được phép Chuyển Tiếp. Đồng thời các giao dịch Zalo từ 0:00 tới
                                    0:05 đều không được tính và sẽ không được hoàn tiền. Bởi vậy vui lòng
                                    không thực hiện giao dịch trong khung thời gian từ phút 58 ngày ôm trước
                                    tới phút 05 ngày hôm sau.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    aria-controls="panel7-content"
                                    id="panel7-header"
                                >
                                    Lưu ý khi chơi Momo ?
                                </AccordionSummary>
                                <AccordionDetails>
                                    Hiện nay Momo khi chuyển khoản đã hiển thị trước Mã Giao Dịch (MGD).
                                    Bởi vậy hệ thống không thể sử dụng MGD của Momo để chơi. Nhưng chúng
                                    tơi sẽ sử dụng Roll thông qua bên thú 3 RANDOM.ORG hoàn toàn uy tín
                                    và xanh chín. Mã quay của giao dịch sẽ được công khai nhằm đảm bảo tính minh bạch.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    aria-controls="panel8-content"
                                    id="panel8-header"
                                >
                                    Điều khoản sử dụng ?
                                </AccordionSummary>
                                <AccordionDetails>
                                    Bạn bắt buộc chấp nhận các luật chơi do GoBank đề ra. Vui lòng KHÔNG
                                    sử dụng GoBank nếu bạn không đồng ý. Mọi hành vi lạm dụng, cheat,
                                    spam ... hệ thống đều có thể khóa, thua hồi, không hoàn trả tiền thắng mà
                                    không cần thông báo trước. Điều khoản có thể được chúng tôi cập nhật mà
                                    không báo trước. Xin cảm ơn.
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Rule;
