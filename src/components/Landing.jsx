import { Link } from "react-router-dom";
import { Download, ShieldCheck, Smartphone, Cloud, CheckCircle2 } from "lucide-react";

const highlights = [
  "Manage customer debts in one place",
  "Add debts and payments quickly",
  "Access everything from mobile and web anytime",
  "Keep your data secure and easy to manage",
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#dcfce7,_#f8fafc_50%,_#ffffff_100%)] text-slate-900">
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-14 md:px-10 lg:flex-row lg:items-center lg:py-20">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
            <Smartphone size={16} />
            Android app is ready
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            Express App
            <span className="block text-emerald-700">Let your users download it instantly</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            This landing page is designed to help your customers or staff download the Android
            app and easily manage debts, payments, and customer records from anywhere.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/downloads/pos-point-of-sale.apk"
              download
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              <Download size={20} />
              Download APK
            </a>

            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Open Dashboard
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="mt-0.5 text-emerald-600" size={18} />
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-slate-950 p-6 shadow-2xl shadow-emerald-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.25),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.2),_transparent_30%)]" />

            <div className="relative space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-emerald-200">Mobile Version</p>
                    <h2 className="mt-1 text-2xl font-bold">Debt Management App</h2>
                  </div>
                  <div className="rounded-2xl bg-emerald-500/20 p-3 text-emerald-300">
                    <Download size={24} />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  This APK is built for Android so you can manage customers, debts, payments,
                  and transaction updates with ease.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white">
                  <ShieldCheck className="text-emerald-300" size={22} />
                  <p className="mt-4 text-sm font-semibold">Secure Login</p>
                  <p className="mt-2 text-xs leading-6 text-slate-300">Each user can sign in with their own account.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white">
                  <Cloud className="text-sky-300" size={22} />
                  <p className="mt-4 text-sm font-semibold">Live Data</p>
                  <p className="mt-2 text-xs leading-6 text-slate-300">Web and mobile share the same backend and data.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white">
                  <Smartphone className="text-amber-300" size={22} />
                  <p className="mt-4 text-sm font-semibold">Ready To Install</p>
                  <p className="mt-2 text-xs leading-6 text-slate-300">Download the APK in one click and install it right away.</p>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5 text-white">
                <p className="text-sm font-semibold text-emerald-200">Install Notes</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  If Android tells you the app was not downloaded from the Play Store, enable
                  <span className="font-semibold text-white"> Install unknown apps </span>
                  and then continue with the installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
