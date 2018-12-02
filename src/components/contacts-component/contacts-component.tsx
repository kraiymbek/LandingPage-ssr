import { Component, Element, Listen, State } from '@stencil/core';

@Component({
  tag: 'contacts-component',
  styleUrl: 'contacts-component.css',
})
export class ContactsComponent {
  @Element() host: HTMLElement;

  @Listen('submitData')
  submitDataHandler(event: CustomEvent) {
    this.submitData.push(event.detail);
  }
  @State() value: string;
  date = new Date();
  @State() submitData = [];
  @State() isResponse = false;
  @State() errors = {
    name: false,
    email: false,
    brand: false,
    phone: false,
  };


  validate(data) {
    console.log(data);
    let name = this.host.querySelector('.form-container')['name'];
    let email = this.host.querySelector('.form-container')['email'];
    let store = this.host.querySelector('.form-container')['store'];
    let phone = this.host.querySelector('.form-container')['phone'];

    if(!data.name) {
      this.errors.name = true;
      name.focus();
    }

    const reEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(!data.email || data.email.match(reEmail)) {
      this.errors.email = true;
      email.focus();
    }

    if(!data.brand) {
      this.errors.brand = true;
      store.focus();
    }

    const rePhone = /^((?!(0))[0-9]{10})$/;
    if(!data.telephone || !data.telephone.match(rePhone)) {
      this.errors.phone = true;
      phone.focus();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let preparedData = {};
    this.submitData.forEach(item => {
      if (item.name === 'store') {
        preparedData['brand'] = item.value ? item.value : '';
      }

      if(item.name === 'name') {
        preparedData['name'] = item.value || '';
      }

      if(item.name === 'email') {
        preparedData['email'] = item.value || '';
      }

      if(item.name === 'phone') {
        let newValue = item.value
            .replace(/-/gi, '')
            .replace('(', '')
            .replace(')', '')
            .replace('+', '')
            .replace(/ /gi, '') || '';
        preparedData['telephone'] = newValue;
      }
    });

    this.validate(preparedData);






    // let form = new FormData();

    // form.append('data', JSON.stringify(preparedData));
    // console.log(form);


    // fetch('https://api.dar.kz/v1/merchants/application', {
    //   method: "POST",
    //   headers: { "Content-Type" : "application/json" },
    //   body: form.get('data'),
    // })
    //     .then((response) => {
    //       if (response) {
    //         this.isResponse = true;
    //         setTimeout(() => {this.isResponse = false;}, 3000);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
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
                                 type="email"
                                 placeholder="Введите ваше email"
                                 err_message={this.errors.email ?"Введите email" : null}></input-field>
                    <input-field name="store"
                                 label="Название магазина"
                                 type="text"
                                 placeholder="Введите название вашего магазина"
                                 err_message={this.errors.brand ? "Введите название магазина" : null}></input-field>
                    <input-field name="phone"
                                 label="Номер телефона"
                                 type="text"
                                 placeholder="+7"
                                 value="+7"
                                 err_message={this.errors.phone ? "Введите номер телефона" : null}
                                 mask={true}
                    ></input-field>
                    {this.isResponse ? <button class='form-btn success-response' disabled type="submit"><img src="/assets/icon/success-response.svg" alt="success"/>Заявка успешно оставлена</button> : <button class='form-btn' type="submit">Оставить Заявку</button>}
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
                    <p>Тел: <a href="callto:87271245678">+7 (702) 112-02-03</a></p>git
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
