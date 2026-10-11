// Case 1: User Data Cleaner (String & Array Interop)

const names = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

// 1. Bersihkan whitespace di awal dan akhir string
const cleanedNames = names.trim();

// 2. Ubah jadi array nama
const namesArray = cleanedNames.split(",");

// 3. Format tiap nama jadi lowercase tanpa spasi liar
const formattedNames = namesArray.map((name) => {
  return name.trim().toLowerCase();
});

// 4. Gabungkan kembali jadi string
const result = formattedNames.join(" | ");

console.log(cleanedNames);
console.log(namesArray);
console.log(formattedNames);
console.log(result);