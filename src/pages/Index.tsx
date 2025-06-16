
import React from 'react';
import Hero from '../components/Hero';
import ProcessComparison from '../components/ProcessComparison';
import Benefits from '../components/Benefits';
import TechArchitecture from '../components/TechArchitecture';
import VehicleDemo from '../components/VehicleDemo';
import RegulatoryFramework from '../components/RegulatoryFramework';
import Statistics from '../components/Statistics';
import Mission from '../components/Mission';
import Roadmap from '../components/Roadmap';
import Implementation from '../components/Implementation';
import BusinessModel from '../components/BusinessModel';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Hero />
      <ProcessComparison />
      <VehicleDemo />
      <RegulatoryFramework />
      <Benefits />
      <Statistics />
      <TechArchitecture />
      <Mission />
      <Roadmap />
      <Implementation />
      <BusinessModel />
      <Footer />
    </div>
  );
};

export default Index;
