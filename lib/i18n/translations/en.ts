import type {
  Counselor,
  EventItem,
  BlogPost,
  Testimonial,
  Assessment,
  Faq,
  NdFact,
} from "@/lib/types"

const counselors: Counselor[] = [
  {
    id: "sarah-m",
    name: "Dr. Sarah Meier",
    title: "ADHD Coach & Psychologist",
    canton: "Zürich (ZH)",
    languages: ["English", "German"],
    specialties: ["ADHD", "Executive Function", "Late Diagnosis"],
    modes: ["In-person", "Online"],
    rate: "CHF 160/hr",
    accepting: true,
    years: 8,
    bio: "Sarah is a licensed psychologist who was diagnosed with ADHD at 34. She brings both clinical expertise and lived experience to her work, specialising in adults navigating late diagnosis and workplace challenges.",
    approach:
      "I believe coaching should feel collaborative, not corrective. We'll work together to understand how your brain works best — not to fix you, but to build a life that actually fits.",
    credentials: [
      "MSc Clinical Psychology, UZH",
      "NSNS Accredited Coach",
      "ADHD-Europe Trained",
    ],
    avatarTint: "teal",
    photo: "/assets/coaches/carolina.jpg",
  },
  {
    id: "thomas-w",
    name: "Thomas Wenger",
    title: "Autism Peer Mentor",
    canton: "Bern (BE)",
    languages: ["German", "French"],
    specialties: ["Autism", "Sensory Regulation", "Social Strategies"],
    modes: ["In-person", "Online", "Hybrid"],
    rate: "CHF 120/hr",
    accepting: true,
    years: 4,
    bio: "Thomas is an autistic peer mentor with a background in engineering. He works with adults and older teens on the practical side of autistic life in Swiss workplaces and communities.",
    approach:
      "Peer mentoring means I've been where you are. We talk honestly, we take breaks when we need to, and we build strategies that actually fit your life — not a textbook version of it.",
    credentials: ["NSNS Accredited Peer Mentor", "Autisme Suisse Certified"],
    avatarTint: "purple",
    photo: "/assets/coaches/jens.jpg",
  },
  {
    id: "amina-b",
    name: "Amina Bischof",
    title: "Neurodiversity & Relationships Coach",
    canton: "Genève (GE)",
    languages: ["French", "English", "Arabic"],
    specialties: ["Relationships", "AuDHD", "Communication"],
    modes: ["Online"],
    rate: "CHF 180/hr",
    accepting: false,
    years: 11,
    bio: "Amina specialises in neurodivergent relationships — couples, families, and the friendship systems that hold us up. She draws on systemic family therapy and her own AuDHD experience.",
    approach:
      "Relationships look different when our nervous systems are different. My work is about translation — helping people who love each other understand how each other's minds actually work.",
    credentials: ["Systemic Family Therapy Certified", "NSNS Accredited Coach"],
    avatarTint: "teal",
    photo: "/assets/coaches/chantal.jpg",
  },
  {
    id: "lukas-h",
    name: "Lukas Hartmann",
    title: "Workplace & Career Coach",
    canton: "Basel (BS)",
    languages: ["German", "English"],
    specialties: ["Workplace", "Career Change", "Disclosure"],
    modes: ["In-person", "Online"],
    rate: "CHF 150/hr",
    accepting: true,
    years: 6,
    bio: "Lukas helps neurodivergent professionals navigate Swiss workplace culture — from deciding whether to disclose, to requesting accommodations, to career pivots that play to your strengths.",
    approach:
      "Your neurodivergence isn't a career problem to manage. Done right, it's the thing that makes you extraordinary at specific kinds of work. My job is to help you find and shape those roles.",
    credentials: ["NSNS Accredited Coach", "ICF Certified"],
    avatarTint: "purple",
  },
  {
    id: "priya-k",
    name: "Dr. Priya Keller",
    title: "Post-Diagnosis Support Specialist",
    canton: "Vaud (VD)",
    languages: ["English", "French", "Hindi"],
    specialties: ["Post-Diagnosis", "Identity", "Family"],
    modes: ["In-person", "Online", "Hybrid"],
    rate: "CHF 170/hr",
    accepting: true,
    years: 9,
    bio: "Priya works with adults in the months and years following a neurodivergence diagnosis. She holds space for the grief, the relief, and everything in between.",
    approach:
      "A diagnosis in adulthood rewrites your whole story — childhood memories, past relationships, the jobs that nearly broke you. We give all of that the time it needs.",
    credentials: ["PhD Psychology, EPFL", "NSNS Accredited Coach"],
    avatarTint: "teal",
    photo: "/assets/coaches/susan.jpg",
  },
  {
    id: "marco-r",
    name: "Marco Rossi",
    title: "ADHD & Executive Function Coach",
    canton: "Ticino (TI)",
    languages: ["Italian", "English", "German"],
    specialties: ["ADHD", "Students", "Executive Function"],
    modes: ["Online"],
    rate: "CHF 110/hr",
    accepting: true,
    years: 3,
    bio: "Marco is the only Italian-speaking ADHD coach in the NSNS network. He works with students and young professionals across Ticino and the wider Italian-speaking community.",
    approach:
      "I keep it practical. We build systems that you'll actually use on a Tuesday morning when everything's gone sideways — not perfect systems, sustainable ones.",
    credentials: ["NSNS Accredited Coach", "ADDCA Certified"],
    avatarTint: "purple",
  },
  {
    id: "elena-v",
    name: "Elena Vogt",
    title: "Autism Coach — Women & Nonbinary",
    canton: "Zürich (ZH)",
    languages: ["German", "English"],
    specialties: ["Autism", "Women & Nonbinary", "Masking"],
    modes: ["In-person", "Online"],
    rate: "CHF 165/hr",
    accepting: true,
    years: 7,
    bio: "Elena specialises in autistic women and nonbinary adults — a group whose autism is often recognised late or not at all. Her practice draws deeply on the unmasking literature.",
    approach:
      "So many of the people I work with have spent decades performing a version of themselves. Coaching is where we figure out what's left when the performance stops — and it's usually wonderful.",
    credentials: ["MSc Psychology, UZH", "NSNS Accredited Coach"],
    avatarTint: "purple",
    photo: "/assets/coaches/samantha.jpg",
  },
  {
    id: "david-s",
    name: "David Steiner",
    title: "Teen & Young Adult Coach",
    canton: "Luzern (LU)",
    languages: ["German", "English"],
    specialties: ["Teens", "Young Adults", "Transitions"],
    modes: ["In-person", "Hybrid"],
    rate: "CHF 130/hr",
    accepting: true,
    years: 5,
    bio: "David works with neurodivergent teens and young adults navigating school-to-apprenticeship, apprenticeship-to-career, and the often-bumpy transition into adult life.",
    approach:
      "The jump from school to 'real life' is hard for everyone — and it's an entirely different challenge when your brain works differently. We take it in manageable pieces.",
    credentials: ["NSNS Accredited Coach", "Jugendarbeit Trained"],
    avatarTint: "teal",
  },
  {
    id: "yuki-t",
    name: "Yuki Tanaka",
    title: "Sensory & Somatic Coach",
    canton: "Vaud (VD)",
    languages: ["English", "French", "Japanese"],
    specialties: ["Sensory", "Burnout", "Somatic"],
    modes: ["In-person", "Online"],
    rate: "CHF 155/hr",
    accepting: false,
    years: 6,
    bio: "Yuki integrates somatic practice with neurodivergence coaching. Her work is especially suited to people recovering from autistic burnout or sensory overwhelm.",
    approach:
      "Your body has been telling you things. My work starts with listening — then we build a life that your nervous system can actually live inside.",
    credentials: ["Somatic Experiencing Practitioner", "NSNS Accredited Coach"],
    avatarTint: "teal",
    photo: "/assets/coaches/stefanie.jpg",
  },
  {
    id: "fabienne-l",
    name: "Fabienne Lemaire",
    title: "AuDHD & Life Transitions",
    canton: "Neuchâtel (NE)",
    languages: ["French", "English"],
    specialties: ["AuDHD", "Life Transitions", "Parenthood"],
    modes: ["Online", "Hybrid"],
    rate: "CHF 145/hr",
    accepting: true,
    years: 4,
    bio: "Fabienne works with people whose lives have been turned inside out by a late AuDHD diagnosis — often alongside new parenthood, career shifts, or relationship change.",
    approach:
      "Transitions are when old coping strategies stop working. That's not failure — it's information. We use it to build what comes next.",
    credentials: ["NSNS Accredited Coach"],
    avatarTint: "purple",
    photo: "/assets/coaches/jane.jpg",
  },
  {
    id: "samir-a",
    name: "Samir Ahmadi",
    title: "Group Facilitator & Coach",
    canton: "Aargau (AG)",
    languages: ["German", "English", "Farsi"],
    specialties: ["Group Work", "Community", "ADHD"],
    modes: ["In-person", "Online"],
    rate: "CHF 125/hr",
    accepting: true,
    years: 5,
    bio: "Samir runs NSNS peer groups and works one-to-one with ADHDers who thrive in community. His group format has a waiting list and runs in German and English.",
    approach:
      "A lot of what's hard about ADHD eases when you're in a room full of people whose brains work similarly. Group isn't therapy — it's learning together.",
    credentials: ["Group Facilitation Certified", "NSNS Accredited Coach"],
    avatarTint: "teal",
  },
  {
    id: "clara-n",
    name: "Clara Nydegger",
    title: "Parents of Neurodivergent Children",
    canton: "St. Gallen (SG)",
    languages: ["German", "English"],
    specialties: ["Parents", "Family", "School Navigation"],
    modes: ["In-person", "Online"],
    rate: "CHF 140/hr",
    accepting: true,
    years: 10,
    bio: "Clara supports parents of neurodivergent children — often parents who are themselves neurodivergent. She's fluent in navigating the Swiss school and diagnostic system.",
    approach:
      "Parents of neurodivergent kids do about three jobs at once. My work is to take some of that weight, and help you advocate without burning out.",
    credentials: ["Family Systems Certified", "NSNS Accredited Coach"],
    avatarTint: "purple",
    photo: "/assets/coaches/portrait-flowerscarf.jpg",
  },
]

const events: EventItem[] = [
  {
    date: "2026-05-14",
    time: "18:30 – 20:30",
    title: "Late Diagnosis: Lived Experience Evening",
    location: "Zürich — Langstrasse 84",
    format: "In person",
    price: "CHF 25",
    capacity: "Limited to 24",
    description:
      "An informal evening for people diagnosed with ADHD or autism as adults. Three short talks, a long break, and a quiet hour for those who want to stay. Soft lighting, fidget-friendly, no forced sharing.",
    tag: "Community",
  },
  {
    date: "2026-05-22",
    time: "12:30 – 13:30",
    title: "Workplace Disclosure — A Lunchtime Clinic",
    location: "Online (Zoom)",
    format: "Online",
    price: "Free",
    capacity: "Open",
    description:
      "A 60-minute drop-in with Lukas Hartmann answering the disclosure questions that don't have clean answers. Bring your lunch. Cameras optional.",
    tag: "Workplace",
  },
  {
    date: "2026-06-07",
    time: "10:00 – 16:00",
    title: "Sensory-Safe Saturday: Spring Edition",
    location: "Genève — Parc La Grange",
    format: "In person",
    price: "Free",
    capacity: "Drop-in",
    description:
      "Our quarterly outdoor gathering. Quiet zones, loud zones, a snack table, and nothing you have to do. Bring a blanket, bring your people, bring your dog.",
    tag: "Community",
  },
  {
    date: "2026-06-19",
    time: "19:00 – 20:30",
    title: "Parents' Circle — End of School Year",
    location: "Online (Zoom)",
    format: "Online",
    price: "CHF 10",
    capacity: "8–14 people",
    description:
      "The end of the Swiss school year is a lot. This is a facilitated space to compare notes, decompress, and plan for summer with Clara Nydegger.",
    tag: "Family",
  },
]

const blog: BlogPost[] = [
  {
    slug: "after-a-late-diagnosis",
    title: "After a late diagnosis: the six months nobody warns you about",
    author: "Dr. Priya Keller",
    date: "2026-04-02",
    readTime: "8 min",
    tag: "Lived Experience",
    excerpt:
      "The relief comes first. Then, often, something stranger — a grief for the child nobody saw, the career that didn't fit, the friend you lost. Here is what we've learned about moving through it.",
    imageTone: "teal",
    image: "/assets/blog/after-a-late-diagnosis.jpg",
  },
  {
    slug: "sensory-loads-and-swiss-winters",
    title: "Sensory loads and Swiss winters",
    author: "Yuki Tanaka",
    date: "2026-03-18",
    readTime: "5 min",
    tag: "Wellbeing",
    excerpt:
      "Heated trams, dry indoor air, end-of-winter daylight — a practical guide to the sensory micro-stressors of Swiss February and what actually helps.",
    imageTone: "purple",
    image: "/assets/blog/sensory-loads-and-swiss-winters.jpg",
  },
  {
    slug: "the-unexpected-grace-of-routines",
    title: "The unexpected grace of routines",
    author: "Sarah Meier",
    date: "2026-02-28",
    readTime: "6 min",
    tag: "Strategies",
    excerpt:
      "For a long time I thought routines were prisons. Now I think of them as a kind of care — a way of being kind to my future self at a time of day when she isn't coping.",
    imageTone: "warm",
    image: "/assets/blog/the-unexpected-grace-of-routines.jpg",
  },
  {
    slug: "coaching-isnt-fixing",
    title: "Coaching isn't fixing",
    author: "NSNS Editorial",
    date: "2026-02-11",
    readTime: "4 min",
    tag: "About Coaching",
    excerpt:
      "A short piece on what the word 'coaching' means in a neurodiversity context — and, more importantly, what it shouldn't mean.",
    imageTone: "teal",
    image: "/assets/blog/coaching-isnt-fixing.jpg",
  },
  {
    slug: "autism-women-nonbinary",
    title: "What autism looks like when nobody is looking for it",
    author: "Elena Vogt",
    date: "2026-01-22",
    readTime: "9 min",
    tag: "Autism",
    excerpt:
      "Most diagnostic criteria were written about boys. This piece is about what autism actually looks like in women and nonbinary adults, and why it takes so long to find.",
    imageTone: "purple",
    image: "/assets/blog/autism-women-nonbinary.jpg",
  },
  {
    slug: "a-letter-to-the-freshly-diagnosed",
    title: "A letter to the freshly diagnosed",
    author: "NSNS Community",
    date: "2026-01-08",
    readTime: "3 min",
    tag: "Lived Experience",
    excerpt:
      "Twelve sentences from twelve people who've been where you are. Save it for the hard days.",
    imageTone: "warm",
    image: "/assets/blog/a-letter-to-the-freshly-diagnosed.jpg",
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Mira, 37",
    location: "Zürich",
    quote:
      "I spent twenty years thinking I was bad at life. Three months with my NSNS coach, and I understood that the life I'd been handed just wasn't built for my brain. That reframe changed everything.",
  },
  {
    name: "Julien, 29",
    location: "Lausanne",
    quote:
      "The assessment process was the first time a professional had ever listened to me without trying to make me smaller. I came out with a diagnosis, but also with a kind of peace I hadn't felt since I was a child.",
  },
  {
    name: "Anna & Ben",
    location: "Bern",
    quote:
      "We thought our son's school problems were our fault. NSNS helped us see they were a system problem — and showed us how to advocate for him without burning ourselves out.",
  },
]

const assessments: Assessment[] = [
  {
    id: "adhd",
    name: "ADHD Assessment",
    duration: "3–4 sessions",
    price: "CHF 1,900 – 2,400",
    overview:
      "A structured adult ADHD evaluation drawing on the DIVA-5, self-report inventories, collateral interview, and an extended clinical conversation.",
    includes: [
      "Initial 90-min clinical interview",
      "DIVA-5 structured interview",
      "Self-report inventories (ASRS, CAARS, WURS)",
      "Collateral interview with a person who knew you in childhood",
      "Written report with diagnostic formulation",
      "60-min feedback session",
    ],
    colour: "teal",
  },
  {
    id: "autism",
    name: "Autism Assessment",
    duration: "4–5 sessions",
    price: "CHF 2,400 – 3,200",
    overview:
      "A full adult autism assessment using ADOS-2 and ADI-R alongside a rich clinical interview. Designed to be sensitive to masking, late recognition, and the adult presentation of autism.",
    includes: [
      "Initial 90-min intake",
      "ADOS-2 structured observation",
      "ADI-R developmental interview",
      "Sensory profile and masking inventory",
      "Written report with diagnostic formulation",
      "Two follow-up feedback sessions",
    ],
    colour: "purple",
  },
  {
    id: "combined",
    name: "Combined AuDHD",
    duration: "5–6 sessions",
    price: "CHF 3,200 – 4,200",
    overview:
      "For adults who suspect both ADHD and autism. We take the time to look at both in parallel — because the overlap matters, and neither assessment alone tells the full story.",
    includes: [
      "Everything in the ADHD and Autism pathways",
      "Co-occurrence analysis",
      "Integrated report and formulation",
      "Three follow-up feedback sessions",
      "Optional coaching referral within network",
    ],
    colour: "warm",
  },
]

const assessmentFaqs: Faq[] = [
  {
    q: "Why do private assessments cost what they do?",
    a: "A thorough adult assessment is 12 to 20 hours of clinical time plus report writing. Our prices reflect the real hours involved, at fair rates for Swiss-licensed clinicians. Sliding-scale places are available on request.",
  },
  {
    q: "Will my insurance cover this?",
    a: "Some basic insurance plans cover assessment partially if referred by a GP. Supplementary insurance often covers more. We'll help you check during intake and provide the paperwork you'll need.",
  },
  {
    q: "How long is the waiting list?",
    a: "Currently 8–14 weeks depending on language and clinician. We prioritise urgent situations (workplace, education, mental-health-adjacent) where we can.",
  },
  {
    q: "Can I just do the assessment, and not the coaching?",
    a: "Absolutely. Many of our clients come for assessment only, and we're careful not to pressure anyone into ongoing services. If you ever want coaching support later, our network will still be here.",
  },
  {
    q: "What if I don't get a diagnosis?",
    a: "That's a real and normal outcome. A thorough assessment is useful whether or not you meet diagnostic threshold — you'll leave with a much clearer picture of yourself either way.",
  },
]

const positiveMessages: string[] = [
  "Your brain is not a problem to be solved. It is a way of being.",
  "Rest is not a reward. It's a need.",
  "The world is slowly learning to expect you. You are allowed to take up space.",
  "Masking is survival, not character. You are allowed to stop when it's safe.",
  "Your sensory needs are real. Trust your nervous system.",
  "Diagnosis is a door, not a verdict.",
]

const ndFacts: NdFact[] = [
  {
    stat: "~15–20%",
    label: "of people are estimated to be neurodivergent in some way",
  },
  {
    stat: "5–8 years",
    label:
      "average delay between first seeking help and diagnosis in adulthood",
  },
  {
    stat: "2/3",
    label: "of autistic adults in Switzerland report unmet support needs",
  },
  { stat: "1 in 20", label: "adults have ADHD — most still undiagnosed" },
]

export const en = {
  meta: {
    title: "NSNS — Neurodiversity Support Network Switzerland",
    description:
      "We support and empower Neurodivergent people in Switzerland — through coaching, peer mentoring, assessment and community.",
    htmlLang: "en",
  },
  common: {
    skipToContent: "Skip to content",
    backToHome: "Back to home",
  },
  nav: {
    home: "Home",
    coachesGroup: "Coaches",
    coachDirectory: "Coach directory",
    assessments: "Assessments",
    aboutNd: "About neurodiversity",
    blog: "Blog & Events",
    contact: "Contact",
    donate: "Donate",
    changeLanguage: "Change language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    tagline:
      "Neurodiversity Support Network Switzerland. Building a world that keeps all minds in mind.",
    socialInstagram: "Instagram",
    socialLinkedin: "LinkedIn",
    socialEmail: "Email",
    servicesHeading: "Services",
    servicesLinks: {
      coachDirectory: "Coach directory",
      assessments: "Assessments",
      events: "Events",
      training: "Training",
    },
    aboutHeading: "About",
    aboutLinks: {
      neurodiversity: "Neurodiversity",
      blog: "Blog",
      donate: "Donate",
      contact: "Contact",
    },
    getInTouchHeading: "Get in touch",
    rights: "© 2026 Neurodiversity Support Network Switzerland",
    legal: {
      privacy: "Privacy policy",
      accessibility: "Accessibility",
      faqs: "FAQs",
    },
    country: "Switzerland",
  },
  notFound: {
    eyebrow: "404",
    title: "This page isn't here.",
    lead: "It might have moved, or the link might be old. Head back home and try again.",
  },
  home: {
    hero: {
      eyebrow: "Neurodiversity Support Network Switzerland",
      titleA: "A network that keeps",
      titleEmphasis: "all minds",
      titleB: "in mind.",
      lead: "Coaching, peer mentoring, assessment and community for neurodivergent people living in Switzerland — delivered by practitioners who understand, because many of us share your experience.",
      ctaFindCoach: "Find a coach",
      ctaLearnMore: "New to neurodiversity?",
      inPersonOnline: "✓ In-person & online",
      currentlyAccepting: "Currently accepting",
      coachRatio: "9 of 12 coaches",
      takingNew: "are taking new clients this spring.",
      imageAlt:
        "A coaching circle — three women sitting on the floor of a warm, yellow-walled room, one with a notebook, another laughing, sunlight through curtains.",
    },
    trail: {
      eyebrow: "Your journey",
      titleA: "Wherever you are on the trail,",
      titleEmphasis: "we'll meet you there.",
      lead: "Most people don't arrive with a clear question. Here are three common places to start — pick the one that fits today; you can always change route.",
      checkpointOf: "Checkpoint {n} of 3",
      checkpoints: [
        {
          title: "Suspecting you might be neurodivergent",
          body: "You've been reading, wondering, recognising yourself in other people's stories. That quiet hunch is a legitimate starting point — nothing more is required to reach out.",
          cta: "New to neurodiversity?",
        },
        {
          title: "Considering getting assessed",
          body: "Exploring whether a formal adult ADHD or autism assessment is right for you. We'll walk you through Swiss pathways, costs, and what the process actually looks like.",
          cta: "Assessment options",
        },
        {
          title: "Understanding your needs, starting coaching",
          body: "Whether you have a diagnosis or not, a coach or peer mentor can help you translate self-knowledge into day-to-day life that actually works for your brain.",
          cta: "Find a coach",
        },
      ],
    },
    whatWeDo: {
      eyebrow: "What we do",
      titleA: "Six ways in.",
      titleEmphasis: "One network holding them together.",
      lead: "You don't have to pick the right door on the first try. Every service below connects to every other — move between them as you learn what helps.",
      coreLabel: "Our core offering",
      coreTitle: "Coaching & peer mentoring by people who get it.",
      coreBody:
        "Twelve accredited practitioners across Switzerland. Many are themselves neurodivergent. Work on the practical, human side of ADHD, autism, dyslexia and more — in English, German, French or Italian.",
      coreCta: "Browse coaches",
      services: [
        {
          title: "Adult assessments",
          body: "ADHD, autism and combined AuDHD pathways with Swiss-licensed clinicians. Clear costs, clear timelines.",
          cta: "See pathways",
        },
        {
          title: "Community events",
          body: "Sensory-safe gatherings, peer circles and lunchtime clinics across DE · FR · IT Switzerland.",
          cta: "See what's on",
        },
        {
          title: "Training & advocacy",
          body: "Neuroinclusion workshops for workplaces, schools and healthcare teams who want to do this properly.",
          cta: "Enquire",
        },
        {
          title: "Resources & research",
          body: "Reading lists, lived-experience writing, ongoing research into what actually helps neurodivergent adults here.",
          cta: "Read the blog",
        },
        {
          title: "Family support",
          body: "Dedicated coaches for parents — often parents who are themselves neurodivergent.",
          cta: "Find a family coach",
        },
      ],
    },
    stats: {
      eyebrow: "Why this matters",
      titleA: "The numbers behind",
      titleEmphasis: "the quiet wait.",
      lead: "Neurodivergent adults in Switzerland wait years for answers — and when the answers arrive, the real support often isn't there. We built NSNS to shrink both gaps at once.",
      sources:
        "Sources: Swiss Federal Statistical Office, European ADHD Guidelines Group, ADHD Europe (2023), and internal NSNS network surveys 2023–2024.",
    },
    coachesPreview: {
      eyebrow: "Meet the coaches",
      title: "Twelve accredited practitioners. Find the one that fits.",
      browseAll: "Browse the full directory",
    },
    testimonials: {
      eyebrow: "In their own words",
      title: "What the work can feel like.",
    },
    cta: {
      title: "Not sure where to start?",
      body: "Send us a line and we'll help you work out whether coaching, assessment, community or simply a resource list is what you need right now. There's no wrong answer.",
      contact: "Get in touch",
      donate: "Or support our work",
    },
  },
  aboutNd: {
    hero: {
      eyebrow: "For anyone newly curious",
      title: "Neurodiversity, in plain words.",
      lead: "Neurodiversity is the idea that human brains vary — and that variation is part of how we thrive as a species, not a flaw to be corrected.",
    },
    photoLabel: "Colourful wooden counters clustered on a purple background",
    heading:
      "We are all wired differently. Some of us are wired differently enough that the world doesn't quite fit — and when that happens, we deserve support, not correction.",
    para1:
      "The word “neurodivergent” is used for people whose brains work in ways that differ from the neurotypical majority. This includes, among others, people who are autistic, have ADHD, are dyslexic, dyspraxic, dyscalculic, or have Tourette's.",
    para2:
      "These are not deficits in search of a cure. They are ways of processing the world — ways that come with real strengths, real challenges, and a real right to accommodation. The “problems” neurodivergent people face are most often a mismatch between how we work and how the world is currently built. Change the world a little, and a lot of the problems get smaller.",
    formsSection: {
      eyebrow: "Forms it takes",
      title: "Some common patterns.",
      lead: "Every neurodivergent person is unique. But here's a rough sketch of some of the most common experiences we work with.",
      strengthsLabel: "Associated strengths",
    },
    profiles: [
      {
        name: "ADHD",
        tags: ["Attention", "Executive Function", "Hyperfocus"],
        body: "A difference in how attention, motivation, and executive function work — often involving time blindness, a hunger for novelty, and the capacity for deep hyperfocus on the right thing.",
        strengths: [
          "Creative leaps",
          "Crisis response",
          "High-interest deep work",
        ],
      },
      {
        name: "Autism",
        tags: ["Sensory", "Pattern", "Directness"],
        body: "A difference in how sensory input is processed and how social communication works. Often associated with pattern recognition, deep expertise, and a strong sense of fairness.",
        strengths: [
          "Pattern recognition",
          "Subject-matter depth",
          "Honesty & integrity",
        ],
      },
      {
        name: "Dyslexia",
        tags: ["Reading", "Visual-Spatial"],
        body: "A difference in how written language is processed. Often comes with strong visual-spatial thinking and narrative reasoning.",
        strengths: ["Big-picture thinking", "Storytelling", "3D reasoning"],
      },
      {
        name: "AuDHD & co-occurrence",
        tags: ["Combined", "Common"],
        body: "Many neurodivergent people are more than one thing. The combination often looks different from either part alone — and benefits from being looked at as a whole.",
        strengths: ["Unique perspective", "Cross-domain creativity"],
      },
    ],
    positiveSection: {
      eyebrow: "Things worth hearing often",
      title: "Notes for the hard days.",
      lead: "Save these. Come back to them.",
    },
    adviceSection: {
      eyebrow: "Advice we keep giving",
      title: "Five things that tend to help.",
    },
    advice: [
      {
        t: "Go slowly after a diagnosis.",
        b: "There is no rush to 'apply' your diagnosis to your life. The first weeks and months are for absorption, not action.",
      },
      {
        t: "Trust your sensory system.",
        b: "If a noise, light, or fabric is distressing, it is distressing. Your nervous system is not exaggerating — it is telling you something accurate about what it needs.",
      },
      {
        t: "Find one other person who gets it.",
        b: "The single biggest predictor of coping well with a new diagnosis is having one person in your life who does not need an explanation. Online counts.",
      },
      {
        t: "Build scaffolding, not willpower.",
        b: "The systems and environments around you do most of the work. Lean into alarms, lists, body-doubling, sensory tools. None of it is cheating.",
      },
      {
        t: "Rest is not a reward.",
        b: "Rest is the work. Schedule it. Protect it. Refuse to feel guilty about it.",
      },
    ],
  },
  assessmentsPage: {
    hero: {
      eyebrow: "Assessments",
      title: "A thorough, adult-centred path to knowing yourself.",
      lead: "Diagnosis in adulthood is a door, not a verdict. Our assessments are designed to be careful, paced, and respectful — by clinicians who understand late diagnosis from the inside.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Four steps. No rush.",
      steps: [
        {
          t: "Free 20-minute call",
          d: "We start by understanding why you're considering assessment, and whether it's the right moment. No obligation.",
        },
        {
          t: "Intake & inventories",
          d: "A 90-minute interview plus self-report inventories you complete at home, at your own pace.",
        },
        {
          t: "Structured assessment",
          d: "DIVA-5, ADOS-2, ADI-R or the relevant combination — delivered across 2–4 sessions, with breaks you control.",
        },
        {
          t: "Feedback & report",
          d: "A written report and at least one hour of conversation about what it means. A second feedback session if you need it.",
        },
      ],
    },
    pathwaysSection: {
      eyebrow: "Pathways",
      title: "Three assessment options.",
      lead: "All pathways include a feedback session and written report. Sliding-scale places are available on every pathway — please ask.",
      includesLabel: "Includes",
      enquirePrefix: "Enquire about",
    },
    pricing: {
      eyebrow: "On pricing",
      title: "Why private assessments cost what they do.",
      body: "A thorough adult assessment is 12 to 20 hours of clinical time plus report writing. We are transparent about that — and we make room for sliding-scale places on every pathway.",
      stats: [
        { n: "12–20h", l: "Clinical time per assessment" },
        { n: "2–4", l: "Sessions across several weeks" },
        { n: "Sliding", l: "Scale places on every pathway" },
        { n: "Insurance", l: "Partial coverage often possible" },
      ],
    },
    faqsSection: {
      eyebrow: "Common questions",
      title: "What people ask us most.",
    },
  },
  blogPage: {
    hero: {
      eyebrow: "Events & writing",
      title: "Come along, or settle in and read.",
      lead: "A living record of what we're doing, what we're learning, and when we're gathering in person.",
    },
    events: {
      eyebrow: "Upcoming events",
      title: "What's on, spring 2026.",
      upcomingSuffix: "upcoming",
      reserve: "Reserve",
    },
    posts: {
      eyebrow: "From the blog",
      title: "Reading from the network.",
      all: "All",
      editorialAltPrefix: "Editorial photo —",
    },
    dateLocale: "en-GB",
  },
  coachesPage: {
    hero: {
      eyebrow: "Coach directory",
      title: "Find a coach who understands how you work.",
      lead: "All of our coaches are accredited through NSNS. Many are neurodivergent themselves. Filter by location, language, specialty and availability to find the right fit.",
    },
    filters: {
      search: "Search",
      searchPlaceholder: "Name, specialty, keyword…",
      canton: "Canton",
      specialty: "Specialty",
      language: "Language",
      format: "Format",
      any: "Any",
      acceptingOnly: "Accepting only",
    },
    showingPrefix: "Showing",
    showingMiddle: "of",
    showingSuffix: "coaches",
    accepting: "● Accepting",
    waitlist: "Waitlist",
    empty: {
      title: "No coaches match those filters.",
      retry: "Try relaxing one of them, or",
      contactUs: "contact us",
      findSomething: "and we'll find something.",
    },
  },
  coachDetail: {
    back: "Back to directory",
    availability: "Availability",
    accepting: "● Accepting",
    waitlist: "Waitlist",
    rate: "Rate",
    experience: "Experience",
    yearsSuffix: "years",
    canton: "Canton",
    format: "Format",
    requestIntake: "Request an intake",
    about: "About",
    approach: "Approach",
    languages: "Languages",
    credentials: "Credentials",
  },
  contactPage: {
    hero: {
      eyebrow: "Get in touch",
      title: "Say hello — we read everything.",
      lead: "Whether you're exploring coaching, asking about an assessment, offering to collaborate or simply saying hi, we'd love to hear from you.",
    },
    received: {
      title: "Message received.",
      body: "We aim to reply within two working days. Most messages get a human answer, not a template.",
      sendAnother: "Send another",
    },
    form: {
      title: "Send us a message",
      subtitle: "Short is fine. Long is fine too. Whatever suits you.",
      name: "Your name",
      email: "Email address",
      topicLabel: "What's this about?",
      topics: ["General", "Coaching", "Assessment", "Training", "Media"],
      message: "Message",
      messagePlaceholder: "Tell us whatever feels right.",
      send: "Send message",
      privacy: "We never share your details. Read our",
      privacyLink: "privacy policy",
    },
    byEmail: {
      title: "By email",
      body: "We aim to respond within two working days, usually sooner.",
    },
    inPerson: {
      title: "In person",
      body: "Visits by appointment. Our office is quiet, softly lit and fidget-friendly.",
    },
    elsewhere: "Elsewhere",
    instagram: "Instagram",
    linkedin: "LinkedIn",
  },
  donatePage: {
    hero: {
      eyebrow: "Support the network",
      titleA: "When you give to nsns, you give someone",
      titleEmphasis: "their first yes",
      lead: "Your donation funds sliding-scale coaching, translated resources, sensory-safe community events, and the assessments people cannot otherwise afford. It is the difference between hearing “sorry, we can't” and “yes — come in.”",
      imageAlt:
        "Two NSNS community members laughing together in a bright, softly lit room",
    },
    storiesSection: {
      eyebrow: "Who your giving reaches",
      title: "Three stories we hold close.",
    },
    stories: [
      {
        name: "For Mira",
        give: "CHF 25",
        impact: "covers one peer-mentoring session",
        quote:
          "I'd been on a waiting list for a year. NSNS saw me in three weeks.",
        alt: "Two peer mentors in NSNS hoodies, smiling",
      },
      {
        name: "For Julien",
        give: "CHF 100",
        impact: "subsidises an assessment intake",
        quote:
          "I walked out with a diagnosis and a way forward, not just a label.",
        alt: "Facilitated support group meeting in a sunlit room",
      },
      {
        name: "For the Lamberts",
        give: "CHF 250",
        impact: "funds a full sensory-safe Saturday",
        quote:
          "It's the only place in the city where our son can just be himself for a day.",
        alt: "Diverse hands joined together in the centre of a group",
      },
    ],
    form: {
      title: "Give now",
      monthly: "Monthly",
      once: "One time",
      monthlyDesc: {
        pre: "You'll give",
        middle: "every month. That's about",
        suffix: "coaching sessions a year.",
      },
      onceDesc: {
        pre: "A one-time gift of",
        middle: "funds roughly",
        suffix: "peer-mentoring sessions.",
      },
      continue: "Continue to secure payment",
      taxNote:
        "Donations are tax-deductible in Switzerland. NSNS is a registered non-profit.",
    },
    otherWaysSection: {
      eyebrow: "Other ways to help",
      title: "Not everyone gives in francs — and that's fine.",
    },
    ways: [
      {
        t: "Volunteer with us",
        b: "We need help with events, translation and community moderation. A few hours a month is plenty.",
      },
      {
        t: "Leave a bequest",
        b: "Legacy giving secures the network for the next generation of neurodivergent Swiss adults.",
      },
      {
        t: "Partner from your company",
        b: "Matched giving, pro-bono services, or sponsoring a specific programme — talk to us.",
      },
    ],
  },
  data: {
    counselors,
    events,
    blog,
    testimonials,
    assessments,
    assessmentFaqs,
    positiveMessages,
    ndFacts,
  },
}

export type Dictionary = typeof en
