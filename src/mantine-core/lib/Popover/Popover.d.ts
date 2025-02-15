import React from 'react';
import { ClassNames, Styles, MantineNumberSize, MantineShadow } from '@mantine/styles';
import { TransitionOverride } from '../Transition';
import { FloatingPosition, ArrowPosition } from '../Floating';
import { PortalProps } from '../Portal';
import { PopoverWidth, PopoverMiddlewares, PopoverStylesNames, PopoverStylesParams } from './Popover.types';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown';
export interface PopoverBaseProps {
    /** Dropdown position relative to target */
    position?: FloatingPosition;
    /** Space between target element and dropdown */
    offset?: number;
    /** Called when dropdown position changes */
    onPositionChange?(position: FloatingPosition): void;
    /** useEffect dependencies to force update dropdown position */
    positionDependencies?: any[];
    /** Called when dropdown closes */
    onClose?(): void;
    /** Called when dropdown opens */
    onOpen?(): void;
    /** If set dropdown will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
    keepMounted?: boolean;
    /** Props added to Transition component that used to animate dropdown presence, use to configure duration and animation type, { duration: 150, transition: 'fade' } by default */
    transitionProps?: TransitionOverride;
    /** Dropdown width, or 'target' to make dropdown width the same as target element */
    width?: PopoverWidth;
    /** Floating ui middlewares to configure position handling */
    middlewares?: PopoverMiddlewares;
    /** Determines whether component should have an arrow */
    withArrow?: boolean;
    /** Arrow size */
    arrowSize?: number;
    /** Arrow offset */
    arrowOffset?: number;
    /** Arrow border-radius */
    arrowRadius?: number;
    /** Arrow position **/
    arrowPosition?: ArrowPosition;
    /** Determines whether dropdown should be rendered within Portal, defaults to false */
    withinPortal?: boolean;
    /** Props to pass down to the portal when withinPortal is true */
    portalProps?: PortalProps;
    /** Dropdown z-index */
    zIndex?: React.CSSProperties['zIndex'];
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Key of theme.shadow or any other valid css box-shadow value */
    shadow?: MantineShadow;
    /** If set, popover dropdown will not render */
    disabled?: boolean;
    /** Determines whether focus should be automatically returned to control when dropdown closes, false by default */
    returnFocus?: boolean;
}
export interface PopoverProps extends PopoverBaseProps {
    /** Popover.Target and Popover.Dropdown components */
    children: React.ReactNode;
    /** Initial opened state for uncontrolled component */
    defaultOpened?: boolean;
    /** Controls dropdown opened state */
    opened?: boolean;
    /** Called with current state when dropdown opens or closes */
    onChange?(opened: boolean): void;
    /** Determines whether dropdown should be closed on outside clicks, default to true */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Determines whether focus should be trapped within dropdown, default to false */
    trapFocus?: boolean;
    /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
    closeOnEscape?: boolean;
    /** id base to create accessibility connections */
    id?: string;
    /** Determines whether dropdown and target element should have accessible roles, defaults to true */
    withRoles?: boolean;
    variant?: string;
    unstyled?: boolean;
    classNames?: ClassNames<PopoverStylesNames>;
    styles?: Styles<PopoverStylesNames, PopoverStylesParams>;
    __staticSelector?: string;
}
export declare function Popover(props: PopoverProps): JSX.Element;
export declare namespace Popover {
    var Target: React.ForwardRefExoticComponent<import("./PopoverTarget/PopoverTarget").PopoverTargetProps & React.RefAttributes<HTMLElement>>;
    var Dropdown: typeof PopoverDropdown;
    var displayName: string;
}
//# sourceMappingURL=Popover.d.ts.map