import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5">
        <h1 className="text-xl font-bold">React Auth Dashboard</h1>

        <Link to="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </header>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Simple Auth Dashboard <br />
          for Modern Web Apps
        </h2>

        <p className="mt-4 max-w-xl text-muted-foreground">
          A modern authentication dashboard built with React, Tailwind CSS,
          role-based access control, and clean UI for admin & user.
        </p>

        <div className="mt-8">
          <Link to="/login">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} React Auth Dashboard - PKL Project
      </footer>
    </div>
  );
}