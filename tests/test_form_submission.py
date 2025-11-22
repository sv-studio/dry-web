"""
Test: Contact Form Submission
Tests the complete flow of filling and submitting the contact form.
This is the CRITICAL user journey for the website.
"""

from playwright.sync_api import sync_playwright
import sys
import time

def test_form_submission():
    """Test complete form submission flow"""
    print("📧 Testing contact form submission...")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()

        # Enable console logging to monitor for errors
        page = context.new_page()
        console_logs = []

        def handle_console(msg):
            console_logs.append(f"{msg.type}: {msg.text}")

        page.on('console', handle_console)

        try:
            # Navigate to form page
            print("  ✓ Navigating to form page...")
            page.goto('http://localhost:3000/form')
            page.wait_for_load_state('networkidle')

            # Verify all form fields are visible
            print("  ✓ Verifying form fields...")
            email_input = page.locator('input[name="email"]')
            name_input = page.locator('input[name="contact_name"]')
            phone_input = page.locator('input[name="phone_number"]')
            company_input = page.locator('input[name="company"]')
            submit_button = page.locator('button[type="submit"]')

            assert email_input.is_visible(), "Email field should be visible"
            assert name_input.is_visible(), "Name field should be visible"
            assert phone_input.is_visible(), "Phone field should be visible"
            assert company_input.is_visible(), "Company field should be visible"
            assert submit_button.is_visible(), "Submit button should be visible"
            print("  ✓ All form fields visible")

            # Fill form with test data
            print("  ✓ Filling form with test data...")
            test_timestamp = int(time.time())
            email_input.fill(f'test.user.{test_timestamp}@example.com')
            name_input.fill('Test User Playwright')
            phone_input.fill('+51 999 888 777')
            company_input.fill('Test Company Ltd')
            print("  ✓ Form filled successfully")

            # Monitor for duplicate submission (the bug that was fixed)
            print("  ✓ Monitoring for duplicate submissions...")
            api_calls = []

            def handle_request(request):
                if '/api/contact' in request.url:
                    api_calls.append({
                        'url': request.url,
                        'method': request.method,
                        'timestamp': time.time()
                    })

            page.on('request', handle_request)

            # Submit form
            print("  ✓ Submitting form...")
            submit_button.click()

            # Wait for redirect to thank-you page
            page.wait_for_url('**/thank-you', timeout=10000)
            print("  ✓ Redirected to thank-you page")

            # Verify we're on the thank-you page
            assert '/thank-you' in page.url, "Should redirect to /thank-you"
            print("  ✓ Thank-you page loaded")

            # Check for duplicate submission bug
            api_post_calls = [call for call in api_calls if call['method'] == 'POST']
            print(f"  ✓ API POST calls detected: {len(api_post_calls)}")

            if len(api_post_calls) > 1:
                print(f"  ⚠️  WARNING: Multiple POST calls detected!")
                for i, call in enumerate(api_post_calls):
                    print(f"    Call {i+1}: {call['timestamp']}")
                print("  ❌ DUPLICATE SUBMISSION BUG DETECTED!")
                sys.exit(1)
            else:
                print("  ✅ No duplicate submissions (bug is fixed!)")

            # Check for console errors
            errors = [log for log in console_logs if 'error' in log.lower()]
            if errors:
                print(f"  ⚠️  Console errors detected:")
                for error in errors:
                    print(f"    {error}")

            print("\n✅ Form submission test passed!")

        except Exception as e:
            print(f"\n❌ Form submission test failed: {e}")
            print("\nConsole logs:")
            for log in console_logs:
                print(f"  {log}")
            sys.exit(1)

        finally:
            browser.close()

if __name__ == "__main__":
    test_form_submission()
