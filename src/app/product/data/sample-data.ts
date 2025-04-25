export const sampleProducts = [
    {
      id: "FRJ0001",
      name: "RETRO FOOTBALL JERSEY - VIETNAM 95 - VIỆT NAM 1 - HIGH RISK RED",
      sku: "FRJ0001",
      price: 650000,
      description:
        "Là chiếc áo bóng đá hoài niệm (thời trang) tái hiện lại từ cảm hứng phiên bản áo thi đấu của đội tuyển Việt Nam 1 tại Cúp Độc Lập vào mùa xuân 1995 - một cột mốc vàng trong lịch sử phát triển của bóng đá Việt Nam...",
      images: [
        "/images/products/FRJ0001_1.jpg",
        "/images/products/FRJ0001_2.jpg",
        "/images/products/FRJ0001_3.jpg",
        "/images/products/FRJ0001_4.jpg",
      ],
      colors: ["#cc1f2f", "#f4cf2f"],
      sizes: ["S", "M", "L", "XL"],
    },
  ];
  
  export const getProductById = (id: string) => {
    return sampleProducts.find((p) => p.id === id);
  };
  