import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  render() {
    return [
      <div class="page-header">
        <h1>Welcome to Stencil Starter</h1>
      </div>,
      <nav class="page-nav">
        <stencil-route-link url="/">Home</stencil-route-link>
        <stencil-route-link url="/page-1">Page 1</stencil-route-link>
        <stencil-route-link url="/page-2">Page 2</stencil-route-link>
      </nav>,
      <stencil-router>
        <stencil-route url="/" component="home-page" exact={true} />
        <stencil-route url="/page-1" component="page-1" />
        <stencil-route url="/page-2" component="page-2" />
      </stencil-router>
    ];
  }
}