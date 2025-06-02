// Load from localStorage or use default data
let cigarData = JSON.parse(localStorage.getItem('cigarData')) || [
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

// Save data to localStorage
function saveToLocalStorage() {
    localStorage.setItem('cigarData', JSON.stringify(cigarData));
}

// Generate star rating
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

// Render table
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

// Add new cigar
function addNewCigar() {
    const newCigar = {
        name: "New Limited Edition",
        brand: "New Brand",
        productionDate: "2023-01-15",
        quantity: Math.floor(Math.random() * 10) + 1,
        price: Math.floor(Math.random() * 50) + 20,
        rating: parseFloat((Math.random() * 2 + 3).toFixed(1)) // Random 3.0–5.0
    };

    cigarData.unshift(newCigar);
    saveToLocalStorage();
    renderCigarTable();
    updateStats();
}

// Delete cigar
function deleteCigar(index) {
    if (confirm('Are you sure you want to delete this cigar?')) {
        cigarData.splice(index, 1);
        saveToLocalStorage();
        renderCigarTable();
        updateStats();
    }
}

// Edit cigar (demo)
function editCigar(index) {
    if (!cigarData[index]) {
        console.error("Invalid index:", index);
        return;
    }
    console.log("editCigar called", index);
    const cigar = cigarData[index];
    
    // 創建模態容器
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ccc; z-index: 1000;';
    
    // 創建編輯表單
    const form = document.createElement('form');
    form.innerHTML = `
        <h3>Edit Cigar</h3>
        <label>Name: <input type="text" name="name" value="${cigar.name}" required></label><br>
        <label>Brand: <input type="text" name="brand" value="${cigar.brand}" required></label><br>
        <label>Production Date: <input type="date" name="productionDate" value="${cigar.productionDate}" required></label><br>
        <label>Quantity: <input type="number" name="quantity" value="${cigar.quantity}" min="1" required></label><br>
        <label>Price: <input type="number" name="price" value="${cigar.price}" step="0.01" min="0" required></label><br>
        <label>Rating: <input type="number" name="rating" value="${cigar.rating}" step="0.1" min="0" max="5" required></label><br>
        <button type="submit">Save</button>
        <button type="button" id="cancelBtn">Cancel</button>
    `;
    
    // 處理表單提交
    form.onsubmit = (e) => {
        e.preventDefault();
        cigarData[index] = {
            name: form.querySelector('[name="name"]').value,
            brand: form.querySelector('[name="brand"]').value,
            productionDate: form.querySelector('[name="productionDate"]').value,
            quantity: parseInt(form.querySelector('[name="quantity"]').value),
            price: parseFloat(form.querySelector('[name="price"]').value),
            rating: parseFloat(form.querySelector('[name="rating"]').value)
        };
        saveToLocalStorage();
        renderCigarTable();
        updateStats();
        modal.remove();
        alert('Cigar updated successfully!');
    };
    
    // 取消按鈕
    form.querySelector('#cancelBtn').onclick = () => modal.remove();
    
    // 將表單添加到模態
    modal.appendChild(form);
    document.body.appendChild(modal);
}

// Update statistics
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

// Optional: Reset to original data
function resetToDefault() {
    if (confirm('Reset to original cigar data? This will erase all changes.')) {
        localStorage.removeItem('cigarData');
        location.reload();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCigarTable();
    updateStats();

    document.getElementById('addCigarBtn').addEventListener('click', addNewCigar);
});
