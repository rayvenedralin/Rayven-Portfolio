/**
 * RAYVEN GRAPHIC ARTIST — PORTFOLIO JAVASCRIPT
 * Modern Neo-Brutalist / Modern Cartoonish Hybrid Experience
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. DATA: PORTFOLIO CASE STUDIES
  // --------------------------------------------------------------------------
  const portfolioData = {
    'illustration-branding-1': {
      id: 'illustration-branding-1',
      title: 'Rayven Monster Typography & Identity',
      tagline: 'Hand-drawn neo-brutalist monster lettering and signature eye emblem crafted with vibrant pop energy.',
      category: 'illustration-branding',
      categoryLabel: 'Illustration / Branding',
      badgeClass: 'bg-yellow',
      year: '2025',
      image: 'assets/images/ILLUSTRATIONBRANDING 1.jpg',
      serviceValue: 'Brand Identity Design',
      challenge: 'Create a distinct, unconventional personal brand emblem that merges 90s cartoon aesthetics with underground skateboard grit and neo-brutalist visual punch.',
      solution: 'Developed custom organic vector typography with deep drop-shadow extrusions, paired with a central electric crimson eye badge and high-contrast toxic lime background.',
      deliverables: [
        'Custom Hand-Lettered Vector Logo',
        'Iconic Eye Emblem & Mascot Asset',
        'High-Res Vector Source Files (SVG)',
        'Merchandise & Apparel Application Dielines'
      ],
      swatches: [
        { name: 'Toxic Lime', hex: '#DAFA01' },
        { name: 'Crimson Punch', hex: '#EF4444' },
        { name: 'Deep Shadow', hex: '#1A1A1A' },
        { name: 'Pure White', hex: '#FFFFFF' }
      ],
      typography: ['Custom Monster Hand Lettering', 'Space Grotesk', 'Fredoka Bold'],
      tools: ['Canva', 'Ibis Paint']
    },

    'illustration-branding-2': {
      id: 'illustration-branding-2',
      title: 'Rayven Lightning Mecha Emblem',
      tagline: 'High-voltage lightning bolt vector typography and sharp geometric streetwear badge design.',
      category: 'illustration-branding',
      categoryLabel: 'Illustration / Branding',
      badgeClass: 'bg-yellow',
      year: '2025',
      image: 'assets/images/ILLUSTRATIONBRANDING 2.jpg',
      serviceValue: 'Brand Identity Design',
      challenge: 'Design an electrifying, high-energy logo emblem for street apparel and extreme sports merchandise inspired by Japanese mecha and anime power visuals.',
      solution: 'Constructed an aggressive lightning-strike typographic silhouette in bright electric yellow with heavy solid black borders set against a bold red framing block.',
      deliverables: [
        'Mecha Lightning Typography Mark',
        'Streetwear Badge & Embroidered Patch Specs',
        'Scalable Vector Vectorization',
        'Sticker Kit Ready-to-Print Files'
      ],
      swatches: [
        { name: 'Electric Lightning', hex: '#FFEA00' },
        { name: 'Racing Red', hex: '#DC2626' },
        { name: 'Obsidian Black', hex: '#1A1A1A' },
        { name: 'Stark White', hex: '#FFFFFF' }
      ],
      typography: ['Custom Mecha Geometric', 'Space Grotesk Black', 'Syne'],
      tools: ['Canva', 'Ibis Paint']
    },

    'social-media-1': {
      id: 'social-media-1',
      title: 'City Scholars: Back to School Campaign',
      tagline: 'School announcement for graphic design subject — a fake announcement for upcoming new school year as an example of work.',
      category: 'social-media',
      categoryLabel: 'Social Media',
      badgeClass: 'bg-blue',
      year: '2026',
      image: 'assets/images/SOCIAL MEDIA GRAPHICS 1.jpg',
      serviceValue: 'Social Media & Marketing Assets',
      challenge: 'Create a school announcement pubmat for graphic design subject as coursework practice.',
      solution: 'Designed a fake announcement for the upcoming new school year as an example of coursework design, featuring a 3D calendar peel graphic with student messaging notifications.',
      deliverables: [
        'Official School Announcement Poster (4:5)',
        '3D Calendar Artwork & Shading Effects',
        'Messenger Bubble Interactive UI Elements',
        'Social Media Feed Optimized Exports'
      ],
      swatches: [
        { name: 'Royal Scholar', hex: '#1D4ED8' },
        { name: 'Alert Crimson', hex: '#DC2626' },
        { name: 'Glow Cyan', hex: '#38BDF8' },
        { name: 'Paper White', hex: '#FFFFFF' }
      ],
      typography: ['Impact Rounded', 'Space Grotesk', 'Plus Jakarta Sans'],
      tools: ['Ibis Paint', 'Canva', 'Figma']
    },

    'social-media-2': {
      id: 'social-media-2',
      title: 'Byaheng Banyuhay Creatives Recruitment',
      tagline: 'CCC Dibujo Org invitation for recruitment week — created as a CCC Dibujo officer for students willing to join CCC Dibujo Creatives Org.',
      category: 'social-media',
      categoryLabel: 'Social Media',
      badgeClass: 'bg-blue',
      year: '2026',
      image: 'assets/images/SOCIAL MEDIA GRAPHICS 2.jpg',
      serviceValue: 'Social Media & Marketing Assets',
      challenge: 'Design an invitation pubmat for CCC Dibujo recruitment week welcoming new creatives.',
      solution: 'As a part of CCC Dibujo officer, I made this pubmat for recruitment week for students willing to join in CCC Dibujo Creatives Org, styled with vibrant Filipino street signage.',
      deliverables: [
        'Recruitment Hero Key Visual',
        'Street Sign Vector Typography System',
        'Event Details Tear-Off Sticker Graphic',
        'Multi-Platform Campaign Layouts'
      ],
      swatches: [
        { name: 'Signage Green', hex: '#10B981' },
        { name: 'Jeepney Yellow', hex: '#FACC15' },
        { name: 'Route Red', hex: '#EF4444' },
        { name: 'Sunlight Flare', hex: '#FEF08A' }
      ],
      typography: ['Highway Gothic Heavy', 'Space Grotesk', 'Inter Bold'],
      tools: ['Ibis Paint', 'Canva', 'Figma']
    },

    'social-media-3': {
      id: 'social-media-3',
      title: 'Prelim Exam Week Clipboard Art',
      tagline: 'School motivation pubmat created as a CCC Dibujo officer to motivate members of CCC Dibujo.',
      category: 'social-media',
      categoryLabel: 'Social Media',
      badgeClass: 'bg-blue',
      year: '2026',
      image: 'assets/images/SOCIAL MEDIA GRAPHICS 3.jpg',
      serviceValue: 'Social Media & Marketing Assets',
      challenge: 'Design an encouraging school motivation graphic for CCC Dibujo members facing exam week.',
      solution: 'Just for school motivation — as a part of CCC Dibujo officer I made this pubmat for members of CCC Dibujo to motivate them during exam season.',
      deliverables: [
        'Crayon Lettering Illustration Pack',
        'Tactile Still-Life Desk Composition',
        'Social Square Engagement Post (1:1)',
        'Story Announcement Version'
      ],
      swatches: [
        { name: 'Crayon Orange', hex: '#FB923C' },
        { name: 'Crayon Teal', hex: '#2DD4BF' },
        { name: 'Post-it Yellow', hex: '#FEF08A' },
        { name: 'Wood Table Brown', hex: '#78350F' }
      ],
      typography: ['Handmade Crayon Sans', 'Casual Marker', 'Plus Jakarta Sans'],
      tools: ['Canva']
    },

    'social-media-4': {
      id: 'social-media-4',
      title: 'Midterm Exam Chalkboard Motivation',
      tagline: 'School motivation chalkboard pubmat created as a CCC Dibujo officer to motivate members of CCC Dibujo.',
      category: 'social-media',
      categoryLabel: 'Social Media',
      badgeClass: 'bg-blue',
      year: '2026',
      image: 'assets/images/SOCIAL MEDIA GRAPHICS 4.jpg',
      serviceValue: 'Social Media & Marketing Assets',
      challenge: 'Create an uplifting and cheerful motivation graphic for CCC Dibujo members during midterm exams.',
      solution: 'Just for school motivation — as a part of CCC Dibujo officer I made this pubmat for members of CCC Dibujo to motivate them with friendly chalkboard art.',
      deliverables: [
        'High-Resolution Chalkboard Illustration',
        'Custom Chalk Texture Pack & Layering',
        'Square Social Feed Graphic',
        'Community Announcement Banner'
      ],
      swatches: [
        { name: 'Chalk Green', hex: '#164E63' },
        { name: 'Chalk Pastel Pink', hex: '#F472B6' },
        { name: 'Chalk Sunshine', hex: '#FDE047' },
        { name: 'Chalk White', hex: '#F1F5F9' }
      ],
      typography: ['Custom Chalk Lettering', 'Fredoka Rounded', 'Space Grotesk'],
      tools: ['Canva', 'Figma']
    },

    'social-media-5': {
      id: 'social-media-5',
      title: 'Tech/Week 2026 Square Social Launch',
      tagline: 'School project pubmat imagining a school announcement with a fictional, made-up school.',
      category: 'social-media',
      categoryLabel: 'Social Media',
      badgeClass: 'bg-blue',
      year: '2026',
      image: 'assets/images/SOCIAL MEDIA GRAPHICS 5.jpg',
      serviceValue: 'Social Media & Marketing Assets',
      challenge: 'Create a promotional social pubmat for a school project imagining an announcement for a fictional school.',
      solution: 'Created for a school project imagining a school announcement for a fictional or made-up school, designed with cybernetic glassmorphism and pixel art typography.',
      deliverables: [
        'Event Launch Feed Graphic (1:1)',
        'Glassmorphic UI Card System',
        'Scannable QR Registration Asset',
        'Pixel Art Logo & Iconography'
      ],
      swatches: [
        { name: 'Cyber Blue', hex: '#1E3A8A' },
        { name: 'Pixel Cyan', hex: '#38BDF8' },
        { name: 'Frosted Glass', hex: '#93C5FD' },
        { name: 'Neon White', hex: '#FFFFFF' }
      ],
      typography: ['Pixel Code 8-Bit', 'Space Grotesk', 'Inter'],
      tools: ['Canva', 'Figma', 'Ibis Paint']
    },

    'social-media-6': {
      id: 'social-media-6',
      title: 'CCC Dibujo General Assembly Pubmat',
      tagline: 'Pubmat announcement for CCC Dibujo Creatives General Assembly.',
      category: 'social-media',
      categoryLabel: 'Social Media',
      badgeClass: 'bg-blue',
      year: '2026',
      image: 'assets/images/SOCIAL MEDIA GRAPHICS 6.jpg',
      serviceValue: 'Social Media & Marketing Assets',
      challenge: 'Design an official social media announcement publication material for the CCC Dibujo Creatives General Assembly.',
      solution: 'Pubmat announcement for CCC Dibujo Creatives General Assembly.',
      deliverables: [
        'Official Social Media Pubmat (4:5)',
        'Event Program & Details Layout',
        'Announcement Post Assets',
        'Social Media Feed Graphics'
      ],
      swatches: [
        { name: 'Assembly Blue', hex: '#2563EB' },
        { name: 'Sunshine Gold', hex: '#FACC15' },
        { name: 'Navy Slate', hex: '#0F172A' },
        { name: 'Pure White', hex: '#FFFFFF' }
      ],
      typography: ['Space Grotesk Bold', 'Inter', 'Fredoka'],
      tools: ['Canva']
    },

    'landing-page-1': {
      id: 'landing-page-1',
      title: 'Tech/Week 2026 Digital Web Banner',
      tagline: 'School project digital web banner imagining a school announcement with a fictional, made-up school.',
      category: 'landing-page',
      categoryLabel: 'Landing Page',
      badgeClass: 'bg-mint',
      year: '2026',
      image: 'assets/images/LANDING PAGE 1.jpg',
      serviceValue: 'Digital & UI/UX Design',
      challenge: 'Design a digital web banner for a school project imagining an announcement for a fictional school.',
      solution: 'Created for a school project imagining a school announcement for a fictional or made-up school, crafted as a wide-aspect hero web banner with 3D gear accents.',
      deliverables: [
        'Full-Width Hero Web Banner Artwork',
        '3D Floating Glass Gear Elements',
        'Responsive Header Layout Mockups',
        'Custom Web Typography Guide'
      ],
      swatches: [
        { name: 'Matrix Navy', hex: '#0F172A' },
        { name: 'Laser Cyan', hex: '#06B6D4' },
        { name: 'Electric White', hex: '#FFFFFF' },
        { name: 'Glow Lavender', hex: '#C084FC' }
      ],
      typography: ['Pixel 8-Bit Display', 'Space Grotesk', 'Plus Jakarta Sans'],
      tools: ['Canva', 'Figma', 'Ibis Paint']
    },

    'landing-page-2': {
      id: 'landing-page-2',
      title: 'CCC Dibujo Creatives General Assembly Landing Page',
      tagline: 'Digital landing page screen and stage backdrop for CCC Dibujo Creatives General Assembly.',
      category: 'landing-page',
      categoryLabel: 'Landing Page',
      badgeClass: 'bg-mint',
      year: '2026',
      image: 'assets/images/LANDING PAGE 2.jpg',
      serviceValue: 'Digital & UI/UX Design',
      challenge: 'Design a digital landing page and LED stage screen for CCC Dibujo Creatives General Assembly.',
      solution: 'Crafted a welcoming digital landing page and LED stage screen for CCC Dibujo Creatives General Assembly featuring tactile 3D bubble typography and cozy wooden aesthetics.',
      deliverables: [
        '16:9 Digital Landing Screen & Stage Backdrop',
        '3D Beveled Bubble Lettering Mark',
        'Event Lower-Thirds & Digital Placards',
        'Social Livestream Frame Overlay'
      ],
      swatches: [
        { name: 'Assembly Blue', hex: '#2563EB' },
        { name: 'Warm Timber', hex: '#78350F' },
        { name: 'Botanical Green', hex: '#15803D' },
        { name: 'Cream Accent', hex: '#FEF3C7' }
      ],
      typography: ['Custom 3D Bubble Sans', 'Space Grotesk Bold', 'Inter'],
      tools: ['Canva']
    },

    'magazine-1': {
      id: 'magazine-1',
      title: 'This Is Rayven — Editorial Magazine Issue',
      tagline: 'Multi-spread editorial publication featuring intimate biographical storytelling, candid portraiture, and bold layout.',
      category: 'magazine',
      categoryLabel: 'Magazine • Multi-Spread',
      badgeClass: 'bg-pink',
      year: '2026',
      image: 'assets/images/MAGAZINE 1.jpg',
      serviceValue: 'Editorial & Publication Design',
      challenge: 'Design a deeply personal and visually arresting editorial publication exploring identity, artistic philosophy, fashion, and cinema superfandom.',
      solution: 'Created an editorial issue comprising a high-contrast cover with red serif framing, followed by 3 interior spreads featuring expressive dynamic poses, monochrome photography, and refined Swiss typographic hierarchy.',
      deliverables: [
        'Full Magazine Cover Layout Artwork',
        'Spread 01: "This Is Rayven" Biographical Layout',
        'Spread 02: "The Multiverse of Sound, Style & Simple Dreams"',
        'Spread 03: "The Manifesto of Living Well" Editorial',
        'Print-Ready PDF Dielines & Digital Page-Turner Assets'
      ],
      pages: [
        { title: 'Front Cover', sub: 'Main Cover Layout', image: 'assets/images/MAGAZINE 1.jpg' },
        { title: 'Spread 01', sub: 'This Is Rayven', image: 'assets/images/MAGAZINE 1.2.jpg' },
        { title: 'Spread 02', sub: 'Multiverse of Sound & Style', image: 'assets/images/MAGAZINE 1.3.jpg' },
        { title: 'Spread 03', sub: 'The Manifesto of Living Well', image: 'assets/images/MAGAZINE 1.4.jpg' }
      ],
      swatches: [
        { name: 'Editorial Scarlet', hex: '#DC2626' },
        { name: 'Monochrome Black', hex: '#111827' },
        { name: 'Studio White', hex: '#F9FAFB' },
        { name: 'Warm Charcoal', hex: '#374151' }
      ],
      typography: ['Playfair Display', 'Bodoni MT', 'Times New Roman Italic', 'Inter'],
      tools: ['Canva', 'Figma']
    },

    'magazine-2': {
      id: 'magazine-2',
      title: 'The Self Portrait Magazine Cover',
      tagline: 'Minimalist bold scarlet & black editorial cover featuring custom line-art self portraiture and Swiss typography.',
      category: 'magazine',
      categoryLabel: 'Magazine',
      badgeClass: 'bg-pink',
      year: '2026',
      image: 'assets/images/MAGAZINE COVER 2.jpg',
      serviceValue: 'Editorial & Publication Design',
      challenge: 'Craft an avant-garde editorial magazine cover celebrating self-reflection through minimal graphic elements and intense color blocking.',
      solution: 'Used an all-scarlet canvas with stark black line-art portraiture integrating Rayven’s signature glasses, side-fringe, and septum piercing with vertical typographic rhythm.',
      deliverables: [
        'Minimalist Editorial Cover Artwork',
        'Custom Vector Line-Art Portrait',
        'Vertical Deconstructed Typography System',
        'High-Gloss Print Specification'
      ],
      swatches: [
        { name: 'Bold Scarlet', hex: '#E11D48' },
        { name: 'Pitch Black', hex: '#000000' },
        { name: 'Pure White', hex: '#FFFFFF' },
        { name: 'Deep Crimson', hex: '#9F1239' }
      ],
      typography: ['Didot Headline', 'Space Grotesk', 'Helvetica Neue'],
      tools: ['Canva']
    },

    'movie-poster-1': {
      id: 'movie-poster-1',
      title: 'SE7EN Alternative Film Poster',
      tagline: 'Striking monochrome film poster with blood-red textured typography and electrical transmission tower perspective.',
      category: 'movie-poster',
      categoryLabel: 'Movie Poster',
      badgeClass: 'bg-yellow',
      year: '2025',
      image: 'assets/images/MOVIE POSTER 1.jpg',
      serviceValue: 'Print Poster & Film Graphics',
      challenge: 'Reimagine an alternative movie poster for David Fincher’s psychological thriller SE7EN, focusing on the harrowing climax and seven deadly sins motif.',
      solution: 'Juxtaposed a low-angle shot of detectives against an imposing power transmission tower, overlaying gritty scratched red typography crossing out the deadly sins one by one.',
      deliverables: [
        'Official 27x40 One-Sheet Movie Poster',
        'Custom Blood-Red Scratched Font Treatment',
        'Authentic Film Billing Block Typography',
        'Collector Edition Print Mockup'
      ],
      swatches: [
        { name: 'Blood Ink Red', hex: '#DC2626' },
        { name: 'Desaturated Film Grain', hex: '#4B5563' },
        { name: 'Overcast Sky', hex: '#E5E7EB' },
        { name: 'Black Shadow', hex: '#0F172A' }
      ],
      typography: ['Custom Gritty Brush Serif', 'Agency Gothic', 'Universal Film Billing Block'],
      tools: ['Canva', 'Ibis Paint']
    },

    'movie-poster-2': {
      id: 'movie-poster-2',
      title: '12 Angry Men Risograph Halftone Poster',
      tagline: 'Retro halftone screenprint character grid with single scarlet focal point honoring the classic courtroom drama.',
      category: 'movie-poster',
      categoryLabel: 'Movie Poster',
      badgeClass: 'bg-yellow',
      year: '2025',
      image: 'assets/images/MOVIE POSTER 2.jpg',
      serviceValue: 'Print Poster & Film Graphics',
      challenge: 'Pay homage to Sidney Lumet’s cinematic masterpiece 12 Angry Men using classic screen-printing and risograph halftone aesthetics.',
      solution: 'Created a 12-cell halftone dot portrait grid of the jury members, using high-contrast black and white with Juror #8 isolated in intense scarlet red symbolizing solitary conviction.',
      deliverables: [
        'Full-Bleed Screenprint Film Poster (A1 & A2)',
        'Halftone Dot Screen Frequency Calibrations',
        'Minimalist Tagline & Director Credit Block',
        'Gallery Exhibition Print File'
      ],
      swatches: [
        { name: 'Juror 8 Scarlet', hex: '#EF4444' },
        { name: 'Ink Noir', hex: '#09090B' },
        { name: 'Halftone Paper White', hex: '#FAFAFA' },
        { name: 'Shadow Dot Grey', hex: '#52525B' }
      ],
      typography: ['Baskerville Classic', 'Futura Condensed Bold', 'Didot'],
      tools: ['Canva', 'Ibis Paint']
    },

    'dp-frames-1': {
      id: 'dp-frames-1',
      title: 'UPLB Game Jam DP Frame',
      tagline: 'UPLB made up gamejam frame (not official frame).',
      category: 'dp-frames',
      categoryLabel: 'DP Frames',
      badgeClass: 'bg-yellow',
      year: '2026',
      image: 'assets/images/DP FRAMES.jpg',
      serviceValue: 'Brand Identity Design',
      challenge: 'Design a creative display picture frame concept for a student game jam event.',
      solution: 'UPLB made up gamejam frame (not official frame).',
      deliverables: [
        'Custom Profile Frame Overlay (PNG)',
        'Vector Border Artwork & Graphics',
        'Transparent Avatar Cutout Template',
        'High-Res Social Preview Graphic'
      ],
      swatches: [
        { name: 'Game Jam Green', hex: '#15803D' },
        { name: 'Pixel Gold', hex: '#EAB308' },
        { name: 'Midnight Navy', hex: '#0F172A' },
        { name: 'Pure White', hex: '#FFFFFF' }
      ],
      typography: ['Space Grotesk', 'Fredoka Bold', 'Inter'],
      tools: ['Canva', 'Ibis Paint']
    },

    'dp-frames-2': {
      id: 'dp-frames-2',
      title: 'Arts Month DP Blast Frame',
      tagline: 'Arts month DP blast frame for CCC Dibujo Creatives Org.',
      category: 'dp-frames',
      categoryLabel: 'DP Frames',
      badgeClass: 'bg-yellow',
      year: '2026',
      image: 'assets/images/DP FRAMES 2.jpg',
      serviceValue: 'Brand Identity Design',
      challenge: 'Create an expressive National Arts Month display picture frame for CCC Dibujo Creatives Org members.',
      solution: 'Arts month DP blast frame for CCC Dibujo Creatives Org.',
      deliverables: [
        'Social Media DP Blast Frame (PNG)',
        'Arts Month Thematic Cultural Elements',
        'Transparent Avatar Cutout Template',
        'Campaign Ready Export Graphic'
      ],
      swatches: [
        { name: 'Creative Magenta', hex: '#D946EF' },
        { name: 'Electric Cyan', hex: '#06B6D4' },
        { name: 'Deep Purple', hex: '#581C87' },
        { name: 'Stark White', hex: '#FFFFFF' }
      ],
      typography: ['Space Grotesk Bold', 'Inter', 'Fredoka'],
      tools: ['Canva', 'Ibis Paint']
    }
  };

  const projectOrder = [
    'illustration-branding-1',
    'illustration-branding-2',
    'social-media-1',
    'social-media-2',
    'social-media-3',
    'social-media-4',
    'social-media-5',
    'social-media-6',
    'landing-page-1',
    'landing-page-2',
    'magazine-1',
    'magazine-2',
    'movie-poster-1',
    'movie-poster-2',
    'dp-frames-1',
    'dp-frames-2'
  ];
  let currentModalProjectId = 'illustration-branding-1';

  // --------------------------------------------------------------------------
  // 2. WEB AUDIO SYNTHETIC SOUND FX (PLAYFUL TACTILE CLICKS)
  // --------------------------------------------------------------------------
  let soundEnabled = true;
  let audioCtx = null;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playPopSound(freq = 520, type = 'sine', duration = 0.08) {
    if (!soundEnabled) return;
    try {
      initAudioContext();
      if (!audioCtx) return;
      
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);
      
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not supported or blocked, fail silently
    }
  }

  const soundToggle = document.getElementById('soundToggle');
  const soundIcon = document.getElementById('soundIcon');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
      showToast(soundEnabled ? 'Playful sound effects ON 🔊' : 'Sound effects muted 🔇', soundEnabled ? '🔊' : '🔇');
      if (soundEnabled) playPopSound(600, 'triangle');
    });
  }

  // --------------------------------------------------------------------------
  // 3. TOAST NOTIFICATION UTILITY
  // --------------------------------------------------------------------------
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  const toastIcon = document.getElementById('toastIcon');
  let toastTimer = null;

  function showToast(message, icon = '✨') {
    if (!toast) return;
    toastMsg.textContent = message;
    if (toastIcon) toastIcon.textContent = icon;
    
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // --------------------------------------------------------------------------
  // 4. STICKY HEADER & SMOOTH SCROLL OBSERVER
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const navPills = document.querySelectorAll('.nav-pill');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sectionIds = ['home', 'work', 'about', 'services', 'certificates', 'contact'];

  function setActiveNavSection(id) {
    navPills.forEach(pill => {
      if (pill.getAttribute('data-section') === id) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    mobileNavLinks.forEach(link => {
      if (link.getAttribute('data-section') === id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function handleScrollNavigation() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Header shadow on scroll
    if (header) {
      if (scrollY > 30) {
        header.style.boxShadow = '0 4px 0px #1A1A1A';
      } else {
        header.style.boxShadow = 'none';
      }
    }

    // Scroll-Spy: Top of page -> Home
    if (scrollY < 140) {
      setActiveNavSection('home');
      return;
    }

    // Bottom of page -> Contact
    if (windowHeight + scrollY >= docHeight - 90) {
      setActiveNavSection('contact');
      return;
    }

    // Check each section in order
    const headerOffset = (header ? header.offsetHeight : 70) + 60;
    let currentSection = 'home';

    for (let i = 0; i < sectionIds.length; i++) {
      const sectionEl = document.getElementById(sectionIds[i]);
      if (sectionEl) {
        const rect = sectionEl.getBoundingClientRect();
        if (rect.top <= headerOffset) {
          currentSection = sectionIds[i];
        }
      }
    }

    setActiveNavSection(currentSection);

    if (!isNavClicking && currentSection !== lastSavedSection) {
      lastSavedSection = currentSection;
      sessionStorage.setItem('portfolio_active_section', currentSection);
      if (currentSection === 'home') {
        history.replaceState(null, null, window.location.pathname + window.location.search);
      } else {
        history.replaceState(null, null, `#${currentSection}`);
      }
    }
  }

  let scrollTicking = false;
  let isNavClicking = false;
  let lastSavedSection = '';

  window.addEventListener('scroll', () => {
    if (isNavClicking) return;
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        handleScrollNavigation();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Handle Tab Click Immediately
  navPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const sectionId = pill.getAttribute('data-section');
      if (sectionId) {
        e.preventDefault();
        setActiveNavSection(sectionId);
        isNavClicking = true;
        lastSavedSection = sectionId;
        sessionStorage.setItem('portfolio_active_section', sectionId);

        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.replaceState(null, null, window.location.pathname + window.location.search);
        } else {
          const targetEl = document.getElementById(sectionId);
          if (targetEl) {
            const headerHeight = header ? header.offsetHeight : 82;
            const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: targetPos, behavior: 'smooth' });
            history.replaceState(null, null, `#${sectionId}`);
          }
        }

        setTimeout(() => {
          isNavClicking = false;
        }, 850);
      }
    });
  });

  // Brand Logo click -> Home tab
  document.querySelectorAll('.brand-logo').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveNavSection('home');
      lastSavedSection = 'home';
      sessionStorage.setItem('portfolio_active_section', 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, null, window.location.pathname + window.location.search);
    });
  });

  // Restore section on page load / refresh
  function restoreSectionOnLoad() {
    let targetSection = '';
    const hash = window.location.hash ? window.location.hash.substring(1) : '';
    if (hash && sectionIds.includes(hash)) {
      targetSection = hash;
    } else {
      const saved = sessionStorage.getItem('portfolio_active_section');
      if (saved && sectionIds.includes(saved)) {
        targetSection = saved;
      }
    }

    if (targetSection && targetSection !== 'home') {
      const targetEl = document.getElementById(targetSection);
      if (targetEl) {
        setActiveNavSection(targetSection);
        isNavClicking = true;
        lastSavedSection = targetSection;

        // Perform instant scroll to target section with header offset
        const scrollToTarget = () => {
          const headerHeight = header ? header.offsetHeight : 82;
          const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: targetPos, behavior: 'instant' });
          setActiveNavSection(targetSection);
          setTimeout(() => {
            isNavClicking = false;
          }, 300);
        };

        // Scroll immediately and once again after render
        scrollToTarget();
        setTimeout(scrollToTarget, 100);
        return;
      }
    }

    handleScrollNavigation();
  }

  // Run restoration on load
  restoreSectionOnLoad();

  // Handle browser back/forward buttons
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash ? window.location.hash.substring(1) : 'home';
    if (sectionIds.includes(hash)) {
      setActiveNavSection(hash);
      const targetEl = document.getElementById(hash);
      if (targetEl) {
        const headerHeight = header ? header.offsetHeight : 82;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    }
  });

  // --------------------------------------------------------------------------
  // 5. MOBILE DRAWER NAVIGATION
  // --------------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileHireBtn = document.getElementById('mobileHireBtn');

  function openMobileDrawer() {
    mobileDrawer.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    playPopSound(440, 'sine');
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeMobileDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileDrawer);
  if (mobileHireBtn) mobileHireBtn.addEventListener('click', closeMobileDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
      playPopSound(500, 'sine');
    });
  });

  // --------------------------------------------------------------------------
  // 6. PORTFOLIO FILTER SYSTEM
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active states
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      playPopSound(620, 'triangle');

      // Filter project cards with transition
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filter === 'all' || cardCategory.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translate(0, 0) scale(1)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. PROJECT DETAILS MODAL SYSTEM
  // --------------------------------------------------------------------------
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalDescImg = document.getElementById('modalDescImg');
  const modalDescImgLink = document.getElementById('modalDescImgLink');
  const modalDescImgCaption = document.getElementById('modalDescImgCaption');
  const artworkPageIndicator = document.getElementById('artworkPageIndicator');
  const artworkPageNavBtns = document.getElementById('artworkPageNavBtns');
  const artworkPrevBtn = document.getElementById('artworkPrevBtn');
  const artworkNextBtn = document.getElementById('artworkNextBtn');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalTagline = document.getElementById('modalTagline');
  const modalYear = document.getElementById('modalYear');
  const modalChallenge = document.getElementById('modalChallenge');
  const modalSolution = document.getElementById('modalSolution');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalSwatches = document.getElementById('modalSwatches');
  const modalTypo = document.getElementById('modalTypo');
  const modalTools = document.getElementById('modalTools');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  let currentArtworkPageIndex = 0;
  let currentArtworkPages = [];

  function setArtworkPage(index) {
    if (!currentArtworkPages || currentArtworkPages.length === 0) return;
    currentArtworkPageIndex = Math.max(0, Math.min(index, currentArtworkPages.length - 1));
    const page = currentArtworkPages[currentArtworkPageIndex];

    if (modalDescImg) {
      modalDescImg.src = page.image;
      modalDescImg.alt = `${page.title} - ${page.sub || ''}`;
    }
    if (modalDescImgLink) {
      modalDescImgLink.href = page.image;
    }
    if (modalDescImgCaption) {
      modalDescImgCaption.textContent = `${page.title} — ${page.sub || 'Full Project Output Artwork'}`;
    }
    if (artworkPageIndicator) {
      artworkPageIndicator.textContent = `Page ${currentArtworkPageIndex + 1} of ${currentArtworkPages.length}: ${page.title}`;
    }
    if (artworkPrevBtn) {
      artworkPrevBtn.disabled = (currentArtworkPageIndex === 0);
    }
    if (artworkNextBtn) {
      artworkNextBtn.disabled = (currentArtworkPageIndex === currentArtworkPages.length - 1);
    }
  }

  if (artworkPrevBtn) {
    artworkPrevBtn.addEventListener('click', () => {
      if (currentArtworkPageIndex > 0) {
        setArtworkPage(currentArtworkPageIndex - 1);
        playPopSound(520, 'sine');
      }
    });
  }

  if (artworkNextBtn) {
    artworkNextBtn.addEventListener('click', () => {
      if (currentArtworkPageIndex < currentArtworkPages.length - 1) {
        setArtworkPage(currentArtworkPageIndex + 1);
        playPopSound(660, 'sine');
      }
    });
  }

  function populateModal(projectId) {
    const data = portfolioData[projectId];
    if (!data) return;

    currentModalProjectId = projectId;
    modalBadge.textContent = data.categoryLabel;
    modalBadge.className = `pill-mini ${data.badgeClass}`;

    modalProjectTitle.textContent = data.title;
    modalTagline.textContent = data.tagline;
    modalYear.textContent = data.year;
    modalChallenge.textContent = data.challenge;
    modalSolution.textContent = data.solution;

    // Configure artwork output and multi-page navigation (e.g. Magazine 1)
    if (data.pages && data.pages.length > 1) {
      currentArtworkPages = data.pages;
      if (artworkPageIndicator) artworkPageIndicator.style.display = 'inline-block';
      if (artworkPageNavBtns) artworkPageNavBtns.style.display = 'inline-flex';
      setArtworkPage(0);
    } else {
      currentArtworkPages = [{ title: data.title, sub: 'Full Project Output Artwork', image: data.image }];
      if (artworkPageIndicator) artworkPageIndicator.style.display = 'none';
      if (artworkPageNavBtns) artworkPageNavBtns.style.display = 'none';
      setArtworkPage(0);
    }

    // Deliverables
    modalDeliverables.innerHTML = '';
    data.deliverables.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalDeliverables.appendChild(li);
    });

    // Swatches
    modalSwatches.innerHTML = '';
    data.swatches.forEach(swatch => {
      const card = document.createElement('div');
      card.className = 'swatch-card';
      card.title = `Click to copy ${swatch.hex}`;
      card.innerHTML = `
        <div class="swatch-color" style="background-color: ${swatch.hex};"></div>
        <div class="swatch-hex">${swatch.hex}</div>
      `;
      card.addEventListener('click', () => {
        navigator.clipboard.writeText(swatch.hex).then(() => {
          showToast(`Copied ${swatch.hex} to clipboard!`);
          playPopSound(720, 'sine');
        });
      });
      modalSwatches.appendChild(card);
    });

    // Typography
    modalTypo.innerHTML = '';
    data.typography.forEach(font => {
      const span = document.createElement('span');
      span.className = 'typo-pill';
      span.textContent = font;
      modalTypo.appendChild(span);
    });

    // Tools
    modalTools.innerHTML = '';
    data.tools.forEach(tool => {
      const span = document.createElement('span');
      span.className = 'skill-badge';
      span.style.padding = '4px 12px';
      span.style.fontSize = '0.8rem';
      span.textContent = tool;
      modalTools.appendChild(span);
    });

    // Configure Inquire button in modal
    if (modalInquireBtn) {
      modalInquireBtn.onclick = () => {
        closeModal();
        prefillContactService(data.serviceValue);
      };
    }
  }

  function openModal(projectId) {
    populateModal(projectId);
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    playPopSound(580, 'sine');
  }

  function closeModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Open modal on project card click
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const projectId = card.getAttribute('data-id');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  // Close modal on outside click
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeModal();
    }
  });

  // Next / Prev navigation
  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', () => {
      const currentIndex = projectOrder.indexOf(currentModalProjectId);
      const prevIndex = (currentIndex - 1 + projectOrder.length) % projectOrder.length;
      populateModal(projectOrder[prevIndex]);
      playPopSound(480, 'sine');
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', () => {
      const currentIndex = projectOrder.indexOf(currentModalProjectId);
      const nextIndex = (currentIndex + 1) % projectOrder.length;
      populateModal(projectOrder[nextIndex]);
      playPopSound(540, 'sine');
    });
  }

  // Keyboard navigation for modal (ESC & Arrows)
  document.addEventListener('keydown', (e) => {
    if (projectModal.classList.contains('open')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') modalPrevBtn.click();
      if (e.key === 'ArrowRight') modalNextBtn.click();
    }
  });

  // Sound effect on external CV PDF download click
  const viewResumeBtn = document.getElementById('viewResumeBtn');
  if (viewResumeBtn) {
    viewResumeBtn.addEventListener('click', () => {
      playPopSound(500, 'sine');
    });
  }

  // --------------------------------------------------------------------------
  // 9. SERVICE BUTTONS PRE-FILL CONTACT FORM
  // --------------------------------------------------------------------------
  const serviceBookBtns = document.querySelectorAll('.service-book-btn');
  const serviceSelect = document.getElementById('serviceSelect');

  function prefillContactService(serviceName) {
    if (serviceSelect && serviceName) {
      serviceSelect.value = serviceName;
      // Scroll to contact form smoothly
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
        showToast(`Pre-selected: ${serviceName}`, '⚡');
        playPopSound(600, 'triangle');
      }
    }
  }

  serviceBookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceVal = btn.getAttribute('data-service-value');
      prefillContactService(serviceVal);
    });
  });

  // --------------------------------------------------------------------------
  // 10. REAL-TIME MANILA LOCAL CLOCK & ACTIVE STATUS
  // --------------------------------------------------------------------------
  const localTimeDisplay = document.getElementById('localTimeDisplay');
  const statusLabel = document.getElementById('statusLabel');

  function updateLocalClock() {
    if (!localTimeDisplay) return;

    try {
      const now = new Date();
      // Format time in Manila timezone (Asia/Manila, UTC+8)
      const options = {
        timeZone: 'Asia/Manila',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      localTimeDisplay.textContent = formatter.format(now);

      // Determine artist status based on Manila hour
      const hourOptions = { timeZone: 'Asia/Manila', hour: 'numeric', hour12: false };
      const currentHour = parseInt(new Intl.DateTimeFormat('en-US', hourOptions).format(now), 10);

      if (statusLabel) {
        if (currentHour >= 9 && currentHour < 21) {
          statusLabel.textContent = 'ARTIST IS ONLINE & CREATING 🟢';
        } else {
          statusLabel.textContent = 'ARTIST IS RESTING / DREAMING 🌙';
        }
      }
    } catch (e) {
      localTimeDisplay.textContent = new Date().toLocaleTimeString();
    }
  }

  updateLocalClock();
  setInterval(updateLocalClock, 1000);

  // --------------------------------------------------------------------------
  // 11. ONE-CLICK EMAIL COPY
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBtnText = document.getElementById('copyBtnText');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'rayvenedburato@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard!', '');
        playPopSound(700, 'sine');
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy Email';
        }, 2200);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 12. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');
  const resetFormBtn = document.getElementById('resetFormBtn');

  // Input elements
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const projectDetails = document.getElementById('projectDetails');

  // Error spans
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const serviceError = document.getElementById('serviceError');
  const detailsError = document.getElementById('detailsError');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!userName.value.trim()) {
        userName.classList.add('is-invalid');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        userName.classList.remove('is-invalid');
        nameError.classList.remove('visible');
      }

      // Validate Email
      if (!userEmail.value.trim() || !validateEmail(userEmail.value.trim())) {
        userEmail.classList.add('is-invalid');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        userEmail.classList.remove('is-invalid');
        emailError.classList.remove('visible');
      }

      // Validate Service
      if (!serviceSelect.value) {
        serviceSelect.classList.add('is-invalid');
        serviceError.classList.add('visible');
        isValid = false;
      } else {
        serviceSelect.classList.remove('is-invalid');
        serviceError.classList.remove('visible');
      }

      // Validate Details
      if (!projectDetails.value.trim() || projectDetails.value.trim().length < 10) {
        projectDetails.classList.add('is-invalid');
        detailsError.classList.add('visible');
        isValid = false;
      } else {
        projectDetails.classList.remove('is-invalid');
        detailsError.classList.remove('visible');
      }

      if (!isValid) {
        playPopSound(280, 'sawtooth', 0.15);
        showToast('Please check the required fields', '');
        return;
      }

      // Real transmission with tactile button state
      submitBtn.disabled = true;
      const spinner = submitBtn.querySelector('.submit-spinner');
      const submitText = submitBtn.querySelector('.submit-text');
      if (spinner) spinner.style.display = 'inline-block';
      if (submitText) submitText.textContent = 'Transmitting Message...';
      playPopSound(600, 'triangle');

      const payload = {
        name: userName.value.trim(),
        email: userEmail.value.trim(),
        service: serviceSelect.value,
        message: projectDetails.value.trim(),
        _subject: `Portfolio Inquiry: ${serviceSelect.value} from ${userName.value.trim()}`,
        _captcha: 'false',
        _template: 'table'
      };

      fetch('https://formsubmit.co/ajax/rayvenedburato@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(async (res) => {
        await res.json().catch(() => ({}));
        submitBtn.disabled = false;
        if (spinner) spinner.style.display = 'none';
        if (submitText) submitText.textContent = 'Send Message';

        contactForm.style.display = 'none';
        formSuccess.classList.add('visible');
        showToast('Message Dispatched to Rayven!', '');
        playPopSound(800, 'sine', 0.2);
        contactForm.reset();
      })
      .catch((err) => {
        console.warn('AJAX submit issue, using native form submit fallback', err);
        contactForm.submit();
      });
    });

    // Clear validation errors on input
    [userName, userEmail, serviceSelect, projectDetails].forEach(el => {
      if (el) {
        el.addEventListener('input', () => {
          el.classList.remove('is-invalid');
          const errorSpan = document.getElementById(`${el.name || el.id.replace('user', '').toLowerCase()}Error`);
          if (errorSpan) errorSpan.classList.remove('visible');
        });
      }
    });

    // Reset Form button
    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.classList.remove('visible');
        playPopSound(500, 'sine');
      });
    }
  }

  // --------------------------------------------------------------------------
  // 13. DYNAMIC 3D TILT ON HERO CHARACTER CARD (DESKTOP)
  // --------------------------------------------------------------------------
  const characterCard = document.getElementById('characterCard');
  if (characterCard && window.innerWidth > 1024) {
    characterCard.addEventListener('mousemove', (e) => {
      const rect = characterCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 8;
      const rotateY = (x / rect.width) * 8;
      characterCard.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    characterCard.addEventListener('mouseleave', () => {
      characterCard.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
      characterCard.style.transition = 'transform 0.4s ease';
    });

    characterCard.addEventListener('mouseenter', () => {
      characterCard.style.transition = 'none';
    });
  }

  // --------------------------------------------------------------------------
  // 14. DYNAMIC COPYRIGHT YEAR
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  // Welcome console message for fellow developers
  console.log(
    '%c✦ RAYVEN GRAPHIC ARTIST PORTFOLIO ✦\n%cModern Neo-Brutalist & Cartoonish Visual Playground\nEngineered with Semantic HTML5, Custom CSS3, and Modular JS.',
    'font-weight: bold; font-size: 14px; color: #1A1A1A; background: #FFD027; padding: 4px 8px; border: 2px solid #1A1A1A; border-radius: 4px;',
    'font-size: 11px; color: #525252; margin-top: 4px;'
  );

});

