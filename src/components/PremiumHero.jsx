import React from 'react';
import { Button, Card, CardBody, Chip } from "@heroui/react";
import Link from '@docusaurus/Link';
import { Rocket, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import RetroGrid from "./RetroGrid";

export default function PremiumHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      <RetroGrid />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Chip 
            variant="flat" 
            color="primary" 
            className="mb-6 px-4 py-1"
            startContent={<Sparkles size={14} />}
          >
            New: 50+ Modern Python Modules
          </Chip>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Master Python <br/>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              With Visual Excellence
            </span>
          </h1>
          
          <p className="text-xl text-default-500 max-width-[800px] mx-auto mb-10 leading-relaxed">
            The most comprehensive documentation-as-code tutorial. 
            From fundamental syntax to advanced system architecture, 
            learn with interactive examples and premium design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              as={Link}
              href="/docs/intro"
              color="primary" 
              size="lg" 
              className="font-bold px-8 h-14"
              endContent={<ChevronRight size={20} />}
            >
              Get Started Now
            </Button>
            <Button 
              as={Link}
              href="https://github.com/krishna99-tech/TutorialPython"
              variant="bordered" 
              size="lg"
              className="px-8 h-14 border-2"
              startContent={<Rocket size={20} />}
            >
              View Repository
            </Button>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-background/60 backdrop-blur-md border-none shadow-xl">
              <CardBody className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Learning</h3>
                <p className="text-default-500">Optimized curriculum for rapid skill acquisition and retention.</p>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <Card className="bg-background/60 backdrop-blur-md border-none shadow-xl">
              <CardBody className="p-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium UI</h3>
                <p className="text-default-500">Built with HeroUI and Framer Motion for a stunning experience.</p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <Card className="bg-background/60 backdrop-blur-md border-none shadow-xl">
              <CardBody className="p-8">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success mb-4">
                  <ChevronRight size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Production Ready</h3>
                <p className="text-default-500">Learn patterns used in real-world professional environments.</p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
