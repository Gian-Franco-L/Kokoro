export default function filter(num, totalArticles, setTotalArticles, setFilterStatus){
  switch(num){
    case 0: setTotalArticles(totalArticles.sort((a, b) => b.Date - a.Date))
            setFilterStatus(0)
          break;
    case 1: setTotalArticles(totalArticles.sort((a, b) => b.Price - a.Price))
            setFilterStatus(1)
          break;
    case 2: setTotalArticles(totalArticles.sort((a, b) => a.Price - b.Price))
            setFilterStatus(2)
          break;
    case 3: setTotalArticles(totalArticles.sort((a, b) => a.Date - b.Date))
            setFilterStatus(3)
          break;
    case 4: setTotalArticles(totalArticles.sort((a, b) => b.Date - a.Date))
            setFilterStatus(4)
          break;
  }
}