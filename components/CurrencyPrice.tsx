'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CurrencyPriceProps {
  phpPrice: number;
  usdPrice: number;
  suffix?: string;
  className?: string;
}

export function CurrencyPrice({ phpPrice, usdPrice, suffix = '', className = '' }: CurrencyPriceProps) {
  const [currency, setCurrency] = useState<'PHP' | 'USD'>('PHP');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
      // Simple detection: If timezone is not Asia/Manila, default to USD
      // Or check if locale doesn't include 'PH'
      const isPH = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Manila' || 
                   navigator.language.includes('PH');
      
      if (!isPH) {
        setCurrency('USD');
      }
    });
  }, []);

  if (!mounted) return <span className={className}>...</span>;

  const formattedPrice = currency === 'PHP' 
    ? `₱${phpPrice.toLocaleString()}` 
    : `$${usdPrice.toLocaleString()}`;

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currency}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {formattedPrice}
          {suffix && <span className="text-sm font-normal opacity-50 ml-1">{suffix}</span>}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
