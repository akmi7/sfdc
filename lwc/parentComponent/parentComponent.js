import { LightningElement,api } from 'lwc';

export default class ParentComponent extends LightningElement {
        @api grandparentValue; // receive value from grandparent
          runOnce=false;
          wrapperForChildTemplate=[];
        connectedCallback(){
                console.log('parent template connectedcallback== '+this.wrapperForChildTemplate?.length);                
        }
        renderedCallback(){
                if(!this.runOnce){
                        this.runOnce= true;
                        this.wrapperForChildTemplate.push(this.template);
                        console.log('parent template renderedcallback== '+this.wrapperForChildTemplate.length);
                        this.dispatchEvent(new CustomEvent('parentvalidation', {
                                  detail: this.wrapperForChildTemplate
                                 }));
                 }
        }
       

        handleChildEvent(event){
        this.wrapperForChildTemplate.push(event.detail);
        console.log('parent received childtemplate event from child template value== '+this.wrapperForChildTemplate.length)

        }

        handleParentChange(){

        }
}