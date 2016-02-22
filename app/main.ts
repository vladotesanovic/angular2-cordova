import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES} from "ng-semantic/semantic";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    styles: [".ui.container { margin-top: 7em; }"],
    selector: 'app',
    template: `<sm-menu title="Labeled Icon" class="ui fluid three item labeled icon menu inverted blue fixed">
        <a sm-item icon="gamepad" class="item">Games</a>
        <a sm-item icon="video camera" class="item">Chanel</a>
        <a sm-item icon="video play" class="item">Videos</a>    
    </sm-menu>
    
    <div class="ui container">
        <sm-segment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit erat eu purus varius, sed dictum justo gravida.
            Aliquam a lobortis massa, non faucibus dolor. Phasellus laoreet sit amet augue sed imperdiet. 
            Donec lobortis, nisl ut tincidunt faucibus, sapien libero posuere metus, non dignissim nisi dui et eros. 
            In efficitur augue vel maximus dapibus. Morbi elementum ante non risus aliquet hendrerit. Nunc ac leo urna. 
            Mauris leo justo, laoreet id erat vitae, lobortis dapibus quam.
        </sm-segment>
        <br/>
        <sm-segment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit erat eu purus varius, sed dictum justo gravida.
            Aliquam a lobortis massa, non faucibus dolor. Phasellus laoreet sit amet augue sed imperdiet. 
            Donec lobortis, nisl ut tincidunt faucibus, sapien libero posuere metus, non dignissim nisi dui et eros. 
            In efficitur augue vel maximus dapibus. Morbi elementum ante non risus aliquet hendrerit. Nunc ac leo urna. 
            Mauris leo justo, laoreet id erat vitae, lobortis dapibus quam.
        </sm-segment>
        <br/>
        <sm-segment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit erat eu purus varius, sed dictum justo gravida.
            Aliquam a lobortis massa, non faucibus dolor. Phasellus laoreet sit amet augue sed imperdiet. 
            Donec lobortis, nisl ut tincidunt faucibus, sapien libero posuere metus, non dignissim nisi dui et eros. 
            In efficitur augue vel maximus dapibus. Morbi elementum ante non risus aliquet hendrerit. Nunc ac leo urna. 
            Mauris leo justo, laoreet id erat vitae, lobortis dapibus quam.
        </sm-segment>
    </div>
    
    <sm-menu title="Labeled Icon" class="ui fluid three item labeled icon menu inverted grey basic bottom fixed">
        <a sm-item icon="home" class="item">Home</a>
        <a sm-item icon="phone" class="item">Contact</a>
        <a sm-item icon="help" class="item">Help</a>    
    </sm-menu>
    `
})
export class AppComponent {}

bootstrap(AppComponent);