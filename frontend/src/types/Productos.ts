import { IProduct } from "../services/api"

export type Product = {
  _id: number,
  name: string,
  brand: string,
  sector?: string,
  cost: number,
  percentageIncrease: number
  price: number,
}

export interface ResponseProduct {
  status: string,
  payload: IProduct[]
}