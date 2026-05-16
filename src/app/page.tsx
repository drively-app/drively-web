'use client'

import {
  Calendar, CreditCard, Bell, Users,
  Shield, Smartphone, ArrowRight,
  CheckCircle, Menu, X, Zap, TrendingUp,
  Palette, MessageCircle, Award
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/xykorqrj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          phone: phone,
          source: 'Drively Waitlist',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setFormStatus('success')
        setEmail('')
        setPhone('')
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-display font-black text-gradient">
            Drively
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#early-access"
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Early Access
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fadeIn">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#features" className="text-gray-700 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-300"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 px-5 py-2 rounded-full opacity-0 animate-fadeInUp">
                <span className="text-2xl">🇮🇳</span>
                <span className="text-sm font-semibold text-orange-600">Built for Indian Driving Schools</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-tight opacity-0 animate-fadeInUp delay-100">
                Your driving school
                <span className="block text-gradient">in your pocket</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl opacity-0 animate-fadeInUp delay-200">
                Stop juggling WhatsApp groups, Excel sheets, and paper registers.
                <span className="font-semibold text-gray-900"> Drively brings it all together</span> — students, bookings, fees, and RTO compliance in one beautiful app.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp delay-300">
                <a
                  href="#early-access"
                  className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Early Access
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
                </a>

                <a
                  href="#features"
                  className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl text-lg font-bold hover:border-orange-400 hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  See How It Works
                </a>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-500 opacity-0 animate-fadeInUp delay-400">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Free for 3 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>No credit card</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative opacity-0 animate-fadeIn delay-500">
              <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white">
                        <Calendar size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Today&apos;s Sessions</div>
                        <div className="text-2xl font-display font-bold text-orange-600">12 Booked</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                        <TrendingUp size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Revenue This Month</div>
                        <div className="text-2xl font-display font-bold text-green-600">₹1,24,500</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                        <Users size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Active Students</div>
                        <div className="text-2xl font-display font-bold text-blue-600">87</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 road-stripes opacity-50"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4">
              Sound familiar?
            </h2>
            <p className="text-xl text-gray-600">
              These are the headaches every driving school owner knows too well
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: '😤',
                title: 'WhatsApp chaos',
                desc: 'Managing bookings over WhatsApp groups wastes hours daily. Missed messages, double bookings, endless back-and-forth.',
                color: 'from-red-500 to-orange-500'
              },
              {
                emoji: '💸',
                title: 'Fee collection nightmare',
                desc: 'Who paid? Who owes? Chasing payments manually kills your time. No clear records, constant confusion.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                emoji: '🏛️',
                title: 'RTO compliance stress',
                desc: 'Manually tracking 30-day attendance for every student. Preparing government reports is exhausting and error-prone.',
                color: 'from-blue-500 to-cyan-500'
              }
            ].map((p, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{p.emoji}</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                <div className={`h-1 w-16 bg-gradient-to-r ${p.color} rounded-full mt-6`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4">
              Everything you need
              <span className="block text-gradient">in one place</span>
            </h2>
            <p className="text-xl text-gray-600">
              Replace WhatsApp, Excel sheets, and paper registers with one beautiful app
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar size={28} />,
                title: 'Smart Scheduling',
                desc: 'Students book their own slots. Zero double bookings. Automatic reminders 24hrs and 1hr before every session.',
                gradient: 'from-primary to-accent'
              },
              {
                icon: <CreditCard size={28} />,
                title: 'Fee Collection',
                desc: 'Collect via UPI, card or cash. Auto-generate receipts. See exactly who paid and who owes at a glance.',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: <Bell size={28} />,
                title: 'Automated Reminders',
                desc: 'SMS reminders sent automatically. Reduce no-shows by up to 50% without lifting a finger.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Users size={28} />,
                title: 'Student Management',
                desc: 'Complete student profiles with session history, fees, documents and progress tracking in one place.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Shield size={28} />,
                title: 'RTO Compliance',
                desc: 'Automatic 30-day attendance tracking. Generate government-format RTO reports in one tap.',
                gradient: 'from-red-500 to-orange-500'
              },
              {
                icon: <Smartphone size={28} />,
                title: 'Works Anywhere',
                desc: 'No app download needed. Works on any phone browser. Install on home screen like a native app.',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                icon: <Palette size={28} />,
                title: 'White Label Branding',
                desc: 'Schools can brand the entire app with their own logo and colors. Students see your school\'s brand — not Drively. Look completely professional.',
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                icon: <MessageCircle size={28} />,
                title: 'Zero Ghosting Policy',
                desc: 'Students message your school directly inside the app. All conversations are logged permanently. No more unanswered WhatsApp messages.',
                gradient: 'from-teal-500 to-cyan-500'
              },
              {
                icon: <Award size={28} />,
                title: 'Licence Journey Tracker',
                desc: 'Students see their complete journey from enrollment to licence — LL obtained, RTO test date, DL issued. Full transparency at every step.',
                gradient: 'from-amber-500 to-yellow-500'
              }
            ].map((f, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${f.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Experience */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4">
              Your students will love it too
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Give your students complete transparency — progress, payments, and their licence journey all in one place
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features List */}
            <div className="space-y-6">
              {[
                {
                  icon: <Smartphone size={24} />,
                  text: 'Book sessions anytime from their phone'
                },
                {
                  icon: <TrendingUp size={24} />,
                  text: 'Track progress: 12 of 20 sessions done'
                },
                {
                  icon: <CreditCard size={24} />,
                  text: 'Pay fees via UPI and get instant receipt'
                },
                {
                  icon: <Award size={24} />,
                  text: 'See their complete licence journey'
                },
                {
                  icon: <MessageCircle size={24} />,
                  text: 'Chat with school — all messages logged'
                },
                {
                  icon: <Shield size={24} />,
                  text: 'Upload documents once, access forever'
                },
                {
                  icon: <CheckCircle size={24} />,
                  text: 'Rate sessions and give feedback'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-lg text-gray-700 pt-2 font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-[320px] h-[640px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10"></div>

                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 pt-8 pb-4">
                      <div className="flex items-center justify-between text-white text-xs mb-4">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-3 border border-white rounded-sm"></div>
                          <span>100%</span>
                        </div>
                      </div>

                      {/* School Logo Placeholder */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <span className="text-xl">🚗</span>
                        </div>
                        <div>
                          <div className="text-white/80 text-xs">Welcome back!</div>
                          <div className="text-white font-bold">Chennai Driving School</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Progress Card */}
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-700">Your Progress</span>
                          <span className="text-xl font-bold text-orange-600">12/20</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">8 sessions to go!</p>
                      </div>

                      {/* Next Session Card */}
                      <div className="bg-white border-2 border-gray-200 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={16} className="text-orange-500" />
                          <span className="text-xs font-semibold text-gray-500">NEXT SESSION</span>
                        </div>
                        <div className="font-bold text-gray-900 mb-1">Tomorrow 10:00 AM</div>
                        <div className="text-sm text-gray-600">with Instructor Ravi</div>
                      </div>

                      {/* Fee Balance Card */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-semibold text-gray-600 mb-1">Fee Balance</div>
                            <div className="text-2xl font-bold text-green-600">₹2,000</div>
                            <div className="text-xs text-gray-600 mt-1">remaining</div>
                          </div>
                          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                            <CreditCard size={24} />
                          </div>
                        </div>
                      </div>

                      {/* Book Session Button */}
                      <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2">
                        <Calendar size={20} />
                        Book Session
                      </button>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="text-center p-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                            <MessageCircle size={18} className="text-gray-600" />
                          </div>
                          <span className="text-xs text-gray-600">Chat</span>
                        </div>
                        <div className="text-center p-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                            <Shield size={18} className="text-gray-600" />
                          </div>
                          <span className="text-xs text-gray-600">Docs</span>
                        </div>
                        <div className="text-center p-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                            <Award size={18} className="text-gray-600" />
                          </div>
                          <span className="text-xs text-gray-600">Journey</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl rotate-12 opacity-20 blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl -rotate-12 opacity-20 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. No surprises. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹999',
                desc: 'Perfect for small schools getting started',
                features: [
                  'Up to 50 students',
                  'Session booking',
                  'Fee collection',
                  'SMS reminders',
                  'Basic reports'
                ],
                cta: 'Get Started',
                highlight: false
              },
              {
                name: 'Growth',
                price: '₹2,499',
                desc: 'For growing schools that need more',
                features: [
                  'Unlimited students',
                  'Custom domain',
                  'White label branding',
                  'RTO attendance reports',
                  'Document management',
                  'Priority support'
                ],
                cta: 'Most Popular',
                highlight: true
              },
              {
                name: 'Pro',
                price: '₹4,999',
                desc: 'For established schools with branches',
                features: [
                  'Everything in Growth',
                  'Multi-branch support',
                  'Instructor app',
                  'Advanced analytics',
                  'Dedicated onboarding',
                  'Phone support'
                ],
                cta: 'Contact Us',
                highlight: false
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-2xl scale-105 border-4 border-white'
                    : 'bg-white border-2 border-gray-200 hover:border-orange-200 hover:shadow-xl'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Best Value
                  </div>
                )}

                <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                  plan.highlight ? 'text-white/90' : 'text-gray-500'
                }`}>
                  {plan.name}
                </div>

                <div className="mb-6">
                  <div className={`text-5xl font-display font-black mb-2 ${
                    plan.highlight ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </div>
                  <div className={`text-sm ${
                    plan.highlight ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    per month
                  </div>
                </div>

                <p className={`mb-8 ${
                  plan.highlight ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {plan.desc}
                </p>

                <div className="space-y-4 mb-8">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle size={20} className={`flex-shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-white' : 'text-green-500'
                      }`} />
                      <span className={`text-sm ${
                        plan.highlight ? 'text-white/95' : 'text-gray-700'
                      }`}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#early-access"
                  className={`block text-center py-4 rounded-2xl font-bold transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-white text-orange-600 hover:bg-gray-50 shadow-lg'
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="early-access" className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-orange-600 to-amber-500 overflow-hidden">
        <div className="absolute inset-0 road-stripes"></div>

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full mb-8">
            <Zap className="text-yellow-300" size={18} />
            <span className="text-sm font-semibold text-white">Limited Spots Available</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
            Be the first driving school
            <span className="block">in Chennai to use Drively</span>
          </h2>

          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join our early access program. <span className="font-bold">First 3 months completely free.</span> We&apos;ll personally help you get set up and migrate your data.
          </p>

          {formStatus === 'success' ? (
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">You&apos;re on the list! 🎉</h3>
                <p className="text-white/90">We&apos;ll reach out soon with early access details.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={formStatus === 'loading'}
                  className="flex-1 px-6 py-4 rounded-2xl text-gray-900 outline-none focus:ring-4 focus:ring-white/30 transition-all text-lg disabled:opacity-50"
                />
                <input
                  type="tel"
                  placeholder="Mobile: 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  disabled={formStatus === 'loading'}
                  className="flex-1 px-6 py-4 rounded-2xl text-gray-900 outline-none focus:ring-4 focus:ring-white/30 transition-all text-lg disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {formStatus === 'loading' ? (
                  'Joining...'
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </button>
            </form>
          )}

          {formStatus === 'error' && (
            <p className="text-red-300 text-sm mb-4">Something went wrong. Please try again.</p>
          )}

          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Free for 15 days</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>12 schools waiting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Setup in 15 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div>
              <div className="text-3xl font-display font-black text-white mb-2">Drively</div>
              <div className="text-gray-400">
                Built for India&apos;s driving schools
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 text-sm">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="mailto:hello@drively.in" className="text-gray-400 hover:text-white transition-colors">hello@drively.in</a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© 2026 Drively. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}