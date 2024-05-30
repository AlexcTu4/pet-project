import type {IProduct} from "~/types/product";
import type {ICategory} from "~/types/category";

export const useCatalogStore = defineStore('catalog', () => {
    const config = useRuntimeConfig();
    const route = useRoute();

    const products: ref<IProduct[]> = ref();
    const category: ref<ICategory> = ref();

    async function getCategoryData() {
        if (route.params.id_category) {
            const {data, pending, error, refresh, execute} = await useFetch(`categories/${route.params.id_category}`, {
                baseURL: config.public.BASE_URL_API,
            });
            if (data.value) {
                category.value = data.value;
            }
        } else {
            category.value = {
                id: 0,
                name: 'Все категории',
                image: null
            }
        }

    }

    async function getProductsData() {
        const {data, pending, error, refresh, execute} = await useFetch('products', {
            baseURL: config.public.BASE_URL_API,
            query: {categoryId: route.params.id_category},
            key: 'products_' + route.params.id_category
        });
        if (data.value) {
            products.value = data.value;
        }
    }

    getCategoryData();
    getProductsData();
    return {products, category, getProductsData}
})