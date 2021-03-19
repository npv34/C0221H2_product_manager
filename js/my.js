let products = [
    ['Nokia', '20000', '30'],
    ['Iphone 12', '30000', '10'],
    ['Iphone 11', '20000', '80'],
]

function displayProducts() {
    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += '<tr>';
        html += '<td>';
        html += i + 1;
        html += '</td>';
        html += '<td>';
        html += products[i][0];
        html += '</td>';
        html += '<td>';
        html += products[i][1];
        html += '</td>';
        html += '<td>';
        html += products[i][2];
        html += '</td>';
        html += '<td>';
        html += '<button onclick="removeProduct(' + i + ')">Remove</button>';
        html += '<button onclick="updateProduct(' + i + ')">Edit</button>';
        html += '</td>';
        html += '</tr>';
    }
    document.getElementById('product-list').innerHTML = html;
}

displayProducts();

function removeProduct(index) {
    if (confirm('Are you sure?')) {
        products.splice(index, 1);
        displayProducts();
    }
}

function addProduct() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let total = document.getElementById('total').value;
    let product = [name, price, total];
    products.push(product);
    displayProducts();
}

function updateProduct(index) {
    let productUpdate = products[index];
    document.getElementById('name').value = productUpdate[0];
    document.getElementById('price').value = productUpdate[1];
    document.getElementById('total').value = productUpdate[2];
    document.getElementById('edit-product').hidden = false
    document.getElementById('add-product').hidden = true
}
