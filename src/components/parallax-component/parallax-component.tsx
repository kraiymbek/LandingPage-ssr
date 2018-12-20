import { Component, Element, Prop } from '@stencil/core';
import Rellax from 'rellax';


@Component({
  tag: 'parallax-component',
  styleUrl: 'parallax-component.css',
})
export class ParallaxComponent {

  @Element() host: HTMLElement;
  rellax: Rellax;
  @Prop({ context: 'isServer' }) private isServer: boolean;


    componentDidLoad() {
        if (this.isServer === false) {
            let scene = this.host.querySelectorAll('.rellax');

            this.rellax = new Rellax(scene[1], {
                speed: -2,
                center: false,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: false
            });

            this.rellax = new Rellax(scene[3], {
                speed: -2,
                center: false,
                wrapper: null,
                round: false,
                vertical: true,
                horizontal: false
            });

            this.rellax = new Rellax(scene[2], {
                speed: 1,
                center: false,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: false
            });

            this.rellax = new Rellax(scene[4], {
                speed: 1,
                center: false,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: false
            });

            this.rellax = new Rellax(scene[5], {
                speed: 1,
                center: false,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: false
            });
        }
  }

  render() {
    return (
        <div class="parallax-section">
            <div class='container'>
                <h2 class='title mobile'>Кассовое приложение для продажи и учёта товаров</h2>
                <img src="/assets/header-bg-mobile.png"  class='bg-mobile mobile' alt="header-bg"/>
                <div class='rellax'>
                    <h2 class='title'>Кассовое приложение для продажи и учёта товаров</h2>
                </div>
                <div data-rellax-speed="2" class='rellax'>
                    <img class="little_rec" src="/assets/parallax/little_rec.png" alt=""/>
                    <img class="big_rec" src="/assets/parallax/big_rec.png" alt=""/>
                </div>
                <div  data-rellax-speed="2"  class='rellax rellax-group3'>
                    <img class="img1_group1" src="../../assets/parallax/img1_group1.png" alt=""/>
                    <img class="img3_group2" src="../../assets/parallax/img3_group2.png" alt=""/>
                    <img class="img1_group2" src="../../assets/parallax/img1_group2.png" alt=""/>
                </div>
                <div data-rellax-speed="0.7" class='rellax rellax-group4'>
                    <img class="img2_group1" src="../../assets/parallax/img2_group1.png" alt=""/>
                </div>
                <div data-rellax-speed="1.5" class='rellax rellax-group5'>
                    <img class="img3_group1" src="../../assets/parallax/img3_group1.png" alt=""/>
                </div>
                <div data-rellax-speed="1" class='rellax rellax-group6'>
                    <img class="img2_group2" src="../../assets/parallax/img2_group2.png" alt=""/>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
  }
}
