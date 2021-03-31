

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
            name: 'Users',
            icon: 'fa-table',
            routerLink: '/users'
          },
          {
            name: 'Api Key',
            icon: 'fa-table',
            routerLink: '/api-key'
          }
        ]
      },
    { name: 'Blood Bank', icon: 'icon-influencers', routerLink: '/blood-bank' },
    { name: 'Blood Bank Donate', icon: 'icon-influencers', routerLink: '/user-blood-bank-donate' },
    { name: 'Blood Bank Request', icon: 'icon-influencers', routerLink: '/user-blood-bank-request' },
]
 