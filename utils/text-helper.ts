export const shortenTitle = (title: string, maxLength: number = 16): string =>
  title.length > maxLength ? title.substring(0, maxLength) + ' ...' : title;

export const replaceBrTagWithNewline = (input: string): string => input.replace(/<br\s*\/?>/gi, '\n');
