# Testing Analytics Filtering

Este documento describe cómo verificar que el filtrado de analytics funciona correctamente.

---

## Opción 1: Test Manual (Más Rápido)

### Paso 1: Test con Dev Mode ON

1. Abre **https://dry.pe** en Chrome
2. Presiona **F12** para abrir DevTools
3. Ve a la pestaña **Console**
4. Pega este código:

```javascript
// Activar dev mode
localStorage.setItem('sv-dev-user', 'true');
console.log('✅ Dev mode activated');
```

5. **Recarga la página** (Cmd+R)
6. **Verifica en consola** que aparece:
   ```
   ✅ Dev mode enabled - Analytics disabled
   🚫 Analytics blocked (dev user mode)
   ```

✅ **Resultado esperado:** Ambos mensajes deben aparecer

---

### Paso 2: Test con Dev Mode OFF

1. En la misma pestaña, pega:

```javascript
// Desactivar dev mode
localStorage.removeItem('sv-dev-user');
console.log('❌ Dev mode deactivated');
```

2. **Recarga la página** (Cmd+R)
3. **Verifica en consola** que **NO** aparece:
   - ❌ No debe aparecer: `🚫 Analytics blocked`

✅ **Resultado esperado:** El mensaje de bloqueo NO debe aparecer

---

### Paso 3: Test de Persistencia

1. Activa dev mode de nuevo:
   ```javascript
   localStorage.setItem('sv-dev-user', 'true');
   ```

2. Recarga la página
3. **Cierra la pestaña completamente**
4. **Abre una nueva pestaña** con https://dry.pe
5. Abre consola (F12)
6. Verifica que sigue apareciendo: `🚫 Analytics blocked`

✅ **Resultado esperado:** Dev mode persiste después de cerrar/abrir

---

### Paso 4: Test de Navegación (Opcional)

1. Con dev mode activo, navega a diferentes páginas:
   - Click en "Pricing"
   - Click en "Contact"
   - Vuelve a Home

2. En cada navegación, verifica la consola
3. Debe aparecer: `🚫 Analytics blocked` en cada página

✅ **Resultado esperado:** Bloqueo en todas las páginas

---

## Opción 2: Test Automatizado con Playwright

### Requisitos

```bash
# Activar virtual environment
source venv-tests/bin/activate

# Verificar Playwright instalado
playwright --version
```

### Ejecutar Tests

**Test completo (3 tests):**
```bash
python tests/test_analytics_filter.py
```

**Test individual:**
```bash
# Solo test de dev mode ON
python -c "from tests.test_analytics_filter import test_analytics_filtering_on; test_analytics_filtering_on()"

# Solo test de dev mode OFF
python -c "from tests.test_analytics_filter import test_analytics_filtering_off; test_analytics_filtering_off()"

# Solo test de persistencia
python -c "from tests.test_analytics_filter import test_persistence; test_persistence()"
```

**En producción:**
```bash
BASE_URL="https://dry.pe" python tests/test_analytics_filter.py
```

**En localhost:**
```bash
BASE_URL="http://localhost:3000" python tests/test_analytics_filter.py
```

---

### Output Esperado

```
🧪 ANALYTICS FILTERING TEST SUITE
============================================================

🧪 Test 1: Dev Mode ON - Should Block Analytics
============================================================
📍 Visiting: https://dry.pe?dev=true

📝 Console Messages:
  ✅ Dev mode enabled - Analytics disabled
  🚫 Analytics blocked (dev user mode)

✅ Verification:
  Dev mode enabled message: ✅
  Analytics blocked message: ✅
  localStorage value: true

📍 Navigating to /pricing to trigger more analytics...
  Analytics blocked on navigation: ✅

✅ TEST PASSED: Dev mode ON successfully blocks analytics

🧪 Test 2: Dev Mode OFF - Should Allow Analytics
============================================================
📍 Visiting: https://dry.pe?dev=false

📝 Console Messages:
  ❌ Dev mode disabled - Analytics enabled

✅ Verification:
  Dev mode disabled message: ✅
  Analytics blocked message: ❌ (should not appear)
  localStorage value: null

✅ TEST PASSED: Dev mode OFF allows analytics

🧪 Test 3: Persistence - Dev Mode Survives Reload
============================================================
📍 Step 1: Activating dev mode
  Initial localStorage: true

📍 Step 2: Reloading page (no ?dev parameter)

✅ Verification:
  localStorage persisted: ✅
  Analytics still blocked: ✅

✅ TEST PASSED: Dev mode persists across reloads

============================================================
✅ ALL TESTS COMPLETED
============================================================
```

---

## Opción 3: Test de Network (Manual)

Verifica que NO se envían requests a Vercel Analytics.

### Con Dev Mode ON:

1. Abre **https://dry.pe?dev=true**
2. Abre DevTools → **Network tab**
3. Filtra por: `vercel` o `insights`
4. Recarga la página
5. ✅ **Resultado esperado:** **0 requests** a dominios de Vercel Analytics

### Con Dev Mode OFF:

1. Abre **https://dry.pe?dev=false**
2. Abre DevTools → **Network tab**
3. Filtra por: `vercel` o `insights`
4. Recarga la página
5. ✅ **Resultado esperado:** Requests a `/_vercel/insights` o similar

---

## Troubleshooting

### "No veo el mensaje de bloqueo"

**Causa:** Dev mode no está activado
**Solución:**
```javascript
// Verifica estado
console.log(localStorage.getItem('sv-dev-user'));

// Si es null, activa:
localStorage.setItem('sv-dev-user', 'true');
location.reload();
```

### "Los mensajes aparecen pero luego desaparecen"

**Causa:** Console se está limpiando
**Solución:**
- En DevTools → Console
- Click derecho → "Preserve log"

### "El test automatizado falla"

**Posibles causas:**
1. Virtual environment no activado
2. Playwright no instalado
3. Site caído o muy lento

**Solución:**
```bash
source venv-tests/bin/activate
pip install playwright
playwright install chromium
python tests/test_analytics_filter.py
```

---

## Checklist Final

- [ ] ✅ Test manual con dev mode ON (mensaje de bloqueo aparece)
- [ ] ✅ Test manual con dev mode OFF (mensaje NO aparece)
- [ ] ✅ Test de persistencia (sobrevive reload)
- [ ] ✅ Test de navegación (bloquea en todas las páginas)
- [ ] ✅ Test automatizado pasa los 3 tests
- [ ] ✅ Network tab no muestra requests con dev mode ON

**Si todos pasan: ¡El filtro funciona correctamente! 🎉**

---

## Archivos Relacionados

- **Test Manual (JS):** `/Users/vicuna/sv-web/tests/test_analytics_filtering.js`
- **Test Automatizado (Python):** `/Users/vicuna/sv-web/tests/test_analytics_filter.py`
- **Documentación:** `/Users/vicuna/sv-web/ANALYTICS_FILTERING.md`
- **Implementación:**
  - `/Users/vicuna/sv-web/src/components/analytics-wrapper.tsx`
  - `/Users/vicuna/sv-web/src/components/dev-mode-toggle.tsx`

---

**Última actualización:** 2025-11-23
