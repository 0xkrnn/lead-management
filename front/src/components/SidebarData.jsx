import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartSimple, faDatabase, faPencil, faUser } from '@fortawesome/free-solid-svg-icons';

const SidebarData = [
    {
        title: "Dash Board",
        icon: <FontAwesomeIcon icon={faChartSimple} />,
        link: "/user/"
    },
    {
        title: "My Leads",
        icon: <FontAwesomeIcon icon={faPencil} />,
        link: "/user/leads"
    },
    // {
    //     title: "Activities",
    //     icon: <FontAwesomeIcon icon={faChartLine} />,
    //     link: "/user/activities"
    // },
    // {
    //     title: "Dummy",
    //     icon: <FontAwesomeIcon icon={faDatabase} />,
    //     link: "/user/db"
    // },
    // {
    //     title: "Profile",
    //     icon: <FontAwesomeIcon icon={faUser} />,
    //     link: "/user/profile"
    // }
]

export default SidebarData;