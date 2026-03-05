// =============================================================================
// Bay Area Property Tax Guide — Comprehensive Reference for Realtors & Clients
// Sources: CA Board of Equalization (BOE), County Assessor offices, CA Revenue
//          & Taxation Code, Legislative Analyst's Office (LAO), CBIA
// Last updated: March 4, 2026
// =============================================================================

// -----------------------------------------------------------------------------
// 1. PROPOSITION 13 — FOUNDATION OF CALIFORNIA PROPERTY TAX
// -----------------------------------------------------------------------------

export interface Prop13Explainer {
  title: string;
  enactedYear: number;
  constitutionalProvision: string;
  summary: string;
  keyRules: {
    rule: string;
    details: string;
    example?: string;
  }[];
  reassessmentTriggers: {
    trigger: string;
    description: string;
    exceptions?: string[];
  }[];
  commonMisconceptions: {
    misconception: string;
    reality: string;
  }[];
  source: string;
}

export const prop13Explainer: Prop13Explainer = {
  title: "Proposition 13 — The People's Initiative to Limit Property Taxation",
  enactedYear: 1978,
  constitutionalProvision: "California Constitution, Article XIII A",
  summary:
    "Proposition 13 is the foundation of California property tax law. It caps the base " +
    "property tax rate at 1% of assessed value, limits annual assessment increases to 2%, " +
    "and requires reassessment only upon a change in ownership or new construction. This " +
    "means long-term homeowners often pay far less in property taxes than recent buyers of " +
    "comparable homes.",
  keyRules: [
    {
      rule: "1% Base Rate Cap",
      details:
        "The general levy (ad valorem tax) is capped at 1% of the property's assessed value. " +
        "This is the base rate before any voter-approved bonds, special assessments, or Mello-Roos " +
        "charges are added.",
      example:
        "A home assessed at $1,000,000 pays $10,000/year in base property tax (before additional levies).",
    },
    {
      rule: "2% Annual Increase Cap",
      details:
        "The assessed value can increase by no more than 2% per year (the 'inflation factor'), " +
        "regardless of how much the market value actually increases. The BOE sets the exact " +
        "factor annually — it is the lesser of CPI or 2%.",
      example:
        "A home purchased for $500,000 in 2016 would have a maximum assessed value of ~$609,497 " +
        "in 2026 (compounding at 2%/year), even if the market value is now $1,200,000.",
    },
    {
      rule: "Base Year Value",
      details:
        "When a property is purchased or newly constructed, the county assessor sets the " +
        "'base year value' equal to the purchase price (or fair market value at completion " +
        "of construction). This becomes the starting point for future assessments.",
    },
    {
      rule: "Decline-in-Value (Prop 8) Reduction",
      details:
        "If market value drops below the Prop 13 assessed value, the assessor must temporarily " +
        "reduce the assessed value to the current market value (Revenue & Taxation Code §51). " +
        "This is commonly called a 'Prop 8 reduction.' When the market recovers, the assessed " +
        "value returns to the Prop 13 trended value.",
      example:
        "During the 2008-2011 downturn, many Bay Area homeowners received automatic Prop 8 " +
        "reductions, saving thousands per year until values recovered.",
    },
  ],
  reassessmentTriggers: [
    {
      trigger: "Change in Ownership",
      description:
        "Any transfer of a present interest in real property triggers reassessment to current " +
        "market value. This includes sales, gifts, inheritance (with limited exceptions under " +
        "Prop 19), adding/removing someone from title, and transfers to/from trusts in certain cases.",
      exceptions: [
        "Interspousal transfers (marriage, divorce, death of spouse) — no reassessment",
        "Transfers between registered domestic partners — no reassessment",
        "Certain transfers to revocable living trusts — no reassessment if the transferor is a beneficiary",
        "Prop 19 parent-child exclusion (limited, see Prop 19 section below)",
        "Transfers of certain legal entity interests where proportional ownership is unchanged",
      ],
    },
    {
      trigger: "New Construction",
      description:
        "Any substantial addition to or physical alteration of land or improvements triggers " +
        "reassessment of the new construction portion only. The existing structure retains its " +
        "Prop 13 base year value.",
      exceptions: [
        "Seismic retrofitting — excluded from reassessment",
        "Disabled-access improvements — excluded from reassessment",
        "Solar energy system installation — excluded through 2025 (SB 364 extended)",
        "Fire sprinkler installation in existing buildings — excluded",
        "ADU construction is assessed as new construction (added to existing base)",
      ],
    },
    {
      trigger: "Legal Entity Ownership Changes",
      description:
        "If a legal entity (LLC, corporation, partnership) that owns real property undergoes " +
        "a change in control (one person/entity gains 50%+ of voting stock or ownership) or " +
        "if original co-owners' interests drop below 50%, the property is reassessed.",
    },
  ],
  commonMisconceptions: [
    {
      misconception: "My property taxes will jump 2% every year automatically.",
      reality:
        "The 2% is a maximum cap. If CPI is below 2%, the increase will be less. In some " +
        "years (like 2011), the factor was as low as 0.753%. The BOE publishes the annual " +
        "inflation factor each fall.",
    },
    {
      misconception: "Remodeling my kitchen will trigger a full property reassessment.",
      reality:
        "Only 'new construction' (adding square footage, new structures, or converting use) " +
        "triggers reassessment — and only on the new portion. Cosmetic remodeling (new counters, " +
        "flooring, paint) does not trigger reassessment. However, a full gut renovation that " +
        "replaces structural components may be considered new construction.",
    },
    {
      misconception: "Putting my home in a living trust will cause reassessment.",
      reality:
        "Transferring property to a revocable living trust where the transferor is a present " +
        "beneficiary does NOT trigger reassessment. This is one of the most common estate " +
        "planning tools in California.",
    },
  ],
  source:
    "California Board of Equalization — Proposition 13 Overview; CA Revenue & Taxation Code §51, §60-69.5; LAO Analysis (lao.ca.gov)",
};

// -----------------------------------------------------------------------------
// 2. TAX RATES BY COUNTY
// -----------------------------------------------------------------------------

export interface CountyTaxRate {
  county: string;
  baseRate: number; // always 1.0% per Prop 13
  typicalEffectiveRateLow: number; // percentage, including bonds/assessments
  typicalEffectiveRateHigh: number;
  averageEffectiveRate: number;
  voterApprovedBonds: string;
  commonSpecialAssessments: string[];
  assessorWebsite: string;
  taxCollectorWebsite: string;
  fiscalYearBasis: string;
  notes: string;
  source: string;
}

export const countyTaxRates: CountyTaxRate[] = [
  {
    county: "Alameda",
    baseRate: 1.0,
    typicalEffectiveRateLow: 1.15,
    typicalEffectiveRateHigh: 1.65,
    averageEffectiveRate: 1.37,
    voterApprovedBonds:
      "BART, AC Transit, Peralta CCD, Chabot-Las Positas CCD, OUSD/BUSD school bonds, " +
      "East Bay Regional Parks, Alameda County essential services bonds",
    commonSpecialAssessments: [
      "OUSD Measures G, Y, AA (Oakland schools)",
      "BUSD Measures E, H (Berkeley schools)",
      "Alameda County Measure A (essential services)",
      "BART District bonds",
      "East Bay MUD (parcel tax)",
      "Mosquito Abatement District",
      "Oakland Measures Q, HH (violence prevention, infrastructure)",
    ],
    assessorWebsite: "https://www.acassessor.org",
    taxCollectorWebsite: "https://www.acgov.org/propertytax/",
    fiscalYearBasis: "July 1 - June 30",
    notes:
      "Alameda County has some of the highest effective tax rates in the Bay Area due to " +
      "numerous school bonds and special assessments, especially in Oakland and Berkeley. " +
      "Tax rates vary significantly by tax rate area (TRA) — a home in Oakland Hills may have " +
      "a different rate than one in the flatlands due to different school and special districts.",
    source: "Alameda County Assessor's Office; Alameda County Tax Collector 2025-2026 tax rolls",
  },
  {
    county: "Contra Costa",
    baseRate: 1.0,
    typicalEffectiveRateLow: 1.10,
    typicalEffectiveRateHigh: 1.60,
    averageEffectiveRate: 1.30,
    voterApprovedBonds:
      "BART, Mt. Diablo USD, San Ramon Valley USD, Contra Costa Community College, " +
      "East Bay Regional Parks, Contra Costa Transportation Authority",
    commonSpecialAssessments: [
      "San Ramon Valley USD school bonds (significant in San Ramon, Danville, Dublin)",
      "Mt. Diablo USD bonds (Walnut Creek, Concord, Clayton)",
      "East Contra Costa Fire Protection District",
      "Contra Costa Water District",
      "Various Mello-Roos CFDs (Dublin Ranch, Dougherty Valley, San Ramon)",
      "Mosquito and Vector Control District",
    ],
    assessorWebsite: "https://www.contracosta.ca.gov/191/Assessor",
    taxCollectorWebsite: "https://www.contracosta.ca.gov/195/Tax-Collector",
    fiscalYearBasis: "July 1 - June 30",
    notes:
      "Contra Costa has wide variation by city. New developments in Dublin, San Ramon, and " +
      "parts of Brentwood often carry Mello-Roos charges that can add $3,000-$10,000+/year. " +
      "Older communities like Walnut Creek and Lafayette have lower effective rates.",
    source: "Contra Costa County Assessor's Office; County Tax Collector FY 2025-2026",
  },
  {
    county: "San Francisco",
    baseRate: 1.0,
    typicalEffectiveRateLow: 1.15,
    typicalEffectiveRateHigh: 1.40,
    averageEffectiveRate: 1.18,
    voterApprovedBonds:
      "SFUSD school bonds, SF Community College, BART, Affordable Housing bonds, " +
      "Earthquake Safety bonds, Parks bonds, Transportation bonds",
    commonSpecialAssessments: [
      "SFUSD Propositions A & B (school facilities bonds)",
      "SF Community College Proposition A",
      "Affordable housing bonds (multiple measures)",
      "Seismic safety bonds",
      "Real Property Transfer Tax (separate from property tax — 0.5% to 6% based on sale price)",
    ],
    assessorWebsite: "https://sfassessor.org",
    taxCollectorWebsite: "https://sftreasurer.org/property-taxes",
    fiscalYearBasis: "July 1 - June 30",
    notes:
      "San Francisco is a combined city-county, so there is no county vs. city tax split. " +
      "Effective rates are relatively consistent across the city (fewer TRA variations than " +
      "suburban counties). However, the real property transfer tax is a significant cost: " +
      "it ranges from $2.50 per $500 of value (homes under $250K) up to $30 per $500 " +
      "(homes over $25M). Most homes in the $1M-$10M range pay $3.75 per $500 (0.75%).",
    source: "SF Office of the Assessor-Recorder; SF Treasurer & Tax Collector FY 2025-2026",
  },
  {
    county: "San Mateo",
    baseRate: 1.0,
    typicalEffectiveRateLow: 1.05,
    typicalEffectiveRateHigh: 1.35,
    averageEffectiveRate: 1.15,
    voterApprovedBonds:
      "San Mateo Union HSD, various elementary school districts, Sequoia Healthcare District, " +
      "SamTrans, Peninsula Clean Energy, Measure K (half-cent sales tax)",
    commonSpecialAssessments: [
      "School district bonds (vary by district — Hillsborough USD, San Mateo-Foster City SD, etc.)",
      "Sequoia Healthcare District parcel tax",
      "San Mateo County Flood Control",
      "Coastside Fire Protection District",
      "Midpeninsula Regional Open Space District",
    ],
    assessorWebsite: "https://www.smcacre.org/assessor",
    taxCollectorWebsite: "https://www.smcacre.org/tax-collector",
    fiscalYearBasis: "July 1 - June 30",
    notes:
      "San Mateo County tends to have slightly lower effective rates than Alameda due to fewer " +
      "overlapping special districts, but very high home values mean total annual tax bills are " +
      "among the highest in California. A $2M home in San Mateo could easily pay $23,000+/year " +
      "in property taxes.",
    source: "San Mateo County Assessor-County Clerk-Recorder; FY 2025-2026 tax rolls",
  },
  {
    county: "Santa Clara",
    baseRate: 1.0,
    typicalEffectiveRateLow: 1.15,
    typicalEffectiveRateHigh: 1.55,
    averageEffectiveRate: 1.25,
    voterApprovedBonds:
      "Santa Clara County general obligation bonds, Valley Transportation Authority (VTA), " +
      "various school district bonds (Cupertino Union, Palo Alto USD, San Jose USD, etc.), " +
      "Santa Clara Valley Water District",
    commonSpecialAssessments: [
      "VTA Measure B (BART extension, transportation improvements)",
      "Multiple school district bonds (significant in Cupertino, Saratoga, Los Gatos)",
      "Santa Clara Valley Water District — Safe Clean Water parcel tax",
      "Mello-Roos CFDs in newer developments (Milpitas, North San Jose, Evergreen)",
      "Library JPA parcel tax",
      "Vector Control District",
    ],
    assessorWebsite: "https://www.sccassessor.org",
    taxCollectorWebsite: "https://dtac.sccgov.org",
    fiscalYearBasis: "July 1 - June 30",
    notes:
      "Santa Clara County has the highest total property tax revenue in the Bay Area due to " +
      "very high property values (Cupertino, Palo Alto, Los Altos, Saratoga). Newer " +
      "developments in Milpitas and North San Jose often have Mello-Roos. The county " +
      "assessor is one of the largest in California by assessed roll value.",
    source: "Santa Clara County Assessor's Office; Department of Tax and Collections FY 2025-2026",
  },
  {
    county: "Solano",
    baseRate: 1.0,
    typicalEffectiveRateLow: 1.05,
    typicalEffectiveRateHigh: 1.50,
    averageEffectiveRate: 1.18,
    voterApprovedBonds:
      "Solano County general obligation, Fairfield-Suisun USD, Vacaville USD, " +
      "Vallejo City USD, Solano Community College District",
    commonSpecialAssessments: [
      "School district bonds (Fairfield-Suisun, Vacaville, Benicia)",
      "Solano County Water Agency",
      "Solano Irrigation District",
      "Mello-Roos in newer Vacaville and Fairfield developments",
      "Mosquito Abatement District",
    ],
    assessorWebsite: "https://www.solanocounty.com/depts/assessor/",
    taxCollectorWebsite: "https://www.solanocounty.com/depts/ttc/",
    fiscalYearBasis: "July 1 - June 30",
    notes:
      "Solano County is the most affordable Bay Area county for property taxes due to lower " +
      "home values and fewer special assessments. However, newer developments in Fairfield " +
      "and Vacaville may carry Mello-Roos charges. Vallejo's fiscal situation means some " +
      "parcel taxes have been added to support city services.",
    source: "Solano County Assessor's Office; Solano County Tax Collector FY 2025-2026",
  },
  {
    county: "Marin",
    baseRate: 1.0,
    typicalEffectiveRateLow: 1.05,
    typicalEffectiveRateHigh: 1.35,
    averageEffectiveRate: 1.14,
    voterApprovedBonds:
      "Tamalpais Union HSD, various elementary school districts, Marin Community College, " +
      "Marin County Parks, Golden Gate Bridge District",
    commonSpecialAssessments: [
      "School district parcel taxes (Ross Valley, Mill Valley, Novato, etc.)",
      "Marin County Open Space District",
      "Marin County Parks Measure A",
      "Flood control and water district charges",
      "Sewerage and sanitary district charges",
      "Golden Gate Transit parcel tax",
    ],
    assessorWebsite: "https://www.marincounty.org/depts/ar",
    taxCollectorWebsite: "https://www.marincounty.org/depts/df/tax-collector",
    fiscalYearBasis: "July 1 - June 30",
    notes:
      "Marin has relatively low effective tax rates but extremely high property values. " +
      "A $2.5M home in Mill Valley or Tiburon at 1.14% effective rate still means ~$28,500/year. " +
      "Few Mello-Roos districts due to limited new development. Marin's strict growth " +
      "controls keep development minimal.",
    source: "Marin County Assessor-Recorder-Clerk; Marin County Department of Finance FY 2025-2026",
  },
];

// -----------------------------------------------------------------------------
// 3. MELLO-ROOS / COMMUNITY FACILITIES DISTRICTS (CFDs)
// -----------------------------------------------------------------------------

export interface MelloRoosInfo {
  title: string;
  enactedYear: number;
  statute: string;
  summary: string;
  howItWorks: string[];
  typicalAnnualRange: { min: number; max: number; unit: string };
  durationYears: { min: number; max: number };
  keyFacts: string[];
  commonBayAreaCFDs: {
    area: string;
    county: string;
    typicalAnnualCharge: string;
    notes: string;
  }[];
  buyerWarnings: string[];
  realtorObligations: string[];
  source: string;
}

export const melloRoosInfo: MelloRoosInfo = {
  title: "Mello-Roos Community Facilities Act of 1982",
  enactedYear: 1982,
  statute: "California Government Code §53311-53368.3",
  summary:
    "The Mello-Roos Community Facilities Act allows local governments to create Community " +
    "Facilities Districts (CFDs) to finance public infrastructure and services — schools, " +
    "roads, parks, fire stations, sewer systems — through special taxes on properties within " +
    "the district. These charges appear on the property tax bill as a separate line item and " +
    "are NOT limited by Proposition 13's 1% cap.",
  howItWorks: [
    "A local government (city, county, school district, or special district) forms a CFD " +
    "and defines the boundaries.",
    "Property owners within the proposed CFD vote to approve the special tax (requires 2/3 " +
    "majority). For new developments with no residents, the developer/landowner votes.",
    "Bonds are issued to fund infrastructure construction. The special tax on each parcel " +
    "pays the annual bond debt service.",
    "The tax is a fixed amount per parcel (not based on assessed value) and may include an " +
    "annual escalation factor of 2-4%.",
    "CFDs typically last 20-40 years until the bonds are fully repaid. After that, the " +
    "special tax drops to zero or is reduced to a maintenance-only charge.",
    "The Mello-Roos tax is an obligation that runs with the land — it transfers to the new " +
    "owner upon sale. It cannot be removed or appealed.",
  ],
  typicalAnnualRange: { min: 1_000, max: 10_000, unit: "per year" },
  durationYears: { min: 20, max: 40 },
  keyFacts: [
    "Mello-Roos charges are NOT tax-deductible as property taxes on federal returns (IRS " +
    "considers them special assessments, not ad valorem taxes). Check with a tax advisor.",
    "CFD taxes typically have a built-in annual escalation of 2-4% per year.",
    "The charge is per parcel, not based on home value — a $500K home and a $1.5M home in " +
    "the same CFD may pay the same Mello-Roos amount.",
    "Sellers must provide a Mello-Roos disclosure (Notice of Special Tax) to buyers per " +
    "Government Code §53340.2.",
    "CFD taxes cannot be contested or appealed the way regular property tax assessments can.",
    "Pre-payment of Mello-Roos bonds is sometimes possible — check with the issuing agency.",
  ],
  commonBayAreaCFDs: [
    {
      area: "Dublin Ranch / Eastern Dublin",
      county: "Alameda",
      typicalAnnualCharge: "$3,000-$8,000/year",
      notes:
        "Multiple overlapping CFDs for schools, parks, and infrastructure. Dublin has some of " +
        "the highest Mello-Roos charges in the East Bay. Newer phases (2015+) tend to have higher charges.",
    },
    {
      area: "San Ramon / Dougherty Valley",
      county: "Contra Costa",
      typicalAnnualCharge: "$2,500-$6,000/year",
      notes:
        "Dougherty Valley development funded schools and parks through CFDs. Charges decrease " +
        "as bonds mature — some early-phase homes are seeing reductions.",
    },
    {
      area: "Fremont (Warm Springs / Centerville)",
      county: "Alameda",
      typicalAnnualCharge: "$2,000-$5,000/year",
      notes:
        "Newer developments near the Warm Springs BART station carry CFD charges for " +
        "infrastructure and transit improvements.",
    },
    {
      area: "Milpitas (Transit Area / Great Mall area)",
      county: "Santa Clara",
      typicalAnnualCharge: "$2,000-$6,000/year",
      notes:
        "BART extension and transit-oriented development funded partially through CFDs.",
    },
    {
      area: "North San Jose / Berryessa",
      county: "Santa Clara",
      typicalAnnualCharge: "$1,500-$4,500/year",
      notes:
        "Newer communities near the Berryessa BART station. Multiple CFDs for schools, " +
        "parks, and transportation.",
    },
    {
      area: "Mountain House",
      county: "San Joaquin (commuter community to Bay Area)",
      typicalAnnualCharge: "$5,000-$10,000+/year",
      notes:
        "One of the highest Mello-Roos communities in Northern California. Master-planned " +
        "community with extensive infrastructure bonds. Many Bay Area commuters are surprised " +
        "by the total tax bill despite the lower purchase price.",
    },
    {
      area: "Brentwood / Discovery Bay",
      county: "Contra Costa",
      typicalAnnualCharge: "$2,000-$6,000/year",
      notes:
        "Rapid growth area with school and infrastructure CFDs. Newer phases generally have " +
        "higher Mello-Roos charges.",
    },
    {
      area: "Hercules / Rodeo (newer developments)",
      county: "Contra Costa",
      typicalAnnualCharge: "$1,500-$3,500/year",
      notes:
        "Waterfront and hillside developments with infrastructure-related CFDs.",
    },
  ],
  buyerWarnings: [
    "ALWAYS ask about Mello-Roos before making an offer on newer construction (built after ~1985).",
    "Request the most recent property tax bill to see the actual CFD charges — they are listed " +
    "as separate line items.",
    "Calculate the total effective tax rate (Prop 13 base + voter-approved bonds + Mello-Roos) " +
    "to understand your true monthly cost.",
    "Mello-Roos charges can significantly impact your DTI ratio for mortgage qualification — " +
    "lenders include them in the PITI calculation.",
    "A $5,000/year Mello-Roos on top of regular taxes adds ~$417/month to your housing cost.",
  ],
  realtorObligations: [
    "Provide the Mello-Roos disclosure (Notice of Special Tax) per Government Code §53340.2.",
    "Disclose the existence of any CFDs to prospective buyers — this is a material fact.",
    "Help buyers obtain the most recent tax bill showing all line items.",
    "Advise buyers to factor Mello-Roos into their total monthly housing budget.",
    "For listings in CFD areas, consider including the annual Mello-Roos amount in marketing " +
    "materials for transparency.",
  ],
  source:
    "California Government Code §53311-53368.3; California Association of Realtors (C.A.R.) " +
    "Mello-Roos disclosure forms; individual county CFD records",
};

// -----------------------------------------------------------------------------
// 4. SUPPLEMENTAL TAX BILLS
// -----------------------------------------------------------------------------

export interface SupplementalTaxInfo {
  title: string;
  statute: string;
  summary: string;
  howItWorks: string[];
  calculationExample: {
    scenario: string;
    purchasePrice: number;
    previousAssessedValue: number;
    purchaseDate: string;
    monthsRemainingInFiscalYear: number;
    supplementalAssessment: number;
    proRatedTax: number;
    explanation: string;
  };
  keyFacts: string[];
  timeline: string[];
  realtorTips: string[];
  source: string;
}

export const supplementalTaxInfo: SupplementalTaxInfo = {
  title: "Supplemental Property Tax Bills",
  statute: "California Revenue & Taxation Code §75-75.72 (SB 813, 1983)",
  summary:
    "When a property changes ownership or new construction is completed, the county assessor " +
    "reassesses the property at current market value. The difference between the old assessed " +
    "value and the new assessed value creates a 'supplemental assessment.' The buyer owes " +
    "property tax on this difference, pro-rated from the date of the change through the end " +
    "of the current fiscal year (June 30). This results in one or two supplemental tax bills " +
    "that are separate from the regular annual property tax bill.",
  howItWorks: [
    "County assessor determines the new assessed value (usually the purchase price).",
    "The supplemental assessment equals the difference: new value minus old assessed value.",
    "Tax on the supplemental assessment is pro-rated from the date of change to the end " +
    "of the fiscal year (June 30).",
    "If the purchase occurs between January 1 and May 31, you may receive TWO supplemental " +
    "bills — one for the current fiscal year and one for the next.",
    "Supplemental bills are mailed separately from the regular annual bill and have their " +
    "own due dates.",
    "If the new value is LOWER than the old assessed value (rare in the Bay Area), you " +
    "receive a supplemental refund.",
  ],
  calculationExample: {
    scenario: "Buying a home in Oakland in October 2025",
    purchasePrice: 1_200_000,
    previousAssessedValue: 500_000,
    purchaseDate: "October 15, 2025",
    monthsRemainingInFiscalYear: 8.5, // mid-October to June 30
    supplementalAssessment: 700_000, // $1.2M - $500K
    proRatedTax: 5_992,
    explanation:
      "Supplemental assessment = $1,200,000 - $500,000 = $700,000. " +
      "Annual tax on $700,000 at ~1.2% effective rate = ~$8,400. " +
      "Pro-rated for 8.5 months remaining = $8,400 x (8.5/12) = ~$5,950. " +
      "This is a one-time bill in addition to your regular annual property tax. " +
      "The following fiscal year, your regular annual bill will be based on the " +
      "full $1,200,000 purchase price.",
  },
  keyFacts: [
    "Supplemental bills are NOT included in your mortgage impound/escrow account — you must " +
    "pay them directly.",
    "You will typically receive the supplemental bill 2-6 months after the purchase.",
    "The supplemental tax is based on the difference between old and new assessed values, " +
    "NOT the full purchase price.",
    "Homes that were recently sold (within the past few years) will have a smaller " +
    "supplemental assessment than homes owned for decades.",
    "Supplemental taxes are deductible as property taxes on federal returns (subject to " +
    "the $10,000 SALT cap).",
    "If the previous owner had a very low Prop 13 base (long-term ownership), the " +
    "supplemental bill can be very large — sometimes $10,000-$30,000+.",
  ],
  timeline: [
    "Purchase closes — escrow records the deed with the county.",
    "County assessor receives notice of ownership change (typically within 1-2 weeks).",
    "Assessor determines new assessed value and calculates supplemental assessment.",
    "Supplemental tax bill is mailed (typically 2-6 months after purchase).",
    "Bill is due within specific dates printed on the bill (not the standard Nov 1 / Feb 1 dates).",
    "Penalty applies if not paid by the delinquency date on the bill.",
  ],
  realtorTips: [
    "Always warn buyers about supplemental tax bills during the escrow process — many first-time " +
    "buyers are caught off guard by an unexpected bill of $5,000-$20,000+.",
    "Recommend buyers set aside 1-2% of the purchase price to cover potential supplemental taxes.",
    "Advise buyers to update their address with the county assessor immediately after purchase " +
    "so supplemental bills are not sent to the wrong address.",
    "Include a note about supplemental taxes in your buyer's closing checklist.",
    "For long-held properties (30+ years of Prop 13 protection), the supplemental bill will " +
    "be substantial — calculate an estimate for your buyer.",
  ],
  source:
    "California Revenue & Taxation Code §75-75.72; BOE Property Tax Rules; " +
    "County Assessor supplemental tax guides (Alameda, Santa Clara, SF)",
};

// -----------------------------------------------------------------------------
// 5. PROPOSITION 19 — PARENT-CHILD EXCLUSION & PORTABILITY
// -----------------------------------------------------------------------------

export interface Prop19Info {
  title: string;
  effectiveDate: string;
  ballotDate: string;
  summary: string;
  parentChildExclusion: {
    description: string;
    requirements: string[];
    exclusionAmount: number;
    exclusionAdjustmentDate: string;
    comparedToProp58: string[];
  };
  seniorPortability: {
    description: string;
    eligibility: string[];
    keyRules: string[];
    comparedToProp60_90: string[];
  };
  keyDates: {
    date: string;
    description: string;
  }[];
  realtorImplications: string[];
  source: string;
}

export const prop19Info: Prop19Info = {
  title: "Proposition 19 — The Home Protection for Seniors, Severely Disabled, " +
    "Families, and Victims of Wildfire or Natural Disaster Act",
  effectiveDate: "2021-02-16 (parent-child); 2021-04-01 (portability)",
  ballotDate: "2020-11-03",
  summary:
    "Proposition 19 made two major changes: (1) it severely limited the parent-child property " +
    "tax exclusion that previously existed under Props 58/193, and (2) it expanded portability " +
    "of Prop 13 base year values for seniors (55+), disabled persons, and disaster victims — " +
    "allowing them to transfer their low tax base anywhere in California up to 3 times.",
  parentChildExclusion: {
    description:
      "Under Props 58/193 (now repealed by Prop 19), parents could transfer their primary " +
      "residence and up to $1M in assessed value of other property to children without " +
      "reassessment. Prop 19 dramatically narrows this: now only the primary residence " +
      "qualifies, the child must use it as their primary residence, and there is an " +
      "exclusion cap.",
    requirements: [
      "Property must be the parent's primary residence (investment/rental property no longer qualifies).",
      "The child (or grandchild, if parents are deceased) must file for the homeowner's exemption " +
      "within 1 year of transfer, confirming it is their primary residence.",
      "The child must maintain the property as their primary residence — if they move out, it " +
      "is reassessed to market value.",
      "If the property's market value exceeds the parent's assessed value by more than the " +
      "exclusion amount ($1,044,586 as of Feb 2025), the excess is added to the transferred " +
      "assessed value.",
    ],
    exclusionAmount: 1_044_586,
    exclusionAdjustmentDate: "Adjusted annually per BOE — current amount effective Feb 16, 2025",
    comparedToProp58: [
      "Prop 58 (1986): Primary residence + $1M of other property (no primary residence " +
      "requirement for child). No reassessment at all for qualifying transfers.",
      "Prop 19 (2021): Primary residence ONLY. Child must live in it. Excess value above " +
      "exclusion amount IS reassessed. Investment/rental properties fully reassessed.",
      "Impact: Families who previously planned to pass down rental properties at low Prop 13 " +
      "bases can no longer do so. This significantly affects multi-generational Bay Area families " +
      "who own rental portfolios.",
    ],
  },
  seniorPortability: {
    description:
      "Prop 19 allows homeowners aged 55+, severely disabled persons, and victims of wildfire " +
      "or natural disaster to transfer their Prop 13 base year value to a replacement home " +
      "anywhere in California, regardless of the replacement home's market value, up to 3 times.",
    eligibility: [
      "Age 55 or older at time of sale, OR",
      "Severely disabled (as defined by Revenue & Taxation Code §69.6), OR",
      "Victim of wildfire or natural disaster (governor-declared)",
    ],
    keyRules: [
      "Can transfer to ANY county in California (previously limited to same county or " +
      "participating counties under Props 60/90).",
      "Up to 3 times in a lifetime (previously once under Props 60/90).",
      "If replacement home costs MORE than the original, the base year value is adjusted upward " +
      "by the difference. Example: Prop 13 base of $200K, sell for $800K, buy for $1.2M — " +
      "new base = $200K + ($1.2M - $800K) = $600K.",
      "If replacement home costs LESS or the same, the base year value transfers straight across.",
      "Replacement property must be purchased within 2 years of selling the original (before or after).",
      "Must file a claim with the county assessor of the replacement property.",
    ],
    comparedToProp60_90: [
      "Props 60/90: Same county (or participating county) only. Once in a lifetime. " +
      "Replacement had to be equal or lesser value.",
      "Prop 19: Any county in California. Up to 3 times. Can buy a more expensive home " +
      "(with adjusted base). Much more flexible.",
    ],
  },
  keyDates: [
    {
      date: "2020-11-03",
      description: "Proposition 19 passed by California voters (51.1% to 48.9%).",
    },
    {
      date: "2021-02-16",
      description:
        "Parent-child exclusion changes took effect. Transfers after this date are under Prop 19 rules.",
    },
    {
      date: "2021-04-01",
      description: "Senior/disabled/disaster portability provisions took effect.",
    },
    {
      date: "2025-02-16",
      description: "Exclusion amount adjusted to $1,044,586 (up from $1,022,600).",
    },
  ],
  realtorImplications: [
    "Seniors downsizing: Prop 19 portability is a powerful selling point. Seniors can sell " +
    "their large family home and keep their low property tax base at a smaller home anywhere " +
    "in California.",
    "Inherited property: Advise clients that inherited rental/investment properties WILL be " +
    "reassessed to market value. This may make some inherited properties financially unviable " +
    "to keep as rentals.",
    "Estate planning referrals: Recommend clients with significant real estate holdings consult " +
    "an estate planning attorney to understand Prop 19 impacts.",
    "Market impact: Prop 19 portability has slightly increased senior mobility, freeing up " +
    "some larger family homes for sale. This is a modest positive for inventory.",
    "The exclusion amount ($1,044,586) adjusts annually — always verify the current figure " +
    "with the BOE.",
  ],
  source:
    "California Board of Equalization — Prop 19 Implementation (boe.ca.gov/prop19); " +
    "Revenue & Taxation Code §63.2, §69.6; LAO Analysis of Proposition 19",
};

// -----------------------------------------------------------------------------
// 6. TAX SAVINGS PROGRAMS
// -----------------------------------------------------------------------------

export interface TaxSavingsProgram {
  programName: string;
  type: "exemption" | "exclusion" | "deferral" | "credit";
  description: string;
  eligibility: string[];
  benefit: string;
  howToApply: string;
  deadline: string;
  statute: string;
  source: string;
}

export const taxSavingsPrograms: TaxSavingsProgram[] = [
  {
    programName: "Homeowners' Exemption",
    type: "exemption",
    description:
      "Reduces the assessed value of your primary residence by $7,000, which lowers your " +
      "annual property tax by approximately $70 (1% of $7,000). Small but free — every " +
      "homeowner should file for this.",
    eligibility: [
      "Must be your primary residence as of January 1 of the tax year.",
      "Owner-occupied — not available for rental or investment properties.",
      "Only one homeowners' exemption per person statewide.",
    ],
    benefit:
      "$7,000 reduction in assessed value = approximately $70/year tax savings. " +
      "The exact savings depends on your local tax rate.",
    howToApply:
      "File a Homeowners' Exemption claim (BOE-266) with your county assessor. " +
      "Most counties allow online filing. You only need to file once — it stays in " +
      "effect until you sell or move out.",
    deadline:
      "Must be filed between January 1 and February 15 of the tax year for full " +
      "exemption. Claims filed between Feb 16 and Dec 31 receive 80% of the exemption " +
      "for that year. The exemption is retroactive if filed late, but only for the current year.",
    statute: "Revenue & Taxation Code §218",
    source: "California Board of Equalization; County Assessor offices",
  },
  {
    programName: "Disabled Veterans' Exemption",
    type: "exemption",
    description:
      "Provides a property tax exemption for veterans with a service-connected disability. " +
      "There are two levels: the Basic exemption ($161,083 in assessed value for 2025) and " +
      "the Low-Income exemption ($241,627 in assessed value for 2025) for qualifying veterans " +
      "below an income threshold.",
    eligibility: [
      "Must be a veteran with a service-connected disability rated at 100%, or compensated " +
      "at the 100% rate due to unemployability.",
      "Must be a California resident and the property must be the veteran's principal residence.",
      "Unmarried surviving spouses of qualifying veterans may also be eligible.",
      "Low-Income exemption: household income must not exceed $76,761 (2025, adjusted annually).",
    ],
    benefit:
      "Basic exemption: $161,083 of assessed value exempt from property tax (~$1,611/year savings). " +
      "Low-Income exemption: $241,627 of assessed value exempt (~$2,416/year savings). " +
      "Amounts adjust annually based on the California CPI.",
    howToApply:
      "File a Disabled Veterans' Exemption claim (BOE-261-G) with your county assessor. " +
      "Must include verification of disability from the VA or military.",
    deadline: "File between January 1 and February 15 for full exemption.",
    statute: "Revenue & Taxation Code §205.5",
    source: "California Board of Equalization — Disabled Veterans' Exemption guidelines",
  },
  {
    programName: "Property Tax Postponement (Senior Citizens & Disabled)",
    type: "deferral",
    description:
      "The State Controller's Office administers a program that allows qualifying seniors " +
      "(62+) and disabled persons to postpone (defer) payment of property taxes on their " +
      "primary residence. The deferred taxes become a lien on the property, repaid when the " +
      "property is sold or the owner passes away.",
    eligibility: [
      "Age 62 or older, OR blind, OR disabled.",
      "Must be your principal residence.",
      "Household income must not exceed $51,762 (2025, adjusted annually).",
      "Must have at least 40% equity in the property.",
      "Property taxes must be current (not delinquent) at time of application.",
    ],
    benefit:
      "100% of property taxes deferred. State pays the taxes on your behalf. " +
      "Accrues interest at 5% per year (set by statute). Repaid upon sale, transfer, " +
      "or death of the last eligible owner.",
    howToApply:
      "Apply through the California State Controller's Office (sco.ca.gov). " +
      "Application period opens annually — check the SCO website for current deadlines.",
    deadline: "Applications accepted annually, typically February 1 through the fiscal year.",
    statute: "Revenue & Taxation Code §20581-20615",
    source: "California State Controller's Office — Property Tax Postponement Program",
  },
  {
    programName: "Homestead Declaration",
    type: "exemption",
    description:
      "While not a property tax exemption, the California Homestead Declaration protects a " +
      "portion of your home's equity from forced sale by most judgment creditors. The automatic " +
      "homestead exemption is $300,000-$600,000 (based on county median home price), and " +
      "a declared homestead provides additional protections in bankruptcy.",
    eligibility: [
      "Must be your principal dwelling (owned or in a trust you control).",
      "Available to all California homeowners — no income or age requirement.",
      "One homestead per person.",
    ],
    benefit:
      "Protects $300,000-$600,000 of equity from judgment creditors (amount depends on " +
      "county median home prices — Bay Area counties are at $600,000). Updated by AB 1837 " +
      "(effective 2021). Does not protect against mortgage lenders, property tax liens, " +
      "mechanic's liens, or child/spousal support.",
    howToApply:
      "Record a Homestead Declaration with your county recorder's office. Forms available " +
      "from the county recorder or online legal form providers. Filing fee typically $15-$30.",
    deadline: "No deadline — can be filed at any time. Takes effect upon recording.",
    statute: "California Code of Civil Procedure §704.710-704.995",
    source: "California Courts Self-Help Guide; CCP §704.730",
  },
  {
    programName: "Solar Energy System New Construction Exclusion",
    type: "exclusion",
    description:
      "Active solar energy systems are excluded from property tax assessment when installed " +
      "on existing or new properties. This means adding solar panels does not increase your " +
      "assessed value.",
    eligibility: [
      "Active solar energy system (photovoltaic panels, solar thermal systems).",
      "Installed on any property type — residential, commercial, agricultural.",
      "System must be new construction or an addition to the property.",
    ],
    benefit:
      "The value of the solar energy system is excluded from your property's assessed value. " +
      "For a typical residential solar installation ($20,000-$40,000), this saves approximately " +
      "$200-$400/year in property taxes.",
    howToApply:
      "File an Active Solar Energy System Exclusion claim with your county assessor. " +
      "Some counties process this automatically when they receive the building permit records.",
    deadline: "File within the assessment year the system is installed.",
    statute: "Revenue & Taxation Code §73 (extended through 2025 by SB 364; check for further extensions)",
    source: "California Board of Equalization — Solar Energy System Exclusion",
  },
];

// -----------------------------------------------------------------------------
// 7. TYPICAL ANNUAL TAX EXAMPLES
// -----------------------------------------------------------------------------

export interface TaxExample {
  homeValue: number;
  location: string;
  county: string;
  assumedEffectiveRate: number;
  baseTax: number;
  estimatedBondsAssessments: number;
  estimatedMelloRoos: number;
  estimatedTotalAnnual: number;
  estimatedMonthly: number;
  homeownersExemptionSavings: number;
  notes: string;
}

export const taxExamples: TaxExample[] = [
  {
    homeValue: 800_000,
    location: "Oakland (Fruitvale / San Antonio area)",
    county: "Alameda",
    assumedEffectiveRate: 1.40,
    baseTax: 8_000,
    estimatedBondsAssessments: 3_200,
    estimatedMelloRoos: 0,
    estimatedTotalAnnual: 11_200,
    estimatedMonthly: 933,
    homeownersExemptionSavings: 70,
    notes:
      "Older Oakland neighborhoods typically have no Mello-Roos. The effective rate of ~1.4% " +
      "includes OUSD school bonds, BART bonds, and various county/city assessments. " +
      "Base Prop 13 tax = $8,000 ($800K x 1%). Additional voter-approved levies add ~$3,200. " +
      "After homeowners' exemption: ~$11,130/year or ~$928/month. This is a recently purchased " +
      "home — long-term owners of comparable homes may pay only $3,000-$5,000/year due to " +
      "Prop 13 protection.",
  },
  {
    homeValue: 1_200_000,
    location: "Berkeley (South Berkeley / Elmwood)",
    county: "Alameda",
    assumedEffectiveRate: 1.45,
    baseTax: 12_000,
    estimatedBondsAssessments: 5_400,
    estimatedMelloRoos: 0,
    estimatedTotalAnnual: 17_400,
    estimatedMonthly: 1_450,
    homeownersExemptionSavings: 70,
    notes:
      "Berkeley has among the highest effective tax rates in the Bay Area due to multiple " +
      "BUSD school bonds and city parcel taxes. Base tax = $12,000. Voter-approved bonds and " +
      "special taxes add ~$5,400. No Mello-Roos in established Berkeley neighborhoods. " +
      "After homeowners' exemption: ~$17,330/year or ~$1,444/month. Additionally, Berkeley " +
      "charges a high real property transfer tax (up to $25 per $1,000) — a one-time cost " +
      "of up to $30,000 on a $1.2M purchase.",
  },
  {
    homeValue: 1_200_000,
    location: "San Francisco (Sunset District)",
    county: "San Francisco",
    assumedEffectiveRate: 1.18,
    baseTax: 12_000,
    estimatedBondsAssessments: 2_160,
    estimatedMelloRoos: 0,
    estimatedTotalAnnual: 14_160,
    estimatedMonthly: 1_180,
    homeownersExemptionSavings: 70,
    notes:
      "San Francisco has a lower effective property tax rate than many East Bay cities. " +
      "Base tax = $12,000. Bonds and assessments add ~$2,160. No Mello-Roos in established " +
      "SF neighborhoods. However, SF's transfer tax is significant: at $1.2M, the transfer " +
      "tax is 0.68% = ~$8,160 (one-time). After homeowners' exemption: ~$14,090/year or " +
      "~$1,174/month.",
  },
  {
    homeValue: 1_800_000,
    location: "Rockridge / Montclair, Oakland",
    county: "Alameda",
    assumedEffectiveRate: 1.38,
    baseTax: 18_000,
    estimatedBondsAssessments: 6_840,
    estimatedMelloRoos: 0,
    estimatedTotalAnnual: 24_840,
    estimatedMonthly: 2_070,
    homeownersExemptionSavings: 70,
    notes:
      "Premium Oakland neighborhoods. Base tax = $18,000. Voter-approved bonds add ~$6,840. " +
      "No Mello-Roos in these established areas. After homeowners' exemption: ~$24,770/year " +
      "or ~$2,064/month. Supplemental tax bill for a newly purchased home at this price where " +
      "the previous owner had a Prop 13 base of $300K could be $10,000-$15,000 (one-time).",
  },
  {
    homeValue: 1_800_000,
    location: "Dublin Ranch (newer development)",
    county: "Alameda",
    assumedEffectiveRate: 1.35,
    baseTax: 18_000,
    estimatedBondsAssessments: 6_300,
    estimatedMelloRoos: 5_500,
    estimatedTotalAnnual: 29_800,
    estimatedMonthly: 2_483,
    homeownersExemptionSavings: 70,
    notes:
      "Dublin Ranch illustrates the Mello-Roos impact. Base tax = $18,000. Bonds = ~$6,300. " +
      "Mello-Roos CFD charges = ~$5,500/year. Total: ~$29,800/year or ~$2,483/month. " +
      "Compare this to the Rockridge example at the same price — the Dublin Ranch home costs " +
      "~$5,000 more per year in taxes due to Mello-Roos, even though the base rate is slightly " +
      "lower. This is equivalent to about $415/month extra, which affects mortgage qualification.",
  },
  {
    homeValue: 800_000,
    location: "Vallejo",
    county: "Solano",
    assumedEffectiveRate: 1.18,
    baseTax: 8_000,
    estimatedBondsAssessments: 1_440,
    estimatedMelloRoos: 0,
    estimatedTotalAnnual: 9_440,
    estimatedMonthly: 787,
    homeownersExemptionSavings: 70,
    notes:
      "Solano County is the most affordable Bay Area option for property taxes. " +
      "Base tax = $8,000. Lower bonds/assessments add ~$1,440. No Mello-Roos in older " +
      "Vallejo neighborhoods. After homeowners' exemption: ~$9,370/year or ~$781/month. " +
      "Compare to Oakland at the same price: ~$1,760 less per year in property taxes.",
  },
];

// -----------------------------------------------------------------------------
// HELPER CONSTANTS & UTILITY
// -----------------------------------------------------------------------------

export const propertyTaxCalendarDates = [
  { date: "January 1", description: "Lien date — property is assessed as of this date for the upcoming fiscal year." },
  { date: "February 15", description: "Deadline to file Homeowners' Exemption for full exemption." },
  { date: "April 1", description: "Deadline to file assessment appeal (informal review) for the current year." },
  { date: "July 1", description: "Start of new fiscal year. New assessed values take effect." },
  { date: "September 15", description: "Deadline to file formal assessment appeal (Assessment Appeals Board) for the current roll year." },
  { date: "November 1", description: "First installment of property taxes due." },
  { date: "December 10", description: "First installment delinquent if not paid (10% penalty applied)." },
  { date: "February 1", description: "Second installment of property taxes due." },
  { date: "April 10", description: "Second installment delinquent if not paid (10% penalty + $10 cost applied)." },
];

export const saltCapInfo = {
  description:
    "The federal Tax Cuts and Jobs Act (TCJA) of 2017 caps the deduction for State and " +
    "Local Taxes (SALT) — including property taxes and state income taxes combined — at " +
    "$10,000 per year ($5,000 for married filing separately).",
  currentCap: 10_000,
  effectiveYears: "2018-2025 (original); Extended through 2028 under the One, Big, Beautiful Bill Act of 2025",
  impact:
    "Bay Area homeowners with high property taxes and high state income taxes routinely " +
    "exceed the $10,000 cap. For example, a homeowner paying $20,000 in property taxes and " +
    "$30,000 in CA income taxes can only deduct $10,000 total — the remaining $40,000 " +
    "provides no federal tax benefit. This effectively increases the cost of homeownership " +
    "in high-tax states like California.",
  source: "IRS Publication 5307; TCJA §11042; One, Big, Beautiful Bill Act of 2025 (H.R. 1)",
};

export const transferTaxRates: {
  jurisdiction: string;
  rate: string;
  details: string;
  source: string;
}[] = [
  {
    jurisdiction: "Alameda County (unincorporated + most cities)",
    rate: "$1.10 per $1,000 of value (county) + $0.55 per $1,000 (city)",
    details:
      "Standard county transfer tax is $1.10/$1,000. Most cities add $0.55/$1,000. " +
      "Total: ~$1.65 per $1,000 = 0.165%. Split between buyer and seller by negotiation " +
      "(traditionally seller pays in the Bay Area).",
    source: "Alameda County Recorder's Office",
  },
  {
    jurisdiction: "Oakland",
    rate: "$10.00 - $25.00 per $1,000 of value (tiered based on sale price)",
    details:
      "Oakland Measure U (effective 2025): $10 per $1,000 for properties $300K-$2M; " +
      "$15 per $1,000 for $2M-$5M; $17.50 per $1,000 for $5M-$7M; " +
      "$25 per $1,000 for $7M+. Plus county tax. One of the highest in the Bay Area.",
    source: "City of Oakland — Real Property Transfer Tax (Measure U)",
  },
  {
    jurisdiction: "Berkeley",
    rate: "$15.00 - $25.00 per $1,000 of value (tiered)",
    details:
      "Berkeley Measure P: $15 per $1,000 for properties up to $1.8M; " +
      "$25 per $1,000 for properties over $1.8M. Plus county tax. " +
      "A $1.5M home pays ~$22,500 in city transfer tax alone.",
    source: "City of Berkeley — Transfer Tax Rate Schedule",
  },
  {
    jurisdiction: "San Francisco",
    rate: "$2.50 - $30.00 per $500 of value (tiered based on sale price)",
    details:
      "Complex tiered system. Most residential sales ($1M-$10M) pay $3.75 per $500 = 0.75%. " +
      "Under $250K: 0.5%. $250K-$1M: 0.68%. $1M-$5M: 0.75%. $5M-$10M: 0.75%. " +
      "$10M-$25M: 2.75%. Over $25M: 3.0%.",
    source: "SF Assessor-Recorder — Real Property Transfer Tax",
  },
  {
    jurisdiction: "San Mateo County (standard)",
    rate: "$1.10 per $1,000 of value",
    details:
      "Standard county rate. Most cities in San Mateo County do not impose an additional " +
      "city transfer tax. Total: 0.11%.",
    source: "San Mateo County Assessor-County Clerk-Recorder",
  },
  {
    jurisdiction: "Santa Clara County (standard)",
    rate: "$1.10 per $1,000 of value",
    details:
      "Standard county rate. San Jose adds $3.30 per $1,000 for properties over $2M " +
      "(Measure E, effective 2020). Mountain View has Measure P adding $1.50-$3.30 per " +
      "$1,000 for properties over $2M.",
    source: "Santa Clara County Recorder's Office; City of San Jose",
  },
];
