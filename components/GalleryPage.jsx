"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// COMPLETE GALLERY DATA - ALL IMAGES WITH PROPER NUMBERING
const galleryData = {
  // ALL 69 KITCHEN IMAGES
  kitchens: [
    { title: "Aqua Harmony Kitchen", image: "/gallery-images/modular-kitchen/Aqua Harmony Kitchen.jpeg", category: "Modular Kitchen" },
    { title: "Beige Luxe Studio Kitchen", image: "/gallery-images/modular-kitchen/Beige Luxe Studio Kitchen.jpeg", category: "Studio Kitchen" },
    { title: "Blush Harmony Kitchen", image: "/gallery-images/modular-kitchen/Blush Harmony Kitchen.jpeg", category: "Modular Kitchen" },
    { title: "Blush Harmony Kitchen - View 2", image: "/gallery-images/modular-kitchen/Blush Harmony Kitchen1.jpeg", category: "Modular Kitchen" },
    { title: "Blush Luxe Kitchen - Main", image: "/gallery-images/modular-kitchen/Blush Luxe Kitchen.jpeg", category: "Luxury Kitchen" },
    { title: "Blush Luxe Kitchen - Detail 1", image: "/gallery-images/modular-kitchen/Blush Luxe Kitchen1.jpeg", category: "Luxury Kitchen" },
    { title: "Blush Luxe Kitchen - Detail 2", image: "/gallery-images/modular-kitchen/Blush Luxe Kitchen2.jpeg", category: "Luxury Kitchen" },
    { title: "Classic Greyline Kitchen", image: "/gallery-images/modular-kitchen/Classic Greyline Kitchen.jpeg", category: "Classic" },
    { title: "Classic Wood Accent Kitchen", image: "/gallery-images/modular-kitchen/Classic Wood Accent Kitchen.jpeg", category: "Classic" },
    { title: "Cream Classic Luxe Kitchen", image: "/gallery-images/modular-kitchen/Cream Classic Luxe Kitchen.jpeg", category: "Classic Luxe" },
    { title: "Crystal White Kitchen", image: "/gallery-images/modular-kitchen/Crystal White Kitchen.jpeg", category: "Contemporary" },
    { title: "Dark Aura Kitchen", image: "/gallery-images/modular-kitchen/Dark Aura Kitchen.jpeg", category: "Dark Theme" },
    { title: "Elite Glow Kitchen", image: "/gallery-images/modular-kitchen/EliteGlow Kitchen.jpeg", category: "Premium" },
    { title: "Elite Glow Kitchen - View 2", image: "/gallery-images/modular-kitchen/EliteGlow Kitchen1.jpeg", category: "Premium" },
    { title: "Elite Glow Kitchen - View 3", image: "/gallery-images/modular-kitchen/EliteGlow Kitchen2.jpeg", category: "Premium" },
    { title: "Emerald Breeze Kitchen", image: "/gallery-images/modular-kitchen/Emerald Breeze Kitchen.jpeg", category: "Green Theme" },
    { title: "Emerald Edge Kitchen", image: "/gallery-images/modular-kitchen/Emerald Edge Kitchen.jpeg", category: "Modern" },
    { title: "Espresso Modern Kitchen", image: "/gallery-images/modular-kitchen/Espresso Modern Kitchen.jpeg", category: "Modern" },
    { title: "FreshLine Parallel Kitchen - View 1", image: "/gallery-images/modular-kitchen/FreshLine Parallel Kitchen1.jpeg", category: "Parallel" },
    { title: "FreshLine Parallel Kitchen - View 2", image: "/gallery-images/modular-kitchen/FreshLine Parallel Kitchen2.jpeg", category: "Parallel" },
    { title: "FreshLine Parallel Kitchen - View 3", image: "/gallery-images/modular-kitchen/FreshLine Parallel Kitchen3.jpeg", category: "Parallel" },
    { title: "FreshMint Modular Kitchen", image: "/gallery-images/modular-kitchen/FreshMint Modular Kitchen.jpeg", category: "Fresh Theme" },
    { title: "GlowLine Kitchen", image: "/gallery-images/modular-kitchen/GlowLine Kitchen.jpeg", category: "Glow Series" },
    { title: "Golden Edge Kitchen", image: "/gallery-images/modular-kitchen/Golden Edge Kitchen.jpeg", category: "Gold Accent" },
    { title: "Golden Edge Kitchen - Detail", image: "/gallery-images/modular-kitchen/Golden Edge Kitchen1.jpeg", category: "Gold Accent" },
    { title: "Graphite Gloss Kitchen", image: "/gallery-images/modular-kitchen/Graphite Gloss Kitchen.jpeg", category: "Gloss Finish" },
    { title: "Green Royal Kitchen", image: "/gallery-images/modular-kitchen/GreenRoyal Kitchen.jpeg", category: "Royal Green" },
    { title: "Green Royal Kitchen - View 2", image: "/gallery-images/modular-kitchen/GreenRoyal Kitchen1.jpeg", category: "Royal Green" },
    { title: "Grey Heritage Kitchen", image: "/gallery-images/modular-kitchen/Grey Heritage Kitchen.jpeg", category: "Heritage" },
    { title: "Grey White Modern Kitchen", image: "/gallery-images/modular-kitchen/Grey White Modern Kitchen.jpeg", category: "Modern Grey" },
    { title: "Ivory Glow Luxe Kitchen", image: "/gallery-images/modular-kitchen/Ivory Glow Luxe Kitchen.jpeg", category: "Ivory Series" },
    { title: "Ivory Glow Luxe Kitchen - View 2", image: "/gallery-images/modular-kitchen/Ivory Glow Luxe Kitchen1.jpeg", category: "Ivory Series" },
    { title: "Lavender Luxe Kitchen", image: "/gallery-images/modular-kitchen/Lavender Luxe Kitchen.jpeg", category: "Lavender Theme" },
    { title: "Lavender Luxe Kitchen - View 2", image: "/gallery-images/modular-kitchen/Lavender Luxe Kitchen1.jpeg", category: "Lavender Theme" },
    { title: "LuxeCraft Kitchen", image: "/gallery-images/modular-kitchen/LuxeCraft Kitchen.jpeg", category: "LuxeCraft" },
    { title: "Midnight Glow Kitchen", image: "/gallery-images/modular-kitchen/Midnight Glow Kitchen.jpeg", category: "Midnight Series" },
    { title: "Minimal Glow Kitchen", image: "/gallery-images/modular-kitchen/Minimal Glow Kitchen.jpeg", category: "Minimal" },
    { title: "Mint Fresh Kitchen", image: "/gallery-images/modular-kitchen/Mint Fresh Kitchen.jpeg", category: "Fresh" },
    { title: "Modern Ash Glow Kitchen", image: "/gallery-images/modular-kitchen/Modern Ash Glow Kitchen.jpeg", category: "Ash Series" },
    { title: "Modern Ashwood Kitchen", image: "/gallery-images/modular-kitchen/Modern Ashwood Kitchen.jpeg", category: "Ashwood" },
    { title: "Modern Ivory Kitchen", image: "/gallery-images/modular-kitchen/Modern Ivory Kitchen.jpeg", category: "Modern Ivory" },
    { title: "Mono Edge Kitchen", image: "/gallery-images/modular-kitchen/Mono Edge Kitchen.jpeg", category: "Monochrome" },
    { title: "Neutral Luxe Kitchen", image: "/gallery-images/modular-kitchen/Neutral Luxe Kitchen.jpeg", category: "Neutral" },
    { title: "Royal Black Luxe Kitchen", image: "/gallery-images/modular-kitchen/Royal Black Luxe Kitchen.jpeg", category: "Royal Black" },
    { title: "Royal Noir Kitchen", image: "/gallery-images/modular-kitchen/Royal Noir Kitchen.jpeg", category: "Royal Noir" },
    { title: "Royal Edge Kitchen", image: "/gallery-images/modular-kitchen/RoyalEdge Kitchen.jpeg", category: "Royal Edge" },
    { title: "Silver Elegance Kitchen - View 1", image: "/gallery-images/modular-kitchen/Silver Elegance Kitchen1.jpeg", category: "Silver Series" },
    { title: "Silver Elegance Kitchen - View 2", image: "/gallery-images/modular-kitchen/Silver Elegance Kitchen2.jpeg", category: "Silver Series" },
    { title: "Silver Elegance Kitchen - View 3", image: "/gallery-images/modular-kitchen/Silver Elegance Kitchen3.jpeg", category: "Silver Series" },
    { title: "Silver Glow Kitchen", image: "/gallery-images/modular-kitchen/SilverGlow Kitchen.jpeg", category: "Silver Glow" },
    { title: "Sky Blue Smart Kitchen", image: "/gallery-images/modular-kitchen/Sky Blue Smart Kitchen.jpeg", category: "Smart Kitchen" },
    { title: "Snowline Kitchen", image: "/gallery-images/modular-kitchen/Snowline Kitchen.jpeg", category: "Snow Theme" },
    { title: "Snowline Kitchen - View 2", image: "/gallery-images/modular-kitchen/Snowline Kitchen1.jpeg", category: "Snow Theme" },
    { title: "Soft Beige Elegance Kitchen", image: "/gallery-images/modular-kitchen/Soft Beige Elegance Kitchen.jpeg", category: "Soft Beige" },
    { title: "Soft Cream Minimal Kitchen", image: "/gallery-images/modular-kitchen/Soft Cream Minimal Kitchen.jpeg", category: "Soft Cream" },
    { title: "Soft Ivory Kitchen", image: "/gallery-images/modular-kitchen/Soft Ivory Kitchen.jpeg", category: "Soft Ivory" },
    { title: "Soft Grey Modular Kitchen", image: "/gallery-images/modular-kitchen/SoftGrey Modular Kitchen.jpeg", category: "Soft Grey" },
    { title: "Teal Shine Kitchen", image: "/gallery-images/modular-kitchen/Teal Shine Kitchen.jpeg", category: "Teal Series" },
    { title: "Teal Shine Kitchen - View 2", image: "/gallery-images/modular-kitchen/Teal Shine Kitchen1.jpeg", category: "Teal Series" },
    { title: "Urban Luxe Parallel Kitchen", image: "/gallery-images/modular-kitchen/Urban Luxe Parallel Kitchen.jpeg", category: "Urban Luxe" },
    { title: "Warm Elegance Kitchen", image: "/gallery-images/modular-kitchen/Warm Elegance Kitchen.jpeg", category: "Warm Series" },
    { title: "Warm Elegance Kitchen - View 2", image: "/gallery-images/modular-kitchen/Warm Elegance Kitchen1.jpeg", category: "Warm Series" },
    { title: "Warm Elegance Kitchen - View 3", image: "/gallery-images/modular-kitchen/Warm Elegance Kitchen3.jpeg", category: "Warm Series" },
    { title: "Warm Elegance Kitchen - View 4", image: "/gallery-images/modular-kitchen/Warm Elegance Kitchen4.jpeg", category: "Warm Series" },
    { title: "White Royal Kitchen - Main", image: "/gallery-images/modular-kitchen/WhiteRoyal kitchen.jpeg", category: "White Royal" },
    { title: "White Royal Kitchen - View 2", image: "/gallery-images/modular-kitchen/WhiteRoyal kitchen1.jpeg", category: "White Royal" },
    { title: "White Royal Kitchen - View 3", image: "/gallery-images/modular-kitchen/WhiteRoyal kitchen2.jpeg", category: "White Royal" },
    { title: "Premium Kitchen Design", image: "/gallery-images/modular-kitchen/WhatsApp Image 2026-05-01 at 4.12.49 PM.jpeg", category: "Premium" },
    { title: "Premium Kitchen Design - View 2", image: "/gallery-images/modular-kitchen/WhatsApp Image 2026-05-01 at 4.12.49 PM (2).jpeg", category: "Premium" },
  ],

  // ALL SOFA IMAGES
  sofas: [
    { title: "Amber Blend Corner Sofa", image: "/gallery-images/Sofaset/AmberBlend Corner Sofa.jpeg", category: "Corner Sofa" },
    { title: "AmberWood L-Shape Lounge Sofa", image: "/gallery-images/Sofaset/AmberWood L-Shape Lounge Sofa.jpeg", category: "L-Shape" },
    { title: "Aqua Bliss L-Shape Sofa", image: "/gallery-images/Sofaset/Aqua Bliss L-Shape Sofa.jpeg", category: "L-Shape" },
    { title: "Aqua Elite Corner Set", image: "/gallery-images/Sofaset/AquaElite Corner Set.jpeg", category: "Corner Set" },
    { title: "Aqua Line Modern L-Shape Sofa", image: "/gallery-images/Sofaset/AquaLine Modern L-Shape Sofa.jpeg", category: "Modern" },
    { title: "Ashwood Luxe L-Shape Sofa", image: "/gallery-images/Sofaset/Ashwood Luxe L-Shape Sofa.jpeg", category: "Luxury" },
    { title: "Blue Haven Corner Sofa - Main", image: "/gallery-images/Sofaset/Blue Haven Corner Sofa1.jpeg", category: "Corner Sofa" },
    { title: "Blue Haven Corner Sofa - View 2", image: "/gallery-images/Sofaset/Blue Haven Corner Sofa2.jpeg", category: "Corner Sofa" },
    { title: "Blue Haven Corner Sofa - View 3", image: "/gallery-images/Sofaset/Blue Haven Corner Sofa3.jpeg", category: "Corner Sofa" },
    { title: "Blue Haven Corner Sofa - View 4", image: "/gallery-images/Sofaset/Blue Haven Corner Sofa4.jpeg", category: "Corner Sofa" },
    { title: "Blue Haven Corner Sofa - View 5", image: "/gallery-images/Sofaset/Blue Haven Corner Sofa5.jpeg", category: "Corner Sofa" },
    { title: "Blue Haven Corner Sofa - View 6", image: "/gallery-images/Sofaset/Blue Haven Corner Sofa6.jpeg", category: "Corner Sofa" },
    { title: "Blush Curve Luxe Sofa", image: "/gallery-images/Sofaset/Blush Curve Luxe Sofa.jpeg", category: "Curve Design" },
    { title: "Compact Comfort Sofa - View 1", image: "/gallery-images/Sofaset/Compact Comfort Sofa1.jpeg", category: "Compact" },
    { title: "Compact Comfort Sofa - View 2", image: "/gallery-images/Sofaset/Compact Comfort Sofa2.jpeg", category: "Compact" },
    { title: "DuoLux Corner Sofa", image: "/gallery-images/Sofaset/DuoLux Corner Sofa.jpeg", category: "Corner Sofa" },
    { title: "GoldenNest L-Shape Sofa", image: "/gallery-images/Sofaset/GoldenNest L-Shape Sofa.jpeg", category: "Golden Series" },
    { title: "GrandNest U-Shape Lounge Sofa", image: "/gallery-images/Sofaset/GrandNest U-Shape Lounge Sofa.jpeg", category: "U-Shape" },
    { title: "Ivory Crest L-Shape Sofa", image: "/gallery-images/Sofaset/Ivory Crest L-Shape Sofa.jpeg", category: "Ivory Series" },
    { title: "Ocean Luxe Corner Sofa", image: "/gallery-images/Sofaset/Ocean Luxe Corner Sofa.jpeg", category: "Ocean Theme" },
    { title: "Regal Lounge L-Shape Sofa", image: "/gallery-images/Sofaset/Regal Lounge L-Shape Sofa.jpeg", category: "Regal" },
    { title: "Royal Walnut L-Shape Sofa", image: "/gallery-images/Sofaset/Royal Walnut L-Shape Sofa.jpeg", category: "Royal Collection" },
    { title: "SkyLuxe L-Shape Sofa", image: "/gallery-images/Sofaset/SkyLuxe L-Shape Sofa.jpeg", category: "Sky Series" },
    { title: "Sunset Comfort Corner Sofa", image: "/gallery-images/Sofaset/Sunset Comfort Corner Sofa.jpeg", category: "Sunset Series" },
    { title: "Teal Grande L-Shape Sofa", image: "/gallery-images/Sofaset/Teal Grande L-Shape Sofa.jpeg", category: "Teal Series" },
    { title: "TealNest DualTone L-Shape Sofa", image: "/gallery-images/Sofaset/TealNest DualTone L-Shape Sofa.jpeg", category: "Dual Tone" },
    { title: "Terracotta Comfort L-Shape Sofa", image: "/gallery-images/Sofaset/Terracotta Comfort L-Shape Sofa.jpeg", category: "Terracotta" },
    { title: "Urban Earth Accent L-Shape Sofa", image: "/gallery-images/Sofaset/Urban Earth Accent L-Shape Sofa.jpeg", category: "Urban Earth" },
  ],

  // ALL BED IMAGES
  beds: [
    { title: "AeroLift Hydraulic Bed - Main", image: "/gallery-images/Beds/AeroLift Hydraulic Bed1.jpeg", category: "Hydraulic" },
    { title: "AeroLift Hydraulic Bed - View 2", image: "/gallery-images/Beds/AeroLift Hydraulic Bed 2.jpeg", category: "Hydraulic" },
    { title: "AeroLift Hydraulic Bed - View 3", image: "/gallery-images/Beds/AeroLift Hydraulic Bed 3.jpeg", category: "Hydraulic" },
    { title: "AeroLift Hydraulic Bed - View 4", image: "/gallery-images/Beds/AeroLift Hydraulic Bed 4.jpeg", category: "Hydraulic" },
    { title: "AeroLift Hydraulic Bed - View 5", image: "/gallery-images/Beds/AeroLift Hydraulic Bed 5.jpeg", category: "Hydraulic" },
    { title: "Arctic Bliss Bed", image: "/gallery-images/Beds/Arctic Bliss Bed.jpeg", category: "Arctic Series" },
    { title: "Luxe Haven Bed", image: "/gallery-images/Beds/Luxe Haven Bed.jpeg", category: "Luxury" },
    { title: "Marble Edge Bed - Main", image: "/gallery-images/Beds/Marble Edge Bed.jpeg", category: "Marble Design" },
    { title: "Marble Edge Bed - View 2", image: "/gallery-images/Beds/Marble Edge Bed1.jpeg", category: "Marble Design" },
    { title: "Metro Comfort Bed", image: "/gallery-images/Beds/Metro Comfort Bed.jpeg", category: "Comfort" },
    { title: "Nova Sleep Bed", image: "/gallery-images/Beds/Nova Sleep Bed.jpeg", category: "Sleep Series" },
    { title: "PureNest Bed", image: "/gallery-images/Beds/PureNest Bed.jpeg", category: "Pure Series" },
    { title: "Royal Bliss Bed", image: "/gallery-images/Beds/Royal Bliss Bed.jpeg", category: "Royal" },
    { title: "Royal Crest Bed", image: "/gallery-images/Beds/Royal Crest Bed.jpeg", category: "Royal Crest" },
    { title: "Royal Sapphire Bed", image: "/gallery-images/Beds/Royal Sapphire Bed.jpeg", category: "Royal Sapphire" },
    { title: "Urban Nest Bed", image: "/gallery-images/Beds/Urban Nest Bed.jpeg", category: "Urban" },
    { title: "Urban Walnut Bed", image: "/gallery-images/Beds/Urban Walnut Bed.jpeg", category: "Urban Walnut" },
  ],

  // ALL WARDROBE IMAGES
  wardrobes: [
    { title: "Astra Fluted Wardrobe", image: "/gallery-images/walldrops/Astra Fluted Wardrobe.jpeg", category: "Fluted" },
    { title: "FluteCraft Designer Wardrobe", image: "/gallery-images/walldrops/FluteCraft Designer Wardrobe.jpeg", category: "Designer" },
    { title: "Graphite Curve Wardrobe", image: "/gallery-images/walldrops/Graphite Curve Wardrobe.jpeg", category: "Curve Design" },
    { title: "Imperia Luxe Wardrobe", image: "/gallery-images/walldrops/Imperia Luxe Wardrobe.jpeg", category: "Luxury" },
    { title: "Ivory Edge Wardrobe", image: "/gallery-images/walldrops/Ivory Edge Wardrobe.jpeg", category: "Ivory" },
    { title: "Linear Luxe Wardrobe", image: "/gallery-images/walldrops/Linear Luxe Wardrobe.jpeg", category: "Linear" },
    { title: "Luna Dot Wardrobe", image: "/gallery-images/walldrops/Luna Dot Wardrobe.jpeg", category: "Dot Pattern" },
    { title: "Midnight Crest Wardrobe", image: "/gallery-images/walldrops/Midnight Crest Wardrobe.jpeg", category: "Midnight" },
    { title: "Monarch Duo Wardrobe", image: "/gallery-images/walldrops/Monarch Duo Wardrobe.jpeg", category: "Monarch" },
    { title: "Monarch Matte Wardrobe", image: "/gallery-images/walldrops/Monarch Matte Wardrobe.jpeg", category: "Matte Finish" },
    { title: "Nordic Walnut Designer Wardrobe", image: "/gallery-images/walldrops/Nordic Walnut Designer Wardrobe.jpeg", category: "Nordic" },
    { title: "PureLine Designer Wardrobe", image: "/gallery-images/walldrops/PureLine Designer Wardrobe.jpeg", category: "PureLine" },
    { title: "Regal Classic Wardrobe", image: "/gallery-images/walldrops/Regal Classic Wardrobe.jpeg", category: "Classic" },
    { title: "Royal Fusion TV Wardrobe", image: "/gallery-images/walldrops/Royal Fusion TV Wardrobe.jpeg", category: "Fusion" },
    { title: "Royal Weave Wardrobe", image: "/gallery-images/walldrops/Royal Weave Wardrobe.jpeg", category: "Weave" },
    { title: "Signature Vertical Wardrobe", image: "/gallery-images/walldrops/Signature Vertical Wardrobe.jpeg", category: "Vertical" },
    { title: "SlimLine Luxe Wardrobe", image: "/gallery-images/walldrops/SlimLine Luxe Wardrobe.jpeg", category: "SlimLine" },
    { title: "Titan Stone Sliding Wardrobe", image: "/gallery-images/walldrops/Titan Stone Sliding Wardrobe.jpeg", category: "Stone" },
    { title: "Urban Crest Wardrobe - View 1", image: "/gallery-images/walldrops/Urban Crest Wardrobe1.jpeg", category: "Urban" },
    { title: "Urban Crest Wardrobe - View 2", image: "/gallery-images/walldrops/Urban Crest Wardrobe2.jpeg", category: "Urban" },
    { title: "Urban Crest Wardrobe - View 3", image: "/gallery-images/walldrops/Urban Crest Wardrobe3.jpeg", category: "Urban" },
    { title: "Urban Crest Wardrobe - View 4", image: "/gallery-images/walldrops/Urban Crest Wardrobe4.jpeg", category: "Urban" },
    { title: "Urban Glide Wardrobe", image: "/gallery-images/walldrops/Urban Glide Wardrobe.jpeg", category: "Glide" },
    { title: "Walnut Glide Wardrobe", image: "/gallery-images/walldrops/Walnut Glide Wardrobe.jpeg", category: "Walnut" },
  ],

  // ALL TV UNIT IMAGES
  tvunits: [
    { title: "Aura Fluted Luxe TV Panel", image: "/gallery-images/tv-cabinet/Aura Fluted Luxe TV Panel.jpeg", category: "Fluted" },
    { title: "AuraLite Wooden TV Console", image: "/gallery-images/tv-cabinet/AuraLite Wooden TV Console.jpeg", category: "Wooden" },
    { title: "Marble Fusion Media Wall", image: "/gallery-images/tv-cabinet/Marble Fusion Media Wall.jpeg", category: "Marble" },
    { title: "Midnight Marble Flute TV Panel", image: "/gallery-images/tv-cabinet/Midnight Marble Flute TV Panel.jpeg", category: "Midnight" },
    { title: "Monochrome Marble Luxe TV Panel", image: "/gallery-images/tv-cabinet/Monochrome Marble Luxe TV Panel.jpeg", category: "Monochrome" },
    { title: "OakFrame Fluted TV Wall", image: "/gallery-images/tv-cabinet/OakFrame Fluted TV Wall.jpeg", category: "Oak" },
    { title: "OakLine Sliding TV Cabinet", image: "/gallery-images/tv-cabinet/OakLine Sliding TV Cabinet.jpeg", category: "Sliding" },
    { title: "Royal Flute Panel TV Unit", image: "/gallery-images/tv-cabinet/Royal Flute Panel TV Unit.jpeg", category: "Royal" },
    { title: "Royal Walnut Marble TV Panel", image: "/gallery-images/tv-cabinet/Royal Walnut Marble TV Panel.jpeg", category: "Royal Walnut" },
    { title: "Urban Fluted Marble TV Unit", image: "/gallery-images/tv-cabinet/Urban Fluted Marble TV Unit.jpeg", category: "Urban" },
    { title: "Walnut Fluted Marble TV Panel", image: "/gallery-images/tv-cabinet/Walnut Fluted Marble TV Panel.jpeg", category: "Walnut" },
  ],

  // ALL PARTITION IMAGES
  partitions: [
    { title: "Royal Slat Partition - Main", image: "/gallery-images/partition-design/Royal Slat Partition1.jpeg", category: "Slat Design" },
    { title: "Royal Slat Partition - View 2", image: "/gallery-images/partition-design/Royal Slat Partition 2.jpeg", category: "Slat Design" },
    { title: "Signature Bloom Partition", image: "/gallery-images/partition-design/Signature Bloom Partition.jpeg", category: "Artistic" },
  ],

  // POOJA ROOM IMAGES
  poojaroom: [
    { title: "Omkar Glow Pooja Unit - Main", image: "/gallery-images/pooja-room/Omkar Glow Pooja Unit1.jpeg", category: "Spiritual" },
    { title: "Omkar Glow Premium Unit - Detail", image: "/gallery-images/pooja-room/Omkar Glow Pooja Unit2.jpeg", category: "Premium" },
  ],
}

const categoryNames = {
  kitchens: "Kitchens",
  sofas: "Sofas",
  beds: "Beds",
  wardrobes: "Wardrobes",
  tvunits: "TV Units",
  partitions: "Partitions",
  poojaroom: "Pooja Room",
}

const categoryIcons = {
  kitchens: "🍽️",
  sofas: "🛋️",
  beds: "🛏️",
  wardrobes: "🚪",
  tvunits: "📺",
  partitions: "🎨",
  poojaroom: "🕉️",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function GalleryPage() {
  const [active, setActive] = useState("kitchens")
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 bg-linear-to-br from-black via-gray-900 to-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Updated Header - Simpler and Clearer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-linear-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/30">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                <span className="text-xs uppercase tracking-wider text-orange-400 font-light">Our Completed Projects</span>
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-700"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-white via-orange-100 to-orange-500 bg-clip-text text-transparent mb-4">
              Our <span className="text-orange-500">Work</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
              See our completed kitchen and furniture projects
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-orange-500"></div>
              <p className="text-zinc-500 text-sm max-w-2xl">
                500+ Projects Completed | 100% Client Satisfaction
              </p>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-orange-500"></div>
            </div>
          </motion.div>

          {/* Premium Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-16"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(galleryData).map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActive(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-full transition-all duration-500 overflow-hidden group
                    ${active === category
                      ? "text-black"
                      : "text-zinc-300 hover:text-white"
                    }`}
                >
                  {active === category && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-linear-to-r from-orange-500 to-amber-500 rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-2 font-medium ${active === category ? "text-black" : ""}`}>
                    <span className="text-xl">{categoryIcons[category]}</span>
                    {categoryNames[category]}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${active === category ? "bg-black/20" : "bg-white/10"}`}>
                      {galleryData[category].length}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Premium Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {galleryData[active].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-zinc-900/80 to-black/80 backdrop-blur-sm border border-zinc-800/50 hover:border-orange-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/20">
                    {/* Image Container */}
                    <div className="relative h-87.5 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority={index < 6}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/orange?text=Luxury+Design"
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Hover Info Panel */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black to-transparent"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs uppercase tracking-wider text-orange-400">{item.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <div className="flex items-center gap-3">
                          <button className="text-sm text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1">
                            View Details <span className="text-lg">→</span>
                          </button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content (visible on non-hover) */}
                    <div className="p-6 transform transition-transform duration-500 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-px bg-orange-500/50"></div>
                        <span className="text-xs uppercase tracking-wider text-orange-400">{item.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                          <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                          <span>{categoryNames[active]}</span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                            <span className="text-orange-400 text-sm">→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Premium Stats Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-12 border-t border-zinc-800/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-400">
                  {Object.values(galleryData).reduce((acc, arr) => acc + arr.length, 0)}+
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-400">{Object.keys(galleryData).length}</div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">Design Categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-400">10+</div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">Happy Customers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}