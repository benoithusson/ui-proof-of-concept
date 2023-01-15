// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
        {
            "srcImage": "/shoes-1.png",
            "altImage": "Nike",
            "name": "Nike Air Max",
            "price": 150
        },
        {
            "srcImage": "/shoes-2.png",
            "altImage": "Nike",
            "name": "Nike Air Max",
            "price": 150
        },
        {
            "srcImage": "/shoes-4.png",
            "altImage": "Nike",
            "name": "Nike Air Max",
            "price": 150
        },
        {
            "srcImage": "/shoes-5.png",
            "altImage": "Nike",
            "name": "Nike Air Max",
            "price": 150
        },
        {
            "srcImage": "/shoes-7.png",
            "altImage": "Nike",
            "name": "Nike Air Max",
            "price": 150
        },
        {
            "srcImage": "/shoes-8.png",
            "altImage": "Nike",
            "name": "Nike Air Max",
            "price": 150
        }
    ])
}
