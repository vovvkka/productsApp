import {Form, Input, Button, InputNumber} from "antd";

export interface ProductFormValues {
    title: string;
    description: string;
    price: number;
    image: string;
}

interface ProductFormProps {
    initialValues?: ProductFormValues;
    onSubmit: (values: ProductFormValues) => void;
    onCancel?: () => void;
    isEditing?: boolean;
}

const ProductForm = ({initialValues, onSubmit, onCancel, isEditing = false}: ProductFormProps) => {
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            layout="vertical"
            className="productForm__form"
            initialValues={initialValues}
            onFinish={onSubmit}
        >
            <Form.Item
                label="Название продукта"
                name="title"
                rules={[
                    {required: true, message: "Название обязательно"},
                    {min: 3, message: "Название должно содержать минимум 3 символа"},
                    {max: 100, message: "Название слишком длинное"},
                ]}
            >
                <Input placeholder="Введите название продукта"/>
            </Form.Item>

            <Form.Item
                label="Описание"
                name="description"
                rules={[
                    {required: true, message: "Описание обязательно"},
                    {min: 40, message: "Описание слишком короткое"},
                    {max: 1000, message: "Описание слишком длинное"},
                ]}
            >
                <Input.TextArea
                    className="productForm__textarea"
                    placeholder="Введите описание продукта"
                    rows={4}
                />
            </Form.Item>

            <Form.Item
                label="Цена"
                name="price"
                rules={[
                    {required: true, message: "Цена обязательна"},
                    {type: "number", min: 1, message: "Цена должна быть положительным числом"},
                    {type: "number", max: 10000, message: "Цена не может превышать $10000"},
                ]}
            >
                <InputNumber
                    className="productForm__price"
                    placeholder="Введите цену продукта"
                    min={1}
                />
            </Form.Item>

            <Form.Item
                label="Ссылка на изображение"
                name="image"
                rules={[
                    {required: true, message: "Ссылка на изображение обязательна"},
                    {type: "url", message: "Введите корректную ссылку"},
                ]}
            >
                <Input placeholder="Введите ссылку на изображение продукта"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {isEditing ? "Сохранить изменения" : "Создать продукт"}
                </Button>
                {onCancel && (
                    <Button style={{marginLeft: "10px"}} onClick={onCancel}>
                        Отменить
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default ProductForm;
