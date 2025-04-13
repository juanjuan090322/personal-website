import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-[70vh] text-center"
        >
          <div className="relative mb-8">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-purple-500 relative">
              <div className="absolute inset-0 bg-purple-500/20 backdrop-blur-sm"></div>
              <img 
                src="/images/avatar.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30"></div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {t('name')}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            {t('position')}
          </p>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            {t('home.intro', '我是一名专注于前端开发的工程师，擅长使用现代前端技术栈构建高性能、用户友好的Web应用。')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
              href="/projects"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {t('nav.projects')}
            </Link>
            <Link 
              href="/about"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              {t('nav.about')}
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-gray-400">
            <FaReact className="text-4xl hover:text-blue-400 transition-colors" />
            <FaVuejs className="text-4xl hover:text-green-500 transition-colors" />
            <SiTypescript className="text-4xl hover:text-blue-600 transition-colors" />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'zh', ['common'])),
    },
  };
};

export default Home; 
