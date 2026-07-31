/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * (Sebuah platform pembelajaran daring memungkinkan siswa mendaftar untuk kursus pemrograman.
 * Setiap pendaftaran menyimpan informasi tentang siswa dan kursus yang dipilih.
 * Informasi siswa mencakup ID siswa, nama lengkap, dan tingkat kelas.
 * Informasi kursus mencakup ID kursus, judul kursus, nama instruktur,
 * dan total jam belajar. Terakhir, pendaftaran juga mencatat tanggal pendaftaran dan apakah pembayaran telah selesai.)
 *  
 * Task:
 * 1. Define a proper type for the registration information.(Definisikan tipe yang tepat untuk informasi pendaftaran.)
 * 2. Implement a type that you defined on 3 registration data.(Implementasikan tipe yang telah Anda definisikan pada 3 data pendaftaran.)
 * 3. Display the registration data using console.log.(Tampilkan data pendaftaran menggunakan console.log.)
 */

type Registration = {
    studentId: string;
    fullName: string;
    gradeLevel: string;
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    isPaymentCompleted: boolean;
};

const registration1: Registration = {
    studentId: "S001",
    fullName: "Alice Johnson",  
    gradeLevel: "Freshman",
    courseId: "C001",
    courseTitle: "Introduction to TypeScript",
    instructorName: "John Doe",
    totalLearningHours: 40,
    registrationDate: "2024-06-01",
    isPaymentCompleted: true,
};

const registration2: Registration = {
    studentId: "S002",
    fullName: "Bob Smith",
    gradeLevel: "Sophomore",
    courseId: "C002",
    courseTitle: "Advanced JavaScript",
    instructorName: "Jane Smith",
    totalLearningHours: 60,
    registrationDate: "2024-06-01",
    isPaymentCompleted: false,
};

const registration3: Registration = {
    studentId: "S003",
    fullName: "Charlie Brown",
    gradeLevel: "Junior",
    courseId: "C003",
    courseTitle: "Web Development Fundamentals",
    instructorName: "Alice Johnson",    
    totalLearningHours: 50,
    registrationDate: "2024-06-01",
    isPaymentCompleted: true,
};

console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);

