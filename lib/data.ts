export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  bullets: string[];
  specs: { label: string; value: string }[];
  icon: 'tint' | 'ppf' | 'ceramic' | 'wrap' | 'home' | 'commercial' | 'detailing' | 'removal' | 'headlight' | 'headlighttint';
  image?: string;
};

export const services: Service[] = [
  {
    slug: 'window-tint',
    title: 'Window Tint',
    shortTitle: 'Tint',
    description:
      'Precision-cut ceramic window film that blocks up to 99% of UV rays and heat — without sacrificing visibility or voiding your factory warranty.',
    longDescription:
      "Every tint job starts with a computer-cut pattern matched to your exact vehicle — no hand-trimming, no razor marks on your door panels. We run ceramic IR-blocking film exclusively, which rejects heat without the signal interference or fading you get from dyed or metallic film. Installed in our dust-controlled bay, so what you drive away with is bubble-free and edge-to-edge clean.",
    bullets: ['Ceramic IR-blocking film', 'Lifetime warranty available', 'Legal-compliance shade options'],
    specs: [
      { label: 'VLT Range', value: '5-70%' },
      { label: 'UV Rejection', value: '99%' },
      { label: 'IR Heat Rejection', value: 'up to 96%' },
      { label: 'Cure Time', value: '3-5 days' },
      { label: 'Warranty', value: 'Lifetime' },
    ],
    icon: 'tint',
  },
  {
    slug: 'paint-protection-film',
    title: 'Paint Protection Film',
    shortTitle: 'PPF',
    description:
      'Self-healing, virtually invisible film engineered to absorb rock chips, road debris, and scratches — keeping your paint showroom-fresh for years.',
    longDescription:
      "PPF is the difference between a car that still looks new at 60,000 miles and one that's covered in stone chips by the first road trip. Our film self-heals light swirl marks and scratches with a little heat, and the topcoat is engineered to resist yellowing for the life of the warranty. Available as full-front coverage or a complete color-stable wrap for the entire body.",
    bullets: ['Self-healing top coat', 'Full-front & full-body kits', '10-year manufacturer warranty'],
    specs: [
      { label: 'Film Thickness', value: '8 mil' },
      { label: 'Finish', value: 'Gloss / Matte' },
      { label: 'Self-Heal Temp', value: '140°F' },
      { label: 'Install Time', value: '1-3 days' },
      { label: 'Warranty', value: '10yr' },
    ],
    icon: 'ppf',
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    shortTitle: 'Ceramic',
    description:
      'A permanent nano-ceramic bond that delivers deep gloss, hydrophobic water beading, and chemical resistance no wax can match.',
    longDescription:
      "Ceramic coating cross-links directly onto your clear coat to form a semi-permanent glass-like layer — not a topical wax that washes off in a month. The result is a hydrophobic surface that sheds water, resists bird droppings and UV fade, and keeps that just-detailed gloss for years instead of weeks. Every job starts with a full paint correction so the coating goes on over a clean, swirl-free surface.",
    bullets: ['9H hardness nano-coating', 'Hydrophobic finish', 'Up to 7-year durability'],
    specs: [
      { label: 'Hardness', value: '9H' },
      { label: 'Layers Applied', value: '2-3 coats' },
      { label: 'Cure Time', value: '24-48 hrs' },
      { label: 'Gloss Level', value: 'High' },
      { label: 'Durability', value: 'Up to 7yr' },
    ],
    icon: 'ceramic',
    image: '/ccimage.png',
  },
  {
    slug: 'home-window-tinting',
    title: 'Home Window Tinting',
    shortTitle: 'Home Tint',
    description:
      'Residential window film that cuts heat and glare, protects furniture and flooring from fading, and adds daytime privacy — without darkening your view.',
    longDescription:
      "Home window film does the same job as automotive tint — blocking heat and UV — but it's tuned for glass that never rolls down and a house that needs to stay bright inside. We measure and cut every panel on-site for a clean, bubble-free edge-to-edge fit, and offer options ranging from barely-there UV/heat rejection film to daytime-privacy finishes for street-facing rooms.",
    bullets: ['Energy-efficient UV & heat rejection', 'Daytime privacy film options', 'Fade protection for furniture & flooring'],
    specs: [
      { label: 'VLT Range', value: '20-90%' },
      { label: 'UV Rejection', value: '99%' },
      { label: 'Heat Rejection', value: 'up to 80%' },
      { label: 'Install Time', value: '1 day' },
      { label: 'Warranty', value: '15yr' },
    ],
    icon: 'home',
  },
];

export const additionalServices: Service[] = [
  {
    slug: 'commercial-window-tinting',
    title: 'Commercial Window Tinting',
    shortTitle: 'Commercial',
    description:
      'Energy-code compliant film for offices and storefronts — cuts glare and cooling costs while giving street-facing glass a uniform, finished look.',
    longDescription:
      "Commercial jobs get scheduled around your business hours, not the other way around — after-hours and weekend installs are the norm. We handle large-format storefront and curtain-wall glass with the same edge-to-edge precision as a single window, and can spec film to meet local energy codes across a whole building at once.",
    bullets: ['Energy-code compliant film options', 'Scheduled around business hours', 'Glare reduction for offices & storefronts'],
    specs: [
      { label: 'VLT Range', value: '20-50%' },
      { label: 'UV Rejection', value: '99%' },
      { label: 'Energy Savings', value: 'up to 30%' },
      { label: 'Scheduling', value: 'After-hours available' },
      { label: 'Warranty', value: '10yr' },
    ],
    icon: 'commercial',
  },
  {
    slug: 'auto-detailing',
    title: 'Auto Detailing',
    shortTitle: 'Detailing',
    description:
      'Multi-stage hand wash, decontamination, and interior deep clean — the same prep work every ceramic and PPF job gets, available on its own.',
    longDescription:
      "Every ceramic coating and PPF install starts with a full decontamination and paint prep — auto detailing is that same process offered as a standalone service. Multi-stage hand wash, clay bar decontamination, and a full interior extraction as the baseline, with paint correction available for cars that need more than a wash to look right.",
    bullets: ['Multi-stage hand wash & decontamination', 'Full interior deep clean & extraction', 'Paint correction available'],
    specs: [
      { label: 'Wash Stages', value: '3-step' },
      { label: 'Interior Clean', value: 'Full extraction' },
      { label: 'Paint Correction', value: 'Optional add-on' },
      { label: 'Turnaround', value: '3-6 hrs' },
      { label: 'Pairs With', value: 'Ceramic Coating' },
    ],
    icon: 'detailing',
  },
  {
    slug: 'vinyl-wraps',
    title: 'Vinyl Wraps',
    shortTitle: 'Wraps',
    description:
      'Full color-change and satin/matte finish wraps, cut and wrapped by hand for a factory-tight, seamless result — fully reversible.',
    longDescription:
      "A full wrap changes the entire character of a car without touching the paint underneath — every wrap is fully reversible, so your factory finish stays protected and resale-ready. We hand-cut and wrap every panel individually for factory-tight edges with zero visible seams, whether it's a full color change, a satin or matte finish, or a partial accent wrap.",
    bullets: ['Full color-change wraps', 'Matte, satin & chrome finishes', 'Paint-safe & reversible'],
    specs: [
      { label: 'Film Life', value: '5-7yr' },
      { label: 'Finish Options', value: 'Gloss/Matte/Satin' },
      { label: 'Install Time', value: '3-5 days' },
      { label: 'Removal', value: 'Fully reversible' },
      { label: 'Warranty', value: '3yr' },
    ],
    icon: 'wrap',
  },
  {
    slug: 'window-tint-removal',
    title: 'Window Tint Removal',
    shortTitle: 'Tint Removal',
    description:
      'Safe removal of old, bubbled, or purple faded tint — no defroster damage, no adhesive residue left behind — ready for a fresh install.',
    longDescription:
      "Old tint doesn't just look bad — bubbled or purpled film blocks less UV than it did new, and scraping it off yourself is the #1 way to fry a rear defroster grid. We use a heat-assisted process that lifts old film clean off the glass, followed by a full adhesive residue cleanup, so the glass is ready for a fresh install the same day.",
    bullets: ['Defroster-safe removal process', 'Full adhesive residue cleanup', 'Often bundled with a fresh reinstall'],
    specs: [
      { label: 'Method', value: 'Heat-assisted' },
      { label: 'Residue Cleanup', value: 'Included' },
      { label: 'Turnaround', value: 'Same day' },
      { label: 'Defroster Risk', value: 'None' },
      { label: 'Reinstall Bundle', value: 'Available' },
    ],
    icon: 'removal',
  },
  {
    slug: 'headlight-restoration',
    title: 'Headlight Restoration',
    shortTitle: 'Headlight Restore',
    description:
      'Cloudy, yellowed headlight lenses restored to optical clarity — improves nighttime visibility, not just looks.',
    longDescription:
      "UV exposure and oxidation turn clear headlight lenses cloudy and yellow over time — it's not just cosmetic, it measurably cuts how much light reaches the road at night. We wet-sand through multiple grits to cut through the oxidized layer, machine-polish the lens back to optical clarity, then seal it with a UV-resistant coating so it doesn't cloud back over in a few months like a quick buff job would.",
    bullets: ['Removes yellowing & oxidation', 'Multi-stage wet-sand & polish', 'UV-protective sealant applied'],
    specs: [
      { label: 'Process', value: 'Wet-sand & polish' },
      { label: 'Result', value: 'Optical clarity' },
      { label: 'Sealant', value: 'UV-protective' },
      { label: 'Turnaround', value: '1-2 hrs' },
      { label: 'Warranty', value: '1yr' },
    ],
    icon: 'headlight',
  },
  {
    slug: 'headlight-tinting',
    title: 'Headlight Tinting',
    shortTitle: 'Headlight Tint',
    description:
      'Precision-cut smoke or blackout film for headlights and taillights — a small detail that changes the whole front end.',
    longDescription:
      "Smoked or blacked-out lights are a small detail that changes the whole look of a car. We precision-cut film to each lens shape rather than free-handing it, so the edges come out clean and factory-tight. Options run from a light smoke that barely touches daytime light output to a full blackout — we'll help you land on a shade that still passes inspection where that matters.",
    bullets: ['Precision-cut film per lens', 'Smoke to full blackout options', 'Legal-compliance light output available'],
    specs: [
      { label: 'Film Type', value: 'Precision-cut' },
      { label: 'Finish Options', value: 'Smoke to Black' },
      { label: 'Install Time', value: '1-2 hrs' },
      { label: 'Legal Compliance', value: 'Available' },
      { label: 'Warranty', value: '3yr' },
    ],
    icon: 'headlighttint',
  },
];

export type TintLevel = {
  value: 5 | 20 | 35 | 50;
  label: string;
  description: string;
  opacity: number;
};

export const tintLevels: TintLevel[] = [
  { value: 5, label: '5%', description: 'Limo black. Maximum privacy & heat rejection.', opacity: 0.92 },
  { value: 20, label: '20%', description: 'Dark & aggressive. The most popular choice.', opacity: 0.78 },
  { value: 35, label: '35%', description: 'Balanced tone. Style with daily visibility.', opacity: 0.58 },
  { value: 50, label: '50%', description: 'Light tint. Subtle heat & glare reduction.', opacity: 0.35 },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 2, suffix: '+', label: 'Years in Business' },
  { value: 200, suffix: '+', label: 'Vehicles Serviced' },
  { value: 10, suffix: 'Yr', label: 'Warranty Coverage' },
  { value: 5, suffix: '/5', label: 'Average Rating' },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Tell us about your vehicle and goals. We recommend the right film, coating, or wrap package for your needs and budget.',
  },
  {
    number: '02',
    title: 'Precision Prep',
    description: 'Every vehicle is decontaminated, clay-barred, and inspected in our climate-controlled bay before any film touches paint.',
  },
  {
    number: '03',
    title: 'Installation',
    description: 'Computer-cut patterns and hand-finished edges installed by certified technicians — no shortcuts, no bubbles, no overspray.',
  },
  {
    number: '04',
    title: 'Quality Check & Handoff',
    description: 'A final multi-point inspection under high-intensity light, then a full walkthrough of your warranty and care instructions.',
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Marcus D.',
    location: 'Euless, TX',
    quote:
      "The PPF install is flawless — you genuinely can't see a seam. These guys treat every car like it's their own.",
    rating: 5,
  },
  {
    name: 'Alicia R.',
    location: 'Hurst, TX',
    quote:
      'Ceramic coating turned my car into a mirror. Water just sheets right off. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Devon K.',
    location: 'North Richland Hills, TX',
    quote:
      'Got the full satin wrap done in two days. Zero orange peel, perfectly wrapped edges. Blackout Society is the only shop I trust now.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    location: 'Colleyville, TX',
    quote:
      '5% tint all around and it looks incredible. Professional from quote to pickup, and the shop itself feels premium.',
    rating: 5,
  },
];

export const galleryItems = [
  { id: 1, label: 'Ceramic Coating — Gloss Black BMW' },
  { id: 2, label: 'Full PPF — Matte Grey Porsche' },
  { id: 3, label: 'Vinyl Wrap — Satin Red Corvette' },
  { id: 4, label: '5% Tint — Tesla Model S' },
  { id: 5, label: 'Full Wrap — Chrome Delete GT-R' },
  { id: 6, label: 'PPF + Ceramic — Range Rover' },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'ppf-vs-ceramic-coating',
    title: 'PPF vs. Ceramic Coating: What’s the Difference?',
    excerpt:
      'They get bundled together constantly, but paint protection film and ceramic coating solve two different problems. Here’s how to decide which one your car actually needs.',
    category: 'Paint Protection',
    date: '2026-06-02',
    readTime: '5 min read',
    content: [
      'We hear this question almost every day: "Do I need PPF, or ceramic coating, or both?" The confusion is understandable — both get pitched as premium add-ons, both get applied to your paint, and both show up on the same estimate. But they protect against completely different things.',
      'Paint protection film is a physical layer — a thick, clear urethane film applied to the car, most commonly the front bumper, hood, mirrors, and rocker panels. Its job is to absorb impact: rock chips, road debris, and light scratches that would otherwise go straight into your clear coat. Good PPF is self-healing, meaning small swirl marks and scratches disappear with a little heat. Think of it as armor — it doesn\'t make your paint look better, it keeps your paint from looking worse.',
      'Ceramic coating is a chemical treatment, not a physical layer. It bonds to the clear coat at a molecular level and cures into a hard, glass-like finish. What it adds is gloss, hydrophobic water beading, and resistance to UV fade, bird droppings, and chemical staining. It will not stop a rock chip. It will make the car dramatically easier to keep clean and give it that "just detailed" look for years instead of weeks.',
      'The short version: PPF protects against impact damage, ceramic coating protects the finish and makes maintenance easier. They aren\'t competing services — most of the cars that come through our bay run PPF on the impact zones and ceramic coating over the whole car, because together they cover both problems. If your budget only allows one right now, high-mileage highway drivers usually get more from PPF first; low-mileage garage queens usually see more value starting with ceramic.',
    ],
  },
  {
    slug: '5-vs-20-percent-tint',
    title: '5% vs. 20% Tint: Which Is Right for You?',
    excerpt:
      'Darker isn’t always better. A breakdown of privacy, heat rejection, and legal limits at each shade so you pick a tint you’ll still love in a year.',
    category: 'Window Tint',
    date: '2026-05-18',
    readTime: '4 min read',
    content: [
      'The tint percentage refers to VLT — visible light transmission, or how much light actually passes through the glass. Lower numbers are darker: 5% lets almost no light through, 20% lets noticeably more. Neither one is objectively "better" — it depends on what problem you\'re trying to solve.',
      '5% is the classic aggressive, blacked-out look. It maximizes privacy — from the outside, you genuinely can\'t see in — and it\'s the most effective shade for blocking glare and afternoon sun. The tradeoff is nighttime visibility: at 5%, seeing clearly out of your rear and side windows in the dark takes more attention, and some states restrict how dark your front windows can legally go.',
      '20% keeps most of the visual drama while giving up less daytime visibility. It\'s the shade we install most often, because it balances the look people want with windows that are still comfortable to see through at night. If you do a lot of night driving or live somewhere with strict front-window VLT laws, 20% (or lighter) up front paired with 5% in the back is a common, fully street-legal combination.',
      'Whichever you pick, we\'ll always confirm your state\'s legal limits before we cut a single piece of film — that\'s part of the install, not an upsell.',
    ],
  },
  {
    slug: 'how-long-does-ceramic-coating-last',
    title: 'How Long Does Ceramic Coating Really Last?',
    excerpt:
      'Manufacturers advertise big warranty numbers, but real-world durability depends on prep, application, and how the car is washed. Here’s what actually determines lifespan.',
    category: 'Ceramic Coating',
    date: '2026-04-30',
    readTime: '6 min read',
    content: [
      'Product labels love to advertise "up to 10 years" or "lifetime" durability, and while that\'s technically achievable under lab conditions, real-world lifespan depends far more on prep and maintenance than on the product itself.',
      'Prep is the biggest factor. Ceramic coating bonds to whatever surface it\'s applied over — if there\'s old wax, contamination, or swirl marks trapped underneath, the coating bonds to that mess instead of clean paint, and it will fail early no matter how good the product is. A proper install means a full decontamination wash, clay bar treatment, and paint correction before the coating ever touches the car.',
      'After that, washing habits matter more than anything else. Automatic car washes with brushes are the single fastest way to degrade a coating — the brushes haze the surface and strip hydrophobic properties well before the coating is actually "done." Hand washing with a pH-neutral soap, or a touchless wash, will get you the full lifespan the product is rated for.',
      'With good prep and reasonable care, a quality nano-ceramic coating from our shop realistically holds up 5-7 years before it needs a refresh — which lines up with the warranty terms we actually stand behind, rather than the marketing number on the bottle.',
    ],
  },
  {
    slug: 'signs-your-tint-needs-to-go',
    title: 'Signs Your Old Tint Needs to Come Off',
    excerpt:
      'Bubbling, purpling, and hazing don’t just look bad — they mean your film has stopped doing its job. How to tell it’s time for a removal and reinstall.',
    category: 'Window Tint',
    date: '2026-04-09',
    readTime: '3 min read',
    content: [
      'Old window tint doesn\'t fail all at once — it degrades gradually, and by the time it\'s obviously bad, it\'s usually been underperforming for a while. Here\'s what to look for.',
      'Bubbling is the most visible sign — small air pockets forming under the film, usually from failing adhesive. Once bubbles start, they only get worse, and they\'re a clear signal the film has stopped sitting flat against the glass.',
      'Purpling and fading are next — cheaper dyed films lose their pigment under UV exposure over time and shift toward a purple or brownish tint. Beyond looking dated, faded film is rejecting far less heat and UV than it did when new.',
      'If your tint is bubbling, purpling, or hazing over, it\'s not doing the job you paid for anymore. Removal is a heat-assisted process that lifts the old film and adhesive residue cleanly, without damaging rear defroster elements — and it\'s the right time to reinstall with a modern ceramic film that won\'t have the same fading problem down the road.',
    ],
  },
  {
    slug: 'is-vinyl-wrap-worth-it',
    title: 'Is a Vinyl Wrap Worth It Before You Sell?',
    excerpt:
      'A wrap can hide paint flaws and totally change a car’s look — but does it help resale value? What buyers actually notice, and what they don’t.',
    category: 'Vinyl Wraps',
    date: '2026-03-21',
    readTime: '4 min read',
    content: [
      'Vinyl wraps get asked about constantly by people prepping a car to sell, usually for one of two reasons: covering up paint damage, or making a fairly ordinary car look more distinctive in listing photos. Both are valid, but they play out differently at sale time.',
      'A wrap in a factory-style color, applied cleanly, tends to be resale-neutral to slightly positive — buyers who don\'t know it\'s a wrap just see a clean car, and buyers who do know tend to appreciate that a wrap protects (and can reveal) better original paint underneath. A wrap is fully reversible, which serious buyers see as a plus over something permanent like a repaint.',
      'Where it gets riskier is bold colors or finishes — chrome deletes, satin color changes, anything highly personalized. It can make a car easier to sell to the right buyer and harder to sell to everyone else, which usually means a longer time on the market even if the eventual price is fine.',
      'If the goal is pure resale value, a wrap in a clean, factory-adjacent color covering up cosmetic flaws is almost always worth it. If the goal is personal enjoyment and you\'re not selling any time soon, that\'s a different calculation entirely — and a much more fun one.',
    ],
  },
  {
    slug: 'commercial-tint-energy-savings',
    title: 'How Much Commercial Tint Actually Saves on Cooling',
    excerpt:
      'For storefronts and offices with big south-facing glass, film isn’t just about looks. A realistic look at the energy savings building owners can expect.',
    category: 'Commercial',
    date: '2026-03-05',
    readTime: '5 min read',
    content: [
      'Commercial window film gets sold on a lot of things — glare, privacy, a more finished look for a storefront — but for building owners the number that actually matters is the utility bill. Here\'s a realistic look at what to expect.',
      'Uncoated glass, especially south- and west-facing storefront glass, is one of the biggest sources of unwanted solar heat gain in a commercial space. That heat load falls directly on your HVAC system, which has to work harder every single afternoon to compensate. Quality commercial film can reject a meaningful share of that incoming solar heat before it ever becomes the AC unit\'s problem.',
      'The actual dollar savings depend on your building\'s glass-to-wall ratio, orientation, and existing HVAC efficiency — a glass-heavy storefront with older cooling equipment sees a bigger percentage improvement than a building with small windows and a modern high-efficiency system. As a rough guide, buildings with significant unshaded glass exposure commonly see meaningful reductions in cooling load during peak summer hours.',
      'Because we schedule commercial jobs after hours, there\'s no disruption to a retail floor or office during business hours — and unlike a lot of energy-efficiency upgrades, the improvement in glare and interior comfort is immediate and obvious from day one, not something you only notice on a bill months later.',
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: 'Is window tint legal in Texas?',
    answer:
      'Yes — window tint laws vary by state and window position. As part of every install, we make sure your tint meets Texas’s legal VLT requirements, so you drive away road-legal from day one.',
  },
  {
    question: 'How long does a window tint installation take?',
    answer:
      'Most full-vehicle tint jobs are done in 2-3 hours, depending on the vehicle and film. We’ll give you a specific time estimate when you book your appointment.',
  },
  {
    question: 'What’s the difference between PPF and ceramic coating?',
    answer:
      'PPF is a physical film that absorbs rock chips and scratches — it’s protection you can feel. Ceramic coating is a chemical bond that adds gloss and makes the surface hydrophobic and easier to clean. Many customers run both together for full coverage.',
  },
  {
    question: 'Does ceramic coating replace waxing?',
    answer:
      'Yes. Ceramic coating lasts years instead of weeks and outperforms traditional wax on gloss, water beading, and chemical resistance. You won’t need to wax the car again while the coating is active.',
  },
  {
    question: 'Do you offer mobile service?',
    answer:
      'Select services — including home and commercial window tinting — can be done on-site. Automotive services like PPF and ceramic coating require our climate-controlled bay for a proper install.',
  },
  {
    question: 'How long does ceramic coating take to cure?',
    answer:
      'The coating is dry to the touch within a day, but full chemical cure takes 24-48 hours. We’ll let you know exactly when it’s safe to wash or drive in rain.',
  },
  {
    question: 'Do your services come with a warranty?',
    answer:
      'Yes — every service has its own warranty term, from a 3-year wrap warranty up to a lifetime tint warranty. Full details are on each service’s page, and you’ll get the paperwork at pickup.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer:
      'Fill out the quote form on our Contact page or give us a call — we’ll follow up to confirm your vehicle, the service you want, and get you on the schedule.',
  },
];
