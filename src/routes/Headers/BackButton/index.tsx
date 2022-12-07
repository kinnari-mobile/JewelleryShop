/**
 * @format
 */
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '@icons';
import {useTheme} from '@theme';
import {RootNavigationType} from 'routes/root.navigator';
import {Container} from './styles';

function BackButton() {
  const {t} = useTheme();
  const {goBack} = useNavigation<RootNavigationType>();

  const goToBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <TouchableOpacity onPress={goToBack}>
      <Container>
        <BackIcon height={20} width={20} color={t.colors.white} />
      </Container>
    </TouchableOpacity>
  );
}

export {BackButton};
