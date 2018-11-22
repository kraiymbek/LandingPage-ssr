import { Component } from '@stencil/core';


@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
})
export class AppHeader {



  render() {
    return (
        <div class='container'>
          <header>
            <div class='logo'>
              <img src="/assets/icon/logo.svg" alt="ForteMarket"/>
            </div>
            <div class='header-right'>
              <div class='phone'>
                <img class='phone-icon' src="/assets/icon/phone-icon.svg" alt="ForteMarket phone"/>
                <a href='callto:7575'>7575</a>
              </div>
              <div class='btn'><a href="https://kassa.forte.kz" target="_blank">Вход</a></div>
            </div>
          </header>
        </div>
    );
  }
}
