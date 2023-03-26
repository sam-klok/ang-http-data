import { ICategory } from "./category";

export interface IProduct2{
    ProductID: number,
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    Category: ICategory;
    FirstOrderedOn: Date;
}


// {
//     "ProductID": 2,
//     "ProductName": "Chang",
//     "SupplierID": 1,
//     "CategoryID": 1,
//     "QuantityPerUnit": "24 - 12 oz bottles",
//     "UnitPrice": 19,
//     "UnitsInStock": 17,
//     "UnitsOnOrder": 40,
//     "ReorderLevel": 25,
//     "Discontinued": false,
//     "Category": {
//         "CategoryID": 1,
//         "CategoryName": "Beverages",
//         "Description": "Soft drinks, coffees, teas, beers, and ales"
//     },
//     "FirstOrderedOn": new Date(1996, 7, 12)
// },
