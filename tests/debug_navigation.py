"""
Debug navigation to see what's happening
"""

from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)  # Show browser
    page = browser.new_page()

    page.goto('http://localhost:3000')
    page.wait_for_load_state('networkidle')

    print(f"Initial URL: {page.url}")

    # Find pricing link
    pricing_link = page.locator('a[href="/pricing"]').first
    print(f"Found pricing link: {pricing_link.is_visible()}")

    # Click it
    print("Clicking pricing link...")
    pricing_link.click()

    # Wait a bit
    time.sleep(1)
    print(f"URL after click: {page.url}")

    # Wait for navigation
    try:
        page.wait_for_url('**/pricing', timeout=5000)
        print(f"Final URL: {page.url}")
    except Exception as e:
        print(f"Navigation timeout: {e}")
        print(f"Current URL: {page.url}")

    # Take screenshot
    page.screenshot(path='tests/debug_pricing.png')
    print("Screenshot saved: tests/debug_pricing.png")

    time.sleep(3)  # Keep browser open to see
    browser.close()
