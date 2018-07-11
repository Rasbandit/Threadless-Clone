SELECT product.*, colors.color
FROM product, colors
WHERE  colors.name =product.name
