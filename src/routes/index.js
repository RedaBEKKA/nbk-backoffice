//icons
import { RiDashboardFill, RiSettings5Fill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { FaWallet } from 'react-icons/fa';
import { IoDocumentsSharp, IoCardSharp } from 'react-icons/io5';
import { SiBuzzfeed } from 'react-icons/si';
import { BiTransfer } from 'react-icons/bi';

// components

const routes = [
  {
    label: 'Login',
    path: '/',
    icon: RiDashboardFill,
    // component: components,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: 'reset Password',
    path: '/resetPassword',
    icon: RiDashboardFill,
    // component: components,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: 'confirm reset Password',
    path: '/confirmResetPassword',
    icon: RiDashboardFill,
    // component: components,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: 'Tableau de bord',
    path: '/dashboard',
    icon: RiDashboardFill,
    // component: components,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Utilisateurs',
    path: '/users',
    icon: HiUsers,
    // component: components,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des Portefeuille',
    path: '/wallet',
    icon: FaWallet,
    // component: components,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des documents',
    path: '/documents',
    icon: IoDocumentsSharp,
    // component: components,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des opérations',
    icon: RiSettings5Fill,
    // component: components,
    protected: true,
    menu: true,
    sidbarlist: true,
    nested: [
      {
        label: 'payins',
        path: '/payins',
        icon: RiDashboardFill,
        // component: components,
        protected: true,
        menu: false,
        sidbarlist: true,
      },
      {
        label: 'payout',
        path: '/payout',
        icon: RiDashboardFill,
        // component: components,
        protected: true,
        menu: false,
        sidbarlist: true,
      },
      {
        label: 'payRefund',
        path: '/payRefund',
        icon: RiDashboardFill,
        // component: components,
        protected: true,
        menu: false,
        sidbarlist: true,
      },
    ],
  },
  {
    label: 'Gestion des bénéficiaires',
    icon: SiBuzzfeed,
    path: '/benefit',
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des transferts',
    path: '/transactions',
    icon: BiTransfer,
    // component: components,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des cartes',
    path: '/cards',
    icon: IoCardSharp,
    // component: components,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: '404',
    path: '*',
    // component: components,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
];

export default routes;
