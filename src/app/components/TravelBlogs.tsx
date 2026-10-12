import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight, MapPin } from 'lucide-react';
import singaporeUniversal from '../../imports/singapore-universal.png';
import singaporeCity from '../../imports/singapore-city.png';
import japanSnow from '../../imports/japan-snow.png';
import japanCity from '../../imports/japan-city.png';
import japanStory from './japan2023.json';

const sections = [
  {
    title: '🌏 Hello, Singapore!',
    paragraphs: [
      'One of the things I loved about Singapore was how clean, organized, and convenient everything was. Despite being a busy city, getting around felt easy, especially with its public transportation system.',
      'Walking around the city was already an experience in itself. The modern buildings, beautiful streets, and little corners made us appreciate Singapore even more.',
    ],
  },
  {
    title: '🎢 Universal Studios Singapore',
    photo: singaporeUniversal,
    caption: 'With Kevin at the Universal Studios globe on Sentosa Island, Singapore, 2022.',
    paragraphs: [
      "Of course, a trip to Singapore wouldn't feel complete without visiting Universal Studios Singapore!",
      "One of our memorable stops was the famous Universal Studios globe on Sentosa Island. We couldn't miss taking a photo in front of this iconic landmark.",
      "Looking at our photo now makes me smile. It's a simple reminder of how much I love traveling, especially when I get to share these experiences with someone special.",
      "Sometimes, it's not just about the places we visit but also about the person we're experiencing them with. ❤️",
    ],
  },
  {
    title: '🏙️ Exploring the City',
    photo: singaporeCity,
    caption: 'Exploring Bras Basah Road and Lazada One in Singapore, 2022.',
    paragraphs: [
      'Another part of our Singapore adventure was exploring the city itself.',
      'We passed by Bras Basah Road and the Bugis area, where we saw the Lazada One building and experienced a different side of Singapore beyond its tourist attractions.',
      "I personally enjoy exploring cities, observing their architecture, walking along unfamiliar streets, and discovering places that aren't necessarily part of a planned itinerary.",
      "Even ordinary streets can become memorable when you're visiting a new country.",
    ],
  },
  {
    title: '❤️ Little Moments, Big Memories',
    paragraphs: [
      "One thing I've realized from traveling is that you don't always need a perfectly planned itinerary to enjoy a destination.",
      'Sometimes, the best memories come from simply walking around, taking random photos, laughing together, and enjoying the moment.',
      'Our Singapore trip in 2022 was another beautiful chapter in our travel adventures.',
      'And while the years continue to pass and our list of visited countries keeps growing, these little memories will always have a special place in my heart.',
    ],
  },
  {
    title: '✈️ Until Our Next Adventure!',
    paragraphs: [
      'Singapore will always be part of our travel story.',
      'Every destination teaches us something new, gives us another experience to remember, and reminds us how beautiful the world is beyond our everyday routines.',
      "Here's to more adventures, more countries to explore, and more memories together!",
    ],
  },
];

function TravelHeader() {
  return <header className="border-b border-burgundy-100 bg-white/95 px-6 py-4"><div className="max-w-4xl mx-auto"><Link to="/personal" className="inline-flex items-center gap-2 text-sm font-medium text-burgundy-600"><ArrowLeft className="w-4 h-4" />Back to Personal</Link></div></header>;
}

export function TravelBlogs() {
  return (
    <div className="min-h-screen bg-[#f0ece6]">
      <TravelHeader />
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-burgundy-600">Travel Diaries</p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900">Adventures & Places</h1>
        <p className="mt-4 text-gray-600">Little adventures, shared moments, and memories collected along the way.</p>
        <Link to="/travel-blogs/japan-2023" className="mt-10 block rounded-3xl border border-burgundy-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
          <img src={japanSnow} alt="Honglay Rose enjoying the snow in Japan" className="mb-6 w-full max-h-96 rounded-2xl object-cover object-[center_65%]" />
          <p className="flex items-center gap-2 text-sm text-burgundy-600"><MapPin className="w-4 h-4" />Japan · 2023</p>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">{japanStory[0]}</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{japanStory[3]}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-burgundy-600 font-semibold">Read our story<ArrowUpRight className="w-4 h-4" /></span>
        </Link>
        <Link to="/travel-blogs/singapore-2022" className="mt-10 block rounded-3xl border border-burgundy-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
          <img src={singaporeUniversal} alt="Honglay Rose and Kevin at Universal Studios Singapore" className="mb-6 w-full max-h-96 rounded-2xl object-cover object-[center_65%]" />
          <p className="flex items-center gap-2 text-sm text-burgundy-600"><MapPin className="w-4 h-4" />Singapore · 2022</p>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">🇸🇬 Singapore 2022: A Little Adventure in the Lion City</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">Exploring new places, making memories, and enjoying every little moment together.</p>
          <span className="mt-6 inline-flex items-center gap-2 text-burgundy-600 font-semibold">Read our story<ArrowUpRight className="w-4 h-4" /></span>
        </Link>
      </main>
    </div>
  );
}

export function Singapore2022() {
  return (
    <div className="min-h-screen bg-[#f0ece6]">
      <TravelHeader />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Link to="/travel-blogs" className="text-sm text-burgundy-600">← All travel diaries</Link>
        <article className="mt-6 rounded-3xl bg-white overflow-hidden shadow-sm">
          <header className="bg-gradient-to-br from-burgundy-500 to-burgundy-700 px-6 sm:px-10 py-12 text-white">
            <p className="text-sm text-white/80">Travel Diaries | Singapore, 2022</p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">🇸🇬 Singapore 2022: A Little Adventure in the Lion City</h1>
            <p className="mt-5 italic text-white/90">Exploring new places, making memories, and enjoying every little moment together.</p>
          </header>
          <div className="px-6 sm:px-10 py-10 text-gray-700 leading-relaxed space-y-6">
            <p>Singapore was one of our travel destinations in 2022, and looking back, it was such a lovely experience! From its beautiful city streets to its famous attractions, everything felt exciting.</p>
            <p>It was another adventure with Kevin, discovering new places together and creating memories that we can look back on years later. ❤️</p>
            {sections.map((section) => (
              <section key={section.title} className="pt-6 space-y-4">
                <h2 className="text-2xl font-bold text-burgundy-600">{section.title}</h2>
                {section.photo && (
                  <figure className="py-2">
                    <img src={section.photo} alt={section.caption} loading="lazy" className="w-full h-auto rounded-2xl" />
                    <figcaption className="mt-3 text-sm text-gray-500">{section.caption}</figcaption>
                  </figure>
                )}
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <p className="rounded-2xl bg-burgundy-50 p-6 font-semibold text-burgundy-600">Singapore, 2022 — another country explored, another memory collected. 🇸🇬❤️</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export function Japan2023() {
  return (
    <div className="min-h-screen bg-[#f0ece6]">
      <TravelHeader />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Link to="/travel-blogs" className="text-sm text-burgundy-600">← All travel diaries</Link>
        <article className="mt-6 rounded-3xl bg-white overflow-hidden shadow-sm">
          <header className="bg-gradient-to-br from-burgundy-500 to-burgundy-700 px-6 sm:px-10 py-12 text-white">
            <p className="text-sm text-white/80">{japanStory[1]}</p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">{japanStory[0]}</h1>
            <p className="mt-4 text-sm text-white/80">{japanStory[2]}</p>
            <p className="mt-5 italic text-white/90">{japanStory[3]}</p>
          </header>
          <div className="px-6 sm:px-10 py-10 text-gray-700 leading-relaxed space-y-5">
            {japanStory.slice(4).map((line, index) => {
              const heading = /^(❄️|🏙️|🏰|🗻|⛄|🚄|❤️|✈️)/u.test(line);
              const photo = line.startsWith('🏙️') ? japanCity : line.startsWith('⛄') ? japanSnow : null;
              const caption = line.startsWith('🏙️') ? 'Shibuya Crossing at night, Tokyo, 2023.' : 'Our first snow adventure at GALA Yuzawa, Japan, 2023.';
              return heading ? (
                <div key={index} className="pt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-burgundy-600">{line}</h2>
                  {photo && <figure><img src={photo} alt={caption} loading="lazy" className="w-full h-auto rounded-2xl" /><figcaption className="mt-3 text-sm text-gray-500">{caption}</figcaption></figure>}
                </div>
              ) : <p key={index} className={index === japanStory.length - 5 ? 'rounded-2xl bg-burgundy-50 p-6 font-semibold text-burgundy-600' : undefined}>{line}</p>;
            })}
          </div>
        </article>
      </main>
    </div>
  );
}
