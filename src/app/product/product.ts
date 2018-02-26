export interface Product {
    id: number;
    name: string;
    price: number;
}

export const PRODUCT_LISTS: Product[] = [
    {id: 11, name: 'Mr. Nice', price: 255},
    {id: 12, name: 'Narco', price: 255},
    {id: 13, name: 'Bombasto', price: 255},
    {id: 14, name: 'Celeritas', price: 255}
  /*  {id: 15, name: 'Magneta', price: 255},
    {id: 16, name: 'RubberMan', price: 255},
    {id: 17, name: 'Dynama', price: 255},
    {id: 18, name: 'Dr IQ', price: 255},
    {id: 19, name: 'Magma', price: 255},
    {id: 20, name: 'Tornado', price: 255}*/
];