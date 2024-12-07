export function extractProductDetails(data) {
  return data.products.map(product => ({
      title: product.title,
      id: product.id,
      variants: product.variants.map(variant => ({
          id: variant.id,
          title: variant.title,
          price: variant.price,
          src: product.image ? product.image.src : null
      }))
  }));
}
