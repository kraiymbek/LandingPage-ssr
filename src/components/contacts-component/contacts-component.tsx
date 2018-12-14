import { Component, Element, Listen, State } from '@stencil/core';
import validator from 'validator';

@Component({
  tag: 'contacts-component',
  styleUrl: 'contacts-component.css',
})
export class ContactsComponent {
  @Element() host: HTMLElement;
  date = new Date();
  @State() submitData = [];
  @State() isResponse = false;
  @State() errors = {
    name: false,
    email: false,
    brand: false,
    telephone: false,
  };
  form: any;

  @State() formIsValid = true;



  componentDidLoad() {
      this.form = this.host.querySelector('.form-container');
  }

  isTelephoneFormat(telephone) {
      const re = /^((?!(0))[0-9]{11})$/g;
    return this.getTelephoneFormat(telephone).match(re);
  }

  getTelephoneFormat(telephone) {
      let newValue = telephone
          .replace(/-/gi, '')
          .replace('(', '')
          .replace(')', '')
          .replace('+', '')
          .replace(/ /gi, '') || '';

      return newValue;
  }

    @Listen('submitData')
    submitDataHandler(event: CustomEvent) {
        if (event.detail.name === 'email') {
            validator.isEmail(event.detail.value) ? this.errors = {...this.errors, email: false} : this.errors = {...this.errors, email: true};
        }

        if (event.detail.name === 'name') {
            event.detail.value.length < 2 ? this.errors = {...this.errors, name: true} : this.errors = {...this.errors, name: false};
        }

        if (event.detail.name === 'brand') {
            event.detail.value.length < 2 ? this.errors = {...this.errors, brand: true} : this.errors = {...this.errors, brand: false};
        }

        if (event.detail.name === 'telephone') {
            this.isTelephoneFormat(event.detail.value) ? this.errors = {...this.errors, telephone: false} : this.errors = {...this.errors, telephone: true};
        }

    }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.errors.telephone && !this.errors.email && !this.errors.brand && !this.errors.name && e.target[2].value && e.target[0].value && e.target[1].value && e.target[3].value) {
        this.formIsValid = true;

        let preparedData = {
            brand : e.target[2].value,
            telephone : this.getTelephoneFormat(e.target[3].value),
            email : e.target[1].value,
            name : e.target[0].value
        };

        fetch('https://api.dar.kz/v1/merchants/application', {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(preparedData),
        })
            .then((response) => {
                if (response) {
                    this.isResponse = true;
                    setTimeout(() => {this.isResponse = false;}, 3000);
                    this.form.reset();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        this.formIsValid = false;
        console.log("form is not valid"); }
    }

  render() {
    return (
        <div class="contacts-component">
          <div class='main-container'>
            <div class='container'>
              <h3 class='section-title'>Хочу работать с ForteKassa</h3>
              <div class='contacts'>
                <div class='contact-form'>
                  <form class='form-container'  onSubmit={(e) => this.handleSubmit(e)}>
                    <input-field name="name"
                                 label="Имя"
                                 type="text"
                                 placeholder="Введите ваше имя"
                                 err_message={this.errors.name ? "Введите имя" : null}></input-field>
                    <input-field name="email"
                                 label="E-mail"
                                 type="text"
                                 placeholder="Введите ваше email"
                                 err_message={this.errors.email ?"Введите email" : null}></input-field>
                    <input-field name="brand"
                                 label="Название магазина"
                                 type="text"
                                 placeholder="Введите название вашего магазина"
                                 err_message={this.errors.brand ? "Введите название магазина" : null}></input-field>
                    <input-field name="telephone"
                                 label="Номер телефона"
                                 type="text"
                                 placeholder="+7"
                                 value="+7"
                                 err_message={this.errors.telephone ? "Введите правильный номер телефона" : null}
                                 mask={true}
                    ></input-field>
                      {this.formIsValid ? null : <div class="err_message">Пожалуйста, заполните все поля!</div>}
                    {this.isResponse ?
                        <button class='form-btn success-response' disabled><img src="/assets/icon/success-response.svg" alt="success"/>Заявка успешно оставлена</button>
                        : <button class='form-btn' type="submit">Оставить Заявку</button> }
                  </form>
                </div>
                <div class='contact-description'>
                  <div class='contact-title'>Контакты</div>
                  <div class='contact-desc-item'>
                    <img src="/assets/icon/contacts-icon/contacts-icon1.svg" alt="Адрес"/>
                    <p class='mb-zero'>050060, Казахстан <br/> г. Алматы, ул. Тажибаевой, 155, <br/> БЦ Pine Office Park</p>
                  </div>
                  <div class='contact-desc-item'>
                    <img src="/assets/icon/contacts-icon/contacts-icon2.svg" alt="Телефон"/>
                    <p>Тел: <a href="callto:87271245678">+7 (702) 112-02-03</a></p>
                  </div>
                  <div class='contact-desc-item'>
                    <img src="/assets/icon/contacts-icon/contacts-icon3.svg" alt="Call center"/>
                    <p>Call-center: <a href="callto:2727">2727 (бесплатный звонок)</a> </p>
                  </div>
                  <div class='copyright'>&copy; ТОО “DAR ecosystem”, {this.date.getFullYear()}</div>
                </div>
              </div>
            </div>
            <div class='footer-bg'></div>
          </div>
        </div>
    );
  }
}
