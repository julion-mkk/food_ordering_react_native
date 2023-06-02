export default {
    name: 'restaurant',
    type: 'document',
    title: 'Restaurant',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurant Name',
            validation: (rule)=> rule.required()
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short Description',
            validation: (rule)=> rule.max(200)
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the restaurant'
        },
        {
            name: 'lat',
            type: 'number',
            title: 'Latitude of the restaurant'
        },
        {
            name: 'long',
            type: 'number',
            title: 'Longitude of the restaurant'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
            validation: (rule)=> rule.required()
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Rating',
            validation: (rule)=> rule.required().min(1).max(5).error('Please enter the value from 1 to 5')
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Reference',
            validation: (rule)=> rule.required(),
            to: [{type:'category'}]
        },
        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            of: [{type: 'reference', to: [{type: 'dish'}]}]
        }
    ]
}