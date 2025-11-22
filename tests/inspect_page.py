"""
Quick script to inspect what's actually on the page
"""

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    page.goto('http://localhost:3000')
    page.wait_for_load_state('networkidle')

    print("🔍 Inspecting page structure...\n")

    # Find all links
    links = page.locator('a').all()
    print(f"📎 Found {len(links)} links:\n")

    for i, link in enumerate(links[:20]):  # First 20 links
        try:
            href = link.get_attribute('href') or 'no-href'
            text = link.inner_text().strip() or link.get_attribute('aria-label') or 'no-text'
            if text:
                print(f"  {i+1}. Text: '{text}' → {href}")
        except:
            pass

    # Take screenshot for reference
    page.screenshot(path='tests/inspect.png')
    print("\n📸 Screenshot saved: tests/inspect.png")

    browser.close()
