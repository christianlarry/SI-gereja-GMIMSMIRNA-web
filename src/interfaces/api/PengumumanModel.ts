import SmirnaApiResponseModel from "./SmirnaApiResponseModel";

export default interface PengumumanModel{
  id: number,
  judul: string,
  isi: string,
  tanggal_acara: string
}

export interface PengumumanResponseModel extends SmirnaApiResponseModel{
  data: PengumumanModel[];
}