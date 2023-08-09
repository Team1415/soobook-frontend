import dayjs from 'dayjs';

export namespace DateUtil {
  export const toString = (date: Date | string, format?: string): string => {
    if (format) {
      return dayjs(date).format(format).toString();
    }

    return dayjs(date).toString();
  };
}
