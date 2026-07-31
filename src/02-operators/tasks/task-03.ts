/**
 * A company pays employees based on their monthly salary and overtime hours.(Sebuah perusahaan membayar karyawan berdasarkan gaji bulanan dan jam lembur mereka.)
 * Employee Information:(Informasi Karyawan)
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:(Perusahaan memiliki kebijakan berikut:)
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.(Karyawan yang bekerja lebih dari 10 jam lembur akan menerima bonus kinerja tambahan sebesar Rp300.000.)
 * Otherwise, no bonus is given.(Jika tidak, tidak ada bonus yang diberikan.)
 * You need to calculatea and display:(Anda perlu menghitung dan menampilkan:)
 * - Overtime pay (Gaji lembur)
 * - Bonus (Bonus kinerja)
 * - Final salary (Gaji akhir)
 */


const employeeName: string = "Dimas";
const basicSalary: number = 5000000;
const overtimeHours: number = 12;
const overtimeRate: number = 50000; 

const overtimePay: number = overtimeHours * overtimeRate;
const bonus: number = overtimeHours > 10 ? 300000 : 0;
const finalSalary: number = basicSalary + overtimePay + bonus;

console.log(`Employee: ${employeeName}`);
console.log(`Overtime Pay: Rp${overtimePay.toLocaleString()}`);
console.log(`Bonus: Rp${bonus.toLocaleString()}`);
console.log(`Final Salary: Rp${finalSalary.toLocaleString()}`);
