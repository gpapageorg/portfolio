import React from 'react'
import { DescContainer, DescBg, DescLeftContainer, DescRightContainer, DescInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './DescStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../Data/constants';

const DescSection = () => {
    return (
        <div id="about">
            <DescContainer>
                 {/* <DescBg>
                    <DescBgAnimation />
                </DescBg>  */}
                <DescInnerContainer >
                    <DescLeftContainer id="left">
                        <Title>Hi, I am  {Bio.firstName}</Title>
                            {/* <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>  */}
                        <SubTitle>{Bio.description}</SubTitle>
                         {/* <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>  */}
                    </DescLeftContainer>


                </DescInnerContainer>

            </DescContainer>
        </div> 
    )
}

export default DescSection