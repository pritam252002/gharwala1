/**
 * GharKa - Weekly Rotating Menu Data
 * Categories: Veg Thali, Jain Satvik, Light / Diet, Student Budget
 */

const weeklyMenuData = {
  monday: {
    'veg-thali': [
      {
        id: 'mon-vt-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Shahi Paneer & Amritsari Chana Thali',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
        tag: 'Chef Special',
        price: '₹149',
        desc: 'Rich cottage cheese cubes simmered in cashew-tomato gravy, slow-cooked spiced chickpeas, steamed fragrant basmati, and ghee-brushed phulkas.',
        includes: ['4 Whole-Wheat Phulkas', 'Shahi Paneer', 'Amritsari Chole', 'Jeera Basmati Rice', 'Boondi Raita', 'Fresh Onion Salad'],
        nutrition: '640 kcal • 22g Protein'
      },
      {
        id: 'mon-vt-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Lauki Kofta & Panchmel Dal Thali',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Homestyle Comfort',
        price: '₹139',
        desc: 'Light melt-in-mouth bottle gourd dumplings in mildly spiced gravy, traditional 5-lentil Rajasthani tempered dal, and warm rotis.',
        includes: ['4 Soft Phulkas', 'Lauki Malai Kofta', 'Panchmel Dal Tadka', 'Steamed Rice', 'Roasted Papad', 'Green Chutney'],
        nutrition: '560 kcal • 19g Protein'
      }
    ],
    'jain': [
      {
        id: 'mon-jain-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Satvik Paneer Makhani & Moong Mogar',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
        tag: '100% Satvik Jain',
        price: '₹149',
        desc: 'Zero onion, zero garlic, no root vegetables. Fresh paneer in a sun-ripened tomato-melon seed reduction with yellow moong tadka.',
        includes: ['4 Desi Ghee Phulkas', 'Jain Paneer Makhani', 'Dhuli Moong Dal', 'Sada Chawal', 'Sweet Curd', 'Cucumber Salad'],
        nutrition: '590 kcal • 21g Protein'
      },
      {
        id: 'mon-jain-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Gatta Curry & Arhar Dal Satvik Thali',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Authentic Satvik',
        price: '₹139',
        desc: 'Tender steamed gram-flour dumplings in tangy yogurt gravy cooked without ginger or garlic, served with tempered toor dal.',
        includes: ['4 Phulkas', 'Jodhpuri Gatta Curry', 'Hing-Jeera Toor Dal', 'Steamed Rice', 'Kala Chana Sundal'],
        nutrition: '540 kcal • 18g Protein'
      }
    ],
    'diet': [
      {
        id: 'mon-diet-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Tofu Bhurji & High-Fiber Dal Palette',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
        tag: 'High Protein / Low GI',
        price: '₹159',
        desc: 'Organic crumbled tofu sautéed with bell peppers and greens, oil-free double-boiled masoor dal, and multigrain jowar-wheat rotis.',
        includes: ['3 Multigrain Rotis (Jowar+Wheat)', 'Bell Pepper Tofu Bhurji', 'Yellow Dal Tadka', 'Sprouted Moong Salad', 'Probiotic Buttermilk'],
        nutrition: '440 kcal • 26g Protein • Low Oil'
      },
      {
        id: 'mon-diet-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Grilled Paneer Tikka & Quinoa Khichdi',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
        tag: 'Calorie Counted',
        price: '₹159',
        desc: 'Air-seared paneer marinated in hung curd with whole spices, accompanied by organic vegetable-loaded protein quinoa khichdi.',
        includes: ['Grilled Paneer Cuts (120g)', 'Quinoa Moong Khichdi', 'Kachumber Salad', 'Flaxseed Raita'],
        nutrition: '410 kcal • 24g Protein • Gluten-Free Option'
      }
    ],
    'student': [
      {
        id: 'mon-stu-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Punjabi Rajma Masala & Jeera Rice Combo',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Campus Favorite',
        price: '₹99',
        desc: 'Generous portion of thick, Punjabi style red kidney beans, mountain of fluffy fragrant jeera rice, 3 soft rotis, and crisp onions.',
        includes: ['3 Soft Phulkas', 'Dilli Style Rajma', 'Jeera Basmati Rice Bowl', 'Sirka Onion & Hari Mirch'],
        nutrition: '610 kcal • 20g Protein'
      },
      {
        id: 'mon-stu-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Aloo Gobhi Adraki & Tadka Dal Tiffin',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Pocket Friendly',
        price: '₹99',
        desc: 'Homestyle dry spiced potatoes and cauliflower with fresh ginger slivers, homestyle yellow dal, rotis, and mango pickle.',
        includes: ['4 Soft Phulkas', 'Aloo Gobhi Adraki', 'Yellow Dal Fry', 'Steamed Rice', 'Aam ka Achaar'],
        nutrition: '530 kcal • 15g Protein'
      }
    ]
  },
  tuesday: {
    'veg-thali': [
      {
        id: 'tue-vt-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Kadai Paneer & Pili Dal Tadka Thali',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
        tag: 'Bestseller',
        price: '₹149',
        desc: 'Diced cottage cheese tossed with crunchy bell peppers in freshly pounded kadai masala, tempered arhar dal, phulkas, and rice.',
        includes: ['4 Ghee Phulkas', 'Kadai Paneer', 'Arhar Dal Tadka (Garlic-Cumin)', 'Peas Pulao', 'Boondi Raita', 'Chutney'],
        nutrition: '620 kcal • 23g Protein'
      },
      {
        id: 'tue-vt-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Baingan Bharta & Chana Dal Thali',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Dhabe Ka Tadka',
        price: '₹139',
        desc: 'Clay-oven smoked roasted eggplant mashed with tomatoes, green chillies, and peas, accompanied by hearty spiced Bengal gram dal.',
        includes: ['4 Phulkas', 'Dhungar Smoked Baingan Bharta', 'Chana Dal Fry', 'Steamed Rice', 'Sirka Pyaaz'],
        nutrition: '540 kcal • 18g Protein'
      }
    ],
    'jain': [
      {
        id: 'tue-jain-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Jain Sev Tamatar & Dal Panchmel',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
        tag: 'Malwi Special Satvik',
        price: '₹149',
        desc: 'Tangy tomato curry topped with crisp ratlami sev, rich protein 5-lentil dal without root vegetables, and fresh phulkas.',
        includes: ['4 Desi Ghee Phulkas', 'Jain Sev Tamatar Subzi', 'Dal Panchmel', 'Jeera Rice', 'Sweet Curd'],
        nutrition: '580 kcal • 18g Protein'
      },
      {
        id: 'tue-jain-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Paneer Bhurji & Moong Dal Mogar',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Rich Satvik',
        price: '₹139',
        desc: 'Crumbled fresh paneer tempered with cumin, tomatoes, and green coriander, alongside light yellow moong dal.',
        includes: ['4 Phulkas', 'Jain Paneer Bhurji', 'Moong Mogar Dal', 'Steamed Rice', 'Karela Fry Chips'],
        nutrition: '550 kcal • 22g Protein'
      }
    ],
    'diet': [
      {
        id: 'tue-diet-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Methi Paneer & Brown Rice Bowl',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
        tag: 'Heart Healthy',
        price: '₹159',
        desc: 'Fresh fenugreek leaves braised with low-fat cottage cheese in light spices, unpolished brown basmati rice, and sprouted salad.',
        includes: ['3 Ragi Rotis', 'Methi Low-Fat Paneer', 'Moong Dal Sprouts Chaat', 'Brown Rice Bowl', 'Cucumber Mint Raita'],
        nutrition: '430 kcal • 25g Protein'
      },
      {
        id: 'tue-diet-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Steamed Soya Chunks & Dal Palak',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
        tag: 'Power Protein',
        price: '₹159',
        desc: 'Tender soya nuggets tossed in iron-rich spinach-lentil gravy with zero refined oils, served with millet rotis.',
        includes: ['3 Bajra/Wheat Rotis', 'Soya Nugget Palak Gravy', 'Steamed Broccoli & Corn', 'Beetroot Salad'],
        nutrition: '390 kcal • 28g Protein'
      }
    ],
    'student': [
      {
        id: 'tue-stu-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Kadhi Pakora & Steamed Rice Feast',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'North Campus Classic',
        price: '₹99',
        desc: 'Creamy yogurt-besan kadhi with soft onion pakoras tempered with fenugreek and whole red chillies, served with basmati rice.',
        includes: ['3 Soft Phulkas', 'Dilli Style Kadhi Pakora', 'Steamed Rice', 'Aloo Jeera Subzi', 'Papad'],
        nutrition: '580 kcal • 16g Protein'
      },
      {
        id: 'tue-stu-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Black Chana Masala & Phulka Tiffin',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Homely High Energy',
        price: '₹99',
        desc: 'Rustic kala chana slow-cooked in a robust onion-tomato gravy, served with four hot phulkas and spicy lemon pickle.',
        includes: ['4 Soft Phulkas', 'Kala Chana Masala Tari', 'Moong Dal', 'Pickled Chillies', 'Salad'],
        nutrition: '520 kcal • 19g Protein'
      }
    ]
  },
  wednesday: {
    'veg-thali': [
      {
        id: 'wed-vt-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Dal Makhani & Paneer Butter Masala',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
        tag: 'Royal Wednesday',
        price: '₹149',
        desc: 'Overnight slow-simmered black urad lentils infused with white butter, paired with creamy paneer butter masala and ghee rotis.',
        includes: ['4 Ghee Phulkas', 'Slow-Cooked Dal Makhani', 'Paneer Butter Masala', 'Jeera Pulao', 'Pineapple Raita', 'Gulab Jamun (1 pc)'],
        nutrition: '680 kcal • 24g Protein'
      },
      {
        id: 'wed-vt-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Matar Paneer & Yellow Moong Dal',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Homestyle Comfort',
        price: '₹139',
        desc: 'Tender green peas and soft paneer in homely tomato cumin curry, comfort yellow moong dal with desi ghee tadka.',
        includes: ['4 Phulkas', 'Matar Paneer', 'Moong Dal Tadka', 'Steamed Rice', 'Papad', 'Green Salad'],
        nutrition: '570 kcal • 20g Protein'
      }
    ],
    'jain': [
      {
        id: 'wed-jain-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Jain Kaju Curry & Toor Dal Khichdi',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
        tag: 'Rich Satvik',
        price: '₹149',
        desc: 'Roasted whole cashews in velvety tomato gravy (no onion, no garlic), served with soothing toor dal and phulkas.',
        includes: ['4 Desi Ghee Phulkas', 'Jain Kaju Curry', 'Dal Tadka', 'Steamed Rice', 'Dahi Vada (Satvik)'],
        nutrition: '620 kcal • 19g Protein'
      },
      {
        id: 'wed-jain-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Lauki Chana Dal & Paneer Tikka Masala',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Pure & Wholesome',
        price: '₹139',
        desc: 'Gentle bottle gourd paired with chana dal, accompanied by satvik paneer in charcoal-smoked capsicum tomato gravy.',
        includes: ['4 Phulkas', 'Satvik Paneer Tikka Masala', 'Lauki Chana Dal', 'Rice', 'Cucumber Salad'],
        nutrition: '560 kcal • 21g Protein'
      }
    ],
    'diet': [
      {
        id: 'wed-diet-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Grilled Mushroom, Paneer & Dal Soup',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
        tag: 'Keto / Low Carb',
        price: '₹159',
        desc: 'Button mushrooms and fresh paneer tossed in crushed black pepper and oregano, accompanied by a thick lentil broth.',
        includes: ['Grilled Mushroom & Paneer', 'High-Protein Moong Soup', 'Mixed Greens with Lemon Dressing', '2 Multigrain Rotis'],
        nutrition: '380 kcal • 23g Protein'
      },
      {
        id: 'wed-diet-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Moong Dal Chilla & Roasted Chana Chaat',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
        tag: 'Light & Clean',
        price: '₹159',
        desc: 'Two crisp golden moong dal crepes stuffed with grated paneer and herbs, served with roasted chana salad.',
        includes: ['2 Stuffed Moong Dal Chillas', 'Mint Chutney', 'Sprouted Salad', 'Herbal Digestion Tea Blend'],
        nutrition: '360 kcal • 22g Protein'
      }
    ],
    'student': [
      {
        id: 'wed-stu-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Dal Makhani & 4 Butter Rotis Box',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Wednesday Special',
        price: '₹99',
        desc: 'Our signature rich dal makhani cooked on coal embers, served with 4 soft butter phulkas, jeera rice, and onions.',
        includes: ['4 Butter Phulkas', 'Dal Makhani', 'Jeera Rice', 'Aloo Masala', 'Pickle'],
        nutrition: '640 kcal • 18g Protein'
      },
      {
        id: 'wed-stu-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Egg Curry or Paneer Bhurji Tiffin',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Protein Packed',
        price: '₹99',
        desc: 'Choice of homestyle Dhaba style Egg curry (2 eggs) OR rich Paneer Bhurji with 4 phulkas and yellow dal.',
        includes: ['4 Soft Phulkas', 'Paneer Bhurji / Egg Curry', 'Yellow Dal', 'Rice', 'Salad'],
        nutrition: '590 kcal • 22g Protein'
      }
    ]
  },
  thursday: {
    'veg-thali': [
      {
        id: 'thu-vt-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Methi Malai Matar & Kashmiri Rajma',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
        tag: 'Aromatic Feast',
        price: '₹149',
        desc: 'Velvety fenugreek leaves and sweet green peas in a rich malai reduction, paired with aromatic Kashmiri red rajma.',
        includes: ['4 Phulkas with Cow Ghee', 'Methi Malai Matar', 'Kashmiri Rajma', 'Basmati Rice', 'Mix Veg Raita'],
        nutrition: '610 kcal • 20g Protein'
      },
      {
        id: 'thu-vt-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Palak Paneer & Dhuli Urad Dal',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Farm Greens',
        price: '₹139',
        desc: 'Blanched spinach puree slow-simmered with paneer cubes and garlic, served with light dhuli urad dal and hot rotis.',
        includes: ['4 Phulkas', 'Palak Paneer', 'Dhuli Urad Dal Tadka', 'Rice', 'Achaar'],
        nutrition: '550 kcal • 23g Protein'
      }
    ],
    'jain': [
      {
        id: 'thu-jain-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Jain Malai Kofta & Moong Dal Tadka',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
        tag: 'Satvik Gourmet',
        price: '₹149',
        desc: 'Paneer and raw banana kofta in white cashew gravy, tempered yellow moong dal, and hot phulkas.',
        includes: ['4 Phulkas with Ghee', 'Jain Malai Kofta', 'Moong Dal', 'Jeera Rice', 'Boondi Raita'],
        nutrition: '600 kcal • 18g Protein'
      },
      {
        id: 'thu-jain-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Sev Tamatar & Panchratna Dal',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Homestyle Satvik',
        price: '₹139',
        desc: 'Traditional spicy sev cooked in thick tomato reduction, paired with hearty 5-dal blend and phulkas.',
        includes: ['4 Phulkas', 'Jain Sev Tamatar', 'Panchratna Dal', 'Steamed Rice', 'Papad'],
        nutrition: '540 kcal • 17g Protein'
      }
    ],
    'diet': [
      {
        id: 'thu-diet-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Nutritious Dal Palak & Oats Roti',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
        tag: 'Heart Healthy',
        price: '₹159',
        desc: 'Protein-packed yellow lentils boiled with young spinach leaves, served with 3 fiber-dense oats-wheat rotis and cucumber raita.',
        includes: ['3 Oats Wheat Rotis', 'Lentil Palak Curry', 'Stir-fried French Beans', 'Roasted Makhana Bowl'],
        nutrition: '410 kcal • 21g Protein'
      },
      {
        id: 'thu-diet-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Paneer Tikka Salad & Vegetable Daliya',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
        tag: 'Digestion Friendly',
        price: '₹159',
        desc: 'Broken wheat daliya cooked with carrots, peas, and green moong, served with grilled herb-marinated cottage cheese.',
        includes: ['Vegetable Daliya Khichdi', '100g Grilled Paneer', 'Flaxseed Buttermilk', 'Carrot Salad'],
        nutrition: '380 kcal • 22g Protein'
      }
    ],
    'student': [
      {
        id: 'thu-stu-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Aloo Matar Tari & Chana Dal Tiffin',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Super Saver',
        price: '₹99',
        desc: 'Classic North Indian homestyle aloo matar curry with thin spiced gravy, slow-cooked chana dal, rice, and phulkas.',
        includes: ['4 Soft Phulkas', 'Aloo Matar Tari', 'Chana Dal', 'Steamed Rice', 'Achaar'],
        nutrition: '560 kcal • 16g Protein'
      },
      {
        id: 'thu-stu-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Kashmiri Rajma & Jeera Rice Bowl',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'All-Time Hit',
        price: '₹99',
        desc: 'Fragrant rajma slow-simmered with ginger and crushed coriander seeds, bowl of basmati rice, and rotis.',
        includes: ['3 Soft Phulkas', 'Kashmiri Rajma Masala', 'Jeera Rice Bowl', 'Sirka Onion'],
        nutrition: '590 kcal • 18g Protein'
      }
    ]
  },
  friday: {
    'veg-thali': [
      {
        id: 'fri-vt-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Paneer Do Pyaza & Pindi Chole Thali',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
        tag: 'Friday Feast',
        price: '₹149',
        desc: 'Soft paneer cooked with caramelized shallots and whole spices, dark spiced Rawalpindi style chole, and ghee rotis.',
        includes: ['4 Ghee Phulkas', 'Paneer Do Pyaza', 'Pindi Chole', 'Jeera Rice', 'Mix Veg Pickle', 'Boondi Raita'],
        nutrition: '650 kcal • 24g Protein'
      },
      {
        id: 'fri-vt-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Kashmiri Dum Aloo & Tadka Dal Fry',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Weekend Starter',
        price: '₹139',
        desc: 'Baby potatoes slow-cooked in yogurt and fennel-ginger gravy, comforting dal fry, hot phulkas, and papad.',
        includes: ['4 Phulkas', 'Kashmiri Dum Aloo', 'Dal Fry', 'Steamed Rice', 'Gulab Jamun'],
        nutrition: '580 kcal • 17g Protein'
      }
    ],
    'jain': [
      {
        id: 'fri-jain-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Jain Paneer Pasanda & Arhar Dal',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
        tag: 'Gourmet Satvik',
        price: '₹149',
        desc: 'Paneer sandwiches stuffed with nuts in a velvety melon seed tomato gravy, tempered toor dal, and phulkas.',
        includes: ['4 Desi Ghee Phulkas', 'Jain Paneer Pasanda', 'Arhar Dal', 'Peas Rice', 'Kheer (Satvik)'],
        nutrition: '610 kcal • 20g Protein'
      },
      {
        id: 'fri-jain-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Bhindi Masala & Yellow Moong Dal',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Crisp & Homely',
        price: '₹139',
        desc: 'Tender ladyfingers stir-fried with roasted cumin and dry mango powder, paired with yellow dal and phulkas.',
        includes: ['4 Phulkas', 'Jain Crispy Bhindi Masala', 'Moong Dal Tadka', 'Rice', 'Papad'],
        nutrition: '530 kcal • 16g Protein'
      }
    ],
    'diet': [
      {
        id: 'fri-diet-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Chana Sundal, Soya Bhurji & Multigrain Rotis',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
        tag: 'Mega Protein',
        price: '₹159',
        desc: 'South Indian tempered boiled chickpea sundal with fresh coconut shavings, crumbled soya bhurji, and multigrain rotis.',
        includes: ['3 Multigrain Rotis', 'Soya Granule Bhurji', 'Chana Sundal', 'Carrot Beetroot Slaw'],
        nutrition: '420 kcal • 30g Protein'
      },
      {
        id: 'fri-diet-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Moong Sprouts Khichdi & Grilled Tofu',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
        tag: 'Detox Friday',
        price: '₹159',
        desc: 'Light sprouted green gram khichdi with roasted cumin, served with ginger-marinated air-fried tofu cubes.',
        includes: ['Sprouts Khichdi Bowl', 'Grilled Tofu Cuts', 'Pudina Buttermilk', 'Cucumber Slices'],
        nutrition: '370 kcal • 24g Protein'
      }
    ],
    'student': [
      {
        id: 'fri-stu-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Pindi Chole & Jeera Rice Student Special',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Delhi Street Vibe',
        price: '₹99',
        desc: 'Rich dark Amritsari style chana with green chillies, 3 warm phulkas, fragrant cumin rice, and pickled amla.',
        includes: ['3 Soft Phulkas', 'Pindi Chole', 'Jeera Rice', 'Aloo Dry Subzi', 'Sirka Pyaaz'],
        nutrition: '610 kcal • 20g Protein'
      },
      {
        id: 'fri-stu-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Veg Biryani & Mix Dal Tadka Box',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'TGIF Special',
        price: '₹99',
        desc: 'Layered vegetable dum biryani served with raita, 2 soft rotis, and mixed yellow dal tadka.',
        includes: ['Veg Dum Biryani Bowl', '2 Soft Phulkas', 'Yellow Dal', 'Boondi Raita', 'Sweet Halwa'],
        nutrition: '630 kcal • 17g Protein'
      }
    ]
  },
  saturday: {
    'veg-thali': [
      {
        id: 'sat-vt-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Special Weekend Shahi Thali',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
        tag: 'Chef Celebration',
        price: '₹159',
        desc: 'Paneer Tikka Butter Masala, slow-simmered Punjabi Rajma, vegetable pulao, 4 ghee phulkas, and fresh Moong Dal Halwa.',
        includes: ['4 Ghee Phulkas', 'Paneer Tikka Masala', 'Punjabi Rajma', 'Peas Pulao', 'Boondi Raita', 'Moong Dal Halwa'],
        nutrition: '710 kcal • 25g Protein'
      },
      {
        id: 'sat-vt-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Dal Tadka, Bhindi Do Pyaza & Jeera Pulao',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Homestyle Comfort',
        price: '₹139',
        desc: 'Double tadka yellow dal with burnt garlic, crispy spiced okra with caramelized onions, and fluffy jeera rice.',
        includes: ['4 Phulkas', 'Bhindi Do Pyaza', 'Garlic Dal Tadka', 'Jeera Rice', 'Papad'],
        nutrition: '560 kcal • 17g Protein'
      }
    ],
    'jain': [
      {
        id: 'sat-jain-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Jain Paneer Lababdar & Panchmel Khichdi',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
        tag: 'Satvik Weekend Feast',
        price: '₹149',
        desc: 'Rich grated and cubed paneer in pure tomato melon-seed gravy, served with royal panchmel khichdi and phulkas.',
        includes: ['4 Phulkas with Ghee', 'Jain Paneer Lababdar', 'Toor Dal Tadka', 'Steamed Rice', 'Basundi'],
        nutrition: '630 kcal • 21g Protein'
      },
      {
        id: 'sat-jain-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Kofta Lajawab & Moong Dal Mogar',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Pure Satvik',
        price: '₹139',
        desc: 'Crispy cabbage & paneer kofta in gentle tomato sauce, yellow moong dal, phulkas, and cucumber salad.',
        includes: ['4 Phulkas', 'Jain Kofta Curry', 'Moong Mogar Dal', 'Rice', 'Papad'],
        nutrition: '550 kcal • 18g Protein'
      }
    ],
    'diet': [
      {
        id: 'sat-diet-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Millet Khichdi & Stir-Fried Paneer Tikka',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
        tag: 'Ancient Grains',
        price: '₹159',
        desc: 'Foxtail millet cooked with sprouted lentils and seasonal vegetables, accompanied by 100g air-charred paneer.',
        includes: ['Foxtail Millet Khichdi', '100g Herb Paneer', 'Flaxseed Buttermilk', 'Green Salad'],
        nutrition: '410 kcal • 24g Protein'
      },
      {
        id: 'sat-diet-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Grilled Zucchini, Bell Peppers & Dal Soup',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
        tag: 'Clean Weekend',
        price: '₹159',
        desc: 'Warm charred Mediterranean vegetables tossed in cold-pressed mustard dressing, paired with yellow moong broth.',
        includes: ['Warm Charred Veggies & Tofu', 'Moong Lentil Broth', '2 Multigrain Rotis', 'Herbal Brew'],
        nutrition: '360 kcal • 20g Protein'
      }
    ],
    'student': [
      {
        id: 'sat-stu-lunch',
        mealTime: 'Lunch (12:00 PM - 1:30 PM)',
        title: 'Paneer Makhani & Pulao Weekend Treat',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Weekend Special',
        price: '₹99',
        desc: 'Tender cottage cheese in buttery tomato gravy, bowl of spiced matar pulao, 3 soft phulkas, and sweet gulab jamun.',
        includes: ['3 Soft Phulkas', 'Paneer Makhani', 'Matar Pulao', 'Dal Fry', 'Gulab Jamun (1 pc)'],
        nutrition: '640 kcal • 19g Protein'
      },
      {
        id: 'sat-stu-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Aloo Chana Tari & Phulka Dabba',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Dilli Taste',
        price: '₹99',
        desc: 'Robust spicy potato and chickpea curry, 4 phulkas, steamed rice, and mixed vegetable pickle.',
        includes: ['4 Soft Phulkas', 'Aloo Chana Tari', 'Yellow Dal', 'Rice', 'Pickle'],
        nutrition: '570 kcal • 17g Protein'
      }
    ]
  },
  sunday: {
    'veg-thali': [
      {
        id: 'sun-vt-lunch',
        mealTime: 'Sunday Brunch / Lunch (12:00 PM - 2:00 PM)',
        title: 'Sunday Maha Thali & Gajar ka Halwa',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
        tag: 'Sunday Grand Feast',
        price: '₹169',
        desc: 'Kaju Paneer Masala, slow-cooked Dal Makhani, Dry Fruit Pulao, 4 Cow Ghee Phulkas, Dahi Bhalla, and Warm Desi Ghee Halwa.',
        includes: ['4 Cow Ghee Phulkas', 'Kaju Paneer Masala', 'Overnight Dal Makhani', 'Dry Fruit Pulao', 'Dahi Bhalla', 'Gajar ka Halwa'],
        nutrition: '740 kcal • 26g Protein'
      },
      {
        id: 'sun-vt-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Light Khichdi, Kadhi & Aloo Bhujia',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Sunday Detox',
        price: '₹139',
        desc: 'Soothing Moong Dal Ghee Khichdi paired with light Gujarati style sweet-sour kadhi and roasted papad to wrap up the week.',
        includes: ['Moong Dal Ghee Khichdi', 'Tempered Kadhi', 'Aloo Sukha Bhujia', 'Roasted Papad', 'Pickle'],
        nutrition: '520 kcal • 16g Protein'
      }
    ],
    'jain': [
      {
        id: 'sun-jain-lunch',
        mealTime: 'Sunday Lunch (12:00 PM - 2:00 PM)',
        title: 'Satvik Shahi Feast & Rabdi',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
        tag: 'Grand Satvik',
        price: '₹159',
        desc: 'Paneer Pasanda, Gujarati Dal, Steamed Rice, 4 Ghee Phulkas, Satvik Dahi Vada, and saffron rabdi.',
        includes: ['4 Phulkas with Ghee', 'Jain Paneer Pasanda', 'Khatti Meethi Gujarati Dal', 'Rice', 'Dahi Vada', 'Rabdi'],
        nutrition: '660 kcal • 20g Protein'
      },
      {
        id: 'sun-jain-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Jain Moong Khichdi & Dahi Tiffin',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Peaceful Sunday',
        price: '₹139',
        desc: 'Light cumin-tempered khichdi made with yellow moong and organic basmati, served with fresh churned curd.',
        includes: ['Moong Khichdi Bowl', 'Fresh Sweet Curd', 'Raw Banana Chips', 'Papad'],
        nutrition: '480 kcal • 15g Protein'
      }
    ],
    'diet': [
      {
        id: 'sun-diet-lunch',
        mealTime: 'Lunch (12:00 PM - 2:00 PM)',
        title: 'Superfood Quinoa Bowl & Tofu Salad',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
        tag: 'Super Clean',
        price: '₹159',
        desc: 'Steamed tricolor quinoa with edamame, roasted peppers, and grilled herb-crusted tofu with lemon-tahini dressing.',
        includes: ['Tricolor Quinoa Bowl', 'Grilled Herb Tofu', 'Mixed Sprout Crunch', 'Fresh Mint Buttermilk'],
        nutrition: '410 kcal • 27g Protein'
      },
      {
        id: 'sun-diet-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Clear Vegetable Soup & Steamed Sprouts',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
        tag: 'Reset Routine',
        price: '₹159',
        desc: 'Warm ginger-infused vegetable broth packed with greens, paired with warm steamed sprout chaat.',
        includes: ['Ginger Veg Broth Bowl', 'Warm Steamed Sprout Chaat', '2 Ragi Rotis'],
        nutrition: '320 kcal • 18g Protein'
      }
    ],
    'student': [
      {
        id: 'sun-stu-lunch',
        mealTime: 'Sunday Feast (12:00 PM - 2:00 PM)',
        title: 'Sunday Chole Bhature or Extra Shahi Thali',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
        tag: 'Campus Celebration',
        price: '₹119',
        desc: 'Authentic Delhi spiced chole with your choice of 2 fluffy bhature OR 4 soft butter phulkas + pulao + dessert.',
        includes: ['Chole Masala Bowl', '2 Bhature / 4 Phulkas', 'Jeera Pulao', 'Sirka Pyaaz', 'Sweet Halwa'],
        nutrition: '690 kcal • 19g Protein'
      },
      {
        id: 'sun-stu-dinner',
        mealTime: 'Dinner (7:30 PM - 9:00 PM)',
        title: 'Comfort Khichdi & Dal Fry Box',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
        tag: 'Exam Week Prep',
        price: '₹99',
        desc: 'Simple, soothing yellow moong khichdi with desi ghee tadka, 2 rotis, yellow dal, and mango pickle.',
        includes: ['Ghee Khichdi Bowl', '2 Soft Phulkas', 'Yellow Dal', 'Achaar', 'Papad'],
        nutrition: '520 kcal • 16g Protein'
      }
    ]
  }
};
