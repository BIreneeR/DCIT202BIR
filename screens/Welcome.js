import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {InnerContainer,PageTitle, SubTitle, StyledFormArea, StyledButton, ButtonText, Line, WelcomeContainer, WelcomeImage, Avatar, WelcomeCard  }from './../components/styles';

const Welcome = ({navigation}) => {

      return (
            <>
              <StatusBar style= "light" />
             <InnerContainer>
               <WelcomeImage resizeMode= "cover" source={require ('./../assets/Img/Img2.png')} />
               <WelcomeContainer >
                   <StyledFormArea>
                     <Avatar resizeMode= "cover" source={require ('./../assets/Img/Img3.png')} />
                      <Line/> 
                        <StyledButton onPress={() => {navigation.navigate('Login')}}>
                            <ButtonText>Logout</ButtonText>
                         </StyledButton>  
                   </StyledFormArea>
             </WelcomeContainer>
          </InnerContainer>
          </>
      );
};

export default Welcome;

