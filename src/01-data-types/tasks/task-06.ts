/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.(Definisikan tipe yang tepat untuk informasi produk.)
 * 2. Implement a type that you defined on 3 products data.(Implementasikan tipe yang telah Anda definisikan pada 3 data produk.)
 * 3. Display the product data using console.log.(Tampilkan data produk menggunakan console.log.)
 * 
 * sistem marketplace online yang menjual ribuan produk setiap hari. Agar informasi produk dapat ditampilkan secara lengkap 
 * kepada pelanggan, sistem harus menyimpan beberapa data penting, yaitu kode produk, nama produk, harga jual, jumlah stok,
 * berat produk, rata-rata rating pelanggan, dan status apakah produk sedang mendapatkan diskon atau tidak. Pada soal ini, 
 * kita diminta membuat sebuah type di TypeScript sebagai struktur data produk, kemudian menggunakan type tersebut untuk 
 * membuat data 3 produk, dan terakhir menampilkan data tersebut menggunakan console.log().
 */

type Product = {
    productCode: string;
    productName: string;        
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageCustomerRating: number;
    isDiscounted: boolean;
};

const product1: Product = {
    productCode: "P001",
    productName: "Wireless Mouse",
    sellingPrice: 250000,
    stockQuantity: 50,
    productWeight: 0.2,
    averageCustomerRating: 4.5,
    isDiscounted: true,
};

const product2: Product = {
    productCode: "P002",
    productName: "Gaming Keyboard",
    sellingPrice: 750000,
    stockQuantity: 30,
    productWeight: 1.2,
    averageCustomerRating: 4.7,
    isDiscounted: false,
};

const product3: Product = {
    productCode: "P003",
    productName: "HD Monitor",
    sellingPrice: 1500000,
    stockQuantity: 20,
    productWeight: 3.5,
    averageCustomerRating: 4.8,
    isDiscounted: true,
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);
