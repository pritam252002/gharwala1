/**
 * GharKa - Menu Page Interactivity & Dynamic Renderer
 */

document.addEventListener('DOMContentLoaded', () => {
  initMenuTabs();
});

function initMenuTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn[data-category]');
  const dayButtons = document.querySelectorAll('.day-btn[data-day]');
  const dishesContainer = document.getElementById('dishesContainer');

  if (!dishesContainer || typeof weeklyMenuData === 'undefined') return;

  // Determine current day of week (0=Sun, 1=Mon, ..., 6=Sat)
  const daysMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayIndex = new Date().getDay();
  let currentDay = daysMap[todayIndex] || 'monday';
  let currentCategory = 'veg-thali';

  // Highlight initial active day
  dayButtons.forEach(btn => {
    if (btn.getAttribute('data-day') === currentDay) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Render initial menu
  renderDishes(currentDay, currentCategory);

  // Tab category switcher
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderDishes(currentDay, currentCategory);
    });
  });

  // Day of week switcher
  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dayButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDay = btn.getAttribute('data-day');
      renderDishes(currentDay, currentCategory);
    });
  });

  function renderDishes(day, category) {
    const dayData = weeklyMenuData[day];
    if (!dayData || !dayData[category]) {
      dishesContainer.innerHTML = `<div class="text-center" style="grid-column: 1/-1; padding: 3rem;"><p>Menu update in progress for this selection.</p></div>`;
      return;
    }

    const dishes = dayData[category];
    let html = '';

    dishes.forEach(dish => {
      const itemsListHtml = dish.includes.map(item => `<span class="dish-item-chip">✓ ${item}</span>`).join('');
      
      const whatsappMsg = encodeURIComponent(
        `Namaste GharKa! 🙏\nI'd like to order today's *${dish.title}* (${dish.mealTime}).\nPrice: ${dish.price}\nPlease confirm delivery availability!`
      );

      html += `
        <article class="dish-card">
          <div class="dish-image-wrap">
            <span class="badge badge-saffron dish-tag">${dish.tag}</span>
            <span class="dish-meal-time">${dish.mealTime}</span>
            <img src="${dish.image}" alt="${dish.title} - GharKa Tiffin Delhi" loading="lazy" width="400" height="260">
          </div>
          <div class="dish-content">
            <div class="dish-title-row">
              <h3>${dish.title}</h3>
              <div class="dish-price">${dish.price}</div>
            </div>
            <p class="dish-desc">${dish.desc}</p>

            <div class="dish-includes">
              <h5>What's Inside This Dabba:</h5>
              <div class="dish-items-list">
                ${itemsListHtml}
              </div>
            </div>

            <div class="dish-footer">
              <span class="nutrition-pill">🔥 ${dish.nutrition}</span>
              <a href="https://wa.me/919811234567?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" onclick="trackOrderClick('${dish.title}')">
                Order Dabba 🍲
              </a>
            </div>
          </div>
        </article>
      `;
    });

    dishesContainer.innerHTML = html;
  }
}

function trackOrderClick(dishName) {
  if (typeof window.trackGA4Lead === 'function') {
    window.trackGA4Lead('Menu Card Quick Order', 149, { dish: dishName });
  }
}
