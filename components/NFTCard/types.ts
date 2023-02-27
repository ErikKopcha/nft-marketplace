export interface INFTCard {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: Array<{
    id: string;
    name: string;
    price: number;
    image: any;
    date: string;
  }>;
}
