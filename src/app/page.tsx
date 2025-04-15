import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  CheckCircle, 
  Mail, 
  ArrowRight, 
  Clock, 
  UserCheck, 
  PersonStanding, 
  BrainCircuit, 
  Menu, 
  X,
  Search,
  KeyRound,
  Building,
  Ticket,
  CheckCircle2
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Curait</span>
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="#features" className="font-medium">Features</Link>
                <Link href="#how-it-works" className="font-medium">How It Works</Link>
                <Button className="mt-4" asChild>
                  <Link href="https://airtable.com/appDUcI2gOf3clh3q/shrOUL2KJuAk8bKVK" target="_blank" rel="noopener noreferrer">Join Waitlist</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="font-medium hover:text-primary">Features</Link>
            <Link href="#how-it-works" className="font-medium hover:text-primary">How It Works</Link>
            <Button asChild>
              <Link href="https://airtable.com/appDUcI2gOf3clh3q/shrOUL2KJuAk8bKVK" target="_blank" rel="noopener noreferrer">Join Waitlist</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="w-full">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden w-full">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10 opacity-5">
            <div className="absolute top-20 left-1/3 w-72 h-72 rounded-full bg-primary/30 blur-3xl"></div>
            <div className="absolute bottom-20 right-1/3 w-72 h-72 rounded-full bg-primary/30 blur-3xl"></div>
          </div>
          
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <span className="font-medium">Beta Coming Soon</span> 
                <span className="text-muted-foreground"> · Join our waitlist today</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-3xl">
                Never Miss an Event in <span className="text-primary">San Francisco</span> Again
              </h1>
              
              <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground">
                Your personal AI agent that curates, registers, and manages events across Luma, Partiful, Eventbrite, and more—all in one place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8" asChild>
                  <Link href="https://airtable.com/appDUcI2gOf3clh3q/shrOUL2KJuAk8bKVK" target="_blank" rel="noopener noreferrer">Join the Waitlist</Link>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <Link href="#how-it-works">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              
              {/* Platform Logos */}
              <div className="mt-12 sm:mt-16 w-full">
                <p className="text-sm font-medium text-muted-foreground mb-6 sm:mb-8">Works with all major event platforms</p>
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                  <div className="flex items-center justify-center p-2">
                    <Image 
                      src="/luma.png" 
                      alt="LUMA" 
                      width={140} 
                      height={50} 
                      className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-black p-2 sm:p-3 rounded-lg">
                    <Image 
                      src="/partiful.png" 
                      alt="Partiful" 
                      width={140} 
                      height={50} 
                      className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center p-2">
                    <Image 
                      src="/eventbrite.png" 
                      alt="Eventbrite" 
                      width={140} 
                      height={50} 
                      className="h-7 sm:h-8 md:h-10 w-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-black p-2 sm:p-3 rounded-lg">
                    <Image 
                      src="/cb.png" 
                      alt="Cerebral Valley" 
                      width={140} 
                      height={50} 
                      className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Connect Flow Section (new section) */}
        <section className="py-16 md:py-24 bg-muted/30 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Connect Once, Access Everything
              </h2>
              <p className="text-muted-foreground max-w-[700px]">
                Setting up Curait is as simple as connecting once to your favorite event platforms
              </p>
            </div>
            
            {/* Phone mockups with connection flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
              {/* Step 1: Select Platform */}
              <div className="relative mx-auto border border-muted rounded-[40px] shadow-lg p-2 bg-background w-[280px] h-[580px] sm:w-[250px] sm:h-[520px] md:w-[280px] md:h-[580px]">
                <div className="relative bg-muted rounded-[32px] w-full h-full overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between px-6 h-12 items-center bg-background/90">
                    <span className="text-xs font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4"><svg viewBox="0 0 24 24" className="w-full h-full"><path fill="currentColor" d="M12 20.9l4.95-4.95-1.414-1.414L12 18.072l-3.536-3.536-1.414 1.414z"></path></svg></div>
                      <div className="w-4 h-4"><svg viewBox="0 0 24 24" className="w-full h-full"><path fill="currentColor" d="M12 20.9l4.95-4.95-1.414-1.414L12 18.072l-3.536-3.536-1.414 1.414z"></path></svg></div>
                      <div className="w-6 h-3 bg-foreground rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <button className="p-2">
                        <ArrowRight className="w-5 h-5 rotate-180" />
                      </button>
                      <div className="flex items-center gap-1 font-medium">
                        <Ticket className="w-5 h-5 text-primary" />
                        <span className="text-lg">Curait</span>
                      </div>
                      <button className="p-2">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-6">Select your platform</h3>
                    
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <Input className="pl-9" placeholder="Search for event platforms" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {/* Platform buttons */}
                      <div className="border rounded-md p-3 flex flex-col items-center justify-center gap-2 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="font-medium text-sm">LUMA</div>
                      </div>
                      <div className="border rounded-md p-3 flex flex-col items-center justify-center gap-2 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="font-medium text-sm">Partiful</div>
                      </div>
                      <div className="border rounded-md p-3 flex flex-col items-center justify-center gap-2 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="font-medium text-sm">Eventbrite</div>
                      </div>
                      <div className="border rounded-md p-3 flex flex-col items-center justify-center gap-2 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="font-medium text-sm">Meetup</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone home indicator */}
                  <div className="h-1 w-20 bg-foreground/20 rounded-full mx-auto mb-2"></div>
                </div>
              </div>
              
              {/* Step 2: Enter Credentials */}
              <div className="relative mx-auto border border-muted rounded-[40px] shadow-lg p-2 bg-background w-[280px] h-[580px] sm:w-[250px] sm:h-[520px] md:w-[280px] md:h-[580px]">
                <div className="relative bg-muted rounded-[32px] w-full h-full overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between px-6 h-12 items-center bg-background/90">
                    <span className="text-xs font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4"><svg viewBox="0 0 24 24" className="w-full h-full"><path fill="currentColor" d="M12 20.9l4.95-4.95-1.414-1.414L12 18.072l-3.536-3.536-1.414 1.414z"></path></svg></div>
                      <div className="w-4 h-4"><svg viewBox="0 0 24 24" className="w-full h-full"><path fill="currentColor" d="M12 20.9l4.95-4.95-1.414-1.414L12 18.072l-3.536-3.536-1.414 1.414z"></path></svg></div>
                      <div className="w-6 h-3 bg-foreground rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <button className="p-2">
                        <ArrowRight className="w-5 h-5 rotate-180" />
                      </button>
                      <div className="flex items-center gap-1 font-medium">
                        <Ticket className="w-5 h-5 text-primary" />
                        <span className="text-lg">Curait</span>
                      </div>
                      <button className="p-2">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Enter your credentials</h3>
                    </div>
                    
                    <p className="text-sm text-center text-muted-foreground mb-6">
                      By providing your LUMA credentials to Curait, you're enabling our AI to register for events on your behalf.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Input placeholder="Username" defaultValue="user_events" />
                        <div className="text-xs text-right text-muted-foreground">Username</div>
                      </div>
                      <div className="space-y-2">
                        <Input type="password" placeholder="Password" defaultValue="••••••••••••••" />
                        <div className="text-xs text-right text-muted-foreground">Password</div>
                      </div>
                      <Button className="w-full">Connect</Button>
                      <button className="text-sm text-center w-full text-muted-foreground hover:underline">
                        Reset Password
                      </button>
                    </div>
                  </div>
                  
                  {/* Phone home indicator */}
                  <div className="h-1 w-20 bg-foreground/20 rounded-full mx-auto mb-2"></div>
                </div>
              </div>
              
              {/* Step 3: Success */}
              <div className="relative mx-auto border border-muted rounded-[40px] shadow-lg p-2 bg-background w-[280px] h-[580px] sm:w-[250px] sm:h-[520px] md:w-[280px] md:h-[580px] sm:col-span-2 md:col-span-1 sm:mt-8 md:mt-0">
                <div className="relative bg-muted rounded-[32px] w-full h-full overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between px-6 h-12 items-center bg-background/90">
                    <span className="text-xs font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4"><svg viewBox="0 0 24 24" className="w-full h-full"><path fill="currentColor" d="M12 20.9l4.95-4.95-1.414-1.414L12 18.072l-3.536-3.536-1.414 1.414z"></path></svg></div>
                      <div className="w-4 h-4"><svg viewBox="0 0 24 24" className="w-full h-full"><path fill="currentColor" d="M12 20.9l4.95-4.95-1.414-1.414L12 18.072l-3.536-3.536-1.414 1.414z"></path></svg></div>
                      <div className="w-6 h-3 bg-foreground rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="flex-1 p-6 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">Success!</h3>
                    <p className="text-center text-muted-foreground mb-8">
                      Your account was successfully connected to Luma. Curait can now sign you up for events.
                    </p>
                    
                    <Button className="w-full">Continue</Button>
                  </div>
                  
                  {/* Phone home indicator */}
                  <div className="h-1 w-20 bg-foreground/20 rounded-full mx-auto mb-2"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center max-w-lg mx-auto">
              <p className="text-muted-foreground">
                Connect once to each platform and let our curaitor agent handle the rest. No more repeatedly filling out the same information for every event.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Features</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Discover how Curait simplifies your event attendance experience in San Francisco
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Unified Event Platform</CardTitle>
                  <CardDescription>
                    Access events from Luma, Partiful, Eventbrite, Cerebral Valley, and Meetup in one place.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Save time browsing multiple platforms with our AI-curated event recommendations based on your preferences.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CheckCircle className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Automatic Event Registration</CardTitle>
                  <CardDescription>
                    Skip the repetitive signup forms across different platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our AI agent handles registration automatically, filling in your information consistently across all platforms.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BrainCircuit className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Intelligent Response Inference</CardTitle>
                  <CardDescription>
                    Let the AI handle uncommon signup questions intelligently.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our agent infers appropriate responses based on your past preferences and context, ensuring you never miss an opportunity.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Calendar Integration</CardTitle>
                  <CardDescription>
                    Automatically create itineraries in your calendar app of choice.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Never double-book or forget an event with seamless Google Calendar and other calendar app integrations.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Mail className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Email Monitoring</CardTitle>
                  <CardDescription>
                    Stay updated on your event applications status.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>The agent monitors your email for acceptances, rejections, and updates, keeping you informed in real-time.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <UserCheck className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Personalized Experience</CardTitle>
                  <CardDescription>
                    Get recommendations that match your interests.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>The more you use Curait, the better it understands your preferences, delivering increasingly personalized event suggestions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How It Works</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Setting up CurAIt is simple and takes just minutes to start managing your events
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <PersonStanding className="h-8 w-8 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Initial Setup</h3>
                <p className="text-muted-foreground">
                  Provide your basic information that's commonly required for event registrations (name, email, job title, etc.)
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Select Your Preferences</h3>
                <p className="text-muted-foreground">
                  Choose the types of events you're interested in and your availability preferences
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sit Back and Relax</h3>
                <p className="text-muted-foreground">
                  The AI agent takes care of finding events, registering you, and updating your calendar automatically
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section - Enhanced */}
        <section id="waitlist" className="relative py-20 overflow-hidden w-full">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>
          
          <div className="container max-w-screen-xl mx-auto relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-[500px] md:max-w-[600px] mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-primary-foreground">Join Our Waitlist</h2>
              <p className="text-sm sm:text-base text-primary-foreground/90">
                Be the first to experience the future of event management in San Francisco. Sign up to get early access.
              </p>
              <div className="flex w-full max-w-[280px] sm:max-w-sm flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground text-foreground w-full"
                />
                <Button variant="secondary" size="lg" className="w-full sm:w-auto whitespace-nowrap" asChild>
                  <Link href="https://airtable.com/appDUcI2gOf3clh3q/shrOUL2KJuAk8bKVK" target="_blank" rel="noopener noreferrer">
                    Join Now
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/70 mt-1 sm:mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16 bg-muted/30 w-full">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">CurAIt</span>
              </div>
              <p className="text-muted-foreground max-w-[300px]">
                Your personal AI agent for navigating San Francisco's event scene with ease.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div className="space-y-3">
                <h4 className="font-medium">Product</h4>
                <ul className="space-y-2">
                  <li><Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                  <li><Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Curait. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
