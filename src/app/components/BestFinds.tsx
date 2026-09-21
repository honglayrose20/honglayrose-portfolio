import { ArrowLeft, ExternalLink, Package, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';

type Marketplace = 'Shopee' | 'TikTok Shop' | 'Lazada';

type Find = {
  name: string;
  category: string;
  marketplace: Marketplace;
  description: string;
  image?: string;
  link?: string;
  accent: string;
};

const finds: Find[] = [
  {
    name: 'BOOX Go 7 E-Ink Device',
    category: 'Tech',
    marketplace: 'Shopee',
    description: 'A paper-light white e-ink reader with a minimalist design, clear display, local warranty, and free shipping.',
    image: 'https://down-th.img.susercontent.com/file/th-11134208-7ras8-ma3yh7ahzgww38',
    link: 'https://s.shopee.ph/4fwOEM4vhx',
    accent: 'from-stone-100 via-white to-orange-50',
  },
  {
    name: 'A useful everyday essential',
    category: 'Everyday',
    marketplace: 'TikTok Shop',
    description: 'A placeholder for the products that make daily routines easier, calmer, or more enjoyable.',
    accent: 'from-yellow-100 via-orange-50 to-white',
  },
  {
    name: 'A thoughtful little upgrade',
    category: 'Lifestyle',
    marketplace: 'Lazada',
    description: 'Use this space for the small discoveries worth sharing with friends and fellow shoppers.',
    accent: 'from-amber-100 via-yellow-50 to-white',
  },
];

const marketplaces: Array<'All' | Marketplace> = ['All', 'Shopee', 'TikTok Shop', 'Lazada'];
const categories = ['All', 'Home', 'Beauty', 'Tech', 'Travel', 'Lifestyle', 'Fashion'];

export function BestFinds() {
  const navigate = useNavigate();
  const [activeMarketplace, setActiveMarketplace] = useState<'All' | Marketplace>('All');
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleFinds = finds.filter((find) => {
    const marketplaceMatches = activeMarketplace === 'All' || find.marketplace === activeMarketplace;
    const categoryMatches = activeCategory === 'All' || find.category === activeCategory;
    return marketplaceMatches && categoryMatches;
  });

  return (
    <div className="min-h-screen bg-[#f8f0e7] text-gray-900">
      <div className="sticky top-0 z-50 border-b border-orange-100/80 bg-[#fffaf5]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="h-9 rounded-full border-orange-200 bg-white/80 text-orange-600 hover:bg-orange-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="hidden sm:inline">Honglay Rose Lim</span>
            <button type="button" aria-label="Search finds" className="ml-2 rounded-full bg-white p-2 text-gray-700 shadow-sm sm:hidden">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <section className="relative overflow-hidden pb-7 pt-10 sm:pb-10 sm:pt-16">
          <div className="relative z-10 max-w-xl">
            <p className="mb-1 font-serif text-3xl italic text-orange-700/80">My</p>
            <h1 className="text-5xl font-bold leading-none tracking-tight text-gray-950 sm:text-7xl">
              Best Finds
            </h1>
            <p className="mt-4 max-w-md text-base leading-snug text-gray-600 sm:text-lg">
              Things I bought, use, and genuinely love.<br />
              From Shopee, Lazada, and TikTok Shop.
            </p>
          </div>
          <div className="pointer-events-none absolute -right-24 top-10 hidden h-44 w-64 rotate-[-12deg] rounded-[45%] bg-orange-200/40 sm:block" />
        </section>

        <section aria-label="Filter by marketplace" className="mb-4 flex gap-2 overflow-x-auto pb-1">
          {marketplaces.map((marketplace) => (
            <button
              key={marketplace}
              type="button"
              onClick={() => setActiveMarketplace(marketplace)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeMarketplace === marketplace
                  ? 'border-orange-500 bg-orange-500 text-white shadow-sm'
                  : 'border-transparent bg-white/80 text-gray-700 hover:border-orange-200 hover:text-orange-600'
              }`}
            >
              {marketplace !== 'All' && <span className={`h-4 w-4 rounded-sm ${marketplace === 'Shopee' ? 'bg-orange-500' : marketplace === 'Lazada' ? 'bg-fuchsia-500' : 'bg-gray-950'}`} />}
              {marketplace}
            </button>
          ))}
        </section>

        <section aria-label="Filter by category" className="mb-7 flex gap-2 overflow-x-auto border-b border-orange-100 pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? 'border border-orange-500 bg-orange-50 text-orange-700'
                  : 'bg-white/60 text-gray-600 hover:bg-white'
              }`}
            >
              {category}
            </button>
          ))}
        </section>

        <section className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3" aria-label="Best finds">
          {visibleFinds.map((find) => (
            <article key={find.name} className="overflow-hidden rounded-2xl border border-orange-100/80 bg-[#fffdf9] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl">
              <div className={`relative flex aspect-[1.15] items-center justify-center bg-gradient-to-br ${find.accent}`}>
                {find.image ? (
                  <img src={find.image} alt={find.name} className="h-full w-full object-cover" />
                ) : (
                  <Package className="h-12 w-12 text-orange-500/50 sm:h-16 sm:w-16" strokeWidth={1.2} />
                )}
              </div>

              <div className="flex min-h-44 flex-col p-3 sm:min-h-64 sm:p-5">
                <div className="mb-1.5 flex items-start justify-between gap-2 sm:mb-3">
                  <h2 className="text-sm font-bold leading-tight text-gray-950 sm:text-xl">{find.name}</h2>
                </div>
                <div className="mb-2 flex flex-wrap gap-1.5 sm:mb-3">
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-orange-700 sm:text-xs">
                    {find.marketplace}
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-600 sm:text-xs">
                    {find.category}
                  </span>
                </div>
                <p className="mb-3 flex-1 text-xs leading-snug text-gray-600 sm:mb-5 sm:text-sm sm:leading-relaxed">{find.description}</p>
                {find.link && (
                  <Button
                    asChild
                    size="sm"
                    className="h-9 w-full rounded-full bg-orange-500 text-xs font-semibold text-white shadow-sm hover:bg-orange-600 sm:h-10 sm:text-sm"
                  >
                    <a href={find.link} target="_blank" rel="noreferrer">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Buy on Shopee
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-3xl bg-orange-500 px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-100">A personal list</p>
              <h2 className="text-2xl font-bold sm:text-3xl">Only things worth sharing.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-orange-100">
              Product links and prices will be added as each find is tested and ready to recommend.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-orange-100 px-4 py-8 text-center text-sm text-gray-500 sm:px-6">
        © {new Date().getFullYear()} Honglay Rose Lim. All rights reserved.
      </footer>
    </div>
  );
}
