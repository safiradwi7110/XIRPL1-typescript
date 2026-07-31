/**
 * A hotel calculates a guest's payment based on the following information.(Sebuah hotel menghitung pembayaran tamu berdasarkan informasi berikut.)
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.(Tamu VIP menerima diskon kamar sebesar 12%.)
 * - Tax is calculated after the discount.(Pajak dihitung setelah diskon.)
 * - Service charge is not discounted.(Biaya layanan tidak didiskon.)
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.(Hotel juga menawarkan sarapan gratis jika tamu menginap setidaknya 3 malam atau merupakan anggota VIP.)
 * 
 * The system must calculate:(sistem harus menghitung:)
 * - Room subtotal(subtotal kamar)
 * - Discount(diskon)
 * - Tax(pajak)
 * - Final payment(pembayaran akhir)
 * - Whether the guest is eligible for free breakfast(apakah tamu berhak mendapatkan sarapan gratis)
 */

const roomPricePerNight: number = 650000; // Harga kamar per malam
const nightsStayed: number = 4; //Jumlah malam menginap
const serviceCharge: number = 120000; //Biaya layanan
const taxRate: number = 0.11; // Tarif pajak 11%
const isVipMember: boolean = true; // Status keanggotaan VIP

const roomSubtotal: number = roomPricePerNight * nightsStayed;  // Menghitung subtotal kamar
const discount: number = isVipMember ? roomSubtotal * 0.12 : 0;  // Menghitung diskon jika tamu adalah anggota VIP
const tax: number = (roomSubtotal - discount) * taxRate; // Menghitung pajak setelah diskon
const finalPayment: number = roomSubtotal - discount + tax + serviceCharge; // Menghitung pembayaran akhir dengan menambahkan biaya layanan
const isEligibleForFreeBreakfast: boolean = nightsStayed >= 3 || isVipMember;  // Menentukan apakah tamu berhak mendapatkan sarapan gratis

console.log(`Room Subtotal: Rp${roomSubtotal.toLocaleString()}`); // Menampilkan subtotal kamar
console.log(`Discount: Rp${discount.toLocaleString()}`); // Menampilkan diskon
console.log(`Tax: Rp${tax.toLocaleString()}`); // Menampilkan pajak
console.log(`Final Payment: Rp${finalPayment.toLocaleString()}`); // Menampilkan pembayaran akhir
console.log(`Eligible for Free Breakfast: ${isEligibleForFreeBreakfast ? "Yes" : "No"}`); // Menampilkan apakah tamu berhak mendapatkan sarapan gratis