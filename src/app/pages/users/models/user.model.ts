export interface UserI {
    id?:string;
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    address: {
        country: string,
        state: string,
        city: string,
        pinCode: string,
        landMark: string,
        location: string
    },
    username: string,
    password: string,
    bloodgroup: string,
    gender: string,
    dob: string,
    nationality: string,
    panCard: string,
    adharCard: string,
    statusID: number | boolean
    
}
