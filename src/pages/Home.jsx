import React from "react";
import { ShoppingCart, Users, TrendingUp, Shield, BarChart3, Globe, ChevronRight, Check } from "lucide-react";
import InstallBanner from '../components/InstallBanner.jsx';
export default function Home() {
  const roles = [
    {
      title: "Vendors",
      description: "Upload and manage products, set commission rules, track sales performance",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "bg-blue-500",
      features: ["Product Management", "Commission Settings", "Sales Analytics"]
    },
    {
      title: "Influencers", 
      description: "Create campaigns, track conversions, earn from promotional activities",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-purple-500",
      features: ["Campaign Creation", "Conversion Tracking", "Commission Earnings"]
    },
    {
      title: "Affiliators",
      description: "Get referral links, monitor performance, withdraw earned commissions", 
      icon: <Users className="w-8 h-8" />,
      color: "bg-green-500",
      features: ["Referral Links", "Performance Metrics", "Commission Withdrawals"]
    },
    {
      title: "Customers",
      description: "Browse products, seamless checkout, order tracking and management",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-orange-500", 
      features: ["Product Browsing", "Secure Checkout", "Order Management"]
    },
    {
      title: "Admin Partners",
      description: "Platform oversight, user approval, analytics and payout management",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-red-500",
      features: ["User Approval", "Global Settings", "Platform Analytics"]
    }
  ];

  const features = [
    {
      title: "Multi-Role Architecture",
      description: "Seamlessly support vendors, influencers, affiliators, customers, and admins",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Advanced Analytics",
      description: "Real-time insights, conversion tracking, and comprehensive reporting",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Commission Management",
      description: "Flexible commission structures with automated payout systems",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Robust security measures with threat monitoring and mitigation",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <InstallBanner />
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Multi-Role
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> E-commerce </span>
              Platform
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering vendors, influencers, affiliators, customers, and admin partners in one unified ecosystem with advanced analytics and commission management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Start Your Journey
                <ChevronRight className="inline-block w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Platform Features</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Built for scale with enterprise-grade security and comprehensive analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Five Powerful Roles</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each role comes with specialized dashboards and tools designed for maximum efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className={`w-16 h-16 ${role.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {role.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{role.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{role.description}</p>
                <div className="space-y-2">
                  {role.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-white/60">
                      <Check className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-white/70 text-lg">Active Vendors</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                $2M+
              </div>
              <div className="text-white/70 text-lg">Monthly GMV</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-white/70 text-lg">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your E-commerce?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of vendors, influencers, and partners already thriving on our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Get Started Today
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Vendor Hub</span>
            </div>
            <div className="text-white/60">
              © 2025 Vendor Hub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}