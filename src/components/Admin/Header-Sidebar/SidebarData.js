import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IoMdSettings } from 'react-icons/io';
import { TbReportSearch } from 'react-icons/tb';
import { SiTicktick } from 'react-icons/si';
import { MdOutlineSchedule } from 'react-icons/md';
import { SiGoogleforms } from 'react-icons/si';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin-home',
    icon: <AiIcons.AiFillHome style={{ color: 'black' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Staff Details',
    path: '/staff-details',
    icon: <IoIcons.IoIosPaper style={{ color: 'black' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Staff Attendance',
    path: '/staff-attendance',
    icon: <SiTicktick style={{ color: 'black' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Schedules',
    path: '/scheduling',
    icon: <MdOutlineSchedule style={{ color: 'black' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Add Shift',
    path: '/shift-form',
    icon: < SiGoogleforms style={{ color: 'black' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Payroll',
    path: '/payroll',
    icon: <IoIcons.IoMdPeople style={{ color: 'black' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <TbReportSearch style={{ color: 'black' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoMdSettings style={{ color: 'black' }} />,
    cName: 'nav-text '
  },
];
