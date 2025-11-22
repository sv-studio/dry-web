# SV-Web Test Suite

Automated end-to-end tests for the SV company website using Playwright.

## 📁 Structure

```
tests/
├── README.md                    # This file
├── with_server.py               # Server lifecycle manager (from webapp-testing skill)
├── run_all_tests.py             # Main test runner
├── run_with_server.sh           # Convenience script (auto-starts server)
├── test_navigation.py           # Navigation flow tests
├── test_form_validation.py      # Form validation tests
├── test_form_submission.py      # Form submission tests (requires Airtable)
├── test_visual_responsive.py    # Visual regression tests
└── screenshots/                 # Generated screenshots

../venv-tests/                   # Python virtual environment (isolated)
```

## 🎯 Test Coverage

### 1. Navigation Tests (`test_navigation.py`)
- ✅ Home page loads
- ✅ Navigation to Pricing, Company, Form pages
- ✅ Footer links (Privacy, Terms)
- ✅ All pages accessible without errors

### 2. Form Validation (`test_form_validation.py`)
- ✅ Required field validation (email, name)
- ✅ Email format validation
- ✅ Name minimum length validation (2 chars)
- ✅ Valid form submission flow

### 3. Form Submission (`test_form_submission.py`)
- ✅ Complete form submission workflow
- ✅ Redirect to thank-you page
- ✅ **Duplicate submission detection** (verifies bug fix)
- ✅ Console error monitoring
- ⚠️  **Requires Airtable credentials** - currently commented out

### 4. Visual Responsive (`test_visual_responsive.py`)
- ✅ Screenshots at Desktop (1920x1080)
- ✅ Screenshots at Tablet (768x1024)
- ✅ Screenshots at Mobile (375x667)
- ✅ All pages captured for visual regression

## 🚀 Quick Start

### Option 1: Automatic (Recommended)
Server starts/stops automatically:
```bash
./tests/run_with_server.sh
```

### Option 2: Manual
Start server yourself, then run tests:
```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Run tests
source venv-tests/bin/activate
python tests/run_all_tests.py
```

### Option 3: Individual Test
Run a specific test file:
```bash
# Start server first
npm run dev

# In another terminal
source venv-tests/bin/activate
python tests/test_navigation.py
```

## 📸 Screenshots

After running `test_visual_responsive.py`, screenshots are saved in:
```
tests/screenshots/
├── home_desktop.png
├── home_tablet.png
├── home_mobile.png
├── pricing_desktop.png
├── pricing_tablet.png
... (18 total screenshots)
```

Use these for:
- Visual regression testing
- Design review
- Client demos
- Before/after comparisons

## ⚙️ Configuration

### Environment Setup
The tests use a dedicated virtual environment to avoid conflicts:
```bash
# Already created at: venv-tests/
# Includes: playwright, greenlet, pyee

# To reinstall if needed:
python3 -m venv venv-tests
source venv-tests/bin/activate
pip install playwright
playwright install chromium
```

### Airtable Integration
To test form submission with real Airtable integration:

1. Ensure `.env.local` has credentials:
   ```bash
   AIRTABLE_TOKEN=your_token
   AIRTABLE_BASE_ID=your_base_id
   ```

2. Uncomment this line in `run_all_tests.py`:
   ```python
   # 'test_form_submission.py',
   ```

3. Run tests - form will submit to Airtable

## 🐛 Debugging

### View browser in headed mode
Edit test file and change:
```python
browser = p.chromium.launch(headless=False)  # Shows browser
```

### Slow down actions
Add delays to see what's happening:
```python
page.wait_for_timeout(2000)  # Wait 2 seconds
```

### Check console logs
Console logs are captured automatically in `test_form_submission.py`

### Take debugging screenshots
```python
page.screenshot(path='tests/debug.png')
```

## 📊 CI/CD Integration

To run in CI (GitHub Actions, etc.):
```yaml
- name: Run E2E Tests
  run: |
    npm install
    python3 -m venv venv-tests
    source venv-tests/bin/activate
    pip install playwright
    playwright install chromium
    ./tests/run_with_server.sh
```

## 🔧 Troubleshooting

**Port 3000 already in use:**
```bash
# Kill existing server
lsof -ti:3000 | xargs kill -9
```

**Virtual environment not found:**
```bash
# Recreate it
python3 -m venv venv-tests
source venv-tests/bin/activate
pip install playwright
playwright install chromium
```

**Tests timing out:**
- Increase timeout in test files
- Check server is actually running on :3000
- Verify no firewall blocking localhost

## 📝 Adding New Tests

1. Create new test file: `tests/test_yourfeature.py`
2. Follow existing pattern:
   ```python
   from playwright.sync_api import sync_playwright
   import sys

   def test_your_feature():
       with sync_playwright() as p:
           browser = p.chromium.launch(headless=True)
           page = browser.new_page()
           # ... your test logic
           browser.close()

   if __name__ == "__main__":
       test_your_feature()
   ```
3. Add to `TESTS` list in `run_all_tests.py`
4. Run: `./tests/run_with_server.sh`

## 🎯 Test Philosophy

These tests follow the **critical path** approach:
- Focus on real user journeys
- Test what matters to the business (form submissions)
- Catch regressions before deployment
- Fast feedback loop (< 1 minute for full suite)

**Not included** (deliberately):
- Unit tests (use Jest/Vitest for those)
- API tests (use Postman/Thunder Client)
- Load tests (use k6/Artillery)

This is **E2E only** - testing the full stack as a user would experience it.
