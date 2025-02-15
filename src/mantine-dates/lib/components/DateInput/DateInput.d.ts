import React from 'react';
import { DefaultProps, InputSharedProps, InputWrapperBaseProps, InputStylesNames, InputWrapperStylesNames, PopoverProps } from '@mantine/core';
import { CalendarBaseProps, CalendarStylesNames } from '../Calendar';
import { DecadeLevelSettings } from '../DecadeLevel';
import { YearLevelSettings } from '../YearLevel';
import { MonthLevelSettings } from '../MonthLevel';
import { DateValue } from '../../types';
export type DateInputStylesNames = CalendarStylesNames | InputStylesNames | InputWrapperStylesNames;
export interface DateInputProps extends DefaultProps<DateInputStylesNames>, InputSharedProps, InputWrapperBaseProps, CalendarBaseProps, DecadeLevelSettings, YearLevelSettings, MonthLevelSettings, Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
    /** Parses user input to convert it to Date object */
    dateParser?: (value: string) => Date | null;
    /** Value for controlled component */
    value?: DateValue;
    /** Default value for uncontrolled component */
    defaultValue?: DateValue;
    /** Called when value changes */
    onChange?(value: DateValue): void;
    /** Props added to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, 'children'>>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props added to clear button */
    clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
    /** Determines whether input value should be reverted to last known valid value on blur, true by default */
    fixOnBlur?: boolean;
    /** Determines whether value can be deselected when the user clicks on the selected date in the calendar or erases content of the input, true if clearable prop is set, false by default */
    allowDeselect?: boolean;
    /** Determines whether time (hours, minutes, seconds and milliseconds) should be preserved when new date is picked, true by default */
    preserveTime?: boolean;
}
export declare const DateInput: React.ForwardRefExoticComponent<DateInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=DateInput.d.ts.map