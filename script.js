const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
function resetQuiz() {
    // ၁။ ရွေးချယ်ထားသမျှ Radio Button အားလုံးကို ပြန်ဖျက်ရန်
    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    // ၂။ ပေါ်နေတဲ့ ရမှတ် သို့မဟုတ် အဖြေရလဒ်တွေကို ပြန်ဖျက်ရန်
    let resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = '';
    }
}
