(async function trackUserAnalytics() {
  try {
    // 1. Prevent re-tracking in the same session
    if (sessionStorage.getItem("analyticsTracked")) return;

    // 2. Detect and skip bots or Vercel crawlers
    if (
      /vercelbot|bot|crawl|spider|preview/i.test(navigator.userAgent) ||
      navigator.webdriver
    ) {
      console.log("🤖 Bot traffic skipped");
      return;
    }

    // 3. Fetch location info
    const locRes = await fetch("https://ipwho.is/");
    const locData = await locRes.json();

    // 4. Filter out suspicious "fake" results
    if (
      !locData.ip ||
      !locData.country ||
      (locData.country === "United States" && !locData.city)
    ) {
      console.log("❌ Skipping suspicious or bot-like request");
      return;
    }

    // 5. Detect browser and OS
    const ua = navigator.userAgent;
    const platform = navigator.platform;

    const browser = (() => {
      if (ua.includes("Chrome")) return "Chrome";
      if (ua.includes("Firefox")) return "Firefox";
      if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
      if (ua.includes("Edge")) return "Edge";
      return "Unknown";
    })();

    const os = (() => {
      if (platform.includes("Win")) return "Windows";
      if (platform.includes("Mac")) return "macOS";
      if (platform.includes("Linux")) return "Linux";
      if (/Android/i.test(ua)) return "Android";
      if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
      return "Unknown";
    })();

    const urlParams = new URLSearchParams(window.location.search);
    const customRef = urlParams.get("ref");
    const referrer =
      document.referrer || (customRef ? `CustomRef: ${customRef}` : "Direct");

    const analyticsData = {
      ip: locData.ip,
      city: locData.city,
      country: locData.country,
      continent: locData.continent,
      latitude: locData.latitude,
      longitude: locData.longitude,
      referrer,
      browser,
      os,
      timestamp: new Date().toISOString(),
    };

    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(analyticsData),
    });

    sessionStorage.setItem("analyticsTracked", "true");

    console.log("✅ Analytics sent:", analyticsData);
  } catch (err) {
    console.error("❌ Analytics error:", err);
  }
})();
