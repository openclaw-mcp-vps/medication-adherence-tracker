export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Health Tracking
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Never Miss a Dose Again
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Track medication compliance with photo verification, instant family alerts, and doctor-ready adherence reports — all in one place.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
        >
          Start Tracking — $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📸</div>
            <h3 className="font-semibold text-white mb-2">Photo Verification</h3>
            <p className="text-sm text-[#8b949e]">Snap a photo when you take your meds. Proof stored securely for you and your doctor.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🔔</div>
            <h3 className="font-semibold text-white mb-2">Smart Reminders</h3>
            <p className="text-sm text-[#8b949e]">SMS and email alerts for you and family caregivers when doses are missed or upcoming.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="font-semibold text-white mb-2">Doctor Reports</h3>
            <p className="text-sm text-[#8b949e]">Generate PDF adherence reports to share at appointments. Show real compliance data.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <p className="text-[#8b949e] mb-8">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited medications tracked',
              'Photo verification & storage',
              'SMS + email reminders',
              'Family caregiver access',
              'PDF doctor reports',
              'Real-time sync across devices'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my health data secure?</h3>
            <p className="text-sm text-[#8b949e]">Yes. All data is encrypted at rest and in transit. Photos are stored in private, access-controlled storage. We never sell your data.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can family members get notified?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Add up to 5 family caregivers who receive SMS or email alerts when doses are missed or confirmed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do I share reports with my doctor?</h3>
            <p className="text-sm text-[#8b949e]">Generate a PDF adherence report for any date range with one click. Download it or email it directly from the app.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        <p>© {new Date().getFullYear()} MedTrack. Built for patients who take their health seriously.</p>
      </footer>
    </main>
  )
}
