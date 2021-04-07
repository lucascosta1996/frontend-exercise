import { ReactComponent as DashboardIcon } from '../assets/dashboard.svg';
import { ReactComponent as ChatIcon } from '../assets/chat.svg';
import { ReactComponent as FolderIcon } from '../assets/folder.svg';
import { ReactComponent as MessageIcon } from '../assets/message.svg';
import { ReactComponent as CogIcon } from '../assets/cog.svg';


export const sidebarItens = [
  {
    to: '/overview',
    title: 'Overview Link',
    alt: 'Dashboard Icon',
    svg: (color) => <DashboardIcon fill={color} />,
  },
  {
    to: '/chat',
    title: 'Chat Link',
    alt: 'Chat Icon',
    svg: (color) => <ChatIcon fill={color} />,
  },
  {
    to: '/files',
    title: 'Files Link',
    alt: 'Folder icon',
    svg: (color) => <FolderIcon fill={color} />,
  },
  {
    to: '/message',
    title: 'Message Link',
    alt: 'Letter icon',
    svg: (color) => <MessageIcon fill={color} />,
  },
  {
    to: '/settings',
    title: 'Settings Link',
    alt: 'Settings icon',
    svg: (color) => <CogIcon fill={color} />,
  }
];