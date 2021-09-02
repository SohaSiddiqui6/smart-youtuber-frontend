import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { withRouter } from "react-router-dom";
import { ReactComponent as SvgDecoratorBlob1 } from "../../assets/images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../assets/images/design-illustration-2.svg";
import { PrimaryButton } from "../misc/Buttons";
import SmartYoutuberHeader from "../headers/SmartYoutuberHeader";

import { AuthContext } from "../../Authentication/state/Auth";
import { Redirect } from "react-router-dom";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left bottom-20`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end bottom-20`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

const LandingPage: React.FC<any> = ({ history }) => {
  const authenticate = async () => {
    history.push("/app");
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/app" />;
  }
  return (
    <>
      <SmartYoutuberHeader roundedHeaderButton={false} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Where <span className="text-purple-700">highschool</span> and{" "}
              <span className="text-purple-700">College</span> comes together.
            </Heading>
            <Paragraph>
              Unigow is a platform that helps second year high school students
              find their ideal career. For this, we have created a great
              community of help between university students and high school
              students.
            </Paragraph>
            <PrimaryButton onClick={authenticate}>
              Login With Google
            </PrimaryButton>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        {/*<DecoratorBlob1 />*/}
      </Container>
    </>
  );
};

export default withRouter(LandingPage);
