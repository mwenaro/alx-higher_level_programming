//
const btnTranslate = document.querySelector('INPUT#btn_translate');
const languageCode = document.querySelector('INPUT#language_code');
const helloDiv = document.querySelector('DIV#hello');

btnTranslate.addEventListener('click', () => {
  // Get the language code
  const code = languageCode.value;
  fetch(`https://stefanbohacek.com/hellosalut/?lang=${code}`)
    .then((res) => res.json())
    .then(({ hello }) => {
      helloDiv.innerHTML = hello;
    })
    .catch((err) => console.log(' Something went wrong, ' + err));
});

// on Enter
languageCode.addEventListener('keydown', (e) => {
  if (['Enter', 'NampadEnter'].includes(e.code)) {
    // Get the language code
    const lanCode = languageCode.value;
    fetch(`https://stefanbohacek.com/hellosalut/?lang=${lanCode}`)
      .then((res) => res.json())
      .then(({ hello }) => {
        helloDiv.innerHTML = hello;
      })
      .catch((err) => console.log(' Something went wrong, ' + err));
  }
});
