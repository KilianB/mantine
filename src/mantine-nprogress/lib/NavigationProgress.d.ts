import { MantineColor, PortalProps } from '@mantine/core';
import React from 'react';
export interface NavigationProgressProps {
    /** The default progress */
    initialProgress?: number;
    /** Key of theme.colors of any other valid CSS color */
    color?: MantineColor;
    /** Height of the progressbar */
    size?: number;
    /** Called when the progressbar reaches 100% */
    onFinish?(): void;
    /** Determines whether progress should be automatically reset when 100% is reached */
    autoReset?: boolean;
    /** Step interval in ms */
    stepInterval?: number;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Number of ms that should elapse before progressbar is hidden after reaching 100% */
    exitTimeout?: number;
    /** Exit transition duration in ms */
    exitTransitionDuration?: number;
    /** Determines whether progressbar should be rendered within Portal, defaults to true */
    withinPortal?: boolean;
    /** Props to pass down to the portal when withinPortal is true */
    portalProps?: PortalProps;
    /** Progressbar z-index */
    zIndex?: React.CSSProperties['zIndex'];
    /** aria-label for `Progress`*/
    progressLabel?: string;
}
export declare function NavigationProgress({ initialProgress, color, size, stepInterval, transitionDuration, exitTimeout, exitTransitionDuration, onFinish, autoReset, withinPortal, portalProps, zIndex, progressLabel, }: NavigationProgressProps): JSX.Element;
//# sourceMappingURL=NavigationProgress.d.ts.map