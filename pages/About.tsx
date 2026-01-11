import React from 'react';
import { TUTOR_NAME, LOCATION } from '../constants';
import WaveSeparator from '../components/WaveSeparator';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-light pt-20 pb-36 md:pb-48 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">About MindRise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Building strong fundamentals and academic confidence since 2021.</p>
        </div>
        <WaveSeparator position="bottom" color="fill-white" />
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Side */}
            <div className="lg:w-1/2 relative">
               <div className="absolute top-4 -left-4 w-full h-full border-2 border-brand-accent rounded-3xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                 alt={TUTOR_NAME} 
                 className="w-full h-[500px] object-cover rounded-3xl shadow-xl relative z-10"
               />
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg z-20 max-w-xs">
                 <p className="font-display font-bold text-2xl text-brand-purple">3+ Years</p>
                 <p className="text-gray-600">of Teaching Excellence</p>
               </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Meet Your Tutor</h2>
              <h3 className="text-2xl text-brand-blue font-semibold mb-6">{TUTOR_NAME}</h3>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Hello! I am {TUTOR_NAME}, an educator passionate about simplifying complex concepts. 
                  Based in {LOCATION}, I specialize in Mathematics and Commerce subjects.
                </p>
                <p>
                  With a score of <strong>90% in my 12th Board exams</strong>, I understand exactly what it takes to 
                  excel in academics—not just hard work, but smart work. My teaching philosophy goes beyond 
                  textbooks; I believe in practical learning that stays with students for life.
                </p>
                <p>
                  At MindRise, we don't just chase marks. We chase mastery. When a student understands the 'Why' 
                  and 'How' behind a concept, the marks follow automatically.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Mathematics Specialist', 'Concept-Oriented', 'Doubt Clearing', 'Result Focused'].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="text-brand-accent w-5 h-5" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pt-36 pb-20 md:pt-48 bg-gray-50 relative">
        <WaveSeparator position="top" color="fill-white" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-2xl font-light text-gray-600 italic leading-relaxed">
            "To make learning simple, practical, and result-oriented. We aim to help students grow with clarity, confidence, and consistency."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;