/**
 * A university is selecting students for a full scholarship.(Universitas sedang memilih mahasiswa untuk beasiswa penuh.)
 * A student will receive the scholarship only if all of the following requirements are satisfied:(siswa akan menerima beasiswa hanya jika semua persyaratan berikut terpenuhi:)
 * - GPA is at least 3.75 (skor IPK minimal 3,75)
 * - Family monthly income is less than Rp5,000,000 (pendapatan bulanan keluarga kurang dari Rp5.000.000)
 * - The student has participated in at least 3 competitions(siswa telah mengikuti setidaknya 3 kompetisi)
 * - The student has no disciplinary violations (siswa tidak memiliki catatan pelanggaran disiplin)
 * - The student has completed all administrative documents.(siswa telah melengkapi semua dokumen administrasi)
 * 
 * The admissions office receives the following student information. (Kantor penerimaan menerima informasi mahasiswa berikut.)
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:(Jika mahasiswa memenuhi syarat:)
 *  - Scholarship Amount = Rp12,000,000 (Jumlah Beasiswa = Rp12.000.000)
 * 
 * Otherwise:(Jika tidak:)
 *  - Scholarship Amount = Rp0 (Jumlah Beasiswa = Rp0)
 * 
 * Finally, the system should also calculate how much funding remains if the (Akhirnya, sistem juga harus menghitung berapa banyak dana yang tersisa jika beasiswa diberikan kepada mahasiswa tersebut.)
 * university has a total scholarship budget of Rp500,000,000. (universitas memiliki total anggaran beasiswa sebesar Rp500.000.000.)
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.(Evaluasi setiap persyaratan menggunakan operator perbandingan.)
 * - Combine all conditions using logical operators.(Gabungkan semua kondisi menggunakan operator logika.)
 * - Determine the scholarship amount using the ternary operator.(Tentukan jumlah beasiswa menggunakan operator ternary.)
 * - Calculate the remaining scholarship budget.(Hitung sisa anggaran beasiswa.)
 * - Display whether the student is accepted.(Tampilkan apakah mahasiswa diterima.)
*/

const studentName: string = "Alya Putri"; 
const gpa: number = 3.89; 
const familyIncome: number = 4200000;
const competitionCount: number = 4;
const hasDisciplinaryRecord: boolean = false;
const documentsComplete: boolean = true;

const scholarshipBudget: number = 500000000;

const isEligibleForScholarship: boolean =
    gpa >= 3.75 &&
    familyIncome < 5000000 &&
    competitionCount >= 3 &&
    !hasDisciplinaryRecord &&
    documentsComplete;

const scholarshipAmount: number = isEligibleForScholarship ? 12000000 : 0;
const remainingScholarshipBudget: number = scholarshipBudget - scholarshipAmount;

console.log(`Student Name: ${studentName}`);
console.log(`Eligible for Scholarship: ${isEligibleForScholarship}`);
console.log(`Scholarship Amount: Rp${scholarshipAmount.toLocaleString()}`);
console.log(`Remaining Scholarship Budget: Rp${remainingScholarshipBudget.toLocaleString()}`);

