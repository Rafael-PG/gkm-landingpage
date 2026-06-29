---
name: motion-ui-animations
description: Motion (motion/react) UI animation patterns for buttons, cards, scroll animations, stagger children, AnimatePresence, and icon animations using brand colors and design tokens.
---

# Motion UI Animations

This project uses `motion/react` (formerly Framer Motion). All examples use the project's design tokens: `brand-dark`, `brand-red`, `brand-gray`, `brand-light`.

## Imports

```tsx
import { motion, AnimatePresence } from 'motion/react';
```

## Button Animations

### Primary Button (brand-red)
```tsx
<motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(229, 40, 34, 0.4)" }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-brand-red text-white font-semibold rounded-xl text-sm shadow-lg shadow-brand-red/30"
>
  Click me
</motion.button>
```

### Secondary / Ghost Button
```tsx
<motion.button
  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.8)' }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-transparent border border-gray-400 text-white font-semibold rounded-xl"
>
  Click me
</motion.button>
```

### Icon in Button (hover rotate/scale)
```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="flex items-center gap-2 px-8 py-4 bg-brand-red text-white rounded-xl"
>
  <span>Send</span>
  <motion.span whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
    <Send className="w-4 h-4" />
  </motion.span>
</motion.button>
```

## Scroll Animations (whileInView)

### Section Header
```tsx
<motion.div
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="text-center max-w-3xl mx-auto mb-16 space-y-3"
>
  <span className="text-brand-red font-bold text-xs tracking-widest uppercase">Section Tag</span>
  <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight">Section Title</h2>
</motion.div>
```

### Card Grid with Stagger
```tsx
<motion.div
  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  className="grid grid-cols-1 md:grid-cols-4 gap-6"
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)", borderColor: "rgba(229, 40, 34, 0.25)" }}
      className="bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 cursor-pointer hover:shadow-xl"
    >
      {/* card content */}
    </motion.div>
  ))}
</motion.div>
```

### Timeline / Process Step
```tsx
<motion.div
  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
  className="flex items-center gap-4 group"
>
  <div className="w-14 h-14 bg-brand-gray/20 border-2 border-brand-gray/40 rounded-full flex items-center justify-center text-white font-extrabold group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-300">
    01
    <span className="absolute inset-0 rounded-full border border-brand-red/40 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
  </div>
  <h3 className="font-display font-bold group-hover:text-brand-red transition-colors duration-300">Step Title</h3>
</motion.div>
```

### Timeline Connector Line
```tsx
<motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
  className="absolute top-[54px] left-12 right-12 h-0.5 bg-brand-gray/30 origin-left"
/>
```

## AnimatePresence (Form / Modal Transitions)

```tsx
<AnimatePresence mode="wait">
  {!submitted ? (
    <motion.div
      key="form"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* form content */}
    </motion.div>
  ) : (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      {/* success content */}
    </motion.div>
  )}
</AnimatePresence>
```

## Hero Section Background Effects

```tsx
{/* Floating blurred circles */}
<motion.div
  animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15], x: [0, 20, 0], y: [0, -20, 0] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-red rounded-full blur-[130px] pointer-events-none"
/>

{/* Grid overlay */}
<div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
```

## Shared Variants Object (Reusable)

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
```

## Spring Transition (for natural feel)

```tsx
transition={{ type: "spring", stiffness: 120, damping: 15 }}
```

Use on elements that need a bouncy, natural entrance — badges, pills, hero CTAs.

## Best Practices

- Use `viewport={{ once: true, margin: "-100px" }}` for scroll-triggered animations — triggers slightly before element enters viewport
- Always prefer `whileInView` over scroll event listeners
- Use `initial="hidden"` + `animate="visible"` for elements in the initial viewport
- Use `initial="hidden"` + `whileInView="visible"` for elements below the fold
- Use `transition: { type: "spring" }` for UI entrances (buttons, badges), `ease: "easeOut"` for content sections
- Group related items with `staggerChildren` for polished reveals
- Always set `mode="wait"` on `AnimatePresence` to prevent layout jumps
