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
                    'DY' : 5,
                    'DT' : 153,
                    'DTM': 0
                },
                'extra': {
                    'label': 'Completed',
                    'count': {
                        'DY' : 8,
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
                'count': 0,
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
                'count': 146,
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
                'count': 0,
                'extra': {
                    'label': 'Implemented',
                    'count': 0
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
                    'API/Routing',
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
                        'title': 'Present Final',
                        'time' : 'Right Now'
                    },
                    {
                        'id'   : 2,
                        'title': 'Answer Questions',
                        'time' : 'In 10 Minutes'
                    },
                    {
                        'id'   : 3,
                        'title': 'Lunch',
                        'time' : '12:00 PM'
                    },
                    {
                        'id'   : 4,
                        'title': 'More Final Presentations',
                        'time' : '12:30 PM'
                    },
                    {
                        'id'   : 5,
                        'title': 'Congradulatory High Fives',
                        'time' : '2:00 PM'
                    },
                    
                ],
                'TM': [
                    {
                        'id'   : 1,
                        'title': 'Party',
                        'time' : '09:00 AM'
                    },
                    {
                        'id'   : 2,
                        'title': 'Party',
                        'time' : '11:00 AM'
                    },
                    {
                        'id'   : 3,
                        'title': 'Lunch',
                        'time' : '12:10 PM'
                    },
                    {
                        'id'   : 4,
                        'title': 'Party',
                        'time' : '15:00 AM'
                    },
                    {
                        'id'   : 5,
                        'title': 'Party',
                        'time' : '17:30 PM'
                    },
                    {
                        'id'   : 6,
                        'title': 'Party',
                        'time' : '19:30 PM'
                    },
                    {
                        'id'   : 7,
                        'title': 'Party',
                        'time' : '22:30 PM'
                    }
                ]
            }
        },
       
        'widget11'     : {
            'title': 'Team Members',
            'table': {
                'columns': [
                    {
                        'id'   : 'avatar',
                        'title': ''
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
                        'id'   : 'office',
                        'title': 'Office'
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
                                value: 'assets/images/avatars/james.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Jack Gilbert'
                            },
                            {
                                id   : 'position',
                                value: 'Design Manager'
                            },
                            {
                                id   : 'office',
                                value: 'Johor Bahru'
                            },
                            {
                                id   : 'email',
                                value: 'jgilbert48@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+16 298 032 7774'
                            }
                        ]
                    },
                    {
                        'id'   : 2,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/katherine.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Kathy Anderson'
                            },
                            {
                                id   : 'position',
                                value: 'Recruiting Manager'
                            },
                            {
                                id   : 'office',
                                value: 'Solţānābād'
                            },
                            {
                                id   : 'email',
                                value: 'kanderson49@mail.com.br'
                            },
                            {
                                id   : 'phone',
                                value: '+23 572 311 1136'
                            }
                        ]
                    },
                    {
                        'id'   : 3,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/garry.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Gary Gonzalez'
                            },
                            {
                                id   : 'position',
                                value: 'Speech Pathologist'
                            },
                            {
                                id   : 'office',
                                value: 'Gangkou'
                            },
                            {
                                id   : 'email',
                                value: 'ggonzalez4r@mail.cc'
                            },
                            {
                                id   : 'phone',
                                value: '+10 862 046 7916'
                            }
                        ]
                    },
                    {
                        'id'   : 4,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/andrew.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Mark Turner'
                            },
                            {
                                id   : 'position',
                                value: 'Recruiting Manager'
                            },
                            {
                                id   : 'office',
                                value: 'Neftegorsk'
                            },
                            {
                                id   : 'email',
                                value: 'mturner4a@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+01 139 803 9263'
                            }
                        ]
                    },
                    {
                        'id'   : 5,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/jane.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Kathryn Martinez'
                            },
                            {
                                id   : 'position',
                                value: 'Director of Sales'
                            },
                            {
                                id   : 'office',
                                value: 'Palekastro'
                            },
                            {
                                id   : 'email',
                                value: 'kmartinez4b@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+25 467 022 5393'
                            }
                        ]
                    },
                    {
                        'id'   : 6,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/alice.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Annie Gonzales'
                            },
                            {
                                id   : 'position',
                                value: 'Actuary'
                            },
                            {
                                id   : 'office',
                                value: 'Candon'
                            },
                            {
                                id   : 'email',
                                value: 'agonzales4c@mail.edu'
                            },
                            {
                                id   : 'phone',
                                value: '+99 891 619 7138'
                            }
                        ]
                    },
                    {
                        'id'   : 7,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/vincent.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Howard King'
                            },
                            {
                                id   : 'position',
                                value: 'Human Resources'
                            },
                            {
                                id   : 'office',
                                value: 'Bergen op Zoom'
                            },
                            {
                                id   : 'email',
                                value: 'hking4d@mail.gov'
                            },
                            {
                                id   : 'phone',
                                value: '+46 984 348 1409'
                            }
                        ]
                    },
                    {
                        'id'   : 8,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/joyce.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Elizabeth Dixon'
                            },
                            {
                                id   : 'position',
                                value: 'Electrical Engineer'
                            },
                            {
                                id   : 'office',
                                value: 'Písečná'
                            },
                            {
                                id   : 'email',
                                value: 'edixon4e@mail.gov'
                            },
                            {
                                id   : 'phone',
                                value: '+33 332 067 9063'
                            }
                        ]
                    },
                    {
                        'id'   : 9,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/danielle.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Dorothy Morris'
                            },
                            {
                                id   : 'position',
                                value: 'Office Assistant'
                            },
                            {
                                id   : 'office',
                                value: 'Magsaysay'
                            },
                            {
                                id   : 'email',
                                value: 'dmorris4f@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+05 490 958 6120'
                            }
                        ]
                    },
                    {
                        'id'   : 10,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/carl.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Mark Gonzales'
                            },
                            {
                                id   : 'position',
                                value: 'Quality Control'
                            },
                            {
                                id   : 'office',
                                value: 'Matsue-shi'
                            },
                            {
                                id   : 'email',
                                value: 'mgonzales4g@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+03 168 394 9935'
                            }
                        ]
                    },
                    {
                        'id'   : 11,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/profile.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Catherine Rogers'
                            },
                            {
                                id   : 'position',
                                value: 'Programmer Analyst'
                            },
                            {
                                id   : 'office',
                                value: 'Kangar'
                            },
                            {
                                id   : 'email',
                                value: 'crogers4h@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+86 235 407 5373'
                            }
                        ]
                    },
                    {
                        'id'   : 12,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/garry.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Ruth Grant'
                            },
                            {
                                id   : 'position',
                                value: 'Community Outreach'
                            },
                            {
                                id   : 'office',
                                value: 'Beaune'
                            },
                            {
                                id   : 'email',
                                value: 'rgrant4i@mail.pl'
                            },
                            {
                                id   : 'phone',
                                value: '+36 288 083 8460'
                            }
                        ]
                    },
                    {
                        'id'   : 13,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/james.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Phyllis Gutierrez'
                            },
                            {
                                id   : 'position',
                                value: 'Administrative Assistant'
                            },
                            {
                                id   : 'office',
                                value: 'Shlissel’burg'
                            },
                            {
                                id   : 'email',
                                value: 'pgutierrez4j@mail.net'
                            },
                            {
                                id   : 'phone',
                                value: '+52 749 861 9304'
                            }
                        ]
                    },
                    {
                        'id'   : 14,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/alice.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Lillian Morris'
                            },
                            {
                                id   : 'position',
                                value: 'Media Planner'
                            },
                            {
                                id   : 'office',
                                value: 'Berlin'
                            },
                            {
                                id   : 'email',
                                value: 'lmorris4k@mail.de'
                            },
                            {
                                id   : 'phone',
                                value: '+59 695 110 3856'
                            }
                        ]
                    },
                    {
                        'id'   : 15,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/vincent.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Jeremy Anderson'
                            },
                            {
                                id   : 'position',
                                value: 'Systems Engineer'
                            },
                            {
                                id   : 'office',
                                value: 'Lũng Hồ'
                            },
                            {
                                id   : 'email',
                                value: 'janderson4l@mail.uk'
                            },
                            {
                                id   : 'phone',
                                value: '+40 384 115 1448'
                            }
                        ]
                    },
                    {
                        'id'   : 16,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/carl.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Arthur Lawrence'
                            },
                            {
                                id   : 'position',
                                value: 'Nurse Practicioner'
                            },
                            {
                                id   : 'office',
                                value: 'Sarkanjut'
                            },
                            {
                                id   : 'email',
                                value: 'alawrence4m@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+36 631 599 7867'
                            }
                        ]
                    },
                    {
                        'id'   : 17,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/andrew.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'David Simmons'
                            },
                            {
                                id   : 'position',
                                value: 'Social Worker'
                            },
                            {
                                id   : 'office',
                                value: 'Ushumun'
                            },
                            {
                                id   : 'email',
                                value: 'dsimmons4n@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+01 189 681 4417'
                            }
                        ]
                    },
                    {
                        'id'   : 18,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/danielle.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Daniel Johnston'
                            },
                            {
                                id   : 'position',
                                value: 'Help Desk'
                            },
                            {
                                id   : 'office',
                                value: 'São Carlos'
                            },
                            {
                                id   : 'email',
                                value: 'djohnston4o@mail.gov'
                            },
                            {
                                id   : 'phone',
                                value: '+60 028 943 7919'
                            }
                        ]
                    },
                    {
                        'id'   : 19,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/joyce.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Ann King'
                            },
                            {
                                id   : 'position',
                                value: 'Internal Auditor'
                            },
                            {
                                id   : 'office',
                                value: 'Liren'
                            },
                            {
                                id   : 'email',
                                value: 'aking4p@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+91 103 932 6545'
                            }
                        ]
                    },
                    {
                        'id'   : 20,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/james.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Phillip Franklin'
                            },
                            {
                                id   : 'position',
                                value: 'VP Accounting'
                            },
                            {
                                id   : 'office',
                                value: 'Soba'
                            },
                            {
                                id   : 'email',
                                value: 'pfranklin4q@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+25 820 986 7626'
                            }
                        ]
                    }
                ]
            }
        },
        'weatherWidget': {
            'locations'      : {
                'Philadelphia': {
                    'name'           : 'Philadelphia',
                    'icon'           : 'sunny',
                    'temp'           : {
                        'C': '34/23',
                        'F': '93/74'
                    },
                    'windSpeed'      : {
                        'KMH': 11,
                        'MPH': 7
                    },
                    'windDirection'  : 'S',
                    'rainProbability': '30%',
                    'next3Days'      : [
                        {
                            'name': 'Saturday',
                            'icon': 'sunny',
                            'temp': {
                                'C': '34/22',
                                'F': '94/72'
                            }
                        },
                        {
                            'name': 'Sunday',
                            'icon': 'sunny',
                            'temp': {
                                'C': '30/18',
                                'F': '86/65'
                            }
                        },
                        {
                            'name': 'Monday',
                            'icon': 'sunny',
                            'temp': {
                                'C': '31/22',
                                'F': '88/71'
                            }
                        }
                    ]
                }
            },
            'currentLocation': 'Philadelphia',
            'tempUnit'       : 'C',
            'speedUnit'      : 'KMH'
        }
    },
    projects: [
        {
            'id'  : 1,
            'name': 'Orchestrate App, Backend'
        },
        {
            'id'  : 2,
            'name': 'Orchestrate App, Frontend'
        },
        {
            'id'  : 3,
            'name': 'World Domination'
        },
        {
            'id'  : 4,
            'name': 'Pet Dogs'
        }
    ]
};

mock.onGet('/api/project-dashboard-app/widgets').reply((config) => {
    return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply((config) => {
    return [200, projectDashboardAppDB.projects];
});
