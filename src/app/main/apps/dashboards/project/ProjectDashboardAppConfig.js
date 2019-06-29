import React from 'react';

export const ProjectDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/home',
            component: React.lazy(() => import('./ProjectDashboardApp'))
        }
    ]
};
