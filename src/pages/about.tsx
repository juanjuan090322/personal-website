import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import ContentSection from '../components/ContentSection';
import { motion } from 'framer-motion';
import { FaReact, FaVuejs, FaNodeJs, FaGitAlt, FaWeixin, FaAlipay } from 'react-icons/fa';
import { SiTypescript, SiWebpack, SiTailwindcss, SiMysql } from 'react-icons/si';
import { BiPhone, BiEnvelope } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const { t } = useTranslation('common');

  // 确保页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = {
    frontend: [
      { icon: <SiTypescript className="text-4xl text-blue-600" />, name: 'TypeScript' },
      { icon: <SiTailwindcss className="text-4xl text-teal-400" />, name: 'Tailwind CSS' },
    ],
    frameworks: [
      { icon: <FaReact className="text-4xl text-blue-400" />, name: 'React' },
      { icon: <FaVuejs className="text-4xl text-green-500" />, name: 'Vue' },
    ],
    tools: [
      { icon: <FaNodeJs className="text-4xl text-green-500" />, name: 'Node.js' },
      { icon: <FaGitAlt className="text-4xl text-red-500" />, name: 'Git' },
      { icon: <SiWebpack className="text-4xl text-blue-300" />, name: 'Webpack' },
      { icon: <SiMysql className="text-4xl text-blue-500" />, name: 'MySQL' },
    ],
  };

  const aboutContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">{t('about.description')}</p>
      <p className="text-lg leading-relaxed">{t('about.experience')}</p>
    </div>
  );

  const skillsContent = (
    <div className="space-y-8">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-white">{t(`skills.${category}.title`)}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-6 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all duration-300 transform-gpu"
              >
                {skill.icon}
                <span className="mt-3 text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const contactContent = (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <BiPhone className="text-2xl text-blue-400" />
        <span className="text-lg">{t('contact.phone')}</span>
      </div>
      <div className="flex items-center space-x-4">
        <BiEnvelope className="text-2xl text-blue-400" />
        <span className="text-lg">{t('contact.email')}</span>
      </div>
    </div>
  );

  const donateContent = (
    <div className="space-y-6">
      <p className="text-lg text-gray-300">{t('donate.description')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-48 h-48 bg-white rounded-lg overflow-hidden">
            <Image
              src="/images/wechat-qr.jpg"
              alt={t('donate.wechat')}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center space-x-2 text-green-500">
            <FaWeixin className="text-xl" />
            <span>{t('donate.wechat')}</span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-48 h-48 bg-white rounded-lg overflow-hidden">
            <Image
              src="/images/alipay-qr.jpg"
              alt={t('donate.alipay')}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center space-x-2 text-blue-500">
            <FaAlipay className="text-xl" />
            <span>{t('donate.alipay')}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* 左侧个人信息 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3 md:sticky md:top-24 md:self-start"
        >
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/images/avatar.jpg"
                alt={t('name')}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-white mb-2">{t('name')}</h2>
            <p className="text-center text-purple-400 mb-6">{t('position')}</p>
            
            <div className="space-y-4">
              <Link href="#profile" className="block text-gray-300 hover:text-white transition-colors">
                {t('about.title')}
              </Link>
              <Link href="#skills" className="block text-gray-300 hover:text-white transition-colors">
                {t('skills.title')}
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                {t('contact.title')}
              </Link>
              <Link href="#donate" className="block text-gray-300 hover:text-white transition-colors">
                {t('donate.title')}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 右侧内容 */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-4">{t('nav.about')}</h1>
          </motion.div>
          
          <div className="space-y-12">
            <div id="profile">
              <ContentSection title={t('about.title')} content={aboutContent} delay={1.3} />
            </div>
            <div id="skills">
              <ContentSection title={t('skills.title')} content={skillsContent} delay={1.4} />
            </div>
            <div id="contact">
              <ContentSection title={t('contact.title')} content={contactContent} delay={1.6} />
            </div>
            <div id="donate">
              <ContentSection title={t('donate.title')} content={donateContent} delay={1.8} />
            </div>
          </div>
        </div>
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

export default About; 