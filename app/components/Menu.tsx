"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = [
  { id: "beers",     label: "🍺 Beers" },
  { id: "soju",      label: "🍶 Soju" },
  { id: "cocktails", label: "🍹 Cocktails" },
  { id: "spirits",   label: "🥃 Spirits" },
  { id: "mocktails", label: "🧃 Mocktails" },
  { id: "smoothies", label: "🥤 Smoothies" },
  { id: "food",      label: "🍕 Food" },
  { id: "dessert",   label: "🍮 Dessert" },
];

type MenuItem = { name: string; desc?: string; price: string; tag?: string };
type MenuSection = { section: string; items: MenuItem[] };

const menuData: Record<string, MenuSection[]> = {
  beers: [
    { section: "Beer on Tap", items: [
      { name: "Bintang", desc: "Indonesia · Pilsner · 4.7% ABV", price: "M 40 / P 55 / L 75 / XL 115 / Pitcher 195" },
      { name: "Heineken", desc: "Holland · Pale Lager · 5.0% ABV", price: "M 55 / P 70 / L 100 / XL 155 / Pitcher 275" },
    ]},
    { section: "Meter of Beer (9+1 FREE)", items: [
      { name: "Bintang Meter", price: "360" },
      { name: "Heineken Meter", price: "495" },
    ]},
    { section: "Sharing Submarine", items: [
      { name: "U-Boot", desc: "Tap Beer, Vodka", price: "70 / 295" },
      { name: "Captain Bomb", desc: "Tap Beer, White/Gold Rum", price: "75 / 315" },
      { name: "Boilermaker", desc: "Tap Beer, Bourbon JB", price: "85 / 375" },
      { name: "Beer & Deer", desc: "Tap Beer, Jagermeister", price: "85 / 375" },
      { name: "Tequila Bomb", desc: "Tap Beer, Tequila", price: "90 / 395" },
    ]},
    { section: "Beer Bottle / Can", items: [
      { name: "Bintang", desc: "Indonesia · Pilsner · 4.7%", price: "S 37 / L 65 / Tower 255" },
      { name: "Bintang Radler", desc: "Indonesia · Pilsner · 2.0%", price: "37" },
      { name: "Bintang Crystal", desc: "Indonesia · Pilsner · 4.3%", price: "42" },
      { name: "San Miguel Light", desc: "Philippines · Pilsner · 5.0%", price: "50" },
      { name: "San Miguel Pale", desc: "Philippines · Pale Lager · 5.0%", price: "50" },
      { name: "Carlsberg", desc: "Danish · Pilsner · 5.0%", price: "52" },
      { name: "Erdinger Weissbier", desc: "Germany · Wheat · 5.3%", price: "185" },
      { name: "Erdinger Dunkel", desc: "Germany · Dark Lager · 5.3%", price: "185" },
      { name: "Heineken", desc: "Holland · Pale Lager · 5.0%", price: "S 50 / Tower 375" },
      { name: "Guinness", desc: "Ireland · Stout · 4.2%", price: "S 55 / Tower 205" },
      { name: "Guinness Smooth", desc: "Ireland · Stout · 4.5%", price: "54" },
      { name: "Kaltenberg Royal", desc: "Germany · Lager · 4.1%", price: "45" },
      { name: "Sapporo", desc: "Japan · Pale Lager · 4.9%", price: "77" },
      { name: "Corona", desc: "Mexico · Pale Lager · 4.5%", price: "95" },
      { name: "König Ludwig", desc: "Germany · Pale Wheat · 5.5%", price: "S 50 / L 80" },
      { name: "Duvel", desc: "Belgium · Pale Ale · 8.5%", price: "155" },
      { name: "Vedett IPA", desc: "Belgium · IPA · 5.5%", price: "135" },
      { name: "Vedett Witbier", desc: "Belgium · Wheat · 4.7%", price: "95" },
      { name: "La Chouffe Blonde", desc: "Belgium · Blond · 8.0%", price: "145" },
      { name: "Liefmans", desc: "Belgium · Fruity · 3.8%", price: "87" },
      { name: "Kura Kura Ale", desc: "Indonesia · Ale · 4.9%", price: "85" },
      { name: "Kura Kura Lager", desc: "Indonesia · Lager · 4.9%", price: "85" },
      { name: "Leffe Brune", desc: "Belgium · Dark Abbey · 6.5%", price: "135" },
      { name: "Stella Artois", desc: "Belgium · Pilsner · 5.0%", price: "88" },
      { name: "Budweiser", desc: "USA · Lager · 5.0%", price: "85" },
      { name: "Hoegaarden Rose", desc: "Belgium · Fruity Wheat · 3.0%", price: "80" },
      { name: "Hoegaarden Witbier", desc: "Belgium · Wheat · 4.9%", price: "95" },
    ]},
    { section: "Fruity Beer — Homemade Radler", items: [
      { name: "Lemon", desc: "Tap Beer, Lemon, Soda", price: "38" },
      { name: "Lychee", desc: "Tap Beer, Lychee, Soda", price: "38" },
      { name: "Mazout", desc: "Tap Beer, Coke, Soda", price: "38" },
      { name: "Mango", desc: "Tap Beer, Mango, Soda", price: "38" },
      { name: "Tango", desc: "Tap Beer, Grenadine, Soda", price: "38" },
      { name: "El Matador", desc: "Tap Beer, Strawberry, Lime & Basil", price: "40", tag: "Organic" },
    ]},
    { section: "Smirnoff Ice", items: [
      { name: "Lemon", price: "49" },
      { name: "Raspberry", price: "49" },
      { name: "Green Apple", price: "49" },
    ]},
    { section: "Ciders", items: [
      { name: "Albens Apple Mango", price: "70" },
      { name: "Albens Apple Strawberry", price: "70" },
      { name: "Albens Original", price: "65" },
    ]},
  ],
  soju: [
    { section: "Bottle", items: [
      { name: "Daebak Original", price: "155" },
      { name: "Chum Churum", desc: "Peach · Original · Strawberry", price: "195" },
      { name: "Jinro Chamisul Soju", desc: "Plum · Grape · Original", price: "200" },
    ]},
    { section: "Fun Mix (Carafe)", items: [
      { name: "Yoghurt Blast", desc: "Soju, Yakult, Sprite", price: "195" },
      { name: "Soju Sangria", desc: "Soju, Orange, Lemon & Apple", price: "205" },
      { name: "Energizer", desc: "Soju, Redbull, Orange/Lime slice", price: "185" },
      { name: "Somaek", desc: "Soju, Beer", price: "220" },
      { name: "Sainte-…", desc: "Soju, Cranberry or Lime juice", price: "205" },
    ]},
  ],
  cocktails: [
    { section: "Party Warmer", items: [
      { name: "Cuba Libre", price: "75" },
      { name: "Screw Driver", price: "75" },
    ]},
    { section: "Classic Cocktails", items: [
      { name: "Classic Margarita", price: "110" },
      { name: "Old Fashioned", price: "100" },
      { name: "Negroni", price: "110" },
      { name: "Cosmopolitan", price: "85" },
      { name: "Singapore Sling", price: "125" },
      { name: "Caipirinha", price: "80" },
      { name: "Daiquiri Classic", price: "80" },
      { name: "Espresso Martini", price: "85" },
      { name: "Long Island Ice Tea", price: "115" },
      { name: "Mai Tai", price: "95" },
      { name: "Summer Aperol", price: "115" },
    ]},
    { section: "Signature Cocktails", items: [
      { name: "Jungle Tiki", price: "110", tag: "Signature" },
      { name: "Tropical Sangria", price: "105", tag: "Signature" },
      { name: "Feeling Blue", price: "85", tag: "Signature" },
      { name: "Sakapatat Draft Island", price: "110", tag: "Signature" },
    ]},
    { section: "Mojitos Cocktails", items: [
      { name: "Classic", desc: "Lime, mint, sugar syrup, soda water", price: "Glass 80 / Bottle 350" },
      { name: "Strawberry", desc: "Lime, strawberry, mint, sugar, soda", price: "Glass 85 / Bottle 375" },
      { name: "Cucumber", desc: "Lime, cucumber, mint, sugar, soda", price: "Glass 85 / Bottle 375" },
    ]},
    { section: "Frozen Cocktails", items: [
      { name: "Frozen Margarita", price: "135" },
      { name: "Daiquiri Strawberry Slush", price: "110" },
    ]},
    { section: "Gin & Tonic", items: [
      { name: "Cinnamon G&T", price: "105" },
      { name: "Strawberry G&T", price: "105" },
      { name: "Spanish G&T", price: "105" },
      { name: "Hendricks Colombo G&T", price: "145" },
    ]},
    { section: "Sour Cocktails", items: [
      { name: "Whiskey Sour", price: "100" },
      { name: "Gin Sour", price: "100" },
      { name: "Saka Sour", price: "115", tag: "House" },
      { name: "Amaretto Sour", price: "135" },
    ]},
    { section: "Crazy Corner", items: [
      { name: "Vodka Caramel", desc: "Vodka, Caramel & Whipped Cream", price: "45" },
      { name: "Blue Karate", desc: "Vodka, Blue Curacao & Lemon Juice", price: "55" },
      { name: "B-52 Flaming Shot", desc: "Kahlua, Bailey's & Cointreau", price: "65" },
      { name: "Blue Jellyfish", desc: "Vodka, Sambuca & Blue Curacao", price: "65" },
      { name: "Three Wise Men", desc: "JW Red, Jim Beam, Jack Daniel", price: "65" },
      { name: "Flaming Sambucca", desc: "Sambuca & Coffee Bean", price: "70" },
      { name: "Jager Bomb", desc: "Jagermeister & Red Bull", price: "75" },
      { name: "Blow Job", desc: "Kahlua, Bailey's & Whipped Cream", price: "70" },
      { name: "Flaming Lamborghini", desc: "Sambuca, Kahlua, Amaretto & Blue Curacao", price: "175", tag: "🔥 Epic" },
    ]},
  ],
  spirits: [
    { section: "Cognac (Glass/Bottle)", items: [
      { name: "Martell VSOP Red Label", price: "/ 2250" },
      { name: "Hennessy VSOP", price: "/ 2500" },
    ]},
    { section: "Rum (Glass/Bottle)", items: [
      { name: "Captain Morgan White", price: "45 / 825" },
      { name: "Captain Morgan Gold", price: "45 / 825" },
      { name: "Bacardi Light", price: "45 / 825" },
      { name: "Bacardi Spiced", price: "45 / 825" },
      { name: "Myers Original Dark", price: "60 / 975" },
    ]},
    { section: "Vodka (Glass/Bottle)", items: [
      { name: "Baby Smirnoff Red", price: "/ 200" },
      { name: "Smirnoff Red", price: "40 / 675" },
      { name: "Skyy", price: "40 / 750" },
      { name: "Absolut Blue", price: "55 / 925" },
      { name: "Grey Goose", price: "85 / 1500" },
      { name: "Ciroc", price: "85 / 1500" },
    ]},
    { section: "Gin (Glass/Bottle)", items: [
      { name: "Gordon's", price: "45 / 825" },
      { name: "Gordon's Pink", price: "45 / 875" },
      { name: "East Indies", price: "55 / 975" },
      { name: "Bombay Saphire", price: "60 / 1100" },
      { name: "Roku", price: "85 / 1375" },
      { name: "Hendrick's", price: "90 / 1500" },
      { name: "Monkey 47", price: "/ 1750" },
    ]},
    { section: "Tequila (Glass/Bottle)", items: [
      { name: "Jose Cuervo", price: "60 / 1000" },
      { name: "Herradura Plata", price: "85 / 1500" },
      { name: "Siempre Plata", price: "/ 1600" },
      { name: "Codigo Blanco", price: "/ 1750" },
      { name: "Patron Reposado", price: "/ 2200" },
    ]},
    { section: "Liqueurs (Glass/Bottle)", items: [
      { name: "Bailey's Irish Cream", price: "60 / 1050" },
      { name: "Jagermeister", price: "55 / 975" },
      { name: "Cointreau", price: "65 / 1150" },
    ]},
    { section: "Scotch Whiskey (Glass/Bottle)", items: [
      { name: "JW Red Label", price: "50 / 900" },
      { name: "JW Black Label", price: "75 / 1250" },
      { name: "Chivas Regal 12 Y.O.", price: "80 / 1350" },
      { name: "Monkey Shoulder", price: "90 / 1450" },
    ]},
    { section: "American Whiskey (Glass/Bottle)", items: [
      { name: "Jack Daniel's", price: "75 / 1150" },
      { name: "Jim Beam", price: "50 / 975" },
      { name: "Gentleman Jack", price: "/ 1600" },
    ]},
    { section: "Irish Whiskey (Glass/Bottle)", items: [
      { name: "Jameson Irish", price: "65 / 1100" },
      { name: "Bushmills", price: "70 / 1250" },
    ]},
    { section: "Single Malt (Glass/Bottle)", items: [
      { name: "Singleton 12 Y.O.", price: "115 / 1700" },
      { name: "Glendfiddich 12 Y.O.", price: "115 / 1750" },
      { name: "Glenlivet 12 Y.O.", price: "115 / 1800" },
    ]},
    { section: "Premium Whiskey", items: [
      { name: "Hibiki", price: "4600", tag: "Premium" },
      { name: "Macallan 12 Y.O.", price: "4400", tag: "Premium" },
    ]},
  ],
  mocktails: [
    { section: "Mocktails", items: [
      { name: "Virgin Colada", desc: "Coconut milk, pineapple juice", price: "30" },
      { name: "Belgian Flag", desc: "Dark chocolate, orange concentrate, Fanta", price: "33" },
      { name: "Saka Sunset", desc: "OJ, strawberries, lime, white fine sugar", price: "30", tag: "Recommended" },
      { name: "Saka Fruit Punch", desc: "Pineapple, orange juice, strawberry, soda", price: "33" },
    ]},
    { section: "Virgin Mojito", items: [
      { name: "Classic", desc: "Lime, mint, sugar syrup, soda water", price: "30", tag: "Recommended" },
      { name: "Strawberry", desc: "Lime, strawberry, mint, sugar, soda", price: "33" },
      { name: "Lychee", desc: "Lime, lychee, mint, sugar, soda", price: "35" },
    ]},
  ],
  smoothies: [
    { section: "Smoothies", items: [
      { name: "Strawberry Lassie", desc: "Fresh strawberry, plain yoghurt, strawberry syrup", price: "33" },
      { name: "Strawberry Slush", desc: "Frozen strawberry, lemon juice, sugar syrup", price: "28" },
      { name: "Chocolate Milkshake", desc: "Chocolate milk, sugar syrup, vanilla ice cream", price: "33" },
      { name: "Avocado Chocolate", desc: "Fresh milk, sugar syrup, avocado, chocolate ice cream", price: "33" },
      { name: "Banana Smoothie", desc: "Banana, yoghurt, fresh milk, vanilla ice cream", price: "33" },
      { name: "Strawberry Smoothie", desc: "Strawberry, yoghurt, fresh milk, vanilla ice cream", price: "33" },
      { name: "Pina Berry", desc: "Strawberry, pineapple, strawberry milk, honey, ice cream", price: "35" },
    ]},
  ],
  food: [
    { section: "Pizza", items: [
      { name: "Classic Margherita Pizza", desc: "Vegetarian", price: "60", tag: "Vegetarian" },
      { name: "Mad Mushroom", desc: "Vegetarian", price: "67", tag: "Vegetarian" },
      { name: "Spicy Tuna", price: "70" },
      { name: "Quattro Formaggi", desc: "Four cheeses, vegetarian", price: "87", tag: "Vegetarian" },
      { name: "Meat Lover", price: "95", tag: "Recommended" },
      { name: "Smoke Beef Hawaii", price: "75" },
    ]},
    { section: "Grills", items: [
      { name: "Grilled Chicken Breast", price: "60" },
      { name: "Chicken Shish Kebab", price: "70" },
      { name: "Saka Striploin Steak", price: "145", tag: "Recommended" },
      { name: "Saka Tenderloin Steak", price: "145", tag: "Recommended" },
      { name: "Saka Rib Eye Steak", price: "135", tag: "Recommended" },
      { name: "Salmon Steak", price: "115" },
    ]},
    { section: "Locale Palate", items: [
      { name: "Nasi Goreng Cantonese", price: "50" },
      { name: "Nasi Goreng Seafood", price: "55", tag: "Recommended" },
      { name: "Iga Bakar", price: "105" },
      { name: "Kwetiau Goreng", price: "55" },
      { name: "Nasi Babi Crispy", price: "55", tag: "Recommended" },
      { name: "Dori Sambal Matah", price: "55", tag: "New" },
      { name: "Vietnamese Noodle Soup", price: "68" },
    ]},
  ],
  dessert: [
    { section: "Dessert", items: [
      { name: "Homemade Churros", price: "35" },
      { name: "Chocolate Lava Cake", price: "42", tag: "Recommended" },
      { name: "Choco Banana Pizza", price: "55" },
      { name: "Extra Coffee", price: "15" },
    ]},
  ],
};

// ─── FLIP CARD ────────────────────────────────────────────────────────────────

function FlipCard({ section }: { section: MenuSection }) {
  const [flipped, setFlipped] = useState(false);
  const half = Math.ceil(section.items.length / 2);
  const frontItems = section.items.slice(0, half);
  const backItems = section.items.slice(half);
  const hasBack = backItems.length > 0;

  return (
    <div
      className="relative w-full"
      style={{ perspective: "1000px" }}
      onClick={() => hasBack && setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", position: "relative" }}
        className="w-full"
      >
        {/* FRONT */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="w-full bg-[#111111] border border-[#2C2C2C] p-5 rounded-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-[#D6B98C] text-[9px] tracking-[0.35em] uppercase font-medium">
              {section.section}
            </h4>
            {hasBack && (
              <span className="text-[#6F4E37] text-[9px] tracking-widest uppercase flex items-center gap-1">
                <span>flip</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
            )}
          </div>
          <div className="divide-y divide-[#2C2C2C]/50">
            {frontItems.map((item) => (
              <div key={item.name + item.price} className="flex justify-between items-start gap-3 py-2.5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[#F5F1EA] text-sm">{item.name}</span>
                    {item.tag && (
                      <span className="bg-[#6F4E37]/25 border border-[#6F4E37]/40 text-[#D6B98C] text-[8px] tracking-widest uppercase px-1.5 py-0.5">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  {item.desc && <p className="text-[#F5F1EA]/35 text-xs mt-0.5 font-light">{item.desc}</p>}
                </div>
                <span className="shrink-0 text-[#D6B98C] text-sm font-semibold whitespace-nowrap" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BACK */}
        {hasBack && (
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              top: 0, left: 0, right: 0,
            }}
            className="w-full bg-[#1B1B1B] border border-[#6F4E37]/40 p-5 rounded-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[#D6B98C] text-[9px] tracking-[0.35em] uppercase font-medium">
                {section.section} <span className="text-[#6F4E37]">· cont.</span>
              </h4>
              <span className="text-[#6F4E37] text-[9px] tracking-widest uppercase flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>flip back</span>
              </span>
            </div>
            <div className="divide-y divide-[#2C2C2C]/50">
              {backItems.map((item) => (
                <div key={item.name + item.price} className="flex justify-between items-start gap-3 py-2.5">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[#F5F1EA] text-sm">{item.name}</span>
                      {item.tag && (
                        <span className="bg-[#6F4E37]/25 border border-[#6F4E37]/40 text-[#D6B98C] text-[8px] tracking-widest uppercase px-1.5 py-0.5">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    {item.desc && <p className="text-[#F5F1EA]/35 text-xs mt-0.5 font-light">{item.desc}</p>}
                  </div>
                  <span className="shrink-0 text-[#D6B98C] text-sm font-semibold whitespace-nowrap" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

export default function Menu() {
  const [activeTab, setActiveTab] = useState("beers");

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#1B1B1B]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#D6B98C] text-xs tracking-[0.35em] uppercase font-light mb-3">What We Serve</p>
          <h2 className="text-[#F5F1EA] leading-none tracking-widest uppercase"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Our <span className="text-[#D6B98C]">Menu</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-[#F5F1EA]/25 text-[10px] mt-4 tracking-wider">
            All prices subject to 10% gov. tax & 5% service charge · Tap cards to flip for more items
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 border font-medium ${
                activeTab === cat.id
                  ? "bg-[#6F4E37] border-[#6F4E37] text-[#F5F1EA]"
                  : "border-[#2C2C2C] text-[#F5F1EA]/40 hover:border-[#6F4E37]/50 hover:text-[#D6B98C]"
              }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Flip cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={stagger} initial="hidden" animate="visible"
            >
              {menuData[activeTab]?.map((sec) => (
                <motion.div key={sec.section} variants={fadeUp}>
                  <FlipCard section={sec} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
          className="text-center text-[#F5F1EA]/20 text-xs tracking-widest mt-8 uppercase">
          Full menu available at the venue · Reservasi: +62 822-3119-7986
        </motion.p>
      </div>
    </section>
  );
}
