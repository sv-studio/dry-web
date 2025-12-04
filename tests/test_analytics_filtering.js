// Test Analytics Filtering - Manual Browser Test
// Copia y pega esto en la consola de https://dry.pe

async function testAnalyticsFiltering() {
  console.log('🧪 Starting Analytics Filtering Test...\n');

  // Test 1: Check current state
  const currentState = localStorage.getItem('sv-dev-user');
  console.log('📊 Test 1: Current State');
  console.log('  Dev mode:', currentState === 'true' ? '✅ ACTIVE' : '❌ INACTIVE');
  console.log('  localStorage value:', currentState || 'null');
  console.log('');

  // Test 2: Test with dev mode ON
  console.log('📊 Test 2: Dev Mode ON');
  localStorage.setItem('sv-dev-user', 'true');
  console.log('  ✅ Activated dev mode');
  console.log('  💡 Reload the page and check for: "🚫 Analytics blocked"');
  console.log('');

  // Test 3: Test with dev mode OFF
  console.log('📊 Test 3: Dev Mode OFF (run this after Test 2)');
  console.log('  Run: localStorage.removeItem("sv-dev-user")');
  console.log('  Then reload');
  console.log('  💡 Should NOT see "🚫 Analytics blocked" message');
  console.log('');

  // Test 4: Network monitoring
  console.log('📊 Test 4: Network Monitoring');
  console.log('  1. Open DevTools → Network tab');
  console.log('  2. Filter by "vercel" or "insights"');
  console.log('  3. Reload page');
  console.log('  With dev mode ON: No requests to vercel analytics');
  console.log('  With dev mode OFF: Should see requests');
  console.log('');

  console.log('✅ Test instructions ready!');
  console.log('👉 Start with Test 2, then reload the page');
}

// Run the test
testAnalyticsFiltering();
