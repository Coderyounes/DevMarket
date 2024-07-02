import { FreelancerCardType, ServiceCardType } from "./types";

export const CategorySettingsSlider = {
  // centerMode: true,
  dots: true,
  infinite: true,
  speed: 450,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

export const FreelancerSettingsSlider = {
  // centerMode: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const ALL_CATEGORIES: string[] = [
  "business",
  "graphic design",
  "programming",
  "music",
  "writing",
  "digital marketing",
  "business",
];

export const TRENDING_FREELANCER: FreelancerCardType[] = [
  {
    name: "anas",
    username: "anas01",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Web developer",
    description:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
    rating: 1,
  },
  {
    name: "anas",
    username: "anas01",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Web developer",
    description:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
    rating: 3,
  },
  {
    name: "anas",
    username: "anas01",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Web developer",
    description:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
    rating: 5,
  },
  {
    name: "anas",
    username: "anas01",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Web developer",
    description:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
    rating: 3,
  },
  {
    name: "anas",
    username: "anas01",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Web developer",
    description:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
    rating: 3,
  },
  {
    name: "anas",
    username: "anas01",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Web developer",
    description:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
    rating: 3,
  },
  {
    name: "anas",
    username: "anas01",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Web developer",
    description:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
    rating: 3,
  },
  {
    name: "anas",
    username: "anas01",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Web developer",
    description:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
    rating: 3,
  },
];

export const SERVICE_LIST: ServiceCardType[] = [
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
  {
    id: 12,
    title:
      "Je vais créer un site web réactif en utilisant Tailwind CSS et Next.js.",
    owner: "anas",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    category: "programming",
    rating: 3,
    price: 550,
    posted_at: new Date("2019-09-12 12:00:00"),
  },
];
