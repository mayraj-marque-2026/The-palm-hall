import heroHallImage from '../assets/images/hero_hall_overview_1785153615544.jpg';
import diningTableImage from '../assets/images/dining_table_purple_1785153630463.jpg';
import weddingStageImage from '../assets/images/wedding_stage_grand_1785153644051.jpg';
import stageDecorCrystalImage from '../assets/images/stage_decor_crystal_1785153657293.jpg';
import cateringFoodImage from '../assets/images/wedding_catering_food_1785153678292.jpg';
import mirrorAisleImage from '../assets/images/mirror_aisle_walkway_1785153690742.jpg';
import exteriorSignImage from '../assets/images/exterior_entrance_sign_1785153704708.jpg';
import vipLoungeImage from '../assets/images/vip_lounge_interior_1785153717935.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: "The Palm Hall",
  tagline: "Premier Wedding & Events Venue",
  address: "University Rd, Tehkal, Peshawar",
  phone: "(091) 5841683",
  whatsapp: "0300 9032122",
  whatsappLink: "https://wa.me/923009032122",
  capacity: "Up to 800 Guests",
  description: "Local renowned wedding & events hall with capacity up to 800 guests. Located at University Rd, Tehkal, Peshawar. Easy approach, beautiful, comfortable, good parking space, helping staff.",
  rating: 4.3,
  reviewCount: 1568,
  timings: "Closes 12 am",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13227.3229648937!2d71.48834!3d34.00412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9171f11a8fb1d%3A0x6b823e20e24ecdb0!2sUniversity%20Rd%2C%20Tehkal%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
};

export const HIGHLIGHT_CARDS = [
  { id: "cap", title: "Capacity up to 800 Guests", iconName: "Users" },
  { id: "approach", title: "Easy Approach", iconName: "MapPin" },
  { id: "venue", title: "Beautiful Venue", iconName: "Sparkles" },
  { id: "env", title: "Comfortable Environment", iconName: "Heart" },
  { id: "parking", title: "Good Parking Space", iconName: "Car" },
  { id: "staff", title: "Helping Staff", iconName: "UserCheck" },
];

export interface ServicePackage {
  name: string;
  guestCount: string;
  includes: string[];
  pricingNote: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  imageUrl: string;
  features: string[];
  packages: ServicePackage[];
  pricingNote: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding",
    title: "Wedding and engagement",
    description: "Bespoke bridal stages, royal seating arrangements, and opulent floral setups designed for unforgettable weddings and engagement ceremonies.",
    detailedDescription: "The Palm Hall offers a royal stage and luxurious banquet atmosphere specifically designed for memorable weddings, Valima receptions, and engagement ceremonies at University Rd, Peshawar. With high draped canopy ceilings, glowing crystal chandeliers, mirror aisle walkways, and grand rose floral arches, every moment is captured in magnificence.",
    iconName: "Heart",
    imageUrl: weddingStageImage,
    features: [
      "Grand Royal Stage Setup with Rose Floral Arches",
      "Mirror Aisle Walkway with Crystal Flower Pillars",
      "Dedicated Bridal Dressing Room & Executive Waiting Lounge",
      "Capacity for up to 800 Guests with Spacious Seating",
      "Climate Controlled AC Halls with Uninterrupted Power Generators",
      "Separate VIP & Family Seating Areas with Elegant Linen"
    ],
    packages: [
      {
        name: "Silver Wedding Package",
        guestCount: "Up to 300 Guests",
        includes: ["Standard Stage Floral Accent", "Guest Seating & Draped Tables", "Crystal Chandelier & Ambient Lighting", "Cooperative Service Staff"],
        pricingNote: "Inquire via WhatsApp for Seasonal Rates"
      },
      {
        name: "Gold Wedding Package",
        guestCount: "300 - 500 Guests",
        includes: ["Royal Rose Floral Arch Stage", "Mirror Walkway Entry", "Full Canopy Hall Styling", "Traditional Pakistani Catering Banquet"],
        pricingNote: "Popular Choice - Customized Quote"
      },
      {
        name: "Royal Palm Full Hall Package",
        guestCount: "500 - 800 Guests",
        includes: ["Exclusive Full Marquee Reserve", "Customized Stage & Spotlighting", "VIP Lounge Access", "Complete Multi-Course Feast"],
        pricingNote: "Bespoke Royal Quotation"
      }
    ],
    pricingNote: "Custom quotes based on guest count and decor selections. Direct booking discount available via WhatsApp."
  },
  {
    id: "catering",
    title: "Catering",
    description: "Exquisite culinary experiences featuring authentic traditional Pakistani wedding banquets, seekh kebabs, roasted tikka, and specialty kabuli rice.",
    detailedDescription: "Indulge your guests with authentic traditional Pakistani wedding banquets cooked by master chefs right at The Palm Hall. From aromatic Kabuli Pulao adorned with raisins & carrots and tender Seekh Kebabs to juicy Chicken Tikka, Karahi, and warm Naan, our culinary service guarantees freshness, food safety, and exquisite taste.",
    iconName: "Utensils",
    imageUrl: cateringFoodImage,
    features: [
      "Traditional Pakistani & Peshawari Feast Menus",
      "Freshly Cooked Live Barbecue (Seekh Kebab, Chicken Tikka)",
      "Signature Kabuli Pulao & Biryani Dishes",
      "Food Warming Bain-Marie Units for Continuous Piping Hot Meals",
      "Assorted Naan & Traditional Sweet Desserts (Kheer, Halwa, Firni)"
    ],
    packages: [
      {
        name: "Traditional Banquet Menu",
        guestCount: "Minimum 100 Guests",
        includes: ["One Main Rice Dish (Pulao/Biryani)", "Two Meat Gravies or Live BBQ", "Roti/Naan, Fresh Salad, Mint Raita", "One Traditional Dessert"],
        pricingNote: "Per Head Rate - Inquire on WhatsApp"
      },
      {
        name: "Royal Executive Banquet",
        guestCount: "300+ Guests",
        includes: ["Special Kabuli Pulao with Nuts & Raisins", "Seekh Kebab & Chicken Tikka Live Barbecue", "Mutton/Beef Karahi & Chicken Handi", "Assorted Naan & Dessert Bar"],
        pricingNote: "Best Value Per Head Quote"
      }
    ],
    pricingNote: "Flexible per-head pricing based on menu items chosen. Live barbecue setup available."
  },
  {
    id: "anniversary",
    title: "Anniversary party planning",
    description: "Elegant celebrations tailored with custom themes, ambient lighting, and intimate family seating layouts for milestone anniversaries.",
    detailedDescription: "Celebrate milestone anniversaries, silver/golden jubilees, and family galas in an elegant, intimate setting. Our event coordinators arrange customized table linens, floral centerpieces, ambient mood lighting, and personalized photo display zones to honor special milestones.",
    iconName: "Calendar",
    imageUrl: diningTableImage,
    features: [
      "Custom Table Centerpieces & Fine Linen Styling",
      "Personalized Photo & Floral Arch Backdrop",
      "Professional Sound Acoustics & Audio System",
      "Flexible Hall Partitioning for Intimate Gatherings",
      "Custom Cake Presentation & Dining Setup"
    ],
    packages: [
      {
        name: "Intimate Celebration Package",
        guestCount: "50 - 150 Guests",
        includes: ["Custom Floral Backdrop", "Round Table Dining Setup", "Sound System Setup", "Dedicated Waiter Staff"],
        pricingNote: "Special Family Rate"
      },
      {
        name: "Grand Jubilee Gala",
        guestCount: "200 - 400 Guests",
        includes: ["Full Hall Atmosphere Styling", "Crystal Chandelier Mood Lighting", "Buffet or Plated Dining", "VIP Lounge Access"],
        pricingNote: "Tailored Quote"
      }
    ],
    pricingNote: "Customizable according to guest list and decor preferences."
  },
  {
    id: "corporate",
    title: "Corporate and conference",
    description: "Professional venue setup for high-profile business conferences, seminars, corporate dinners, and award ceremonies.",
    detailedDescription: "Host high-impact corporate seminars, annual business meetings, product launches, award ceremonies, and company dinners at University Rd, Peshawar. Equipped with spacious floor layouts, crisp acoustics, comfortable seating, and professional service staff.",
    iconName: "Briefcase",
    imageUrl: heroHallImage,
    features: [
      "Spacious Layout for Theater, Classroom, or Banquet Seating",
      "High-Definition Projection & Crisp Audio Acoustics",
      "High-Capacity Air-Conditioning & Generator Power Backup",
      "Corporate High-Tea & Multi-Course Dinner Catering",
      "Generous On-Site Parking for Executive Vehicles"
    ],
    packages: [
      {
        name: "Half-Day Seminar Package",
        guestCount: "Up to 200 Attendees",
        includes: ["Hall Rental with Audio/Visual Setup", "Podium & Stage Setup", "Executive High-Tea & Snacks", "Dedicated On-Site Technician"],
        pricingNote: "Standard Corporate Rate"
      },
      {
        name: "Full-Day Conference & Gala Dinner",
        guestCount: "200 - 800 Attendees",
        includes: ["Exclusive Full Marquee Hall Access", "Morning & Afternoon Tea Breaks", "Lavish Buffet Dinner", "Reserved VIP Parking"],
        pricingNote: "Bespoke Corporate Package"
      }
    ],
    pricingNote: "Special corporate discounts for full-day or recurring business bookings."
  },
  {
    id: "religious",
    title: "Religious wedding planning",
    description: "Respectful and beautifully organized Nikah and religious ceremony setups following cultural customs and dignified family arrangements.",
    detailedDescription: "Dignified and culturally respectful arrangements for Nikah ceremonies, Quran Khwani, and religious celebrations. We provide separate seating halls for men and women, peaceful ambient decor, traditional carpets, and attentive management.",
    iconName: "BookOpen",
    imageUrl: vipLoungeImage,
    features: [
      "Separate Partitioned Halls for Men & Women",
      "Dignified Nikah Stage & Signing Setup",
      "Clean, Comfortable & Quiet Atmosphere",
      "Traditional Refreshments or Full Meal Service",
      "Hassle-Free Arrival & Ample Valet Parking"
    ],
    packages: [
      {
        name: "Nikah Ceremony Package",
        guestCount: "100 - 300 Guests",
        includes: ["Dignified Nikah Stage", "Partitioned Guest Seating", "Tea & Traditional Sweets Service", "Cooperative Service Staff"],
        pricingNote: "Direct WhatsApp Inquiry"
      },
      {
        name: "Full Religious Reception",
        guestCount: "300 - 600 Guests",
        includes: ["Dual Hall Seating Setup", "Full Course Halal Banquet Catering", "VIP Lounge Access", "Complete Audio Setup for Recitation"],
        pricingNote: "Custom Quotation"
      }
    ],
    pricingNote: "Modest, culturally aligned pricing tailored to your ceremony needs."
  },
  {
    id: "florist",
    title: "Wedding florist services",
    description: "Fresh flower arches, grand rose stage walls, crystal aisle vases, and fragrant floral decor crafted by master floral designers.",
    detailedDescription: "Transform your event with breathtaking fresh flower arrangements crafted by master florists. From grand entrance rose arches and stage backdrop flower walls to table centerpieces and fragrance-filled aisle pillars, our floral design adds timeless beauty.",
    iconName: "Flower2",
    imageUrl: stageDecorCrystalImage,
    features: [
      "Fresh Local & Imported Roses, Lilies, and Carnations",
      "Custom Stage Flower Walls & Floral Canopies",
      "Entrance Archways & Aisle Flower Vases",
      "Groom Car Decoration Packages",
      "Bridal Bouquet & Garland Creations"
    ],
    packages: [
      {
        name: "Stage Floral Touch",
        guestCount: "All Event Sizes",
        includes: ["Stage Backdrop Flower Panel", "Rose Arch Entrance", "Bridal Sofa Floral Accents"],
        pricingNote: "Floral Package Quote"
      },
      {
        name: "Royal Grand Florals",
        guestCount: "Full Hall Decor",
        includes: ["Full Rose Backdrop Wall", "Aisle Pillar Flower Vases", "Guest Table Centerpieces", "Car Flower Decoration"],
        pricingNote: "Bespoke Floral Quote"
      }
    ],
    pricingNote: "Flower pricing varies depending on seasonal bloom availability and custom design complexity."
  },
  {
    id: "lighting",
    title: "Wedding lighting services",
    description: "Atmospheric chandelier illumination, warm LED accent lighting, and custom spotlighting for photography and stage entrances.",
    detailedDescription: "Create an enchanting fairy-tale ambiance with state-of-the-art lighting solutions. Featuring glowing crystal chandeliers, warm ambient LEDs, focused stage spotlights, entrance fairy lights, and mirror floor reflections ideal for videography.",
    iconName: "Lightbulb",
    imageUrl: mirrorAisleImage,
    features: [
      "Glowing Crystal Chandeliers & Hanging Glass Decor",
      "Warm LED Ambient Mood Lighting",
      "Focused Stage & Runway Spotlights",
      "Exterior Entrance Architectural Illuminations",
      "Uninterrupted Generator Power Backup"
    ],
    packages: [
      {
        name: "Classic Mood Lighting",
        guestCount: "Included in Hall Rentals",
        includes: ["Crystal Chandeliers", "Stage Warm Spotlights", "Hall Canopy Illumination"],
        pricingNote: "Included in Venue Booking"
      },
      {
        name: "Royal Crystal Illumination",
        guestCount: "Full Venue",
        includes: ["Mirror Walkway Underlight", "Custom Color LED Wash Lighting", "Entrance Fairy Light Tunnel"],
        pricingNote: "Premium Lighting Add-on"
      }
    ],
    pricingNote: "Basic lighting included with hall booking; premium customized lighting packages available."
  },
  {
    id: "waiter",
    title: "Waiter service",
    description: "Courteous, uniformed, and attentive service staff dedicated to ensuring every guest receives warm hospitality and timely service.",
    detailedDescription: "Our trained, uniformed, and polite waiting staff ensure seamless hospitality throughout your event. From warm welcome drinks and prompt food replenishment to continuous table cleaning and attentive guest care.",
    iconName: "UserCheck",
    imageUrl: diningTableImage,
    features: [
      "Neatly Uniformed & Groomed Service Personnel",
      "Prompt & Courteous Guest Hospitality",
      "Continuous Table Clearing & Drink Serving",
      "Dedicated VIP Lounge & Stage Butler Service",
      "Supervised by Experienced Hall Managers"
    ],
    packages: [
      {
        name: "Standard Hospitality Service",
        guestCount: "Based on Guest Ratio",
        includes: ["1 Waiter per 25-30 Guests", "Table Setup & Service", "Post-Meal Clearing"],
        pricingNote: "Included in Catering Packages"
      },
      {
        name: "Executive VIP Service",
        guestCount: "VIP Table Priority",
        includes: ["Dedicated Butler Service for VIP Tables", "Plated Food Serving", "Continuous Welcome Drink Service"],
        pricingNote: "Included / Custom Upgrade"
      }
    ],
    pricingNote: "Professional staff is included with all catering and hall booking packages."
  },
  {
    id: "budgeting",
    title: "Wedding budgeting",
    description: "Transparent package options tailored to your event requirements, maximizing luxury and guest comfort within your budget.",
    detailedDescription: "Plan your dream wedding without financial stress. Our experienced venue consultants work closely with you to optimize hall layout, catering choices, and floral packages to deliver maximum luxury within your specified budget.",
    iconName: "DollarSign",
    imageUrl: heroHallImage,
    features: [
      "Transparent Itemized Pricing Estimates",
      "No Hidden Service Charges or Surprise Fees",
      "Flexible Tiered Menu & Decor Selections",
      "Cost Optimization for Guest Counts up to 800",
      "Custom Payment Schedule Options"
    ],
    packages: [
      {
        name: "Consultation & Estimate",
        guestCount: "Any Guest Count",
        includes: ["Free On-Site Venue Tour", "Custom Itemized Price Breakup", "Menu Optimization"],
        pricingNote: "Free Consultation"
      },
      {
        name: "All-Inclusive Custom Package",
        guestCount: "100 - 800 Guests",
        includes: ["Hall + Catering + Stage + Lighting + Waiters", "Guaranteed Single Fixed Rate"],
        pricingNote: "Best Overall Value"
      }
    ],
    pricingNote: "Complimentary initial budget consultation with hall management."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Grand Event Hall Overview",
    category: "Hall Interior",
    imageUrl: heroHallImage,
    description: "Draped canopy ceiling with glowing crystal chandeliers and guest seating for up to 800 guests."
  },
  {
    id: "2",
    title: "Royal Stage & Rose Arch",
    category: "Stage Setup",
    imageUrl: weddingStageImage,
    description: "Magnificent bridal stage with red & white rose floral arches, golden couches, and polished dance floor."
  },
  {
    id: "3",
    title: "Crystal Chandelier & Stage Decor",
    category: "Stage Setup",
    imageUrl: stageDecorCrystalImage,
    description: "Intricate stage backdrops with hanging crystal glass curtains and golden velvet seating."
  },
  {
    id: "4",
    title: "Mirror Aisle Walkway",
    category: "Entrance & Aisle",
    imageUrl: mirrorAisleImage,
    description: "Glass mirror aisle walkway framed by white and red floral arches and crystal flower vases."
  },
  {
    id: "5",
    title: "Luxury Guest Dining Setup",
    category: "Dining & Catering",
    imageUrl: diningTableImage,
    description: "Elegant round dining tables with purple linen tablecloths and formal place settings."
  },
  {
    id: "6",
    title: "Pakistani Wedding Catering Banquet",
    category: "Dining & Catering",
    imageUrl: cateringFoodImage,
    description: "Delightful wedding feast with freshly prepared seekh kebabs, chicken tikka, and kabuli pulao."
  },
  {
    id: "7",
    title: "VIP Royal Waiting Lounge",
    category: "VIP Lounge",
    imageUrl: vipLoungeImage,
    description: "Exclusive VIP lounge with golden embossed walls, royal throne chairs, and plush carpeting."
  },
  {
    id: "8",
    title: "Exterior Entrance & Palm Marquee Sign",
    category: "Exterior",
    imageUrl: exteriorSignImage,
    description: "Main marquee entrance at University Rd, Tehkal, Peshawar with prominent Palm Marquee branding."
  }
];

export const SAMPLE_REVIEWS = [
  {
    id: "rev1",
    author: "M. Khan",
    rating: 5,
    date: "Recent Event",
    text: "Beautiful venue with excellent decoration and spacious halls. Staff was cooperative throughout the event.",
  },
  {
    id: "rev2",
    author: "Tariq Mahmood",
    rating: 5,
    date: "Wedding Reception",
    text: "One of the best wedding halls in Peshawar. Clean environment, good parking, and excellent catering.",
  },
  {
    id: "rev3",
    author: "Shahid Rehman",
    rating: 5,
    date: "Family Event",
    text: "Comfortable seating, professional management, and a wonderful experience for family events.",
  }
];
