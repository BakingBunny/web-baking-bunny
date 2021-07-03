import styled from 'styled-components';

//inheritance
const CircleBtn = styled.button`
  font-size: 1rem;
  margin: 8px;
  padding: 5px 10px;
  justify-self: center;
  border: none;
  border-radius: 1rem;
  outline: 0;
  cursor: pointer;
  background-color: #133853;
  color: #fff;
`;

// components
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 20px;
  height: 100%;

  /* overflow: hidden; */
  /* background: linear-gradient(to left, #0178bd, #368dc5); */
`;

// export const Wrapper = styled.div`
//   height: 100%;
//   /* width: 100%; */
//   margin: 20px;
// `;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  /* z-index: 1; */
  /* overflow: hidden; */
  /* transform: scale(1); */
  /* transform-origin: center center 0px; */
`;

export const CakeName = styled.p`
  /* grid-area: name; */
  font-size: 1.6rem;
  /* align-self: center; */
`;

export const Price = styled.div`
  /* grid-area: price; */
  font-size: 1.1rem;
  margin: 10px 0;
  font-weight: lighter;
  /* justify-self: end;
  align-self: center; */
`;

export const SizeQtyWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'sizetitle qtytitle'
    'sizewrapper qtywrapper';
`;

export const SizeTitle = styled.h2`
  grid-area: sizetitle;
  font-size: 1rem;
  margin: 2px 10px;
  justify-self: center;
`;

export const SizeWrapper = styled.div`
  grid-area: sizewrapper;
  justify-self: center;
  display: flex;
  margin: 2px 10px;
`;

interface SizeBtnProps {
  readonly isSelected: boolean;
}

export const SizeBtn = styled(CircleBtn)<SizeBtnProps>`
  color: ${(props) => (props.isSelected ? '#fff' : 'rgb(160, 154, 154)')};
  scale: ${(props) => (props.isSelected ? '1.2' : '1')};
`;

export const QtyTitle = styled.h2`
  grid-area: qtytitle;
  font-size: 1rem;
  margin: 2px 10px;
  justify-self: center;
`;

export const QtyWrapper = styled.div`
  grid-area: qtywrapper;
  justify-self: center;
  display: flex;
  margin: 2px 10px;
  /* position: relative; */
`;

export const CakeQty = styled.div`
  align-self: center;
  width: 3rem;
  padding: 6px 0;
  text-align: center;
  background-color: #ffebee;
  color: #133853;
`;

export const QtyMinusBtn = styled(CircleBtn)`
  transform: translateX(1.2rem);
`;

export const QtyPlusBtn = styled(CircleBtn)`
  transform: translateX(-1.2rem);
`;

// export const Title = styled.h2`
//   font-size: 2rem;
//   letter-spacing: 7px;
//   text-align: center;
//   margin: 0;
// `;

// export const CardWrapper = styled.div`
//   width: 100%;
//   background: #fff;
//   display: flex;
//   justify-content: center;
//   z-index: 1;
//   flex-wrap: wrap;
// `;

// export const Card = styled(Link)`
//   width: 162px;
//   background: #fff;
//   height: 300px;
//   background-color: #fff;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
//   border-radius: 4px;
//   margin: 20px 8px;
//   /* position: relative; */
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 55% 30% 15%;
//   overflow-y: hidden;
//   text-decoration: none;
// `;

// // export const Card = styled.div`
// //   width: 162px;
// //   background: #fff;
// //   height: 300px;
// //   background-color: #fff;
// //   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
// //   border-radius: 4px;
// //   margin: 20px 8px;
// //   /* position: relative; */
// //   display: grid;
// //   grid-template-columns: 1fr;
// //   grid-template-rows: 55% 30% 15%;
// //   overflow-y: hidden;
// // `;

// export const Detail = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   background: #fff;
//   /* justify-content: center; */
//   align-content: center;
//   padding: 10px 0;
//   color: #000;
//   /* box-shadow: 0 0 0 rgba(0, 0, 0, 0); */
//   /* transform: translateY(117px); */
// `;
// // export const Detail = styled.div`
// //   position: absolute;
// //   width: 100%;
// //   bottom: 0;
// //   background: #fff;
// //   /* box-shadow: 0 0 0 rgba(0, 0, 0, 0); */
// //   transition: all 0.5s ease;
// //   /* transform: translateY(117px); */
// //   transform: translateY(7rem);
// //   display: grid;
// //   grid-row-gap: 5px;
// //   grid-template-columns: 1fr auto;
// //   grid-template-rows: auto;
// //   overflow: hidden;
// //   grid-template-areas:
// //     'name price'
// //     'sizetitle sizes'
// //     'detailbtn detailbtn'
// //     'cartbtn cartbtn';

// //   ${Card}:hover & {
// //     transform: translateY(0);
// //     box-shadow: 0 -5px 15px rgba(0, 0, 0, 0);
// //   }
// // `;

export const AddToCartBtn = styled.button`
  /* grid-area: cartbtn; */
  border: 0;
  background: #133853;
  color: #fff;
  padding: 5px 10px;
  letter-spacing: 2px;
  /* font-size: 1rem; */
  text-transform: uppercase;
  cursor: pointer;
  margin: 20px;
  padding: 15px;
`;
