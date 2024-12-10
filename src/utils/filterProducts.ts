import { Product } from "../types/Product";

export const filterProducts = (
    products: Product[],
    searchQuery: string,
    onlyFavorites: boolean,
    priceRange: [number, number]
): Product[] => {
    return products.filter(product => {
        const matchesQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFavorites = !onlyFavorites || product.isLiked;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesQuery && matchesFavorites && matchesPrice;
    });
};