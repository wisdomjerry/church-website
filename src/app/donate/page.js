"use client";
import { useState } from "react";
import {
  Heart,
  Landmark,
  Smartphone,
  Globe,
  ArrowRight,
  ShieldCheck,
  Loader2,
  CheckCircle,
  X,
} from "lucide-react";
import Reveal from "../components/FadeUp";

const givingMethods = [
  {
    type: "bank",
    icon: <Landmark className="text-red-700" size={32} />,
    title: "Bank Transfer",
    desc: "Direct deposit to our account. Ideal for tithes and monthly pledges.",
    button: "View Bank Details",
    color: "bg-gray-50",
  },
  {
    type: "mobile",
    icon: <Smartphone className="text-red-700" size={32} />,
    title: "Mobile Money (UG)",
    desc: "Support our mission via MTN or Airtel Money manually.",
    button: "Give via Mobile Money",
    color: "bg-red-50",
  },
];

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [activeMethod, setActiveMethod] = useState(null);

  const finalAmount = customAmount || amount;

  const handleManualDonate = () => {
    setError("");
    if (!finalAmount || Number(finalAmount) <= 0) {
      setError("Please enter a valid donation amount.");
      return;
    }
    setSuccess(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0a1227]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769495427/donate_ghjwxq.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1227]/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            Support Our Mission
          </h1>
          <p className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">
            "Each one must give as he has decided in his heart"
          </p>
        </div>
      </section>

      {/* IMPACT + QUICK DONATE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="text-red-700 font-black uppercase tracking-widest text-xs">
                Your Impact
              </span>
              <h2 className="text-4xl font-black uppercase">
                Your Generosity <br /> Changes Lives
              </h2>
              <p className="text-gray-600 text-lg">
                Your giving fuels outreach, discipleship, and hope for our community.
              </p>
              <div className="flex items-center gap-3 font-bold">
                <ShieldCheck className="text-green-600" />
                <span className="text-sm">Secure & Encrypted Transactions</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay="delay-1">
            <div className="bg-white border p-8 shadow-2xl rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-center uppercase">
                Quick Donation
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {["25", "50", "100"].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setAmount(amt);
                      setCustomAmount("");
                    }}
                    className={`border-2 py-3 rounded-md font-bold transition-all
                      ${amount === amt ? "border-red-700 text-red-700" : "border-gray-200 hover:border-red-700"}`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setAmount("");
                }}
                placeholder="Custom Amount ($)"
                className="w-full p-4 border rounded-md mb-4 focus:border-red-700 outline-none"
              />

              {error && <p className="text-red-600 text-sm mb-3 font-semibold">{error}</p>}

              {success && (
                <div className="flex items-center gap-2 text-green-600 text-sm mb-3 font-bold">
                  <CheckCircle size={18} />
                  Donation prepared! Please follow the instructions.
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GIVING METHODS */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {givingMethods.map((method, idx) => (
            <Reveal key={idx}>
              <div className={`${method.color} p-10 rounded-2xl border hover:shadow-xl flex flex-col`}>
                {method.icon}
                <h4 className="text-xl font-bold mt-6 uppercase">{method.title}</h4>
                <p className="text-gray-500 text-sm mt-4 flex-1">{method.desc}</p>
                <button
                  onClick={() => setActiveMethod(method.type)}
                  className="mt-6 flex items-center gap-2 text-red-700 font-black uppercase text-xs"
                >
                  {method.button}
                  <ArrowRight size={14} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MODALS */}
      {activeMethod === "bank" && (
        <Modal onClose={() => setActiveMethod(null)} title="Bank Transfer Details">
          <p><strong>Bank:</strong> Stanbic Bank</p>
          <p><strong>Account Name:</strong> Christian Faith Harvest Church</p>
          <p><strong>Account Number:</strong> 1234567890</p>
        </Modal>
      )}

      {activeMethod === "mobile" && (
        <Modal onClose={() => setActiveMethod(null)} title="Mobile Money Instructions">
          <p><strong>MTN Mobile Money:</strong> Paybill: 123456, Account Name: CFHarvest</p>
          <p><strong>Airtel Money:</strong> Paybill: 654321, Account Name: CFHarvest</p>
          <p>After payment, click "Mark as Paid" to confirm your donation.</p>
          <button
            onClick={handleManualDonate}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-md font-bold"
          >
            Mark as Paid
          </button>
        </Modal>
      )}
    </main>
  );
}

/* SIMPLE MODAL */
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
        >
          <X size={20} />
        </button>
        <h3 className="text-xl font-black mb-4 uppercase">{title}</h3>
        <div className="space-y-2 text-sm text-gray-700">{children}</div>
      </div>
    </div>
  );
}
