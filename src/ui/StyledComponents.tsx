import {Pressable} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #ffffff;
`;
export const HomeHeader = styled.View`
  height: 230px;
  background: #2b4ba1;
`;
export const H1 = styled.Text`
  font-size: 30px;
  color: #000000;
`;
export const H2 = styled.Text`
  font-size: 26px;
`;
export const H3 = styled.Text`
  font-size: 20px;
`;
export const H4 = styled.Text`
  font-size: 18px;
`;
export const B1 = styled.Text`
  font-size: 16px;
`;
export const B2 = styled.Text`
  font-size: 14px;
`;
export const Label = styled.Text`
  font-size: 12px;
`;
export const SearchBar = styled.TextInput`
  width: 90%;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
  color: #ffffff;
  border-radius: 30px;
`;
export const FlexBetweenContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FlexColBetweenContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
export const Box = styled.View`
  display: flex;
  flex-direction: column;
`;
export const RowBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 2px;
`;
export const OfferCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  width: 220px;
  align-items: center;
`;
export const ScrollView = styled.ScrollView`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex: 1;
`;

export const ProductCardContainer = styled(({index, ...rest}) => (
  <Pressable {...rest} />
))`
  width: 170px;
  height: 200px;
  padding: 20px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;

  ${props =>
    props.index % 2 === 1 &&
    css`
      margin-left: 20px;
    `}
`;
export const FlexWrapContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;

export const Button = styled.Pressable`
  background: #2b4ba1;
  border-radius: 30px;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BorderButton = styled.Pressable`
  border: 1px solid #2b4ba1;
  border-radius: 30px;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

