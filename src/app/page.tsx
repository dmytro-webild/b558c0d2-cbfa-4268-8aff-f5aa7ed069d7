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
        { name: "Satisfied Client", handle: "@client1", testimonial: "Professional and highly knowledgeable team.", rating: 5 },
        { name: "Happy Homeowner", handle: "@client2", testimonial: "The best real estate agency I've worked with.", rating: 5 },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Experience Excellence in " },
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
      title="Featured Properties"
      description="Explore our curated selection of homes and investments. New listings added daily."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="blur-reveal"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "75", title: "Total Reviews", description: "Our community voice.", icon: Home },
        { id: "m2", value: "4.8", title: "Rating", description: "Average customer satisfaction.", icon: Star },
        { id: "m3", value: "Expert", title: "Consulting", description: "Professional real estate advice.", icon: Award },
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
        { id: "t1", name: "Alex Riv", role: "Senior Broker" },
        { id: "t2", name: "Sarah Lee", role: "Buying Agent" },
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
        { id: "1", name: "Happy Client", handle: "@client", testimonial: "Top tier experience with Baolas Homes.", rating: 5 },
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
        { id: "f1", title: "How can I get started?", content: "Contact us through our website or give us a call." },
        { id: "f2", title: "Do you provide property valuation?", content: "Yes, reach out for a consultation." },
      ]}
      title="Common Questions"
      description="Answers to help navigate your real estate search."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      title="Ready to Start?"
      description="Get in touch today for a professional consultation."
      mediaAnimation="blur-reveal"
      tag="Get in touch"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "About", href: "#about" }, { label: "Properties", href: "#properties" }] },
        { items: [{ label: "Team", href: "#team" }, { label: "Careers", href: "#" }] },
      ]}
      logoText="Baolas Homes"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}