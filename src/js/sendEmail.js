export function sendEmail() {
  const sendEmail = function () {
    Email.send({
      SecureToken: 'd1069e52-dcd4-427f-9ea1-f114cc9bc144',
      To: 'meblekp@gmail.com',
      From: 'admin@meblekp.pl',
      Subject: `Nowe zapytanie MebleKP.pl`,
      Body: `Dane: ${document.querySelector('.form__surname').value} ${
        document.querySelector('.form__name').value
      } <br/>
            email: ${document.querySelector('.form__email').value} <br/>
            Telefon: +48${document.querySelector('.form__tel').value} <br/>
            Wiadomość: ${
              document.querySelector('.modal__form__textarea').value
            }`,
    }).then((message) => alert('Wiadomość została wysłana.'))
  }
}
