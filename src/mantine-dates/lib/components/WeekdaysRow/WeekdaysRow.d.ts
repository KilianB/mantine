import React from 'react';
import { DefaultProps, Selectors, MantineSize } from '@mantine/core';
import type { DayOfWeek } from '../../types';
import useStyles from './WeekdaysRow.styles';
export type WeekdaysRowStylesNames = Selectors<typeof useStyles>;
export interface WeekdaysRowProps extends DefaultProps<WeekdaysRowStylesNames>, React.ComponentPropsWithoutRef<'tr'> {
    variant?: string;
    __staticSelector?: string;
    /** Controls size */
    size?: MantineSize;
    /** dayjs locale, defaults to value defined in DatesProvider */
    locale?: string;
    /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
    firstDayOfWeek?: DayOfWeek;
    /** dayjs format to get weekday name, defaults to "dd" */
    weekdayFormat?: string;
    /** Choose cell type that will be used to render weekdays, defaults to th */
    cellComponent?: 'td' | 'th';
}
export declare const WeekdaysRow: React.ForwardRefExoticComponent<WeekdaysRowProps & React.RefAttributes<HTMLTableRowElement>>;
//# sourceMappingURL=WeekdaysRow.d.ts.map