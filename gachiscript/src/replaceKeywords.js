function replaceKeywords(code, dict) {
  return code.replace(/(["'`])(?:(?=(\\?))\2.)*?\1|\/\*[\s\S]*?\*\/|\/\/.*|[^\s]+/g, (match) => {
    // Если это строка или комментарий — не трогаем
    if (
      /^["'`]/.test(match) || // строка
      /^\/\//.test(match) ||  // однострочный коммент
      /^\/\*/.test(match)     // многострочный коммент
    ) {
      return match;
    }

    // Чистим от лишних символов
    const key = match.trim();

    // Если в словаре есть замена — заменяем
    if (dict[key]) {
      return dict[key];
    }

    // Иначе возвращаем, как есть
    return match;
  });
}

module.exports = replaceKeywords;
