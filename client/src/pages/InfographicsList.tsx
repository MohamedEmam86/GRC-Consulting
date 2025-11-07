import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Define the structure for an infographic item
interface Infographic {
  title: string;
  color: string;
}

// Data for the 5 infographics (same as in InfographicPage.tsx)
const infographicsData: Infographic[] = [
  {
    title: 'KYC Customer Onboarding',
    color: 'purple',
  },
  {
    title: 'AML Risk Assessment',
    color: 'cyan',
  },
  {
    title: 'Three Lines of Defense',
    color: 'emerald',
  },
  {
    title: 'Transaction Monitoring',
    color: 'pink',
  },
  {
    title: 'FATF Recommendations',
    color: 'orange',
  }
];

// Function to slugify the title for use in the URL (same as in InfographicPage.tsx)
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function InfographicsList() {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Compliance Infographics
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center mb-16">
          Explore our detailed visual guides on key GRC topics. Click on any title to view the full infographic.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {infographicsData.map((infographic, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link
                href={`/infographics/${slugify(infographic.title)}`}
                className="block h-full"
              >
                <div className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600/50 hover:border-${infographic.color}-400/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-${infographic.color}-500/10 cursor-pointer flex flex-col justify-between`}>
                  <h2 className={`text-2xl font-bold mb-4 text-${infographic.color}-400`}>
                    {infographic.title}
                  </h2>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-400">View Infographic</span>
                    <ArrowRight size={24} className={`text-${infographic.color}-400 group-hover:translate-x-1 transition-transform`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
