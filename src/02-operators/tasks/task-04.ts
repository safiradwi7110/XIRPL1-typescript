/**
 * An online store is processing a customer's shopping cart.(Sebuah toko online sedang memproses keranjang belanja pelanggan.)
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.(Pelanggan menerima diskon 10% jika total pembelian melebihi Rp1.000.000.)
 * - Only Premium members receive free shipping.(Hanya anggota Premium yang menerima pengiriman gratis.)
 * - Every purchased product increases the total item counter.(Setiap produk yang dibeli meningkatkan penghitung item total.)
 * 
 * Additional Information: Current customer is Premium member.(Informasi tambahan: Pelanggan saat ini adalah anggota Premium.)
 * 
 * Task:
 *  - Calculate subtotal.(hitung subtotal)
 *  - Count the total purchased items using an increment operator.(jumlah total item yang dibeli menggunakan operator increment)
 *  - Determine whether a discount should be applied.(tentukan apakah diskon harus diterapkan)
 *  - Calculate the final payment.(hitung pembayaran akhir)

 */

const mechanicalKeyboardPrice: number = 850000;
const wirelessMousePrice: number = 275000;
const mousePadPrice: number = 120000;

const mechanicalKeyboardQuantity: number = 1;
const wirelessMouseQuantity: number = 2;
const mousePadQuantity: number = 1; 

const isPremiumMember: boolean = true;

// Calculate subtotal
const subtotal: number = (mechanicalKeyboardPrice * mechanicalKeyboardQuantity) +
                         (wirelessMousePrice * wirelessMouseQuantity) +
                         (mousePadPrice * mousePadQuantity);

// Count total purchased items
let totalItems: number = 0;
totalItems += mechanicalKeyboardQuantity;
totalItems += wirelessMouseQuantity;
totalItems += mousePadQuantity;

// Determine whether a discount should be applied
const discountThreshold: number = 1000000;
const discountRate: number = 0.10;
const isDiscountApplicable: boolean = subtotal > discountThreshold;

// Calculate final payment
let finalPayment: number = subtotal;
if (isDiscountApplicable) {
    finalPayment -= subtotal * discountRate;
}

console.log("Subtotal:", subtotal);
console.log("Total Items:", totalItems);
console.log("Discount Applicable:", isDiscountApplicable);
console.log("Final Payment:", finalPayment);
