import React from 'react'
import { DescContainer, DescLeftContainer, DescInnerContainer,Title, SubTitle } from './DescStyle'
import { Bio } from '../../Data/constants';

const DescSection = () => {
    return (
        <div id="about">
            <DescContainer>
                <DescInnerContainer >
                    <DescLeftContainer id="left">
                        <Title>Hi, I am  {Bio.firstName}</Title>

                        <SubTitle>{Bio.description}</SubTitle>
                         {/* <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>  */}
                    </DescLeftContainer>


                </DescInnerContainer>

            </DescContainer>
        </div> 
    )
}

export default DescSection