export type TCartItem = {
    id: string,
    quantity: number,
    option?: string,
    item: TProduct
}

export type TProduct = {
    id: string,
    title: string,
    image: string,
    avgRating: number,
    ratings: number,
    price: number,
    oldPrice?: number,
}
