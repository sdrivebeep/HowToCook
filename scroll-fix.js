// 当文档的DOM内容完全加载和解析后执行函数
document.addEventListener('DOMContentLoaded', function() {
  /**
   * 滚动页面到顶部的函数
   * 使用 window.scrollTo(0, 0) 将页面的滚动位置设置为左上角
   */
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  // 监听 'hashchange' 事件
  // 当 URL 的哈希部分（# 后面的部分）发生变化时，此事件会触发
  // Docsify 这样的单页应用（SPA）在内部导航时会改变哈希，而不是重新加载整个页面
  window.addEventListener('hashchange', scrollToTop);

  // 页面首次加载时的处理
  // 检查当前 URL 是否包含哈希值
  if (window.location.hash) {
    // 如果有哈希值（例如直接访问 `your-domain.com/#/some/path`），
    // 延迟一小段时间再滚动到顶部，确保页面内容有足够时间渲染
    setTimeout(scrollToTop, 100); // 100毫秒延迟
  } else {
    // 如果没有哈希值（例如直接访问 `your-domain.com/`），
    // 立即滚动到顶部，因为此时页面通常是初始加载状态
    scrollToTop();
  }
});
