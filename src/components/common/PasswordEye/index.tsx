/**
 * @format
 */
import {Touchable} from '@globals';
import {useTheme} from '@theme';
import React from 'react';
import {HidePasswordIcon, ShowPasswordIcon} from '../Icon/icons';

interface IProps {
  visible: boolean;
  togglePassword: () => void;
}

function PasswordEye(props: IProps) {
  const {visible, togglePassword} = props;
  const {t} = useTheme();

  return (
    <Touchable onPress={togglePassword}>
      {visible ? (
        <HidePasswordIcon color={t.colors.primary} />
      ) : (
        <ShowPasswordIcon color={t.colors.primary} />
      )}
    </Touchable>
  );
}

export {PasswordEye};
