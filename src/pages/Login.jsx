import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  AlertCircle,
  CheckCircle,
  LogIn,
  Sparkles,
  Shield,
  User,
  Fingerprint,
  Chrome,
  Smartphone,
  Laptop,
  ArrowRight,
  ChevronRight,
  Home,
  ArrowLeft
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotInfo, setShowForgotInfo] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [deviceType, setDeviceType] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Detect device type
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setDeviceType(isMobile ? "mobile" : "desktop");
  }, []);

  // Demo accounts with more details
  const demoAccounts = [
    {
      email: "user@mail.com",
      password: "user12345",
      role: "user",
      name: "User Demo",
      badge: "USER",
      color: "bg-blue-500",
      description: "Standard user access"
    },
    {
      email: "admin@mail.com",
      password: "admin12345",
      role: "admin",
      name: "Admin Demo",
      badge: "ADMIN",
      color: "bg-purple-500",
      description: "Full system access"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShowForgotInfo(false);
    setIsLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Validation
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      setLoginAttempts(prev => prev + 1);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false);
      setLoginAttempts(prev => prev + 1);
      return;
    }

    const foundUser = demoAccounts.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      setError("Invalid email or password");
      setIsLoading(false);
      setLoginAttempts(prev => prev + 1);
      return;
    }

    // Login SUCCESS
    setIsLoading(false);
    login({
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role,
    });

    // Navigate to dashboard
    navigate("/dashboard", { replace: true });
  };

  const handleDemoLogin = (account) => {
    setEmail(account.email);
    setPassword(account.password);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4 md:p-8">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2">
        {/* Left: Branding & Info */}
        <div className={`hidden md:flex flex-col justify-center p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="mb-10">
            {/* Home Button for Mobile in left panel */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleBackToHome}
              className="mb-6 gap-2 w-fit"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  DashboardPro
                </h1>
                <p className="text-sm text-muted-foreground">Secure Authentication</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Welcome back to your
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Access your personalized dashboard with advanced analytics, user management, 
              and real-time insights. Secure login with role-based access control.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: <Shield className="h-5 w-5" />, text: "Enterprise-grade security" },
                { icon: <User className="h-5 w-5" />, text: "Role-based access control" },
                { icon: <Fingerprint className="h-5 w-5" />, text: "Single Sign-On ready" },
                { icon: <CheckCircle className="h-5 w-5" />, text: "Real-time monitoring" },
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 opacity-0"
                  style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1 + 0.5}s forwards` }}
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Accounts */}
          <div className={`mt-12 rounded-xl border bg-card/50 p-6 backdrop-blur-sm transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Quick Login (Demo)</h3>
            </div>
            <div className="space-y-3">
              {demoAccounts.map((account, idx) => (
                <button
                  key={account.email}
                  onClick={() => handleDemoLogin(account)}
                  className="flex w-full items-center justify-between rounded-lg border bg-background p-4 hover:border-primary/50 transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  style={{ animationDelay: `${idx * 0.1 + 0.8}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full ${account.color} flex items-center justify-center`}>
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{account.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${account.color.replace('bg-', 'bg-')}/20 text-white`}>
                          {account.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{account.email}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Demo accounts have limited functionality for testing purposes
            </p>
          </div>
        </div>

        {/* Right: Login Form */}
        <div 
          className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="rounded-2xl border bg-background/80 backdrop-blur-sm p-6 md:p-8 shadow-2xl">
            {/* Back to Home Button for Mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToHome}
              className="md:hidden mb-6 gap-2 w-full justify-center"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Homepage
            </Button>

            {/* Login Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3 animate-pulse">
                  <LogIn className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-2xl font-bold">Sign in to your account</h1>
              <p className="text-muted-foreground mt-2">
                Enter your credentials to access the dashboard
              </p>
            </div>

            {/* Device Info */}
            <div className="mb-6 flex items-center justify-center gap-2 rounded-lg bg-muted/50 p-3">
              {deviceType === "mobile" ? (
                <Smartphone className="h-4 w-4 text-primary" />
              ) : (
                <Laptop className="h-4 w-4 text-primary" />
              )}
              <span className="text-sm">
                Logging in from {deviceType === "mobile" ? "mobile" : "desktop"}
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 transition-all focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotInfo(true)}
                    className="text-xs text-primary hover:underline transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-12 transition-all focus:ring-2 focus:ring-primary/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Password Strength */}
                {password.length > 0 && (
                  <div className="flex items-center gap-2 animate-fadeIn">
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          password.length >= 12 ? 'bg-green-500' :
                          password.length >= 8 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${Math.min(password.length * 8, 100)}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {password.length >= 12 ? 'Strong' :
                       password.length >= 8 ? 'Good' :
                       'Weak'}
                    </span>
                  </div>
                )}
              </div>

              {/* Forgot Password Info */}
              <div className={`overflow-hidden transition-all duration-300 ${
                showForgotInfo ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {showForgotInfo && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 animate-fadeIn">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-600">Reset Password</p>
                        <p className="text-sm text-red-500/80 mt-1">
                          Please contact your system administrator to reset your password.
                          For security reasons, password resets are managed by administrators only.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Message */}
              <div className={`overflow-hidden transition-all duration-300 ${
                error ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {error && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 animate-fadeIn">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span className="text-sm text-red-600">{error}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Login Attempts */}
              {loginAttempts > 0 && (
                <div className="text-xs text-muted-foreground text-center animate-fadeIn">
                  Login attempts: {loginAttempts}
                  {loginAttempts >= 3 && (
                    <span className="text-amber-600 block mt-1">
                      Multiple failed attempts may trigger security measures
                    </span>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 text-base font-medium gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    Sign In
                  </>
                )}
              </Button>

              {/* Terms */}
              <p className="text-center text-xs text-muted-foreground">
                By signing in, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">Terms</a> and{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <Separator className="flex-1" />
              <span className="mx-4 text-sm text-muted-foreground">Or continue with</span>
              <Separator className="flex-1" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="h-12 gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5 w-5"
                />
                Google
              </Button>
              <Button 
                variant="outline" 
                className="h-12 gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <Chrome className="h-5 w-5" />
                SSO
              </Button>
            </div>

            {/* Sign Up & Home Links */}
            <div className="mt-8 space-y-4 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link 
                  to="/404" 
                  className="font-medium text-primary hover:underline transition-colors"
                >
                  Request access
                </Link>
              </p>
              
              {/* Home Link */}
              <div className="pt-4 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackToHome}
                  className="gap-2 hover:bg-primary/10"
                >
                  <Home className="h-4 w-4" />
                  Return to Homepage
                </Button>
              </div>
              
              <p className="mt-2 text-xs text-muted-foreground">
                Contact administrator for new account registration
              </p>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-3 w-3" />
            <span>Protected by DashboardPro Security</span>
            <span>•</span>
            <span>v2.1.4</span>
          </div>
        </div>
      </div>

      {/* Add CSS animations in global styles or inline */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}