import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://zurekpiotr.pl",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://zurekpiotr.pl/projects",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        }
    ]
}
