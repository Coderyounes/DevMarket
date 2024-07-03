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
  posted_at: Date;
  title: string;
  owner: string;
  image?: string;
  description: string;
  category: string;
  rating?: number;
  price: number;
};

export type Profile = {
  id: number;
  first_name: string;
  last_name: string;
  country: string;
  age: number;
  email: string;
  account_type: "freelancer" | "employer";
};
