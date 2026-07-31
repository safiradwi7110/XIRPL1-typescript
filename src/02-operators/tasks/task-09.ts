/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout. (Sebuah marketplace online ingin menghitung pembayaran akhir dan poin hadiah pelanggan setelah checkout.)
 * The customer purchases the following items: (customer membeli barang-barang berikut:)
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules: (Peraturan Bisnis)
 * - Premium members receive 10% discount.n(Anggota premium menerima diskon 10%.)
 * - Voucher is deducted after the membership discount. (Voucher dikurangi setelah diskon keanggotaan.)
 * - Reward points are calculated from the final payment before tax. (Poin hadiah dihitung dari pembayaran akhir sebelum pajak.)
 * - VAT is 11%. (PPN adalah 11%.)
 * - Free shipping is available if: (Pengiriman gratis tersedia jika:)
 * - Premium member OR (Anggota premium ATAU)
 * - Final payment before tax exceeds Rp1,500,000. (Pembayaran akhir sebelum pajak melebihi Rp1.500.000.)
 * 
 * The checkout system must calculate: (sistem checkout harus menghitung:)
 * - Product subtotal (subtotal produk)
 * - Membership discount (diskon keanggotaan)
 * - Voucher deductionn(potongan voucher)
 * - Payment before tax (pembayaran sebelum pajak)
 * - VAT (pajak pertambahan nilai)
 * - Final payment (pembayaran akhir)
 * - Reward points (poin hadiah)
 * - Free shipping eligibility

 */

const mechanicalKeyboardPrice: number = 850000; // Harga keyboard mekanik
const wirelessMousePrice: number = 275000; // Harga mouse nirkabel
const monitorStandPrice: number = 420000; // Harga dudukan monitor
const mechanicalKeyboardQuantity: number = 1; // Jumlah keyboard mekanik
const wirelessMouseQuantity: number = 2; // Jumlah mouse nirkabel
const monitorStandQuantity: number = 1; // Jumlah dudukan monitor

const voucherValue: number = 100000; // Nilai voucher yang digunakan oleh pelanggan
const isPremiumMember: boolean = true; // Status keanggotaan premium pelanggan
const rewardPointRate: number = 50000; // 1 point for every Rp50,000 spent

const productSubtotal: number = // Subtotal produk
  mechanicalKeyboardPrice * mechanicalKeyboardQuantity + // Subtotal keyboard mekanik
  wirelessMousePrice * wirelessMouseQuantity + // Subtotal mouse nirkabel
  monitorStandPrice * monitorStandQuantity; // Subtotal dudukan monitor

const membershipDiscount: number = isPremiumMember ? productSubtotal * 0.1 : 0; // Diskon keanggotaan jika pelanggan adalah anggota premium
const voucherDeduction: number = voucherValue; // Potongan voucher yang digunakan oleh pelanggan
const paymentBeforeTax: number = productSubtotal - membershipDiscount - voucherDeduction; // Pembayaran sebelum pajak setelah dikurangi diskon keanggotaan dan potongan voucher
const vat: number = paymentBeforeTax * 0.11; // Menghitung PPN sebesar 11% dari pembayaran sebelum pajak
const finalPayment: number = paymentBeforeTax + vat; // Pembayaran akhir setelah ditambahkan PPN

const rewardPoints: number = Math.floor(paymentBeforeTax / rewardPointRate); // Menghitung poin hadiah berdasarkan pembayaran sebelum pajak dan tarif poin hadiah
const isEligibleForFreeShipping: boolean = // Menentukan apakah pelanggan berhak mendapatkan pengiriman gratis
    isPremiumMember || paymentBeforeTax > 1500000; // Pengiriman gratis tersedia jika pelanggan adalah anggota premium atau pembayaran sebelum pajak melebihi Rp1.500.000

console.log(`Product Subtotal: Rp${productSubtotal.toLocaleString()}`); // Menampilkan subtotal produk
console.log(`Membership Discount: Rp${membershipDiscount.toLocaleString()}`); // Menampilkan diskon keanggotaan
console.log(`Voucher Deduction: Rp${voucherDeduction.toLocaleString()}`); // Menampilkan potongan voucher
console.log(`Payment Before Tax: Rp${paymentBeforeTax.toLocaleString()}`);// Menampilkan pembayaran sebelum pajak
console.log(`VAT: Rp${vat.toLocaleString()}`); // Menampilkan PPN
console.log(`Final Payment: Rp${finalPayment.toLocaleString()}`); // Menampilkan pembayaran akhir
console.log(`Reward Points: ${rewardPoints}`); // Menampilkan poin hadiah
console.log(`Eligible for Free Shipping: ${isEligibleForFreeShipping ? "Yes" : "No"}`); // Menampilkan apakah pelanggan berhak mendapatkan pengiriman gratis


