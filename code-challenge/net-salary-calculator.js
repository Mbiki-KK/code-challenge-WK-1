// Input variables
const basicSalary = 50000;
const benefits = 10000;

// Constants
const KRA_TAX_RATES = [
  { lower: 0, upper: 12298, rate: 0.1, deduction: 0 },
  { lower: 12299, upper: 23885, rate: 0.15, deduction: 1230 },
  { lower: 23886, upper: 35472, rate: 0.2, deduction: 2660 },
  { lower: 35473, upper: 47059, rate: 0.25, deduction: 4895 },
  { lower: 47060, upper: 59999, rate: 0.3, deduction: 8208 },
  { lower: 60000, upper: Infinity, rate: 0.35, deduction: 13798 }
];
const NHIF_RATES = [
  { lower: 0, upper: 5999, rate: 150 },
  { lower: 6000, upper: 7999, rate: 300 },
  { lower: 8000, upper: 11999, rate: 400 },
  { lower: 12000, upper: 14999, rate: 500 },
  { lower: 15000, upper: 19999, rate: 600 },
  { lower: 20000, upper: 24999, rate: 750 },
  { lower: 25000, upper: 29999, rate: 850 },
  { lower: 30000, upper: 34999, rate: 900 },
  { lower: 35000, upper: 39999, rate: 950 },
  { lower: 40000, upper: 44999, rate: 1000 },
  { lower: 45000, upper: 49999, rate: 1100 },
  { lower: 50000, upper: 59999, rate: 1200 },
  { lower: 60000, upper: 69999, rate: 1300 },
  { lower: 70000, upper: 79999, rate: 1400 },
  { lower: 80000, upper: 89999, rate: 1500 },
  { lower: 90000, upper: 99999, rate: 1600 },
  { lower: 100000, upper: Infinity, rate: 1700 }
];
const NSSF_RATES = { employee: 0.06, employer: 0.06 };

function calculateKraTax(){
  basicSalary + benefits
}

function calculateNhifDeduction(){
  basicSalary+benefits
}

function calculateNssfDeduction(){
  basicSalary+benefits
}

// Calculations
const grossSalary = basicSalary + benefits;
const kraTax = calculateKraTax(grossSalary);
const nhifDeduction = calculateNhifDeduction(grossSalary);
const nssfDeduction = calculateNssfDeduction(basicSalary);
const totalDeductions = kraTax + nhifDeduction + nssfDeduction;
const netSalary = grossSalary - totalDeductions;

// Output
document.write(`Gross Salary: KES ${grossSalary.toLocaleString()}`);
document.write(`KRA Tax: KES ${kraTax.toLocaleString()}`);
document.write(`NHIF Deduction: KES ${nhifDeduction.toLocaleString()}`);
document.write(`NSSF Deduction: KES ${nssfDeduction.toLocaleString()}`);
document.write(`Total Deductions: KES ${totalDeductions.toLocaleString()}`);

