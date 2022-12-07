/**
 * @format
 */
import {useState, useCallback} from 'react';

export const useToggle = (initial: boolean): [open: boolean, toggle: () => void] => {
  const [open, setOpen] = useState(initial);
  const toggle = useCallback(() => {
    setOpen(status => !status);
  }, []);
  return [open, toggle];
};
