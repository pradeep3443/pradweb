document.addEventListener('DOMContentLoaded', () => {
  const articles = [];
  for (let i = 1; i <= 20; i++) {
    articles.push({
      title: `Article ${i}: Breaking News`,
      content: `This is the summary of article ${i}. Stay tuned for more updates on the latest news in India.`
    });
  }
  const articleList = document.getElementById('article-list') || document.getElementById('articles-list');
  if (articleList) {
    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');
      articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
      articleList.appendChild(articleElement);
    });
  }
});
