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

export const modulos = [
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
        items: [{ name: "Início", icon: Home, absolutePath: "/" }],
      },
      { type: "divider", label: { sm: "Secretaria", xs: "SEC" } },
      {
        items: [{ name: "Dashboard", icon: ChartNoAxesColumn, path: "/" }],
      },
      {
        //title: { sm: "Cadastros", xs: "CAD" },
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Alunos", icon: User2, path: "/alunos" },
              { name: "Responsáveis", icon: User, path: "/responsaveis" },
              {
                name: "Extras Curriculares",
                icon: Stars,
                submenu: [
                  {
                    name: "Grupos de Atividades",
                    icon: Sparkles,
                    path: "/gruposAtividades",
                  },
                  { name: "Atividades", icon: Sparkle, path: "/atividades" },
                  {
                    name: "Geração",
                    icon: StarPlus,
                    path: "/geracaoAtividades",
                  },
                ],
              },
              {
                name: "Estrutura Escolar",
                icon: School2,
                submenu: [
                  { name: "Cursos", icon: BookMarked, path: "/cursos" },
                  { name: "Segmentos", icon: Split, path: "/segmentos" },
                  { name: "Níveis", icon: Layers3, path: "/niveis" },
                  { name: "Turmas", icon: Blocks, path: "/turmas" },
                  {
                    name: "Grades de Aulas",
                    icon: Grid2X2,
                    path: "/gradesAulas",
                  },
                  {
                    name: "Grupo de Períodos",
                    icon: null,
                    path: "/gruposPeriodos",
                  },
                  {
                    name: "Períodos Letivos",
                    icon: null,
                    path: "/periodosLetivos",
                  },
                  {
                    name: "Itinerários Formativos",
                    icon: Waypoints,
                    path: "/itinerariosFormativos",
                  },
                ],
              },
              {
                name: "Pedagógico",
                icon: Brain,
                submenu: [
                  { name: "Assuntos", icon: null, path: "/assuntos" },
                  { name: "Conceitos", icon: null, path: "/conceitos" },
                  { name: "Disciplinas", icon: BookOpen, path: "/disciplinas" },
                  {
                    name: "Funcionários",
                    icon: UserCog2,
                    path: "/funcionários",
                  },
                  {
                    name: "Métodos de Avaliação",
                    icon: null,
                    path: "/metodosAvaliacao",
                  },
                  { name: "Minutagens", icon: null, path: "/minutagens" },
                  { name: "Trilhas", icon: null, path: "/trilhas" },
                ],
              },
              {
                name: "Frequência",
                icon: ClipboardCheck,
                submenu: [
                  {
                    name: "Justificativas de Faltas",
                    icon: null,
                    path: "/justificativasFaltas",
                  },
                ],
              },
              {
                name: "Serviços",
                icon: Utensils,
                submenu: [
                  { name: "Refeições", icon: null, path: "/refeicoes" },
                ],
              },
              {
                name: "Administrativo",
                icon: FolderCog,
                submenu: [
                  {
                    name: "Categorias de Responsáveis",
                    icon: Users,
                    path: "/categoriasResponsaveis",
                  },
                  { name: "Departamentos", icon: null, path: "/departamentos" },
                  {
                    name: "Estabelecimentos",
                    icon: School,
                    path: "/estabelecimentos",
                  },
                  { name: "Feriados", icon: CalendarHeart, path: "/feriados" },
                  { name: "Gestores", icon: UserCog, path: "/gestores" },
                  {
                    name: "Grupos de Alunos",
                    icon: null,
                    path: "/gruposAlunos",
                  },
                  {
                    name: "Motivos de Saída",
                    icon: null,
                    path: "/motivosSaida",
                  },
                  { name: "Processos", icon: null, path: "/processos" },
                  {
                    name: "Tipos de Solicitações",
                    icon: null,
                    path: "/tiposSolicitacoes",
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
            name: "Notas",
            icon: NotebookTabs,
            path: "/notas",
            submenu: [
              { name: "Digitação", icon: NotebookPen, path: "/digitacao" },
              {
                name: "Consolidação",
                icon: SigmaSquare,
                path: "/consolidacao",
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Históricos",
            icon: History,
            path: "/historicos",
            submenu: [
              { name: "Digitação", icon: FilePenLine, path: "digitacao" },
              { name: "Emissão", icon: FileArchive, path: "emissao" },
            ],
          },
          {
            name: "Relatórios",
            icon: ClipboardList,
            path: "/relatorios",
            submenu: [
              {
                name: "Alunos",
                icon: User2,
                submenu: [
                  { name: "Gerais", icon: Files, path: "/gerais" },
                  { name: "Declarações", icon: null, path: "/declaracoes" },
                  { name: "Dossiês", icon: null, path: "/dossies" },
                  {
                    name: "Fichas / Requerimentos",
                    icon: null,
                    path: "/fichasRequerimentos",
                  },
                  {
                    name: "Carteiras de Identificação",
                    icon: null,
                    path: "/carteirinhas",
                  },
                  { name: "Carômetros", icon: Timer, path: "/carometros" },
                  {
                    name: "Livros de Matriculas",
                    icon: null,
                    path: "/livrosMatriculas",
                  },
                  {
                    name: "Ativ. Extras Curriculares",
                    icon: Stars,
                    path: "atividadesExtras",
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
                    path: "/cadernetas",
                    submenu: [
                      { name: "Gerais", icon: Files, path: "/gerais" },
                      {
                        name: "Registros de Aulas",
                        icon: null,
                        path: "/registrosAulas",
                      },
                      { name: "Frequências", icon: null, path: "/frequencias" },
                    ],
                  },
                  { name: "Diários", icon: null, path: "/diarios" },
                  { name: "Boletins", icon: null, path: "/boletins" },
                  {
                    name: "Mapas",
                    icon: null,
                    path: "/mapas",
                    submenu: [
                      { name: "Avaliações", icon: null, path: "/avaliacoes" },
                      { name: "Conferência", icon: null, path: "/conferencia" },
                    ],
                  },
                  {
                    name: "Fichas Individuais",
                    icon: null,
                    path: "/fichasIndividuais",
                  },
                  { name: "Atas", icon: null, path: "/atas" },
                ],
              },
              {
                name: "Funcionários",
                icon: UserCog2,
                path: "/funcionarios",
                submenu: [
                  { name: "Gerais", icon: Files, path: "/gerais" },
                  { name: "Folhas de Ponto", icon: null, path: "/folhas" },
                  { name: "Carteiras de ID", icon: null, path: "/carteiras" },
                ],
              },
              {
                name: "Etiquetas de Alunos",
                icon: Tags,
                path: "/etiquetasAlunos",
              },
            ],
          },
          {
            name: "Gráficos",
            icon: ChartColumn,
            path: "/graficos",
            submenu: [
              {
                name: "Desempenho",
                icon: GaugeCircle,
                path: "/desempenho",
                submenu: [
                  { name: "Alunos", icon: User2, path: "/alunos" },
                  { name: "Turmas", icon: Blocks, path: "/turmas" },
                  {
                    name: "Alunos/Turmas",
                    icon: ChartColumn,
                    path: "/alunosTurmas",
                  },
                ],
              },
              { name: "Idades", icon: Sprout, path: "/idades" },
              { name: "Ocupações", icon: ChartBarStacked, path: "/ocupacoes" },
              { name: "Sexos", icon: VenusAndMars, path: "/sexos" },
              { name: "Situações", icon: CircleDot, path: "/situacoes" },
            ],
          },
        ],
      },
      {
        items: [
          { name: "Censo Escolar", icon: DatabaseCheck, path: "censoEscolar" },
        ],
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Registro de aula / Frequência",
            icon: FileText,
            path: "/registrosAula",
          },
          { name: "Comunicados", icon: Bell, path: "/comunicados" },
          { name: "Notas", icon: NotebookTabs, path: "/notas" },
          { name: "Tarefas", icon: ListTodo, path: "/tarefas" },
          { name: "Redação", icon: FilePenLine, path: "/redacao" },
        ],
      },
      {
        items: [
          {
            name: "EAD",
            icon: MonitorPlay,
            path: "/ead",
            submenu: [
              { name: "Materiais", icon: LibrarySquare, path: "/materiais" },
              {
                name: "Avaliações",
                icon: ClipboardCheck,
                submenu: [
                  { name: "Avaliações", icon: null, path: "/avaliacoes" },
                  { name: "Cadernos", icon: null, path: "/cadernos" },
                  { name: "Conteúdo", icon: null, path: "/conteudo" },
                  { name: "Questões", icon: null, path: "/questoes" },
                ],
              },
              { name: "Simulados", icon: Target, path: "/simulados" },
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
            path: "/relatorios",
            submenu: [
              { name: "Gerais", icon: Files, path: "/gerais" },
              {
                name: "Registros de Aulas",
                icon: FileText,
                path: "/registrosAulas",
              },
              {
                name: "Frequências",
                icon: CalendarCheck2,
                path: "/frequencias",
              },
              { name: "Carômetros", icon: Timer, path: "/carometros" },
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
            path: "/coordenacao",
            submenu: [
              {
                name: "Registros de Aulas",
                icon: FileText,
                path: "/registrosAulas",
              },
              {
                name: "Frequências",
                icon: CalendarCheck2,
                path: "/frequencias",
              },
              {
                name: "Comunicados / Ocorrências",
                icon: Bell,
                path: "/comunicados",
              },
              { name: "Tarefas", icon: ListTodo, path: "/tarefas" },
              {
                name: "Registros de Tarefas",
                icon: SquareCheck,
                path: "/registrosTarefas",
              },
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              {
                name: "Grupos de Empresas",
                icon: Building2,
                path: "/gruposEmpresas",
              },
              { name: "Empresas", icon: Building, path: "/empresas" },
              { name: "Recursos", icon: ToolCase, path: "/recursos" },
              { name: "Scripts", icon: Code, path: "/scripts" },
              { name: "Logs", icon: Logs, path: "/logs" },
            ],
          },
          {
            name: "Monitoramento",
            icon: Activity,
            path: "/monitoramento",
            submenu: [
              { name: "Cadastro", icon: Database, path: "/cadastros" },
              {
                name: "Empresas",
                icon: Building,
                path: "/empresas",
                submenu: [
                  { name: "Por Região", icon: null, path: "/regiao" },
                  { name: "Por Estado", icon: null, path: "/estado" },
                  { name: "Por Cidade", icon: null, path: "/cidade" },
                ],
              },
              { name: "Personalizados", icon: SlidersHorizontal, path: null },
            ],
          },
          {
            name: "Rotinas",
            icon: Repeat2,
            path: "/Rotinas",
            submenu: [
              {
                name: "Unificar Alunos",
                icon: User2,
                path: "/unificar/Alunos",
              },
              {
                name: "Unificar Disciplinas",
                icon: BookOpen,
                path: "/unificar/Disciplinas",
              },
              {
                name: "Unificar Responsáveis",
                icon: User,
                path: "/unificar/Responsáveis",
              },
              {
                name: "Alterar Grupos de Períodos",
                icon: CalendarRange,
                path: "/alterar/GruposPeriodos",
              },
              {
                name: "Alterar Grades de Horários",
                icon: CalendarDays,
                path: "/alterar/GradesHorarios",
              },
            ],
          },
          {
            name: "Dicionário de dados",
            icon: BookA,
            path: "/dicionarioDados",
            submenu: [
              { name: "Consulta", icon: BookSearch, path: "/consulta" },
              { name: "Cadastro", icon: BookPlus, path: "/cadastro" },
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Alunos", icon: User2, path: "/alunos" },
              { name: "Responsáveis", icon: User, path: "/responsaveis" },
              {
                name: "Extras Curriculares",
                icon: Stars,
                submenu: [
                  {
                    name: "Grupos de Atividades",
                    icon: Sparkles,
                    path: "/gruposAtividades",
                  },
                  { name: "Atividades", icon: Sparkle, path: "/atividades" },
                  {
                    name: "Geração",
                    icon: StarPlus,
                    path: "/geracaoAtividades",
                  },
                ],
              },
              {
                name: "Estrutura Acadêmica",
                icon: School2,
                submenu: [
                  { name: "Cursos", icon: BookMarked, path: "/cursos" },
                  { name: "Segmentos", icon: Split, path: "/segmentos" },
                  { name: "Níveis", icon: Layers3, path: "/niveis" },
                  { name: "Turmas", icon: Blocks, path: "/turmas" },
                ],
              },
              {
                name: "Financeiro",
                icon: Wallet,
                submenu: [
                  {
                    name: "Tipos de Pagamentos",
                    icon: null,
                    path: "/tiposPagamentos",
                  },
                  {
                    name: "Formas de Cobrança",
                    icon: WalletCards,
                    path: "/formasCobrancas",
                  },
                  {
                    name: "Planos de Contas",
                    icon: null,
                    path: "/planosContas",
                  },
                  { name: "Tipos de Contas", icon: null, path: "/tiposContas" },
                  { name: "Contas", icon: null, path: "/contas" },
                ],
              },
              {
                name: "Configurações",
                icon: Settings,
                submenu: [
                  {
                    name: "Categorias de Responsáveis",
                    icon: Users,
                    path: "/categoriasResponsaveis",
                  },
                  {
                    name: "Grupos de Alunos",
                    icon: Users2,
                    path: "/gruposAlunos",
                  },
                  { name: "Feriados", icon: CalendarHeart, path: "/feriados" },
                  {
                    name: "Motivos de Saída",
                    icon: null,
                    path: "/motivosSaida",
                  },
                  {
                    name: "Tipo de Solicitações",
                    icon: null,
                    path: "/tiposSolicitacoes",
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
            name: "Duplicatas",
            icon: File,
            path: "/duplicatas",
            submenu: [
              {
                name: "Gerações",
                icon: FilePlus2,
                path: "/geracao",
                submenu: [
                  { name: "Serviços", icon: null, path: "/servicos" },
                  { name: "Atividades", icon: null, path: "/atividades" },
                ],
              },
              {
                name: "Emissões",
                icon: Barcode,
                path: "/emissoes",
                submenu: [
                  { name: "Serviços", icon: null, path: "/servicos" },
                  { name: "Atividades", icon: null, path: "/atividades" },
                  {
                    name: "Arquivos de Remessa",
                    icon: null,
                    path: "/remessas",
                  },
                ],
              },
              {
                name: "Envios",
                icon: Send,
                path: "/envios",
                submenu: [{ name: "Serviços", icon: null, path: "/servicos" }],
              },
              {
                name: "Quitações",
                icon: ScanBarcode,
                path: "/quitacoes",
                submenu: [
                  { name: "Automáticas", icon: null, path: "/automaticas" },
                  { name: "Manuais", icon: null, path: "/manuais" },
                  {
                    name: "Parceiros",
                    icon: null,
                    path: "/parceiros",
                    submenu: [
                      { name: "API", icon: null, path: "/api" },
                      { name: "CSV", icon: null, path: "/csv" },
                    ],
                  },
                ],
              },
              {
                name: "Controles Bancários",
                icon: Landmark,
                path: "/controlesBancarios",
                submenu: [
                  { name: "Contas", icon: null, path: "/contas" },
                  { name: "Automações", icon: null, path: "/automacoes" },
                  {
                    name: "Conciliações de Crédito",
                    icon: GitCompareArrows,
                    path: "/conciliacoes",
                  },
                  { name: "Relatórios", icon: null, path: "/relatorios" },
                ],
              },
              {
                name: "Controles Cartão de Crédito",
                icon: CreditCard,
                path: "/controlesCartoes",
                submenu: [
                  { name: "Tarifas", icon: null, path: "/tarifas" },
                  {
                    name: "Conciliações",
                    icon: GitCompareArrows,
                    path: "/conciliacoes",
                    submenu: [
                      { name: "Manual", icon: null, path: "/manual" },
                      { name: "Adquirente", icon: null, path: "/adquirente" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Notas Fiscais",
            icon: ReceiptText,
            path: "/notasFiscais",
            submenu: [
              {
                name: "Itens de Faturamento",
                icon: TableOfContents,
                path: "/itensFaturamento",
              },
              {
                name: "RPS",
                icon: Receipt,
                path: "/rps",
                submenu: [
                  { name: "Geração", icon: null, path: "/geracao" },
                  { name: "Consulta", icon: null, path: "/consulta" },
                  { name: "Recibos", icon: null, path: "/recibos" },
                  { name: "Exportação", icon: null, path: "/exportacao" },
                  { name: "Relatórios", icon: null, path: "/relatorios" },
                ],
              },
            ],
          },
          { name: "Caixas", icon: PiggyBank, path: "/caixas" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            path: "/relatorios",
            submenu: [
              {
                name: "Alunos",
                icon: User2,
                path: "/alunos",
                submenu: [
                  { name: "Gerais", icon: Files, path: "/gerais" },
                  { name: "Declarações", icon: null, path: "/declaracoes" },
                  { name: "Dossiês", icon: null, path: "/dossies" },
                  {
                    name: "Contratos",
                    icon: null,
                    path: "/contratos",
                  },
                  {
                    name: "Fichas / Requerimentos",
                    icon: null,
                    path: "/fichasRequerimentos",
                  },
                ],
              },
              { name: "Caixas", icon: PiggyBank, path: "/caixas" },
              {
                name: "Contas a Receber",
                icon: CircleDollarSign,
                submenu: [
                  {
                    name: "Adimplentes / Inadimplentes",
                    icon: null,
                    path: "/adimplencia",
                  },
                  {
                    name: "Cartas de Cobrança",
                    icon: null,
                    path: "/cartasCobranca",
                  },
                  {
                    name: "Comprovantes de IR",
                    icon: null,
                    path: "/comprovantes/ir",
                  },
                  { name: "Diário de Caixa", icon: null, path: "/diarioCaixa" },
                  {
                    name: "Duplicatas",
                    icon: null,
                    path: "/duplicatas",
                    submenu: [
                      { name: "Gerais", icon: Files, path: "/gerais" },
                      { name: "Logs", icon: null, path: "/logs" },
                    ],
                  },
                  {
                    name: "Previsões de Faturamento",
                    icon: null,
                    path: "/previsoes",
                  },
                ],
              },
              {
                name: "Etiquetas",
                icon: Tickets,
                path: "/etiquetas",
                submenu: [{ name: "Alunos", icon: null, path: "/alunos" }],
              },
            ],
          },
          {
            name: "Gráficos",
            icon: ChartColumn,
            path: "/graficos",
            submenu: [
              { name: "Idades", icon: Sprout, path: "/idades" },
              { name: "Ocupações", icon: ChartBarStacked, path: "/ocupacoes" },
              { name: "Sexos", icon: VenusAndMars, path: "/sexos" },
              { name: "Situações", icon: CircleDot, path: "/situacoes" },
            ],
          },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Matrícula Online",
            icon: ClipboardCheck,
            path: "/matriculaOnline",
          },
        ],
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Fornecedores", icon: Truck, path: "/fornecedores" },
              {
                name: "Financeiro",
                icon: Wallet,
                submenu: [
                  {
                    name: "Planos de Contas",
                    icon: null,
                    path: "/planosContas",
                  },
                  { name: "Tipos de Contas", icon: null, path: "/tiposContas" },
                  { name: "Contas", icon: null, path: "/contas" },
                ],
              },
              { name: "Tipos de Contatos", icon: Tags, path: "/tiposContatos" },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Lançamentos",
            icon: Receipt,
            path: "/lancamentos",
            submenu: [
              { name: "Gerações", icon: FilePlus2, path: "/geracao" },
              { name: "Quitações", icon: ScanBarcode, path: "/quitacao" },
            ],
          },
          { name: "Caixas", icon: PiggyBank, path: "/caixas" },
          {
            name: "Controle Bancário",
            icon: Landmark,
            submenu: [
              { name: "Automação", icon: Bot, path: "/automacoesConciliacao" },
              {
                name: "Contas",
                icon: CircleDollarSign,
                path: "/contasBancarias",
              },
              {
                name: "Conciliações de Débito",
                icon: GitCompareArrows,
                path: "/conciliacoesDebito",
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
            path: "/relatorios",
            submenu: [
              {
                name: "Contas a Pagar",
                icon: CircleDollarSign,
                path: "/contasPagar",
              },
              {
                name: "Controle Bancário",
                icon: Landmark,
                path: "/controleBancário",
              },
              { name: "Fluxo de Caixa", icon: PiggyBank, path: "/fluxoCaixa" },
              { name: "Fornecedores", icon: Truck, path: "/fornecedores" },
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Produtos", icon: Package, path: "/produtos" },
              {
                name: "Notas de Entrada",
                icon: BanknoteArrowDownIcon,
                path: "/notasEntrada",
              },
              {
                name: "Formas de Cobrança",
                icon: WalletCards,
                path: "/formasCobranca",
              },
              {
                name: "Configurações",
                icon: Settings,
                submenu: [
                  {
                    name: "Grupos de Produtos",
                    icon: Boxes,
                    path: "/gruposProdutos",
                  },
                  {
                    name: "Grupos de Unidades",
                    icon: SquareDashed,
                    path: "/gruposUnidades",
                  },
                  { name: "Unidades", icon: Ruler, path: "/unidades" },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [
          { name: "Vendas", icon: NotebookPen, path: "/vendas" },
          { name: "Caixas", icon: PiggyBank, path: "/caixas" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            path: "/relatorios",
            submenu: [
              { name: "Gerais", icon: Files, path: "/gerais" },
              {
                name: "Entradas",
                icon: BanknoteArrowDownIcon,
                path: "/entradas",
              },
              { name: "Saídas", icon: BanknoteArrowUp, path: "/saidas" },
              { name: "Financeiros", icon: DollarSign, path: "/financeiros" },
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Leads", icon: Target, path: "/leads" },
              {
                name: "Estrutura Acadêmica",
                icon: School2,
                submenu: [
                  { name: "Cursos", icon: BookMarked, path: "/cursos" },
                  { name: "Níveis", icon: Layers3, path: "/niveis" },
                ],
              },
              {
                name: "Configurações",
                icon: Settings,
                submenu: [
                  { name: "Iscas", icon: Magnet, path: "/iscas" },
                  {
                    name: "Origens Campanhas",
                    icon: null,
                    path: "/origensCampanhas",
                  },
                  { name: "Situações", icon: CircleDot, path: "/situacoes" },
                  { name: "Tipos de Ações", icon: null, path: "/tiposAcoes" },
                ],
              },
            ],
          },
        ],
      },
      {
        items: [{ name: "Funil", icon: Filter, path: "/funil" }],
      },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            path: "/relatorios",
            submenu: [
              { name: "Gerais", icon: Files, path: "/gerais" },
              { name: "Ações", icon: CircleEllipsis, path: "/acoes" },
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
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
            path: "/relatorios",
            submenu: [
              { name: "Alunos", icon: User2, path: "/alunos" },
              {
                name: "Frequências",
                icon: CalendarCheck2,
                submenu: [
                  { name: "Alunos", icon: User2, path: "/alunos" },
                  {
                    name: "Professores / Funcionários",
                    icon: UserCog2,
                    path: "/funcionarios",
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
              {
                name: "Importar Registros E/S",
                icon: ArrowDownUp,
                path: "/importarRegistros",
              },
              {
                name: "Gerar Faltas",
                icon: BookmarkPlus,
                path: "/gerarFaltasMarcacoes",
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
      },
      { type: "divider" },
      {
        items: [
          { name: "Criar Horário", icon: ClockPlus, path: "/horarios/criar" },
        ],
      },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Cursos", icon: BookMarked, path: "/cursos" },
              { name: "Níveis", icon: Layers3, path: "/niveis" },
              { name: "Turmas", icon: Blocks, path: "/turmas" },
              { name: "Disciplinas", icon: BookOpen, path: "/disciplinas" },
              {
                name: "Professores",
                icon: GraduationCap,
                path: "/professores",
              },
              { name: "Grades de Aulas", icon: Grid2X2, path: "/gradesAulas" },
              {
                name: "Horários Salvos",
                icon: FolderClock,
                path: "/horarios/salvos",
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            path: "/relatorios",
            submenu: [
              { name: "Gerais", icon: Files, path: "/gerais" },
              { name: "Horários", icon: FileClock, path: "/horarios" },
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Produtos", icon: Package2, path: "/produtos" },
              { name: "Fornecedores", icon: Truck, path: "/fornecedores" },
              {
                name: "Grupos de Produtos",
                icon: Boxes,
                path: "/gruposProdutos",
              },
              {
                name: "Grupos de Unidades",
                icon: SquareDashed,
                path: "/gruposUnidades",
              },
              { name: "Unidades", icon: Ruler, path: "/unidades" },
            ],
          },
        ],
      },
      {
        items: [
          { name: "Solicitações", icon: ListTodo, path: "/solicitacoes" },
        ],
      },
      {
        items: [
          {
            name: "Cotações",
            icon: FileSearch,
            path: "/cotacoes",
            submenu: [
              { name: "Cadastro", icon: FilePlus, path: "/cadastro" },
              { name: "Aprovação", icon: CircleCheck, path: "/aprovacao" },
            ],
          },
        ],
      },
      {
        items: [{ name: "Pedidos", icon: ShoppingCart, path: "/pedidos" }],
      },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            path: "/relatorios",
            submenu: [
              { name: "Cotações", icon: FileSearch, path: "/cotacoes" },
              {
                name: "Etiquetas de Livros",
                icon: Bookmark,
                path: "/etiquetas",
              },
              { name: "Pedidos", icon: ShoppingCart, path: "/pedidos" },
              { name: "Solicitações", icon: ListTodo, path: "/solicitacoes" },
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
        items: [
          { name: "Início", icon: Home, absolutePath: "/" },
          { name: "Dashboard", icon: ChartNoAxesColumn, path: "/" },
        ],
      },
      { type: "divider" },
      {
        items: [
          {
            name: "Cadastros",
            icon: Database,
            submenu: [
              { name: "Bibliotecas", icon: Library, path: "/bibliotecas" },
              { name: "Obras / Acervos", icon: Archive, path: "/obras" },
              { name: "Autores", icon: UserPen, path: "/autores" },
              { name: "Categorias", icon: ListTree, path: "/categorias" },
              { name: "Coleções", icon: Layers2, path: "/colecoes" },
              { name: "Editoras", icon: Building2, path: "/editoras" },
              {
                name: "Estados de Conservação",
                icon: BadgeCheck,
                path: "/estados",
              },
              { name: "Faixas Etárias", icon: Baby, path: "/faixasEtarias" },
              {
                name: "Formas de Aquisição",
                icon: ShoppingBag,
                path: "/formasAquisicao",
              },
              { name: "Gêneros", icon: BookType, path: "/generos" },
              { name: "Idiomas", icon: Globe, path: "/idiomas" },
              { name: "Ilustradores", icon: Palette, path: "/ilustradores" },
              { name: "Localizações", icon: MapPin, path: "/localizações" },
              {
                name: "Regras de Empréstimos",
                icon: ClipboardCheck,
                path: "/regrasEmprestimos",
              },
              {
                name: "Tipos de Acervo",
                icon: FolderTree,
                path: "/tiposAcervo",
              },
              { name: "Tradutores", icon: Languages, path: "/tradutores" },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Empréstimos",
            icon: HandHelping,
            path: "/emprestimos",
            submenu: [
              { name: "Adicionar", icon: BookUp, path: "/adicionar" },
              { name: "Consulta", icon: BookUser, path: "/consulta" },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Movimentações",
            icon: ArrowLeftRight,
            path: "/movimentacoes",
            submenu: [
              { name: "Devoluções", icon: BookDown, path: "/devolucoes" },
              { name: "Reservas", icon: BookMarked, path: "/reservas" },
            ],
          },
        ],
      },
      {
        items: [
          {
            name: "Relatórios",
            icon: ClipboardList,
            path: "/relatorios",
            submenu: [
              { name: "Acervo / Exemplares", icon: Archive, path: "/acervo" },
              { name: "Empréstimos", icon: HandHelping, path: "/emprestimos" },
              { name: "Devoluções", icon: BookDown, path: "/devolucoes" },
              { name: "Reservas", icon: BookMarked, path: "/reservas" },
              {
                name: "Etiquetas de Exemplares",
                icon: Tags,
                path: "/etiquetas",
              },
            ],
          },
        ],
      },
    ],
  },
];

function normalizePath(path = "/") {
  if (!path || path === "/") {
    return "/";
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return normalizedPath.endsWith("/")
    ? normalizedPath.slice(0, -1)
    : normalizedPath;
}

export function resolveMenuPath(moduleId = "/", itemPaths) {
  const paths = Array.isArray(itemPaths) ? itemPaths : [itemPaths];
  const routeSegments = paths.filter(Boolean);

  if (routeSegments.length === 0) {
    return null;
  }

  const normalizedModuleId = normalizePath(moduleId);

  if (routeSegments.length === 1 && routeSegments[0] === "/") {
    return normalizedModuleId;
  }

  const modulePrefix = normalizedModuleId === "/" ? "" : normalizedModuleId;
  const normalizedItemPath = routeSegments
    .filter((path) => path !== "/")
    .map((path) => path.replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/");

  return normalizePath(`${modulePrefix}/${normalizedItemPath}`);
}

export function getModuloByPath(pathname = "/") {
  if (!pathname || pathname === "/") {
    return modulos.find((modulo) => modulo.id === "/") ?? modulos[0];
  }

  const normalizedPath = normalizePath(pathname);

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
