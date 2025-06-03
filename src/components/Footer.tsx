
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Registro.blockchain</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Revolucionando el sistema registral automotor argentino mediante la 
              tokenización de documentos con tecnología blockchain y NFTs.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">contacto@registro.blockchain</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Solución</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Tokenización NFT</li>
              <li>Contratos Inteligentes</li>
              <li>Oráculos DNRPA</li>
              <li>Marketplace Digital</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Sobre Nosotros</li>
              <li>Roadmap</li>
              <li>Inversores</li>
              <li>Partnerships</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Registro.blockchain. Todos los derechos reservados.
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
              <Linkedin className="h-5 w-5 text-slate-300" />
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
              <Twitter className="h-5 w-5 text-slate-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
