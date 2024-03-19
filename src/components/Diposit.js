import React from 'react'
import { BlueDiv, BorderDiv, CloseDiv, FlexColDiv, FlexDiv, FlexEnd, FullDiv, GrayDiv, Img, JustifyBetweenDiv, LeftBorderDiv, MainDiv, ParentDiv } from './Diposit/DipositElements'
import { Text, LabelText, NormalText, TitleElement } from './Diposit/TextElements'
import { ButtonElement } from './Diposit/Button'

const Diposit = () => {
    return (

        <ParentDiv>
            <MainDiv>
                <JustifyBetweenDiv>
                    <TitleElement>Diposit ATOM</TitleElement>
                    <CloseDiv>X</CloseDiv>
                </JustifyBetweenDiv>
                <FlexDiv gap={'20px'}>
                    <FlexColDiv >
                        <LabelText>From Cosmos Hub</LabelText>
                        <BlueDiv>
                            <Img width={"30px"} rounded={true} src='https://plus.unsplash.com/premium_photo-1673637205535-9d5f386bfb7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpY3ljbGV8ZW58MHx8MHx8fDA%3D' alt='ProfileImage' />
                            <NormalText>Effbdsfjddddddkf</NormalText>

                        </BlueDiv>

                    </FlexColDiv>
                    <Img width={"15px"} mt={'80px'} src='assets/rightArrow.svg' alt='rightArrow' />
                    <FlexColDiv >
                        <LabelText>To Osmosis</LabelText>

                        <BlueDiv>
                            <Img width={"30px"} rounded={true} src='https://plus.unsplash.com/premium_photo-1673637205535-9d5f386bfb7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpY3ljbGV8ZW58MHx8MHx8fDA%3D' alt='ProfileImage' />
                            <NormalText>Effbdsfjdddddkf</NormalText>
                            <Img width={"15px"} src='assets/pencil.svg' alt='pencilIcon' />



                        </BlueDiv>

                    </FlexColDiv>


                </FlexDiv>
                <JustifyBetweenDiv>
                    <Text size={'20px'} bold={true} >Selected Amount</Text>
                    <FlexDiv gap={'5px'}>
                        <Text size={'15px'}  >Available</Text>
                        <Text size={'15px'} bold={true} >2 ATOM</Text>

                    </FlexDiv>
                </JustifyBetweenDiv>
                <BorderDiv>
                    <Img width={"40px"} mt={'10px'} rounded={true} src='https://plus.unsplash.com/premium_photo-1673637205535-9d5f386bfb7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpY3ljbGV8ZW58MHx8MHx8fDA%3D' alt='ProfileImage' />
                    <LeftBorderDiv>

                        <Text size={'15px'} black={true} bold={true} >2</Text>
                        <FlexDiv>
                            <Text size={'15px'} black={true} bold={true} >ATOM</Text>
                            <Text size={'10px'} black={true}  >&#8776;$1,013</Text>
                        </FlexDiv>

                    </LeftBorderDiv>
                </BorderDiv>

                <FlexEnd gap={'10px'}>
                    <GrayDiv>
                        <Text size={'15px'} bold={true} >Max</Text>
                    </GrayDiv>

                    <GrayDiv>
                        <Text size={'15px'} bold={true} >1/2</Text>
                    </GrayDiv>

                    <GrayDiv>
                        <Text size={'15px'} bold={true} >1/3</Text>
                    </GrayDiv>




                </FlexEnd>

                <FullDiv>
                    <Img width={"15px"} src='assets/timer.svg' alt='clockIcon' />
                    <Text size={'15px'} black={true}  >estimated time : </Text>
                    <Text size={'15px'} black={true} bold={true}  >20 seconds</Text>
                </FullDiv>

                <FlexColDiv mt={'20px'}>
                    <ButtonElement bg={true}>Transfer</ButtonElement>
                    <ButtonElement>Cancel</ButtonElement>

                </FlexColDiv>



            </MainDiv>
        </ParentDiv>
    )
}

export default Diposit