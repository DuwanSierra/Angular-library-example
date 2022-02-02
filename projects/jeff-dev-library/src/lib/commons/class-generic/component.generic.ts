import { Injectable, OnDestroy } from "@angular/core";

@Injectable()
export class ComponentGeneric implements OnDestroy {

    //Variables globales
    public messages: any = {};
    public flags: any = {};
    public subscribes: any = {};


    constructor() { }


    //Autounsubscribe
    ngOnDestroy(): void {
        for (let key of Object.keys(this.subscribes)) {
            try {
                this.subscribes[key].unsubscribe();
            }
            catch {
                console.log('Cannot destroy');
            }
        }
    }
}