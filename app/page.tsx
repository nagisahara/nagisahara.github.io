'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import TabMenu, { Season } from '../components/TabMenu';
import SeasonContent from '../components/SeasonContent';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const EmailGenerator = dynamic(() => import('../components/EmailGenerator'), {
  ssr: false,
  loading: () => <p className="text-black/80">Loading email...</p>
});

export default function Home() {
  const [currentSeason, setCurrentSeason] = useState<Season>('spring');

  const handleSeasonChange = (season: Season) => {
    setCurrentSeason(season);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex justify-start">
          <Image
            src="/images/test.jpg"
            alt="Nagisa Hara's Profile Picture"
            width={150}
            height={150}
            className="rounded-full object-cover border-2 border-black/20"
          />
        </div>

        <div className="mb-12 text-left">
          <h2 className="text-3xl font-mincho text-black mb-4">About</h2>
          <p className="text-black/80">
            I am a PhD student at the University of Ottawa, Canada. I am supervised by Dr. Anne Broadbent.
            My research subject is quantum cryptography.<br />
            I obtained my MSc in Mathematics from RIMS, Kyoto University, Japan. I studied Operator Algebras once upon a time.
          </p>
        </div>

        <div className="mb-12 text-left">
          <h2 className="text-3xl font-mincho text-black mb-4">Papers</h2>
          <ul className="text-black/80 list-disc list-inside text-left mx-auto max-w-2xl">
            <li>
              <span className="italic text-mizuiro">A classical proof of quantum knowledge for multi-prover interactive proof systems</span> <br />
              with Anne Broadbent, Alex B. Grilo, and Arthur Mehta.<br />
              preprint: <a href="https://arxiv.org/abs/2503.13699" target="_blank" rel="noopener noreferrer">arXiv:2503.13699</a>, (2025).
            </li>
            {/* ここにさらに論文を追加できます */}
            <li>
              <span className="italic text-mizuiro">Tripartite Bell inequality for homogeneous polynomials in operator space theory</span><br />
              Nagisa Hara <br />
              Master Thesis (2023).
            </li>
          </ul>
        </div>

        <div className="mb-12 text-left">
          <h2 className="text-3xl font-mincho text-black mb-4">Teaching</h2>
          <ul className="text-black/80 list-disc list-inside text-left mx-auto max-w-2xl">
            <li>TA: Linear Algebra (2024/2025)</li>
            <li>TA: Calculus II (2024)</li>
          </ul>
        </div>

        <div className="mb-12 text-left">
          <h2 className="text-3xl font-mincho text-black mb-4">Contact</h2>
          <EmailGenerator />
        </div>

        {/* <TabMenu 
          currentSeason={currentSeason} 
          onSeasonChange={handleSeasonChange} 
        /> */}

        {/* <AnimatePresence mode="wait">
          <SeasonContent season={currentSeason} />
        </AnimatePresence> */}
    </div>
    </Layout>
  );
}
