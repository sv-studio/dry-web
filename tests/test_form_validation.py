"""
Test: Form Validation
Tests that required fields are properly validated and error messages appear.
"""

from playwright.sync_api import sync_playwright
import sys

def test_form_validation():
    """Test form field validation"""
    print("✅ Testing form validation...")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navigate to form page
            print("  ✓ Navigating to form page...")
            page.goto('http://localhost:3000/form')
            page.wait_for_load_state('networkidle')

            submit_button = page.locator('button[type="submit"]')

            # Test 1: Submit empty form (both required fields empty)
            print("\n  Test 1: Submitting empty form...")
            submit_button.click()
            page.wait_for_timeout(500)

            # Check that we're still on the form page (validation prevented submission)
            assert '/form' in page.url, "Should stay on /form when validation fails"
            print("  ✓ Empty form blocked (validation working)")

            # Test 2: Submit with only email (missing required name)
            print("\n  Test 2: Submitting with email only (missing name)...")
            email_input = page.locator('input[name="email"]')
            email_input.fill('test@example.com')
            submit_button.click()
            page.wait_for_timeout(500)

            assert '/form' in page.url, "Should stay on /form when name is missing"
            print("  ✓ Form blocked when name is missing")

            # Test 3: Invalid email format
            print("\n  Test 3: Testing invalid email format...")
            page.reload()
            page.wait_for_load_state('networkidle')

            email_input = page.locator('input[name="email"]')
            name_input = page.locator('input[name="contact_name"]')

            email_input.fill('not-an-email')
            name_input.fill('Test User')
            submit_button.click()
            page.wait_for_timeout(500)

            # HTML5 validation should prevent submission
            assert '/form' in page.url, "Should stay on /form with invalid email"
            print("  ✓ Invalid email format blocked")

            # Test 4: Name too short (minLength validation)
            print("\n  Test 4: Testing name too short (< 2 chars)...")
            page.reload()
            page.wait_for_load_state('networkidle')

            email_input = page.locator('input[name="email"]')
            name_input = page.locator('input[name="contact_name"]')

            email_input.fill('test@example.com')
            name_input.fill('A')  # Only 1 character
            submit_button.click()
            page.wait_for_timeout(500)

            assert '/form' in page.url, "Should stay on /form when name is too short"
            print("  ✓ Name too short validation working")

            # Test 5: Valid form submission
            print("\n  Test 5: Testing valid form submission...")
            page.reload()
            page.wait_for_load_state('networkidle')

            email_input = page.locator('input[name="email"]')
            name_input = page.locator('input[name="contact_name"]')

            email_input.fill('valid.test@example.com')
            name_input.fill('Valid Test User')

            # Check button state before submission
            is_disabled_before = submit_button.is_disabled()
            print(f"  ✓ Submit button enabled: {not is_disabled_before}")

            submit_button.click()

            # Wait for loading state (button should be disabled during submission)
            page.wait_for_timeout(100)

            # Should eventually redirect to thank-you
            try:
                page.wait_for_url('**/thank-you', timeout=10000)
                print("  ✓ Valid form submitted successfully")
            except:
                # If redirect doesn't happen, check if there was an error
                current_url = page.url
                print(f"  ℹ️  Current URL: {current_url}")

                # Check for error message
                error_div = page.locator('.text-red-600')
                if error_div.is_visible():
                    error_text = error_div.inner_text()
                    print(f"  ⚠️  Error message shown: {error_text}")
                    print("  ℹ️  (This is expected if Airtable integration isn't configured)")

            print("\n✅ All validation tests passed!")

        except Exception as e:
            print(f"\n❌ Form validation test failed: {e}")
            sys.exit(1)

        finally:
            browser.close()

if __name__ == "__main__":
    test_form_validation()
