import { z } from 'zod'

import data from '../data.json'

export async function GET(
    _: Request,
    { params }: { params: { slug: string } },
) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const { slug } = await params;

    const slugParsed = z.string().parse(slug)

    const product = data.products.find((product) => product.slug === slugParsed)

    if (!product) {
        return Response.json({ message: 'Product not found.' }, { status: 400 })
    }

    return Response.json(product)
}