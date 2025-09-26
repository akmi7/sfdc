import { LightningElement } from 'lwc';

export default class CommonValidationComp extends LightningElement {
 
    static IsInputValid(reference, childReferences){
        let isFieldValid= true;
        if(reference){
          let inpFields=  reference.querySelectorAll("[data-requiredfield]");
                inpFields.forEach(inputField => {
                    console.log('inputField '+inputField.value);
                    inputField.value= inputField.value?.trim();
                    if(!inputField.checkValidity()){
                        inputField.reportValidity();
                        isFieldValid= false;
                       }
                    });
        }
       if(childReferences && childReferences.length >0){
            childReferences.forEach(template => {
                let inputFields= template.querySelectorAll("[data-requiredfield]");
                inputFields.forEach(inputField => {
                    console.log('inputField '+inputField.value);
                    inputField.value= inputField.value?.trim();
                    if(!inputField.checkValidity()){
                        inputField.reportValidity();
                        isFieldValid= false;
                       }
                    });
            });
       }

    return isFieldValid;
    }

}