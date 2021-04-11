

export const  sidebarMenu = [
    {
        name: 'Access Control List',
        icon: 'icon-access-control-list',
        nestedMenu: [
          {
            name: 'URL',
            icon: 'fa-table',
            routerLink: '/urls'
          },
          { name: 'Roles', icon: 'fa-table', routerLink: '/roles' },
          {
            name: 'Admin-Users',
            icon: 'fa-table',
            routerLink: '/admin-users'
          },
          
          {
            name: 'Api Key',
            icon: 'fa-table',
            routerLink: '/api-key'
          }
        ]
      },
    {
      name: 'Users',icon: 'icon-influencers',routerLink: '/users'
    },
    { name: 'Blood Bank', icon: 'icon-influencers', routerLink: '/blood-bank' },
    { name: 'Blood Bank Donate', icon: 'icon-influencers', routerLink: '/user-blood-bank-donate' },
    { name: 'Blood Bank Request', icon: 'icon-influencers', routerLink: '/user-blood-bank-request' },
]
 