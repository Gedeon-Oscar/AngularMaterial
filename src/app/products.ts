
//*
export interface Product
{
    id:any;
    name:any;
    description:any;
    price:any;
}

//*
export const products:Array<{id:number,name:string,description:string,price:string}> =
[
    {id:1,name: 'XL',description:'A large phone with one of the best srceens',price:'700.00'},
    {id:2,name: 'Mini',description:'A great phone with one of the best cameras',price:'699.00'},
    {id:3,name: 'Standard',description:'',price:'599.00'}
];

