import { useAuth } from "@/context/AuthContext"

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
} from "lucide-react"

export default function Profile() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-muted-foreground mt-1">
          Manage your personal information
        </p>
      </div>

      {/* PROFILE SUMMARY */}
      <Card>
        <CardContent className="flex flex-col items-center gap-4 py-6 md:flex-row md:items-start">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://i.pravatar.cc/150" />
            <AvatarFallback>
              {user?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">{user?.name}</h2>
            <p className="text-muted-foreground flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {user?.email}
            </p>

            <div className="mt-2 flex justify-center gap-2 md:justify-start">
              <Badge variant="secondary">
                <User className="mr-1 h-3 w-3" />
                {user?.role}
              </Badge>

              {user?.role === "admin" && (
                <Badge variant="destructive">
                  <Shield className="mr-1 h-3 w-3" />
                  Admin
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* EDIT PROFILE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Edit3 className="h-5 w-5" />
            Edit Profile
          </CardTitle>
          <CardDescription>
            Update your personal details
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Full Name</Label>
              <Input defaultValue={user?.name} />
            </div>

            <div>
              <Label>Email</Label>
              <Input defaultValue={user?.email} disabled />
            </div>
          </div>

          <div>
            <Label>Bio</Label>
            <Textarea placeholder="Tell something about yourself..." />
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* ACTIVITY */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Activity
          </CardTitle>
          <CardDescription>
            Your latest account activities
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 text-sm">
          <p>✔ Logged in successfully</p>
          <p>✔ Updated profile information</p>
          <p>✔ Accessed dashboard overview</p>
        </CardContent>
      </Card>
    </div>
  )
}