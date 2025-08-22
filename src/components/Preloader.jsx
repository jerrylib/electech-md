import  { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 监听页面加载完成事件
    const handleLoad = () => {
      // 添加一个小延迟，确保用户能看到加载动画
      setTimeout(() => {
        setIsLoading(false);
        // 开始淡出动画
        setTimeout(() => {
          setIsVisible(false);
        }, 300); // 给淡出动画时间
      }, 800); // 显示加载动画的时间
    };

    // 如果页面已经加载完成
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // 监听load事件
      window.addEventListener('load', handleLoad);
    }

    // 清理事件监听器
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // 如果不可见，不渲染preloader
  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`preloader transition-opacity duration-300 ease-out ${
        isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="preloader-body">
        <div className="cssload-container">
          <div className="cssload-speeding-wheel"></div>
        </div>
        <p className='mt-4'>Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;