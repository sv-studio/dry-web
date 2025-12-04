#!/usr/bin/env python3
"""
Test Analytics Filtering - Verifies dev mode blocks analytics correctly

This test validates that:
1. With dev mode ON: Analytics events are blocked
2. With dev mode OFF: Analytics events are sent
3. localStorage persistence works correctly
"""

import os
from playwright.sync_api import sync_playwright, expect

# Configuration
BASE_URL = os.getenv('BASE_URL', 'https://dry.pe')

def test_analytics_filtering_on():
    """Test that dev mode ON blocks analytics"""
    print("\n🧪 Test 1: Dev Mode ON - Should Block Analytics")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        # Track console messages
        console_messages = []
        page.on('console', lambda msg: console_messages.append(msg.text))

        # Visit with dev mode activation
        print(f"📍 Visiting: {BASE_URL}?dev=true")
        page.goto(f"{BASE_URL}?dev=true")
        page.wait_for_load_state('networkidle')

        # Wait a bit for analytics to initialize
        page.wait_for_timeout(2000)

        # Check console messages
        print("\n📝 Console Messages:")
        for msg in console_messages:
            print(f"  {msg}")

        # Verify dev mode was enabled
        dev_mode_enabled = any('Dev mode enabled' in msg for msg in console_messages)
        analytics_blocked = any('Analytics blocked' in msg for msg in console_messages)

        print("\n✅ Verification:")
        print(f"  Dev mode enabled message: {'✅' if dev_mode_enabled else '❌'}")
        print(f"  Analytics blocked message: {'✅' if analytics_blocked else '❌'}")

        # Check localStorage
        local_storage_value = page.evaluate('localStorage.getItem("sv-dev-user")')
        print(f"  localStorage value: {local_storage_value}")

        # Navigate to another page to trigger analytics again
        print("\n📍 Navigating to /pricing to trigger more analytics...")
        page.click('a[href="/pricing"]')
        page.wait_for_url('**/pricing')
        page.wait_for_timeout(1000)

        # Check if analytics was blocked again
        analytics_blocked_2 = any('Analytics blocked' in msg for msg in console_messages[-5:])
        print(f"  Analytics blocked on navigation: {'✅' if analytics_blocked_2 else '❌'}")

        if dev_mode_enabled and analytics_blocked and local_storage_value == 'true':
            print("\n✅ TEST PASSED: Dev mode ON successfully blocks analytics")
        else:
            print("\n❌ TEST FAILED: Dev mode not working correctly")

        browser.close()


def test_analytics_filtering_off():
    """Test that dev mode OFF allows analytics"""
    print("\n🧪 Test 2: Dev Mode OFF - Should Allow Analytics")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        # Track console messages
        console_messages = []
        page.on('console', lambda msg: console_messages.append(msg.text))

        # Visit with dev mode deactivation
        print(f"📍 Visiting: {BASE_URL}?dev=false")
        page.goto(f"{BASE_URL}?dev=false")
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(2000)

        # Check console messages
        print("\n📝 Console Messages:")
        for msg in console_messages:
            print(f"  {msg}")

        # Verify dev mode was disabled
        dev_mode_disabled = any('Dev mode disabled' in msg for msg in console_messages)
        analytics_blocked = any('Analytics blocked' in msg for msg in console_messages)

        print("\n✅ Verification:")
        print(f"  Dev mode disabled message: {'✅' if dev_mode_disabled else '❌'}")
        print(f"  Analytics blocked message: {'❌ (should not appear)' if not analytics_blocked else '⚠️ (should not block)'}")

        # Check localStorage
        local_storage_value = page.evaluate('localStorage.getItem("sv-dev-user")')
        print(f"  localStorage value: {local_storage_value or 'null'}")

        if not analytics_blocked and (local_storage_value is None or local_storage_value == 'false'):
            print("\n✅ TEST PASSED: Dev mode OFF allows analytics")
        else:
            print("\n❌ TEST FAILED: Analytics still being blocked")

        browser.close()


def test_persistence():
    """Test that dev mode persists across page reloads"""
    print("\n🧪 Test 3: Persistence - Dev Mode Survives Reload")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        # Step 1: Activate dev mode
        print("📍 Step 1: Activating dev mode")
        page.goto(f"{BASE_URL}?dev=true")
        page.wait_for_load_state('networkidle')

        initial_value = page.evaluate('localStorage.getItem("sv-dev-user")')
        print(f"  Initial localStorage: {initial_value}")

        # Step 2: Reload without parameter
        print("\n📍 Step 2: Reloading page (no ?dev parameter)")
        page.goto(BASE_URL)
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(1000)

        # Track console for analytics blocked message
        console_messages = []
        page.on('console', lambda msg: console_messages.append(msg.text))

        # Trigger a navigation to see analytics
        page.reload()
        page.wait_for_timeout(1000)

        persisted_value = page.evaluate('localStorage.getItem("sv-dev-user")')
        analytics_blocked = any('Analytics blocked' in msg for msg in console_messages)

        print("\n✅ Verification:")
        print(f"  localStorage persisted: {'✅' if persisted_value == 'true' else '❌'}")
        print(f"  Analytics still blocked: {'✅' if analytics_blocked else '❌'}")

        if persisted_value == 'true' and analytics_blocked:
            print("\n✅ TEST PASSED: Dev mode persists across reloads")
        else:
            print("\n❌ TEST FAILED: Dev mode did not persist")

        browser.close()


def run_all_tests():
    """Run all analytics filtering tests"""
    print("\n" + "=" * 60)
    print("🧪 ANALYTICS FILTERING TEST SUITE")
    print("=" * 60)

    try:
        test_analytics_filtering_on()
        test_analytics_filtering_off()
        test_persistence()

        print("\n" + "=" * 60)
        print("✅ ALL TESTS COMPLETED")
        print("=" * 60)

    except Exception as e:
        print(f"\n❌ Error during testing: {e}")
        raise


if __name__ == '__main__':
    run_all_tests()
