response = '{"deals":[{"title": "Краски на любой вкус"}]}';

if (response) {
  try {
    var dealData = JSON.parse(response);
    showContent(dealData);
  } catch(e) {
    var errorMessage = e.name + '' + e.message;
    console.log(errorMessage);
    feed.innerHTML = '<em>Извините, не удалось загрузить придложения</em>';
  } finally {
    var link = document.createElement('a');
    link.innerHTML = '<a href="try-catch-finally.html">reload</a>';
    feed.appendChild(link);
  }
}