export default function json(data) {
  return new Promise((resolve, reject) => {
    // Эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(JSON.parse(data)); // Преобразование строки JSON в объект
    }, 500);
  });
}