export default function read() {
  return new Promise((resolve, reject) => {
    // Эмуляция чтения файла
    setTimeout(() => {
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      resolve(data); // Возврат данных в виде строки JSON
    }, 1000);
  });
}