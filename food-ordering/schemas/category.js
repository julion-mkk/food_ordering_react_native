import {rules} from "@sanity/eslint-config-studio";

export default {
    name: 'category',
    type: 'document',
    title: 'Menu Category',
    fields: [
        {
            name: 'name',
            title: 'Category Name',
            type: 'string',
            validation: (rule)=> rule.required()
        },
        {
            name: 'image',
            title: 'Image of category',
            type: 'image'
        }
    ]
}