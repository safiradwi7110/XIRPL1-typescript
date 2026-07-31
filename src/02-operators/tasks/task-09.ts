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

const mechanicalKeyboardPrice: number = 850000;
const wirelessMousePrice: number = 275000;
const monitorStandPrice: number = 420000;
const mechanicalKeyboardQuantity: number = 1;
const wirelessMouseQuantity: number = 2;
const monitorStandQuantity: number = 1;

const voucherValue: number = 100000;
const isPremiumMember: boolean = true;
const rewardPointRate: number = 50000; // 1 point for every Rp50,000 spent

const productSubtotal: number =
  mechanicalKeyboardPrice * mechanicalKeyboardQuantity +
  wirelessMousePrice * wirelessMouseQuantity +
  monitorStandPrice * monitorStandQuantity;

const membershipDiscount: number = isPremiumMember ? productSubtotal * 0.1 : 0;
const voucherDeduction: number = voucherValue;
const paymentBeforeTax: number = productSubtotal - membershipDiscount - voucherDeduction;
const vat: number = paymentBeforeTax * 0.11;
const finalPayment: number = paymentBeforeTax + vat;

const rewardPoints: number = Math.floor(paymentBeforeTax / rewardPointRate);
const isEligibleForFreeShipping: boolean =
    isPremiumMember || paymentBeforeTax > 1500000;

console.log(`Product Subtotal: Rp${productSubtotal.toLocaleString()}`);
console.log(`Membership Discount: Rp${membershipDiscount.toLocaleString()}`);
console.log(`Voucher Deduction: Rp${voucherDeduction.toLocaleString()}`);
console.log(`Payment Before Tax: Rp${paymentBeforeTax.toLocaleString()}`);
console.log(`VAT: Rp${vat.toLocaleString()}`);
console.log(`Final Payment: Rp${finalPayment.toLocaleString()}`);
console.log(`Reward Points: ${rewardPoints}`);
console.log(`Eligible for Free Shipping: ${isEligibleForFreeShipping ? "Yes" : "No"}`);


