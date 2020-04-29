import * as React from 'react';
import * as S from './AvatarLabel.styles';

type Props = {
  avatar: React.ReactElement;
  title: string | React.ReactNode;
  labels?: (string | React.ReactNode)[];
};

const AvatarLabel: React.FC<Props> = ({ avatar, title, labels }) => {
  return (
    <S.AvatarLabel>
      <S.Avatar>{avatar}</S.Avatar>
      <S.Description>
        <S.Title withLabels={Boolean(labels?.length)}>{title}</S.Title>
        {labels?.map(
          (label: string | React.ReactNode): React.ReactElement => (
            <S.Label key={label as string}>{label}</S.Label>
          )
        )}
      </S.Description>
    </S.AvatarLabel>
  );
};

export default AvatarLabel;