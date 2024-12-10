import React from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {Product} from "../types/Product.ts";
import {AppDispatch} from "../store/configureStore.ts";
import {createProduct} from "../store/slices/productsSlice.ts";
import { Form, Input, Button, InputNumber } from "antd";

interface ProductFormValues {
    title: string;
    description: string;
    price: number;
    image: string;
}

const CreateProductPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values: ProductFormValues) => {
        const newProduct: Product = {
            id: Date.now().toString(),
            title: values.title,
            description: values.description,
            price: values.price,
            image: values.image,
            isLiked: false,
        };

        console.log(newProduct);
        dispatch(createProduct(newProduct));
        form.resetFields();
        navigate("/products");
    };
    return (
        <div className="create-product">
            <h2 className="create-product__title">Форма создания продукта</h2>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="create-product__form"
            >
                <Form.Item
                    label="Название продукта"
                    name="title"
                    rules={[
                        { required: true, message: "Название обязательно" },
                        { min: 3, message: "Название должно содержать минимум 3 символа" },
                        { max: 100, message: "Название слишком длинное" },
                    ]}
                >
                    <Input placeholder="Введите название продукта" />
                </Form.Item>

                <Form.Item
                    label="Описание"
                    name="description"
                    className="create-product__textarea"
                    rules={[
                        { required: true, message: "Описание обязательно" },
                        { min: 40, message: "Описание слишком короткое" },
                        { max: 1000, message: "Описание слишком длинное"}
                    ]}
                >
                    <Input.TextArea placeholder="Введите описание продукта" rows={4} className="create-product__textarea"/>
                </Form.Item>

                <Form.Item
                    style={{paddingTop: "55px"}}
                    label="Цена"
                    name="price"
                    rules={[
                        { required: true, message: "Цена обязательна" },
                        {
                            type: "number",
                            min: 1,
                            message: "Цена должна быть положительным числом",
                        },
                        {
                            type: "number",
                            max: 10000,
                            message: "Цена не может превышать $10000",
                        },
                    ]}
                >
                    <InputNumber
                        placeholder="Введите цену продукта"
                        min={1}
                        className="create-product__price-input"
                    />
                </Form.Item>

                <Form.Item
                    label="Ссылка на изображение"
                    name="image"
                    rules={[
                        { required: true, message: "Ссылка на изображение обязательна" },
                        { type: "url", message: "Введите корректную ссылку" },
                    ]}
                >
                    <Input placeholder="Введите ссылку на изображение продукта" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать продукт
                    </Button>
                    <Button
                        style={{ marginLeft: "10px" }}
                        onClick={() => navigate("/products")}
                    >
                        Отменить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateProductPage;
