import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Users,
  Settings,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Code,
  Server,
  Palette,
  Route,
  Box,
  Package,
  Smartphone,
  Heart,
  Cpu
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/3 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-5 md:px-8 md:py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              AuthDash
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Secure • Modern • Scalable</p>
          </div>
        </div>

        <Link to="/login">
          <Button
            variant="outline"
            className="group gap-2 hover:border-primary hover:bg-primary/5 transition-all hover:scale-105 active:scale-95"
          >
            <Lock className="h-4 w-4" />
            Log In
            <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center relative">
        {/* Floating badges */}
        <div className="absolute top-10 left-6 md:left-12 hidden md:block">
          <div className="rounded-full bg-green-500/10 px-4 py-2 border border-green-500/20 backdrop-blur-sm">
            <span className="text-xs font-medium text-green-600 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" /> Production Ready
            </span>
          </div>
        </div>

        <div className="absolute top-10 right-6 md:right-12 hidden md:block">
          <div className="rounded-full bg-blue-500/10 px-4 py-2 border border-blue-500/20 backdrop-blur-sm">
            <span className="text-xs font-medium text-blue-600 flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Open Source
            </span>
          </div>
        </div>

        <div className="mb-6 animate-fadeIn">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6 border border-primary/20">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Version 2.1.0</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Modern Authentication
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-purple-600 bg-clip-text text-transparent">
              Dashboard System
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            A complete, production-ready authentication dashboard built with React 18,
            featuring role-based access control, protected routing, and a beautiful
            responsive interface.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeInUp">
          <Link to="/login" className="group">
            <Button
              size="lg"
              className="px-8 h-12 gap-3 group-hover:scale-105 transition-transform duration-200"
            >
              <Sparkles className="h-5 w-5" />
              Get Started Free
              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            className="px-8 h-12 gap-3 hover:scale-105 transition-transform duration-200"
            onClick={() => window.open("https://github.com/Fhrx/routewithauth", "_blank")}
          >
            <Code className="h-5 w-5" />
            View on GitHub
          </Button>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-16 w-full max-w-4xl rounded-2xl border bg-gradient-to-b from-card/50 to-card/30 p-1 backdrop-blur-sm shadow-2xl overflow-hidden animate-float">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70"></div>
                <div>
                  <div className="h-4 w-32 rounded-full bg-primary/20"></div>
                  <div className="h-3 w-24 rounded-full bg-primary/10 mt-2"></div>
                </div>
              </div>
              <div className="h-10 w-24 rounded-lg bg-primary/20"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {["Total Users", "Active Sessions", "Revenue", "Growth"].map((item, i) => (
                <div key={i} className="rounded-xl bg-white/5 p-4 border border-primary/10">
                  <div className="h-4 w-20 rounded-full bg-primary/20 mb-3"></div>
                  <div className="h-8 w-16 rounded-full bg-primary/30 mb-2"></div>
                  <div className="h-3 w-32 rounded-full bg-primary/10"></div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-xl bg-white/5 p-4 border border-primary/10">
                <div className="h-4 w-32 rounded-full bg-primary/20 mb-4"></div>
                <div className="h-40 rounded-lg bg-gradient-to-b from-primary/10 to-primary/5"></div>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-primary/10">
                <div className="h-4 w-24 rounded-full bg-primary/20 mb-4"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="h-3 w-24 rounded-full bg-primary/20"></div>
                      <div className="h-3 w-10 rounded-full bg-primary/30"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for
              <span className="block text-primary">Secure Authentication</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with modern web standards and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Role-Based Access",
                description: "User & admin roles with granular permissions",
                color: "from-blue-500/10 to-blue-500/5"
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: "Protected Routing",
                description: "Secure route guards and redirects",
                color: "from-green-500/10 to-green-500/5"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "User Management",
                description: "Profile, settings, and activity tracking",
                color: "from-purple-500/10 to-purple-500/5"
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Real-time Dashboard",
                description: "Analytics and statistics dashboard",
                color: "from-orange-500/10 to-orange-500/5"
              },
              {
                icon: <Settings className="h-6 w-6" />,
                title: "Customizable",
                description: "Themes, layouts, and settings",
                color: "from-pink-500/10 to-pink-500/5"
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Responsive Design",
                description: "Mobile-first, fully responsive UI",
                color: "from-cyan-500/10 to-cyan-500/5"
              },
              {
                icon: <Server className="h-6 w-6" />,
                title: "Production Ready",
                description: "Optimized for performance and SEO",
                color: "from-red-500/10 to-red-500/5"
              },
              {
                icon: <Code className="h-6 w-6" />,
                title: "Clean Codebase",
                description: "Modular, documented, and scalable",
                color: "from-indigo-500/10 to-indigo-500/5"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border bg-card/50 p-6 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.color} p-3`}>
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 px-6 md:px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Built with Modern Technology</h3>
            <p className="text-muted-foreground">Using the latest tools and frameworks</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {[
              { name: "React 18", icon: <Cpu className="h-5 w-5" />, color: "from-cyan-500/10 to-cyan-500/5", border: "border-cyan-500/20" },
              { name: "Tailwind CSS", icon: <Palette className="h-5 w-5" />, color: "from-teal-500/10 to-teal-500/5", border: "border-teal-500/20" },
              { name: "React Router", icon: <Route className="h-5 w-5" />, color: "from-orange-500/10 to-orange-500/5", border: "border-orange-500/20" },
              { name: "Context API", icon: <Box className="h-5 w-5" />, color: "from-blue-500/10 to-blue-500/5", border: "border-blue-500/20" },
              { name: "Lucide Icons", icon: <Heart className="h-5 w-5" />, color: "from-pink-500/10 to-pink-500/5", border: "border-pink-500/20" },
              { name: "Vite", icon: <Zap className="h-5 w-5" />, color: "from-yellow-500/10 to-yellow-500/5", border: "border-yellow-500/20" },
              { name: "PNPM", icon: <Package className="h-5 w-5" />, color: "from-purple-500/10 to-purple-500/5", border: "border-purple-500/20" },
              { name: "Responsive", icon: <Smartphone className="h-5 w-5" />, color: "from-green-500/10 to-green-500/5", border: "border-green-500/20" },
            ].map((tech, i) => (
              <div
                key={tech.name}
                className="group relative rounded-xl bg-gradient-to-br from-card to-card/80 p-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className={`rounded-lg bg-gradient-to-br ${tech.color} p-4 border ${tech.border} group-hover:border-primary/30 transition-colors`}>
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{tech.icon}</div>
                    <span className="text-sm font-semibold">{tech.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Implement Secure Auth?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get started with our complete authentication solution.
              Perfect for portfolios, prototypes, and production applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="gap-3 px-8">
                  <Sparkles className="h-5 w-5" />
                  Try Demo Dashboard
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 px-8"
                onClick={() => window.open("https://github.com/Fhrx/routewithauth", "_blank")}
              >
                <Code className="h-5 w-5" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 md:px-8 border-t bg-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold">AuthDash</h3>
                <p className="text-xs text-muted-foreground">Secure Authentication System</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Fhrx/routewithauth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <Link
                to="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Login
              </Link>
              <button
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => window.open('https://docs.google.com/document/d/1B7c9taYrmSp4_YhrPjRSMQZJ-yFAQF6u11I04e8kf_k/edit?tab=t.0', '_blank')}
              >
                Docs
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} AuthDash • A React Authentication Dashboard • Created as a Portfolio Project
            </p>
            <p className="mt-2 text-xs opacity-75">
              Built with ❤️ using React, Tailwind CSS, and modern web technologies
            </p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Stagger animations for features */
        .feature-item {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }
        
        /* Apply animation delays dynamically in the map function */
      `}</style>
    </div>
  );
}