/**
 * The school's Smart Greenhouse system automatically records the air temperature every hour from 08:00 until 15:00. (Sistem Greenhouse Pintar sekolah secara otomatis mencatat suhu udara setiap jam dari pukul 08:00 hingga 15:00.)
 * Instead of storing each temperature in a separate variable, the developer wants to store all temperature readings in a  (alih -alih menyimpan setiap suhu dalam variabel terpisah, pengembang ingin menyimpan semua pembacaan suhu dalam)
 * single collection so they can easily calculate the highest, lowest, and average temperature later. (sebuah koleksi tunggal sehingga mereka dapat dengan mudah menghitung suhu tertinggi, terendah, dan rata-rata nanti.)
 * Today, the recorded temperatures are: (Hari ini, suhu yang tercatat adalah:)
 * 
| Time  | Temperature (°C) |
| ----- | ---------------- |
| 08:00 | 24.5             |
| 09:00 | 25.1             |
| 10:00 | 26.8             |
| 11:00 | 28.4             |
| 12:00 | 30.2             |
| 13:00 | 31.1             |
| 14:00 | 30.7             |
| 15:00 | 29.3             |

 * Task:
 * 
 * 1. Define a proper type for the temperature information. (Definisikan tipe yang tepat untuk informasi suhu.)
 * 2. Store the temperature data in a single collection. (Tempatkan data suhu dalam satu koleksi.)
 * 3. Display the temperature data using console.log. (Tampilkan data suhu menggunakan console.log.)
 */

type TemperatureRecord = { // type untuk merekam suhu udara setiap jam
    time: string; // waktu pencatatan suhu udara
    temperature: number; // suhu udara dalam derajat Celsius
};

const temperatureData: TemperatureRecord[] = [ // array untuk menyimpan data suhu udara setiap jam
    { time: "08:00", temperature: 24.5 }, // pencatatan suhu udara pada pukul 08:00
    { time: "09:00", temperature: 25.1 },// pencatatan suhu udara pada pukul 09:00
    { time: "10:00", temperature: 26.8 },// pencatatan suhu udara pada pukul 10:00
    { time: "11:00", temperature: 28.4 },// pencatatan suhu udara pada pukul 11:00
    { time: "12:00", temperature: 30.2 },// pencatatan suhu udara pada pukul 12:00
    { time: "13:00", temperature: 31.1 },// pencatatan suhu udara pada pukul 13:00
    { time: "14:00", temperature: 30.7 },// pencatatan suhu udara pada pukul 14:00
    { time: "15:00", temperature: 29.3 }, // pencatatan suhu udara pada pukul 15:00
];

console.log("Temperature Data:", temperatureData); // menampilkan data suhu udara setiap jam ke dalam console




