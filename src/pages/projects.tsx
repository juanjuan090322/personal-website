import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Projects = () => {
  const { t } = useTranslation('common');

  const projects = [
    {
      id: 1,
      title: t('projects.1.title'),
      description: t('projects.1.description'),
      tech: ['Vue 3', 'Vben Admin', 'Uniapp', 'Element Plus'],
      link: '/projects/1'
    },
    {
      id: 2,
      title: t('projects.2.title'),
      description: t('projects.2.description'),
      tech: ['Vue 3', 'Ant Design Vue', 'AntV G6', 'WebSocket'],
      link: '/projects/2'
    },
    {
      id: 3,
      title: t('projects.3.title'),
      description: t('projects.3.description'),
      tech: ['React', 'TypeScript', 'ECharts', 'HTML2Canvas'],
      link: '/projects/3'
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-4">{t('nav.projects')}</h1>
          <p className="text-gray-300 text-lg">
            {t('projects.intro', '以下是我参与的一些主要项目，展示了我在前端开发方面的技能和经验。')}
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-3">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={project.link}
                  className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {t('projects.viewDetails', '查看详情')}
                </Link>
              </div>
            </motion.div>
          ))}
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

export default Projects; 