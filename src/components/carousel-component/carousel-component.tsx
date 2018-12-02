import { Component, Element } from '@stencil/core';
import Swiper from 'swiper';



@Component({
  tag: 'carousel-component',
  styleUrl: 'carousel-component.css',
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
  mySwiper: Swiper;
  currentSlide: any;
  // currentSlideItem: any;
  // currentPaginator: any;
  // index: any;

  componentDidLoad() {
    this.swipedTabsSlider = this.slides.querySelector('.swiper-container');
      this.mySwiper = new Swiper(this.swipedTabsSlider, {
          speed: 400,
          effect: 'fade',
          fadeEffect: {
              crossFade: true
          },
      });
      this.mySwiper.on('slideChange', () => {
          this.updateIndicatorPosition();
      });
      this.currentSlide = this.slides.querySelectorAll('.navigation-button');
      this.currentSlide[0].classList.add('segment-button-checked');
      // this.currentPaginator = this.slides.shadowRoot.querySelectorAll('.swiper-pagination-bullet');
    // this.currentSlideItem = this.slides.shadowRoot.querySelectorAll('ion-slide');
    // this.currentSlide[1].classList.add('segment-button-checked');
  }

  updateIndicatorPosition() {
    if (6 > this.mySwiper.activeIndex)
    {
        console.log(this.mySwiper.activeIndex, this.mySwiper.previousIndex );
        this.currentSlide[this.mySwiper.activeIndex].classList.add('segment-button-checked');
        this.currentSlide[this.mySwiper.previousIndex].classList.remove('segment-button-checked');
      // this.currentPaginator[await this.swipedTabsSlider.getActiveIndex()].classList.add('swiper-pagination-bullet-active');
      // this.currentPaginator[await this.swipedTabsSlider.getPreviousIndex()].classList.remove('swiper-pagination-bullet-active');
    }
  }

  selectTab(index) {
    this.mySwiper.slideTo(index, 500);
  }


  segmentButtons = this.sliderInfo.map((item, index) => {
    return(
        <li key={item.tabName}
            onClick={() => {this.selectTab(index)}}
                            class="navigation-button"
        >{item.tabName}</li>
    );
  });

  // paginatorButtons = this.sliderInfo.map((item,index) => {
  //   return(
  //       <span class='swiper-pagination-bullet' key={item.tabName}
  //             onClick={this.selectTab.bind(this,index)}
  //       ></span>
  //   );
  // });

  sliderItem = this.sliderInfo.map(
      item => {
        return(
            <div class="swiper-slide slide">
              <div class='slide-left'>
                <h4 class='slide-title'>{item.tabName}</h4>
                <p class='slide-description'>{item.description}</p>
                <div class='line'></div>
              </div>
              <div class='slide-right'>
                <img src={item.path} alt={item.tabName}/>
              </div>
            </div>
        );
      });


  render() {
    return (
        <div class="carousel">
            <div class='main-container'>
                <div class='container'>
                    <h3 class='section-title'>Функционал ForteKassa</h3>
                    <ul class="navigation-buttons-list">
                        {this.segmentButtons}
                    </ul>
                </div>
                <div class="container">
                    <div class='swiper-container'>
                        <div class="swiper-wrapper">
                            {this.sliderItem}
                        </div>
                    </div>
                </div>
                {/*<div class='swiper-pagination'>*/}
                {/*/!*{this.paginatorButtons}*!/*/}
                {/*</div>*/}
            </div>
        </div>
    );
  }
}
