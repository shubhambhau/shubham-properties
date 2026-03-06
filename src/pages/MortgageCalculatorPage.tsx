import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, IndianRupee, Percent, Calendar, ArrowRight } from 'lucide-react';

function formatINR(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function EmiCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const result = useMemo(() => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return { emi: p / n, totalPayment: p, totalInterest: 0 };
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;
    return { emi, totalPayment, totalInterest };
  }, [loanAmount, interestRate, tenure]);

  const principalPercent = Math.round((loanAmount / result.totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a8a] pt-32 pb-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">Financial Tools</p>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl mb-4">EMI Calculator</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Calculate your monthly home loan EMI instantly. Plan your property purchase with confidence.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Calculator Inputs */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 font-heading font-semibold text-slate-900">
                    <IndianRupee className="w-4 h-4 text-[#1d4ed8]" />
                    Loan Amount
                  </label>
                  <span className="font-heading font-bold text-[#1e3a8a] text-lg">{formatINR(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={50000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-[#1d4ed8] h-2 rounded-full"
                />
                <div className="flex justify-between text-slate-400 text-xs mt-1.5">
                  <span>₹5 L</span><span>₹5 Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 font-heading font-semibold text-slate-900">
                    <Percent className="w-4 h-4 text-[#1d4ed8]" />
                    Interest Rate (p.a.)
                  </label>
                  <span className="font-heading font-bold text-[#1e3a8a] text-lg">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={16}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#1d4ed8] h-2 rounded-full"
                />
                <div className="flex justify-between text-slate-400 text-xs mt-1.5">
                  <span>6%</span><span>16%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 font-heading font-semibold text-slate-900">
                    <Calendar className="w-4 h-4 text-[#1d4ed8]" />
                    Loan Tenure
                  </label>
                  <span className="font-heading font-bold text-[#1e3a8a] text-lg">{tenure} years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full accent-[#1d4ed8] h-2 rounded-full"
                />
                <div className="flex justify-between text-slate-400 text-xs mt-1.5">
                  <span>1 yr</span><span>30 yrs</span>
                </div>
              </div>

              {/* Quick Presets */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Quick Amounts</p>
                <div className="flex flex-wrap gap-2">
                  {[2500000, 5000000, 7500000, 10000000, 15000000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setLoanAmount(amt)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${loanAmount === amt ? 'bg-[#1d4ed8] text-white' : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-[#1d4ed8]'}`}
                    >
                      {formatINR(amt)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-5">
            <motion.div
              key={`${loanAmount}-${interestRate}-${tenure}`}
              initial={{ opacity: 0.6, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="bg-[#1e3a8a] rounded-2xl p-7 text-white text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-orange-400" />
                <span className="text-white/70 text-sm">Monthly EMI</span>
              </div>
              <div className="font-heading font-bold text-4xl text-orange-400 mb-1">{formatINR(result.emi)}</div>
              <div className="text-white/50 text-xs">per month</div>
            </motion.div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-sm">Principal Amount</span>
                <span className="font-heading font-semibold text-slate-900">{formatINR(loanAmount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-sm">Total Interest</span>
                <span className="font-heading font-semibold text-orange-600">{formatINR(result.totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                <span className="text-slate-700 font-medium text-sm">Total Payable</span>
                <span className="font-heading font-bold text-[#1e3a8a] text-lg">{formatINR(result.totalPayment)}</span>
              </div>
            </div>

            {/* Breakdown Bar */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Breakup</p>
              <div className="h-4 rounded-full overflow-hidden flex mb-3">
                <div className="bg-[#1d4ed8] transition-all duration-500" style={{ width: `${principalPercent}%` }} />
                <div className="bg-orange-400 transition-all duration-500 flex-1" />
              </div>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#1d4ed8]" />
                  <span className="text-slate-600">Principal {principalPercent}%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-orange-400" />
                  <span className="text-slate-600">Interest {interestPercent}%</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                Get Loan Advice <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-slate-400 text-xs text-center mt-10 max-w-xl mx-auto">
          * This calculator provides an estimate only. Actual EMI may vary based on your bank's terms and conditions. Contact us for personalised home loan guidance.
        </p>
      </div>
    </div>
  );
}

