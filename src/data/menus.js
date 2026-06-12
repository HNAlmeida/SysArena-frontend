import {
  Activity,
  PieChart,
  BarChart2,
  Calendar,
  CalendarCheck,
  Database,
  Users,
  Bell,
  MessageCircle,
  StickyNote,
  User,
  Mail,
  LogIn,
  Edit2,
  Bug,
  Home,
  ChartNoAxesColumn,
  ChartLine,
  Settings2,
  ListTodo,
} from "lucide-react";

export const menus = [
  {
    items: [{ name: "Início", icon: Home, path: "/" }],
  },
  {
    title: { sm: "BUSINESS", xs: "BUS" },
    items: [
      {
        name: "Dashboard",
        icon: ChartNoAxesColumn,
        isActive: true,
        path: "/dashboard",
      },
      {
        name: "Analytics",
        icon: PieChart,
        submenu: [
          {
            name: "Relatórios",
            icon: ChartLine,
            submenu: [
              { name: "Mensal", icon: Calendar },
              {
                name: "Anual",
                icon: CalendarCheck,
                submenu: [
                  { name: "Item 1", icon: Calendar },
                  { name: "Item 2", icon: CalendarCheck },
                ],
              },
            ],
          },
          { name: "Dados", icon: Database },
          { name: "Usuários", icon: Users },
        ],
      },
      { name: "Notificações", icon: Bell },
      { name: "Tasks", icon: ListTodo, path: "/tasks" },
    ],
  },
  {
    title: { sm: "APPLICATION", xs: "APP" },
    items: [
      { name: "Chat", icon: MessageCircle },
      { name: "Notes", icon: StickyNote },
      { name: "Customers", icon: User },
      { name: "Mail", icon: Mail },
      { name: "Configurações", icon: Settings2 },
    ],
  },
  {
    title: { sm: "AUTHENTICATION", xs: "AUTH" },
    items: [
      { name: "Login", icon: LogIn },
      { name: "Register", icon: Edit2 },
      { name: "Error", icon: Bug },
    ],
  },
];
