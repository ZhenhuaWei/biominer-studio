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
    icon: 'home',
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
    routes: [
      {
        name: 'index',
        icon: 'experiment',
        path: '/stat-engine/index',
        component: './StatEngine',
      },
      {
        name: 'chart-list',
        icon: 'codepen',
        path: '/stat-engine/chart-list',
        component: './StatEngine/components/ChartList',
      },
    ],
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
