export class ProductItemModel {
  id: string;
  name: string;
  code: string;
  description: string;
  // TODO: use timestamp instead of text
  releaseDate: string;
  price: string;
  rating: number;
  itemImgUrl: string;
}
