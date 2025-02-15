import { ClassNames, MantineNumberSize, MantineShadow, Styles } from '@mantine/styles';
import { TransitionOverride } from '../Transition';
import type { ModalBaseStylesNames } from './ModalBase';
interface ModalBaseContext {
    __staticSelector: string;
    opened: boolean;
    onClose(): void;
    closeOnClickOutside: boolean;
    transitionProps: TransitionOverride;
    zIndex: number;
    padding: MantineNumberSize;
    id: string;
    getTitleId(): string;
    getBodyId(): string;
    titleMounted: boolean;
    bodyMounted: boolean;
    setTitleMounted(mounted: boolean): void;
    setBodyMounted(mounted: boolean): void;
    trapFocus: boolean;
    closeOnEscape: boolean;
    shadow: MantineShadow;
    stylesApi: {
        name: string;
        size: MantineNumberSize;
        variant: string;
        classNames: ClassNames<ModalBaseStylesNames>;
        styles: Styles<ModalBaseStylesNames>;
        unstyled: boolean;
    };
}
export declare const ModalBaseProvider: ({ children, value }: {
    value: ModalBaseContext;
    children: import("react").ReactNode;
}) => JSX.Element, useModalBaseContext: () => ModalBaseContext;
export {};
//# sourceMappingURL=ModalBase.context.d.ts.map