/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. (Sebuah platform belanja daring memungkinkan pelanggan membeli beberapa produk dalam satu transaksi.)
 * Every product added to the shopping cart stores the product code, product name, unit price, (    Setiap produk yang dimasukkan ke dalam keranjang belanja menyimpan informasi mengenai kode produk, nama produk, harga satuan,)
 * quantity purchased, and whether the product is eligible for free shipping. (    jumlah yang dibeli, serta apakah produk tersebut memenuhi syarat untuk mendapatkan gratis ongkos kirim.)
 * Today, one customer added the following products to the cart. (Hari ini, seorang pelanggan memasukkan produk-produk berikut ke dalam keranjang.)


| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.(Definisikan tipe yang tepat untuk informasi produk.)
 * 2. Store the product data in a single collection.(Simpan data produk dalam satu koleksi.)
 * 3. Display the product data using console.log.(Tampilkan data produk menggunakan console.log.)
 */

type Product = { // type untuk merekam informasi produk
    productCode: string; // kode produk
    productName: string; // nama produk
    unitPrice: number; // harga satuan produk
    quantityPurchased: number; // jumlah produk yang dibeli
    isFreeShipping: boolean; /// status apakah produk memenuhi syarat untuk mendapatkan gratis ongkos kirim (true jika memenuhi syarat, false jika tidak memenuhi syarat)
};

const shoppingCart: Product[] = [
    { productCode: "KB001", productName: "Mechanical Keyboard", unitPrice: 850000, quantityPurchased: 1, isFreeShipping: true }, // pencatatan data produk pertama
    { productCode: "MS002", productName: "Wireless Mouse", unitPrice: 275000, quantityPurchased: 2, isFreeShipping: true }, // pencatatan data produk kedua
    { productCode: "HD003", productName: "External SSD 1TB", unitPrice: 1650000, quantityPurchased: 1, isFreeShipping: false }, // pencatatan data produk ketiga
    { productCode: "HP004", productName: "Gaming Headset", unitPrice: 720000, quantityPurchased: 1, isFreeShipping: true }, // pencatatan data produk keempat
];
console.log("Shopping Cart Data:", shoppingCart); // menampilkan data produk ke dalam console
