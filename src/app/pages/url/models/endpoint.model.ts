

export interface EndpointI {
  id?: string;
  name: string;
  endPoint: string;
  verb?: ''; // ! used for creating new endpoint
  roleID: [],
  statusID:number | boolean;
  createdAt?: string;
  updatedAt?: string;
}



