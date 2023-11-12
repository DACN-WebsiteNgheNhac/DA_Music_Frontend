export const secondToPercent = (currentTime: number, duration: number): number =>
   Number.isNaN((currentTime / duration) * 100) ? 0 : (currentTime / duration) * 100;

export const percentToSecond = (values: number, duration: number) => (values * duration) / 100;
