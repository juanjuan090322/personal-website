import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isLoading, setIsLoading] = useState(true);
  const currentYear = new Date().getFullYear();

  // 监听路由变化
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // 初始加载完成后关闭加载状态
    const timer = setTimeout(() => setIsLoading(false), 500);

    // 确保页面加载时滚动到顶部
    window.scrollTo(0, 0);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
      clearTimeout(timer);
    };
  }, [router]);

  const toggleLanguage = () => {
    const newLocale = router.locale === 'zh' ? 'en' : 'zh';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  // 根据当前语言直接设置页脚文本
  const footerText = router.locale === 'zh' 
    ? `© ${currentYear} ${t('name')} · ${t('position')} · ${t('footer.rights')}` 
    : `© ${currentYear} ${t('name')} · ${t('position')} · ${t('footer.rights')}`;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>

      {/* 顶部导航栏 */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 border-b border-purple-500/30 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {t('name')}
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/projects" 
                className={`text-gray-300 hover:text-white transition-colors ${
                  router.pathname === '/projects' ? 'text-white font-medium' : ''
                }`}
              >
                {t('nav.projects')}
              </Link>
              <Link 
                href="/about" 
                className={`text-gray-300 hover:text-white transition-colors ${
                  router.pathname === '/about' ? 'text-white font-medium' : ''
                }`}
              >
                {t('nav.about')}
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition-all duration-300 text-sm"
              >
                {router.locale === 'zh' ? 'EN' : '中文'}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 主要内容区 */}
      <div className="flex-1">
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full px-4 py-8"
        >
          {children}
        </motion.main>
      </div>

      {/* 页脚 */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-800 border-t border-purple-500/20 py-6"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">{footerText}</p>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <span className="text-gray-600">·</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;
