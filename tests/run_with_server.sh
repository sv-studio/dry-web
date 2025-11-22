#!/bin/bash
#
# Run all tests with automatic server management
# This script uses the with_server.py helper to automatically:
# 1. Start the Next.js dev server
# 2. Wait for it to be ready
# 3. Run all tests
# 4. Stop the server when done
#

cd "$(dirname "$0")/.."

echo "🚀 Starting test suite with automatic server management..."
echo ""

# Use the with_server.py helper to manage the Next.js server
source venv-tests/bin/activate && \
python tests/with_server.py \
  --server "npm run dev" \
  --port 3000 \
  -- python tests/run_all_tests.py
