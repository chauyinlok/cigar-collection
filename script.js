// 雪茄数据
const cigarData = [
    {
        name: "Cohiba Siglo VI",
        brand: "Cohiba",
        productionDate: "2021-05-12",
        quantity: 12,
        price: 35,
        rating: 5
    },
    {
        name: "Montecristo No.2",
        brand: "Montecristo",
        productionDate: "2020-11-03",
        quantity: 8,
        price: 28,
        rating: 4
    },
    {
        name: "Partagas Serie D No.4",
        brand: "Partagas",
        productionDate: "2019-08-17",
        quantity: 15,
        price: 22,
        rating: 4.5
    },
    {
        name: "Romeo y Julieta Churchill",
        brand: "Romeo y Julieta",
        productionDate: "2022-02-28",
        quantity: 10,
        price: 32,
        rating: 4
    },
    {
        name: "Hoyo de Monterrey Epicure No.2",
        brand: "Hoyo de Monterrey",
        productionDate: "2021-07-15",
        quantity: 5,
        price: 25,
        rating: 5
    },
    {
        name: "Trinidad Fundadores",
        brand: "Trinidad",
        productionDate: "2018-12-05",
        quantity: 3,
        price: 45,
        rating: 4.5
    },
    {
        name: "Bolivar Belicoso Fino",
        brand: "Bolivar",
        productionDate: "2020-04-22",
        quantity: 7,
        price: 23,
        rating: 3
    },
    {
        name: "Davidoff Winston Churchill",
        brand: "Davidoff",
        productionDate: "2022-09-10",
        quantity: 6,
        price: 38,
        rating: 4.5
    }
];

// 生成星级评分HTML
function generateRatingStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }

    return starsHtml;
}

// 渲染表格
function renderCigarTable() {
    const tableBody = document.getElementById('cigarTableBody');
    tableBody.innerHTML = '';

    cigarData.forEach((cigar, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cigar.name}</td>
            <td>${cigar.brand}</td>
            <td>${cigar.productionDate}</td>
            <td>${cigar.quantity}</td>
            <td class="price">$${cigar.price}</td>
            <td class="favorite">${generateRatingStars(cigar.rating)}</td>
            <td class="actions">
                <button class="btn btn-edit" onclick="editCigar(${index})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-delete" onclick="deleteCigar(${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// 删除雪茄
function deleteCigar(index) {
    if (confirm('Are you sure you want to delete this cigar?')) {
        cigarData.splice(index, 1);
        renderCigarTable();
        updateStats();
    }
}

// 编辑雪茄（演示功能）
function editCigar(index) {
    const cigar = cigarData[index];
    alert(`Editing cigar: ${cigar.name}\nBrand: ${cigar.brand}\nThis feature is under development.`);
}

// 添加新雪茄
function addNewCigar() {
    const newCigar = {
        name: "New Limited Edition",
        brand: "New Brand",
        productionDate: "2023-01-15",
        quantity: Math.floor(Math.random() * 10) + 1,
        price: Math.floor(Math.random() * 50) + 20,
        rating: parseFloat((Math.random() * 2 + 3).toFixed(1))
    };

    cigarData.unshift(newCigar);
    renderCigarTable();
    updateStats();
}

// 更新统计数据
function updateStats() {
    const totalCigars = cigarData.reduce((sum, cigar) => sum + cigar.quantity, 0);
    const uniqueBrands = new Set(cigarData.map(cigar => cigar.brand)).size;
    const totalValue = cigarData.reduce((sum, cigar) => sum + (cigar.price * cigar.quantity), 0);
    const avgRating = (cigarData.reduce((sum, cigar) => sum + cigar.rating, 0) / cigarData.length).toFixed(1);

    document.querySelectorAll('.stat-card')[0].querySelector('.stat-value').textContent = totalCigars;
    document.querySelectorAll('.stat-card')[1].querySelector('.stat-value').textContent = uniqueBrands;
    document.querySelectorAll('.stat-card')[2].querySelector('.stat-value').textContent = avgRating;
    document.querySelectorAll('.stat-card')[3].querySelector('.stat-value').textContent = `$${totalValue.toLocaleString()}`;
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderCigarTable();
    updateStats();
    document.getElementById('addCigarBtn').addEventListener('click', addNewCigar);
});
