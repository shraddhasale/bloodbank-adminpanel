export interface UserBloodBankRequestI {
    id?:string,
    createdAt?:string;
    updatedAt?:string;
    userID: string,
    bloodBankID: string,
    requestFor: string,
    isHospitalize: string ,
    statusID: number | boolean;
}
