// CRM Data Types and Sample Data for Nasim Realty

export interface CRMClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: "buyer" | "seller";
  status: "new_lead" | "contacted" | "showing" | "under_contract" | "closed";
  budget: { min: number; max: number };
  neighborhoods: string[];
  lastContact: string;
  priority: "high" | "medium" | "low";
  notes: string;
  propertyAddress?: string;
  listingPrice?: number;
}

export interface CRMActivity {
  id: string;
  type: "new_lead" | "showing" | "offer" | "follow_up" | "closing" | "call" | "email";
  message: string;
  client: string;
  date: string;
  icon: string;
}

export interface CRMTask {
  id: string;
  title: string;
  client: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
}

export interface MonthlyMetric {
  month: string;
  closings: number;
  revenue: number;
}

// ─── Sample Clients ──────────────────────────────────────────────────

export const sampleClients: CRMClient[] = [
  // New Leads (3)
  {
    id: "cl-001",
    name: "Sarah Chen",
    email: "sarah.chen@gmail.com",
    phone: "(510) 555-0201",
    type: "buyer",
    status: "new_lead",
    budget: { min: 750000, max: 950000 },
    neighborhoods: ["Rockridge", "Temescal"],
    lastContact: "2026-03-02",
    priority: "high",
    notes: "Inquired via website about Rockridge listings. Pre-approved for $900K. First-time buyer, relocating from SF for more space.",
  },
  {
    id: "cl-002",
    name: "James & Priya Patel",
    email: "jpatel@outlook.com",
    phone: "(510) 555-0302",
    type: "buyer",
    status: "new_lead",
    budget: { min: 600000, max: 800000 },
    neighborhoods: ["Laurel District", "Dimond"],
    lastContact: "2026-03-01",
    priority: "medium",
    notes: "Referred by past client Lisa Wong. Looking for 3BR with yard. Flexible timeline, lease ends in June.",
  },
  {
    id: "cl-003",
    name: "Angela Moretti",
    email: "a.moretti@yahoo.com",
    phone: "(510) 555-0119",
    type: "seller",
    status: "new_lead",
    budget: { min: 0, max: 0 },
    neighborhoods: ["Montclair"],
    lastContact: "2026-02-28",
    priority: "low",
    notes: "Exploring whether to sell her Montclair home. Not in a rush — wants a market valuation first.",
    propertyAddress: "6234 Thornhill Dr, Oakland",
    listingPrice: 1250000,
  },

  // Contacted (3)
  {
    id: "cl-004",
    name: "Marcus Johnson",
    email: "marcus.j@gmail.com",
    phone: "(510) 555-0415",
    type: "buyer",
    status: "contacted",
    budget: { min: 500000, max: 700000 },
    neighborhoods: ["Temescal", "Longfellow", "Bushrod"],
    lastContact: "2026-02-27",
    priority: "high",
    notes: "Had intro call on 2/27. Very motivated — needs to move by April for new job at Kaiser. Wants something walkable.",
  },
  {
    id: "cl-005",
    name: "David Kim",
    email: "dkim@protonmail.com",
    phone: "(510) 555-0528",
    type: "buyer",
    status: "contacted",
    budget: { min: 850000, max: 1100000 },
    neighborhoods: ["Crocker Highlands", "Trestle Glen"],
    lastContact: "2026-02-25",
    priority: "medium",
    notes: "Sent listings on 2/25, hasn't replied yet. Looking for a move-in ready 4BR. Has two kids in school.",
  },
  {
    id: "cl-006",
    name: "Fatima Al-Rashid",
    email: "fatima.r@gmail.com",
    phone: "(510) 555-0634",
    type: "seller",
    status: "contacted",
    budget: { min: 0, max: 0 },
    neighborhoods: ["Adams Point"],
    lastContact: "2026-02-26",
    priority: "medium",
    notes: "Wants to sell her condo near Lake Merritt. Discussed pricing strategy and timeline. Targeting April listing.",
    propertyAddress: "285 Grand Ave #4C, Oakland",
    listingPrice: 525000,
  },

  // Showing Scheduled (3)
  {
    id: "cl-007",
    name: "Tom & Linda Nakamura",
    email: "tnakamura@gmail.com",
    phone: "(510) 555-0741",
    type: "buyer",
    status: "showing",
    budget: { min: 900000, max: 1200000 },
    neighborhoods: ["Rockridge", "Upper Rockridge"],
    lastContact: "2026-03-02",
    priority: "high",
    notes: "Showing 3 properties on March 5. Very serious — pre-approved, sold their Walnut Creek home. Want Craftsman style.",
  },
  {
    id: "cl-008",
    name: "Keisha Williams",
    email: "keisha.w@icloud.com",
    phone: "(510) 555-0856",
    type: "buyer",
    status: "showing",
    budget: { min: 650000, max: 850000 },
    neighborhoods: ["Glenview", "Dimond"],
    lastContact: "2026-03-01",
    priority: "medium",
    notes: "Showed 2 properties last week — liked the Glenview bungalow but wants to see more options. Scheduling for March 7.",
  },
  {
    id: "cl-009",
    name: "Roberto Sandoval",
    email: "r.sandoval@gmail.com",
    phone: "(510) 555-0963",
    type: "buyer",
    status: "showing",
    budget: { min: 400000, max: 550000 },
    neighborhoods: ["Fruitvale", "San Antonio"],
    lastContact: "2026-02-28",
    priority: "low",
    notes: "First-time buyer, FHA loan. Showing a duplex on March 8 — interested in house-hacking. Needs hand-holding.",
  },

  // Under Contract (3)
  {
    id: "cl-010",
    name: "Lisa Wong",
    email: "lwong@gmail.com",
    phone: "(510) 555-1074",
    type: "buyer",
    status: "under_contract",
    budget: { min: 800000, max: 1000000 },
    neighborhoods: ["Piedmont Ave"],
    lastContact: "2026-03-02",
    priority: "high",
    notes: "Offer accepted on 723 Mandana Blvd! $925K, closing scheduled for March 28. Inspection this Thursday.",
    propertyAddress: "723 Mandana Blvd, Oakland",
  },
  {
    id: "cl-011",
    name: "Greg & Diane Foster",
    email: "dfoster@gmail.com",
    phone: "(510) 555-1182",
    type: "seller",
    status: "under_contract",
    budget: { min: 0, max: 0 },
    neighborhoods: ["Montclair"],
    lastContact: "2026-03-01",
    priority: "high",
    notes: "Listed at $1.1M, accepted offer at $1.15M — over asking! Buyer's loan in underwriting. Close date March 21.",
    propertyAddress: "1847 Mountain Blvd, Oakland",
    listingPrice: 1150000,
  },
  {
    id: "cl-012",
    name: "Yuki Tanaka",
    email: "yuki.t@gmail.com",
    phone: "(510) 555-1293",
    type: "buyer",
    status: "under_contract",
    budget: { min: 550000, max: 700000 },
    neighborhoods: ["Temescal"],
    lastContact: "2026-02-28",
    priority: "medium",
    notes: "Under contract on a Temescal townhouse at $645K. Appraisal completed — came in at value. Smooth deal so far.",
    propertyAddress: "4912 Telegraph Ave #B, Oakland",
  },

  // Closed (3)
  {
    id: "cl-013",
    name: "Michael & Aisha Brown",
    email: "mbrown@gmail.com",
    phone: "(510) 555-1407",
    type: "buyer",
    status: "closed",
    budget: { min: 700000, max: 900000 },
    neighborhoods: ["Rockridge"],
    lastContact: "2026-02-15",
    priority: "low",
    notes: "Closed on 2/14! Beautiful Rockridge bungalow at $835K. Very happy — promised to send referrals. Sent closing gift.",
    propertyAddress: "5387 Lawton Ave, Oakland",
  },
  {
    id: "cl-014",
    name: "Cynthia Reeves",
    email: "creeves@outlook.com",
    phone: "(510) 555-1518",
    type: "seller",
    status: "closed",
    budget: { min: 0, max: 0 },
    neighborhoods: ["Lake Merritt"],
    lastContact: "2026-02-10",
    priority: "low",
    notes: "Sold her Lake Merritt condo for $490K — $15K over asking. 12 days on market. She's relocating to Portland.",
    propertyAddress: "1515 Lakeside Dr #8B, Oakland",
    listingPrice: 490000,
  },
  {
    id: "cl-015",
    name: "Anthony Russo",
    email: "arusso@gmail.com",
    phone: "(510) 555-1625",
    type: "buyer",
    status: "closed",
    budget: { min: 1000000, max: 1400000 },
    neighborhoods: ["Piedmont Ave", "Crocker Highlands"],
    lastContact: "2026-01-28",
    priority: "low",
    notes: "Closed on gorgeous Crocker Highlands Tudor at $1.28M on 1/27. Fantastic client — already referred two friends.",
    propertyAddress: "891 Sunnyhills Rd, Oakland",
  },
];

// ─── Sample Activities ───────────────────────────────────────────────

export const sampleActivities: CRMActivity[] = [
  {
    id: "act-01",
    type: "new_lead",
    message: "New lead: Sarah Chen inquired about Rockridge listings",
    client: "Sarah Chen",
    date: "2026-03-02T14:30:00",
    icon: "UserPlus",
  },
  {
    id: "act-02",
    type: "showing",
    message: "Showing scheduled: Tom & Linda Nakamura — 3 properties in Rockridge on March 5",
    client: "Tom & Linda Nakamura",
    date: "2026-03-02T11:15:00",
    icon: "Home",
  },
  {
    id: "act-03",
    type: "offer",
    message: "Offer accepted: Lisa Wong — 723 Mandana Blvd at $925K",
    client: "Lisa Wong",
    date: "2026-03-01T16:45:00",
    icon: "CheckCircle",
  },
  {
    id: "act-04",
    type: "follow_up",
    message: "Follow-up due: David Kim — hasn't responded in 5 days",
    client: "David Kim",
    date: "2026-03-01T09:00:00",
    icon: "AlertCircle",
  },
  {
    id: "act-05",
    type: "call",
    message: "Call completed: Marcus Johnson — discussed Temescal options, very motivated",
    client: "Marcus Johnson",
    date: "2026-02-27T15:20:00",
    icon: "Phone",
  },
  {
    id: "act-06",
    type: "email",
    message: "Listings sent: David Kim — 4 properties in Crocker Highlands & Trestle Glen",
    client: "David Kim",
    date: "2026-02-25T10:30:00",
    icon: "Mail",
  },
  {
    id: "act-07",
    type: "showing",
    message: "Showing completed: Keisha Williams — 2 properties in Glenview & Dimond",
    client: "Keisha Williams",
    date: "2026-02-24T13:00:00",
    icon: "Home",
  },
  {
    id: "act-08",
    type: "closing",
    message: "Closing completed: Greg & Diane Foster — 1847 Mountain Blvd sold at $1.15M",
    client: "Greg & Diane Foster",
    date: "2026-02-21T11:00:00",
    icon: "PartyPopper",
  },
  {
    id: "act-09",
    type: "offer",
    message: "Offer submitted: Yuki Tanaka — 4912 Telegraph Ave #B at $645K",
    client: "Yuki Tanaka",
    date: "2026-02-20T14:00:00",
    icon: "FileText",
  },
  {
    id: "act-10",
    type: "new_lead",
    message: "Referral received: James & Priya Patel — referred by Lisa Wong",
    client: "James & Priya Patel",
    date: "2026-03-01T08:45:00",
    icon: "UserPlus",
  },
  {
    id: "act-11",
    type: "closing",
    message: "Closing completed: Michael & Aisha Brown — 5387 Lawton Ave at $835K",
    client: "Michael & Aisha Brown",
    date: "2026-02-14T10:00:00",
    icon: "PartyPopper",
  },
  {
    id: "act-12",
    type: "email",
    message: "Market report sent: Fatima Al-Rashid — Adams Point condo pricing analysis",
    client: "Fatima Al-Rashid",
    date: "2026-02-26T16:15:00",
    icon: "Mail",
  },
];

// ─── Sample Tasks ────────────────────────────────────────────────────

export const sampleTasks: CRMTask[] = [
  {
    id: "task-01",
    title: "Call back Sarah Chen — discuss Rockridge listings & schedule intro meeting",
    client: "Sarah Chen",
    dueDate: "2026-03-03",
    priority: "high",
    completed: false,
  },
  {
    id: "task-02",
    title: "Schedule showings for Marcus Johnson — Temescal & Longfellow",
    client: "Marcus Johnson",
    dueDate: "2026-03-03",
    priority: "high",
    completed: false,
  },
  {
    id: "task-03",
    title: "Follow up with David Kim — no response to listings email",
    client: "David Kim",
    dueDate: "2026-03-03",
    priority: "medium",
    completed: false,
  },
  {
    id: "task-04",
    title: "Prepare showing itinerary for Tom & Linda Nakamura — March 5",
    client: "Tom & Linda Nakamura",
    dueDate: "2026-03-04",
    priority: "high",
    completed: false,
  },
  {
    id: "task-05",
    title: "Coordinate home inspection for Lisa Wong — 723 Mandana Blvd",
    client: "Lisa Wong",
    dueDate: "2026-03-05",
    priority: "high",
    completed: false,
  },
  {
    id: "task-06",
    title: "Submit seller disclosures for Fatima Al-Rashid — 285 Grand Ave #4C",
    client: "Fatima Al-Rashid",
    dueDate: "2026-03-06",
    priority: "medium",
    completed: false,
  },
  {
    id: "task-07",
    title: "Review appraisal report for Yuki Tanaka — 4912 Telegraph Ave #B",
    client: "Yuki Tanaka",
    dueDate: "2026-03-07",
    priority: "medium",
    completed: false,
  },
  {
    id: "task-08",
    title: "Send CMA to Angela Moretti — Montclair market valuation",
    client: "Angela Moretti",
    dueDate: "2026-03-07",
    priority: "low",
    completed: false,
  },
  {
    id: "task-09",
    title: "Find more Glenview listings for Keisha Williams",
    client: "Keisha Williams",
    dueDate: "2026-03-05",
    priority: "medium",
    completed: false,
  },
  {
    id: "task-10",
    title: "Send closing gift to Michael & Aisha Brown",
    client: "Michael & Aisha Brown",
    dueDate: "2026-03-04",
    priority: "low",
    completed: true,
  },
];

// ─── Monthly Metrics ─────────────────────────────────────────────────

export const monthlyMetrics: MonthlyMetric[] = [
  { month: "Oct", closings: 2, revenue: 38500 },
  { month: "Nov", closings: 3, revenue: 52200 },
  { month: "Dec", closings: 1, revenue: 18700 },
  { month: "Jan", closings: 2, revenue: 41300 },
  { month: "Feb", closings: 3, revenue: 57800 },
  { month: "Mar", closings: 0, revenue: 0 },
];

// ─── Pipeline Status Config ─────────────────────────────────────────

export const pipelineStatuses = [
  { key: "new_lead" as const, label: "New Leads", color: "blue" },
  { key: "contacted" as const, label: "Contacted", color: "yellow" },
  { key: "showing" as const, label: "Showing Scheduled", color: "orange" },
  { key: "under_contract" as const, label: "Under Contract", color: "green" },
  { key: "closed" as const, label: "Closed", color: "teal" },
];

// ─── Computed Metrics ────────────────────────────────────────────────

export const getOverviewStats = (clients: CRMClient[], metrics: MonthlyMetric[]) => {
  const activeLeads = clients.filter(
    (c) => c.status === "new_lead" || c.status === "contacted" || c.status === "showing"
  ).length;

  const underContract = clients.filter((c) => c.status === "under_contract").length;

  const closedThisMonth = clients.filter(
    (c) => c.status === "closed" && c.lastContact >= "2026-03-01"
  ).length;

  const currentMonth = metrics[metrics.length - 1];

  const pipelineValue = clients
    .filter((c) => c.status !== "closed")
    .reduce((sum, c) => {
      if (c.type === "seller" && c.listingPrice) return sum + c.listingPrice * 0.025;
      if (c.type === "buyer") return sum + ((c.budget.min + c.budget.max) / 2) * 0.025;
      return sum;
    }, 0);

  return {
    activeLeads,
    underContract,
    closedThisMonth,
    revenueThisMonth: currentMonth?.revenue ?? 0,
    pipelineValue: Math.round(pipelineValue),
  };
};
