import React, { useState, useEffect } from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import DappHeader from "./DappHeader";

// Sample order data
const sellOrders = [
  { price: 0.01254, amount: 8232.514, total: 103.235 },
  { price: 0.01248, amount: 7660.765, total: 95.606 },
  { price: 0.01242, amount: 7306.935, total: 90.752 },
  { price: 0.01236, amount: 6638.9, total: 82.056 },
  { price: 0.0123, amount: 6241.125, total: 76.765 },
  { price: 0.01224, amount: 5463.383, total: 66.871 },
  { price: 0.01218, amount: 4810.748, total: 58.594 },
];

const buyOrders = [
  { price: 0.01199, amount: 23967.775, total: 287.373 },
  { price: 0.01193, amount: 26448.513, total: 315.53 },
  { price: 0.01187, amount: 29313.461, total: 347.95 },
  { price: 0.01181, amount: 31788.126, total: 375.417 },
  { price: 0.01175, amount: 34965.809, total: 410.848 },
  { price: 0.01169, amount: 37426.599, total: 437.516 },
  { price: 0.01163, amount: 40289.47, total: 468.566 },
];

const spreadPrice = 0.01213;

const PriceDisplay = ({ price, change }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [price]);

  return (
    <div className="relative group">
      <div
        className={`text-4xl font-bold transition-transform duration-300 ${
          animate ? "scale-110" : "scale-100"
        }`}
      >
        {price}
      </div>
      <div
        className={`absolute -right-6 top-2 text-sm ${
          change >= 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {change >= 0 ? (
          <TrendingUp className="w-4 h-4" />
        ) : (
          <TrendingDown className="w-4 h-4" />
        )}
      </div>
    </div>
  );
};

const TradeForm = ({ type }) => {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="space-y-4">
      <div className="bg-gray-800/30 p-4 rounded-lg border border-[#0DFCFC]/20 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/40">
        <label className="text-sm text-[#0DFCFC]/70 mb-2 block">Price</label>
        <div className="relative">
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-black/30 p-2 rounded border border-[#0DFCFC]/30 focus:border-[#0DFCFC] transition-colors focus:outline-none font-mono"
            placeholder="0.00"
          />
          <span className="absolute right-2 top-2 text-sm text-[#0DFCFC]/70">
            USDT
          </span>
        </div>
      </div>

      <div className="bg-gray-800/30 p-4 rounded-lg border border-[#0DFCFC]/20 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/40">
        <label className="text-sm text-[#0DFCFC]/70 mb-2 block">Amount</label>
        <div className="relative">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-black/30 p-2 rounded border border-[#0DFCFC]/30 focus:border-[#0DFCFC] transition-colors focus:outline-none font-mono"
            placeholder="0.00"
          />
          <span className="absolute right-2 top-2 text-sm text-[#0DFCFC]/70">
            BEFI
          </span>
        </div>
      </div>

      <div className="flex justify-between px-2 text-sm">
        <span className="text-[#0DFCFC]/70">Available:</span>
        <span className="font-mono">0 USDT</span>
      </div>

      <button
        className={`w-full py-3 rounded-lg font-mono font-bold relative group overflow-hidden ${
          type === "buy"
            ? "bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30"
            : "bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
        }`}
      >
        <div
          className={`absolute inset-0 ${
            type === "buy" ? "bg-green-400/10" : "bg-red-400/10"
          } transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}
        />
        <span className="relative z-10">
          {type === "buy" ? "Buy" : "Sell"} BEFI
        </span>
      </button>
    </div>
  );
};

const OrderRow = ({ order, type, maxTotal }) => {
  return (
    <div className="group grid grid-cols-3 text-xs py-1.5 relative cursor-pointer hover:bg-[#0DFCFC]/5 transition-colors">
      <div
        className={`absolute inset-0 ${
          type === "buy" ? "bg-green-500/10" : "bg-red-500/10"
        } rounded`}
        style={{ width: `${(order.total / maxTotal) * 100}%` }}
      />
      <span
        className={`${
          type === "buy" ? "text-green-400" : "text-red-400"
        } z-10 font-mono group-hover:font-bold transition-all duration-300`}
      >
        {order.price.toFixed(5)}
      </span>
      <span className="text-gray-300 z-10 font-mono">
        {order.amount.toFixed(3)}
      </span>
      <span className="text-gray-300 z-10 font-mono">
        {order.total.toFixed(3)}
      </span>
    </div>
  );
};

const Orderbook = () => {
  const [selectedType, setSelectedType] = useState("orderbook");
  const maxTotal = Math.max(
    ...sellOrders.map((o) => o.total),
    ...buyOrders.map((o) => o.total)
  );

  return (
    <div className="col-span-3 bg-gray-900/50 rounded-lg border border-[#0DFCFC]/20 overflow-hidden font-mono backdrop-blur-sm">
      <div className="flex text-sm border-b border-[#0DFCFC]/20">
        {["orderbook", "trades"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`flex-1 px-4 py-3 transition-all duration-300 ${
              selectedType === type
                ? "bg-[#0DFCFC]/10 text-[#0DFCFC]"
                : "text-gray-500 hover:text-[#0DFCFC]/70"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 text-xs text-[#0DFCFC]/70 px-4 py-3 bg-black/20">
        <span>
          Price
          <br />
          USDT
        </span>
        <span>
          Amount
          <br />
          BEFI
        </span>
        <span>
          Total
          <br />
          USDT
        </span>
      </div>

      <div className="divide-y divide-[#0DFCFC]/5">
        <div className="px-2 py-1">
          {sellOrders.map((order, index) => (
            <OrderRow
              key={index}
              order={order}
              type="sell"
              maxTotal={maxTotal}
            />
          ))}
        </div>

        <div className="text-center py-3 text-[#0DFCFC] text-sm bg-[#0DFCFC]/5 relative group">
          <span className="relative z-10">{spreadPrice.toFixed(5)}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0DFCFC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="px-2 py-1">
          {buyOrders.map((order, index) => (
            <OrderRow
              key={index}
              order={order}
              type="buy"
              maxTotal={maxTotal}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 px-4 py-3 border-t border-[#0DFCFC]/20 bg-[#0DFCFC]/5">
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#0DFCFC]/70 flex items-center gap-1">
            <Activity className="w-3 h-3" /> Volume: 1.26K
          </span>
          <span className="text-xs text-[#0DFCFC] font-bold">
            Last: 0.01204
          </span>
        </div>
      </div>
    </div>
  );
};

const Dapp = () => {
  const [activeTab, setActiveTab] = useState("limit");
  const [activeOrder, setActiveOrder] = useState("buy");

  return (
    <div className="min-h-screen text-[#0DFCFC] font-mono bg-gradient-to-b from-black to-gray-900">
      <DappHeader />

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Trading Panel */}
          <div className="col-span-3 space-y-6">
            {/* Pair Selector */}
            <div className="bg-gray-800/30 p-4 rounded-lg border border-[#0DFCFC]/20 backdrop-blur-sm">
              <button className="flex items-center justify-between w-full group">
                <span className="text-lg font-bold group-hover:text-white transition-colors">
                  BEFI/USDT
                </span>
                <span className="text-[#0DFCFC]/70">▼</span>
              </button>
            </div>

            {/* Price Display */}
            <div className="bg-gray-800/30 p-6 rounded-lg border border-[#0DFCFC]/20 backdrop-blur-sm">
              <PriceDisplay price="0.01204" change={-0.5} />
              <div className="text-sm text-[#0DFCFC]/70 mt-2">USDT</div>
            </div>

            {/* Trade Type Tabs */}
            <div className="flex border border-[#0DFCFC]/20 rounded-lg overflow-hidden">
              {["limit", "market"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTab(type)}
                  className={`flex-1 py-3 transition-all duration-300 ${
                    activeTab === type
                      ? "bg-[#0DFCFC]/20 text-[#0DFCFC]"
                      : "bg-gray-800/30 text-gray-400 hover:text-[#0DFCFC]/70"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Buy/Sell Tabs */}
            <div className="flex space-x-2">
              {["buy", "sell"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveOrder(type)}
                  className={`flex-1 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    type === "buy"
                      ? "bg-green-500/20 hover:bg-green-500/30 text-green-400"
                      : "bg-red-500/20 hover:bg-red-500/30 text-red-400"
                  } ${
                    activeOrder === type
                      ? "ring-2 ring-offset-2 ring-offset-black ring-current"
                      : ""
                  }`}
                >
                  {type === "buy" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Trade Form */}
            <TradeForm type={activeOrder} />
          </div>

          {/* Orderbook */}
          <Orderbook />

          {/* Chart Area */}
          <div className="col-span-6 bg-gray-800/30 rounded-lg border border-[#0DFCFC]/20 min-h-[600px] backdrop-blur-sm relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0DFCFC]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dapp;
