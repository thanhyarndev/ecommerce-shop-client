export interface CartItem {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    size: string;
    quantity: number;
    inStock: boolean;
  }
  
  export interface Suggestion {
    id: string;
    name: string;
    image: string;
    price: number;
  }
  
  // Giỏ hàng
  export const cartItems: CartItem[] = [
    {
      id: 'p1',
      name: 'Basic Tee - Branding Label - Medium Green',
      image: '/images/products/our-product-1.jpg',
      price: 290000,
      quantity: 2,
      size: 'L',
      inStock: true,
    },
    {
      id: 'p2',
      name: 'Urbas Ruler - Low Top - Granite Green',
      image: '/images/products/our-product-2.jpg',
      price: 300000,
      originalPrice: 590000,
      quantity: 1,
      size: '44',
      inStock: true,
    },
  ];
  
  // Gợi ý thêm
  export const suggestions: Suggestion[] = [
    {
      id: 's1',
      name: 'Crew Socks - Ananas Typo Black',
      image: '/images/products/our-product-3.jpg',
      price: 95000,
    },
    {
      id: 's2',
      name: 'Blank Shoelaces Gargoyle',
      image: '/images/products/our-product-4.jpg',
      price: 35000,
    },
  ];
  