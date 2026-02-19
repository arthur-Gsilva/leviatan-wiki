import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

    return{
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/api"
        },
        sitemap: `${baseURL}sitemap.xml`
    }
}