import { Link, useRoute } from 'wouter';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Define the structure for an infographic item
interface Infographic {
  title: string;
  src: string;
  color: string;
}

// Data for the 5 infographics
const infographicsData: Infographic[] = [
  {
    title: 'KYC Customer Onboarding',
    color: 'purple',
    src: '/infographics/KYCCustomerOnboardingProcess.html'
  },
  {
    title: 'AML Risk Assessment',
    color: 'cyan',
    src: '/infographics/AMLRiskAssessmentProcess.html'
  },
  {
    title: 'Three Lines of Defense',
    color: 'emerald',
    src: '/infographics/ThreeLinesofDefenseModel.html'
  },
  {
    title: 'Transaction Monitoring',
    color: 'pink',
    src: '/infographics/TransactionMonitoringWorkflow.html'
  },
  {
    title: 'FATF Recommendations',
    color: 'orange',
    src: '/infographics/FatfRecommendation.html'
  }
];

// Function to slugify the title for use in the URL
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Map slugs to infographic data for easy lookup
const infographicMap = infographicsData.reduce((acc, item) => {
  acc[slugify(item.title)] = item;
  return acc;
}, {} as Record<string, Infographic>);

export default function InfographicPage() {
  // Use wouter's useRoute to extract the slug from the URL
  const [match, params] = useRoute('/infographics/:slug');
  const slug = params?.slug;
  const infographic = slug ? infographicMap[slug] : null;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the iframe content
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!infographic) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Infographic Not Found</h1>
        <p className="text-lg text-gray-400 mb-8">The requested infographic could not be found.</p>
        <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2">
          <HomeIcon size={20} /> Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-8 p-4 bg-slate-800 rounded-xl shadow-lg">
          <Link href="/infographics" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 font-semibold">
            <ArrowLeft size={20} /> Back to Infographics List
          </Link>
          <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 font-semibold">
            <HomeIcon size={20} /> Home
          </Link>
        </div>

        <h1 className={`text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-${infographic.color}-400 to-cyan-400 bg-clip-text text-transparent`}>
          {infographic.title}
        </h1>

        {/* Infographic Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gradient-to-br from-slate-800 to-slate-700 p-4 sm:p-8 rounded-2xl border border-slate-600/50 shadow-2xl"
        >
          {loading ? (
            <div className="w-full h-[80vh] flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
              <p className="ml-4 text-lg text-gray-400">Loading Infographic...</p>
            </div>
          ) : (
            <iframe
              src={infographic.src}
              className="w-full h-[80vh] rounded-lg border border-slate-600 bg-white"
              title={infographic.title}
              loading="lazy"
            ></iframe>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
