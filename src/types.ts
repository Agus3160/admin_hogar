export type Document = {
  id:string,
  url:string,
  title:string,
  sectionId:string,
  section:Section
}

export type Section = {
  id:string,
  name:string
}

export type ApiResponse<T> = {
  data?:T,
  error?:string
  message?:string
}

export type DataPagination<T> ={
  list:T[],
  pages:number,
}