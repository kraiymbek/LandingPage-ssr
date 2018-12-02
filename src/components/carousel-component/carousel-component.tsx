import { Component, Element, Listen } from '@stencil/core';



@Component({
  tag: 'carousel-component',
  styleUrl: 'carousel-component.css',
  shadow: true
})
export class CarouselComponent {

  sliderInfo = [
    {
      tabName: 'Товары',
      path: '/assets/icon/func-icons/func-icon1.png',
      description: 'Поиск и отображение товаров, категорий товаров, возможность группировки избранных товаров'
    },
    {
      tabName: 'Продажи',
      path: '/assets/icon/func-icons/func-icon2.png',
      description: 'Возможность выбора наличного и безналичного способа оплаты, интеграция с эквайрингом Forte Bank'
    },
    {
      tabName: 'Транзакции',
      path: '/assets/icon/func-icons/func-icon3.png',
      description: 'Просмотр всех операций продаж с возможностью фильтрации данных, а также возврат товаров на кассе'
    },
    {
      tabName: 'Настройки',
      path: '/assets/icon/func-icons/func-icon4.png',
      description: 'Возможность подключения дополнительного оборудования: сканера штрих-кода, принтера, электронных весов и денежного ящика'
    },
    {
      tabName: 'Смена',
      path: '/assets/icon/func-icons/func-icon6.png',
      description: 'Возможность открытия и закрытия смены, формирование X- и Z-отчётов, возможность изъятия и внесения денег на кассе'
    },
    {
      tabName: 'Отчеты',
      path: '/assets/icon/func-icons/func-icon5.png',
      description: 'Возможность формирования отчётов по продажам, по прибыли, по возвратам, по остаткам товаров и внесениям/изъятиям денег с кассы в личном кабинете'
    }
  ];




  @Element() slides: HTMLElement;
  swipedTabsSlider: any;
  currentSlide: any;
  currentSlideItem: any;
  currentPaginator: any;
  index: any;
  options = {
    initialSlide: 1,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fade : {
      crossFade: true,
    },
  };

  @Listen('ionSlideWillChange')
  onSlideWillChange() {
    try{
      this.updateIndicatorPosition();

    } catch(e){
      console.log("onSlideChanged ex", e)
    }
  }

  @Listen('ionSlideDidChange')
  onSlideDidChange () {
    try {
      this.updateIndicatorPosition();
    } catch(e){
      console.log("onSlideChanged ex", e)
    }

  }

  componentDidLoad() {
    this.swipedTabsSlider = this.slides.shadowRoot.querySelector('ion-slides');
    this.currentSlide = this.slides.shadowRoot.querySelectorAll('ion-segment-button');
    this.currentPaginator = this.slides.shadowRoot.querySelectorAll('.swiper-pagination-bullet');
    this.currentSlideItem = this.slides.shadowRoot.querySelectorAll('ion-slide');
    this.currentSlide[1].classList.add('segment-button-checked');
    this.setOpacity();
  }

  async setOpacity() {
    for(let i = 0; 6 > i; i++) {
      if(await this.swipedTabsSlider.getActiveIndex() !== i) {
        this.currentSlideItem[i].style.opacity = 0;
        this.currentSlideItem[i].style.transitionDuration = 0;
      }
    }
  }

  async updateIndicatorPosition() {
    if (6 > await this.swipedTabsSlider.getActiveIndex())
    {
      this.currentSlide[await this.swipedTabsSlider.getActiveIndex()].classList.add('segment-button-checked');
      this.currentSlide[await this.swipedTabsSlider.getPreviousIndex()].classList.remove('segment-button-checked');
      this.currentPaginator[await this.swipedTabsSlider.getActiveIndex()].classList.add('swiper-pagination-bullet-active');
      this.currentPaginator[await this.swipedTabsSlider.getPreviousIndex()].classList.remove('swiper-pagination-bullet-active');
    }
  }

  async selectTab(index) {
    this.swipedTabsSlider.slideTo(index, 500);
  }


  segmentButtons = this.sliderInfo.map((item,index) => {
    return(
        <ion-segment-button key={item.tabName}
                            onClick={this.selectTab.bind(this,index)}
                            class="tab-button"
        >{item.tabName}</ion-segment-button>
    );
  });

  paginatorButtons = this.sliderInfo.map((item,index) => {
    return(
        <span class='swiper-pagination-bullet' key={item.tabName}
              onClick={this.selectTab.bind(this,index)}
        ></span>
    );
  });

  sliderItem = this.sliderInfo.map(
      item => {
        return(
            <ion-slide data-swiper-autoplay="3000" class='slide'>
              <div class='slide-left'>
                <h4 class='slide-title'>{item.tabName}</h4>
                <p class='slide-description'>{item.description}</p>
                <div class='line'></div>
              </div>
              <div class='slide-right'>
                <img src={item.path} alt={item.tabName}/>
              </div>
            </ion-slide>
        );
      });

  desktopButtons = (<ion-segment  class="swiped-tab">
    {this.segmentButtons}
  </ion-segment>);




  render() {
    return (
        <div class='main-container'>
          <div class='container'>
            <h3 class='section-title'>Функционал ForteKassa</h3>
            {this.desktopButtons}
          </div>
          <div class='container'>
            <ion-slides options={this.options} pager={true} >
              {this.sliderItem}
            </ion-slides>
          </div>
          <div class='swiper-pagination'>
            {this.paginatorButtons}
          </div>
        </div>

    );
  }
}
