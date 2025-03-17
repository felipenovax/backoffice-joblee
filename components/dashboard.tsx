"use client"

import { useState } from "react"
import {
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  HelpCircle,
  LayoutDashboard,
  Menu,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from "@/components/revenue-chart"
import { ServicesChart } from "@/components/services-chart"
import { RecentSales } from "@/components/recent-sales"
import { DataTable } from "@/components/data-table"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:max-w-xs">
            <nav className="grid gap-2 text-lg font-medium">
              <Link href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-primary hover:bg-muted">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <ShoppingCart className="h-5 w-5" />
                Services
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <Users className="h-5 w-5" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <Package className="h-5 w-5" />
                Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <CreditCard className="h-5 w-5" />
                Billing
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <LayoutDashboard className="h-6 w-6" />
          <span className="text-lg font-semibold">Admin Dashboard</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <form className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-64 rounded-lg bg-background pl-8 md:w-80" />
            </div>
          </form>
          <Button variant="outline" size="icon" className="rounded-full">
            <HelpCircle className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Help</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <span className="sr-only">Settings</span>
            <Settings className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <span className="sr-only">Notifications</span>
            <div className="relative">
              <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary"></div>
              <Calendar className="h-[1.2rem] w-[1.2rem]" />
            </div>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="Avatar"
              className="rounded-full"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-1">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <ShoppingCart className="h-5 w-5" />
                Services
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <Users className="h-5 w-5" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <Package className="h-5 w-5" />
                Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <CreditCard className="h-5 w-5" />
                Billing
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            <Button size="sm" className="ml-auto gap-1">
              <Download className="h-4 w-4" />
              Download Reports
            </Button>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Services Hired</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">+12.4% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,324</div>
                    <p className="text-xs text-muted-foreground">+8.2% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Service Value</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$78.92</div>
                    <p className="text-xs text-muted-foreground">+4.5% from last month</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Monthly revenue breakdown for the current year</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <RevenueChart />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Services Breakdown</CardTitle>
                    <CardDescription>Distribution of services hired this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ServicesChart />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>You made 265 sales this month.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Top Services</CardTitle>
                    <CardDescription>Most popular services this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-full flex-1">
                          <div className="flex items-center justify-between">
                            <div>Premium Consultation</div>
                            <div className="font-medium">$299</div>
                          </div>
                          <div className="mt-1 w-full rounded-full bg-muted">
                            <div className="h-2 w-[85%] rounded-full bg-primary"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-full flex-1">
                          <div className="flex items-center justify-between">
                            <div>Basic Support</div>
                            <div className="font-medium">$99</div>
                          </div>
                          <div className="mt-1 w-full rounded-full bg-muted">
                            <div className="h-2 w-[65%] rounded-full bg-primary"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-full flex-1">
                          <div className="flex items-center justify-between">
                            <div>Advanced Analytics</div>
                            <div className="font-medium">$199</div>
                          </div>
                          <div className="mt-1 w-full rounded-full bg-muted">
                            <div className="h-2 w-[45%] rounded-full bg-primary"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-full flex-1">
                          <div className="flex items-center justify-between">
                            <div>Custom Development</div>
                            <div className="font-medium">$499</div>
                          </div>
                          <div className="mt-1 w-full rounded-full bg-muted">
                            <div className="h-2 w-[35%] rounded-full bg-primary"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-full flex-1">
                          <div className="flex items-center justify-between">
                            <div>Maintenance Plan</div>
                            <div className="font-medium">$149</div>
                          </div>
                          <div className="mt-1 w-full rounded-full bg-muted">
                            <div className="h-2 w-[25%] rounded-full bg-primary"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Services
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Detailed view of recent service purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <DataTable />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Previous</Button>
                  <Button variant="outline">Next</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

