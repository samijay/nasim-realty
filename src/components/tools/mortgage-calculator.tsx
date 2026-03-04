"use client";

import { useState, useMemo } from "react";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(850000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculation = useMemo(() => {
    const downPayment = homePrice * (downPaymentPct / 100);
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let monthlyPayment: number;
    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / numPayments;
    } else {
      monthlyPayment =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    // Estimates for taxes and insurance
    const monthlyTax = (homePrice * 0.012) / 12; // ~1.2% Oakland property tax
    const monthlyInsurance = (homePrice * 0.003) / 12; // ~0.3% insurance
    const totalMonthly = monthlyPayment + monthlyTax + monthlyInsurance;
    const totalInterest = monthlyPayment * numPayments - loanAmount;

    return {
      downPayment,
      loanAmount,
      monthlyPayment,
      monthlyTax,
      monthlyInsurance,
      totalMonthly,
      totalInterest,
    };
  }, [homePrice, downPaymentPct, interestRate, loanTerm]);

  return (
    <div
      id="calculator"
      className="rounded-xl border border-border bg-card p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">
            Mortgage Calculator
          </h3>
          <p className="text-sm text-muted-foreground">
            Estimate your monthly payment
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          {/* Home Price */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <DollarSign className="h-4 w-4 text-primary" />
                Home Price
              </label>
              <span className="text-sm font-semibold text-primary">
                {formatPrice(homePrice)}
              </span>
            </div>
            <input
              type="range"
              min={200000}
              max={3000000}
              step={25000}
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full accent-primary h-2 rounded-lg appearance-none cursor-pointer bg-muted"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>$200K</span>
              <span>$3M</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <Percent className="h-4 w-4 text-primary" />
                Down Payment
              </label>
              <span className="text-sm font-semibold text-primary">
                {downPaymentPct}% ({formatPrice(calculation.downPayment)})
              </span>
            </div>
            <input
              type="range"
              min={3}
              max={50}
              step={1}
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="w-full accent-primary h-2 rounded-lg appearance-none cursor-pointer bg-muted"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>3%</span>
              <span>50%</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <Percent className="h-4 w-4 text-primary" />
                Interest Rate
              </label>
              <span className="text-sm font-semibold text-primary">
                {interestRate.toFixed(1)}%
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={10}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-primary h-2 rounded-lg appearance-none cursor-pointer bg-muted"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>2%</span>
              <span>10%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                Loan Term
              </label>
              <span className="text-sm font-semibold text-primary">
                {loanTerm} years
              </span>
            </div>
            <div className="flex gap-2">
              {[15, 20, 30].map((term) => (
                <button
                  key={term}
                  onClick={() => setLoanTerm(term)}
                  className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                    loanTerm === term
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {term} yr
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl bg-gradient-to-br from-primary-dark to-primary p-6 text-white">
          <p className="text-sm text-white/70 uppercase tracking-wider">
            Estimated Monthly Payment
          </p>
          <p className="mt-2 text-4xl font-bold">
            {formatPrice(Math.round(calculation.totalMonthly))}
            <span className="text-lg font-normal text-white/70">/mo</span>
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-white/70">Principal & Interest</span>
              <span className="font-medium">
                {formatPrice(Math.round(calculation.monthlyPayment))}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/70">Property Tax (est.)</span>
              <span className="font-medium">
                {formatPrice(Math.round(calculation.monthlyTax))}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/70">Insurance (est.)</span>
              <span className="font-medium">
                {formatPrice(Math.round(calculation.monthlyInsurance))}
              </span>
            </div>
            <div className="border-t border-white/20 pt-3 flex justify-between text-sm">
              <span className="text-white/70">Loan Amount</span>
              <span className="font-medium">
                {formatPrice(calculation.loanAmount)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/70">Total Interest</span>
              <span className="font-medium">
                {formatPrice(Math.round(calculation.totalInterest))}
              </span>
            </div>
          </div>

          <p className="mt-6 text-xs text-white/50">
            * Estimates based on Oakland average property tax rate (1.2%) and
            homeowners insurance (0.3%). Actual amounts may vary. Does not
            include HOA fees or PMI.
          </p>
        </div>
      </div>
    </div>
  );
};
