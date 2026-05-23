"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Calendar, Home, Shield, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "About", id: "#about" },
        { name: "Properties", id: "#properties" },
        { name: "Team", id: "#team" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Baolas Homes"
      button={{ text: "Get Valuation", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{ variant: "plain" }}
      title="Your Trusted Partner in Finding Home"
      description="At Baolas Homes, we turn real estate dreams into reality with expertise, transparency, and personal care."
      testimonials={[
        { name: "John Doe", handle: "@johnd", testimonial: "Excellent service and deep market knowledge.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/full-shot-young-woman-stairs_23-2149204468.jpg" },
        { name: "Jane Smith", handle: "@janes", testimonial: "Found our perfect home in days!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool-with-umbrella-chair-lounge-around-there-leisure-travel_74190-7877.jpg" },
        { name: "Mike Ross", handle: "@miker", testimonial: "Seamless process, highly recommended.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/beautiful-swimming-pool-resort_1339-7054.jpg" },
        { name: "Sara Lee", handle: "@saral", testimonial: "They truly care about your needs.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/vertical-picture-spiral-staircase-building-sunlight-huatulco-mexico_181624-26945.jpg" },
        { name: "Tom Cook", handle: "@tomc", testimonial: "The best agency in the city.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-beautiful-modern-woman_23-2148342425.jpg?_wi=1" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beach-chair-resort_1150-17976.jpg?_wi=1"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Experience Excellence in " },
        { type: "image", src: "http://img.b2bpic.net/free-photo/productive-working-meeting_1098-15085.jpg", alt: "About Baolas Homes" },
        { type: "text", content: " Real Estate" },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="blur-reveal"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { icon: Shield, title: "Secure Transactions", description: "Guaranteed security throughout the buying process." },
        { icon: Zap, title: "Fast Processing", description: "We accelerate your real estate journey." },
        { icon: Award, title: "Expert Guidance", description: "Decades of industry experience at your service." },
      ]}
      title="Why Baolas Homes?"
      description="We offer unmatched service to help you find or sell your property effortlessly."
    />
  </div>

  <div id="properties" data-section="properties">
      <ProductCardTwo
      animationType="blur-reveal"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "1", brand: "Luxury", name: "Sunset Villa", price: "$850,000", rating: 5, reviewCount: "12", imageSrc: "http://img.b2bpic.net/free-photo/modern-luxury-villa-with-swimming-pool-blue-sky_23-2151974381.jpg" },
        { id: "2", brand: "Modern", name: "City Loft", price: "$450,000", rating: 4, reviewCount: "8", imageSrc: "http://img.b2bpic.net/free-photo/3d-contemporary-bedroom-interior_1048-10250.jpg" },
        { id: "3", brand: "Family", name: "Garden Residence", price: "$620,000", rating: 5, reviewCount: "15", imageSrc: "http://img.b2bpic.net/free-photo/young-happy-smiling-caucasian-woman-traveller-fitting-dress-sunglasses-high-floor-bangkok-stylish-female-exploring-amazing-big-city-view_343596-1447.jpg" },
        { id: "4", brand: "Cozy", name: "Townhouse", price: "$380,000", rating: 4, reviewCount: "5", imageSrc: "http://img.b2bpic.net/free-photo/miami-luxury-house_649448-2903.jpg" },
        { id: "5", brand: "Classic", name: "Colonial House", price: "$590,000", rating: 5, reviewCount: "10", imageSrc: "http://img.b2bpic.net/free-photo/stone-modern-building-with-windows_23-2148252726.jpg" },
        { id: "6", brand: "Premium", name: "Bungalow", price: "$710,000", rating: 5, reviewCount: "22", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-red-brick-house-with-decorative-lights_53876-49372.jpg" },
      ]}
      title="Featured Properties"
      description="Explore our curated selection of luxury homes and investments."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="blur-reveal"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "500+", title: "Homes Sold", description: "Happy families settled.", icon: Home },
        { id: "m2", value: "15", title: "Years Experience", description: "In local real estate.", icon: Calendar },
        { id: "m3", value: "4.8", title: "Avg Rating", description: "Customer satisfaction score.", icon: Star },
      ]}
      title="Our Impact"
      description="Numbers that speak to our success and reliability."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="blur-reveal"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        { id: "t1", name: "Alex Riv", role: "Senior Broker", imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-real-estate-agent_23-2150164688.jpg" },
        { id: "t2", name: "Sarah Lee", role: "Buying Agent", imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-with-digital-tablet_1098-651.jpg" },
        { id: "t3", name: "David King", role: "Investment Specialist", imageSrc: "http://img.b2bpic.net/free-photo/inspiring-new-boss_1098-93.jpg" },
      ]}
      title="Meet Our Expert Agents"
      description="A dedicated team working hard for your home success."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="blur-reveal"
      showRating={true}
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Alice Brown", handle: "@alice", testimonial: "Incredible help buying our home.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-beautiful-modern-woman_23-2148342425.jpg?_wi=2" },
        { id: "2", name: "Bob Green", handle: "@bobg", testimonial: "Very professional and friendly.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-man-elegant-suit-glasses-correct-his-jacket-while-standing-against-skyscraper-background_613910-20123.jpg" },
        { id: "3", name: "Charlie Day", handle: "@charlied", testimonial: "Smooth closing process.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-positive-executive-work_1098-519.jpg" },
        { id: "4", name: "Dana White", handle: "@danaw", testimonial: "They listen to what you need.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-brunette-woman-with-combed-hair-clean-face-skin-looking-thoughtful-logo-promo-left-empty-space-isolated-studio-background_176420-46713.jpg" },
        { id: "5", name: "Evan Lord", handle: "@evanl", testimonial: "Experts at negotiating deals.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-woman_23-2147823623.jpg" },
      ]}
      title="Client Success Stories"
      description="Hear what our happy clients have to say."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      faqsAnimation="blur-reveal"
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How long is the process?", content: "Typically 30-45 days." },
        { id: "f2", title: "Do you handle valuation?", content: "Yes, free valuation included." },
        { id: "f3", title: "Can you help with investment?", content: "Yes, we specialize in high yield." },
      ]}
      title="Common Questions"
      description="Answers to help navigate your real estate search."
      imageSrc="http://img.b2bpic.net/free-photo/beach-chair-resort_1150-17976.jpg?_wi=2"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      title="Ready to Start?"
      description="Get in touch today for a free market valuation."
      imageSrc="http://img.b2bpic.net/free-photo/metallic-key-still-life_23-2151011265.jpg"
      mediaAnimation="blur-reveal"
      tag="Get in touch"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "About", href: "#about" }, { label: "Properties", href: "#properties" }] },
        { items: [{ label: "Team", href: "#team" }, { label: "Careers", href: "#" }] },
        { items: [{ label: "Terms", href: "#" }, { label: "Privacy", href: "#" }] },
      ]}
      logoText="Baolas Homes"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
