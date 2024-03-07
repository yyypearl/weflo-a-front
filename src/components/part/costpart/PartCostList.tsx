import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';
import { droneListData } from 'src/assets/data/droneListData';

function PartCostList() {
  return (
    <Container>
      <Wrapper>
        <Columns>
          <Column>순위</Column>
          <Column>부품별</Column>
          <Column>주요 모델</Column>
          <Column>누적 사용 개수</Column>
          <Column>부품 단가</Column>
          <Column>누적 투입 비용</Column>
        </Columns>
        {droneListData.length > 0 ? (
          <Drones>
            {droneListData.map((data) => {
              return (
                <Drone key={data.id}>
                  <span>1</span>
                  <span>부품명</span>
                  <span>{data.model}</span>
                  <span>부적사용개수</span>
                  <span>572,000원</span>
                  <Typography
                    variant='h4'
                    fontWeight='bold'
                    color={colors.accent100}
                  >
                    123,000원
                  </Typography>
                </Drone>
              );
            })}
          </Drones>
        ) : (
          <NoData>
            <span>결과 없음</span>
          </NoData>
        )}
      </Wrapper>
    </Container>
  );
}

export { PartCostList };

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: ${colors.basic50};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Columns = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.8fr 1fr 1fr 1fr 1.2fr 1.2fr;
  gap: 12px;
  box-sizing: border-box;
  background: white;
  padding: 20px 35px;
`;

const Column = styled.span`
  display: flex;
  height: 10px;
  align-items: center;
  gap: 8px;
  border-radius: 34px;

  color: ${colors.basic400};

  /* Body/B3/Medium */
  font-size: 14px;
  line-height: 150%; /* 21px */
`;

const Drones = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 15px;
`;

const NoData = styled.div`
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Drone = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  flex-shrink: 0;
  padding: 0px 15px;
  border-radius: 8px;
  border: 1px solid ${colors.basic100};
  background: white;

  display: grid;
  grid-template-columns: 0.8fr 1fr 1fr 1fr 1.2fr 1.2fr;
  gap: 12px;
  cursor: pointer;
  padding: 0px 15px;

  color: ${colors.basic700};

  /* Body/B3/Medium */
  font-size: 14px;
  line-height: 150%; /* 21px */
`;