export default interface hello {
    name:string
    number:number
}

export type singleStock = {
    F_TYPE?:string,
    N_BUSINESS_TYPE_E?:string,
    N_BUSINESS_TYPE_T?:string,
    N_COMPANY_E?:string,
    N_COMPANY_T?:string,
    N_URL?:string,
    N_fullname?:string,
    N_name?:string,
    N_shortname?:string,
    marketcap?:number,
}

export type rawData = Array<singleStock>;

export interface propData {
    data: rawData;
  }


