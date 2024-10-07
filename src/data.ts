import {IProduct} from "./interfaces/productInterface";

export const productJASON:string = '[\n' +
    '    {\n' +
    '        "id": 1,\n' +
    '        "title": "Essence Mascara Lash Princess",\n' +
    '        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",\n' +
    '        "category": "beauty",\n' +
    '        "price": 9.99,\n' +
    '        "discountPercentage": 7.17,\n' +
    '        "rating": 4.94,\n' +
    '        "stock": 5,\n' +
    '        "tags": [\n' +
    '            "beauty",\n' +
    '            "mascara"\n' +
    '        ],\n' +
    '        "brand": "Essence",\n' +
    '        "sku": "RCH45Q1A",\n' +
    '        "weight": 2,\n' +
    '        "dimensions": {\n' +
    '            "width": 23.17,\n' +
    '            "height": 14.43,\n' +
    '            "depth": 28.01\n' +
    '        },\n' +
    '        "warrantyInformation": "1 month warranty",\n' +
    '        "shippingInformation": "Ships in 1 month",\n' +
    '        "availabilityStatus": "Low Stock",\n' +
    '        "reviews": [\n' +
    '            {\n' +
    '                "rating": 2,\n' +
    '                "comment": "Very unhappy with my purchase!",\n' +
    '                "date": "2024-05-23T08:56:21.618Z",\n' +
    '                "reviewerName": "John Doe",\n' +
    '                "reviewerEmail": "john.doe@x.dummyjson.com"\n' +
    '            },\n' +
    '            {\n' +
    '                "rating": 2,\n' +
    '                "comment": "Not as described!",\n' +
    '                "date": "2024-05-23T08:56:21.618Z",\n' +
    '                "reviewerName": "Nolan Gonzalez",\n' +
    '                "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"\n' +
    '            },\n' +
    '            {\n' +
    '                "rating": 5,\n' +
    '                "comment": "Very satisfied!",\n' +
    '                "date": "2024-05-23T08:56:21.618Z",\n' +
    '                "reviewerName": "Scarlett Wright",\n' +
    '                "reviewerEmail": "scarlett.wright@x.dummyjson.com"\n' +
    '            }\n' +
    '        ],\n' +
    '        "returnPolicy": "30 days return policy",\n' +
    '        "minimumOrderQuantity": 24,\n' +
    '        "meta": {\n' +
    '            "createdAt": "2024-05-23T08:56:21.618Z",\n' +
    '            "updatedAt": "2024-05-23T08:56:21.618Z",\n' +
    '            "barcode": "9164035109868",\n' +
    '            "qrCode": "https://assets.dummyjson.com/public/qr-code.png"\n' +
    '        },\n' +
    '        "images": [\n' +
    '            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"\n' +
    '        ],\n' +
    '        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 2,\n' +
    '        "title": "Eyeshadow Palette with Mirror",\n' +
    '        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it\'s convenient for on-the-go makeup application.",\n' +
    '        "category": "beauty",\n' +
    '        "price": 19.99,\n' +
    '        "discountPercentage": 5.5,\n' +
    '        "rating": 3.28,\n' +
    '        "stock": 44,\n' +
    '        "tags": [\n' +
    '            "beauty",\n' +
    '            "eyeshadow"\n' +
    '        ],\n' +
    '        "brand": "Glamour Beauty",\n' +
    '        "sku": "MVCFH27F",\n' +
    '        "weight": 3,\n' +
    '        "dimensions": {\n' +
    '            "width": 12.42,\n' +
    '            "height": 8.63,\n' +
    '            "depth": 29.13\n' +
    '        },\n' +
    '        "warrantyInformation": "1 year warranty",\n' +
    '        "shippingInformation": "Ships in 2 weeks",\n' +
    '        "availabilityStatus": "In Stock",\n' +
    '        "reviews": [\n' +
    '            {\n' +
    '                "rating": 4,\n' +
    '                "comment": "Very satisfied!",\n' +
    '                "date": "2024-05-23T08:56:21.618Z",\n' +
    '                "reviewerName": "Liam Garcia",\n' +
    '                "reviewerEmail": "liam.garcia@x.dummyjson.com"\n' +
    '            },\n' +
    '            {\n' +
    '                "rating": 1,\n' +
    '                "comment": "Very disappointed!",\n' +
    '                "date": "2024-05-23T08:56:21.618Z",\n' +
    '                "reviewerName": "Nora Russell",\n' +
    '                "reviewerEmail": "nora.russell@x.dummyjson.com"\n' +
    '            },\n' +
    '            {\n' +
    '                "rating": 5,\n' +
    '                "comment": "Highly impressed!",\n' +
    '                "date": "2024-05-23T08:56:21.618Z",\n' +
    '                "reviewerName": "Elena Baker",\n' +
    '                "reviewerEmail": "elena.baker@x.dummyjson.com"\n' +
    '            }\n' +
    '        ],\n' +
    '        "returnPolicy": "30 days return policy",\n' +
    '        "minimumOrderQuantity": 32,\n' +
    '        "meta": {\n' +
    '            "createdAt": "2024-05-23T08:56:21.618Z",\n' +
    '            "updatedAt": "2024-05-23T08:56:21.618Z",\n' +
    '            "barcode": "2817839095220",\n' +
    '            "qrCode": "https://assets.dummyjson.com/public/qr-code.png"\n' +
    '        },\n' +
    '        "images": [\n' +
    '            "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"\n' +
    '        ],\n' +
    '        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 3,\n' +
    '        "title": "Powder Canister",\n' +
    '        "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",\n' +
    '        "category": "beauty",\n' +
    '        "price": 14.99,\n' +
    '        "discountPercentage": 18.14,\n' +
    '        "rating": 3.82,\n' +
    '        "stock": 59,\n' +
    '        "tags": [\n' +
    '            "beauty",\n' +
    '            "face powder"\n' +
    '        ],\n' +
    '        "brand": "Velvet Touch",\n' +
    '        "sku": "9EN8WLT2",\n' +
    '        "weight": 8,\n' +
    '        "dimensions": {\n' +
    '            "width": 24.16,\n' +
    '            "height": 10.7,\n' +
    '            "depth": 11.07\n' +
    '        },\n' +
    '        "warrantyInformation": "2 year warranty",\n' +
    '        "shippingInformation": "Ships in 1-2 business days",\n' +
    '        "availabilityStatus": "In Stock",\n' +
    '        "reviews": [\n' +
    '            {\n' +
    '                "rating": 5,\n' +
    '                "comment": "Very happy with my purchase!",\n' +
    '                "date": "2024-05-23T08:56:21.618Z",\n' +
    '                "reviewerName": "Ethan Thompson",\n' +
    '                "reviewerEmail": "ethan.thompson@x.dummyjson.com"\n' +
    '            },\n' +
    '            {\n' +
    '                "rating": 4,\n' +
    '                "comment": "Great value for money!",\n' +
    '                "date": "2024-05-23T08:56:21.618Z",\n' +
    '                "reviewerName": "Levi Hicks",\n' +
    '                "reviewerEmail": "levi.hicks@x.dummyjson.com"\n' +
    '            },\n' +
    '            {\n' +
    '                "rating": 5,\n' +
    '                "comment": "Highly impressed!",\n' +
    '                "date": "2024-05-23T08:56:21.618Z",\n' +
    '                "reviewerName": "Hazel Gardner",\n' +
    '                "reviewerEmail": "hazel.gardner@x.dummyjson.com"\n' +
    '            }\n' +
    '        ],\n' +
    '        "returnPolicy": "60 days return policy",\n' +
    '        "minimumOrderQuantity": 25,\n' +
    '        "meta": {\n' +
    '            "createdAt": "2024-05-23T08:56:21.618Z",\n' +
    '            "updatedAt": "2024-05-23T08:56:21.618Z",\n' +
    '            "barcode": "0516267971277",\n' +
    '            "qrCode": "https://assets.dummyjson.com/public/qr-code.png"\n' +
    '        },\n' +
    '        "images": [\n' +
    '            "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"\n' +
    '        ],\n' +
    '        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 4,\n' +
    '        "title": "Red Lipstick",\n' +
    '        "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",\n' +
    '        "category": "beauty",\n' +
    '        "price": 12.99,\n' +
    '        "discountPercentage": 19.03,\n' +
    '        "rating": 2.51,\n' +
    '        "stock": 68,\n' +
    '        "tags": [\n' +
    '            "beauty",\n' +
    '            "lipstick"\n' +
    '        ],\n' +
    '        "brand": "Chic Cosmetics",\n' +
    '        "sku": "O5IF1NTA",\n' +
    '        "weight": 5,\n' +
    '        "dimensions": {\n' +
    '            "width": 14.37,\n' +
    '            "height": 13.94,\n' +
    '            "depth": 14.6\n' +
    '        },\n' +
    '        "warrantyInformation": "Lifetime warranty",\n' +
    '        "shippingInformation": "Ships in 2 weeks",\n' +
    '        "availabilityStatus": "In Stock",\n' +
    '        "reviews": [\n' +
    '            {\n' +
    '                "rating": 5,\n' +
    '                "comment": "Great product!",\n' +
    '                "date": "2024-05-23T08:56:21.619Z",\n' +
    '                "reviewerName": "Leo Rivera",\n' +
    '                "reviewerEmail": "leo.rivera@x.dummyjson.com"\n' +
    '            },\n' +
    '            {\n' +
    '                "rating": 4,\n' +
    '                "comment": "Very pleased!",\n' +
    '                "date": "2024-05-23T08:56:21.619Z",\n' +
    '                "reviewerName": "Oscar Powers",\n' +
    '                "reviewerEmail": "oscar.powers@x.dummyjson.com"\n' +
    '            },\n' +
    '            {\n' +
    '                "rating": 5,\n' +
    '                "comment": "Very pleased!",\n' +
    '                "date": "2024-05-23T08:56:21.619Z",\n' +
    '                "reviewerName": "Carter Rivera",\n' +
    '                "reviewerEmail": "carter.rivera@x.dummyjson.com"\n' +
    '            }\n' +
    '        ],\n' +
    '        "returnPolicy": "90 days return policy",\n' +
    '        "minimumOrderQuantity": 6,\n' +
    '        "meta": {\n' +
    '            "createdAt": "2024-05-23T08:56:21.619Z",\n' +
    '            "updatedAt": "2024-05-23T08:56:21.619Z",\n' +
    '            "barcode": "9444582199406",\n' +
    '            "qrCode": "https://assets.dummyjson.com/public/qr-code.png"\n' +
    '        },\n' +
    '        "images": [\n' +
    '            "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"\n' +
    '        ],\n' +
    '        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"\n' +
    '    }\n' +
    ']'
let parsedArray = JSON.parse(productJASON);
export const products:IProduct[] = parsedArray.map((product:IProduct)=>({id:product.id,title:product.title,description:product.description}))
