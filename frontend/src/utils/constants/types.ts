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

export type ProfileType = {
  _id: number | null;
  email: string | null;
  account_type: "freelance" | "employer" | null;
  firstname: string | null;
  lastname: string | null;
  country: string | null;
  age: number | null;
  idToken: string | null;
  firebaseUID: string | null;
};
