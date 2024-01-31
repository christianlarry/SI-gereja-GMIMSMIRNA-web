import SmirnaApiResponseModel from "./SmirnaApiResponseModel"

export interface BeritaModel{
  id:number
  id_user:number
  id_category:number
  author:string
  post_date:string
  news_title:string
  news_content:string
  category:string
  is_updated:boolean
  updated_by:string | null
  updated_date:string | null
  thumb_url:string | null
  views_count:number
}

export interface KategoriBeritaModel{
  id:number
  nama:string
}

export interface BeritaResponseModel extends SmirnaApiResponseModel{
  data: BeritaModel[]
}

export interface SingleBeritaResponseModel extends SmirnaApiResponseModel{
  data: BeritaModel
}

export interface KategoriBeritaResponseModel extends SmirnaApiResponseModel{
  data: KategoriBeritaModel[]
}