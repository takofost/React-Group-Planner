import mock from './../mock';

const projectDashboardAppDB = {
    widgets : {
        'widget1'      : {
            'ranges'      : {
                'DY' : 'Yesterday',
                'DT' : 'Today',
                'DTM': 'Tomorrow'
            },
            'currentRange': 'DT',
            'data'        : {
                'label': 'DUE TASKS',
                'count': {
                    'DY' : 21,
                    'DT' : 25,
                    'DTM': 19
                },
                'extra': {
                    'label': 'Completed',
                    'count': {
                        'DY' : 6,
                        'DT' : 7,
                        'DTM': '-'
                    }

                }
            },
            'detail'      : 'You can show some detailed information about this widget in here.'
        },
        'widget2'      : {
            'title' : 'Overdue',
            'data'  : {
                'label': 'TASKS',
                'count': 4,
                'extra': {
                    'label': 'Yesterday\'s overdue',
                    'count': 2
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget3'      : {
            'title' : 'Issues',
            'data'  : {
                'label': 'OPEN',
                'count': 32,
                'extra': {
                    'label': 'Closed today',
                    'count': 0
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget4'      : {
            'title' : 'Features',
            'data'  : {
                'label': 'PROPOSALS',
                'count': 42,
                'extra': {
                    'label': 'Implemented',
                    'count': 8
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },      
        'widget6'      : {
            'title'       : 'Task Distribution',
            'ranges'      : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'currentRange': 'TW',
            'mainChart'   : {
                labels  : [
                    'Frontend',
                    'Backend',
                    'API',
                    'Issues'
                ],
                datasets: {
                    'TW': [
                        {
                            data                : [15, 20, 38, 27],
                            backgroundColor     : [
                                '#f44336',
                                '#9c27b0',
                                '#03a9f4',
                                '#e91e63'
                            ],
                            hoverBackgroundColor: [
                                '#f45a4d',
                                '#a041b0',
                                '#25b6f4',
                                '#e9487f'
                            ]
                        }
                    ],
                    'LW': [
                        {
                            data                : [19, 16, 42, 23],
                            backgroundColor     : [
                                '#f44336',
                                '#9c27b0',
                                '#03a9f4',
                                '#e91e63'
                            ],
                            hoverBackgroundColor: [
                                '#f45a4d',
                                '#a041b0',
                                '#25b6f4',
                                '#e9487f'
                            ]
                        }
                    ],
                    '2W': [
                        {
                            data                : [18, 17, 40, 25],
                            backgroundColor     : [
                                '#f44336',
                                '#9c27b0',
                                '#03a9f4',
                                '#e91e63'
                            ],
                            hoverBackgroundColor: [
                                '#f45a4d',
                                '#a041b0',
                                '#25b6f4',
                                '#e9487f'
                            ]
                        }
                    ]
                },
                options : {
                    cutoutPercentage   : 66,
                    spanGaps           : false,
                    legend             : {
                        display : true,
                        position: 'bottom',
                        labels  : {
                            padding      : 16,
                            usePointStyle: true
                        }
                    },
                    maintainAspectRatio: false
                }
            },
            'footerLeft'  : {
                'title': 'Tasks Added',
                'count': {
                    '2W': 487,
                    'LW': 526,
                    'TW': 594
                }
            },
            'footerRight' : {
                'title': 'Tasks Completed',
                'count': {
                    '2W': 193,
                    'LW': 260,
                    'TW': 287
                }
            }
        },
        'widget7'      : {
            'title'       : 'Schedule',
            'currentRange': 'T',
            'ranges'      : {
                'T' : 'Today',
                'TM': 'Tomorrow'
            },
            'schedule'    : {
                'T' : [
                    {
                        'id'   : 1,
                        'title': 'Present Final Project',
                        'time' : '10:00 AM'
                    },
                    {
                        'id'   : 2,
                        'title': 'Answer Questions',
                        'time' : '10:10 AM'
                    },
                    {
                        'id'   : 3,
                        'title': 'Lunch',
                        'time' : '11:30 AM'
                    },
                    {
                        'id'   : 4,
                        'title': 'Final Presentations',
                        'time' : '12:15 PM'
                    },
                    {
                        'id'   : 5,
                        'title': 'Final Thoughts',
                        'time' : '2:00 PM'
                    },
                ],
                'TM': [
                    {
                        'id'   : 1,
                        'title': 'Jump Thanos',
                        'time' : '09:00 AM'
                    },
                ]
            }
        },
        
        'widget11'     : {
            'title': 'Team Members',
            'table': {
                'columns': [
                    {
                        'id'   : 'avatar',
                        'title': 'URL'
                    },
                    {
                        'id'   : 'name',
                        'title': 'Name'
                    },
                    {
                        'id'   : 'position',
                        'title': 'Position'
                    },
                    {
                        'id'   : 'email',
                        'title': 'Email'
                    },
                    {
                        'id'   : 'phone',
                        'title': 'Phone'
                    }
                ],
                'rows'   : [
                    {
                        'id'   : 1,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/Brandon.png'
                            },
                            {
                                id   : 'name',
                                value: 'Brandon Otero'
                            },
                            {
                                id   : 'position',
                                value: 'Authentication'
                            },
                            {
                                id   : 'email',
                                value: 'brandon@github.com'
                            },
                            {
                                id   : 'phone',
                                value: '+1-267-969-9615'
                            }
                        ]
                    },
                    {
                        'id'   : 2,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/Ryan.png'
                            },
                            {
                                id   : 'name',
                                value: 'Ryan Halfpenny'
                            },
                            {
                                id   : 'position',
                                value: 'Frontend'
                            },
                            {
                                id   : 'email',
                                value: 'ryan@github.com'
                            },
                            {
                                id   : 'phone',
                                value: '+1-609-233-246'
                            }
                        ]
                    },
                    {
                        'id'   : 3,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/Victoria.png'
                            },
                            {
                                id   : 'name',
                                value: 'Victoria Nguyen'
                            },
                            {
                                id   : 'position',
                                value: 'Chat/Backend'
                            },
                            {
                                id   : 'email',
                                value: 'victoria@github.com'
                            },
                            {
                                id   : 'phone',
                                value: '+1-267-752-7444'
                            }
                        ]
                    },
                    {
                        'id'   : 4,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/Ken.png'
                            },
                            {
                                id   : 'name',
                                value: 'Ken Tran'
                            },
                            {
                                id   : 'position',
                                value: 'Routing/Backend'
                            },
                            {
                                id   : 'email',
                                value: 'ken@github.com'
                            },
                            {
                                id   : 'phone',
                                value: '+1-202-555-0118'
                            }
                        ]
                    },
                ]
            }
        },
        'weatherWidget': {
            'locations'      : {
                'Philadelphia': {
                    'name'           : 'Philadephia',
                    'icon'           : 'sunny2',
                    'temp'           : {
                        'C': '32',
                        'F': '94'
                    },
                    'windSpeed'      : {
                        'KMH': 13,
                        'MPH': 8
                    },
                    'windDirection'  : 'WSW',
                    'rainProbability': '98%',
                    'next3Days'      : [
                        {
                            'name': 'Sunday',
                            'icon': 'sunny',
                            'temp': {
                                'C': '21',
                                'F': '87'
                            }
                        },
                        {
                            'name': 'Monday',
                            'icon': 'sunny',
                            'temp': {
                                'C': '19',
                                'F': '87'
                            }
                        },
                        {
                            'name': 'Tuesday',
                            'icon': 'sunny',
                            'temp': {
                                'C': '24',
                                'F': '90'
                            }
                        }
                    ]
                }
            },
            'currentLocation': 'Philadelphia',
            'tempUnit'       : 'F',
            'speedUnit'      : 'MPH'
        }
    },
    projects: [
        {
            'id'  : 1,
            'name': 'Orchestrate Backend'
        },
        {
            'id'  : 2,
            'name': 'Orchestrate Frontend'
        },
        {
            'id'  : 3,
            'name': 'Pet Dogs'
        },
        {
            'id'  : 4,
            'name': 'World Domination'
        }
    ]
};

mock.onGet('/api/project-dashboard-app/widgets').reply((config) => {
    return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply((config) => {
    return [200, projectDashboardAppDB.projects];
});
