//icons
import { RiDashboardFill, RiSettings5Fill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { FaWallet } from 'react-icons/fa';
import { IoDocumentsSharp, IoCardSharp } from 'react-icons/io5';
import { SiBuzzfeed } from 'react-icons/si';
import { BiTransfer } from 'react-icons/bi';

// components
import Login from 'pages/login';
import ResetPassword from 'pages/resetPassword';
import ConfirmReset from 'pages/confirmReset';
import Dashboard from 'pages/dashboard';
import Wallet from 'pages/wallet';
import Cards from 'pages/cards';
import Transactions from 'pages/transactions';
import Users from 'pages/users';
import Documents from 'pages/documents';
import Benifit from 'pages/benefit';
import FourOfour from 'pages/404';

const routes = [
  {
    label: 'Login',
    path: '/',
    icon: RiDashboardFill,
    component: Login,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: 'reset Password',
    path: '/resetPassword',
    icon: RiDashboardFill,
    component: ResetPassword,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: 'confirm reset Password',
    path: '/confirmResetPassword',
    icon: RiDashboardFill,
    component: ConfirmReset,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: 'Tableau de bord',
    path: '/dashboard',
    icon: RiDashboardFill,
    component: Dashboard,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Utilisateurs',
    path: '/users',
    icon: HiUsers,
    component: Users,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des Portefeuille',
    path: '/wallet',
    icon: FaWallet,
    component: Wallet,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des documents',
    path: '/documents',
    icon: IoDocumentsSharp,
    component: Documents,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  //   {
  //     label: 'Gestion des opérations',
  //     icon: RiSettings5Fill,
  //     // component: components,
  //     protected: true,
  //     menu: true,
  //     sidbarlist: true,
  //     nested: [
  //       {
  //         label: 'payins',
  //         path: '/payins',
  //         icon: RiDashboardFill,
  //         // component: components,
  //         protected: true,
  //         menu: false,
  //         sidbarlist: true,
  //       },
  //       {
  //         label: 'payout',
  //         path: '/payout',
  //         icon: RiDashboardFill,
  //         // component: components,
  //         protected: true,
  //         menu: false,
  //         sidbarlist: true,
  //       },
  //       {
  //         label: 'payRefund',
  //         path: '/payRefund',
  //         icon: RiDashboardFill,
  //         // component: components,
  //         protected: true,
  //         menu: false,
  //         sidbarlist: true,
  //       },
  //     ],
  //   },
  {
    label: 'Gestion des bénéficiaires',
    icon: SiBuzzfeed,
    path: '/benefit',
    component: Benifit,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des transferts',
    path: '/transactions',
    icon: BiTransfer,
    component: Transactions,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des cartes',
    path: '/cards',
    icon: IoCardSharp,
    component: Cards,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: '404',
    path: '*',
    component: FourOfour,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
];

export default routes;
