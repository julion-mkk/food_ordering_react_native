import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: 'x5mv0t2b',
    dataset: 'production',
    useCdm: false,
    apiVersion: '2023-06-01',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;