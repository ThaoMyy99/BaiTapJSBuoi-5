/**
 * Input
 * 
 * process
 * 
 * Output
 * 
 */



const tinhThueThuNhap = (tongThuNhap, phuThuoc) => { 
    let thuNhapChiuThue = tongThuNhap - 4000000 - (phuThuoc*1600000)

    let thueTra = 0
    if(thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000){
        thueTra = thuNhapChiuThue * 0.05
        
    }
    else if(thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000){
        thueTra = thuNhapChiuThue * 0.10
        
    }
    else if(thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000){
        thueTra = thuNhapChiuThue * 0.15
        
    }
    else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000){
        thueTra = thuNhapChiuThue * 0.20
    }
    else if(thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000){
        thueTra = thuNhapChiuThue * 0.25
    }
    else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000){
        thueTra = thuNhapChiuThue * 0.30
    }
    else if(thuNhapChiuThue > 960000000){
        thueTra = thuNhapChiuThue * 0.35
    }
    else{
        alert("Không hợp lệ")
    }
    console.log(thueTra)
    return thueTra
    
 }


const tinhThue = () => { 
    let hoTen = document.getElementById("selectTen3").value
    let tongThuNhap = document.getElementById("selectThuNhap").value
    let phuThuoc = document.getElementById("selectPhuThuoc").value

    let thue = tinhThueThuNhap(tongThuNhap, phuThuoc)
    console.log(thue)
    document.getElementById("result3").innerHTML = 
    `Họ tên: ${hoTen} <br>
    Tiền thuế thu nhập cá nhân: ${thue.toLocaleString()} VND`

 }
 document.getElementById("btnBai3").onclick = tinhThue