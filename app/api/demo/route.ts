import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiter
const RATE_LIMIT_STORE: Record<string, { count: number; lastReset: number }> = {};
const LIMIT = 3; 
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const ip = (req.headers.get('x-forwarded-for') || '127.0.0.1').split(',')[0].trim();
    const now = Date.now();

    // 1. Geolocation Lookup
    let geoData = { city: 'Local', country: 'Uplink', lat: 14.5995, lon: 120.9842, isp: 'Internal Network' };
    if (ip !== '127.0.0.1' && ip !== '::1' && ip !== '::ffff:127.0.0.1') {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city,lat,lon,isp`);
        const geoJson = await geoRes.json();
        if (geoJson.status === 'success') geoData = geoJson;
      } catch (e) {}
    }

    // 2. Device Parsing
    const ua = data.userAgent || '';
    const device = ua.includes('Mobi') ? 'Mobile' : 'Desktop';
    let os = 'Unknown OS';
    if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Macintosh')) os = 'MacOS';
    else if (ua.includes('iPhone')) os = 'iOS';
    else if (ua.includes('iPad')) os = 'iOS';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('X11')) os = 'Linux / Unix';
    else if (ua.includes('CrOS')) os = 'ChromeOS';
    else if (ua.includes('Linux')) os = 'Linux';

    // 3. Rate Limiting Logic
    if (!RATE_LIMIT_STORE[ip]) {
      RATE_LIMIT_STORE[ip] = { count: 0, lastReset: now };
    }

    const userLimit = RATE_LIMIT_STORE[ip];
    if (now - userLimit.lastReset > WEEK_MS) {
      userLimit.count = 0;
      userLimit.lastReset = now;
    }

    if (userLimit.count >= LIMIT) {
      return NextResponse.json(
        { error: 'Signal Bandwidth Exceeded. Protocol allows 3 demo requests per week.' },
        { status: 429 }
      );
    }

    const rawPayload = JSON.stringify(data, null, 2);
    const encryptedPayload = Buffer.from(rawPayload).toString('base64');

    // 4. Email Transmission (OAuth2 for Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.SMTP_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: `"NELAX SYSTEM" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `[DEMO REQUEST] Protocol Initiated by ${data.name}`,
      text: `DEMO REQUEST RECEIVED:\n\n${rawPayload}\n\nSIGNATURE:\n${encryptedPayload}`,
      html: `
        <div style="background-color: #000000; color: #ffffff; padding: 50px 20px; font-family: 'Helvetica', 'Arial', sans-serif; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; border: 1px solid #333333; background: #0a0a0a; padding: 40px; border-top: 5px solid #ffcc00;">
            
            <div style="margin-bottom: 30px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 28px; letter-spacing: 5px; margin: 0; text-transform: uppercase; font-weight: 900;">Demo Protocol</h1>
              <p style="color: #ffcc00; font-size: 12px; letter-spacing: 3px; margin: 10px 0 0 0; font-weight: bold; text-transform: uppercase;">Uplink Status: Pending Preview</p>
            </div>

            <div style="border-bottom: 1px solid #333333; margin-bottom: 30px; padding-bottom: 15px;">
              <p style="font-size: 12px; color: #bbbbbb; margin: 5px 0; font-family: monospace;">TIMESTAMP: ${new Date().toISOString()}</p>
              <p style="font-size: 12px; color: #bbbbbb; margin: 5px 0; font-family: monospace;">SIGNAL_ISP: ${geoData.isp}</p>
              <p style="font-size: 12px; color: #bbbbbb; margin: 5px 0; font-family: monospace;">DEVICE_HW: ${os} | ${device}</p>
            </div>

            <div style="margin-bottom: 40px;">
              <h3 style="color: #ffcc00; font-size: 16px; text-transform: uppercase; letter-spacing: 2px; border-left: 3px solid #ffcc00; padding-left: 15px; margin-bottom: 25px; font-weight: bold;">Officer Identity</h3>
              <table style="width: 100%; font-size: 14px; color: #ffffff; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; width: 40%; color: #888888; border-bottom: 1px solid #1a1a1a;">OFFICER</td><td style="padding: 10px 0; color: #ffffff; font-weight: bold; border-bottom: 1px solid #1a1a1a;">${data.name}</td></tr>
                <tr><td style="padding: 10px 0; color: #888888; border-bottom: 1px solid #1a1a1a;">SECURE_EMAIL</td><td style="padding: 10px 0; color: #ffffff; font-weight: bold; border-bottom: 1px solid #1a1a1a;">${data.email}</td></tr>
                <tr><td style="padding: 10px 0; color: #888888; border-bottom: 1px solid #1a1a1a;">TARGET_SYSTEM</td><td style="padding: 10px 0; color: #ffcc00; font-weight: bold; border-bottom: 1px solid #1a1a1a;">${data.url}</td></tr>
              </table>
            </div>

            <div style="margin-bottom: 40px;">
              <h3 style="color: #ffcc00; font-size: 16px; text-transform: uppercase; letter-spacing: 2px; border-left: 3px solid #ffcc00; padding-left: 15px; margin-bottom: 25px; font-weight: bold;">Mission Brief</h3>
              <div style="background: #111111; padding: 30px; border: 1px solid #333333; border-radius: 4px; color: #ffffff; font-size: 14px; white-space: pre-wrap;">
                ${data.message}
              </div>
            </div>

            <div style="margin-bottom: 40px;">
              <h3 style="color: #ffcc00; font-size: 16px; text-transform: uppercase; letter-spacing: 2px; border-left: 3px solid #ffcc00; padding-left: 15px; margin-bottom: 25px; font-weight: bold;">Origin Trace</h3>
              <div style="background: #111111; padding: 15px; border: 1px solid #333333; border-radius: 4px; text-align: center;">
                <p style="font-size: 12px; color: #ffffff; margin-bottom: 10px; font-family: monospace;">
                  LOCATION: ${geoData.city}, ${geoData.country} (${geoData.lat}, ${geoData.lon})
                  ${ip === '127.0.0.1' || ip === '::1' ? '<br/><span style="color: #ffcc00; font-size: 10px;">[ SIMULATED UPLINK COORDINATES ]</span>' : ''}
                </p>
                <div style="border: 1px solid #444; overflow: hidden; border-radius: 4px;">
                   <img src="https://static-maps.yandex.ru/1.x/?ll=${geoData.lon},${geoData.lat}&z=12&l=map&size=500,250&lang=en_US" alt="Origin Map" style="width: 100%; height: auto; display: block; filter: grayscale(1) invert(1);" />
                </div>
              </div>
            </div>

            <div style="margin-top: 50px; padding-top: 25px; border-top: 1px solid #333333;">
              <p style="color: #888888; font-size: 11px; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">Uplink Signature</p>
              <div style="font-size: 11px; color: #555555; word-break: break-all; font-family: monospace; background: #000000; padding: 20px; border: 1px solid #222222; line-height: 1.5;">
                ${encryptedPayload}
              </div>
            </div>

          </div>
          <div style="text-align: center; margin-top: 40px; color: #888888; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: bold;">
            &copy; ${new Date().getFullYear()} NELAX SYSTEMS &bull; Demo Protocol Active
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    userLimit.count++;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo Transmission Error:', error);
    return NextResponse.json({ error: 'Signal Lost: Unable to Transmit Demo Protocol' }, { status: 500 });
  }
}