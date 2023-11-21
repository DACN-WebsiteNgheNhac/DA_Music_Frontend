export const replaceAll = (str: string, pattern: string = ' ', replacement: string = '-') => {
   return str.replace(new RegExp(pattern, 'g'), replacement);
};
