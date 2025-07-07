// Analytics utilities for e-commerce tracking

interface Product {
  item_id: string
  item_name: string
  category: string
  price: number
  quantity?: number
  currency?: string
}

interface PurchaseData {
  transaction_id: string
  value: number
  currency: string
  items: Product[]
}

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
      page_title: title,
    })
  }
}

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// E-commerce specific tracking
export const trackPurchase = (data: PurchaseData) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: data.transaction_id,
      value: data.value,
      currency: data.currency,
      items: data.items,
    })
  }
}

export const trackAddToCart = (item: Product) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: item.currency || 'USD',
      value: item.price * (item.quantity || 1),
      items: [item],
    })
  }
}

export const trackRemoveFromCart = (item: Product) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'remove_from_cart', {
      currency: item.currency || 'USD',
      value: item.price * (item.quantity || 1),
      items: [item],
    })
  }
}

export const trackViewItem = (item: Product) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: item.currency || 'USD',
      value: item.price,
      items: [item],
    })
  }
}

export const trackBeginCheckout = (items: Product[], value: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'USD',
      value: value,
      items: items,
    })
  }
}

export const trackSearch = (searchTerm: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
    })
  }
}

export const trackSignUp = (method: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'sign_up', {
      method: method,
    })
  }
}

export const trackLogin = (method: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'login', {
      method: method,
    })
  }
}

// Track user engagement
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'button', `${buttonName} - ${location}`)
}

export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'form', formName)
}

export const trackDownload = (fileName: string) => {
  trackEvent('download', 'file', fileName)
}

export const trackOutboundLink = (url: string) => {
  trackEvent('click', 'outbound_link', url)
}
