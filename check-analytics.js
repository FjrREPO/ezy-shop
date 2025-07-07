// Simple GA checker
console.log('=== Google Analytics Checker ===');

// Check if gtag is loaded
if (typeof gtag !== 'undefined') {
    console.log('✅ gtag function is available');
    
    // Test send a custom event
    gtag('event', 'test_event', {
        'event_category': 'debugging',
        'event_label': 'analytics_test'
    });
    console.log('✅ Test event sent');
} else {
    console.log('❌ gtag function not found');
}

// Check dataLayer
if (typeof dataLayer !== 'undefined') {
    console.log('✅ dataLayer exists:', dataLayer);
} else {
    console.log('❌ dataLayer not found');
}

// Check GA ID
console.log('GA ID configured:', 'G-93LMCY43LB');
