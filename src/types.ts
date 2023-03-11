export interface IBid {
  id: string;
  name: string;
  price: number;
  image: any;
  date: string;
}

export interface INFTCard {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: IBid[];
}
