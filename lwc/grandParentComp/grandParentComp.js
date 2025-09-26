import { LightningElement, track } from 'lwc';
import CommonValidationComp from 'c/commonValidationComp';

export default class GrandParentComp extends LightningElement {
    @track grandparentValue = '';
    wrapperForChildTemplate=[];

    handleParentEvent(event) {
         this.wrapperForChildTemplate=event.detail;
         console.log('grand parent received parenttemplate event from parent template value== '+this.wrapperForChildTemplate.length);
         
     }

    handleSubmit(){
        CommonValidationComp.IsInputValid(this.template,this.wrapperForChildTemplate);
    }
    handleGrandparentChange(){
       
    }
}