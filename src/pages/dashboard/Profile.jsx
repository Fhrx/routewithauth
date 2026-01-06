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
  Sparkles
} from "lucide-react"

export default function Profile() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [profileCompletion, setProfileCompletion] = useState(65)

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
      action: "Logged in successfully", 
      time: "2 minutes ago", 
      icon: <CheckCircle className="h-4 w-4 text-green-500" />
    },
    { 
      id: 2, 
      action: "Updated profile picture", 
      time: "1 hour ago", 
      icon: <User className="h-4 w-4 text-blue-500" />
    },
    { 
      id: 3, 
      action: "Changed security settings", 
      time: "3 hours ago", 
      icon: <Shield className="h-4 w-4 text-purple-500" />
    },
    { 
      id: 4, 
      action: "Exported dashboard data", 
      time: "Yesterday", 
      icon: <Download className="h-4 w-4 text-amber-500" />
    },
  ]

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account and preferences
          </p>
        </div>
        
        <Button 
          variant="outline" 
          className="gap-2" 
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? (
            <>
              <AlertCircle className="h-4 w-4" />
              Cancel
            </>
          ) : (
            <>
              <Edit3 className="h-4 w-4" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* LEFT SIDE - PROFILE INFO */}
        <div className="lg:col-span-1 space-y-6">
          {/* PROFILE CARD */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4 border-4 border-background">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} />
                  <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-purple-600">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
                
                <h2 className="text-xl font-bold">{user?.name}</h2>
                
                <div className="flex items-center gap-2 mt-2">
                  <Badge 
                    variant={user?.role === "admin" ? "destructive" : "secondary"}
                    className="gap-1"
                  >
                    {user?.role === "admin" ? <Shield className="h-3 w-3" /> : <User className="h-3 w-3" />}
                    {user?.role?.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    Pro
                  </Badge>
                </div>

                <div className="mt-6 space-y-3 w-full">
                  <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-muted/50">
                    <Mail className="h-4 w-4" />
                    <span className="text-muted-foreground">{user?.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-muted/50">
                    <Calendar className="h-4 w-4" />
                    <span className="text-muted-foreground">Member since Jan 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-muted/50">
                    <MapPin className="h-4 w-4" />
                    <span className="text-muted-foreground">Permata Regency</span>
                  </div>
                </div>
              </div>

              {/* PROFILE COMPLETION - SIMPLE VERSION */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Profile Completion</span>
                  <span className="text-sm text-muted-foreground">{profileCompletion}%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Add more details to complete your profile
                </p>
              </div>
            </CardContent>
          </Card>

          {/* QUICK STATS */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 dark:bg-blue-900/30 p-2">
                      <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm">Login Streak</span>
                  </div>
                  <span className="font-semibold text-green-600">7 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-purple-100 dark:bg-purple-900/30 p-2">
                      <Activity className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-sm">Total Sessions</span>
                  </div>
                  <span className="font-semibold">128</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-amber-100 dark:bg-amber-900/30 p-2">
                      <FileText className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="text-sm">Tasks Completed</span>
                  </div>
                  <span className="font-semibold">42</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE - EDIT & ACTIVITY */}
        <div className="lg:col-span-2 space-y-6">
          {/* EDIT PROFILE FORM */}
          {isEditing ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit3 className="h-4 w-4" />
                  Edit Profile
                </CardTitle>
                <CardDescription>
                  Update your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue={user?.name} />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input defaultValue="+62 851-8540-4925" />
                  </div>
                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Input defaultValue="Malang" />
                  </div>
                  <div className="space-y-2">
                    <Label>Department</Label>
                    <Input defaultValue="Engineering" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue={user?.email} disabled />
                  <p className="text-xs text-muted-foreground">
                    Contact admin to change email
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Bio</Label>
                  <Textarea 
                    placeholder="Tell something about yourself..."
                    defaultValue="Senior developer with 8+ years of experience in full-stack development."
                    rows={3}
                  />
                </div>

                <div className="flex gap-3">
                  <Button>Save Changes</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Your current profile details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Full Name</Label>
                      <p className="font-medium">{user?.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Phone</Label>
                      <p className="font-medium">+62 851-8540-4925</p>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Location</Label>
                      <p className="font-medium">Malang</p>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Department</Label>
                      <p className="font-medium">Engineering</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label className="text-sm text-muted-foreground">Bio</Label>
                    <p className="mt-1">
                      Senior developer with 8+ years of experience in full-stack development.
                      Passionate about creating scalable applications and mentoring junior developers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* ACTIVITY */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest account activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="mt-1">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}