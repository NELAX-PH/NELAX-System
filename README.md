# Glass-Metal Studio (NELAX SYSTEMS)

> [!CAUTION]
> **PROPRIETARY AND CONFIDENTIAL**
> This software and its architectural philosophies are the exclusive property of NELAX SYSTEMS. 
> **COPYING, REDISTRIBUTION, OR REVERSE-ENGINEERING OF THIS SYSTEM IS STRICTLY PROHIBITED.**

> **"The System Is The Product"**

A high-fidelity digital nervous system architected for premium software agencies. This is not a website; it is a hardened, forensic-grade operational portal designed to bridge the gap between business logic and user experience.

## 🏛️ Architectural Philosophy

The studio operates on the **8 Laws of UI Physics**:
- **Divine Proportions:** Grids strictly anchored to the Golden Ratio (φ - 1.618).
- **Glassmorphism Physics:** Multi-layered optical refractions and specular lighting.
- **Hick's Law Optimization:** Intent-based portal navigation to eliminate decision fatigue.
- **Fitt's Law Precision:** Thumb-zone optimized CTAs for high-conversion mobile interaction.
- **Zero-Latency Runtime:** Sub-800ms interactivity via Next.js Server Components.

## 🛠️ Technical Stack

- **Core:** [Next.js 15+](https://nextjs.org/) (App Router, Server Components)
- **Physics Engine:** [Framer Motion](https://www.framer.com/motion/)
- **Fluid Dynamics:** [Lenis Smooth Scroll](https://lenis.darkroom.engineering/)
- **Signal Transmission:** [Nodemailer](https://nodemailer.com/) with **Gmail OAuth2**
- **Forensic Intelligence:** IP-API Geolocation & Hardware Fingerprinting
- **Styling:** Tailwind CSS with Custom Metallic Chromatographic Scale

## 📡 System Protocols

### 1. The Initiate Protocol (`/initiate`)
A multi-branch, dynamic onboarding sequence that captures:
- **Identity Verification:** Name, Email, and Organization.
- **Strategic Intent:** Rebuild, Audit, or Retainer tracks.
- **Technical Requirements:** Core modules, system nodes, and aesthetic preferences.
- **Resource Allocation:** Aligned SME-friendly investment tiers.

### 2. The Forensic Audit (`/api/transmit`)
Automated reporting system that delivers a high-contrast technical briefing to the administrator:
- **Uplink Hash:** Cryptographic signal verification.
- **Origin Trace:** Real-time IP geolocation with embedded Yandex maps.
- **Hardware Specs:** Device and OS identification.
- **Encrypted Signature:** Base64-obfuscated data payload.

### 3. The Demo Protocol (`/demo`)
A secure channel for requesting architectural previews, governed by a 3-transmission/week rate limit.

## 🚀 Setup & Deployment

### Environment Configuration
Create a `.env.local` file in the root directory:

```bash
# Admin Configuration
ADMIN_EMAIL=your-recipient@email.com

# Gmail OAuth2 (Required for Secure Signal Transmission)
SMTP_USER=your-sender-gmail@gmail.com
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REFRESH_TOKEN=your-google-refresh-token
```

### Protocol for OAuth2 Generation
1. Enable the **Gmail API** in Google Cloud Console.
2. Create **OAuth 2.0 Client IDs** (Web Application).
3. Add `https://developers.google.com/oauthplayground` to authorized redirect URIs.
4. Use the playground with scope `https://mail.google.com/` to generate your **Refresh Token**.

### Installation
```bash
npm install
npm run dev
```

## 🔒 Security & Rate Limiting
The system implements a protocol-level lock (in-memory store) restricting transmissions to **2-3 signals per week** per IP address to ensure signal integrity and prevent saturation.

---
© 2026 NELAX SYSTEMS &bull; SECURE TRANSMISSION ENABLED
