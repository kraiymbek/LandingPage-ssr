import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  render() {
    return [
      <stencil-router>
        <stencil-route-switch>
          <stencil-route url="/" component="main-app" exact={true}/>
          <stencil-route url="/checkHealth" component="main-app"/>
        </stencil-route-switch>
        </stencil-router>
    ];

  }
}
