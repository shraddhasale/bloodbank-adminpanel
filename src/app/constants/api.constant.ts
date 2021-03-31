// any global API config are defined here
export const API_CONFIG = {
  pageSize: 10
};

// All the API endpoints are defined here
export const API_ENDPOINT = {
  auth: {
    login: '/adminuser/login',
  },
  url:{
    fetchAll: '/url',
    create: '/url',
    fetchById:'/url',
    update:'/url',
    count:'/url/count',
    delete: '/url',
  },
  users: {
    fetchAll: '/user', //Get 
    fetchById:'/user', //Get
    count:'/user/count', //Get
    create: '/user', //Post
    update: '/user', //Put
    delete: '/user', //Delete
    login:'/user/login' //Post
  },
  role:{
    fetchAll: '/role', //Get 
    create: '/role', //Get
    fetchById:'/role',
    update:'/role',
    delete: '/role',
  },
  adminUsers:{
    fetchAll: '/adminuser', //Get 
    create: '/adminuser', //post
    fetchById:'/adminuser',
    update:'/adminuser',
    delete: '/adminuser',
  },
  apiKey:{
    fetchAll: '/apikey', //Get 
    create: '/apikey', //post
    fetchById:'/apikey',
    update:'/apikey',
    delete: '/apikey',
  },
  donate:{
    fetchAll: '/userbloodbankdonate', //Get 
    create: '/userbloodbankdonate', //post
    fetchById:'/userbloodbankdonate',
    update:'/userbloodbankdonate',
    delete: '/userbloodbankdonate',
  },
  bloodRequest:{
    fetchAll: '/userbloodbankrequest', //Get 
    create: '/userbloodbankrequest', //post
    fetchById:'/userbloodbankrequest',
    update:'/userbloodbankrequest',
    delete: '/userbloodbankrequest',
  },
  bloodBank:{
    fetchall:'/bloodbank',
    
    create: '/bloodbank', //post
    fetchById:'/bloodbank',
    update:'/bloodbank',
    delete: '/bloodbank',
  }
};

// Status Enum for all modules
export enum StatusEnum {
  INACTIVE,
  ACTIVE,
  DELETED,
}



