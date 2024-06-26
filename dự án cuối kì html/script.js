const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display="none"
})
//login-----------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector('#login-form');
    const loginClose = document.querySelector('#login-close');
    const loginForm = document.querySelector('.login');
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const toggleBtn = document.getElementById("toggle-btn");

    let isLogin = true;

    loginBtn.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
    });

    loginClose.addEventListener("click", function() {
        loginForm.style.display = "none";
    });

    toggleBtn.addEventListener("click", function() {
        isLogin = !isLogin;
        formTitle.textContent = isLogin ? "Login" : "Create Account";
        toggleBtn.textContent = isLogin ? "Create Account" : "Login";
    });

    authForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (isLogin) {
            alert(`Logging in with Username: ${username} and Password: ${password}`);
        } else {
            alert(`Creating account with Username: ${username} and Password: ${password}`);
        }
    });
});
//slide-----------------------------------------------------------------------------------------------
let index = 0;
const imgNumber = document.querySelectorAll('.slider-content-left-top img');
const rightBtn = document.querySelector('.fa-chevron-right');

rightBtn.addEventListener("click", function() {
    index = index + 1;
    if (index > imgNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
    });
    
const leftBtn = document.querySelector('.fa-chevron-left');
leftBtn.addEventListener("click", function() {
    index = index - 1;
    if (index < 0) {
        index = imgNumber.length - 1;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
});
//slide1---------------------------------
const imgNuberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNuberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
// slide 2 -----------------------------------------------------------------------------------------------
function imgAuto(){
    index = index +1 
    if (index > imgNumber.length - 1) {
        index = 0;
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
    imgNuberLi[index].classList.add("active")
}
setInterval(imgAuto,5000)
//------------------------------------Bảo hành ---------------------------------------------------------------------
document.getElementById('baohanh-button').addEventListener('click', function() {
    document.getElementById('baohanh-ctn').classList.add('show');
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('baohanh-ctn').classList.remove('show');
});
//slider produccc-------------------------/------------------------------------------------------------------

const rightBtntwo = document.querySelector('.fa-chevron-right-two');
const leftBtntwo = document.querySelector('.fa-chevron-left-two');
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items');
rightBtntwo.addEventListener("click", function() {
    index = index + 1;
    if (index > imgNumbertwo.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
    });
leftBtntwo.addEventListener("click", function() {
    index = index - 1;
    if (index < 0) {
        index = imgNumbertwo.length - 1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
});
//------------Dữ liệu, phát này học căng 5 ngày đm ----------------------------------
//lưu trữ thông tin vào localsto-------------------------------------------------------------------------------------/
const products = [
    { id: 1, name: "Bàn làm việc", img: "image/banlamviec.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin. " },
    { id: 2, name: "Bàn Trà", img: "image/bantra.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin. " },
    { id: 3, name: "Kệ tổ ong", img: "image/ketoong.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin. " },
    { id: 4, name: "Kệ treo tường", img: "image/ketreotuong.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin. " },
    { id: 5, name: "Bàn trang điểm", img: "image/bantrangdiem.png", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 6, name: "Kệ bậc cầu", img: "image/kebacau.png", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 7, name: "Tủ đầu giường", img: "image/tabdaugiuong.png", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 8, name: "Kệ màn hình", img: "image/kemanhinh.png", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 9, name: "Bàn Gaming", img: "image/bangaming.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 11, name: "Tủ Nhà Bếp", img: "image/tunhabep.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 12, name: "Tủ Quần Áo", img: "image/tuquanao.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 13, name: "Kệ Sách Chữ U", img: "image/kechuuoc.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 14, name: "Kệ Tổ Ong", img: "image/ketoongden.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 15, name: "Kệ Sách 3T", img: "image/kesach3t.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 16, name: "Bàn Làm Việc Basic", img: "image/banlamviectrang.png", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 17, name: "Kệ Xương Rồng", img: "image/kexuongrong.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 18, name: "Kệ Sách Lting", img: "image/kechuuvg.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 19, name: "Hộp Vải", img: "image/hopvai.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 20, name: "Bàn Trà Bệt", img: "image/bantrabet.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 5, name: "Bàn Trang Điểm", img: "image/bantrangdiem.png", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 21, name: "Ghế Gỗ", img: "image/ghego.png", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 22, name: "Tab Đầu Giường", img: "image/tabdaugiuong.png", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 10, name: "icon", img: "image/logo3.png", description: "Chúc bạn một ngày vui vẻ " },
    { id: 23, name: "Kệ Ban Công", img: "image/kebancong.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 24, name: "--------------", img: "-------------", description: "-------------" },
    { id: 25, name: "Tab Đầu Giường OC", img: "image/tabdaugiuongoc.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 26, name: "Kệ Xương Rồng Con", img: "image/xuongrongcon.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 27, name: "Tủ Giày Đa Năng", img: "image/tugiay.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 28, name: "Kệ Sách Mini", img: "image/minicocon.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 29, name: "Tủ Giày 4T", img: "image/tugiay4tang.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 30, name: "Bàn Trang Điểm Gương", img: "image/bantrangdiemguong.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 31, name: "Kệ Màn Hình", img: "image/kemaytinh.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 32, name: "Tủ Nhiều Tầng", img: "image/kenhieutang.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 33, name: "Kệ Decord", img: "image/kedecord.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
    { id: 34, name: "Tủ Giày Đa Năng", img: "image/tugiaydanang.jpg", description: "Thông tin sản phẩm: Chất Liệu Gỗ MDF 11mm, Phủ sơn melamin." },
];
localStorage.setItem('products', JSON.stringify(products));
// gắn click cho các ảnh vị trí img a --------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.slider-content-left-top a img, .slider-content-right a img, .slider-product-one-content-item img, .product-gallery-one-content-product-item img');
    productImages.forEach((img, idx) => {
        img.addEventListener('click', function(event) {
            event.preventDefault();
            const products = JSON.parse(localStorage.getItem('products'));
            const product = products[idx];
            showProductDetail(product);
        });
    });
// đóng hình ảnh -------------------------------------------------------------------------------------------------------
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('product-detail').style.display = 'none';
    });
//Thêm vào giỏ hàng ------------------------------------------------------------------------------------------------
    document.getElementById('add-to-cart-btn').addEventListener('click',function(){
        const currentProduct=JSON.parse(localStorage.getItem('currentProduct'));
        addToCart(currentProduct);
        document.getElementById('product-detail').style.display = 'none';
    });
});
// hiện thông tin sp ----------------------------------------------------------------------------------------------
function showProductDetail(product) {
    document.getElementById('detail-img').src = product.img;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-description').textContent = product.description;
    document.getElementById('product-detail').style.display = 'block';
    localStorage.setItem('currentProduct', JSON.stringify(product));
}
//hàm thêm vào giỏ hàng ---------------------------------------------------------------------------------------------
function addToCart(product){
    let cart = JSON.parse(localStorage.getItem('cart'))||[];
    cart.push(product);
    localStorage.setItem('cart',JSON.stringify(cart));
}
//mở giỏ hàng -------------------------------------------------------------------------------------------------------
function mogiohang(){
    window.location.href='giohang.html'
}
//tìm kiếm sản phẩm --------------------------------------------------------------------------------------------------
function searchProduct() {
    let keyword = document.getElementById('searchInput').value.toLowerCase();
    let results = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );
    displayResults(results);
}

function displayResults(results) {
    let searchResultsContainer = document.createElement('div');
    searchResultsContainer.classList.add('search-results-container');
    let searchResultsHeader = document.createElement('div');
    searchResultsHeader.classList.add('search-results-header');
    let searchResultsTitle = document.createElement('h2');
    searchResultsTitle.classList.add('search-results-title');
    searchResultsTitle.innerText = 'Kết quả tìm kiếm';
    let closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerText = 'Đóng';
    closeButton.onclick = function() {
        document.body.removeChild(searchResultsContainer);
    };
    searchResultsHeader.appendChild(searchResultsTitle);
    searchResultsHeader.appendChild(closeButton);
    let searchResults = document.createElement('div');
    searchResults.classList.add('search-results');
    results.forEach(product => {
        let item = document.createElement('div');
        item.classList.add('product-item');
        item.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        searchResults.appendChild(item);
    });
    searchResultsContainer.addEventListener('click', function(event) {
    if (event.target === searchResultsContainer) {
        document.body.removeChild(searchResultsContainer);
    }
});
    searchResults.insertBefore(searchResultsHeader, searchResults.firstChild);
    searchResultsContainer.appendChild(searchResults);
    document.body.appendChild(searchResultsContainer);
}