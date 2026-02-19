import { MetadataRoute } from 'next'
import { getAllSlugs } from '../services/wiki'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        },
        {
            url: `${baseURL}/piratas`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        {
            url: `${baseURL}/revolucionarios`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: `${baseURL}/marinha`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${baseURL}/governo`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${baseURL}/antiguidades`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: `${baseURL}/variados`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: `${baseURL}/especies`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        {
            url: `${baseURL}/akuma_no_mi`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: `${baseURL}/contos`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${baseURL}/itens`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },
    ]

    try {
        const entries = await getAllSlugs() 

        if(!entries) return staticPages

        const dynamicPages: MetadataRoute.Sitemap = entries.map((entry) => ({
            url: `${baseURL}/${entry.toLowerCase()}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        }))

        return [...staticPages, ...dynamicPages]
    } catch (error) {
        console.error('Erro ao buscar entradas para o sitemap:', error)
        return staticPages
    }
}