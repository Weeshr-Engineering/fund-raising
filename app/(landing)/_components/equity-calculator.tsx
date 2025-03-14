"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";
const EquityCalculator = () => {
  const [investment, setInvestment] = useState<string>("");
  const [equity, setEquity] = useState<number | null>(null);
  const [buyBackValue, setBuyBackValue] = useState<number | null>(null);
  const isMobile = useIsMobile();

  // Constants
  const EQUITY_RATE = 15000; // $15,000 per 1% equity
  const NEXT_ROUND_MULTIPLIER = 1.5; // 3x return for next round

  // Format currency with commas


  // Format number with comma separation
  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Handle input change with validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setInvestment(value);
    }
  };

  // Calculate equity and buy back value
  useEffect(() => {
    if (investment === "") {
      setEquity(null);
      setBuyBackValue(null);
      return;
    }

    const investmentAmount = parseFloat(investment);
    const equityPercentage = parseFloat(
      (investmentAmount / EQUITY_RATE).toFixed(2)
    );
    const nextRoundValue = investmentAmount * NEXT_ROUND_MULTIPLIER;

    setEquity(equityPercentage);
    setBuyBackValue(nextRoundValue);
  }, [investment]);

  return (
    <section className="pt-30 m:pt-24  px-4 w-full lg:pr-0">
      <div className=" w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Equity Calculator
          </h2>
          <p className="text-muted max-w-sm md:max-w-2xl mx-auto">
            Get to know your ownership percentile and possible buy back
          </p>
        </motion.div>

        {isMobile ? (
          <>
            <div className="rounded-3xl overflow-hidden bg-[#2E347E]">
              <div className="p-4">
                <div className="flex justify-between items-center my-2">
                  <div className="rounded-full bg-[#262a47] p-3">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-2xl text-white font-bold">
                        ${EQUITY_RATE}
                      </p>
                      <p className="text-slate-300 text-xs">
                        Per <span className="font-bold text-white">1%</span>{" "}
                        Equity
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-left m-2 mt-14">
                  <p className="text-muted text-sm">Input Investment Amount</p>
                </div>

                <div className="flex border-2 border-[#6A70FF] rounded-xl overflow-hidden mb-2">
                  <div className="bg-[#262a47] text-white flex items-center justify-center text-3xl font-bold w-20">
                    $
                  </div>
                  <Input
                    type="text"
                    value={investment}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="border-0 bg-[#393f84] text-white text-3xl h-16 "
                  />
                </div>

                <div className="bg-background/50 backdrop-blur-lg rounded-xl p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-muted text-sm">Equity Ownership</p>
                    <p className="text-white text-lg font-bold">
                      {equity !== null ? formatNumber(equity) + "%" : "0.00"}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-muted text-sm">
                      Next Round Buy Back Value
                    </p>
                    <p className="text-white text-lg font-bold">
                      {buyBackValue !== null
                        ? "$" + formatNumber(buyBackValue)
                        : "0.00"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="h-28  rounded-3xl bg-[url('https://res.cloudinary.com/drykej1am/image/upload/v1741622518/weeshr_website/Rectangle_3842_sicnxb.png')] bg-cover bg-center flex flex-row w-full justify-between items-center p-4 pl-6 border-none mt-3 cursor-pointer">
              <h4 className="max-w-3 text-xl text-white font-extrabold">
                Invest Now
              </h4>

              <Icon
                icon="solar:arrow-right-linear"
                className="text-white h-12 w-12"
              />
            </Card>
          </>
        ) : (
          // Desktop layout based on image
          <div className="grid grid-cols-4 gap-4 pl-24 2xl:pl-42">
            {/* Calculator Section - 3 columns */}
            <div className="col-span-3">
              <div className=" bg-[#2E347E] rounded-3xl overflow-hidden p-4 flex flex-row pl-6 pt-6">
                <div className="flex justify-between items-start flex-col w-[30%] pb-4">
                  <div className="rounded-full bg-[#262a47] p-3">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white text-2xl font-bold">
                      ${EQUITY_RATE}
                    </p>
                    <p className="text-slate-300 text-right">Per 1% Equity</p>
                  </div>
                </div>

                <div className="w-full">
                  <div className="text-center mb-6">
                    <p className="text-slate-300 text-xl text-left pl-4">
                      Input Investment Amount
                    </p>
                  </div>

                  <div className="flex border-2 border-[#6A70FF] rounded-xl overflow-hidden mb-2">
                    <div className="bg-[#262a47] text-white flex items-center justify-center text-3xl font-bold w-20">
                      $
                    </div>
                    <Input
                      type="text"
                      value={investment}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      className="border-0 bg-[#393f84] text-white text-3xl h-16 "
                    />
                  </div>

                  <div className="bg-background/50 backdrop-blur-lg rounded-xl p-4 space-y-2 w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-muted text-sm">Equity Ownership</p>
                      <p className="text-white text-lg font-bold">
                        {equity !== null ? formatNumber(equity) + "%" : "0.00"}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-muted text-sm">
                        Next Round Buy Back Value
                      </p>
                      <p className="text-white text-lg font-bold">
                        {buyBackValue !== null
                          ? "$" + formatNumber(buyBackValue)
                          : "0.00"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Invest Now Section - 1 column */}
            <Card className="h-full  rounded-3xl bg-[url('https://res.cloudinary.com/drykej1am/image/upload/v1741622518/weeshr_website/Rectangle_3842_sicnxb.png')] bg-cover bg-center flex flex-col w-full justify-around items-start p-4 pl-6 lg:pr-0 border-none cursor-pointer lg:rounded-l-3xl lg:rounded-r-none ">
              <Icon
                icon="solar:arrow-right-linear"
                className="text-white h-12 w-12 mt-10"
              />{" "}
              <h4 className="max-w-3 text-xl text-white font-extrabold">
                Invest Now
              </h4>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default EquityCalculator;
