'use client'

import { useCart } from '@/contexts/cart-context'
import Button from './styled-components/Button'

export interface AddToCartButtonProps {
    productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addToCart } = useCart()

    function handleAddProductToCart() {
        addToCart(productId)
    }

    return (
        <Button
            type='button'
            onClick={handleAddProductToCart}
        >
            Adicionar ao carrinho
        </Button>
    )
}