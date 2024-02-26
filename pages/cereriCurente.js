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
          <SmallContainer bg border key={item.cerereId} m=".5rem 0">
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                {index + 1}
              </H4Custom>
            </Wrapper>
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Ce am nevoie?
              </H4Custom>
              <ParaCustom>{item.caut}</ParaCustom>
            </Wrapper>
            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Contact
              </H4Custom>
              <ParaCustom>{item.contact}</ParaCustom>
            </Wrapper>

            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Nume
              </H4Custom>
              <ParaCustom>{item.numePrenume}</ParaCustom>
            </Wrapper>
            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Suma alocata
              </H4Custom>
              <ParaCustom>{item.sumaAlocata}</ParaCustom>
            </Wrapper>
            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Data adaugarii
              </H4Custom>
              <ParaCustom>{item.currentDate}</ParaCustom>
            </Wrapper>
            <Divider />
            <Wrapper fd="row" ai="flex-start">
              <H4Custom w="35%" ta="start">
                Data limita
              </H4Custom>
              <ParaCustom color="var(--error)">
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

// <h6>Caut: {item.caut}</h6>
// <h6>Cerere id: {item.cerereId}</h6>
// <h6>Char: {item.char}</h6>
// <h6>Contact: {item.contact}</h6>
// <h6>Current date: {item.currentDate}</h6>
// <h6>Current time: {item.currentTime}</h6>
// <h6>Cererea expira: {item.dataLimita}</h6>
// <h6>Nume prenume: {item.numePrenume}</h6>
// <h6>Suma alocata: {item.sumaAlocata}</h6>
