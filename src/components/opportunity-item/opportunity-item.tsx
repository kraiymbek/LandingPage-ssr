import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'opportunity-item',
  styleUrl: 'opportunity-item.css',

})
export class OpportunityItem {

  @Prop() listItem: any;
  descriptionList: any;



  componentDidLoad() {
  }

  render() {
    this.descriptionList = this.listItem.description.map(item => {
      return (
          <li><span>{item}</span></li>
      );
    });
    return (
        <div class="opportunity-item">
          <div class='main-container'>
            <img src={this.listItem.path} alt=""/>
            <div class='item-wrapper'>
              <p class='item-title'>{this.listItem.title}</p>
              <ul class='list'>
                {this.descriptionList}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
