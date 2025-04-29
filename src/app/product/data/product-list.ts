export interface Product {
  id: string;
  name: string;
  images: string[];
  status:
    | "Limited Edition"
    | "Online Only"
    | "Sale off"
    | "New Arrival"
    | "Out of Stock";
  style: "Low Top" | "High Top" | "Slip-on" | "Mid Top" | "Mule";
  line:
    | "Basas"
    | "Vintas"
    | "Urbas"
    | "Pattas"
    | "Tote Bag"
    | "Graphic Tee"
    | "Hoodie";
  color: string;
  price: number;
}

export const products: Product[] = [
  {
    id: "FRJ0001",
    name: "Track 6 Fold-over Tongue - The Team",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "New Arrival",
    style: "Low Top",
    line: "Basas",
    color: "Caviar Black",
    price: 1090000,
  },
  {
    id: "FRJ0002",
    name: "Retro Football Jersey - Vietnam 95 - VN2",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "Limited Edition",
    style: "Mid Top",
    line: "Graphic Tee",
    color: "Lemon",
    price: 650000,
  },
  {
    id: "FRJ0003",
    name: "Retro Football Jersey - Vietnam 95 - VN1",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "Sale off",
    style: "Mid Top",
    line: "Graphic Tee",
    color: "High Risk Red",
    price: 650000,
  },
  {
    id: "FRJ0004",
    name: "Die-cut Insoles - Ortho-lite 7mm RF",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "Online Only",
    style: "Mule",
    line: "Basas",
    color: "White Asparagus",
    price: 69000,
  },
  {
    id: "FRJ0005",
    name: "Vintas Denim - Classic Low Top",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "Out of Stock",
    style: "Low Top",
    line: "Vintas",
    color: "Night Sky",
    price: 650000,
  },
  {
    id: "FRJ0006",
    name: "Urban Slip-on - Comfy Walk",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "New Arrival",
    style: "Slip-on",
    line: "Urbas",
    color: "Stone Gray",
    price: 450000,
  },
  {
    id: "FRJ0007",
    name: "Pattas High Top - Street Edition",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "Sale off",
    style: "High Top",
    line: "Pattas",
    color: "Sunset Orange",
    price: 780000,
  },
  {
    id: "FRJ0008",
    name: "Tote Bag Casual - Everyday Carry",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "Online Only",
    style: "Mid Top",
    line: "Tote Bag",
    color: "Olive Green",
    price: 390000,
  },
  {
    id: "FRJ0009",
    name: "Graphic Tee - Vintage Logo",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "Limited Edition",
    style: "Mule",
    line: "Graphic Tee",
    color: "Heather Gray",
    price: 290000,
  },
  {
    id: "FRJ0010",
    name: "Hoodie Comfort - Soft Fleece",
    images: [
      "/images/products/FRJ0001_1.jpg",
      "/images/products/FRJ0001_2.jpg",
    ],
    status: "New Arrival",
    style: "Mule",
    line: "Hoodie",
    color: "Charcoal Black",
    price: 550000,
  },
];
