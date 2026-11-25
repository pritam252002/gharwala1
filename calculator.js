/**
 * GharKa - Interactive Subscription Plan Calculator
 */

document.addEventListener('DOMContentLoaded', () => {
  initSubscriptionCalculator();
});

function initSubscriptionCalculator() {
  const mealTypeRadios = document.querySelectorAll('.calc-radio-card[data-meal-type]');
  const tierRadios = document.querySelectorAll('.calc-radio-card[data-tier]');
  const daysSlider = document.getElementById('calcDaysSlider');
  const daysValueBadge = document.getElementById('calcDaysValue');

  const totalPriceEl = document.getElementById('calcTotalPrice');
  const perMealEl = document.getElementById('calcPerMeal');
  const savingsEl = document.getElementById('calcSavings');
  const subscribeCta = document.getElementById('calcSubscribeBtn');

  if (!daysSlider || !totalPriceEl) return;

  // Base rates per meal for 1-14 days
  const baseRates = {
    'student': 99,
    'veg-thali': 139,
    'jain': 145,
    'diet': 155
  };

  let selectedMealType = 'lunch'; // 'lunch', 'dinner', 'both'
  let selectedTier = 'veg-thali';
  let days = parseInt(daysSlider.value, 10) || 26;

  function recalculate() {
    let pricePerMeal = baseRates[selectedTier] || 139;

    // Monthly volume discount
    if (days >= 26) {
      pricePerMeal -= 15; // ₹15 off per meal for full month
    } else if (days >= 14) {
      pricePerMeal -= 8;
    } else if (days >= 6) {
      pricePerMeal -= 4;
    }

    // Both meals factor
    let mealsPerDay = 1;
    let comboDiscount = 0;
    if (selectedMealType === 'both') {
      mealsPerDay = 2;
      comboDiscount = 10; // Extra ₹10 off per meal when taking both
    }

    const effectiveMealPrice = Math.max(79, pricePerMeal - comboDiscount);
    const totalMeals = days * mealsPerDay;
    const totalCost = totalMeals * effectiveMealPrice;

    // Compare with average Delhi restaurant/Swiggy lunch (approx ₹220/meal)
    const restaurantCost = totalMeals * 220;
    const savings = Math.max(0, restaurantCost - totalCost);

    // Update UI
    daysValueBadge.textContent = `${days} Days`;
    totalPriceEl.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
    perMealEl.textContent = `Just ₹${effectiveMealPrice}/meal (${totalMeals} total meals)`;
    savingsEl.textContent = `🎉 You save approx. ₹${savings.toLocaleString('en-IN')} vs restaurant takeout!`;

    // WhatsApp CTA link
    const tierNameMap = {
      'student': 'Student Budget Dabba',
      'veg-thali': 'Classic Veg Thali',
      'jain': 'Satvik Jain Tiffin',
      'diet': 'Light & Diet Fit Plan'
    };

    const mealTypeNameMap = {
      'lunch': 'Lunch Only',
      'dinner': 'Dinner Only',
      'both': 'Both Lunch & Dinner'
    };

    const msg = encodeURIComponent(
      `Namaste GharKa! 🙏\nI customized a tiffin plan on your website:\n\n` +
      `• Plan: ${tierNameMap[selectedTier]}\n` +
      `• Schedule: ${mealTypeNameMap[selectedMealType]}\n` +
      `• Duration: ${days} Days (${totalMeals} meals)\n` +
      `• Calculated Total: ₹${totalCost.toLocaleString('en-IN')}\n\n` +
      `Please let me know how to start my subscription!`
    );

    if (subscribeCta) {
      subscribeCta.href = `https://wa.me/919811234567?text=${msg}`;
      subscribeCta.onclick = () => {
        if (typeof window.trackGA4Lead === 'function') {
          window.trackGA4Lead('Custom Plan Calculator', totalCost, {
            tier: selectedTier,
            mealType: selectedMealType,
            days: days
          });
        }
      };
    }
  }

  // Event Listeners
  mealTypeRadios.forEach(card => {
    card.addEventListener('click', () => {
      mealTypeRadios.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedMealType = card.getAttribute('data-meal-type');
      recalculate();
    });
  });

  tierRadios.forEach(card => {
    card.addEventListener('click', () => {
      tierRadios.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedTier = card.getAttribute('data-tier');
      recalculate();
    });
  });

  daysSlider.addEventListener('input', (e) => {
    days = parseInt(e.target.value, 10);
    recalculate();
  });

  // Initial calculation
  recalculate();
}
