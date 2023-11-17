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

export interface BeritaResponseModel{
  code: number
  data: BeritaModel[]
  message: string
}