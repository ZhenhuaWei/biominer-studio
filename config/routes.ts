export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'dataset',
    icon: 'database',
    path: '/dataset',
    component: './DataSet',
  },
  {
    name: 'stat-engine',
    icon: 'experiment',
    path: '/stat-engine',
    component: './StatEngine',
  },
  {
    name: 'history-table',
    icon: 'history',
    path: '/history-table',
    component: './HistoryTable',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
