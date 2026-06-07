export type Product = {
    id: number,
    title: string,
    description: string,
    current_price: number,
    starting_bid: number,
    image_url: string,
    category: string,
    active: boolean,
    created_at: string,
    owner: User | null,
    winner: User | null
};

export type User = {
    id: string
    username: string,
    email: string,
    watchlist: Product[]
};

export type Bid = {
    amount: number,
    bidder: User,
    product: Product,
    created_at: string
};

export type Comment = {
    content: string,
    commenter: string,
    product: Product,
    created_at: string
}