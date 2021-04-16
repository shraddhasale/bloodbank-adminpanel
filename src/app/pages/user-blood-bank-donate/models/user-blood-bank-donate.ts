export interface UserBloodBankDonateI {
    id?:string,
    userID: string,
    bloodBankID: string,
    paidAmount: number,
    paidStatus: number,
    createdAt?: string,
    updatedAt?: string,
    requestFor: string,
    statusID: number | boolean;
}
