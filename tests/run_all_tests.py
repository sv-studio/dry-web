"""
Test Runner: Executes all tests in sequence
Automatically starts the Next.js dev server before running tests.
"""

import subprocess
import sys
import os

# Test files to run (in order)
TESTS = [
    'test_navigation.py',
    'test_form_validation.py',
    'test_visual_responsive.py',
    # 'test_form_submission.py',  # Commented out: requires Airtable integration
]

def run_tests():
    """Run all tests sequentially"""
    print("=" * 60)
    print("🚀 SV-WEB Test Suite")
    print("=" * 60)

    failed_tests = []
    passed_tests = []

    # Change to tests directory
    tests_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(tests_dir)

    for test_file in TESTS:
        print(f"\n{'='*60}")
        print(f"Running: {test_file}")
        print('='*60)

        # Activate venv and run test
        venv_python = '../venv-tests/bin/python'

        result = subprocess.run(
            [venv_python, test_file],
            capture_output=False,
            text=True
        )

        if result.returncode == 0:
            passed_tests.append(test_file)
            print(f"\n✅ {test_file} PASSED")
        else:
            failed_tests.append(test_file)
            print(f"\n❌ {test_file} FAILED")

    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)

    print(f"\n✅ Passed: {len(passed_tests)}/{len(TESTS)}")
    for test in passed_tests:
        print(f"  ✓ {test}")

    if failed_tests:
        print(f"\n❌ Failed: {len(failed_tests)}/{len(TESTS)}")
        for test in failed_tests:
            print(f"  ✗ {test}")
        print("\n💡 Tip: Run individual tests with: python venv-tests/bin/python tests/<test_name>.py")
        sys.exit(1)
    else:
        print("\n🎉 All tests passed!")
        sys.exit(0)

if __name__ == "__main__":
    run_tests()
