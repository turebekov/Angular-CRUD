import {Injectable} from '@angular/core';
import {Phone} from './item-data';
import {PHONE_ITEMS} from './item-data';
import {findIndex} from 'lodash';
import {Observable} from "rxjs/Observable";
import {of} from 'rxjs/observable/of';
@Injectable()
export class PhoneService {
    private items = PHONE_ITEMS;

    getPhone(id: number): Observable<Phone> {
        return of(PHONE_ITEMS.find(phone => phone.id === id));
    }

    getItemsFromData(): Phone[] {
        console.log((this.items));
        return this.items;
    }

    addPhone(phone: Phone) {
        this.items.push(phone);
        console.log(this.items);
    }

    updatePhone(phone: Phone) {
        console.log(this.items);
        let index = findIndex(this.items, (p: Phone) => {
            return p.id === phone.id;
        });
        this.items[index] = phone;
    }

    deletePhone(phone: Phone) {
        this.items.splice(this.items.indexOf(phone), 1);

    }


}
