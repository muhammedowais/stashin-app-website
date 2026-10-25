import { describe, expect, it } from "vitest";
import { legalPlainText } from "./legal";
import { privacySections } from "./privacy";
import { termsSections } from "./terms";

const privacy = legalPlainText(privacySections);
const terms = legalPlainText(termsSections);

describe("privacy policy", () => {
  it("covers Play Data safety and the absence of trackers", () => {
    expect(privacy).toContain("com.mowaisumer.stashin");
    expect(privacy).toContain("no user accounts");
    expect(privacy).toContain("zero third-party analytics SDKs");
    expect(privacy).toContain("zero ad networks");
    expect(privacy).toContain("zero telemetry or crash-tracking servers");
    expect(privacy).toContain("SQLite");
    expect(privacy).toContain("local media files");
  });

  it("discloses Google Drive appDataFolder backup and Limited Use", () => {
    expect(privacy).toContain("https://www.googleapis.com/auth/drive.appdata");
    expect(privacy).toContain("appDataFolder");
    expect(privacy).toContain("explicitly initiate backup or restore in Settings");
    expect(privacy).toContain("encrypted in transit via HTTPS/TLS");
    expect(privacy).toContain("never accessed by or transmitted to any developer server");
    expect(privacy).toContain("Google API Services User Data Policy");
    expect(privacy).toContain("Limited Use");
  });

  it("discloses biometrics, purchases, and deletion controls", () => {
    expect(privacy).toContain("expo-local-authentication");
    expect(privacy).toContain("BiometricPrompt");
    expect(privacy).toContain("strictly on-device");
    expect(privacy).toContain("Biometric templates are never read or stored");
    expect(privacy).toContain("Google Play Billing");
    expect(privacy).toContain("RevenueCat");
    expect(privacy).toContain("anonymous app user IDs");
    expect(privacy).toContain("stashin_pro");
    expect(privacy).toContain("Clear All Data");
    expect(privacy).toContain("Uninstall");
    expect(privacy).toContain("local JSON");
    expect(privacy).toMatch(/Google Drive backup/i);
  });
});

describe("terms of service", () => {
  it("covers local-first use, Pro pricing, refunds, IP, and liability", () => {
    expect(terms).toContain("$1.99");
    expect(terms).toContain("$14.99");
    expect(terms).toContain("7-day free trial");
    expect(terms).toContain("$29.99");
    expect(terms).toContain("Lifetime");
    expect(terms).toContain("Google Play");
    expect(terms).toMatch(/refund/i);
    expect(terms).toContain("Intellectual property");
    expect(terms).toContain("Limitation of liability");
    expect(terms).toContain("local-first");
    expect(terms).toMatch(/backup/i);
    expect(terms).toContain("com.mowaisumer.stashin");
  });
});
