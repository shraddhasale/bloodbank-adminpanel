export interface BloodBankI {
    createdAt?:string,
email: string,
firstName: string,
id?: string,
lastName: string,
phoneNumber: string,
thumbnail?: string,
address: {
    country: string,
    state: string,
    city: string,
    pinCode: string,
    landMark: string,
    location: string
  },
statusID: number | boolean
}

