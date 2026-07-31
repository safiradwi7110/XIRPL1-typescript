/**
 * A smart home monitors electricity usage every day. (Sebuah rumah pintar memantau penggunaan listrik setiap hari.)
 * Today's information: (Informasi hari ini:)
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules (Peraturan Bisnis)
 * - Electricity usage is calculated from the meter difference. (Penggunaan listrik dihitung dari selisih meteran.)
 * - Houses with solar panels receive a 20% discount. (Rumah dengan panel surya menerima diskon 20%.)
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled. (Rumah menerima diskon tambahan 5% jika Mode Hemat Energi diaktifkan.)
 * - A house qualifies for the Green Energy Program only if: (Rumah memenuhi syarat untuk Program Energi Hijau hanya jika:)
 *      - Solar panel is installed (Panel surya dipasang)
 *      - Energy consumption is below 300 kWh (Penggunaan energi di bawah 300 kWh)
 *      - Energy Saving Mode is enabled (Mode Hemat Energi diaktifkan)
 * 
 * The system must calculate: (sistem harus menghitung:)
 * - Total energy consumption (Total konsumsi energi)
 * - Electricity bill (Tagihan listrik)
 * - Final bill (Tagihan akhir)
 * - Green Energy Program eligibility (Kelayakan Program Energi Hijau)
 */

const previousMeter: number = 25640; // Meteran sebelumnya
const currentMeter: number = 25892; // Meteran saat ini
const electricityPricePerKWh: number = 1650;
const solarPanelInstalled: boolean = true; // Panel surya dipasang
const energySavingMode: boolean = false; // Mode Hemat Energi diaktifkan

const energyConsumption: number = currentMeter - previousMeter; // Menghitung konsumsi energi
const baseElectricityBill: number = energyConsumption * electricityPricePerKWh; // Menghitung tagihan listrik dasar

const solarPanelDiscount: number = solarPanelInstalled ? baseElectricityBill * 0.2 : 0; // Menghitung diskon panel surya jika dipasang
const energySavingDiscount: number = energySavingMode ? baseElectricityBill * 0.05 : 0; // Menghitung diskon Mode Hemat Energi jika diaktifkan
const finalBill: number = baseElectricityBill - solarPanelDiscount - energySavingDiscount; // Menghitung tagihan akhir setelah diskon

const isEligibleForGreenEnergyProgram: boolean =
  solarPanelInstalled && energyConsumption < 300 && energySavingMode;

console.log(`Energy Consumption: ${energyConsumption} kWh`); // Menampilkan konsumsi energi
console.log(`Electricity Bill: Rp${baseElectricityBill.toLocaleString()}`);// Menampilkan tagihan listrik dasar
console.log(`Final Bill: Rp${finalBill.toLocaleString()}`); // Menampilkan tagihan akhir setelah diskon
console.log(`Eligible for Green Energy Program: ${isEligibleForGreenEnergyProgram ? 'Yes' : 'No'}`); // Menampilkan kelayakan Program Energi Hijau
