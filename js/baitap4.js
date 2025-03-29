/**
 * Input
 * 
 * Process
 * 
 * Output
 * 
 */

const tinhTienCap = (loaiKH,soKenh, soKetNoi) => {
    let phiXuLy = 0, phiDichVu = 0, thueKenh = 0, tongTien = 0;
    if (loaiKH == "nha-dan") {
        phiXuLy = 4.5;
        phiDichVu = 20.5;
        thueKenh = soKenh * 7.5;
    } else if (loaiKH == "doanh-nghiep") {
        phiXuLy = 15;
        phiDichVu = 75;
        if (soKetNoi > 10) {
            phiDichVu += (soKetNoi - 10) * 5;
        }
        thueKenh = soKenh * 50;
    }
    tongTien = phiXuLy + phiDichVu + thueKenh;
    console.log(tongTien)
    return tongTien

 }

const tienCap = () => { 
    let maKH = document.getElementById("selectMaKH").value
    let loaiKH = document.getElementById("selectLoaiKH").value
    let soKenh = Number(document.getElementById("selectKenhCaoCap").value)
    let soKetNoi = Number(document.getElementById("selectKetNoi").value)

    let tinhTien = tinhTienCap(loaiKH,soKenh, soKetNoi)
    console.log(tinhTien)

    document.getElementById("result4").innerHTML = 
    `Mã khách hàng là: ${maKH} <br>
    Tiền cáp: $${tinhTien.toLocaleString()}`
 }
 document.getElementById("btnBai4").onclick = tienCap