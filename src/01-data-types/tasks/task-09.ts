/**
 * A programming bootcamp stores information about every participant who registers for the Backend Development class. 
 * Since many students register for the same course, the system stores the participant data as a collection instead of creating separate variables.
 * Today, three students registered for the course.
 *(Sebuah bootcamp pemrograman menyimpan informasi mengenai setiap peserta yang mendaftar untuk kelas Pengembangan Backend.
 *Karena banyak siswa mendaftar untuk kursus yang sama, sistem menyimpan data peserta sebagai sebuah koleksi, bukan membuat variabel-variabel
 *terpisah. Hari ini, tiga siswa mendaftar untuk kursus tersebut.)
 * 
| Student ID | Name           | Age | Has Paid |
| ---------- | -------------- | --- | -------- |
| ST001      | Ahmad Fauzi    | 16  | Yes      |
| ST002      | Siti Nurhaliza | 17  | No       |
| ST003      | Budi Santoso   | 16  | Yes      |


 * Task:
 * 1. Define a proper type for the participant information.(Definisikan tipe yang tepat untuk informasi peserta.)
 * 2. Store the participant data in a single collection.(Simpan data peserta dalam satu koleksi.)
 * 3. Display the participant data using console.log.(Tampilkan data peserta menggunakan console.log.)
 */

type Participant = {
    id: string;
    name: string;
    age: number;
    hasPaid: boolean;
};

const participants: Participant[] = [
    { id: "ST001", name: "Ahmad Fauzi", age: 16, hasPaid: true },
    { id: "ST002", name: "Siti Nurhaliza", age: 17, hasPaid: false },
    { id: "ST003", name: "Budi Santoso", age: 16, hasPaid: true },
];

console.log("Participants Data:", participants);
