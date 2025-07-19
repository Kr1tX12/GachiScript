function replaceKeywords(code, dict) {
  return code.replace(/(["'`])(?:(?=(\\?))\2.)*?\1|\/\*[\s\S]*?\*\/|\/\/.*|[^\s]+/g, (match) => {
    if (
      /^["'`]/.test(match) ||
      /^\/\//.test(match) ||  
      /^\/\*/.test(match)  
    ) {
      return match;
    }
    const key = match.trim();

    if (dict[key]) {
      return dict[key];
    }

    return match;
  });
}

module.exports = replaceKeywords;
