/**
 * An internet café charges customers Rp8,000 per hour. (Sebuah warnet mengenakan biaya Rp8.000 per jam.)
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount. (Jika total waktu bermain melebihi 5 jam, mereka menerima diskon 15%.)
 * Today, a customer used a computer for: (hari ini, seorang pelanggan menggunakan komputer selama:)
 * 7 hours and 35 minutes (7 jam dan 35 menit)
 * 
 * 
 * You need to determine: (Anda perlu menentukan:)
 * - Total playing time in minutes (Total waktu bermain dalam menit)
 * - Remaining minutes after full hours (Menit tersisa setelah jam penuh)
 * - Total billed hours (Total jam yang dikenakan biaya)
 * - Total payment before discount (Total pembayaran sebelum diskon)
 * - Discount amount (Jumlah diskon)
 * - Final payment (Pembayaran akhir)
 */

const hourlyRate: number = 8000; // Sebuah warnet mengenakan biaya Rp8.000 per jam.
const totalHours: number = 7; // 7 jam
const totalMinutes: number = 35; // 35 menit

const totalPlayingTimeInMinutes: number = totalHours * 60 + totalMinutes; // Menghitung total waktu bermain dalam menit
const remainingMinutes: number = totalPlayingTimeInMinutes % 60; // Menghitung sisa menit setelah jam penuh
const totalBilledHours: number = Math.ceil(totalPlayingTimeInMinutes / 60); // Menghitung total jam yang dikenakan biaya (dibulatkan ke atas)
const totalPaymentBeforeDiscount: number = totalBilledHours * hourlyRate; // Menghitung total pembayaran sebelum diskon

const discountRate: number = 0.15; // Jika total waktu bermain melebihi 5 jam, mereka menerima diskon 15%.
const discountAmount: number = totalBilledHours > 5 ? totalPaymentBeforeDiscount * discountRate : 0; // Menghitung jumlah diskon jika total jam yang dikenakan biaya melebihi 5 jam
const finalPayment: number = totalPaymentBeforeDiscount - discountAmount; // Menghitung pembayaran akhir setelah dikurangi diskon

console.log(`Total Playing Time: ${totalPlayingTimeInMinutes} minutes`); // Menampilkan total waktu bermain dalam menit
console.log(`Remaining Minutes: ${remainingMinutes} minutes`); // Menampilkan sisa menit setelah jam penuh
console.log(`Total Billed Hours: ${totalBilledHours} hours`); // Menampilkan total jam yang dikenakan biaya
console.log(`Total Payment Before Discount: Rp${totalPaymentBeforeDiscount.toLocaleString()}`); // Menampilkan total pembayaran sebelum diskon
console.log(`Discount Amount: Rp${discountAmount.toLocaleString()}`); // Menampilkan jumlah diskon
console.log(`Final Payment: Rp${finalPayment.toLocaleString()}`); // Menampilkan pembayaran akhir setelah dikurangi diskon
