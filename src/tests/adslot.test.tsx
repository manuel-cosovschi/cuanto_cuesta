import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";

const originalEnv = process.env.NODE_ENV;
const originalClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

function setNodeEnv(value: "production" | "development" | "test") {
  // process.env.NODE_ENV es readonly en types pero asignable en runtime.
  (process.env as Record<string, string | undefined>).NODE_ENV = value;
}

describe("AdSlot", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    setNodeEnv(originalEnv as "production" | "development" | "test");
    if (originalClientId === undefined) {
      delete process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
    } else {
      process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID = originalClientId;
    }
  });

  it("no renderiza nada en producción cuando el slot es placeholder (no numérico)", async () => {
    setNodeEnv("production");
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID = "ca-pub-3376595991418457";
    const { AdSlot } = await import("@/components/ads/AdSlot");
    const { container } = render(<AdSlot slot="home-bottom" />);
    expect(container.firstChild).toBeNull();
  });

  it("renderiza placeholder de desarrollo con slot placeholder", async () => {
    setNodeEnv("development");
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID = "ca-pub-3376595991418457";
    const { AdSlot } = await import("@/components/ads/AdSlot");
    const { container, getByText } = render(<AdSlot slot="home-bottom" />);
    expect(container.firstChild).not.toBeNull();
    expect(getByText(/Slot publicitario/i)).toBeTruthy();
  });

  it("renderiza el bloque adsbygoogle cuando el slot es numérico", async () => {
    setNodeEnv("production");
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID = "ca-pub-3376595991418457";
    const { AdSlot } = await import("@/components/ads/AdSlot");
    const { container } = render(<AdSlot slot="1234567890" />);
    const ins = container.querySelector("ins.adsbygoogle");
    expect(ins).not.toBeNull();
    expect(ins?.getAttribute("data-ad-slot")).toBe("1234567890");
    expect(ins?.getAttribute("data-ad-client")).toBe("ca-pub-3376595991418457");
  });

  it("override de NEXT_PUBLIC_ADSENSE_CLIENT_ID gana sobre el default hardcodeado", async () => {
    setNodeEnv("production");
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID = "ca-pub-9999999999999999";
    const { AdSlot } = await import("@/components/ads/AdSlot");
    const { container } = render(<AdSlot slot="1234567890" />);
    const ins = container.querySelector("ins.adsbygoogle");
    expect(ins?.getAttribute("data-ad-client")).toBe("ca-pub-9999999999999999");
  });
});
