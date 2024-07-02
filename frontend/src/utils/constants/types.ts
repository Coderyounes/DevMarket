export type FreelancerCardType = {
  name: string;
  username: string;
  profile_img: string;
  description: string;
  job: string;
  rating: number;
};

export type ServiceCardType = {
  id: number;
  owner: string;
  title: string;
  posted_at: Date;
  image?: string;
  category: string;
  price: number;
  description: string;
  rating?: number;
};

export type Profile = {
  id: number;
  email: string;
  account_type: "freelancer" | "employer";
  first_name: string;
  last_name: string;
  country: string;
  age: number;
};
