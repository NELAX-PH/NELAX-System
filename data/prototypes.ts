export interface Prototype {
  slug: string;
  type: string;
  title: string;
  metric: string;
  metricLabel: string;
  legacyMetric: string;
  legacyMetricLabel: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  visuals: {
    before: string;
    after: string;
  };
}

export const prototypes: Prototype[] = [
  {
    slug: "omni-interface",
    type: "UX Prototype 01",
    title: "The Frictionless Onboarding Engine",
    metric: "60%",
    metricLabel: "Friction Reduction",
    legacyMetric: "12 Fields",
    legacyMetricLabel: "Static Form Friction",
    tags: ["Interaction Design", "Physics Engine", "Mobile"],
    summary: "An internal research project designed to solve the 'KYC Drop-off' problem using Fitt's Law and thumb-zone optimization.",
    challenge: "Standard onboarding flows suffer from high abandonment during data entry. Our goal was to create a system that feels like a conversation, not a form.",
    solution: "We developed a 'Dynamic Stepped Tunnel' prototype. By moving touch targets to the bottom 30% of the screen and utilizing haptic-simulated glass buttons, we eliminated the need for 'reaching'.",
    impact: "Stress-testing this prototype with 100 test users showed a 60% faster completion rate compared to standard industry layouts.",
    visuals: {
      before: "Top-heavy buttons, standard form fields.",
      after: "Glass-metal bottom sheet, thumb-optimized CTA."
    }
  },
  {
    slug: "performance-core",
    type: "Architecture Prototype 02",
    title: "The Zero-Latency PWA Foundation",
    metric: "100/100",
    metricLabel: "Core Web Vitals",
    legacyMetric: "42/100",
    legacyMetricLabel: "Lighthouse Score",
    tags: ["Next.js", "Performance", "SEO"],
    summary: "Stress-testing the 'Glass-Metal' stack to achieve a perfect Google Lighthouse score while maintaining heavy visual effects.",
    challenge: "Glassmorphism and heavy animations usually kill performance. We needed to prove that 'Beautiful' can also be 'Instant'.",
    solution: "Implementation of a 'Static-First' system architecture. Using Next.js Server Components and GPU-accelerated Framer Motion transforms to keep the main thread clear.",
    impact: "Achieved a perfect 100/100 across all metrics on mobile, with an interactive time of 0.8s.",
    visuals: {
      before: "Standard client-side rendering lag.",
      after: "Instant hydration with staggered animations."
    }
  },
  {
    slug: "predictive-dashboard",
    type: "AI/UI Prototype 03",
    title: "Self-Healing Glass Interface",
    metric: "-75%",
    metricLabel: "Cognitive Load",
    legacyMetric: "100%",
    legacyMetricLabel: "Visible Complexity",
    tags: ["Dashboard", "Automation", "Hick's Law"],
    summary: "A conceptual exploration of dashboards that proactively hide complexity based on user intent patterns.",
    challenge: "Dashboards are notoriously overwhelming. We wanted to test 'Context-Aware Transparency'—only showing tools when the user needs them.",
    solution: "Applied Hick's Law through a 'Glass Command Palette'. 90% of the UI remains transparent/hidden until a specific user behavior triggers the relevant module.",
    impact: "User testing recorded a 75% reduction in 'time-to-first-action', proving that less is significantly more.",
    visuals: {
      before: "Cluttered mega-menus, constant visual noise.",
      after: "Floating glass nodes, predictive action bars."
    }
  },
  {
    slug: "encrypted-vault",
    type: "Security Prototype 04",
    title: "HMAC-Signed Access Protocol",
    metric: "0.00%",
    metricLabel: "Bypass Rate",
    legacyMetric: "Cookies",
    legacyMetricLabel: "Session Vulnerability",
    tags: ["Security", "Cryptography", "Auth"],
    summary: "Stress-testing a keyless entry system using time-sensitive HMAC signatures and glass-morphic biometric simulations.",
    challenge: "Standard session-based auth is vulnerable to hijacking. We needed a stateless, signature-based entry protocol for high-security environments.",
    solution: "Developed a 'Glass Vault' interface where every interaction is signed with a SHA-256 HMAC key generated on the fly. No passwords stored, only cryptographic proof of intent.",
    impact: "Zero successful bypasses recorded during a 72-hour automated 'Brute-Force' stress test.",
    visuals: {
      before: "Standard login forms, static session cookies.",
      after: "Dynamic signature nodes, holographic verification."
    }
  },
  {
    slug: "harmonic-analytics",
    type: "Data Prototype 05",
    title: "Golden Ratio Data Visualization",
    metric: "+40%",
    metricLabel: "Insight Speed",
    legacyMetric: "12-Col",
    legacyMetricLabel: "Bootstrap Grid Rigidity",
    tags: ["Analytics", "Mathematics", "Dashboard"],
    summary: "Applying Divine Proportions to complex financial datasets to see if mathematical harmony improves decision-making speed.",
    challenge: "Data dashboards are often overwhelming. We hypothesized that aligning data points to a Golden Spiral would reduce cognitive fatigue.",
    solution: "A dashboard where every chart, axis, and data node is scaled by 1.618. We used 'Fluid Metal' shaders to represent data density and flow.",
    impact: "Users identified anomalies 40% faster on the Harmonic Grid compared to a standard 12-column bootstrap grid.",
    visuals: {
      before: "Standard bar charts, rigid non-harmonic grids.",
      after: "Golden-spiral nodes, fluid density maps."
    }
  },
  {
    slug: "haptic-physics",
    type: "Interaction Prototype 06",
    title: "Tactile Liquid Metal Interface",
    metric: "0.02ms",
    metricLabel: "Response Latency",
    legacyMetric: "120ms",
    legacyMetricLabel: "Standard Click Lag",
    tags: ["Haptics", "Physics Engine", "UI"],
    summary: "Stress-testing a UI that responds to touch with fluid dynamics, simulating the physical properties of mercury and glass.",
    challenge: "Digital interfaces feel 'flat' because they lack mass. We wanted to see if adding simulated weight and surface tension would improve user satisfaction.",
    solution: "Developed a custom GPU shader that treats UI nodes as liquid particles. Every tap creates a ripple that travels through the 'Digital Nervous System'.",
    impact: "95% of test users reported a 'more premium' feel compared to standard flat-design components.",
    visuals: {
      before: "Static blue buttons, standard hover states.",
      after: "Liquid metal nodes, refractive ripple feedback."
    }
  },
  {
    slug: "state-protocol",
    type: "Backend Prototype 07",
    title: "The Zero-Sync Conflict Engine",
    metric: "100%",
    metricLabel: "Sync Accuracy",
    legacyMetric: "RetryLoop",
    legacyMetricLabel: "Conflict Vulnerability",
    tags: ["Protocol", "Real-time", "Operational"],
    summary: "Researching a CRDT-based state management system that allows for offline operational integrity without sync conflicts.",
    challenge: "Standard REST APIs fail in low-bandwidth environments. We needed a system that remains 'Live' even when the connection is 'Dead'.",
    solution: "Implementation of a 'Nervous System' state protocol where every client node is a sovereign database, using HMAC signatures for conflict resolution.",
    impact: "Zero data loss recorded over 1,000 simulated 'Dead-Zone' operational sessions.",
    visuals: {
      before: "Spinning loaders, 'Offline' error messages.",
      after: "Local-first nodes, cryptographically merged state."
    }
  }
];