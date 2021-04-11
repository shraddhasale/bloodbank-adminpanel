export interface AdminuserI {
    createdAt?: string,
    email: string,
    firstName: string,
    id?: string,
    lastName: string,
    phoneNumber: string,
    password?:string,
    roleID:[],
    statusID: number | boolean
}
