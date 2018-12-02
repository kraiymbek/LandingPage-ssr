import { Component, Prop, Element, EventEmitter, Event } from '@stencil/core';
import IMask from 'imask';


@Component({
  tag: 'input-field',
  styleUrl: 'input-field.css',
})
export class InputField {

  @Element() host: HTMLElement;

  @Event() submitData: EventEmitter;
  submitDataHandler(e) {
    this.submitData.emit({
      name: this.name,
      value: e.target.value,
    });
  }

  @Prop({reflectToAttr: true}) placeholder: string;
  @Prop() label: string;
  @Prop() name: string;
  @Prop() type: string;
  @Prop() err_message: string;
  @Prop() mask: boolean;
  @Prop() value: string;

  phoneMask: IMask;
  maskInputEl: any;


  componentDidLoad() {
    if(this.mask) {
      this.maskInputEl = this.host.querySelector('#input-mask');
      this.maskInputEl.defaultValue = "+7";
      this.phoneMask = new IMask(
          this.maskInputEl, {
            mask: '+{7} (000) 000-00-00'
          });
    }
  }


  render() {
    return (
        <div class="input-field">
          <div class='field-wrap'>
            <label class='form-label'>{this.label}</label>
            <input name={this.name}
                   type={this.type}
                   placeholder={this.placeholder}
                   id={this.mask ? 'input-mask' : null}
                   class={this.err_message ? 'err_input' : null}
                   onBlur={(event) => this.submitDataHandler(event)}
            />
            {this.err_message ? <div class='err_message'>{this.err_message}</div> : null}
          </div>
        </div>
    );
  }
}
