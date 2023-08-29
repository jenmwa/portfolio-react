

export interface IAction {
    type: string;
    payload: boolean;
}

export const DarkModereducer = (darkMode: boolean, action: IAction) => {
    switch(action.type) {
        case 'DARKMODE': {
            return  !darkMode;
        }
        default:
            return darkMode;
    }
}