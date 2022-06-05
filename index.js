const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (listNama, callback) => {
  let urutan = 1;
  const arrSorter = [];
  for (let counter = 0; counter < callback(listNama).length; counter++) {
    arrSorter.push(urutan++ + ". " + callback(listNama)[counter]);
  }
  return arrSorter;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arrAsc) => {
  const namaAscending = [];
  for (let counter = 0; counter < arrAsc.length; counter++) {
    namaAscending.push(arrAsc[counter]);
  }
  return namaAscending.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arrDsc) => {
  const namaDescending = [];
  for (let counter = 0; counter < arrDsc.length; counter++) {
    namaDescending.push(arrDsc[counter]);
  }
  return namaDescending.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
