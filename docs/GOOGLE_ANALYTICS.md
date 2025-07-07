# Google Analytics Setup

## Configuration

Google Analytics ID: `G-93LMCY43LB` has been configured in the application.

## Files Modified

1. **Environment Variables** (`.env.local`):
   ```
   NEXT_PUBLIC_GA_ID=G-93LMCY43LB
   ```

2. **Components**:
   - `src/components/analytics/google-analytics.tsx` - Main GA component
   - `src/lib/analytics.ts` - Analytics utility functions

3. **Layout**: 
   - `src/app/layout.tsx` - GA component integrated

## Usage Examples

### Track Custom Events
```typescript
import { trackEvent } from '@/lib/analytics'

// Track button clicks
trackEvent('click', 'button', 'header-cta')

// Track form submissions
trackEvent('submit', 'form', 'contact-form')
```

### E-commerce Tracking
```typescript
import { trackAddToCart, trackPurchase, trackViewItem } from '@/lib/analytics'

// Track product view
trackViewItem({
  item_id: 'product-123',
  item_name: 'Amazing Product',
  category: 'Electronics',
  price: 99.99
})
```

## Features Implemented

- ✅ Page view tracking
- ✅ Custom event tracking  
- ✅ E-commerce events (purchase, add_to_cart, view_item, etc.)
- ✅ User engagement tracking (clicks, form submissions)
- ✅ Automatic route change tracking
- ✅ GDPR-friendly implementation

## Verification

After deployment, you can verify GA is working by:

1. Visiting your website
2. Checking the browser developer tools for GA requests
3. Using Google Analytics Real-Time reports
4. Using Google Tag Assistant browser extension
