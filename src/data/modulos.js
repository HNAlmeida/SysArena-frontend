import {
  Activity,
  Archive,
  ArrowDownUp,
  ArrowLeftRight,
  Baby,
  BadgeCheck,
  BanknoteArrowDown,
  BanknoteArrowDownIcon,
  BanknoteArrowUp,
  Barcode,
  Bell,
  Blocks,
  Book,
  BookA,
  BookDown,
  Bookmark,
  BookMarked,
  BookmarkPlus,
  BookOpen,
  BookPlus,
  BookSearch,
  BookText,
  BookType,
  BookUp,
  BookUser,
  Bot,
  Boxes,
  Brain,
  Bug,
  Building,
  Building2,
  CalendarCheck2,
  CalendarClock,
  CalendarDays,
  CalendarHeart,
  CalendarRange,
  ChartBarStacked,
  ChartColumn,
  ChartColumnBig,
  ChartNoAxesColumn,
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  CircleDollarSign,
  CircleDot,
  CircleEllipsis,
  ClipboardCheck,
  ClipboardList,
  Clock,
  ClockPlus,
  Code,
  Cpu,
  CreditCard,
  Database,
  DatabaseCheck,
  DollarSign,
  Edit2,
  File,
  FileArchive,
  FileClock,
  FilePenLine,
  FilePlus,
  FilePlus2,
  Files,
  FileSearch,
  FileText,
  Filter,
  FolderClock,
  FolderCog,
  FolderTree,
  GaugeCircle,
  GitCompareArrows,
  Globe,
  GraduationCap,
  Grid2X2,
  HandHelping,
  Handshake,
  History,
  Home,
  KeyRound,
  Landmark,
  Languages,
  Layers2,
  Layers3,
  Library,
  LibraryBig,
  LibrarySquare,
  ListTodo,
  ListTree,
  LogIn,
  Logs,
  Magnet,
  MapPin,
  MonitorPlay,
  NotebookPen,
  NotebookTabs,
  Package,
  Package2,
  Palette,
  PiggyBank,
  Receipt,
  ReceiptText,
  RefreshCcwDot,
  Repeat2,
  Ruler,
  ScanBarcode,
  School,
  School2,
  Search,
  Send,
  Settings,
  ShoppingBag,
  ShoppingCart,
  SigmaSquare,
  SlidersHorizontal,
  Sparkle,
  Sparkles,
  Split,
  Sprout,
  SquareCheck,
  SquareDashed,
  StarPlus,
  Stars,
  TableOfContents,
  TableProperties,
  Tags,
  Target,
  Terminal,
  Tickets,
  Timer,
  ToolCase,
  Truck,
  Undo2,
  User,
  User2,
  UserCog,
  UserCog2,
  UserPen,
  UserRoundCog,
  Users,
  Users2,
  Utensils,
  VenusAndMars,
  Wallet,
  WalletCards,
  Waypoints,
} from "lucide-react";

const modulos = [
  {
    id: "/",
    icon: Home,
    name: "Home",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/", isActive: true }],
      },
      { type: "divider", label: { sm: "Módulos", xs: "MOD" } },
      {
        title: { sm: "Acadêmico", xs: "ACD" },
        items: [
          { name: "Secretaria", icon: NotebookTabs, path: "/secretaria" },
          { name: "Professor", icon: GraduationCap, path: "/professor" },
          { name: "Escolas", icon: School2, path: "/escolas" },
        ],
      },
      {
        title: { sm: "Financeiro", xs: "FIN" },
        items: [
          { name: "Receber", icon: BanknoteArrowDown, path: "/receber" },
          { name: "Pagar", icon: BanknoteArrowUp, path: "/pagar" },
          {
            name: "Conciliação Bancária",
            icon: Landmark,
            path: "/conciliacao_bancaria",
          },
        ],
      },
      {
        title: { sm: "Administrativo", xs: "ADM" },
        items: [
          { name: "Estoque", icon: Package, path: "/estoque" },
          { name: "CRM", icon: Handshake, path: "/crm" },
          { name: "Acesso", icon: KeyRound, path: "/acesso" },
          { name: "Horários", icon: Clock, path: "/horarios" },
          { name: "Compras", icon: ShoppingBag, path: "/compras" },
          { name: "Biblioteca", icon: LibraryBig, path: "/biblioteca" },
        ],
      },
      { type: "divider", label: { sm: "Outros", xs: "OUT" } },
      {
        title: { sm: "Exemplos", xs: "EXE" },
        items: [
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/dashboard" },
          { name: "Clientes", icon: User2, path: "/clientes" },
          { name: "Tasks", icon: ListTodo, path: "/tasks" },
        ],
      },
      {
        title: { sm: "Autenticação", xs: "AUTH" },
        items: [
          { name: "Login", icon: LogIn },
          { name: "Registro", icon: Edit2 },
          { name: "Error", icon: Bug },
        ],
      },
    ],
  },
  {
    id: "/secretaria",
    icon: NotebookTabs,
    name: "Secretaria",
    group: "Acadêmico",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        //title: { sm: "Cadastros", xs: "CAD" },
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Alunos", icon: User2, path: null },
              { name: "Responsáveis", icon: User, path: null },
              {
                name: "Extras Curriculares",
                icon: Stars,
                submenu: [
                  { name: "Grupo de Atividades", icon: Sparkles, path: null },
                  { name: "Atividades", icon: Sparkle, path: null },
                  { name: "Geração", icon: StarPlus, path: null },
                ],
              },
              {
                name: "Estrutura Escolar",
                icon: School2,
                submenu: [
                  { name: "Cursos", icon: BookMarked, path: null },
                  { name: "Segmentos", icon: Split, path: null },
                  { name: "Níveis", icon: Layers3, path: null },
                  { name: "Turmas", icon: Blocks, path: null },
                  { name: "Grades de Aulas", icon: Grid2X2, path: null },
                  { name: "Grupo de Períodos", icon: null, path: null },
                  { name: "Períodos Letivos", icon: null, path: null },
                  {
                    name: "Itinerários Formativos",
                    icon: Waypoints,
                    path: null,
                  },
                ],
              },
              {
                name: "Pedagógico",
                icon: Brain,
                submenu: [
                  { name: "Assuntos", icon: null, path: null },
                  { name: "Conceitos", icon: null, path: null },
                  { name: "Disciplinas", icon: BookOpen, path: null },
                  { name: "Funcionários", icon: UserCog2, path: null },
                  { name: "Métodos de Avaliação", icon: null, path: null },
                  { name: "Minutagens", icon: null, path: null },
                  { name: "Trilhas", icon: null, path: null },
                ],
              },
              {
                name: "Frequência",
                icon: ClipboardCheck,
                submenu: [
                  { name: "Justificativas de Faltas", icon: null, path: null },
                ],
              },
              {
                name: "Serviços",
                icon: Utensils,
                submenu: [{ name: "Refeições", icon: null, path: null }],
              },
              {
                name: "Administrativo",
                icon: FolderCog,
                submenu: [
                  {
                    name: "Categorias de Responsáveis",
                    icon: Users,
                    path: null,
                  },
                  { name: "Departamentos", icon: null, path: null },
                  { name: "Estabelecimentos", icon: School, path: null },
                  { name: "Feriados", icon: CalendarHeart, path: null },
                  { name: "Gestores", icon: UserCog, path: null },
                  { name: "Grupos de Alunos", icon: null, path: null },
                  { name: "Motivos de Saída", icon: null, path: null },
                  { name: "Processos", icon: null, path: null },
                  { name: "Tipo de Solicitações", icon: null, path: null },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Notas",
            icon: NotebookTabs,
            submenu: [
              { name: "Digitação", icon: NotebookPen, path: null },
              { name: "Consolidação", icon: SigmaSquare, path: null },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Históricos",
            icon: History,
            submenu: [
              { name: "Digitação", icon: FilePenLine, path: null },
              { name: "Emissão", icon: FileArchive, path: null },
            ],
          },
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              {
                name: "Alunos",
                icon: User2,
                submenu: [
                  { name: "Gerais", icon: Files, path: null },
                  { name: "Declarações", icon: null, path: null },
                  { name: "Dossiês", icon: null, path: null },
                  { name: "Fichas / Requerimentos", icon: null, path: null },
                  {
                    name: "Carteiras de Identificação",
                    icon: null,
                    path: null,
                  },
                  { name: "Carômetros", icon: Timer, path: null },
                  { name: "Livros de Matriculas", icon: null, path: null },
                  {
                    name: "Ativ. Extras Curriculares",
                    icon: Stars,
                    path: null,
                  },
                ],
              },
              {
                name: "Notas",
                icon: NotebookTabs,
                submenu: [
                  {
                    name: "Caderneta Online",
                    icon: null,
                    submenu: [
                      { name: "Gerais", icon: Files, path: null },
                      { name: "Registros de Aulas", icon: null, path: null },
                      { name: "Frequências", icon: null, path: null },
                    ],
                  },
                  { name: "Diários", icon: null, path: null },
                  { name: "Boletins", icon: null, path: null },
                  {
                    name: "Mapas",
                    icon: null,
                    submenu: [
                      { name: "Avaliações", icon: null, path: null },
                      { name: "Conferência", icon: null, path: null },
                    ],
                  },
                  { name: "Fichas Individuais", icon: null, path: null },
                  { name: "Atas", icon: null, path: null },
                ],
              },
              {
                name: "Funcionários",
                icon: UserCog2,
                submenu: [
                  { name: "Gerais", icon: Files, path: null },
                  { name: "Folhas de Ponto", icon: null, path: null },
                  { name: "Carteiras de ID", icon: null, path: null },
                ],
              },
              { name: "Etiquetas de Alunos", icon: Tags, path: null },
            ],
          },
          {
            name: "Gráficos",
            icon: ChartColumn,
            submenu: [
              { name: "Ocupações", icon: ChartBarStacked, path: null },
              { name: "Situações", icon: CircleDot, path: null },
              { name: "Sexos", icon: VenusAndMars, path: null },
              { name: "Idades", icon: Sprout, path: null },
              {
                name: "Desempenho",
                icon: GaugeCircle,
                submenu: [
                  { name: "Alunos", icon: User2, path: null },
                  { name: "Turmas", icon: Blocks, path: null },
                  { name: "Alunos/Turmas", icon: ChartColumn, path: null },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [{ name: "Censo Escolar", icon: DatabaseCheck, path: null }],
        divider: { label: { sm: "Censo", xs: "CEN" } },
      },
    ],
  },
  {
    id: "/professor",
    icon: GraduationCap,
    name: "Professor",
    group: "Acadêmico",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Registro de aula / Frequência",
            icon: FileText,
            path: null,
          },
          { name: "Comunicados", icon: Bell, path: null },
          { name: "Notas", icon: NotebookTabs, path: null },
          { name: "Tarefas", icon: ListTodo, path: null },
          { name: "Redação", icon: FilePenLine, path: null },
        ],
      },
      {
        items: [
          {
            name: "EAD",
            icon: MonitorPlay,
            submenu: [
              { name: "Materiais", icon: LibrarySquare, path: null },
              {
                name: "Avaliações",
                icon: ClipboardCheck,
                submenu: [
                  { name: "Conteúdo", icon: null, path: null },
                  { name: "Questões", icon: null, path: null },
                  { name: "Avaliações", icon: null, path: null },
                  { name: "Cadernos", icon: null, path: null },
                ],
              },
              { name: "Simulados", icon: Target, path: null },
            ],
          },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              { name: "Gerais", icon: Files, path: null },
              { name: "Registros de Aulas", icon: FileText, path: null },
              { name: "Frequências", icon: CalendarCheck2, path: null },
              { name: "Carômetros", icon: Timer, path: null },
            ],
          },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Coordenação",
            icon: UserRoundCog,
            submenu: [
              { name: "Registros de Aulas", icon: FileText, path: null },
              { name: "Frequências", icon: CalendarCheck2, path: null },
              { name: "Comunicados / Ocorrências", icon: Bell, path: null },
              { name: "Tarefas", icon: ListTodo, path: null },
              { name: "Registros de Tarefas", icon: SquareCheck, path: null },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "/escolas",
    icon: School2,
    name: "Escolas",
    group: "Acadêmico",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Grupos de Empresas", icon: Building2, path: null },
              { name: "Empresas", icon: Building, path: null },
              { name: "Recursos", icon: ToolCase, path: null },
              { name: "Scripts", icon: Code, path: null },
              { name: "Logs", icon: Logs, path: null },
            ],
          },
          {
            name: "Monitoramento",
            icon: Activity,
            submenu: [
              { name: "Cadastro", icon: Database, path: null },
              {
                name: "Empresas",
                icon: Building,
                submenu: [
                  { name: "Por Região", icon: null, path: null },
                  { name: "Por Estado", icon: null, path: null },
                  { name: "Por Cidade", icon: null, path: null },
                ],
              },
              { name: "Personalizados", icon: SlidersHorizontal, path: null },
            ],
          },
          {
            name: "Rotinas",
            icon: Repeat2,
            submenu: [
              { name: "Unificar Alunos", icon: User2, path: null },
              { name: "Unificar Disciplinas", icon: BookOpen, path: null },
              { name: "Unificar Responsáveis", icon: User, path: null },
              {
                name: "Alterar Grupos de Períodos",
                icon: CalendarRange,
                path: null,
              },
              {
                name: "Alterar Grades de Horários",
                icon: CalendarDays,
                path: null,
              },
            ],
          },
          {
            name: "Dicionário de dados",
            icon: BookA,
            submenu: [
              { name: "Consulta", icon: BookSearch, path: null },
              { name: "Cadastro", icon: BookPlus, path: null },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "/receber",
    icon: BanknoteArrowDown,
    name: "Receber",
    group: "Financeiro",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Alunos", icon: User2 },
              { name: "Responsáveis", icon: User },
              {
                name: "Extras Curriculares",
                icon: Stars,
                submenu: [
                  { name: "Grupo de Atividades", icon: Sparkles },
                  { name: "Atividades", icon: Sparkle },
                  { name: "Geração", icon: StarPlus },
                ],
              },
              {
                name: "Estrutura Acadêmica",
                icon: School2,
                submenu: [
                  { name: "Cursos", icon: BookMarked, path: null },
                  { name: "Segmentos", icon: Split, path: null },
                  { name: "Níveis", icon: Layers3, path: null },
                  { name: "Turmas", icon: Blocks, path: null },
                ],
              },
              {
                name: "Financeiro",
                icon: Wallet,
                submenu: [
                  { name: "Tipos de Pagamentos", icon: null, path: null },
                  { name: "Formas de Cobrança", icon: WalletCards, path: null },
                  { name: "Planos de Contas", icon: null, path: null },
                  { name: "Tipos de Contas", icon: null, path: null },
                  { name: "Contas", icon: null, path: null },
                ],
              },
              {
                name: "Configurações",
                icon: Settings,
                submenu: [
                  {
                    name: "Categorias de Responsáveis",
                    icon: Users,
                    path: null,
                  },
                  { name: "Grupos de Alunos", icon: Users2, path: null },
                  { name: "Feriados", icon: CalendarHeart, path: null },
                  { name: "Motivos de Saída", icon: null, path: null },
                  { name: "Tipo de Solicitações", icon: null, path: null },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Duplicatas",
            icon: File,
            submenu: [
              {
                name: "Gerações",
                icon: FilePlus2,
                submenu: [
                  { name: "Serviços", icon: null, path: null },
                  { name: "Atividades", icon: null, path: null },
                ],
              },
              {
                name: "Emissões",
                icon: Barcode,
                submenu: [
                  { name: "Serviços", icon: null, path: null },
                  { name: "Atividades", icon: null, path: null },
                  { name: "Arquivos de Remessa", icon: null, path: null },
                ],
              },
              {
                name: "Envios",
                icon: Send,
                submenu: [{ name: "Serviços", icon: null, path: null }],
              },
              {
                name: "Quitações",
                icon: ScanBarcode,
                submenu: [
                  { name: "Automáticas", icon: null, path: null },
                  { name: "Manuais", icon: null, path: null },
                  {
                    name: "Parceiros",
                    icon: null,
                    submenu: [
                      { name: "API", icon: null, path: null },
                      { name: "CSV", icon: null, path: null },
                    ],
                  },
                ],
              },
              {
                name: "Controles Bancários",
                icon: Landmark,
                submenu: [
                  { name: "Contas", icon: null, path: null },
                  { name: "Automações", icon: null, path: null },
                  {
                    name: "Conciliações de Crédito",
                    icon: GitCompareArrows,
                    path: null,
                  },
                  { name: "Relatórios", icon: null, path: null },
                ],
              },
              {
                name: "Controles Cartão de Crédito",
                icon: CreditCard,
                submenu: [
                  { name: "Tarifas", icon: null, path: null },
                  {
                    name: "Conciliações",
                    icon: GitCompareArrows,
                    submenu: [
                      { name: "Manual", icon: null, path: null },
                      { name: "Adquirente", icon: null, path: null },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Notas fiscais",
            icon: ReceiptText,
            submenu: [
              {
                name: "Itens de Faturamento",
                icon: TableOfContents,
                path: null,
              },
              {
                name: "RPS",
                icon: Receipt,
                submenu: [
                  { name: "Geração", icon: null, path: null },
                  { name: "Consulta", icon: null, path: null },
                  { name: "Recibos", icon: null, path: null },
                  { name: "Exportação", icon: null, path: null },
                  { name: "Relatórios", icon: null, path: null },
                ],
              },
            ],
          },
          { name: "Caixas", icon: PiggyBank, path: null },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              {
                name: "Alunos",
                icon: User2,
                submenu: [
                  { name: "Gerais", icon: Files, path: null },
                  { name: "Declarações", icon: null, path: null },
                  { name: "Dossiês", icon: null, path: null },
                  {
                    name: "Contratos",
                    icon: null,
                    path: null,
                  },
                  {
                    name: "Fichas / Requerimentos",
                    icon: null,
                    path: null,
                  },
                ],
              },
              { name: "Caixas", icon: PiggyBank, path: null },
              {
                name: "Contas a Receber",
                icon: CircleDollarSign,
                submenu: [
                  {
                    name: "Adimplentes / Inadimplentes",
                    icon: null,
                    path: null,
                  },
                  { name: "Cartas de Cobrança", icon: null, path: null },
                  {
                    name: "Comprovantes de IR",
                    icon: null,
                    path: null,
                  },
                  { name: "Diário de Caixa", icon: null, path: null },
                  {
                    name: "Duplicatas",
                    icon: null,
                    submenu: [
                      { name: "Gerais", icon: Files, path: null },
                      { name: "Logs", icon: null, path: null },
                    ],
                  },
                  { name: "Previsões de Faturamento", icon: null, path: null },
                ],
              },
              {
                name: "Etiquetas",
                icon: Tickets,
                submenu: [{ name: "Alunos", icon: null, path: null }],
              },
            ],
          },
          {
            name: "Gráficos",
            icon: ChartColumn,
            submenu: [
              { name: "Ocupações", icon: ChartBarStacked, path: null },
              { name: "Situações", icon: CircleDot, path: null },
              { name: "Sexos", icon: VenusAndMars, path: null },
              { name: "Idades", icon: Sprout, path: null },
            ],
          },
        ],
      },
      { type: "divider" },
      {
        items: [{ name: "Matrícula Online", icon: ClipboardCheck, path: null }],
      },
    ],
  },
  {
    id: "/pagar",
    icon: BanknoteArrowUp,
    name: "Pagar",
    group: "Financeiro",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Fornecedores", icon: Truck, path: null },
              {
                name: "Financeiro",
                icon: Wallet,
                submenu: [
                  { name: "Planos de Contas", icon: null, path: null },
                  { name: "Tipos de Contas", icon: null, path: null },
                  { name: "Contas", icon: null, path: null },
                ],
              },
              { name: "Tipos de Contatos", icon: Tags, path: null },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Lançamentos",
            icon: Receipt,
            submenu: [
              { name: "Gerações", icon: FilePlus2, path: null },
              { name: "Quitações", icon: ScanBarcode, path: null },
            ],
          },
          { name: "Caixas", icon: PiggyBank, path: null },
          {
            name: "Controle Bancário",
            icon: Landmark,
            submenu: [
              { name: "Automação", icon: Bot, path: null },
              { name: "Contas", icon: CircleDollarSign, path: null },
              {
                name: "Conciliações de Débito",
                icon: GitCompareArrows,
                path: null,
              },
            ],
          },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              { name: "Contas a Pagar", icon: CircleDollarSign, path: null },
              { name: "Controle Bancário", icon: Landmark, path: null },
              { name: "Fluxo de Caixa", icon: PiggyBank, path: null },
              { name: "Fornecedores", icon: Truck, path: null },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "/conciliacao_bancaria",
    icon: Landmark,
    name: "Conciliação Bancária",
    group: "Financeiro",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [{ name: "Cadastros", icon: Database, submenu: [] }],
      },
      {
        items: [{ name: "Notas", icon: NotebookPen, submenu: [] }],
      },
      {
        items: [
          { name: "Histórico", icon: History, submenu: [] },
          { name: "Relatórios", icon: ClipboardList, submenu: [] },
          { name: "Gráficos", icon: ChartColumn, submenu: [] },
        ],
      },
      {
        items: [{ name: "Censo Escolar", icon: ClipboardList, submenu: [] }],
      },
    ],
  },
  {
    id: "/estoque",
    icon: Package,
    name: "Estoque",
    group: "Administrativo",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Produtos", icon: Package, path: null },
              {
                name: "Notas de Entrada",
                icon: BanknoteArrowDownIcon,
                path: null,
              },
              { name: "Formas de Cobrança", icon: WalletCards, path: null },
              {
                name: "Configurações",
                icon: Settings,
                submenu: [
                  { name: "Grupos de Produtos", icon: Boxes, path: null },
                  {
                    name: "Grupos de Unidades",
                    icon: SquareDashed,
                    path: null,
                  },
                  { name: "Unidades", icon: Ruler, path: null },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [
          { name: "Vendas", icon: NotebookPen, path: null },
          { name: "Caixas", icon: PiggyBank, path: null },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              { name: "Gerais", icon: Files, path: null },
              { name: "Entradas", icon: BanknoteArrowDownIcon, path: null },
              { name: "Saídas", icon: BanknoteArrowUp, path: null },
              { name: "Financeiros", icon: DollarSign, path: null },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "/crm",
    icon: Handshake,
    name: "CRM",
    group: "Administrativo",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Leads", icon: Target, path: null },
              {
                name: "Estrutura Acadêmica",
                icon: School2,
                submenu: [
                  { name: "Cursos", icon: BookMarked, path: null },
                  { name: "Níveis", icon: Layers3, path: null },
                ],
              },
              {
                name: "Configurações",
                icon: Settings,
                submenu: [
                  { name: "Iscas", icon: Magnet, path: null },
                  { name: "Origens Campanhas", icon: null, path: null },
                  { name: "Situações", icon: CircleDot, path: null },
                  { name: "Tipos de Ações", icon: null, path: null },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [{ name: "Funil", icon: Filter, path: null }],
      },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              { name: "Gerais", icon: Files, path: null },
              { name: "Ações", icon: CircleEllipsis, path: null },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "/acesso",
    icon: KeyRound,
    name: "Acesso",
    group: "Administrativo",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Alunos", icon: User2, path: null },
              { name: "Responsáveis", icon: User, path: null },
              { name: "Funcionários", icon: UserCog2, path: null },
              { name: "Terminais", icon: Terminal, path: null },
              { name: "Turmas", icon: Blocks, path: null },
              { name: "Grades de Horários", icon: CalendarClock, path: null },
            ],
          },
        ],
      },
      {
        items: [{ name: "Registro de E/S", icon: ArrowDownUp, path: null }],
      },
      {
        items: [{ name: "Faltas", icon: NotebookPen, submenu: [] }],
      },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              { name: "Alunos", icon: User2, path: null },
              {
                name: "Frequências",
                icon: CalendarCheck2,
                submenu: [
                  { name: "Alunos", icon: User2, path: null },
                  {
                    name: "Professores / Funcionários",
                    icon: UserCog2,
                    path: null,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Processamentos",
            icon: Cpu,
            submenu: [
              { name: "Importar Registros E/S", icon: ArrowDownUp, path: null },
              {
                name: "Gerar Faltas",
                icon: BookmarkPlus,
                path: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "/horarios",
    icon: Clock,
    name: "Horários",
    group: "Administrativo",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [{ name: "Criar Horário", icon: ClockPlus, path: null }],
      },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Cursos", icon: BookMarked, path: null },
              { name: "Níveis", icon: Layers3, path: null },
              { name: "Turmas", icon: Blocks, path: null },
              { name: "Disciplinas", icon: BookOpen, path: null },
              { name: "Professores", icon: GraduationCap, path: null },
              { name: "Grades de Aulas", icon: Grid2X2, path: null },
              { name: "Horários Salvos", icon: FolderClock, path: null },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              { name: "Gerais", icon: Files, path: null },
              { name: "Horários", icon: FileClock, path: null },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "/compras",
    icon: ShoppingBag,
    name: "Compras",
    group: "Administrativo",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Produtos", icon: Package2, path: null },
              { name: "Fornecedores", icon: Truck, path: null },
              { name: "Grupos de Produtos", icon: Boxes, path: null },
              { name: "Grupos de Unidades", icon: SquareDashed, path: null },
              { name: "Unidades", icon: Ruler, path: null },
            ],
          },
        ],
      },
      {
        items: [{ name: "Solicitações", icon: ListTodo, path: null }],
      },
      {
        items: [
          {
            name: "Cotações",
            icon: FileSearch,
            submenu: [
              { name: "Cadastro", icon: FilePlus, path: null },
              { name: "Aprovação", icon: CircleCheck, path: null },
            ],
          },
        ],
      },
      {
        items: [{ name: "Pedidos", icon: ShoppingCart, path: null }],
      },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              { name: "Cotações", icon: FileSearch, path: null },
              { name: "Etiquetas de Livros", icon: Bookmark, path: null },
              { name: "Pedidos", icon: ShoppingCart, path: null },
              { name: "Solicitações", icon: ListTodo, path: null },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "/biblioteca",
    icon: LibraryBig,
    name: "Biblioteca",
    group: "Administrativo",
    menus: [
      {
        items: [{ name: "Início", icon: Home, path: "/" }],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Bibliotecas", icon: Library, path: null },
              { name: "Obras / Acervos", icon: Archive, path: null },
              { name: "Autores", icon: UserPen, path: null },
              { name: "Categorias", icon: ListTree, path: null },
              { name: "Coleções", icon: Layers2, path: null },
              { name: "Editoras", icon: Building2, path: null },
              { name: "Estados de Conservação", icon: BadgeCheck, path: null },
              { name: "Faixas Etárias", icon: Baby, path: null },
              { name: "Formas de Aquisição", icon: ShoppingBag, path: null },
              { name: "Gêneros", icon: BookType, path: null },
              { name: "Idiomas", icon: Globe, path: null },
              { name: "Ilustradores", icon: Palette, path: null },
              { name: "Localizações", icon: MapPin, path: null },
              {
                name: "Regras de Empréstimos",
                icon: ClipboardCheck,
                path: null,
              },
              { name: "Tipos de Acervo", icon: FolderTree, path: null },
              { name: "Tradutores", icon: Languages, path: null },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Empréstimos",
            icon: HandHelping,
            submenu: [
              { name: "Adicionar", icon: BookUp, path: null },
              { name: "Consulta", icon: BookUser, path: null },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Movimentações",
            icon: ArrowLeftRight,
            submenu: [
              { name: "Devoluções", icon: BookDown, path: null },
              { name: "Reservas", icon: BookMarked, path: null },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            submenu: [
              { name: "Acervo / Exemplares", icon: Archive, path: null },
              { name: "Empréstimos", icon: HandHelping, path: null },
              { name: "Devoluções", icon: BookDown, path: null },
              { name: "Reservas", icon: BookMarked, path: null },
              { name: "Etiquetas de Exemplares", icon: Tags, path: null },
            ],
          },
        ],
      },
    ],
  },
];

// src/data/modulos.js
export function getModuloByPath(pathname = "/") {
  if (!pathname || pathname === "/") {
    return modulos.find((modulo) => modulo.id === "/") ?? modulos[0];
  }

  const normalizedPath = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  return (
    modulos
      .filter((modulo) => modulo.id !== "/")
      .sort((a, b) => b.id?.length - a.id?.length)
      .find(
        (modulo) =>
          normalizedPath === modulo.id ||
          normalizedPath.startsWith(`${modulo.id}/`),
      ) ?? modulos.find((modulo) => modulo.id === "/")
  );
}
