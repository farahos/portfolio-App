import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download, ShieldCheck, Smartphone, Cloud, CheckCircle2 } from "lucide-react";

const highlights = [
  "Manage customer debts in one place",
  "Add debts and payments quickly",
  "Access everything from mobile and web anytime",
  "Keep your data secure and easy to manage",
];

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-gradient-to-bl from-gray-100 to-gray-200 opacity-50 blur-3xl dark:from-gray-800 dark:to-gray-700" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 opacity-50 blur-3xl dark:from-gray-800 dark:to-gray-700" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`mb-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-gray-300 md:text-5xl">
            App Landing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A clean section for presenting your Android app in the same visual style as the rest
            of the portfolio.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300" />
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-300">
              <Smartphone size={16} />
              Android app is ready
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
              Express App
              <span className="block text-gray-600 dark:text-gray-300">
                Let users download it instantly
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              This section helps customers or staff install the Android app and manage debts,
              payments, and records from anywhere with a layout that matches the rest of your
              portfolio.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/downloads/pos-point-of-sale.apk"
                download
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-2xl dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                <Download size={20} />
                Download APK
              </a>

              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-gray-300 px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-50 hover:shadow-xl dark:border-gray-600 dark:text-white dark:hover:border-white dark:hover:bg-gray-800"
              >
                Open Dashboard
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:bg-gray-800"
                >
                  <CheckCircle2 className="mt-0.5 text-gray-900 dark:text-white" size={18} />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-gray-800">
              <div className="rounded-3xl bg-gradient-to-r from-gray-100 to-gray-200 p-6 dark:from-gray-800 dark:to-gray-700">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mobile Version</p>
                    <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                      Debt Management App
                    </h3>
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-gray-900 shadow-md dark:bg-gray-900 dark:text-white">
                    <Download size={24} />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-700 dark:text-gray-300">
                  Built for Android so users can manage customers, debts, payments, and updates
                  with a simple install flow.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-gray-50 p-5 shadow-md dark:bg-gray-900">
                  <ShieldCheck className="text-gray-900 dark:text-white" size={22} />
                  <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
                    Secure Login
                  </p>
                  <p className="mt-2 text-xs leading-6 text-gray-600 dark:text-gray-400">
                    Each user can sign in with their own account safely.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5 shadow-md dark:bg-gray-900">
                  <Cloud className="text-gray-900 dark:text-white" size={22} />
                  <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
                    Live Data
                  </p>
                  <p className="mt-2 text-xs leading-6 text-gray-600 dark:text-gray-400">
                    Web and mobile stay connected to the same backend data.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5 shadow-md dark:bg-gray-900">
                  <Smartphone className="text-gray-900 dark:text-white" size={22} />
                  <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
                    Ready To Install
                  </p>
                  <p className="mt-2 text-xs leading-6 text-gray-600 dark:text-gray-400">
                    Download once and install the APK immediately on Android.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-gray-900 p-5 text-white dark:bg-gray-950">
                <p className="text-sm font-semibold">Install Notes</p>
                <p className="mt-2 text-sm leading-7 text-gray-300">
                  If Android blocks the app because it is outside the Play Store, enable
                  <span className="font-semibold text-white"> Install unknown apps </span>
                  and continue the setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
