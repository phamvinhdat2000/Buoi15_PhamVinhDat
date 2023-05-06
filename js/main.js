// QUAN LÝ SINH VIÊN 
document.getElementById("tinhDiemTong").onclick = function (event) {
    event.preventDefault();
    var diemchuan = Number(domId("diem_chuan").value);
    var diemThi1 = Number(domId("diem_mon_1").value);
    var diemThi2 = Number(domId("diem_mon_2").value);
    var diemThi3 = Number(domId("diem_mon_3").value);
    var khuVuc = domId("khuVuc").value;
    var loaiDoiTuong = Number(domId("doiTuong").value);
    var ketquaId = domId("tbKetqua");
    var thongBao = "";
    var total = 0;
    total = diemThi1 + diemThi2 + diemThi3;
    switch (khuVuc) {
        case 'A':
            {
                total += 2;
                break;
            }
        case 'B':
            {
                total += 1;
                break;
            }
        case 'C':
            {
                total += 0.5;
                break;
            }
        case 'X':
            {
                total += 0;
                break;
            }
        default:
    }
    switch (loaiDoiTuong) {
        case 1:
            {
                total += 2.5;
                break;
            }
        case 2:
            {
                total += 1.5;
                break;
            }
        case 3:
            {
                total += 1;
                break;
            }
        case 0:
            {
                total += 0;
                break;
            }
        default:
    }
    if (total >= diemchuan && diemThi1 > 0 && diemThi2 > 0 && diemThi3 > 0) {
        thongBao = "Thí sinh đã đậu với kết quả là: " + total;
    } else {
        thongBao = "Thí sinh đã rớt với kết quả là: " + total;
    }
    ketquaId.classList.remove("d-none");
    ketquaId.innerHTML = thongBao;

}

function domId(id) {
    return document.getElementById(id);
}


// TÍNH TIỀN ĐIỆN 
document.getElementById("tinhTien").onclick = function (event) {
    event.preventDefault();
    var soKw = Number(domId("soKw").value);
    var ten = domId("ten").value;
    var ketquaId = domId("tbKetqua2");
    var name = "";
    var tongTien = 0;
    if (soKw <= 50) {
        tongTien = 500 * soKw
    }
    else if (soKw <= 100) {
        tongTien = 500 * 50 + 650 * (soKw - 50);
    }
    else if (soKw <= 200) {
        tongTien = 500 * 50 + 650 * 50 + 850 * (soKw - 100);
    }
    else if (soKw <= 350) {
        tongTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (soKw - 200);
    }
    else {
        tongTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (soKw - 350);
    }
    ketquaId.classList.remove("d-none");
    ketquaId.innerHTML = "Anh/Chị " + ten + " phaỉ trả tiền điện là: " + tongTien.toLocaleString() + " đ";

}


// TÍNH THUẾ THU NHẬP CÁ NHÂN 
document.getElementById("tinhthuethunhap").onclick = function (event) {
    event.preventDefault();
    var thuNhap = Number(domId("thu_nhap").value);
    var hovaten = domId("hovaten").value;
    var ketquaId = domId("tbKetqua3");
    var soNguoiPhuThuoc = domId("nguoiphuthuoc").value;
    var soThue = 0;
    var thunhapthue = thuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    if (thunhapthue <= 60000000) {
        soThue = thunhapthue * 5 / 100
    }
    else if (thunhapthue <= 120000000) {
        soThue = 60000000 * 5 / 100 + (thunhapthue - 60000000) * 10 / 100;
    }
    else if (thunhapthue <= 210000000) {
        soThue = 60000000 * 5 / 100 + 60000000 * 10 / 100 + (thunhapthue - 120000000) * 15 / 100;
    }
    else if (thunhapthue <= 384000000) {
        soThue = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + (thunhapthue - 210000000) * 20 / 100;
    }
    else if (thunhapthue <= 624000000) {
        soThue = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + 174000000 * 20 / 100 + (thunhapthue - 384000000) * 25 / 100;
    }
    else if (thunhapthue <= 960000000) {
        soThue = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + 174000000 * 20 / 100 + 240000000 * 25 / 100 + (thunhapthue - 624000000) * 30 / 100;
    }
    else {
        soThue = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + 174000000 * 20 / 100 + 240000000 * 25 / 100 + 336000000 * 30 / 100 + (thunhapthue - 960000000) * 35 / 100;
    }
    ketquaId.classList.remove("d-none");
    ketquaId.innerHTML = "Anh/chị " + hovaten + " phải trả thuế thu nhập cá nhân là " + soThue.toLocaleString();

}


// TÍNH TIỀN CÁP 
domId("loaiKH").onchange = function () {
    var loaiKh = domId("loaiKH").value;
    var form_ketnoi = domId("form_ketnoi");
    if (loaiKh === "ND") {
        form_ketnoi.classList.add("d-none");
    }
    else {
        form_ketnoi.classList.remove("d-none");
    }
}

document.getElementById("tinhtiencap").onclick = function (event) {
    event.preventDefault();
    var maKh = domId("maKH").value;
    var loaiKh = domId("loaiKH").value;
    var soKetnoi = Number(domId("soketnoi").value);
    var soKenhcaocap = Number(domId("sokenhcaocap").value);
    var ketquaId = domId("tbKetqua4");
    var tienCap = 0;

    switch (loaiKh) {
        case "ND":
            {
                tienCap = 4.5 + 20.5 + 7.5 * soKenhcaocap;
                break;
            }
        case "DN":
            {
                if (soKetnoi > 10) {
                    tienCap = 15 + (75 + (soKetnoi - 10) * 5) + 50 * soKenhcaocap;
                }
                else {
                    tienCap = 15 + (75 / 10 * soKetnoi) + 50 * soKenhcaocap;
                }
            }
    }


    ketquaId.classList.remove("d-none");
    ketquaId.innerHTML = tienCap;

}
