import BeritaModel from "./BeritaModel"

export default interface BeritaResponseModel{
  code: number
  data: BeritaModel[]
  message: string
}