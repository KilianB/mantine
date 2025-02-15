import { ModalState } from './context';
interface ModalsState {
    modals: ModalState[];
    /**
     * Modal that is currently open or was the last open one.
     * Keeping the last one is necessary for providing a clean exit transition.
     */
    current: ModalState | null;
}
interface OpenAction {
    type: 'OPEN';
    modal: ModalState;
}
interface CloseAction {
    type: 'CLOSE';
    modalId: string;
    canceled?: boolean;
}
interface CloseAllAction {
    type: 'CLOSE_ALL';
    canceled?: boolean;
}
export declare function modalsReducer(state: ModalsState, action: OpenAction | CloseAction | CloseAllAction): ModalsState;
export {};
//# sourceMappingURL=reducer.d.ts.map