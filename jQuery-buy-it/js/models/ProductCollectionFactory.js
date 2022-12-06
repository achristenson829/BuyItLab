import Product from "./Product.js";
import ProductCollection from "./ProductCollection.js";

export default function ProductCollectionFactory(data, types) {
        let products = new ProductCollection();
        data.forEach(item => {
            if (types[item.type]) {
                products.addItem(new Product(new types[item.type](item), item.price));

            } else {
                console.error('Invalid item type', item);
            }
        })
        return products;
}

