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

export const ALL_CATEGORIES = [
  {
    name: "business",
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwbgUE7rhi1fzu4C6QnHUSmXyrvF_XhbA3w&s",
  },
  {
    name: "graphic design",
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuP_AnPPg8doXstVDrdvEXdez2R8iooTGZXA&s",
  },
  {
    name: "programming",
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamXiz6Q6zhuMaS-1NnuWHm-Du4lWEXM3V_g&s",
  },
  {
    name: "music",
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_76JQYPjaFfCQdMrJgnx_gwkpmiEtn2FUw&s",
  },
  {
    name: "writing",
    bg: "https://images.pond5.com/book-writing-isolated-cartoon-vector-illustration-220879524_iconl_nowm.jpeg",
  },
  {
    name: "digital marketing",
    bg: "https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2988843b93c6d_DrawKit0034_Digital_Marketing_Thumbnail.png",
  },
];

export const TRENDING_FREELANCER: FreelancerCardType[] = [
  {
    name: "John",
    username: "john123",
    profile_img:
      "https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg",
    job: "Software Engineer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4,
  },
  {
    name: "Alice",
    username: "alice_w",
    profile_img:
      "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944",
    job: "Graphic Designer",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 3,
  },
  {
    name: "Robert",
    username: "robert89",
    profile_img:
      "https://www.shutterstock.com/image-photo/profile-picture-smiling-young-african-260nw-1873784920.jpg",
    job: "Data Scientist",
    description:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
  },
  {
    name: "Emily",
    username: "emily_92",
    profile_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s",
    job: "Product Manager",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting.",
    rating: 2,
  },
  {
    name: "Michael",
    username: "mike_the_dev",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Web Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 1,
  },
  {
    name: "Sara",
    username: "sara_01",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "UX Designer",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 3,
  },
  {
    name: "David",
    username: "david_k",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Backend Developer",
    description:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 4,
  },
  {
    name: "Laura",
    username: "laura_dev",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Frontend Developer",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting.",
    rating: 5,
  },
  {
    name: "James",
    username: "james_r",
    profile_img:
      "https://i.pinimg.com/originals/17/2c/9c/172c9c6fb5af4efd2d879797e3d2d4f7.jpg",
    job: "Mobile Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 2,
  },
];

export const SERVICE_LIST: ServiceCardType[] = [
  {
    id: 1,
    title: "I will design a modern UI using Figma.",
    owner: "John",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrT1vkSf23Q6jOv3PjUzbMgVpMKNBXD1MSiw&s",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    category: "design",
    rating: 5,
    price: 300,
    posted_at: new Date("2021-03-15 08:00:00"),
  },
  {
    id: 2,
    title: "I will create a responsive web app using Vue.js and Vuetify.",
    owner: "Alice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwSdXKlV59MMakovn5FMr02-xSB5pg-mbkQ&s",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
    category: "web development",
    rating: 4,
    price: 450,
    posted_at: new Date("2022-05-10 10:30:00"),
  },
  {
    id: 3,
    title: "I will build an ecommerce website with Shopify.",
    owner: "Robert",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour.",
    category: "ecommerce",
    rating: 3,
    price: 600,
    posted_at: new Date("2020-07-20 14:45:00"),
  },
  {
    id: 4,
    title: "I will develop a custom WordPress theme.",
    owner: "Emily",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    category: "web development",
    rating: 5,
    price: 700,
    posted_at: new Date("2023-01-05 09:15:00"),
  },
  {
    id: 5,
    title: "I will create a machine learning model with Python.",
    owner: "Michael",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcH6mPPldIxPTYzb_Tiy73OorAYNbSklc8w&s",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
    category: "data science",
    rating: 4,
    price: 800,
    posted_at: new Date("2021-11-11 11:00:00"),
  },
  {
    id: 6,
    title: "I will develop a mobile app using React Native.",
    owner: "Sara",
    image:
      "https://miro.medium.com/v2/resize:fit:1024/1*xDi2csEAWxu95IEkaNdFUQ.png",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour.",
    category: "mobile development",
    rating: 2,
    price: 900,
    posted_at: new Date("2022-08-19 13:25:00"),
  },
  {
    id: 7,
    title: "I will design a brand logo with Illustrator.",
    owner: "David",
    image:
      "https://1000logos.net/wp-content/uploads/2020/06/illustrator-Logo-2013.png",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    category: "graphic design",
    rating: 5,
    price: 500,
    posted_at: new Date("2019-12-03 17:40:00"),
  },
  {
    id: 8,
    title: "I will develop a serverless backend using AWS Lambda.",
    owner: "Laura",
    image: "https://miro.medium.com/v2/resize:fit:506/0*uoRkNnhqu3d61Zgx.png",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
    category: "backend development",
    rating: 3,
    price: 750,
    posted_at: new Date("2020-04-27 06:50:00"),
  },
  {
    id: 9,
    title: "I will create an interactive dashboard with Power BI.",
    owner: "James",
    image:
      "https://images.datacamp.com/image/upload/v1714478776/re388xshtgihucfiiavf.png",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour.",
    category: "data visualization",
    rating: 4,
    price: 650,
    posted_at: new Date("2023-06-22 15:10:00"),
  },
  {
    id: 10,
    title: "I will build a chatbot using Dialogflow.",
    owner: "Chloe",
    image:
      "https://miro.medium.com/v2/resize:fit:2000/1*Rfq25z3kChmwAXE4mxLuMQ.png",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    category: "AI development",
    rating: 5,
    price: 1000,
    posted_at: new Date("2021-09-09 20:20:00"),
  },
  {
    id: 11,
    title: "I will develop a full-stack web app with MERN stack.",
    owner: "Henry",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
    category: "web development",
    rating: 2,
    price: 1200,
    posted_at: new Date("2022-12-13 07:35:00"),
  },
  {
    id: 12,
    title: "I will create an API with Flask and Swagger.",
    owner: "Evelyn",
    image:
      "https://i.pinimg.com/564x/55/39/8b/55398b80d2b3d3e43327a1626013d14e.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour.",
    category: "backend development",
    rating: 3,
    price: 400,
    posted_at: new Date("2023-02-18 16:55:00"),
  },
];
