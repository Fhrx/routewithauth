import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Mail,
  Shield,
  Edit3,
  Activity,
  Calendar,
  MapPin,
  Phone,
  Building,
  CheckCircle,
  Clock,
  Settings,
  Bell,
  Key,
  Eye,
  EyeOff,
  Download,
  MoreVertical,
  AlertCircle,
  TrendingUp,
  FileText,
  Zap,
  Sparkles,
  ArrowRight,
  X,
  Save,
  Crown,
  ShieldCheck,
  Users,
  BarChart,
  Award,
  Target,
  Star,
  Heart
} from "lucide-react"

export default function Profile() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileCompletion, setProfileCompletion] = useState(78)
  const [activeTab, setActiveTab] = useState("overview")

  // Get user initials
  const getUserInitials = () => {
    if (!user?.name) return "U"
    return user.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Mock recent activity
  const recentActivity = [
    { 
      id: 1, 
      action: "Logged in successfully from Chrome", 
      time: "2 minutes ago", 
      icon: <ShieldCheck className="h-4 w-4 text-green-500" />,
      type: "security"
    },
    { 
      id: 2, 
      action: "Updated profile picture", 
      time: "1 hour ago", 
      icon: <User className="h-4 w-4 text-blue-500" />,
      type: "profile"
    },
    { 
      id: 3, 
      action: "Changed security settings", 
      time: "3 hours ago", 
      icon: <Shield className="h-4 w-4 text-purple-500" />,
      type: "settings"
    },
    { 
      id: 4, 
      action: "Exported dashboard analytics", 
      time: "Yesterday", 
      icon: <Download className="h-4 w-4 text-amber-500" />,
      type: "data"
    },
  ]

  const skills = ["React", "TypeScript", "Node.js", "Tailwind CSS", "UI/UX"]
  const achievements = [
    { title: "Early Adopter", icon: <Sparkles className="h-4 w-4" /> },
    { title: "7 Day Streak", icon: <Zap className="h-4 w-4" /> },
    { title: "Profile Complete", icon: <CheckCircle className="h-4 w-4" /> },
    { title: "Top Contributor", icon: <Award className="h-4 w-4" /> },
  ]

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER WITH TABS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            My Profile
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your account, preferences, and activity
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant={isEditing ? "outline" : "default"}
            className="gap-2 group hover:scale-105 transition-transform"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <>
                <X className="h-4 w-4" />
                Cancel Editing
              </>
            ) : (
              <>
                <Edit3 className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Edit Profile
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* LEFT SIDE - PROFILE SUMMARY */}
        <div className="lg:col-span-1 space-y-6">
          {/* PROFILE CARD */}
          <Card className="overflow-hidden border-primary/10 group hover:shadow-lg transition-all duration-300">
            <div className="h-20 bg-gradient-to-r from-primary/10 to-primary/5" />
            <CardContent className="relative -top-10 px-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-purple-600">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 rounded-full bg-gradient-to-r from-primary to-purple-600 p-1.5 shadow-lg">
                    <Crown className="h-3 w-3 text-white" />
                  </div>
                </div>
                
                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">Senior Full Stack Developer</p>
                
                <div className="flex items-center gap-2 mt-4 flex-wrap justify-center">
                  <Badge 
                    className={`gap-1 px-3 py-1.5 ${
                      user?.role === "admin" 
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0" 
                        : "bg-gradient-to-r from-primary to-cyan-500 text-white border-0"
                    }`}
                  >
                    {user?.role === "admin" ? <Shield className="h-3 w-3" /> : <User className="h-3 w-3" />}
                    {user?.role?.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="gap-1 px-3 py-1.5">
                    <Sparkles className="h-3 w-3" />
                    Pro Member
                  </Badge>
                </div>

                <div className="mt-6 space-y-3 w-full">
                  <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all cursor-pointer group/item">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{user?.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-gradient-to-r from-blue-500/5 to-blue-500/10 hover:from-blue-500/10 hover:to-blue-500/15 transition-all cursor-pointer group/item">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">Member since Jan 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-gradient-to-r from-green-500/5 to-green-500/10 hover:from-green-500/10 hover:to-green-500/15 transition-all cursor-pointer group/item">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">Malang, Indonesia</span>
                  </div>
                </div>
              </div>

              {/* PROFILE COMPLETION */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Profile Completion</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{profileCompletion}%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Complete your profile to unlock all features
                </p>
                <Button variant="outline" size="sm" className="w-full mt-3 gap-2">
                  <Sparkles className="h-3 w-3" />
                  Complete Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* SKILLS */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                Skills & Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="gap-1 px-3 py-1.5 hover:bg-primary/10 transition-colors cursor-pointer"
                  >
                    <Heart className="h-3 w-3 text-primary" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE - MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* EDIT PROFILE FORM */}
          {isEditing ? (
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Edit3 className="h-4 w-4 text-primary" />
                  Edit Profile Information
                </CardTitle>
                <CardDescription>
                  Update your personal details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name
                    </Label>
                    <Input defaultValue={user?.name} className="h-11" />
                  </div>
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </Label>
                    <Input defaultValue="+62 851-8540-4925" className="h-11" />
                  </div>
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location
                    </Label>
                    <Input defaultValue="Malang, Indonesia" className="h-11" />
                  </div>
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Department
                    </Label>
                    <Input defaultValue="Engineering" className="h-11" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </Label>
                  <Input defaultValue={user?.email} disabled className="h-11" />
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Contact administrator to change email
                  </p>
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Bio
                  </Label>
                  <Textarea 
                    placeholder="Tell something about yourself..."
                    defaultValue="Senior developer with 8+ years of experience in full-stack development. Passionate about creating scalable applications and mentoring junior developers."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 inline mr-2 text-green-500" />
                    All changes are saved automatically
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setIsEditing(false)} className="gap-2">
                      <X className="h-4 w-4" />
                      Cancel
                    </Button>
                    <Button className="gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Your complete profile details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground flex items-center gap-2">
                      <User className="h-3 w-3" />
                      Full Name
                    </Label>
                    <p className="font-medium text-lg">{user?.name}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground flex items-center gap-2">
                      <Phone className="h-3 w-3" />
                      Phone Number
                    </Label>
                    <p className="font-medium text-lg">+62 851-8540-4925</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      Location
                    </Label>
                    <p className="font-medium text-lg">Malang, Indonesia</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground flex items-center gap-2">
                      <Building className="h-3 w-3" />
                      Department
                    </Label>
                    <p className="font-medium text-lg">Engineering</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Label className="text-sm text-muted-foreground flex items-center gap-2">
                    <FileText className="h-3 w-3" />
                    Bio
                  </Label>
                  <div className="rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-4 border border-primary/10">
                    <p className="leading-relaxed">
                      Senior developer with 8+ years of experience in full-stack development. 
                      Passionate about creating scalable applications and mentoring junior developers. 
                      Currently focused on modern web technologies and cloud architecture.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* RECENT ACTIVITY */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  Recent Activity
                </CardTitle>
                <Button variant="ghost" size="sm" className="gap-2">
                  View All
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
              <CardDescription>
                Your latest account activities and events
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentActivity.map((activity) => (
                  <div 
                    key={activity.id}
                    className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors group/item"
                  >
                    <div className={`rounded-lg p-2 ${
                      activity.type === 'security' ? 'bg-green-500/10' :
                      activity.type === 'profile' ? 'bg-blue-500/10' :
                      activity.type === 'settings' ? 'bg-purple-500/10' :
                      'bg-amber-500/10'
                    }`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {activity.time}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                    >
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* QUICK STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Login Streak</p>
                    <p className="text-2xl font-bold mt-1">7 days</p>
                  </div>
                  <div className="rounded-lg bg-green-500/10 p-2">
                    <Zap className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Sessions</p>
                    <p className="text-2xl font-bold mt-1">128</p>
                  </div>
                  <div className="rounded-lg bg-blue-500/10 p-2">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Tasks Done</p>
                    <p className="text-2xl font-bold mt-1">42</p>
                  </div>
                  <div className="rounded-lg bg-purple-500/10 p-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Performance</p>
                    <p className="text-2xl font-bold mt-1">94%</p>
                  </div>
                  <div className="rounded-lg bg-amber-500/10 p-2">
                    <BarChart className="h-5 w-5 text-amber-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CSS ANIMATIONS */}
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
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}