import { IUser } from '@common';
import { initialUserState } from '@store/slice';
import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV()


export function addUserToStorage(user: IUser): void {
    storage.set('userDetails', JSON.stringify(user));
    console.log("setData", JSON.stringify(user))
}

export function getUserFromStorage(): IUser | null {
    const stringData = storage.getString('userDetails');
    console.log("stringData", stringData)
    if (stringData) {
        return JSON.parse(stringData);
    }
    return null;
}

export function clearUserDataFromStorage(): void {
    storage.clearAll();
}