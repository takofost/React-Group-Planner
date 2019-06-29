import React from 'react';

export const ProjectDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/dashboards/home',
            component: React.lazy(() => import('./ProjectDashboardApp'))
        }
    ]
};
