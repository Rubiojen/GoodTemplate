type LogType = 'warn' | 'success' | 'error' | 'temporary';

enum LogColors {
  Red = '\u001b[1;31m',
  Green = '\u001b[1;32m',
  Yellow = '\u001b[1;33m',
  Blue = '\u001b[1;34m',
  Purple = '\u001b[1;35m',
  Cyan = '\u001b[1;36m',
}

type LogTyepColors = {
  [key in LogType]: LogColors;
};

const logTypeColors: LogTyepColors = {
  warn: LogColors.Yellow,
  success: LogColors.Green,
  temporary: LogColors.Blue,
  error: LogColors.Red,
};

export const log = (
  message: string = '',
  value?: string | boolean | number,
  type: LogType = 'temporary',
) => {
  if (!__DEV__) {
    return;
  }
  const color = logTypeColors[type];
  console.log(
    `${color || ''} ${message} ${String(value) || ''} ${
      type === 'temporary' ? '### Temporary Log' : ''
    }`,
  );
};
