import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class LwcToastEvent extends LightningElement {
    showToast(){
        const event = new ShowToastEvent({
            title: 'Get Help',
            message: 'Salesforce doc is available in the app'
        });
        this.dispatchEvent(event);
    }
}