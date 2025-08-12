
import { useMemo, useState } from "react";
import { Home, MapPin, Phone, Mail, Calendar, Star, BedDouble, Bath, CarFront, Ruler, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";

const CONTACT_EMAIL = "gwd978@gmail.com";

const listingsSeed = [
  { id: "135-nashboro-greens", address: "135 Nashboro Greens, Nashville, TN", price: 449900, beds: 3, baths: 2.5, cars: 2, sqft: 1820, image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop", tags: ["Sample","Move-in Ready"], listOfficeName: "Sample Brokerage" },
  { id: "east-nashville-bungalow", address: "914 Shelby Ave, Nashville, TN", price: 589000, beds: 3, baths: 2, cars: 1, sqft: 1640, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop", tags: ["Sample","Historic"], listOfficeName: "Sample Brokerage" },
  { id: "franklin-townhome", address: "207 Harpeth Way, Franklin, TN", price: 679000, beds: 4, baths: 3, cars: 2, sqft: 2205, image: "https://images.unsplash.com/photo-1600585154340-1e4b9f2c0b9b?q=80&w=1600&auto=format&fit=crop", tags: ["Sample","Great Schools"], listOfficeName: "Sample Brokerage" },
];

function formatPrice(n){ return n.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}); }
function bedsDisplay(l){ const b=Number(l.beds|| (l.property && l.property.bedrooms)||0); return b>0?b:0;}
function bathsDisplay(l){ const b=Number(l.baths); if(!Number.isNaN(b)&&b>0) return b%1===0?b:Number(b.toFixed(1)); const full=Number(l.property&&l.property.bathsFull||0); const half=Number(l.property&&l.property.bathsHalf||0); const total=full+(half?0.5:0); return total||0;}
function sqftDisplay(l){ const s=Number(l.sqft||(l.property&&l.property.area)||(l.property&&l.property.livingArea)||0); return s>0?s.toLocaleString():"0";}
function carDisplay(l){ const c=Number(l.cars||l.garageSpaces||l.garageSpacesTotal||0); return c>0?c:0;}
function courtesyOf(l){ return l.listOfficeName||l.ListOfficeName||l.officeName||l.ListAgentOfficeName||l.attribution||null;}

export default function RealEstateSite(){
  const listings = useMemo(()=>listingsSeed,[]);

  function handleContactSubmit(e){
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get("name")||"").toString();
    const email = (form.get("email")||"").toString();
    const phone = (form.get("phone")||"").toString();
    const message = (form.get("message")||"").toString();
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0B0B0C]/80 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/luxe-logo.png" alt="The Luxe Collective" className="h-10 w-10 rounded-full bg-white p-1 ring-1 ring-white/20"/>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">The Luxe Collective</p>
              <p className="text-xs text-slate-400">Nashville • Franklin • Middle TN</p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2400&auto=format&fit=crop" alt="Nashville skyline" className="h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#C9A24A]/30 bg-black/20 px-3 py-1 text-xs tracking-wide text-[#E8D7A9]">Nashville Real Estate</span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white">Buy & sell with confidence.<br/>Live where you love.</h1>
            <p className="mt-4 text-lg md:text-xl/relaxed text-slate-200/90 max-w-2xl">Smart strategy, clear communication, and negotiation that gets you to the closing table.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#mls" className="inline-flex items-center justify-center px-5 h-12 text-sm font-medium rounded-full bg-white text-black hover:bg-white/90 transition"><Home className="mr-2 h-4 w-4"/>Browse MLS</a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 h-12 text-sm font-medium rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 transition"><Calendar className="mr-2 h-4 w-4"/>Request a Consult</a>
            </div>
          </div>
        </div>
      </section>

      <section id="mls" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-serif">Sample Listings</h2>
            <Badge className="bg-yellow-600/80 text-white">Live MLS Search Coming Soon</Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <Card key={l.id} className="overflow-hidden rounded-2xl bg-[#111216] border-white/10 shadow-lg">
                <div className="relative aspect-[4/3]">
                  <img src={l.image} alt={l.address} className="absolute inset-0 h-full w-full object-cover"/>
                  <div className="absolute left-3 top-3 flex gap-2">
                    {l.tags.map((t) => (<Badge key={t} className="bg-black/70 text-[#E8D7A9] border-white/10 backdrop-blur">{t}</Badge>))}
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-white">{formatPrice(l.price)}</p>
                    <div className="flex items-center text-slate-300 text-sm"><MapPin className="h-4 w-4 mr-1"/>{l.address.split(",")[1]?.trim()}</div>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">{l.address}</p>
                  <div className="mt-4 grid grid-cols-4 gap-3 text-sm text-slate-300">
                    <div className="flex items-center gap-1"><BedDouble className="h-4 w-4"/>{bedsDisplay(l)} bd</div>
                    <div className="flex items-center gap-1"><Bath className="h-4 w-4"/>{bathsDisplay(l)} ba</div>
                    <div className="flex items-center gap-1"><CarFront className="h-4 w-4"/>{carDisplay(l)} car</div>
                    <div className="flex items-center gap-1"><Ruler className="h-4 w-4"/>{sqftDisplay(l)} sf</div>
                  </div>
                  {courtesyOf(l) && (<p className="mt-3 text-xs text-slate-400">Courtesy of {courtesyOf(l)}</p>)}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#C9A24A]/30 bg-white/5 px-3 py-1 text-xs tracking-wide text-[#E8D7A9]">About</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight font-serif text-white">Local expertise. Clear communication.</h2>
            <p className="mt-4 text-slate-300">Since 2017, Gerard Dow has helped buyers and sellers across Nashville and Franklin move with confidence. Backed by The Luxe Collective, you’ll get strategy, negotiation, and a smooth path from search to close.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card className="rounded-2xl bg-[#111216] border-white/10"><CardContent className="p-5"><p className="text-sm text-slate-400">Average Days on Market</p><p className="text-2xl font-semibold text-white"><span className="tabular-nums">12</span></p></CardContent></Card>
              <Card className="rounded-2xl bg-[#111216] border-white/10"><CardContent className="p-5"><p className="text-sm text-slate-400">Total Volume</p><p className="text-2xl font-semibold text-white">$25M+</p></CardContent></Card>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <img src="/gerard-headshot.jpg" alt="Gerard Dow" className="h-full w-full object-cover"/>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-[#0B0B0C] border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-serif">Clients say it best</h2>
            <a href="#contact" className="text-sm group inline-flex items-center gap-1 text-slate-300 hover:text-white">Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition"/></a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: "Gerard handled everything and kept us calm. Multiple offers in 48 hours.", name: "M. Carter" },
              { quote: "Our first offer won without overpaying—straightforward and responsive.", name: "A. Nguyen" },
              { quote: "Prepped, staged, and sold above list. Couldn’t be easier.", name: "The Thompsons" },
            ].map((r) => (
              <Card key={r.name} className="rounded-2xl bg-[#111216] border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3 text-[#C9A24A]" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
                  </div>
                  <p className="text-slate-200">“{r.quote}”</p>
                  <p className="mt-4 text-sm text-slate-400">— {r.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-serif">Let’s talk next steps</h2>
            <p className="mt-2 text-slate-300">Tell me a bit about your move. I’ll follow up to schedule a consult.</p>
            <form className="mt-6 grid gap-3" onSubmit={handleContactSubmit}>
              <Input required placeholder="Name" name="name"/>
              <Input required type="email" placeholder="Email" name="email"/>
              <Input placeholder="Phone" name="phone"/>
              <Textarea placeholder="What are you looking to do? (timing, budget, neighborhoods)" name="message"/>
              <button type="submit" className="inline-flex items-center justify-center px-5 h-11 text-sm font-medium rounded-full bg-white text-black hover:bg-white/90 transition">Send message</button>
            </form>
            <p className="mt-2 text-xs text-slate-400">This form opens your email client and pre-fills the message to {CONTACT_EMAIL}. We can switch to a server handler or Formspree later.</p>
          </div>
          <div className="md:col-span-2">
            <Card className="rounded-2xl h-full bg-[#111216] border-white/10">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight font-serif text-white">Contact</h3>
                  <div className="mt-4 space-y-2 text-sm text-slate-300">
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href="tel:6156092041" className="hover:underline">615-609-2041</a></p>
                    <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">{CONTACT_EMAIL}</a></p>
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> 3809 Cleghorn Ave, Nashville, TN</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mt-6">Brokerage: The Luxe Collective — Office: (xxx) xxx-xxxx • Listing Agent: Gerard Dow (978) 380-2289</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 bg-[#0B0B0C]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs leading-relaxed text-slate-400">
            <p>Listing information provided by participating brokers and sourced from Realtracs MLS. Information is deemed reliable but not guaranteed and should be independently verified. © Realtracs. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} The Luxe Collective. All rights reserved.</p>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <a href="#" className="hover:text-white">Privacy</a><span>•</span><a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
