/**
 * IPO
 * 
 * Input: hoTen, soKW
 * 
 * Process:
 * B1: Lấy giá trị từ form
 * B2: Tính số kw
 *  +sumTienDien = 
 * 
 * Output: tinhTienDien
 */

const KW_50_DAU = 500
const KW_50_KE = 650
const KW_100_KE = 850
const KW_150_KE = 1100
const KW_CONLAI = 1300


const kiemTraTienDien = (sokw, kw50dau, kw50ke,kw100ke, kw150ke, kwconlai) => { 
    let tienDien = 0
    if(sokw > 0 && sokw <= 50){
        tienDien = sokw * kw50dau
    }
    else if(sokw > 50 && sokw <= 100){
        tienDien = (50*kw50dau) + (sokw-50)*kw50ke
    }
    else if(sokw > 100 && sokw <= 200){
        tienDien = (50*kw50dau) + 50*kw50ke + (sokw-100)*kw100ke
    }
    else if(sokw > 200 && sokw <= 350){
        tienDien = (50*kw50dau) + 50*kw50ke + 100*kw100ke + (sokw-200)*kw150ke
    }
    else if(sokw > 350){
        tienDien = (50*kw50dau) + 50*kw50ke + 100*kw100ke + 150*kw150ke + (sokw-350)*kwconlai
    }
    else{
        alert("Số kw không hợp lệ")
    }
    console.log(tienDien)
    return tienDien
 }

const tinhTongTienDien = () => { 
    let hoTen = document.getElementById("selectTen").value
    let soKW = document.getElementById("selectSoKW").value
    let tien = kiemTraTienDien(soKW,KW_50_DAU,KW_50_KE,KW_100_KE,KW_150_KE,KW_CONLAI)

    console.log(tien)
    document.getElementById("result2").innerHTML =  `Họ tên: ${hoTen} <br> Tiền điện: ${tien.toLocaleString()}`
 }
 document.getElementById("btnBai2").onclick = tinhTongTienDien