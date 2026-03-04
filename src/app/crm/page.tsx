"use client";

import { useState, useMemo } from "react";
import {
  Users,
  FileSignature,
  CalendarCheck,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Plus,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  UserPlus,
  Home,
  PartyPopper,
  FileText,
  ChevronRight,
  CircleDot,
  BarChart3,
  Target,
  Timer,
  Award,
  Eye,
  EyeOff,
  Lock,
  X,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { siteConfig } from "@/lib/site-config";
import {
  sampleClients,
  sampleActivities,
  sampleTasks,
  monthlyMetrics,
  pipelineStatuses,
  getOverviewStats,
  type CRMClient,
  type CRMActivity,
  type CRMTask,
} from "@/lib/crm-data";
import { formatPrice } from "@/lib/utils";

// ─── Login Gate ──────────────────────────────────────────────────────

function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) onLogin();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Nasim&apos;s CRM</h1>
          <p className="mt-2 text-muted-foreground">
            Client relationship management for Nasim Realty
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="nasim@nasimrealty.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter any password (demo)"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
            >
              Sign In to CRM
            </button>
          </form>

          <div className="mt-4 rounded-lg bg-muted p-3">
            <p className="text-xs text-muted-foreground text-center">
              <Lock className="inline h-3 w-3 mr-1" />
              Demo mode — enter any email and password to explore the CRM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Activity Icon Mapping ───────────────────────────────────────────

const activityIconMap: Record<string, React.ReactNode> = {
  UserPlus: <UserPlus className="h-4 w-4" />,
  Home: <Home className="h-4 w-4" />,
  CheckCircle: <CheckCircle className="h-4 w-4" />,
  AlertCircle: <AlertCircle className="h-4 w-4" />,
  Phone: <Phone className="h-4 w-4" />,
  Mail: <Mail className="h-4 w-4" />,
  PartyPopper: <PartyPopper className="h-4 w-4" />,
  FileText: <FileText className="h-4 w-4" />,
};

const activityTypeColors: Record<string, string> = {
  new_lead: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  showing: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  offer: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  follow_up: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  closing: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
  call: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  email: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
};

// ─── Pipeline Column Colors ──────────────────────────────────────────

const columnHeaderColors: Record<string, string> = {
  blue: "bg-blue-500",
  yellow: "bg-amber-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
  teal: "bg-teal-500",
};

const columnBgColors: Record<string, string> = {
  blue: "bg-blue-50/50 dark:bg-blue-950/20",
  yellow: "bg-amber-50/50 dark:bg-amber-950/20",
  orange: "bg-orange-50/50 dark:bg-orange-950/20",
  green: "bg-green-50/50 dark:bg-green-950/20",
  teal: "bg-teal-50/50 dark:bg-teal-950/20",
};

// ─── Priority Colors ─────────────────────────────────────────────────

const priorityBorderColors: Record<string, string> = {
  high: "border-l-red-500",
  medium: "border-l-amber-500",
  low: "border-l-blue-400",
};

const priorityBadgeColors: Record<string, string> = {
  high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  low: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

// ─── Overview Stats Bar ──────────────────────────────────────────────

function OverviewStats() {
  const stats = getOverviewStats(sampleClients, monthlyMetrics);

  const items = [
    {
      label: "Active Leads",
      value: stats.activeLeads.toString(),
      icon: <Users className="h-5 w-5" />,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      label: "Under Contract",
      value: stats.underContract.toString(),
      icon: <FileSignature className="h-5 w-5" />,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      label: "Closings This Mo.",
      value: stats.closedThisMonth.toString(),
      icon: <CalendarCheck className="h-5 w-5" />,
      color: "text-teal-600 dark:text-teal-400",
      bg: "bg-teal-100 dark:bg-teal-900/30",
    },
    {
      label: "Revenue This Mo.",
      value: formatPrice(stats.revenueThisMonth),
      icon: <DollarSign className="h-5 w-5" />,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      label: "Pipeline Value",
      value: formatPrice(stats.pipelineValue),
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-border bg-card p-4 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className={`rounded-lg p-2 ${item.bg}`}>
              <span className={item.color}>{item.icon}</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">{item.value}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Client Card ─────────────────────────────────────────────────────

function ClientCard({ client }: { client: CRMClient }) {
  return (
    <div
      className={`rounded-lg border border-border bg-card shadow-sm border-l-4 ${priorityBorderColors[client.priority]} hover:shadow-md transition-shadow`}
    >
      <div className="p-3.5">
        {/* Header: Name + Type Badge */}
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-semibold text-sm text-foreground leading-tight">
            {client.name}
          </h4>
          <span
            className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
              client.type === "buyer"
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
            }`}
          >
            {client.type}
          </span>
        </div>

        {/* Budget / Listing Price */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
          <DollarSign className="h-3 w-3" />
          {client.type === "buyer" ? (
            <span>
              {formatPrice(client.budget.min)} &ndash; {formatPrice(client.budget.max)}
            </span>
          ) : client.listingPrice ? (
            <span>{formatPrice(client.listingPrice)}</span>
          ) : (
            <span className="italic">TBD</span>
          )}
        </div>

        {/* Property Address (if exists) */}
        {client.propertyAddress && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
            <Home className="h-3 w-3 shrink-0" />
            <span className="truncate">{client.propertyAddress}</span>
          </div>
        )}

        {/* Neighborhoods */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="truncate">{client.neighborhoods.join(", ")}</span>
        </div>

        {/* Last Contact + Priority */}
        <div className="flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3" />
            {new Date(client.lastContact).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
          <span
            className={`rounded-full px-1.5 py-0.5 font-medium ${priorityBadgeColors[client.priority]}`}
          >
            {client.priority}
          </span>
        </div>

        {/* Notes Preview */}
        <p className="mt-2 text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
          {client.notes}
        </p>
      </div>
    </div>
  );
}

// ─── Client Pipeline (Kanban) ────────────────────────────────────────

function ClientPipeline({
  clients,
  searchQuery,
  typeFilter,
}: {
  clients: CRMClient[];
  searchQuery: string;
  typeFilter: string;
}) {
  const filteredClients = useMemo(() => {
    return clients.filter((c) => {
      const matchesSearch =
        searchQuery === "" ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.neighborhoods.some((n) =>
          n.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        (c.propertyAddress &&
          c.propertyAddress.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesType = typeFilter === "all" || c.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [clients, searchQuery, typeFilter]);

  return (
    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex gap-4 min-w-[1100px] pb-4">
        {pipelineStatuses.map((status) => {
          const columnClients = filteredClients.filter(
            (c) => c.status === status.key
          );
          return (
            <div
              key={status.key}
              className={`flex-1 min-w-[200px] rounded-xl ${columnBgColors[status.color]} border border-border/50`}
            >
              {/* Column Header */}
              <div className="p-3 flex items-center gap-2">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${columnHeaderColors[status.color]}`}
                />
                <h3 className="text-sm font-semibold text-foreground">
                  {status.label}
                </h3>
                <span className="ml-auto rounded-full bg-background/80 px-2 py-0.5 text-xs font-medium text-muted-foreground border border-border/50">
                  {columnClients.length}
                </span>
              </div>

              {/* Column Cards */}
              <div className="p-2 pt-0 space-y-2.5">
                {columnClients.length === 0 ? (
                  <p className="text-xs text-muted-foreground text-center py-6 italic">
                    No clients
                  </p>
                ) : (
                  columnClients.map((client) => (
                    <ClientCard key={client.id} client={client} />
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Recent Activity Feed ────────────────────────────────────────────

function ActivityFeed({ activities }: { activities: CRMActivity[] }) {
  const sorted = [...activities].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <CircleDot className="h-4 w-4 text-primary" />
          Recent Activity
        </h3>
      </div>
      <div className="divide-y divide-border">
        {sorted.slice(0, 8).map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3.5">
            <div
              className={`mt-0.5 shrink-0 rounded-full p-1.5 ${activityTypeColors[activity.type]}`}
            >
              {activityIconMap[activity.icon] ?? (
                <CircleDot className="h-4 w-4" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground leading-snug">
                {activity.message}
              </p>
              <p className="text-[11px] text-muted-foreground mt-1">
                {formatRelativeDate(activity.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Upcoming Tasks ──────────────────────────────────────────────────

function UpcomingTasks({ tasks }: { tasks: CRMTask[] }) {
  const [localTasks, setLocalTasks] = useState(tasks);

  const toggleTask = (id: string) => {
    setLocalTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const sorted = [...localTasks].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority])
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <CalendarCheck className="h-4 w-4 text-accent" />
          Upcoming Tasks
        </h3>
      </div>
      <div className="divide-y divide-border">
        {sorted.map((task) => {
          const isOverdue =
            !task.completed && new Date(task.dueDate) < new Date("2026-03-03");
          return (
            <div
              key={task.id}
              className={`flex items-start gap-3 p-3.5 ${task.completed ? "opacity-50" : ""}`}
            >
              <button
                onClick={() => toggleTask(task.id)}
                className={`mt-0.5 shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  task.completed
                    ? "border-green-500 bg-green-500"
                    : "border-border hover:border-primary"
                }`}
              >
                {task.completed && (
                  <CheckCircle className="h-3 w-3 text-white" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm leading-snug ${
                    task.completed
                      ? "line-through text-muted-foreground"
                      : "text-foreground"
                  }`}
                >
                  {task.title}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="text-[11px] text-muted-foreground">
                    {task.client}
                  </span>
                  <span className="text-muted-foreground/40">|</span>
                  <span
                    className={`text-[11px] ${isOverdue ? "text-red-500 font-medium" : "text-muted-foreground"}`}
                  >
                    {isOverdue && "Overdue: "}
                    {new Date(task.dueDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${priorityBadgeColors[task.priority]}`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Performance Metrics ─────────────────────────────────────────────

function PerformanceMetrics() {
  const maxRevenue = Math.max(...monthlyMetrics.map((m) => m.revenue));
  const totalRevenue = monthlyMetrics.reduce((sum, m) => sum + m.revenue, 0);
  const totalClosings = monthlyMetrics.reduce((sum, m) => sum + m.closings, 0);

  const closedClients = sampleClients.filter((c) => c.status === "closed");
  const allClients = sampleClients.length;
  const conversionRate = Math.round((closedClients.length / allClients) * 100);

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-primary" />
          Performance Metrics
        </h3>
      </div>
      <div className="p-4">
        {/* Monthly Closings Bar Chart */}
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Monthly Revenue (6-month trend)
        </p>
        <div className="flex items-end gap-2 h-32 mb-6">
          {monthlyMetrics.map((metric) => {
            const height =
              maxRevenue > 0
                ? Math.max((metric.revenue / maxRevenue) * 100, 4)
                : 4;
            return (
              <div
                key={metric.month}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <span className="text-[10px] font-medium text-foreground">
                  {metric.closings > 0 ? metric.closings : ""}
                </span>
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-primary to-primary-light transition-all duration-500"
                  style={{ height: `${height}%` }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {metric.month}
                </span>
              </div>
            );
          })}
        </div>

        {/* Summary Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-muted/50 p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Target className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] text-muted-foreground">
                Conversion Rate
              </span>
            </div>
            <p className="text-lg font-bold text-foreground">{conversionRate}%</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Timer className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] text-muted-foreground">
                Avg Days to Close
              </span>
            </div>
            <p className="text-lg font-bold text-foreground">
              {siteConfig.agent.avgDaysOnMarket}
            </p>
          </div>
          <div className="rounded-lg bg-muted/50 p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Award className="h-3.5 w-3.5 text-accent" />
              <span className="text-[11px] text-muted-foreground">
                Total Closings
              </span>
            </div>
            <p className="text-lg font-bold text-foreground">{totalClosings}</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <DollarSign className="h-3.5 w-3.5 text-accent" />
              <span className="text-[11px] text-muted-foreground">
                Quarter Revenue
              </span>
            </div>
            <p className="text-lg font-bold text-foreground">
              {formatPrice(totalRevenue)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Quick Add Button ────────────────────────────────────────────────

function QuickAddButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { label: "New Lead", icon: <UserPlus className="h-4 w-4" />, color: "bg-blue-500 hover:bg-blue-600" },
    { label: "New Task", icon: <CalendarCheck className="h-4 w-4" />, color: "bg-amber-500 hover:bg-amber-600" },
    { label: "Log Activity", icon: <FileText className="h-4 w-4" />, color: "bg-green-500 hover:bg-green-600" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Action Options */}
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2 animate-fade-in">
          {actions.map((action) => (
            <button
              key={action.label}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all ${action.color}`}
              onClick={() => setIsOpen(false)}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 ${
          isOpen
            ? "bg-foreground/80 rotate-45"
            : "bg-gradient-to-br from-primary to-primary-light hover:scale-105"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-background" />
        ) : (
          <Plus className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────

function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date("2026-03-03T10:00:00");
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffHours < 1) return "Just now";
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ─── Main Dashboard Content ──────────────────────────────────────────

function CRMDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const today = new Date("2026-03-03").toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const urgentTaskCount = sampleTasks.filter(
    (t) => !t.completed && t.priority === "high"
  ).length;

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
      {/* ── Header ─────────────────────────────────────────────── */}
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">
              Client Management
            </p>
            <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-foreground">
              Nasim&apos;s CRM
            </h1>
            <p className="mt-0.5 text-sm text-muted-foreground">{today}</p>
          </div>
          <div className="flex items-center gap-3">
            {urgentTaskCount > 0 && (
              <div className="flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
                <AlertCircle className="h-3.5 w-3.5" />
                {urgentTaskCount} urgent task{urgentTaskCount !== 1 ? "s" : ""}
              </div>
            )}
            <a
              href={`tel:${siteConfig.agent.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.agent.phone}
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Overview Stats ─────────────────────────────────────── */}
      <AnimatedSection delay={100}>
        <OverviewStats />
      </AnimatedSection>

      {/* ── Search & Filters ───────────────────────────────────── */}
      <AnimatedSection delay={150}>
        <div className="mt-6 mb-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients, neighborhoods, addresses..."
              className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {["all", "buyer", "seller"].map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  typeFilter === type
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {type === "all"
                  ? "All Clients"
                  : type.charAt(0).toUpperCase() + type.slice(1) + "s"}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Pipeline Section Header ────────────────────────────── */}
      <AnimatedSection delay={200}>
        <div className="flex items-center gap-2 mb-3">
          <ChevronRight className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-bold text-foreground">Client Pipeline</h2>
        </div>
      </AnimatedSection>

      {/* ── Client Pipeline (Kanban) ───────────────────────────── */}
      <AnimatedSection delay={250}>
        <ClientPipeline
          clients={sampleClients}
          searchQuery={searchQuery}
          typeFilter={typeFilter}
        />
      </AnimatedSection>

      {/* ── Activity, Tasks, Performance Grid ──────────────────── */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatedSection delay={300} className="lg:col-span-1">
          <ActivityFeed activities={sampleActivities} />
        </AnimatedSection>

        <AnimatedSection delay={350} className="lg:col-span-1">
          <UpcomingTasks tasks={sampleTasks} />
        </AnimatedSection>

        <AnimatedSection delay={400} className="lg:col-span-1">
          <PerformanceMetrics />
        </AnimatedSection>
      </div>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <AnimatedSection delay={450}>
        <div className="mt-8 rounded-xl bg-gradient-to-br from-primary-dark to-primary p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">
                Ready to grow your pipeline?
              </h3>
              <p className="mt-1 text-white/80 text-sm">
                Add new leads, schedule follow-ups, and keep your deals moving forward.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors">
                <UserPlus className="h-4 w-4" />
                Add New Lead
              </button>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send Blast Email
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Floating Quick Add Button ──────────────────────────── */}
      <QuickAddButton />
    </div>
  );
}

// ─── Page Export with Auth Gate ───────────────────────────────────────

export default function CRMPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginGate onLogin={() => setIsLoggedIn(true)} />;
  }

  return <CRMDashboard />;
}
