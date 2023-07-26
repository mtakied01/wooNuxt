let allProducts = [] as Product[];
export function useProducts() {
  const products = useState<Product[]>('products', () => [])
  function setProducts(newPro:Product[]):void {
    products.value = newPro
    allProducts = newPro
    console.log(allProducts)
  }
  return { products, allProducts, setProducts};
}