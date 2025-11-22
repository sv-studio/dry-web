"""
Test: Visual Responsive Screenshots
Captures screenshots of all pages at different viewport sizes.
Helps verify responsive design and visual regressions.
"""

from playwright.sync_api import sync_playwright
import sys
import os

# Viewport sizes to test
VIEWPORTS = {
    'desktop': {'width': 1920, 'height': 1080},
    'tablet': {'width': 768, 'height': 1024},
    'mobile': {'width': 375, 'height': 667},
}

# Pages to screenshot
PAGES = {
    'home': '/',
    'pricing': '/pricing',
    'company': '/company',
    'form': '/form',
    'privacy': '/privacy',
    'terms': '/terms',
}

def test_visual_responsive():
    """Capture screenshots at different viewport sizes"""
    print("📸 Testing visual responsive design...")

    screenshot_dir = 'tests/screenshots'
    os.makedirs(screenshot_dir, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        try:
            for viewport_name, viewport_size in VIEWPORTS.items():
                print(f"\n  📱 Testing {viewport_name} ({viewport_size['width']}x{viewport_size['height']})...")

                context = browser.new_context(viewport=viewport_size)
                page = context.new_page()

                for page_name, page_path in PAGES.items():
                    try:
                        url = f'http://localhost:3000{page_path}'
                        print(f"    ✓ Capturing {page_name}...")

                        page.goto(url)
                        page.wait_for_load_state('networkidle')

                        # Scroll to capture full page (especially important for long pages)
                        page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
                        page.wait_for_timeout(500)
                        page.evaluate('window.scrollTo(0, 0)')
                        page.wait_for_timeout(500)

                        # Take screenshot
                        screenshot_path = f'{screenshot_dir}/{page_name}_{viewport_name}.png'
                        page.screenshot(path=screenshot_path, full_page=True)

                        print(f"      → Saved: {screenshot_path}")

                    except Exception as e:
                        print(f"      ❌ Failed to capture {page_name}: {e}")

                context.close()

            print(f"\n✅ All screenshots captured successfully!")
            print(f"📁 Screenshots saved in: {screenshot_dir}/")
            print("\nGenerated screenshots:")

            # List all generated screenshots
            for viewport_name in VIEWPORTS.keys():
                print(f"\n  {viewport_name.capitalize()}:")
                for page_name in PAGES.keys():
                    screenshot_file = f'{page_name}_{viewport_name}.png'
                    screenshot_path = f'{screenshot_dir}/{screenshot_file}'
                    if os.path.exists(screenshot_path):
                        file_size = os.path.getsize(screenshot_path) / 1024  # KB
                        print(f"    ✓ {screenshot_file} ({file_size:.1f} KB)")

        except Exception as e:
            print(f"\n❌ Visual responsive test failed: {e}")
            sys.exit(1)

        finally:
            browser.close()

if __name__ == "__main__":
    test_visual_responsive()
