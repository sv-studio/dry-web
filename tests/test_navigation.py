"""
Test: Navigation Flow
Validates that all main pages are accessible and navigation links work correctly.
"""

from playwright.sync_api import sync_playwright
import sys

def test_navigation():
    """Test navigation between all main pages"""
    print("🧭 Testing navigation flow...")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Test Home page
            print("  ✓ Navigating to Home page...")
            page.goto('http://localhost:3000')
            page.wait_for_load_state('networkidle')
            assert page.title(), "Home page should have a title"
            print("  ✓ Home page loaded successfully")

            # Test navigation to Pricing
            print("  ✓ Clicking on Pricing link...")
            pricing_link = page.locator('a[href="/pricing"]').first
            pricing_link.click()
            page.wait_for_url('**/pricing', timeout=10000)
            assert '/pricing' in page.url, "Should navigate to /pricing"
            print("  ✓ Pricing page loaded successfully")

            # Test navigation back to Home
            print("  ✓ Navigating back to Home...")
            page.goto('http://localhost:3000')
            page.wait_for_load_state('networkidle')
            assert page.url == 'http://localhost:3000/', "Should be on home page"
            print("  ✓ Back to Home page")

            # Test navigation to Form
            print("  ✓ Navigating to Form page...")
            page.goto('http://localhost:3000/form')
            page.wait_for_load_state('networkidle')
            assert '/form' in page.url, "Should navigate to /form"

            # Verify form fields are present
            email_input = page.locator('input[name="email"]')
            assert email_input.is_visible(), "Email field should be visible"
            print("  ✓ Form page loaded with all fields")

            # Test footer links
            print("  ✓ Testing footer links...")
            page.goto('http://localhost:3000')
            page.wait_for_load_state('networkidle')

            privacy_link = page.locator('a[href="/privacy"]').first
            privacy_link.click()
            page.wait_for_url('**/privacy', timeout=10000)
            assert '/privacy' in page.url, "Should navigate to /privacy"
            print("  ✓ Privacy page loaded successfully")

            page.goto('http://localhost:3000')
            page.wait_for_load_state('networkidle')

            terms_link = page.locator('a[href="/terms"]').first
            terms_link.click()
            page.wait_for_url('**/terms', timeout=10000)
            assert '/terms' in page.url, "Should navigate to /terms"
            print("  ✓ Terms page loaded successfully")

            print("\n✅ All navigation tests passed!")

        except Exception as e:
            print(f"\n❌ Navigation test failed: {e}")
            sys.exit(1)

        finally:
            browser.close()

if __name__ == "__main__":
    test_navigation()
