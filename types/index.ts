interface Product{
  name?: string | null;
  databaseId?: number | null;
  slug?: string | null;
  price?: string | null;
  image?: ProductImage | null;
}
interface ProductImage {
  sourceUrl?: string | null;
  altText?: string | null;
  title?: string | null;
  cartSourceUrl?: string | null;
}