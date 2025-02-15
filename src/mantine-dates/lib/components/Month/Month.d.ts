import React from 'react';
import { DefaultProps, Selectors, MantineSize } from '@mantine/core';
import { WeekdaysRowStylesNames } from '../WeekdaysRow';
import { DayStylesNames, DayProps } from '../Day';
import { ControlKeydownPayload, DayOfWeek } from '../../types';
import useStyles from './Month.styles';
export type MonthStylesNames = Selectors<typeof useStyles> | WeekdaysRowStylesNames | DayStylesNames;
export interface MonthSettings {
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Called when day is clicked with click event and date */
    __onDayClick?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when mouse enters day */
    __onDayMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when any keydown event is registered on day, used for arrows navigation */
    __onDayKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>, payload: ControlKeydownPayload): void;
    /** Assigns ref of every day based on its position in the table, used for arrows navigation */
    __getDayRef?(rowIndex: number, cellIndex: number, node: HTMLButtonElement): void;
    /** dayjs locale, defaults to value defined in DatesProvider */
    locale?: string;
    /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
    firstDayOfWeek?: DayOfWeek;
    /** dayjs format for weekdays names, defaults to "dd" */
    weekdayFormat?: string;
    /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider */
    weekendDays?: DayOfWeek[];
    /** Adds props to Day component based on date */
    getDayProps?(date: Date): Partial<DayProps>;
    /** Callback function to determine whether the day should be disabled */
    excludeDate?(date: Date): boolean;
    /** Minimum possible date */
    minDate?: Date;
    /** Maximum possible date */
    maxDate?: Date;
    /** Controls day value rendering */
    renderDay?(date: Date): React.ReactNode;
    /** Determines whether outside dates should be hidden, defaults to false */
    hideOutsideDates?: boolean;
    /** Determines whether weekdays row should be hidden, defaults to false */
    hideWeekdays?: boolean;
    /** Assigns aria-label to days based on date */
    getDayAriaLabel?(date: Date): string;
    /** Controls size */
    size?: MantineSize;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}
export interface MonthProps extends DefaultProps<MonthStylesNames>, MonthSettings, React.ComponentPropsWithoutRef<'table'> {
    variant?: string;
    __staticSelector?: string;
    /** Month to display */
    month: Date;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
export declare const Month: React.ForwardRefExoticComponent<MonthProps & React.RefAttributes<HTMLTableElement>>;
//# sourceMappingURL=Month.d.ts.map