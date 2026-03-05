// =============================================================================
// Bay Area Rent Control & Tenant Protection Guide — Comprehensive Reference
// Sources: CA Civil Code, CA Government Code, city ordinances, tenant protection
//          agencies, California Apartment Association (CAA), C.A.R.
// Last updated: March 4, 2026
// =============================================================================

// -----------------------------------------------------------------------------
// 1. AB 1482 — CALIFORNIA TENANT PROTECTION ACT (STATEWIDE)
// -----------------------------------------------------------------------------

export interface AB1482Info {
  title: string;
  statute: string;
  effectiveDate: string;
  sunsetDate: string;
  summary: string;
  rentCapRules: {
    formula: string;
    maxCap: number; // percentage
    currentCPI: number;
    currentAllowableIncrease: number;
    cpiSource: string;
    cpiEffectivePeriod: string;
    howItWorks: string[];
  };
  justCauseEviction: {
    description: string;
    atFaultCauses: string[];
    noFaultCauses: string[];
    relocationAssistance: string;
  };
  exemptions: {
    exemption: string;
    details: string;
    noticeRequired?: string;
  }[];
  keyFacts: string[];
  realtorImplications: string[];
  source: string;
}

export const ab1482Info: AB1482Info = {
  title: "AB 1482 — Tenant Protection Act of 2019",
  statute: "California Civil Code §1946.2 (just cause), §1947.12 (rent cap)",
  effectiveDate: "2020-01-01",
  sunsetDate: "2030-01-01",
  summary:
    "AB 1482 is California's statewide rent cap and just cause eviction law. It limits annual " +
    "rent increases to 5% plus the local CPI (or 10%, whichever is lower) and requires " +
    "landlords to have 'just cause' to evict tenants who have lived in a unit for 12+ months. " +
    "It applies to most rental housing in California with specific exemptions for newer buildings, " +
    "single-family homes (with notice), and owner-occupied duplexes.",
  rentCapRules: {
    formula: "5% + local CPI change, or 10% — whichever is LOWER",
    maxCap: 10,
    currentCPI: 3.2,
    currentAllowableIncrease: 8.2,
    cpiSource: "Bureau of Labor Statistics — CPI for All Urban Consumers (San Francisco-Oakland-Hayward MSA)",
    cpiEffectivePeriod: "August 2025 to July 2026",
    howItWorks: [
      "The rent cap is calculated as 5% + the percentage change in CPI for the region " +
      "where the property is located, published each September by the BLS.",
      "The total increase cannot exceed 10% regardless of CPI.",
      "CPI regions vary — the SF-Oakland-Hayward MSA covers most of the Bay Area. " +
      "San Jose-Sunnyvale-Santa Clara is a separate MSA.",
      "Only ONE rent increase is allowed per 12-month period.",
      "The cap applies to the total increase — landlords cannot split a large increase " +
      "into multiple smaller ones within 12 months.",
      "Landlords must provide 30 days' written notice for increases of 10% or less, " +
      "and 90 days' notice for increases over 10% (Civil Code §827).",
      "AB 1482 does NOT cap the initial rent charged to a new tenant (vacancy decontrol " +
      "applies under Costa-Hawkins — see below).",
    ],
  },
  justCauseEviction: {
    description:
      "After a tenant has been in continuous occupancy for 12 months (or all occupants have " +
      "been there 12+ months), the landlord must have 'just cause' to terminate the tenancy. " +
      "Just cause falls into two categories: at-fault (tenant's behavior) and no-fault " +
      "(landlord's needs).",
    atFaultCauses: [
      "Failure to pay rent within the time allowed by the written notice",
      "Material breach of the lease after written notice and opportunity to cure",
      "Nuisance or waste (substantial interference with other tenants' quiet enjoyment)",
      "Criminal activity on the property",
      "Failure to sign a lease renewal on substantially similar terms",
      "Subletting in violation of the lease",
      "Refusing to allow lawful access to the landlord",
      "Using the property for an unlawful purpose",
      "Failure to vacate after the lease expires (if tenant was properly notified before expiration)",
    ],
    noFaultCauses: [
      "Owner or qualifying family member move-in (owner, spouse, domestic partner, children, " +
      "grandchildren, parents, grandparents)",
      "Withdrawal of the unit from the rental market (Ellis Act)",
      "Compliance with government order or local law that requires the tenant to vacate",
      "Intent to substantially remodel the unit (requires relocation assistance)",
    ],
    relocationAssistance:
      "For no-fault evictions, the landlord must provide relocation assistance equal to " +
      "one month's rent to the tenant, either as a direct payment or as a rent waiver for " +
      "the final month of tenancy. The tenant chooses which form of assistance.",
  },
  exemptions: [
    {
      exemption: "Single-Family Homes and Condos",
      details:
        "Single-family homes and condominiums are EXEMPT from the rent cap (but NOT from " +
        "just cause eviction after 12 months) IF: the property is not owned by a corporation, " +
        "REIT, or LLC with a corporate member, AND the owner provides written notice to the " +
        "tenant that the property is exempt per Civil Code §1947.12(d)(5).",
      noticeRequired:
        "Must include the following language (or substantially similar) in the lease: " +
        "'This property is not subject to the rent limits imposed by Section 1947.12 of the " +
        "California Civil Code and is not subject to the just cause requirements of Section " +
        "1946.2 of the California Civil Code. This property meets the requirements of Sections " +
        "1947.12(d)(5) and 1946.2(e)(8) of the California Civil Code.'",
    },
    {
      exemption: "Buildings Less Than 15 Years Old",
      details:
        "Buildings that received their certificate of occupancy within the past 15 years are " +
        "exempt from BOTH the rent cap and just cause provisions. This is a rolling exemption — " +
        "a building that received its CO in 2012 would have been exempt until 2027. A building " +
        "with a CO from 2015 is exempt until 2030.",
    },
    {
      exemption: "Owner-Occupied Duplexes",
      details:
        "A duplex where the owner occupies one of the units is exempt from both the rent cap " +
        "and just cause provisions, provided the owner has lived there for the entire time " +
        "the tenant has resided in the other unit.",
    },
    {
      exemption: "Properties Subject to Local Rent Control",
      details:
        "Properties already covered by a local rent control ordinance (e.g., Oakland RAP, " +
        "SF Rent Board, Berkeley Rent Stabilization) are exempt from the AB 1482 rent cap " +
        "if the local ordinance is MORE restrictive. However, AB 1482's just cause provisions " +
        "still apply as a floor — local ordinances can be more protective but not less.",
    },
    {
      exemption: "Certain Specific Housing Types",
      details:
        "Exempt: housing operated by nonprofits, dormitories, shared housing where the owner " +
        "shares a bathroom/kitchen with the tenant, transient/tourist hotels, properties " +
        "restricted by deed to affordable housing.",
    },
  ],
  keyFacts: [
    "AB 1482 sunsets on January 1, 2030 — unless extended or replaced by new legislation. " +
    "The 'Affordable Rent Act' would make it permanent (see Pending Legislation below).",
    "The law applies retroactively to March 15, 2019 — rent increases between 3/15/2019 and " +
    "1/1/2020 that exceeded the cap may be subject to refund claims.",
    "Banked rent increases are NOT addressed by AB 1482 — if a landlord did not raise rent " +
    "for several years, they cannot exceed the annual cap to catch up (unless local law allows).",
    "AB 1482 does NOT limit the initial rent on a vacant unit — landlords can set any price " +
    "for new tenants (vacancy decontrol per Costa-Hawkins).",
    "Violations can result in civil penalties. Tenants can sue for rent overcharges.",
  ],
  realtorImplications: [
    "When listing rental properties, verify whether the property is exempt from AB 1482 and " +
    "ensure proper notice language is in the lease.",
    "Advise investor clients: the 15-year rolling exemption means newer buildings lose their " +
    "exemption over time. Factor this into investment return projections.",
    "Single-family home investors MUST include the statutory notice in leases to preserve " +
    "the rent cap exemption.",
    "The 2030 sunset creates uncertainty — pending legislation may extend or expand AB 1482.",
  ],
  source:
    "California Civil Code §1946.2, §1947.12; AB 1482 (Chiu, 2019); " +
    "California Apartment Association — AB 1482 Compliance Guide; " +
    "California Department of Consumer Affairs",
};

// -----------------------------------------------------------------------------
// 2. LOCAL RENT CONTROL ORDINANCES
// -----------------------------------------------------------------------------

export interface LocalRentControl {
  city: string;
  county: string;
  programName: string;
  adminAgency: string;
  agencyWebsite: string;
  ordinanceNumber: string;
  annualAllowableIncrease: string;
  currentRate: number | null; // percentage, null if variable
  currentRateEffectivePeriod: string;
  coverage: {
    description: string;
    coveredUnits: string;
    exemptUnits: string[];
  };
  justCauseRequired: boolean;
  justCauseDetails: string;
  vacancyDecontrol: boolean;
  vacancyDecontrolDetails: string;
  keyExemptions: string[];
  registrationRequired: boolean;
  registrationFee: string;
  relocationAssistance: string;
  bankingAllowed: boolean;
  bankingDetails: string;
  keyProvisions: string[];
  recentChanges: string[];
  realtorNotes: string;
  source: string;
}

export const localRentControlOrdinances: LocalRentControl[] = [
  {
    city: "Oakland",
    county: "Alameda",
    programName: "Residential Rent Adjustment Program (RAP)",
    adminAgency: "Oakland Rent Adjustment Program",
    agencyWebsite: "https://www.oaklandca.gov/topics/rent-adjustment-program",
    ordinanceNumber: "Oakland Municipal Code Chapter 8.22",
    annualAllowableIncrease: "CPI-based (SF-Oakland-Hayward MSA), with a floor and cap",
    currentRate: 2.3,
    currentRateEffectivePeriod: "July 1, 2025 - June 30, 2026",
    coverage: {
      description:
        "Covers most residential rental units built before and including January 1, 1983.",
      coveredUnits:
        "Multi-family units (2+) with certificates of occupancy on or before 1/1/1983. " +
        "Estimated 60,000+ covered units in Oakland.",
      exemptUnits: [
        "Units built after January 1, 1983 (Costa-Hawkins exemption)",
        "Single-family homes and condos (Costa-Hawkins exemption)",
        "Government-subsidized housing",
        "Owner-occupied units in buildings with 3 or fewer units",
        "Units in hotels, motels, and boarding houses",
        "Newly constructed ADUs (for 15 years from CO date per state law)",
      ],
    },
    justCauseRequired: true,
    justCauseDetails:
      "Oakland's Just Cause for Eviction Ordinance (OMC 8.22.300 et seq.) applies to ALL " +
      "rental units, not just rent-controlled ones. Landlords must have one of the specified " +
      "just cause reasons to evict any tenant. Oakland's just cause protections are broader " +
      "than AB 1482 and apply from day one (no 12-month waiting period).",
    vacancyDecontrol: true,
    vacancyDecontrolDetails:
      "When a unit is voluntarily vacated, the landlord can set the rent to market rate for " +
      "the new tenant (per Costa-Hawkins). Once the new tenant moves in, the annual CPI-based " +
      "cap applies again.",
    keyExemptions: [
      "Post-1983 construction",
      "Single-family homes and condominiums",
      "Government-subsidized units",
      "Owner-occupied triplexes (or smaller)",
    ],
    registrationRequired: true,
    registrationFee:
      "Annual RAP fee: approximately $68-$101 per unit (varies by year). Paid by the " +
      "landlord — cannot be passed through to tenants.",
    relocationAssistance:
      "Required for no-fault evictions: $6,994 for studios/1BR, $8,370 for 2BR, $10,162 " +
      "for 3+BR (2025 amounts, adjusted annually). Additional payments for elderly (60+), " +
      "disabled, minor children, and long-term tenants (10+ years). Total can exceed $15,000-$20,000+.",
    bankingAllowed: true,
    bankingDetails:
      "Landlords can 'bank' unused annual increases and apply them in future years. " +
      "IMPORTANT 2026 CHANGE: Banking limited to 5 years (previously 10). " +
      "Banked increases NO LONGER transfer to new property owners. " +
      "Must include Business Tax Certificate with rent increase notices.",
    keyProvisions: [
      "Rent increases require 30-day written notice (60 days if >10%)",
      "Tenants can petition the Rent Adjustment Program to contest increases",
      "Capital improvement pass-throughs allowed with RAP approval (up to 10% of rent, " +
      "amortized over useful life of improvement)",
      "Owner move-in evictions: owner must actually live in the unit for 36 months; " +
      "penalties for bad faith evictions include treble damages",
      "Tenant buyout agreements: tenant has 30 days to rescind a buyout agreement",
      "Condo conversion restrictions: very difficult to convert rent-controlled units to condos",
    ],
    recentChanges: [
      "2026: Banking limit reduced from 10 years to 5 years",
      "2026: Banked increases no longer transfer to new owners",
      "2026: Business Tax Certificate required with rent increase notices",
      "2025: RAP fee increase to fund enhanced enforcement",
      "2024: Strengthened anti-harassment provisions",
    ],
    realtorNotes:
      "Oakland's rent control is among the strongest in California. When listing investment " +
      "properties, the loss of banked rent transfer (2026) significantly reduces the appeal " +
      "of buying buildings with below-market rents. Agents must advise investor buyers that " +
      "they can only raise rents by the annual CPI amount — catching up to market rate is " +
      "now much harder.",
    source:
      "Oakland Municipal Code Chapter 8.22; Oakland RAP website; " +
      "Edrington & Associates — Oakland Rent Law Changes 2026",
  },
  {
    city: "Berkeley",
    county: "Alameda",
    programName: "Rent Stabilization and Eviction for Good Cause Ordinance",
    adminAgency: "Berkeley Rent Stabilization Board",
    agencyWebsite: "https://www.rentboard.berkeleyca.gov",
    ordinanceNumber: "Berkeley Municipal Code Chapter 13.76",
    annualAllowableIncrease: "Board-set annual General Adjustment, typically tied to 65% of CPI",
    currentRate: null,
    currentRateEffectivePeriod: "Varies — Board sets rate annually, typically effective July 1",
    coverage: {
      description:
        "Covers most residential rental units built before June 1980 (pre-Costa-Hawkins " +
        "construction cutoff applied as pre-1980 per local ordinance).",
      coveredUnits:
        "Approximately 19,000 rental units in Berkeley. Most apartments built before June 1980.",
      exemptUnits: [
        "Units built after June 1980",
        "Single-family homes and condos (Costa-Hawkins)",
        "Owner-occupied duplexes and triplexes",
        "Government-owned or subsidized housing",
        "Units in nonprofit affordable housing",
      ],
    },
    justCauseRequired: true,
    justCauseDetails:
      "Berkeley has a comprehensive just cause eviction ordinance that applies to all covered " +
      "units. Twelve enumerated 'good causes' for eviction. Owner move-in evictions are " +
      "heavily regulated with mandatory relocation payments.",
    vacancyDecontrol: true,
    vacancyDecontrolDetails:
      "After Costa-Hawkins (1995), landlords can set any rent upon vacancy. However, " +
      "Berkeley requires the landlord to register the new rent with the Rent Board, and the " +
      "annual adjustment cap applies immediately to the new tenant.",
    keyExemptions: [
      "Post-1980 construction (per local ordinance date)",
      "Single-family homes and condominiums",
      "Owner-occupied duplexes/triplexes",
      "Government and nonprofit housing",
    ],
    registrationRequired: true,
    registrationFee:
      "Annual Rent Stabilization Board fee: approximately $234-$275 per unit (2025). " +
      "This is one of the highest rent board fees in California. 50% may be passed through " +
      "to the tenant as a separate line item.",
    relocationAssistance:
      "Required for no-fault evictions. Amount varies by unit size and tenant circumstances. " +
      "Base amount: approximately $15,000-$22,000+ (among the highest in the Bay Area). " +
      "Additional payments for elderly, disabled, families with minor children, and " +
      "long-term tenants.",
    bankingAllowed: false,
    bankingDetails:
      "Berkeley does NOT allow banking of unused annual increases. If the landlord does not " +
      "raise rent in a given year, that increase is lost. Additionally, no rent increases " +
      "are allowed during the first two years of a new tenancy.",
    keyProvisions: [
      "No rent increases during the first 2 years of tenancy",
      "Capital improvement increases require Rent Board petition and approval",
      "Condo conversion is extremely restricted — essentially prohibited for occupied buildings",
      "Tenant petitions can challenge rent increases — hearings held by the Rent Board",
      "Landlords must maintain habitable conditions; rent reductions ordered for code violations",
      "Short-term rental restrictions (Airbnb limited to owner-occupied units)",
      "Transfer tax: up to $25 per $1,000 of value — one of the highest in California",
    ],
    recentChanges: [
      "2025: Increased enforcement of habitability standards",
      "2024: Strengthened protections against tenant harassment",
      "2024: Updated relocation assistance amounts for inflation",
    ],
    realtorNotes:
      "Berkeley has the strongest rent control in the Bay Area. No banking, no increases " +
      "for the first 2 years, and extremely high relocation costs make investment properties " +
      "here uniquely challenging. The high transfer tax (up to 2.5%) is an additional cost " +
      "that surprises many buyers. Agents should clearly explain these constraints to any " +
      "investor considering Berkeley rental properties.",
    source:
      "Berkeley Municipal Code Chapter 13.76; Berkeley Rent Stabilization Board; " +
      "Nolo — California Rent Control Law",
  },
  {
    city: "San Francisco",
    county: "San Francisco",
    programName: "Residential Rent Stabilization and Arbitration Ordinance",
    adminAgency: "San Francisco Rent Board",
    agencyWebsite: "https://sfrb.org",
    ordinanceNumber: "SF Administrative Code Chapter 37",
    annualAllowableIncrease: "60% of CPI increase (SF-Oakland-Hayward MSA), rounded to nearest 0.1%",
    currentRate: 1.7,
    currentRateEffectivePeriod: "March 1, 2025 - February 28, 2026",
    coverage: {
      description:
        "Covers most residential rental units in buildings with 2+ units built before June 13, 1979.",
      coveredUnits:
        "Approximately 172,000 rental units in San Francisco — roughly 2/3 of all rental " +
        "housing in the city. SF has the most rent-controlled units of any Bay Area city.",
      exemptUnits: [
        "Units built after June 13, 1979 (per local ordinance date)",
        "Single-family homes (Costa-Hawkins)",
        "Condominiums (Costa-Hawkins)",
        "Units in buildings with an owner who has occupied a unit since before 11/1/1979",
        "Government-subsidized housing (Section 8 units ARE covered, but rent is set by HUD)",
        "SRO hotels (covered by separate hotel conversion ordinance)",
      ],
    },
    justCauseRequired: true,
    justCauseDetails:
      "SF has 16 enumerated just cause reasons for eviction under Admin Code §37.9. " +
      "Includes at-fault causes (non-payment, breach, nuisance) and no-fault causes " +
      "(owner move-in, Ellis Act withdrawal, demolition, capital improvement, substantial " +
      "rehabilitation, lead remediation, development agreement). All evictions require " +
      "filing with the Rent Board.",
    vacancyDecontrol: true,
    vacancyDecontrolDetails:
      "After Costa-Hawkins (1999 implementation in SF), landlords can set market rent upon " +
      "vacancy. The annual increase cap then applies to the new rent. Before Costa-Hawkins, " +
      "SF had vacancy control (rent could not be increased upon vacancy).",
    keyExemptions: [
      "Post-June 1979 construction",
      "Single-family homes and condos",
      "Owner-occupied buildings (owner in residence since before 11/1979)",
      "Certain commercial/mixed-use buildings",
    ],
    registrationRequired: true,
    registrationFee:
      "Annual Rent Board fee: approximately $47-$52 per unit (2025). Lower than Berkeley " +
      "but covers the largest number of units. Split 50/50 between landlord and tenant.",
    relocationAssistance:
      "Required for no-fault evictions. Amount varies: approximately $7,176-$21,528 per " +
      "tenant depending on age, disability, and tenancy length (2025 amounts, adjusted " +
      "annually by CPI). Elderly (60+), disabled, and households with minor children " +
      "receive additional amounts. Total per unit can exceed $30,000+ for qualifying tenants.",
    bankingAllowed: false,
    bankingDetails:
      "San Francisco does NOT allow banking of unused annual increases. If you skip a year's " +
      "increase, that increase is permanently lost.",
    keyProvisions: [
      "Annual allowable increase posted each March 1 by the Rent Board",
      "Capital improvement pass-throughs: landlord can petition to pass through costs of " +
      "qualifying improvements (amortized over useful life, capped at 10% of rent/month)",
      "Operating & maintenance cost pass-throughs available via petition",
      "Buyout agreements: tenant has 45 days to rescind; must be filed with the Rent Board",
      "Owner move-in eviction: owner must live in the unit for 36 continuous months; " +
      "fines up to $50,000+ for bad faith OMI evictions",
      "Ellis Act: entire building must be withdrawn from rental market; all tenants get " +
      "relocation payments; 10-year restriction on re-renting",
      "Condo conversion: extremely restricted per SF Subdivision Code §1359",
    ],
    recentChanges: [
      "2025: Annual allowable increase set at 1.7% (March 2025 - Feb 2026)",
      "2025: Updated relocation assistance amounts for inflation",
      "2024: Strengthened penalties for wrongful eviction",
      "2024: Expanded tenant right to legal counsel in eviction proceedings",
    ],
    realtorNotes:
      "San Francisco's rent control affects ~172,000 units — the vast majority of apartment " +
      "inventory. When working with investors, focus on properties exempt from rent control " +
      "(post-1979, condos) or factor the low annual increase (1.7%) into pro formas. " +
      "The combination of rent control + high transfer tax + high relocation costs makes " +
      "SF rental property math very different from typical investment models.",
    source:
      "SF Administrative Code Chapter 37; San Francisco Rent Board (sfrb.org); " +
      "SF Apartment Association — Rent Ordinance Summary",
  },
  {
    city: "Richmond",
    county: "Contra Costa",
    programName: "Richmond Fair Rent, Just Cause for Eviction, and Homeowner Protection Ordinance",
    adminAgency: "Richmond Rent Program",
    agencyWebsite: "https://www.ci.richmond.ca.us/3364/Richmond-Rent-Program",
    ordinanceNumber: "Richmond Municipal Code Chapter 11.100 (Measure L, 2016)",
    annualAllowableIncrease: "100% of CPI (SF-Oakland-Hayward MSA), capped at various limits by Rent Board",
    currentRate: 3.0,
    currentRateEffectivePeriod: "2025-2026 (approximate — Rent Board sets annually)",
    coverage: {
      description:
        "Covers most residential rental units, including single-family homes and condos " +
        "(Richmond's ordinance predates and is broader than many other local laws).",
      coveredUnits:
        "Most rental units in Richmond. Notably, Richmond covers single-family homes and " +
        "condos under local rent control — one of the few Bay Area cities to do so (though " +
        "Costa-Hawkins may limit enforcement on SFH/condos).",
      exemptUnits: [
        "Units built after February 1, 1995 (per Costa-Hawkins)",
        "Government-subsidized housing",
        "Units in owner-occupied buildings with 2 or fewer units",
        "Hotels and motels",
      ],
    },
    justCauseRequired: true,
    justCauseDetails:
      "Just cause required for all evictions of covered tenants. Includes standard " +
      "at-fault and no-fault causes. Relocation assistance required for no-fault evictions.",
    vacancyDecontrol: true,
    vacancyDecontrolDetails:
      "Per Costa-Hawkins, landlords can set market rent upon vacancy. Annual cap applies " +
      "to new tenants. Richmond Rent Board has pushed for vacancy control but is preempted " +
      "by Costa-Hawkins at the state level.",
    keyExemptions: [
      "Post-1995 construction (Costa-Hawkins)",
      "Government-subsidized housing",
      "Owner-occupied duplexes",
    ],
    registrationRequired: true,
    registrationFee:
      "Annual Rent Program fee: approximately $195-$250 per unit (2025). Can be split " +
      "50/50 with tenant.",
    relocationAssistance:
      "Required for no-fault evictions. Amounts set by the Rent Board — approximately " +
      "$8,000-$15,000 depending on unit size and tenant circumstances.",
    bankingAllowed: true,
    bankingDetails:
      "Banking is allowed under the Richmond ordinance, subject to Rent Board rules. " +
      "Landlords can apply unused annual increases from prior years.",
    keyProvisions: [
      "Rent Board sets annual adjustment based on CPI",
      "Landlord petitions for increases above the annual cap (capital improvements, etc.)",
      "Tenant petitions to decrease rent (habitability, reduced services)",
      "Mandatory registration of all covered rental units",
    ],
    recentChanges: [
      "2024: Updated relocation assistance amounts",
      "2023: Expanded coverage enforcement efforts",
    ],
    realtorNotes:
      "Richmond is one of the more affordable rent-controlled cities in the Bay Area. " +
      "The ordinance's attempt to cover single-family homes is notable — though Costa-Hawkins " +
      "limits its practical effect on SFH. Investor buyers should factor in the registration " +
      "fees and annual cap when calculating returns.",
    source:
      "Richmond Municipal Code Chapter 11.100; Richmond Rent Program; " +
      "Measure L (2016) full text",
  },
  {
    city: "Hayward",
    county: "Alameda",
    programName: "Hayward Residential Rent Stabilization Ordinance",
    adminAgency: "Hayward Rent Stabilization Program",
    agencyWebsite: "https://www.hayward-ca.gov/services/city-services/rent-stabilization",
    ordinanceNumber: "Hayward Municipal Code Chapter 12, Article 1",
    annualAllowableIncrease: "5% per year (fixed cap)",
    currentRate: 5.0,
    currentRateEffectivePeriod: "Ongoing (fixed cap, not CPI-adjusted)",
    coverage: {
      description:
        "Covers residential rental units in multi-family buildings (2+ units).",
      coveredUnits:
        "Multi-family rental units. Hayward's ordinance is more moderate than Oakland or Berkeley.",
      exemptUnits: [
        "Single-family homes and condos (Costa-Hawkins)",
        "Units built after February 1, 1995 (Costa-Hawkins)",
        "Owner-occupied duplexes",
        "Government-subsidized housing",
        "Units in nonprofit affordable housing",
      ],
    },
    justCauseRequired: true,
    justCauseDetails:
      "Just cause required for evictions. Standard at-fault and no-fault causes. " +
      "Relocation assistance required for no-fault evictions.",
    vacancyDecontrol: true,
    vacancyDecontrolDetails: "Per Costa-Hawkins, landlords can set market rent upon vacancy.",
    keyExemptions: [
      "Post-1995 construction",
      "Single-family homes and condos",
      "Owner-occupied duplexes",
      "Government-subsidized and nonprofit housing",
    ],
    registrationRequired: true,
    registrationFee:
      "Annual fee: approximately $71-$90 per unit (2025). Split between landlord and tenant.",
    relocationAssistance:
      "Required for no-fault evictions. Amounts vary by unit size, typically $6,000-$12,000.",
    bankingAllowed: true,
    bankingDetails:
      "Banking is allowed. Unused annual increases from prior years can be applied, " +
      "subject to the overall 5% annual cap.",
    keyProvisions: [
      "Fixed 5% annual cap — simpler than CPI-based systems",
      "Rent review hearings available for contested increases",
      "Capital improvement pass-throughs allowed with city approval",
    ],
    recentChanges: [
      "2024: Enhanced enforcement of registration requirements",
      "2023: Increased relocation assistance amounts",
    ],
    realtorNotes:
      "Hayward's 5% fixed cap is one of the more landlord-friendly rent control ordinances " +
      "in the Bay Area — it is often higher than the CPI-based caps in Oakland (2.3%) or " +
      "SF (1.7%). This makes Hayward investment properties somewhat more attractive for " +
      "rent growth compared to stricter jurisdictions.",
    source:
      "Hayward Municipal Code Chapter 12, Article 1; Hayward Rent Stabilization Program",
  },
  {
    city: "San Jose",
    county: "Santa Clara",
    programName: "Apartment Rent Ordinance (ARO)",
    adminAgency: "San Jose Housing Department — Rent Stabilization Program",
    agencyWebsite: "https://www.sanjoseca.gov/your-government/departments-offices/housing/rent-stabilization-program",
    ordinanceNumber: "San Jose Municipal Code Chapter 17.23",
    annualAllowableIncrease: "5% per year (fixed cap)",
    currentRate: 5.0,
    currentRateEffectivePeriod: "Ongoing (fixed cap)",
    coverage: {
      description:
        "Covers apartments and certain rental units in multi-family buildings with 3+ units " +
        "that received their certificate of occupancy on or before September 7, 1979.",
      coveredUnits:
        "Approximately 42,000 units in San Jose. Apartments in buildings with 3+ units built " +
        "before 9/7/1979.",
      exemptUnits: [
        "Single-family homes, duplexes, condos, and townhouses (Costa-Hawkins)",
        "Triplexes (buildings with exactly 3 units where one is owner-occupied)",
        "Units built after September 7, 1979",
        "Government-subsidized housing",
        "Units in mobile home parks (covered under separate ordinance)",
        "Rooms in boarding houses or residential hotels",
      ],
    },
    justCauseRequired: true,
    justCauseDetails:
      "San Jose has a separate Just Cause Ordinance that applies to all rental units " +
      "(not just ARO-covered). 13 enumerated just cause reasons. No-fault evictions " +
      "require relocation assistance.",
    vacancyDecontrol: true,
    vacancyDecontrolDetails:
      "Per Costa-Hawkins, market rent can be set upon vacancy. The 5% annual cap applies " +
      "once a new tenant is in place.",
    keyExemptions: [
      "Post-September 1979 construction",
      "SFH, duplexes, condos, townhouses",
      "Owner-occupied triplexes",
      "Subsidized and mobile home units (separate regulations)",
    ],
    registrationRequired: true,
    registrationFee:
      "Annual fee: approximately $161-$195 per unit (2025). Landlord pays; limited " +
      "pass-through to tenant allowed.",
    relocationAssistance:
      "Required for no-fault evictions under the Ellis Act, owner move-in, and major " +
      "rehabilitation. Amounts: approximately $8,400-$16,800 depending on unit size, " +
      "tenant income, and length of tenancy (2025 amounts).",
    bankingAllowed: true,
    bankingDetails:
      "Banking is allowed. Landlords can accumulate and apply unused 5% annual increases " +
      "from prior years, subject to maximum per-year increase limits set by the Housing Dept.",
    keyProvisions: [
      "5% annual cap — same as Hayward, more generous than CPI-based cities",
      "Separate Just Cause Ordinance covers ALL rental units citywide",
      "Tenant protection against retaliation for exercising rights",
      "Capital improvement pass-throughs available with Housing Dept approval",
      "Measure E transfer tax: additional $3.30 per $1,000 on sales over $2M " +
      "(funds affordable housing, not directly rent control but related)",
    ],
    recentChanges: [
      "2025: Annual ARO fee increase to fund expanded tenant services",
      "2024: Strengthened just cause protections for all rental units",
      "2023: Enhanced anti-retaliation provisions",
    ],
    realtorNotes:
      "San Jose's ARO is moderate compared to SF, Berkeley, and Oakland. The 5% fixed cap " +
      "is relatively generous, and the pre-1979 construction cutoff means many newer " +
      "apartments are exempt. San Jose is one of the more investor-friendly rent-controlled " +
      "cities. However, the citywide Just Cause Ordinance (separate from ARO) applies to " +
      "ALL rentals, including exempt properties.",
    source:
      "San Jose Municipal Code Chapter 17.23; San Jose Housing Department — Rent " +
      "Stabilization Program; San Jose Apartment Rent Ordinance FAQs",
  },
  {
    city: "East Palo Alto",
    county: "San Mateo",
    programName: "Rent Stabilization Ordinance",
    adminAgency: "East Palo Alto Rent Stabilization Program",
    agencyWebsite: "https://www.cityofepa.org/commdev/page/rent-stabilization",
    ordinanceNumber: "East Palo Alto Municipal Code Title 14, Chapter 2 (Measure C, 1988; updated 2010)",
    annualAllowableIncrease: "CPI-based (SF-Oakland-Hayward MSA), typically 2-5%",
    currentRate: null,
    currentRateEffectivePeriod: "Set annually by Rent Stabilization Board",
    coverage: {
      description:
        "Covers most multi-family rental units. East Palo Alto has one of the older rent " +
        "control ordinances in San Mateo County — originally passed as Measure C in 1988.",
      coveredUnits:
        "Multi-family rental units in buildings built before 1988. East Palo Alto is a small " +
        "city (~30,000 population) with a high percentage of renters.",
      exemptUnits: [
        "Single-family homes and condos (Costa-Hawkins)",
        "Units built after 1995 (Costa-Hawkins)",
        "Government-subsidized housing",
        "Owner-occupied duplexes",
      ],
    },
    justCauseRequired: true,
    justCauseDetails:
      "Just cause required for all evictions of covered tenants. Includes standard at-fault " +
      "and no-fault causes. Strong tenant protections given the city's demographics.",
    vacancyDecontrol: true,
    vacancyDecontrolDetails: "Per Costa-Hawkins. Market rent upon vacancy, annual cap for new tenant.",
    keyExemptions: [
      "Post-1995 construction",
      "Single-family homes and condos",
      "Government-subsidized housing",
      "Owner-occupied duplexes",
    ],
    registrationRequired: true,
    registrationFee: "Annual fee set by the Rent Stabilization Board — approximately $150-$200 per unit.",
    relocationAssistance:
      "Required for no-fault evictions. Amounts vary — approximately $7,000-$14,000.",
    bankingAllowed: true,
    bankingDetails: "Banking of unused annual increases is permitted under the ordinance.",
    keyProvisions: [
      "CPI-based annual adjustment set by the Rent Stabilization Board",
      "Tenant petitions available for habitability complaints",
      "Landlord petitions for fair return on investment",
      "Mandatory unit registration",
    ],
    recentChanges: [
      "2024: Updated registration requirements",
      "2023: Increased relocation assistance amounts",
    ],
    realtorNotes:
      "East Palo Alto is a small market but significant because it is the only San Mateo " +
      "County city with a full rent control ordinance. The city's proximity to Palo Alto, " +
      "Meta/Facebook HQ, and Stanford makes it a gentrification flashpoint. Tenant protections " +
      "are strongly enforced. Investment properties here require careful due diligence.",
    source:
      "East Palo Alto Municipal Code Title 14, Chapter 2; East Palo Alto Rent Stabilization " +
      "Program; Measure C (1988)",
  },
  {
    city: "Mountain View",
    county: "Santa Clara",
    programName: "Community Stabilization and Fair Rent Act (CSFRA)",
    adminAgency: "Mountain View Rental Housing Committee",
    agencyWebsite: "https://www.mountainview.gov/our-city/departments/community-development/rental-housing",
    ordinanceNumber: "Mountain View City Code Chapter 43 (Measure V, 2016)",
    annualAllowableIncrease: "CPI-based (San Jose-Sunnyvale-Santa Clara MSA), capped",
    currentRate: null,
    currentRateEffectivePeriod: "Set annually by the Rental Housing Committee",
    coverage: {
      description:
        "Covers most multi-family rental units built before February 1, 1995. Passed by " +
        "voters as Measure V in November 2016 — relatively new rent control by Bay Area standards.",
      coveredUnits:
        "Approximately 15,000 rental units. Multi-family buildings built before 2/1/1995.",
      exemptUnits: [
        "Single-family homes and condos (Costa-Hawkins)",
        "Units built after February 1, 1995",
        "Government-subsidized housing",
        "Units in nonprofit affordable housing",
        "Mobile homes (covered under state Mobilehome Residency Law)",
        "Duplexes where the owner occupies one unit",
      ],
    },
    justCauseRequired: true,
    justCauseDetails:
      "Just cause required for all covered units. Enumerated causes similar to other Bay " +
      "Area cities. No-fault evictions require relocation assistance.",
    vacancyDecontrol: true,
    vacancyDecontrolDetails: "Per Costa-Hawkins. Market rent upon vacancy.",
    keyExemptions: [
      "Post-1995 construction",
      "Single-family homes and condos",
      "Government-subsidized and nonprofit housing",
      "Owner-occupied duplexes",
      "Mobile homes",
    ],
    registrationRequired: true,
    registrationFee:
      "Annual Rental Housing Committee fee: approximately $155-$190 per unit (2025). " +
      "50% pass-through to tenant allowed.",
    relocationAssistance:
      "Required for no-fault evictions. Amounts: approximately $7,500-$17,000 depending " +
      "on unit size and tenant circumstances (2025 amounts).",
    bankingAllowed: true,
    bankingDetails:
      "Banking of unused annual CPI increases is allowed under the CSFRA.",
    keyProvisions: [
      "CPI-based annual adjustment set by the Rental Housing Committee",
      "Petition process for both landlords (fair return) and tenants (decreased services)",
      "Capital improvement pass-throughs allowed with committee approval",
      "Measure P transfer tax: additional $1.50-$3.30 per $1,000 for properties over $2M",
    ],
    recentChanges: [
      "2025: Continued refinement of petition processes",
      "2024: Updated relocation assistance amounts",
    ],
    realtorNotes:
      "Mountain View's rent control (Measure V, 2016) was driven by the tech boom and " +
      "Google's massive campus expansion driving up rents. The CSFRA is younger than most " +
      "other Bay Area rent control ordinances and is still evolving. Investment properties " +
      "near Google/Meta campuses are popular but must be analyzed with rent control constraints.",
    source:
      "Mountain View City Code Chapter 43; Measure V (2016); Mountain View Rental Housing " +
      "Committee; CSFRA FAQs",
  },
];

// -----------------------------------------------------------------------------
// 3. COSTA-HAWKINS RENTAL HOUSING ACT
// -----------------------------------------------------------------------------

export interface CostaHawkinsInfo {
  title: string;
  statute: string;
  effectiveDate: string;
  summary: string;
  keyProvisions: {
    provision: string;
    details: string;
    practicalEffect: string;
  }[];
  whatItPrevents: string[];
  repealAttempts: {
    measure: string;
    year: number;
    result: string;
    voteMargin: string;
  }[];
  realtorRelevance: string[];
  source: string;
}

export const costaHawkinsInfo: CostaHawkinsInfo = {
  title: "Costa-Hawkins Rental Housing Act",
  statute: "California Civil Code §1954.50-1954.535",
  effectiveDate: "1995-01-01",
  summary:
    "Costa-Hawkins is a state law that limits the scope of local rent control ordinances. " +
    "It establishes three key restrictions on local rent control: (1) vacancy decontrol — " +
    "landlords can set market rent when a unit is voluntarily vacated; (2) single-family " +
    "homes and condos are exempt from local rent control; and (3) buildings constructed after " +
    "February 1, 1995 are exempt from local rent control. Costa-Hawkins is the primary reason " +
    "Bay Area rents can reset to market rate between tenants.",
  keyProvisions: [
    {
      provision: "Vacancy Decontrol",
      details:
        "When a tenant voluntarily vacates a rent-controlled unit, the landlord can raise " +
        "the rent to any amount for the next tenant. The annual rent increase cap then applies " +
        "to the new tenant from that point forward.",
      practicalEffect:
        "This is why you see 'below market' long-term tenants next to 'market rate' new " +
        "tenants in the same building. It also means landlords have a financial incentive to " +
        "see tenants leave, which has led to buyout agreements and, in some cases, alleged " +
        "tenant harassment.",
    },
    {
      provision: "Single-Family Home and Condo Exemption",
      details:
        "Local rent control ordinances cannot apply to single-family homes or condominiums, " +
        "regardless of when they were built. However, AB 1482's statewide rent cap does apply " +
        "to SFH/condos unless the owner provides the statutory exemption notice.",
      practicalEffect:
        "Investors buying SFH or condos as rentals are not subject to local rent control " +
        "(Oakland RAP, SF Rent Board, etc.) but ARE subject to AB 1482 unless they file " +
        "the proper notice.",
    },
    {
      provision: "Post-1995 Construction Exemption",
      details:
        "Buildings that received their certificate of occupancy after February 1, 1995 " +
        "are exempt from local rent control. This is a permanent exemption — it does not " +
        "expire (unlike the 15-year rolling exemption in AB 1482).",
      practicalEffect:
        "New construction built from 1995 onward is free from local rent control but is " +
        "still subject to AB 1482's statewide cap (5% + CPI / 10% max) once the building " +
        "is older than 15 years.",
    },
  ],
  whatItPrevents: [
    "Local governments cannot impose vacancy control (controlling rents between tenants).",
    "Local governments cannot extend rent control to SFH or condos.",
    "Local governments cannot apply rent control to post-1995 buildings.",
    "Local governments cannot override these provisions, even by ballot measure.",
  ],
  repealAttempts: [
    {
      measure: "Proposition 10",
      year: 2018,
      result: "Defeated",
      voteMargin: "59.4% No, 40.6% Yes",
    },
    {
      measure: "Proposition 21",
      year: 2020,
      result: "Defeated",
      voteMargin: "59.8% No, 40.2% Yes",
    },
  ],
  realtorRelevance: [
    "Costa-Hawkins is what makes Bay Area rental investment viable for many investors — " +
    "vacancy decontrol allows rents to reset to market between tenants.",
    "When advising investor clients, explain that Costa-Hawkins protections could change " +
    "if a future ballot measure succeeds. Two repeal attempts have been defeated, but " +
    "advocacy groups continue to push for reform.",
    "SFH and condo investors benefit most from Costa-Hawkins — they avoid local rent " +
    "control entirely (though AB 1482 still applies with proper notice).",
    "Post-1995 buildings are a preferred investment target due to the permanent Costa-Hawkins " +
    "exemption from local ordinances.",
    "If Costa-Hawkins were ever repealed, cities like Oakland, Berkeley, and SF could impose " +
    "vacancy control — meaning landlords could no longer set market rent between tenants. " +
    "This would dramatically reduce property values for rent-controlled buildings.",
  ],
  source:
    "California Civil Code §1954.50-1954.535; Costa-Hawkins Rental Housing Act (AB 1164, " +
    "1995); California Secretary of State — Propositions 10 and 21 results",
};

// -----------------------------------------------------------------------------
// 4. KEY TENANT RIGHTS & PROTECTIONS
// -----------------------------------------------------------------------------

export interface TenantRight {
  right: string;
  statute: string;
  description: string;
  details: string[];
  realtorRelevance: string;
}

export const keyTenantRights: TenantRight[] = [
  {
    right: "Relocation Assistance",
    statute: "Various: AB 1482 §1946.2(d); local ordinances",
    description:
      "Tenants displaced by no-fault evictions (owner move-in, Ellis Act, substantial " +
      "remodel, demolition) are entitled to relocation assistance payments from the landlord.",
    details: [
      "AB 1482 (statewide): one month's rent for no-fault evictions.",
      "Oakland: $6,994-$10,162+ depending on unit size, plus add-ons for protected tenants. " +
      "Among the highest in the Bay Area.",
      "Berkeley: $15,000-$22,000+ per tenant, one of the highest in California.",
      "San Francisco: $7,176-$21,528+ per tenant depending on age, disability, tenancy length.",
      "San Jose: $8,400-$16,800 depending on circumstances.",
      "Relocation payments are in ADDITION to any required notice period.",
    ],
    realtorRelevance:
      "When listing occupied rental properties for sale, calculate potential relocation " +
      "costs for the buyer. A building with long-term tenants in a high-relocation city " +
      "like Berkeley could cost $100,000+ to vacate for conversion or renovation.",
  },
  {
    right: "Ellis Act Protections",
    statute: "California Government Code §7060-7060.7",
    description:
      "The Ellis Act allows landlords to exit the rental business by withdrawing all units " +
      "in a building from the rental market. However, significant tenant protections apply.",
    details: [
      "ALL units in the building must be withdrawn — landlords cannot selectively remove " +
      "individual units under Ellis Act.",
      "120-day notice required (1 year for elderly/disabled tenants).",
      "Relocation assistance required per local ordinance.",
      "If units are returned to the rental market within 5 years, the former tenants have " +
      "a right of first refusal at their prior rent (adjusted for CPI).",
      "If returned within 10 years, the rent must be set at the prior controlled rate.",
      "In San Francisco, Ellis Act evictions are tracked and the building is flagged permanently.",
      "Ellis Act is commonly used for condo conversions and TIC (tenancy-in-common) sales.",
    ],
    realtorRelevance:
      "Ellis Act evictions are controversial and can generate negative media attention. " +
      "When advising investor clients considering an Ellis withdrawal, ensure they understand " +
      "the full cost (relocation payments, legal fees, 10-year restrictions) and reputational " +
      "considerations.",
  },
  {
    right: "Buyout Agreements",
    statute: "Various local ordinances (SF Admin Code §37.9E; Oakland OMC 8.22)",
    description:
      "Landlords can offer tenants cash payments to voluntarily vacate a rent-controlled unit. " +
      "These 'buyout' or 'cash for keys' agreements are legal but heavily regulated in " +
      "rent-controlled cities.",
    details: [
      "San Francisco: Buyout agreements must be filed with the Rent Board. Tenant has " +
      "45 days to rescind after signing. Landlord must provide written disclosure of tenant " +
      "rights before making any offer.",
      "Oakland: Tenant has 30 days to rescind a buyout agreement. Landlord must provide " +
      "a notice of rights before making any buyout offer.",
      "Typical buyout amounts in the Bay Area range from $10,000 for short-term tenants " +
      "to $100,000+ for long-term tenants in high-rent areas. Some SF buyouts have " +
      "exceeded $200,000.",
      "Buyouts are NOT taxable as income for the tenant in most cases (treated as moving " +
      "expenses or personal injury). Consult a tax advisor.",
      "Landlords cannot harass, intimidate, or pressure tenants into accepting a buyout.",
    ],
    realtorRelevance:
      "Buyout costs should be factored into the acquisition analysis for any occupied " +
      "rent-controlled building. For TIC and condo conversion projects, buyout costs are " +
      "often the largest expense. Agents should avoid directly participating in buyout " +
      "negotiations — refer landlord clients to a qualified attorney.",
  },
  {
    right: "Section 8 / Housing Choice Voucher Protections",
    statute: "California Government Code §12955; SB 329 (2019); SB 267 (2023)",
    description:
      "California law prohibits discrimination against tenants based on their source of " +
      "income, including Section 8 Housing Choice Vouchers, Veterans Affairs Supportive " +
      "Housing (VASH), and other government rental assistance programs.",
    details: [
      "SB 329 (2019, effective 2020): Made source of income a protected characteristic " +
      "under FEHA. Landlords cannot refuse to rent to Section 8 voucher holders solely " +
      "because of the voucher.",
      "SB 267 (2023): Extended protections to include Emergency Housing Vouchers (EHV) " +
      "and all forms of government rental assistance.",
      "Landlords can still apply the same screening criteria (credit, rental history, etc.) " +
      "to all applicants, including voucher holders.",
      "Penalty for source-of-income discrimination: up to $10,000 fine plus damages.",
      "Advertising that says 'No Section 8' or 'No Vouchers' is illegal.",
    ],
    realtorRelevance:
      "Listing agents advertising rental properties must NEVER include language excluding " +
      "Section 8 or voucher tenants. Buyer's agents advising investor clients should explain " +
      "that landlords cannot reject applicants solely based on their use of a voucher. " +
      "This applies to all property types, including single-family homes.",
  },
  {
    right: "Tenant Right to Legal Counsel",
    statute: "Various local ordinances",
    description:
      "Several Bay Area cities provide free legal representation to tenants facing eviction.",
    details: [
      "San Francisco: Right to Counsel program provides free legal representation to ALL " +
      "tenants facing eviction, regardless of income (since 2018).",
      "Oakland: Established a Keep Oakland Housed program providing free legal services " +
      "and emergency rental assistance for tenants facing eviction.",
      "Berkeley: Legal assistance available through the Rent Board for tenants in " +
      "covered units facing contested actions.",
      "Statewide: The Shriver Civil Counsel Act provides some funding for tenant legal " +
      "services in eviction cases.",
    ],
    realtorRelevance:
      "In cities with right-to-counsel programs, eviction proceedings take significantly " +
      "longer and are more expensive for landlords. Factor this into investment analysis — " +
      "a contested eviction in SF can take 6-12 months and cost $15,000-$50,000+ in legal fees.",
  },
];

// -----------------------------------------------------------------------------
// 5. RECENT & UPCOMING CHANGES
// -----------------------------------------------------------------------------

export interface LegislativeUpdate {
  title: string;
  status: "active" | "pending" | "proposed" | "defeated" | "sunset_scheduled";
  effectiveDate: string;
  summary: string;
  impact: string;
  source: string;
}

export const recentAndUpcomingChanges: LegislativeUpdate[] = [
  {
    title: "AB 1482 Sunset — January 1, 2030",
    status: "sunset_scheduled",
    effectiveDate: "2030-01-01",
    summary:
      "AB 1482's rent cap and just cause eviction provisions are scheduled to sunset on " +
      "January 1, 2030. Without legislative action, statewide rent protections would expire " +
      "and only local ordinances would remain.",
    impact:
      "The sunset creates major uncertainty for the rental market. Advocates are pushing to " +
      "make AB 1482 permanent or replace it with stronger protections. If the sunset occurs " +
      "without replacement, tenants in cities without local rent control would lose all " +
      "rent cap protections.",
    source: "California Civil Code §1947.12(j); CalMatters analysis",
  },
  {
    title: "Affordable Rent Act — Two-Year Bill (Carried to 2026)",
    status: "pending",
    effectiveDate: "TBD — 2026 legislative session",
    summary:
      "A legislative proposal to expand the Tenant Protection Act by lowering the annual " +
      "rent increase cap, removing the 2030 sunset date, and potentially expanding coverage.",
    impact:
      "If passed, would permanently cap rents at a lower level statewide. Major impact on " +
      "investment property valuations across California. Closely watched by the California " +
      "Apartment Association and tenant advocacy groups.",
    source: "California Legislature — pending legislation tracker",
  },
  {
    title: "Oakland Banked Rent Reforms (Effective 2026)",
    status: "active",
    effectiveDate: "2026-01-01",
    summary:
      "Oakland's reforms limit rent banking to 5 years (down from 10), prevent banked " +
      "increases from transferring to new owners, and require Business Tax Certificate with " +
      "rent increase notices.",
    impact:
      "Significantly reduces the value proposition of buying Oakland rent-controlled buildings " +
      "with below-market tenants. Previously, buyers could purchase a building with banked " +
      "increases and catch up toward market rents. That strategy is now much less viable.",
    source:
      "Oakland Municipal Code Chapter 8.22; Edrington & Associates — Oakland Rent Law Changes",
  },
  {
    title: "Proposed Costa-Hawkins Reform",
    status: "proposed",
    effectiveDate: "TBD",
    summary:
      "Tenant advocacy groups continue to pursue Costa-Hawkins reform through legislation " +
      "or ballot measures. A future ballot measure could allow vacancy control (limiting " +
      "rent increases between tenants) and/or extend local rent control to newer buildings " +
      "and single-family homes.",
    impact:
      "If Costa-Hawkins were significantly weakened or repealed, it would fundamentally " +
      "change Bay Area rental property economics. Vacancy decontrol is the primary mechanism " +
      "by which landlords in rent-controlled cities achieve market-rate returns. Two previous " +
      "repeal attempts (Prop 10 in 2018, Prop 21 in 2020) were defeated by 59-60% margins.",
    source: "Housing Is a Human Right campaign; California Secretary of State ballot tracker",
  },
  {
    title: "SB 611 — Rent Increase Notice Requirements (Proposed 2026)",
    status: "pending",
    effectiveDate: "TBD — 2026 legislative session",
    summary:
      "Proposed legislation to require 90-day notice for all rent increases (currently " +
      "90 days only required for increases over 10%). Would also require landlords to " +
      "include specific justification language in rent increase notices.",
    impact:
      "Would slow the pace at which landlords can implement rent increases and add " +
      "compliance requirements. Landlords would need to plan further ahead.",
    source: "California Legislature — 2026 session tracker",
  },
];

// -----------------------------------------------------------------------------
// 6. REALTOR IMPLICATIONS — WHAT AGENTS NEED TO KNOW
// -----------------------------------------------------------------------------

export interface RealtorGuidance {
  topic: string;
  guidance: string[];
}

export const realtorGuidance: RealtorGuidance[] = [
  {
    topic: "Listing Occupied Rental Properties",
    guidance: [
      "Determine whether each unit is covered by local rent control, AB 1482, or is exempt.",
      "Obtain current rent rolls and compare to market rents — the gap between actual and " +
      "market rent (the 'rent upside') is a key value driver for investor buyers.",
      "Calculate potential relocation costs if the buyer intends to vacate units.",
      "Disclose all known tenant rights, lease terms, and any pending disputes or petitions " +
      "with the local rent board.",
      "Provide copies of all leases, rental agreements, and Section 8 contracts.",
      "Advise the seller that existing tenants have the right to remain in place after the " +
      "sale — the new owner inherits all tenant rights and lease obligations.",
    ],
  },
  {
    topic: "Advising Investor Buyers",
    guidance: [
      "Identify the specific rent control jurisdiction and ordinance that applies to the " +
      "target property — rules vary dramatically between Oakland, Berkeley, SF, and San Jose.",
      "Calculate the true cap rate and cash-on-cash return using the ACTUAL allowable rent " +
      "increases, not market rent growth assumptions.",
      "Factor in registration fees, relocation reserves, legal reserves, and the possibility " +
      "of tenant petitions reducing rents.",
      "For Oakland: explain the 2026 banking reforms and their impact on rent catch-up strategies.",
      "For Berkeley: explain the no-banking rule and 2-year freeze on new tenancy increases.",
      "For SF: explain the low annual increase (1.7%) and high relocation costs.",
      "Recommend investor clients consult a real estate attorney specializing in landlord-tenant " +
      "law before purchasing rent-controlled properties.",
    ],
  },
  {
    topic: "AB 1482 Compliance for Landlord Clients",
    guidance: [
      "Verify whether each property qualifies for an AB 1482 exemption.",
      "For exempt SFH/condos: ensure the statutory exemption notice is included in the lease.",
      "For non-exempt properties: ensure rent increases do not exceed 5% + CPI (or 10% max).",
      "Ensure proper written notice is given: 30 days for increases of 10% or less, " +
      "90 days for increases over 10%.",
      "Document just cause for any eviction of a tenant who has been in place 12+ months.",
    ],
  },
  {
    topic: "Disclosures When Selling Investment Properties",
    guidance: [
      "Disclose all pending rent board petitions, complaints, or code enforcement actions.",
      "Disclose the rent control status of each unit (covered, exempt, partially exempt).",
      "Disclose whether any units were previously subject to Ellis Act withdrawal.",
      "Provide documentation of all rent increase history for each unit.",
      "Disclose any pending or threatened litigation from tenants.",
      "If Mello-Roos or other special assessments apply, provide the annual amounts.",
    ],
  },
  {
    topic: "Fair Housing Intersection",
    guidance: [
      "Never suggest a client choose tenants based on protected characteristics (race, " +
      "color, religion, sex, national origin, familial status, disability, sexual orientation, " +
      "gender identity, marital status, source of income, or any combination thereof).",
      "Source-of-income discrimination is illegal — cannot refuse Section 8 voucher holders.",
      "Ensure all marketing and advertising is compliant with fair housing law.",
      "Be aware that rent control disproportionately affects communities of color and " +
      "low-income populations — ensure equitable treatment in all transactions.",
    ],
  },
];

// -----------------------------------------------------------------------------
// SUMMARY & QUICK REFERENCE
// -----------------------------------------------------------------------------

export interface RentControlSummary {
  city: string;
  hasLocalRentControl: boolean;
  annualCap: string;
  coveredUnits: string;
  justCauseRequired: boolean;
  bankingAllowed: boolean;
  realtorKeyTakeaway: string;
}

export const rentControlSummaryTable: RentControlSummary[] = [
  {
    city: "Oakland",
    hasLocalRentControl: true,
    annualCap: "CPI-based (~2.3%)",
    coveredUnits: "Pre-1983 multi-family",
    justCauseRequired: true,
    bankingAllowed: true,
    realtorKeyTakeaway: "Strong controls. Banking now limited to 5 years and non-transferable.",
  },
  {
    city: "Berkeley",
    hasLocalRentControl: true,
    annualCap: "~65% of CPI (Board-set)",
    coveredUnits: "Pre-1980 multi-family",
    justCauseRequired: true,
    bankingAllowed: false,
    realtorKeyTakeaway: "Strictest in Bay Area. No banking, no increases for first 2 years, highest transfer tax.",
  },
  {
    city: "San Francisco",
    hasLocalRentControl: true,
    annualCap: "60% of CPI (~1.7%)",
    coveredUnits: "Pre-1979 multi-family (172,000 units)",
    justCauseRequired: true,
    bankingAllowed: false,
    realtorKeyTakeaway: "Largest rent-controlled stock in Bay Area. Low annual cap but vacancy decontrol helps.",
  },
  {
    city: "Richmond",
    hasLocalRentControl: true,
    annualCap: "CPI-based (~3%)",
    coveredUnits: "Most rentals including SFH (subject to Costa-Hawkins limits)",
    justCauseRequired: true,
    bankingAllowed: true,
    realtorKeyTakeaway: "Broad coverage attempt. One of the few cities attempting SFH rent control.",
  },
  {
    city: "Hayward",
    hasLocalRentControl: true,
    annualCap: "5% fixed",
    coveredUnits: "Multi-family (2+)",
    justCauseRequired: true,
    bankingAllowed: true,
    realtorKeyTakeaway: "More landlord-friendly. Fixed 5% cap often exceeds CPI-based cities.",
  },
  {
    city: "San Jose",
    hasLocalRentControl: true,
    annualCap: "5% fixed",
    coveredUnits: "Pre-1979 apartments (3+ units)",
    justCauseRequired: true,
    bankingAllowed: true,
    realtorKeyTakeaway: "Moderate ordinance. Separate citywide just cause covers ALL rentals.",
  },
  {
    city: "East Palo Alto",
    hasLocalRentControl: true,
    annualCap: "CPI-based (2-5%)",
    coveredUnits: "Pre-1988 multi-family",
    justCauseRequired: true,
    bankingAllowed: true,
    realtorKeyTakeaway: "Only San Mateo County city with full rent control. Gentrification hot spot.",
  },
  {
    city: "Mountain View",
    hasLocalRentControl: true,
    annualCap: "CPI-based",
    coveredUnits: "Pre-1995 multi-family",
    justCauseRequired: true,
    bankingAllowed: true,
    realtorKeyTakeaway: "Newest major Bay Area rent control (2016). Driven by tech boom near Google HQ.",
  },
  {
    city: "Fremont",
    hasLocalRentControl: false,
    annualCap: "AB 1482 only (5% + CPI / 10% max)",
    coveredUnits: "AB 1482 applies to eligible units",
    justCauseRequired: true,
    bankingAllowed: false,
    realtorKeyTakeaway: "No local rent control — only AB 1482 statewide protections apply.",
  },
  {
    city: "Walnut Creek",
    hasLocalRentControl: false,
    annualCap: "AB 1482 only (5% + CPI / 10% max)",
    coveredUnits: "AB 1482 applies to eligible units",
    justCauseRequired: true,
    bankingAllowed: false,
    realtorKeyTakeaway: "No local rent control — only AB 1482. Attractive for investors.",
  },
  {
    city: "Concord",
    hasLocalRentControl: false,
    annualCap: "AB 1482 only (5% + CPI / 10% max)",
    coveredUnits: "AB 1482 applies to eligible units",
    justCauseRequired: true,
    bankingAllowed: false,
    realtorKeyTakeaway: "No local rent control — only AB 1482. Growing rental market.",
  },
  {
    city: "Dublin",
    hasLocalRentControl: false,
    annualCap: "AB 1482 only (5% + CPI / 10% max)",
    coveredUnits: "AB 1482 applies to eligible units (many exempt — newer construction)",
    justCauseRequired: true,
    bankingAllowed: false,
    realtorKeyTakeaway: "No local rent control. Most units are post-1995, so AB 1482 may also not apply (15-year exemption).",
  },
];
