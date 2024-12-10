import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/configureStore.ts";
import { Button, Input, Row, Slider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ProductCard from "../components/ProductCard.tsx";
import { filterProducts } from "../utils/filterProducts.ts";

const ProductsPage: React.FC = () => {
    const allProducts = useSelector((state: RootState) => state.products.products);
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [searchQuery, setSearchQuery] = useState("");
    const [onlyFavorites, setOnlyFavorites] = useState(false);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

    useEffect(() => {
        setFilteredProducts(allProducts);
    }, [allProducts]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        handleFilter(query, onlyFavorites, priceRange);
    };

    const handleFavoritesToggle = () => {
        setOnlyFavorites(!onlyFavorites);
        handleFilter(searchQuery, !onlyFavorites, priceRange);
    };

    const handlePriceRangeChange = (range: [number, number]) => {
        setPriceRange(range);
        handleFilter(searchQuery, onlyFavorites, range);
    };

    const handleFilter = (query: string, favoritesOnly: boolean, price: [number, number]) => {
        const filtered = filterProducts(allProducts, query, favoritesOnly, price);
        setFilteredProducts(filtered);
    };

    return (
        <>
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <Input
                    placeholder="Поиск по названию"
                    prefix={<SearchOutlined />}
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <Button
                    type={onlyFavorites ? "primary" : "default"}
                    onClick={handleFavoritesToggle}
                >
                    {onlyFavorites ? "Показать все" : "Только избранные"}
                </Button>
                <div style={{ marginTop: "20px" }}>
                    <Slider
                        range
                        min={0}
                        max={1000}
                        defaultValue={priceRange}
                        onChange={(value) => handlePriceRangeChange(value as [number, number])}
                        tooltip={{ formatter: (value) => `$${value}` }}
                        style={{ width: "300px", margin: "0 auto" }}
                    />
                </div>
            </div>

            <Row gutter={[16, 16]} justify="center">
                {filteredProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </Row>
        </>
    );
};

export default ProductsPage;
