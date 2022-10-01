const kullanicilar = [
  {
    email: "abc@test.com",
    sifre: "123456",
  },
  {
    email: "test1@test.com",
    sifre: "test1",
  },
  {
    email: "test2@test.com",
    sifre: "test2",
  },
  {
    email: "test3@test.com",
    sifre: "test3",
  },
];

const myForm = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let sayac = 0; sayac < kullanicilar.length; sayac++) {
    console.log(kullanicilar[sayac]);
    console.log(email.value);
    console.log(password.value);
    if (
      kullanicilar[sayac].email == email.value &&
      kullanicilar[sayac].sifre == password.value
    ) {
      alert("Doğru bilgi girdiniz.");
      return true;
    }
  }
  alert("Yanlış bilgi girdiniz");
});
