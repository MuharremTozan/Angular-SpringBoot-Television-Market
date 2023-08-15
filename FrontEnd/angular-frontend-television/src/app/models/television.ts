import * as moment from 'moment';

export class Television {
    id: number;
    brandName: string;
    modelName: string;
    specs: string;
    screenSize: number;
    smartTv: boolean;
    price: number;
    productionDate = moment().format('YYYY.MM.DD HH:mm:ss');
    quantity: number;
    count: number;
    totalCartListCount: number;
}



