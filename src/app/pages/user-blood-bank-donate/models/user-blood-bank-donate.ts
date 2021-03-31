export interface UserBloodBankDonateI {
    id?:string,
    userID: string,
    bloodBankID: string,
    paidAmount: number,
    paidStatus: number,
    statusID: number | boolean;
}
