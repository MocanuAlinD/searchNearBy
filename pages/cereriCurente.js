import React from "react";
import {
  Container,
  H4Custom,
  SmallContainer,
  Wrapper,
  ParaCustom,
} from "../components/singleTags/elemetsCustom";
import NoData from "../components/NoData";
import Divider from "../components/tags/Divider";

export const getStaticProps = async () => {
  try {
    const getdata = await fetch("https://madapi.vercel.app/api/cereriCurente");
    const { data } = await getdata.json();
    return {
      props: { data },
      revalidate: 2,
    };
  } catch (error) {
    return {
      props: { data: [] },
      revalidate: 2,
    };
  }
};

const CereriCurente = ({ data }) => {
  if (data.length <= 0 || !data) {
    return <NoData>Nu exista cereri momentan</NoData>;
  }

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <SmallContainer bg border key={item.cerereId} m=".25rem 0">
            <Wrapper fd="row" ai="flex-start">
              <ParaCustom>{index + 1}</ParaCustom>
            </Wrapper>
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Ce am nevoie?
              </H4Custom>
              <ParaCustom fs="var(--fs08)">{item.caut}</ParaCustom>
            </Wrapper>
            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Contact
              </H4Custom>
              <ParaCustom fs="var(--fs08)">{item.contact}</ParaCustom>
            </Wrapper>

            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Nume
              </H4Custom>
              <ParaCustom fs="var(--fs08)">{item.numePrenume}</ParaCustom>
            </Wrapper>
            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Suma alocata
              </H4Custom>
              <ParaCustom fs="var(--fs08)">{item.sumaAlocata}</ParaCustom>
            </Wrapper>
            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Data adaugarii
              </H4Custom>
              <ParaCustom fs="var(--fs08)">{item.currentDate}</ParaCustom>
            </Wrapper>
            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Expira
              </H4Custom>
              <ParaCustom color="var(--error)" fs="var(--fs08)">
                {item.dataLimita.split("-").reverse().join("/")}
              </ParaCustom>
            </Wrapper>
          </SmallContainer>
        );
      })}
    </Container>
  );
};

export default CereriCurente;
