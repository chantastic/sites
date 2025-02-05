---
title: Scroll snippet
date: 2024-11-01
---

I have this snippet stored in Chrome DevTools. 
I use it to capture videos of blogposts and docs.  
A lot of it was written by an LLM (Claude).  
So, if there's missing (clear) attribution, let me know.

```js
const EasingFunctions = {
  // Standard CSS easing functions
  linear: t => t,
  ease: t => cubicBezier(0.25, 0.1, 0.25, 1.0)(t),
  easeIn: t => cubicBezier(0.42, 0, 1.0, 1.0)(t),
  easeOut: t => cubicBezier(0, 0, 0.58, 1.0)(t),
  easeInOut: t => cubicBezier(0.42, 0, 0.58, 1.0)(t),
  
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),

  
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (--t) * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - (--t) * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
  
  // Quint
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => 1 + (--t) * t * t * t * t,
  easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
  
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  
  // Exponential
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? 
    Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2,
  
  // Circular
  easeInCirc: t => 1 - Math.sqrt(1 - t * t),
  easeOutCirc: t => Math.sqrt(1 - (--t) * t),
  easeInOutCirc: t => t < 0.5 ? 
    (1 - Math.sqrt(1 - 4 * t * t)) / 2 : (Math.sqrt(1 - 4 * (t - 1) * t) + 1) / 2
};

// Helper function for cubic-bezier
function cubicBezier(x1, y1, x2, y2) {
  return t => {
    if (t === 0 || t === 1) return t;
    
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;
    
    const sampleCurveX = t => ((ax * t + bx) * t + cx) * t;
    const sampleCurveY = t => ((ay * t + by) * t + cy) * t;
    const sampleCurveDerivativeX = t => (3 * ax * t + 2 * bx) * t + cx;
    
    let x = t;
    for (let i = 0; i < 8; i++) {
      const currentX = sampleCurveX(x) - t;
      if (Math.abs(currentX) < 1e-7) break;
      const derivative = sampleCurveDerivativeX(x);
      if (Math.abs(derivative) < 1e-7) break;
      x -= currentX / derivative;
    }
    
    return sampleCurveY(x);
  };
}

function getScrollPosition(target) {
  if (typeof target === 'number') {
    return target;
  }
  
  if (typeof target === 'string') {
    const element = document.querySelector(target);
    if (!element) {
      console.warn(`Element with selector "${target}" not found`);
      return 0;
    }
    return element.getBoundingClientRect().top + window.pageYOffset;
  }
  
  if (target instanceof Element) {
    return target.getBoundingClientRect().top + window.pageYOffset;
  }
  
  console.warn('Invalid target specified');
  return 0;
}

function scrollToPosition({
  target = 0,
  offset = 0,
  duration = 0,
  easingFunction = EasingFunctions.linear,
  onComplete = () => {}
} = {}) {
  const targetPosition = getScrollPosition(target) - offset;
  const startingY = window.pageYOffset;
  const diff = targetPosition - startingY;
  let start = null;
  let animationFrame;

  function step(timestamp) {
    if (!start) start = timestamp;
    
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    const eased = easingFunction(percent);

    window.scrollTo({
      top: startingY + diff * eased,
      behavior: 'auto' // Prevent conflict with smooth scrolling
    });

    if (time < duration) {
      animationFrame = window.requestAnimationFrame(step);
    } else {
      onComplete();
    }
  }

  // If duration is 0, immediately scroll to position
  if (duration === 0) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'auto'
    });
    onComplete();
    return () => {};
  }

  animationFrame = window.requestAnimationFrame(step);

  return function cleanup() {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
  };
}

// Usage examples:

// 1. Scroll to specific position
scrollToPosition({
  target: 500,
  duration: 500,
  easingFunction: EasingFunctions.ease
});

// 2. Scroll to element by selector
// scrollToPosition({
//   // target: '#my-element',
//   target: document.querySelectorAll('h2')[10],
//   offset: 20, // Add 20px offset from the top
//   duration: 800,
//   easingFunction: EasingFunctions.easeInOutQuad,
//   onComplete: () => console.log('Scrolled to element!')
// });

// 3. Scroll to element reference
// const element = document.querySelector('.some-element');
// scrollToPosition({
//   target: element,
//   duration: 1000,
//   easingFunction: EasingFunctions.easeInOutCubic
// });
```

