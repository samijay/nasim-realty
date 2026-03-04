// =============================================================================
// California Real Estate Legislation Tracker — 2025-2026
// Sources: KQED, DRE, Holland & Knight, CA YIMBY, FinCEN, BOE, CalMatters, etc.
// Last updated: March 3, 2026
// =============================================================================

export type BillStatus =
  | "signed_into_law"
  | "effective"
  | "pending"
  | "defeated"
  | "signature_gathering";

export type LegislationCategory =
  | "buyer_broker"
  | "disclosure"
  | "zoning_density"
  | "ceqa_reform"
  | "adu"
  | "disaster_recovery"
  | "enforcement"
  | "fair_housing"
  | "rent_control"
  | "tax"
  | "licensing"
  | "federal_reporting";

export type ImpactLevel = "high" | "medium" | "low";

export interface Legislation {
  id: string;
  billNumber: string;
  title: string;
  author?: string;
  status: BillStatus;
  effectiveDate: string;
  signedDate?: string;
  category: LegislationCategory;
  summary: string;
  keyProvisions: string[];
  realtorImpact: string;
  impactLevel: ImpactLevel;
  sourceUrl: string;
}

export interface LocalOrdinance {
  id: string;
  jurisdiction: string;
  title: string;
  effectiveDate: string;
  summary: string;
  keyDetails: string[];
  realtorImpact: string;
  sourceUrl: string;
}

export const stateLegislation: Legislation[] = [
  {
    id: "ab-2992",
    billNumber: "AB 2992",
    title: "Buyer-Broker Representation Agreements",
    status: "effective",
    effectiveDate: "2025-01-01",
    signedDate: "2024-09-30",
    category: "buyer_broker",
    summary:
      "Mandates written buyer-broker agreements for all real property transactions. Requires disclosure of services, compensation structure, payment terms, and expiration. Caps agreement duration at 3 months with no auto-renewal.",
    keyProvisions: [
      "Written agreement required before or at offer execution",
      "Applies to all property types — residential, commercial, vacant land, manufactured homes",
      "Maximum 3-month term; auto-renewal prohibited",
      "Renewals must be written, signed, and dated",
      "Non-compliant agreements are void and unenforceable",
    ],
    realtorImpact:
      "Fundamental shift in buyer representation. Agents must execute compliant agreements before showing any property. Compensation must be transparent and negotiated upfront.",
    impactLevel: "high",
    sourceUrl: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB2992",
  },
  {
    id: "sb-79",
    billNumber: "SB 79",
    title: "Transit-Oriented Development — Abundant and Affordable Homes Near Transit Act",
    author: "Sen. Scott Wiener (D-San Francisco)",
    status: "signed_into_law",
    effectiveDate: "2026-07-01",
    signedDate: "2025-10-10",
    category: "zoning_density",
    summary:
      "Upzones sites near high-quality transit in 8 counties. Allows 55-95 ft buildings and 30+ units/acre within 1/2 mile of qualifying transit stops.",
    keyProvisions: [
      "Bay Area: Alameda, San Francisco, San Mateo, Santa Clara counties",
      "Height limits: 55-95 feet depending on transit proximity",
      "Minimum density: 30 dwelling units per acre",
      "Affordability: 7-13% low-income units (projects >10 units)",
      "Cannot demolish rent-stabilized housing",
    ],
    realtorImpact:
      "Massive development opportunities near Bay Area transit. Property values near qualifying stops likely to increase.",
    impactLevel: "high",
    sourceUrl: "https://cayimby.org/legislation/sb-79/",
  },
  {
    id: "ab-130",
    billNumber: "AB 130",
    title: "CEQA Urban Infill Housing Exemption",
    status: "signed_into_law",
    effectiveDate: "2026-01-01",
    category: "ceqa_reform",
    summary:
      "Exempts urban infill housing projects from CEQA environmental review, dramatically accelerating project approvals.",
    keyProvisions: [
      "Urban infill housing exempt from CEQA review",
      "Significantly reduces approval timelines",
      "HOA fine cap: $100 per violation (non-health/safety)",
    ],
    realtorImpact:
      "Faster pipeline of new housing inventory. Developers can bring projects to market sooner.",
    impactLevel: "high",
    sourceUrl: "https://www.kqed.org/news/12068746/2025-was-a-blockbuster-year-for-housing-laws-what-does-that-mean-for-2026",
  },
  {
    id: "ab-723",
    billNumber: "AB 723",
    title: "AI / Digital Photo Disclosure in Listings",
    status: "effective",
    effectiveDate: "2026-01-01",
    category: "disclosure",
    summary:
      "Requires disclosure when listing photos are digitally altered or AI-generated, including AI staging. Must provide access to original unedited photos.",
    keyProvisions: [
      "Disclosure required for digitally altered or AI-generated listing photos",
      "Includes removing structures, altering views, AI staging",
      "Must provide access to original unedited photo",
    ],
    realtorImpact:
      "Agents must audit all listing photos and marketing materials. AI staging tools require clear labeling.",
    impactLevel: "high",
    sourceUrl: "https://pfar.org/new-real-estate-laws-taking-effect-in-2026-what-you-need-to-know/",
  },
  {
    id: "sb-382",
    billNumber: "SB 382",
    title: "Transfer Disclosure — Gas Appliance & Electrical",
    status: "effective",
    effectiveDate: "2026-01-01",
    category: "disclosure",
    summary:
      "Sellers must disclose state/local requirements for gas appliance replacement and provide statutory notice for electrical inspection.",
    keyProvisions: [
      "Applies to residential 1-4 unit properties",
      "Must disclose known gas appliance replacement requirements",
      "Statutory notice required for electrical inspection",
    ],
    realtorImpact:
      "Agents must understand local gas appliance phase-out requirements. New disclosure items for transaction workflows.",
    impactLevel: "medium",
    sourceUrl: "https://www.tylerlawllp.com/blog-posts/californias-new-real-estate-laws-2025-key-changes-realtors-r-need-to-know",
  },
  {
    id: "ab-455",
    billNumber: "AB 455",
    title: "Tobacco / Nicotine Residue Disclosure",
    status: "effective",
    effectiveDate: "2026-01-01",
    category: "disclosure",
    summary:
      "Sellers must disclose known tobacco or nicotine residue and any history of smoking activity on the property.",
    keyProvisions: [
      "Disclosure of known tobacco or nicotine residue",
      "Must disclose history of smoking activity",
    ],
    realtorImpact:
      "New mandatory disclosure item. Buyer agents should advise clients on potential remediation costs.",
    impactLevel: "low",
    sourceUrl: "https://pfar.org/new-real-estate-laws-taking-effect-in-2026-what-you-need-to-know/",
  },
  {
    id: "sb-625",
    billNumber: "SB 625",
    title: "Disaster Recovery — Streamlined Housing Approvals",
    status: "signed_into_law",
    effectiveDate: "2026-01-01",
    category: "disaster_recovery",
    summary:
      "Creates streamlined 90-day approval for housing on disaster-destroyed sites. Invalidates local restrictions on temporary housing for 3 years.",
    keyProvisions: [
      "Local governments must approve disaster-site housing within 90 days",
      "Invalidates local ordinances restricting temporary housing for 3 years",
    ],
    realtorImpact:
      "Faster rebuilding timelines create transaction opportunities in fire/disaster-prone areas.",
    impactLevel: "medium",
    sourceUrl: "https://www.hklaw.com/en/insights/publications/2025/12/californias-2026-housing-laws-what-you-need-to-know",
  },
  {
    id: "ab-712",
    billNumber: "AB 712",
    title: "Housing Enforcement — Enhanced Penalties",
    status: "signed_into_law",
    effectiveDate: "2026-01-01",
    category: "enforcement",
    summary:
      "Enhanced fines against local governments violating housing reform laws. Courts must award attorney's fees to prevailing housing developer plaintiffs.",
    keyProvisions: [
      "Mandatory attorney's fees for prevailing developers",
      "Enhanced fines against non-compliant local governments",
    ],
    realtorImpact:
      "Local governments face stronger incentives to approve compliant housing projects, increasing housing supply.",
    impactLevel: "medium",
    sourceUrl: "https://www.hklaw.com/en/insights/publications/2025/12/californias-2026-housing-laws-what-you-need-to-know",
  },
  {
    id: "sb-543",
    billNumber: "SB 543",
    title: "ADU/JADU — Clearer Rules & Faster Timelines",
    status: "signed_into_law",
    effectiveDate: "2026-01-01",
    category: "adu",
    summary:
      "Clarifies ADU/JADU rules: all sizes in net sq ft, local agencies must allow attached + detached ADU + JADU on single-family lots, 15 business day completeness determination.",
    keyProvisions: [
      "Allow 1 attached + 1 detached ADU + 1 JADU on single-family lots",
      "15 business day completeness determination",
      "Fire sprinklers not required for JADUs if not required for primary dwelling",
    ],
    realtorImpact:
      "Expanded ADU potential increases property values. Agents should proactively identify ADU-eligible properties.",
    impactLevel: "high",
    sourceUrl: "https://www.bwslaw.com/insights/public-law-update-2025-adu-legislative-update/",
  },
  {
    id: "ab-1154",
    billNumber: "AB 1154",
    title: "JADU Owner-Occupancy & Parking Reforms",
    status: "signed_into_law",
    effectiveDate: "2026-01-01",
    category: "adu",
    summary:
      "Limits owner-occupancy requirement to JADUs sharing bathrooms. Bans JADU short-term rentals. No parking required for ADUs 500 sq ft or less.",
    keyProvisions: [
      "Owner-occupancy only for JADUs sharing sanitation",
      "JADUs prohibited as short-term rentals (<30 days)",
      "No parking for ADUs ≤500 sq ft",
    ],
    realtorImpact:
      "More flexible JADU rules increase investment appeal. No-parking requirement removes a common barrier.",
    impactLevel: "medium",
    sourceUrl: "https://www.bwslaw.com/insights/public-law-update-2025-adu-legislative-update/",
  },
  {
    id: "ab-462",
    billNumber: "AB 462",
    title: "ADU Disaster Relief & Coastal Zone Streamlining",
    status: "effective",
    effectiveDate: "2025-10-10",
    category: "adu",
    summary:
      "Urgency measure for ADUs on disaster-damaged sites. Streamlines Coastal Development Permits: 60-day deadline, eliminates Coastal Commission appeals.",
    keyProvisions: [
      "Exception for detached ADUs when primary dwelling destroyed by emergency",
      "Coastal Development Permit: 60-day approval deadline",
      "Eliminated Coastal Commission appeal for ADU CDPs",
    ],
    realtorImpact:
      "Coastal properties now have faster ADU permitting. Significant for Bay Area coastal communities.",
    impactLevel: "medium",
    sourceUrl: "https://bbklaw.com/resources/la-110725-governor-newsom-signs-four-new-accessory-dwelling-unit-bills",
  },
  {
    id: "ab-1061",
    billNumber: "AB 1061",
    title: "SB 9 Extended to Historic Districts",
    status: "effective",
    effectiveDate: "2026-01-01",
    category: "adu",
    summary:
      "Extends SB 9 (lot splits and duplexes) to historic districts, provided no historic structure is altered or demolished.",
    keyProvisions: [
      "Duplexes and lot-splits now allowed in historic districts",
      "Cannot alter or demolish any historic structure",
    ],
    realtorImpact:
      "Opens new development opportunities in historically protected neighborhoods.",
    impactLevel: "medium",
    sourceUrl: "https://www.loeb.com/en/insights/publications/2026/01/2025-california-housing-legislative-update-updated-jan-8-2026",
  },
  {
    id: "sb-1137",
    billNumber: "SB 1137",
    title: "Intersectional Discrimination Protection",
    status: "effective",
    effectiveDate: "2026-01-01",
    category: "fair_housing",
    summary:
      "Expands civil rights protections to cover discrimination based on any combination of protected characteristics.",
    keyProvisions: [
      "Protection against discrimination based on combinations of characteristics",
      "Codifies intersectional discrimination claims",
    ],
    realtorImpact:
      "Agents face expanded liability. Training should address intersectional scenarios.",
    impactLevel: "medium",
    sourceUrl: "https://coastlineequity.net/insights/understanding-fair-housing-laws-in-california-a-guide-for-property-managers-1",
  },
  {
    id: "prop-19-update",
    billNumber: "Proposition 19",
    title: "Prop 19 — Inheritance Exclusion Adjustment",
    status: "effective",
    effectiveDate: "2025-02-16",
    category: "tax",
    summary:
      "Reassessment exclusion adjusted to $1,044,586. Inherited homes must be heir's primary residence. Seniors can transfer Prop 13 base up to 3 times statewide.",
    keyProvisions: [
      "Exclusion: $1,044,586 (up 2.15% from $1,022,600)",
      "Inherited home must be heir's primary residence",
      "Seniors: transfer Prop 13 base to new home, up to 3 times in CA",
    ],
    realtorImpact:
      "Critical for advising clients on inherited property and senior relocations.",
    impactLevel: "high",
    sourceUrl: "https://boe.ca.gov/prop19/",
  },
  {
    id: "howard-jarvis-2026",
    billNumber: "2026 Ballot Measure",
    title: "Real Estate Transfer Tax Cap",
    status: "signature_gathering",
    effectiveDate: "2026-11-03",
    category: "tax",
    summary:
      "Proposed constitutional amendment to cap real estate transfer taxes at ~0.05% of property value. Would require 2/3 vote for special tax measures.",
    keyProvisions: [
      "Cap transfer tax rates at ~0.05% of property value",
      "Would invalidate high local transfer taxes",
      "Require 2/3 supermajority for special tax measures",
    ],
    realtorImpact:
      "If passed, dramatically reduces transfer taxes in high-tax cities like Berkeley and LA.",
    impactLevel: "high",
    sourceUrl: "https://calmatters.org/housing/2025/10/measure-ula-howard-jarvis-ballot-mansion/",
  },
  {
    id: "fincen-rre",
    billNumber: "FinCEN RRE Rule",
    title: "Residential Real Estate Reporting Rule",
    status: "effective",
    effectiveDate: "2026-03-01",
    category: "federal_reporting",
    summary:
      "Requires reporting of non-financed residential real estate transfers to LLCs, trusts, corporations, and partnerships. Nationwide, all price points.",
    keyProvisions: [
      "Applies to non-financed transfers to legal entities/trusts (1-4 units)",
      "Nationwide — no minimum transaction amount",
      "Must report beneficial owners (25%+ ownership)",
      "Filing deadline: last day of month following closing or 30 days",
      "5-year record retention; civil and criminal penalties",
    ],
    realtorImpact:
      "All-cash entity purchases now trigger federal reporting. Agents must inform investor clients about documentation needs.",
    impactLevel: "high",
    sourceUrl: "https://www.fincen.gov/rre",
  },
];

export const localOrdinances: LocalOrdinance[] = [
  {
    id: "oakland-banked-rent-2026",
    jurisdiction: "Oakland",
    title: "Banked Rent Increase Reforms",
    effectiveDate: "2026-01-01",
    summary:
      "Major changes: 5-year banking limit (down from 10), transfer restrictions, business tax compliance requirements.",
    keyDetails: [
      "Banking limited to 5 years (previously 10)",
      "Banked increases cannot transfer to new owners",
      "Must include Business Tax Certificate with rent increase notices",
      "Current allowable annual increase: 2.3%",
    ],
    realtorImpact:
      "Investment property buyers lose banked rent upside. Agents must advise investor clients about reduced rent-catch-up potential.",
    sourceUrl: "https://edringtonandassociates.com/rent-and-eviction/oakland-rent-law-changes-updates-for-landlords/",
  },
  {
    id: "alameda-city-rent-2025",
    jurisdiction: "Alameda",
    title: "Annual General Adjustment 2025-2026",
    effectiveDate: "2025-09-01",
    summary: "Annual General Adjustment set at 1.0% for September 2025 through August 2026.",
    keyDetails: [
      "Annual adjustment: 1.0%",
      "Increases over 5% require binding rent review",
    ],
    realtorImpact:
      "Very low cap affects investment return projections. Factor 1% annual growth into Alameda rental valuations.",
    sourceUrl: "https://www.alamedarentprogram.org/News-articles/Annual-General-Adjustment-announced-effective-September-1-2025",
  },
  {
    id: "berkeley-rent-control",
    jurisdiction: "Berkeley",
    title: "Rent Stabilization — Standing Rules",
    effectiveDate: "2025-01-01",
    summary:
      "No rent increases during first 2 years of tenancy. Capital improvement and fair return increases require petitions.",
    keyDetails: [
      "No rent increases during first 2 years",
      "Capital improvement increases require petition",
      "Transfer tax: up to $25 per $1,000 of value",
    ],
    realtorImpact:
      "Strict rent control and high transfer tax significantly impact investment property calculations.",
    sourceUrl: "https://www.nolo.com/legal-encyclopedia/california-rent-control-law.html",
  },
];

export const pendingLegislation = [
  {
    id: "affordable-rent-act",
    billNumber: "Affordable Rent Act",
    title: "Rent Control Expansion — Two-Year Bill",
    status: "carried_to_2026",
    summary:
      "Would expand Tenant Protection Act, lower annual rent increase caps, and remove the 2030 sunset date.",
    realtorImpact:
      "If passed, would permanently lower allowable rent increases statewide. Major impact on investment valuations.",
  },
];

export const keyDates = [
  { date: "2025-01-01", description: "AB 2992 buyer-broker agreements required", billReference: "AB 2992" },
  { date: "2025-02-16", description: "Prop 19 exclusion adjusted to $1,044,586", billReference: "Proposition 19" },
  { date: "2026-01-01", description: "AI photo disclosure, tobacco disclosure, ADU reforms, CEQA exemption, fair housing expansions", billReference: "Multiple" },
  { date: "2026-03-01", description: "FinCEN residential real estate reporting begins", billReference: "FinCEN RRE Rule" },
  { date: "2026-07-01", description: "SB 79 transit-oriented development upzoning", billReference: "SB 79" },
  { date: "2026-11-03", description: "Potential ballot: transfer tax cap measure", billReference: "2026 Ballot Measure" },
];

export const categoryLabels: Record<LegislationCategory, string> = {
  buyer_broker: "Buyer-Broker",
  disclosure: "Disclosure",
  zoning_density: "Zoning & Density",
  ceqa_reform: "CEQA Reform",
  adu: "ADU",
  disaster_recovery: "Disaster Recovery",
  enforcement: "Enforcement",
  fair_housing: "Fair Housing",
  rent_control: "Rent Control",
  tax: "Tax",
  licensing: "Licensing",
  federal_reporting: "Federal Reporting",
};

export const impactColors: Record<ImpactLevel, string> = {
  high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
};
