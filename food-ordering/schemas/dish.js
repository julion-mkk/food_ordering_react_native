export default {
    name: "dish",
    title: "Dish",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name of Dish',
            type: "string",
            validation: (rule)=> rule.required()
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: (rule)=> rule.max(200)
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image of the Dish',
            type: 'image'
        }
    ]
}