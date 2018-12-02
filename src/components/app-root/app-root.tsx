import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  render() {
    return [
      <div class="page-header">
        <app-header></app-header>
        <parallax-component></parallax-component>
        <opportunity-list></opportunity-list>
        <carousel-component></carousel-component>
        <contacts-component></contacts-component>
      </div>
    ];
  }
}
