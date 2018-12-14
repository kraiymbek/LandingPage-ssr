import { Component } from '@stencil/core';


@Component({
  tag: 'opportunity-list',
  styleUrl: 'opportunity-list.css',
})
export class OpportunityList {

  items = [
    {
      path: '/assets/icon/opp1.svg',
      title: 'Три в одном',
      description: [
        'Кассовое приложение',
        'Принтер чеков',
        'POS-терминал'
      ],
    },
    {
      path: '/assets/icon/opp2.svg',
      title: 'Управление продажами',
      description: [
        'Добавляйте свои товары из сформированной базы товаров и фиксируйте продажи в кассовом приложении',
      ],
    },
    {
      path: '/assets/icon/opp3.svg',
      title: 'Личный кабинет',
      description: [
        'Управляйте всеми магазинами, кассирами и продажами удаленно на компьютере или телефоне',
      ],
    },
    {
      path: '/assets/icon/opp4.svg',
      title: 'Режим работы приложения',
      description: [
        'Продавайте товары при отсутствии Интернет-соединения и даже при отсутствии электричества',
      ],
    },
  ];

  transformedItems = this.items.map((item, index) => {
    return (
        <opportunity-item
            key={index}
            listItem={item}
        ></opportunity-item>
    );
  });

  render() {
    return (
        <div class="opportunity-list-section">
          <div class='container'>
            <h3 class='section-title'>Возможности ForteKassa</h3>
            <div class='section-descr'>
              {this.transformedItems}
            </div>
          </div>
        </div>
    );
  }
}
