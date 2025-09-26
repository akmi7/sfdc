import { LightningElement, api, track } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api grandparentValue; // input from parent
    @track selectedValue;
    runOnce=false;

    // Sample options - dynamically change based on grandparentValue
    get options() {
        if(this.grandparentValue && this.grandparentValue.toLowerCase() === 'fruit') {
            return [
                { label: 'Apple', value: 'apple' },
                { label: 'Mango', value: 'mango' },
                { label: 'Banana', value: 'banana' }
            ];
        } else if(this.grandparentValue && this.grandparentValue.toLowerCase() === 'color') {
            return [
                { label: 'Red', value: 'red' },
                { label: 'Blue', value: 'blue' },
                { label: 'Green', value: 'green' }
            ];
        } else {
            return [
                { label: 'Default Option 1', value: 'default1' },
                { label: 'Default Option 2', value: 'default2' }
            ];
        }
    }

    handleChange(event) {
        this.selectedValue = event.detail.value;
    }

    connectedCallback(){
                console.log('child template connectedcallback== '+this.template);                
        }
        renderedCallback(){
                if(!this.runOnce){
                        console.log('child template renderedcallback== '+this.template);
                        this.runOnce= true;
                        this.dispatchEvent(new CustomEvent('childvalidation', {
                                  detail: this.template
                                 }));
                 }
        }
}
