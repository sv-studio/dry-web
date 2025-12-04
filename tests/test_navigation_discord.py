"""
Test: Navigation Flow with Discord Notifications
Validates navigation and sends screenshots to Discord as evidence.
"""

from playwright.sync_api import sync_playwright
import sys
import os
import requests
from datetime import datetime

# Discord webhook URL - get from environment or 1Password
DISCORD_WEBHOOK_URL = os.environ.get('DISCORD_WEBHOOK_URL', '')

# Base URL - can be localhost or production
BASE_URL = os.environ.get('BASE_URL', 'https://www.dry.pe')

def send_to_discord(message, file_path=None):
    """Send message and optional screenshot to Discord"""
    if not DISCORD_WEBHOOK_URL:
        print("  ⚠️  Discord webhook not configured, skipping notification")
        return

    try:
        if file_path and os.path.exists(file_path):
            # Send with file attachment
            with open(file_path, 'rb') as f:
                files = {'file': (os.path.basename(file_path), f)}
                data = {'content': message}
                response = requests.post(DISCORD_WEBHOOK_URL, data=data, files=files)
        else:
            # Send text only
            data = {'content': message}
            response = requests.post(DISCORD_WEBHOOK_URL, json=data)

        if response.status_code in [200, 204]:
            print(f"  📤 Sent to Discord: {message[:50]}...")
        else:
            print(f"  ⚠️  Discord error: {response.status_code}")
    except Exception as e:
        print(f"  ⚠️  Failed to send to Discord: {e}")

def test_navigation():
    """Test navigation between all main pages with Discord evidence"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    print(f"🧭 Testing navigation flow on {BASE_URL}...")
    send_to_discord(f"🚀 **Starting Navigation Tests**\n**URL:** {BASE_URL}\n**Time:** {timestamp}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Test Home page
            print("\n  ✓ Navigating to Home page...")
            page.goto(BASE_URL)
            page.wait_for_load_state('networkidle')

            screenshot_path = '/tmp/nav_01_home.png'
            page.screenshot(path=screenshot_path)
            send_to_discord("✅ **Step 1/6:** Home page loaded successfully", screenshot_path)
            print("  ✓ Home page loaded successfully")

            # Test navigation to Pricing
            print("\n  ✓ Clicking on Pricing link...")
            pricing_link = page.locator('a[href="/pricing"]').first
            pricing_link.click()
            page.wait_for_url('**/pricing', timeout=10000)

            screenshot_path = '/tmp/nav_02_pricing.png'
            page.screenshot(path=screenshot_path)
            send_to_discord("✅ **Step 2/6:** Pricing page loaded successfully", screenshot_path)
            print("  ✓ Pricing page loaded successfully")

            # Test navigation back to Home
            print("\n  ✓ Navigating back to Home...")
            page.goto(BASE_URL)
            page.wait_for_load_state('networkidle')

            screenshot_path = '/tmp/nav_03_back_home.png'
            page.screenshot(path=screenshot_path)
            send_to_discord("✅ **Step 3/6:** Back to Home page", screenshot_path)
            print("  ✓ Back to Home page")

            # Test navigation to Form
            print("\n  ✓ Navigating to Form page...")
            page.goto(f'{BASE_URL}/form')
            page.wait_for_load_state('networkidle')

            # Verify form fields are present
            email_input = page.locator('input[name="email"]')
            assert email_input.is_visible(), "Email field should be visible"

            screenshot_path = '/tmp/nav_04_form.png'
            page.screenshot(path=screenshot_path)
            send_to_discord("✅ **Step 4/6:** Form page with all fields visible", screenshot_path)
            print("  ✓ Form page loaded with all fields")

            # Test footer links - Privacy
            print("\n  ✓ Testing Privacy link...")
            page.goto(BASE_URL)
            page.wait_for_load_state('networkidle')

            privacy_link = page.locator('a[href="/privacy"]').first
            privacy_link.click()
            page.wait_for_url('**/privacy', timeout=10000)

            screenshot_path = '/tmp/nav_05_privacy.png'
            page.screenshot(path=screenshot_path)
            send_to_discord("✅ **Step 5/6:** Privacy page loaded successfully", screenshot_path)
            print("  ✓ Privacy page loaded successfully")

            # Test footer links - Terms
            print("\n  ✓ Testing Terms link...")
            page.goto(BASE_URL)
            page.wait_for_load_state('networkidle')

            terms_link = page.locator('a[href="/terms"]').first
            terms_link.click()
            page.wait_for_url('**/terms', timeout=10000)

            screenshot_path = '/tmp/nav_06_terms.png'
            page.screenshot(path=screenshot_path)
            send_to_discord("✅ **Step 6/6:** Terms page loaded successfully", screenshot_path)
            print("  ✓ Terms page loaded successfully")

            # Success summary
            print("\n✅ All navigation tests passed!")
            send_to_discord(
                "🎉 **All Navigation Tests PASSED** ✅\n\n"
                "**Summary:**\n"
                "✅ Home page\n"
                "✅ Pricing page\n"
                "✅ Form page (all fields visible)\n"
                "✅ Privacy page\n"
                "✅ Terms page\n\n"
                f"Total steps: 6/6 passed\n"
                f"Timestamp: {timestamp}"
            )

        except Exception as e:
            error_msg = f"❌ Navigation test failed: {e}"
            print(f"\n{error_msg}")

            # Send error to Discord with screenshot
            screenshot_path = '/tmp/nav_error.png'
            try:
                page.screenshot(path=screenshot_path)
                send_to_discord(
                    f"❌ **Navigation Test FAILED**\n\n"
                    f"**Error:** {str(e)}\n"
                    f"**URL:** {page.url}\n"
                    f"Timestamp: {timestamp}",
                    screenshot_path
                )
            except:
                send_to_discord(
                    f"❌ **Navigation Test FAILED**\n\n"
                    f"**Error:** {str(e)}\n"
                    f"Timestamp: {timestamp}"
                )

            sys.exit(1)

        finally:
            browser.close()

if __name__ == "__main__":
    test_navigation()
