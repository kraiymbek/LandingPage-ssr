import { Component } from '@stencil/core';


@Component({
  tag: 'main-app',
  styleUrl: 'main-app.css'
})
export class MainApp {

  render() {
    return (
        <div class="page-header">
          <app-header></app-header>
          <parallax-component></parallax-component>
          <opportunity-list></opportunity-list>
          <carousel-component></carousel-component>
          <contacts-component></contacts-component>
        </div>
    );
  }
}
